/**
 * Zack – Dump Form structure to the active Spreadsheet
 *  - Captures: Section, Q#, Type, Title, Option/Row, Column (for grid)
 *  - Re-run anytime; it wipes & rewrites the 'FormQuestions' tab
 * https://docs.google.com/forms/d/16ZmP_RK1B7ynP-jsctTEAUUVOwnx9m_qqYz5abmFyyA/edit
 */
function exportFormQuestions() {
  const FORM_ID = '16ZmP_RK1B7ynP-jsctTEAUUVOwnx9m_qqYz5abmFyyA';

  /* 1. Open the Form */
  const form  = FormApp.openById(FORM_ID);
  const items = form.getItems();

  /* 2. Prepare target sheet */
  const ss = SpreadsheetApp.getActive();
  const sh = ss.getSheetByName('FormQuestions') || ss.insertSheet('FormQuestions');
  sh.clear();
  sh.appendRow(['Section','Q#','Type','Question Title','Option / Row','Column (grid)']);

  /* 3. Walk through items */
  let section = '—', qIndex = 0;

  items.forEach(item => {
    const type = item.getType();

    /* Section headers */
    if (type === FormApp.ItemType.PAGE_BREAK) {
      section = item.asPageBreakItem().getTitle() || 'Untitled Section';
      return;
    }

    qIndex++;
    const title = item.getTitle();

    /* Choice-based single-column questions */
    if ([
         FormApp.ItemType.MULTIPLE_CHOICE,
         FormApp.ItemType.CHECKBOX,
         FormApp.ItemType.LIST
        ].includes(type)) {

      const choices = (type === FormApp.ItemType.MULTIPLE_CHOICE)
                        ? item.asMultipleChoiceItem().getChoices()
                        : (type === FormApp.ItemType.CHECKBOX)
                          ? item.asCheckboxItem().getChoices()
                          : item.asListItem().getChoices();      // LIST

      choices.forEach(c =>
        sh.appendRow([section, qIndex, type, title, c.getValue(), '—'])
      );

    /* Grid questions (row × column) */
    } else if (type === FormApp.ItemType.CHECKBOX_GRID ||
               type === FormApp.ItemType.GRID) {

      const grid = (type === FormApp.ItemType.CHECKBOX_GRID)
                     ? item.asCheckboxGridItem()
                     : item.asGridItem();

      grid.getRows().forEach(r =>
        grid.getColumns().forEach(c =>
          sh.appendRow([section, qIndex, type, title, r, c])
        )
      );

    /* All other item types */
    } else {
      sh.appendRow([section, qIndex, type, title, '—', '—']);
    }
  });

  SpreadsheetApp.getUi().alert('✅ Form questions exported!');
}