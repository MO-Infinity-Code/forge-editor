export function createParagraphToolbar() {
    return `
    <div class="forge-toolbar-group forge-toolbar-paragraph">
      <button type="button" class="forge-toolbar-button" data-command="insertUnorderedList" aria-label="Unordered list">••</button>
      <button type="button" class="forge-toolbar-button" data-command="insertOrderedList" aria-label="Ordered list">1.</button>
      <button type="button" class="forge-toolbar-button" data-command="paragraph" aria-label="Paragraph">≡</button>
      <div class="forge-toolbar-dropdown forge-dropdown-paragraph" role="list">
        <div class="forge-toolbar-group forge-toolbar-align">
          <button type="button" class="forge-toolbar-button" data-command="justifyLeft" aria-label="Align left">←</button>
          <button type="button" class="forge-toolbar-button" data-command="justifyCenter" aria-label="Align center">↔</button>
          <button type="button" class="forge-toolbar-button" data-command="justifyRight" aria-label="Align right">→</button>
          <button type="button" class="forge-toolbar-button" data-command="justifyFull" aria-label="Justify">☰</button>
        </div>
        <div class="forge-toolbar-group forge-toolbar-list">
          <button type="button" class="forge-toolbar-button" data-command="outdent" aria-label="Outdent">←</button>
          <button type="button" class="forge-toolbar-button" data-command="indent" aria-label="Indent">→</button>
        </div>
      </div>
    </div>
  `
}
