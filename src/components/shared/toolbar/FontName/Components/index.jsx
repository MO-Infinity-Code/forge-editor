import { FontNameToolbar } from "./FontNameToolbar"
import { useFontNameToolbar } from "../Hooks/fontNameLogic"

export function CreateFontNameToolbar({ editorRef }) {
    const logic = useFontNameToolbar(editorRef)
    return <FontNameToolbar logic={logic} />
}
