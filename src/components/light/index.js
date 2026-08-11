export function createLightEditor(options) {
    return `
    <div class="forge-editor forge-editor--light">
      <div
        class="forge-editor__content"
        contenteditable="true"
        data-placeholder="${options.placeholder}"
      ></div>
    </div>
  `
}
