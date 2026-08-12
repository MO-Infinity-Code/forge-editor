import { useColorToolbar } from "./colorLogic"
import { ColorToolbar } from "./ColorToolbar"

export function CreateColorToolbar() {
    const logic = useColorToolbar()
    return <ColorToolbar logic={logic} />
}
