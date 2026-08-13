import { ParagraphToolbar } from "./ParagraphToolbar"
import { useParagraphToolbar } from "../Hooks/paragraphLogic"

export function CreateParagraphToolbar() {
    const logic = useParagraphToolbar()
    return <ParagraphToolbar logic={logic} />
}
