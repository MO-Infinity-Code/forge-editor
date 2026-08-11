import { createStyleToolbar } from "./style.js"
import { createFontToolbar } from "./font.js"
import { createFontNameToolbar } from "./fontname.js"
import { createColorToolbar } from "./color.js"
import { createParagraphToolbar } from "./paragraph.js"
import { createTableToolbar } from "./table.js"
import { createInsertToolbar } from "./insert.js"
import { createViewToolbar } from "./view.js"

export function createToolbar() {
    return `
    <div class="forge-editor__toolbar" role="toolbar">
      ${createStyleToolbar()}
      ${createFontToolbar()}
      ${createFontNameToolbar()}
      ${createColorToolbar()}
      ${createParagraphToolbar()}
      ${createTableToolbar()}
      ${createInsertToolbar()}
      ${createViewToolbar()}
    </div>
  `
}
