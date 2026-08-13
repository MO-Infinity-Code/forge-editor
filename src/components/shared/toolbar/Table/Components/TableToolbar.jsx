import { useRef, useEffect, useState } from "preact/hooks"
import { bindDropdownToggle } from "../../Hooks/dropdown"

const MAX_SIZE = 10

export function TableToolbar({ logic }) {
    const { insertTable } = logic
    const [rows, setRows] = useState(1)
    const [cols, setCols] = useState(1)
    const dropdownBtnRef = useRef(null)
    const dropdownRef = useRef(null)
    const pickerRef = useRef(null)

    useEffect(() => {
        if (dropdownBtnRef.current && dropdownRef.current) {
            const destroy = bindDropdownToggle(dropdownBtnRef.current, dropdownRef.current)
            return destroy
        }
    }, [])

    const handleMouseMove = (e) => {
        if (!pickerRef.current) return
        const rect = pickerRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const cellSize = rect.width / MAX_SIZE
        const col = Math.min(Math.floor(x / cellSize) + 1, MAX_SIZE)
        const row = Math.min(Math.floor(y / cellSize) + 1, MAX_SIZE)
        setCols(col)
        setRows(row)
    }

    const handleMouseLeave = () => {
        setRows(1)
        setCols(1)
    }

    const handleClick = () => {
        insertTable(rows, cols)
        if (dropdownRef.current) {
            dropdownRef.current.classList.remove("is-open")
        }
        if (dropdownBtnRef.current) {
            dropdownBtnRef.current.classList.remove("is-active")
        }
        setRows(1)
        setCols(1)
    }

    const highlightWidth = (cols / MAX_SIZE) * 100
    const highlightHeight = (rows / MAX_SIZE) * 100

    return (
        <div className="forge-toolbar-group forge-toolbar-table">
            <button
                ref={dropdownBtnRef}
                type="button"
                className="forge-toolbar-button"
                aria-label="Table">
                <span className="forge-toolbar-icon">▦</span>
                <span
                    className="forge-tooltip"
                    data-i18n="table">
                    Table
                </span>
            </button>
            <div
                ref={dropdownRef}
                className="forge-toolbar-dropdown forge-dropdown-table"
                role="list"
                aria-label="Insert table">
                <div
                    ref={pickerRef}
                    className="note-dimension-picker"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleClick}>
                    <div className="note-dimension-picker-mousecatcher" />
                    <div
                        className="note-dimension-picker-highlighted"
                        style={{
                            width: highlightWidth + "%",
                            height: highlightHeight + "%"
                        }}
                    />
                    <div className="note-dimension-picker-unhighlighted" />
                </div>
                <div className="note-dimension-display">
                    {rows} x {cols}
                </div>
            </div>
        </div>
    )
}
