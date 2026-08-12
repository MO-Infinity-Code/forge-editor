import { CreateStyleToolbar } from "../Style/Components"
import { CreateFontToolbar } from "../font/Components"
// import { CreateFontNameToolbar } from "../fontname.jsx"
import { CreateColorToolbar } from "../Color"
// import { CreateParagraphToolbar } from "../paragraph.jsx"
// import { CreateTableToolbar } from "../table.jsx"
// import { CreateInsertToolbar } from "../insert.jsx"
// import { CreateViewToolbar } from "../view.jsx"

export function Toolbar() {
    return (
        <div
            className="forge-editor__toolbar"
            role="toolbar">
            <CreateStyleToolbar />
            <CreateFontToolbar />
            {/* <CreateFontNameToolbar /> */}
            <CreateColorToolbar />
            {/* <CreateParagraphToolbar />
            <CreateTableToolbar />
            <CreateInsertToolbar />
            <CreateViewToolbar /> */}
        </div>
    )
}
