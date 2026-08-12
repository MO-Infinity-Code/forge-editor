import { FontToolbar } from "./FontToolbar"
import { useFontToolbar } from "../Hooks/fontLogic"

export function CreateFontToolbar() {
    const { executeCommand } = useFontToolbar()
    return <FontToolbar onCommand={executeCommand} />
}
