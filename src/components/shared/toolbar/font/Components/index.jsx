import { FontToolbar } from "./FontToolbar"
import { useFontToolbar } from "../Hooks/fontLogic"

export function CreateFontToolbar() {
    const { executeCommand, isBold, isUnderline } = useFontToolbar()

    return (
        <FontToolbar
            onCommand={executeCommand}
            isBold={isBold}
            isUnderline={isUnderline}
        />
    )
}
