export function createFontToolbar() {
    return `
    <div class="forge-toolbar-group forge-toolbar-font">
      <button type="button" class="forge-toolbar-button forge-btn-bold" data-command="bold" aria-label="Bold">
        <strong>B</strong>
      </button>
      <button type="button" class="forge-toolbar-button forge-btn-underline" data-command="underline" aria-label="Underline">
        <u>U</u>
      </button>
      <button type="button" class="forge-toolbar-button" data-command="removeFormat" aria-label="Remove Font Style">
        <span>⌫</span>
      </button>
    </div>
  `
}
