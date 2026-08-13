import { ImagePopover } from "./ImagePopover"
import { useImagePopover } from "../Hooks/useImagePopover"

export function CreateImagePopover() {
    const logic = useImagePopover()
    return <ImagePopover {...logic} />
}
