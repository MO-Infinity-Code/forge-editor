import { CreateStyleToolbar } from "../Style/Components"
import { CreateFontToolbar } from "../font/Components"
import { CreateFontNameToolbar } from "../FontName/Components"
import { CreateColorToolbar } from "../Color/Components"
import { CreateParagraphToolbar } from "../Paragraph/Components"
// import { CreateTableToolbar } from "../table.jsx"
import { CreateInsertToolbar } from "../Insert/Components"
// import { CreateViewToolbar } from "../view.jsx"

export function Toolbar() {
    return (
        <div
            className="forge-editor__toolbar"
            role="toolbar">
            <CreateStyleToolbar />
            <CreateFontToolbar />
            <CreateFontNameToolbar />
            <CreateColorToolbar />
            <CreateParagraphToolbar />
            {/* <CreateTableToolbar /> */}
            <CreateInsertToolbar />
            {/* <CreateViewToolbar /> */}
        </div>
    )
}
