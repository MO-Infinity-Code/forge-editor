import { ViewToolbar } from "./ViewToolbar"
import { useViewToolbar } from "../Hooks/viewLogic"

export function CreateViewToolbar() {
    const logic = useViewToolbar()
    return <ViewToolbar logic={logic} />
}
