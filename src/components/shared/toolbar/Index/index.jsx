import { CreateStyleToolbar } from "../Style/Components"
import { CreateFontToolbar } from "../font/Components"
import { CreateFontNameToolbar } from "../FontName/Components"
import { CreateColorToolbar } from "../Color/Components"
import { CreateParagraphToolbar } from "../Paragraph/Components"
import { CreateTableToolbar } from "../Table/Components"
import { CreateInsertToolbar } from "../Insert/Components"
import { CreateViewToolbar } from "../View/Components"

export function Toolbar({ editorRef }) {
    return (
        <div
            className="forge-editor__toolbar sticky top-0 z-10 m-0 flex flex-shrink-0 flex-wrap items-center gap-[4px] rounded-t-[3px] border-b border-[#ddd] bg-[#f5f5f5] p-[5px] text-[#333]"
            role="toolbar">
            <CreateStyleToolbar />
            <CreateFontToolbar />
            <CreateFontNameToolbar editorRef={editorRef} />
            <CreateColorToolbar />
            <CreateParagraphToolbar />
            <CreateTableToolbar />
            {/* <CreateInsertToolbar />
                <CreateViewToolbar /> */}
        </div>
    )
}
