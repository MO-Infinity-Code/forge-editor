import { useRef, useEffect, useState } from "preact/hooks"

const MAX_SIZE = 10

export function TableToolbar({ logic }) {
    const { insertTable } = logic
    const [rows, setRows] = useState(1)
    const [cols, setCols] = useState(1)
    const [isOpen, setIsOpen] = useState(false)
    const dropdownBtnRef = useRef(null)
    const dropdownRef = useRef(null)
    const pickerRef = useRef(null)

    useEffect(() => {
        if (!isOpen) return

        function handleClickOutside(e) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target) &&
                dropdownBtnRef.current &&
                !dropdownBtnRef.current.contains(e.target)
            ) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [isOpen])

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
        setIsOpen(false)
        setRows(1)
        setCols(1)
    }

    const highlightWidth = (cols / MAX_SIZE) * 100
    const highlightHeight = (rows / MAX_SIZE) * 100

    return (
        <div className="forge-toolbar-group forge-toolbar-table flex items-center gap-0.5">
            <button
                ref={dropdownBtnRef}
                type="button"
                className="forge-toolbar-button group relative flex h-7 cursor-pointer items-center justify-center rounded-[2px] border border-[#ccc] bg-white px-2 text-sm leading-none transition-all duration-150 hover:bg-[#f0f0f0] active:translate-y-px"
                aria-label="Table"
                onClick={() => setIsOpen(!isOpen)}>
                <span className="forge-toolbar-icon">▦</span>
                <span
                    className="forge-tooltip pointer-events-none invisible absolute left-1/2 top-[calc(100%+8px)] -translate-x-1/2 whitespace-nowrap rounded-[2px] border border-[#333] bg-[#ffffe1] px-2 py-0.5 text-[13px] leading-[1.6] text-black opacity-0 shadow-[1px_1px_3px_rgba(0,0,0,0.3)] transition-opacity duration-150 group-hover:visible group-hover:opacity-100"
                    data-i18n="table">
                    Table
                </span>
            </button>

            <div
                ref={dropdownRef}
                className={`forge-toolbar-dropdown forge-dropdown-table absolute left-0 top-full z-10 min-w-[160px] rounded-[3px] border border-[#ccc] bg-white p-2 shadow-[0_2px_6px_rgba(0,0,0,0.15)] rtl:left-auto rtl:right-0 ${
                    isOpen ? "block" : "hidden"
                }`}
                role="list"
                aria-label="Insert table">
                <div
                    ref={pickerRef}
                    className="note-dimension-picker relative mx-auto h-40 w-40 cursor-pointer overflow-hidden rounded-[3px] border border-[#ccc] bg-[#f5f5f5]"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleClick}>
                    <div className="absolute inset-0 z-[5]" />
                    <div
                        className="pointer-events-none absolute left-0 top-0 z-[3] border-2 border-[#4a90d9] bg-[rgba(74,144,217,0.4)] transition-[width,height] duration-75 ease-in-out"
                        style={{
                            width: highlightWidth + "%",
                            height: highlightHeight + "%"
                        }}
                    />
                    <div className="pointer-events-none absolute inset-0 z-[2] bg-white/30" />
                    <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:16px_16px]" />
                </div>
                <div className="note-dimension-display px-0 pt-1.5 pb-0.5 text-center text-[13px] font-semibold text-[#333]">
                    {rows} x {cols}
                </div>
            </div>
        </div>
    )
}
