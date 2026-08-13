import { FontNameToolbar } from "./FontNameToolbar"
import { useFontNameToolbar } from "../Hooks/fontNameLogic"

export function CreateFontNameToolbar() {
    const logic = useFontNameToolbar()
    return <FontNameToolbar logic={logic} />
}
