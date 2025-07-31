
function getSelectedText() {
  const selection = DocumentApp.getActiveDocument().getSelection();
  if (!selection) {
    return "Tidak ada teks yang dipilih.";
  }

  let text = "";
  const elements = selection.getRangeElements();

  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    if (el.getElement().editAsText) {
      const elementText = el.getElement().asText().getText();
      const start = el.getStartOffset();
      const end = el.getEndOffsetInclusive();
      text += elementText.substring(start, end + 1) + "\n";
    }
  }

  return text.trim() || "Tidak ada teks yang bisa dibaca.";
}

function replaceTextInDocument(findText, replaceText) {
  const body = DocumentApp.getActiveDocument().getBody();
  const foundElements = [];
  let count = 0;

  let searchResult = body.findText(findText);
  while (searchResult !== null) {
    const textElement = searchResult.getElement().asText();
    const startOffset = searchResult.getStartOffset();
    const endOffset = searchResult.getEndOffsetInclusive();

    // Ganti teks dalam elemen
    textElement.deleteText(startOffset, endOffset);
    textElement.insertText(startOffset, replaceText);

    count++;

    searchResult = body.findText(findText, searchResult);
  }

  return count;
}