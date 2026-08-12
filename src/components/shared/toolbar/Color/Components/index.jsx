import { ColorToolbar } from "./ColorToolbar"
import { useColorToolbar } from "../Hooks/colorLogic"

export function CreateColorToolbar() {
    console.log("[CreateColorToolbar] Rendering ColorToolbar")
    const logic = useColorToolbar()
    return <ColorToolbar logic={logic} />
}
