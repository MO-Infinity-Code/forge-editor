import { createStyleToolbar } from "../shared/toolbar/style.js"
import { createFontToolbar } from "../shared/toolbar/font.js"
import { createFontNameToolbar } from "../shared/toolbar/fontname.js"
import { createColorToolbar } from "../shared/toolbar/color.js"
import { createParagraphToolbar } from "../shared/toolbar/paragraph.js"
import { createTableToolbar } from "../shared/toolbar/table.js"
import { createInsertToolbar } from "../shared/toolbar/insert.js"
import { createViewToolbar } from "../shared/toolbar/view.js"

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
