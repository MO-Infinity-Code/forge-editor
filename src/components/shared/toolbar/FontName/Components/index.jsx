import { useFontNameToolbar } from "../Hooks/fontNameLogic"
import { FontNameToolbar } from "./FontNameToolbar"

export function CreateFontNameToolbar({ editorRef }) {
    const { currentFont, applyFont } = useFontNameToolbar(editorRef)

    return (
        <FontNameToolbar
            currentFont={currentFont}
            applyFont={applyFont}
        />
    )
}
