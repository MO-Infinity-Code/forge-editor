import { createToolbar } from "../shared/toolbar/index.js"

export function createLightEditor(options) {
    return `
    <div class="forge-editor forge-editor--light">
      ${createToolbar()}
      <div
        class="forge-editor__content"
        contenteditable="true"
        data-placeholder="${options.placeholder}"
      ></div>
    </div>
  `
}
