import { TableToolbar } from "./TableToolbar"
import { useTableToolbar } from "../Hooks/tableLogic"

export function CreateTableToolbar() {
    const logic = useTableToolbar()
    return <TableToolbar logic={logic} />
}
