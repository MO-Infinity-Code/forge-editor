import { ColorToolbar } from "./ColorToolbar"
import { useColorToolbar } from "../Hooks/colorLogic"

export function CreateColorToolbar() {
    const logic = useColorToolbar()
    return <ColorToolbar logic={logic} />
}
