import { InsertToolbar } from "./InsertToolbar"
import { useInsertToolbar } from "../Hooks/insertLogic"

export function CreateInsertToolbar() {
    const logic = useInsertToolbar()
    return <InsertToolbar logic={logic} />
}
