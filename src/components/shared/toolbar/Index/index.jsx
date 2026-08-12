import { CreateStyleToolbar } from "../Style/index.jsx"
// import { CreateFontToolbar } from "../font.jsx"
// import { CreateFontNameToolbar } from "../fontname.jsx"
// import { CreateColorToolbar } from "../color.jsx"
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
            {/* <CreateFontToolbar />
            <CreateFontNameToolbar />
            <CreateColorToolbar />
            <CreateParagraphToolbar />
            <CreateTableToolbar />
            <CreateInsertToolbar />
            <CreateViewToolbar /> */}
        </div>
    )
}
