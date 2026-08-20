import { useRef, useEffect } from "preact/hooks"
import { bindDropdownToggle } from "../../Hooks/dropdown"

const FONTS = [
    "Arial",
    "Arial Black",
    "Comic Sans MS",
    "Courier New",
    "Helvetica",
    "Impact",
    "Tahoma",
    "Times New Roman",
    "Verdana",
    "Nunito Sans",
    "Segoe UI"
]

export function FontNameToolbar({ logic }) {
    const { currentFont, applyFont } = logic
    const dropdownBtnRef = useRef(null)
    const dropdownRef = useRef(null)

    useEffect(() => {
        if (dropdownBtnRef.current && dropdownRef.current) {
            const destroy = bindDropdownToggle(dropdownBtnRef.current, dropdownRef.current)
            return destroy
        }
    }, [])

    const handleFontSelect = (font) => {
        applyFont(font)
        if (dropdownRef.current) {
            dropdownRef.current.classList.remove("is-open")
        }
        if (dropdownBtnRef.current) {
            dropdownBtnRef.current.classList.remove("is-active")
        }
    }

    return (
        <div className="forge-toolbar-group forge-toolbar-fontname relative flex items-center">
            <button
                ref={dropdownBtnRef}
                type="button"
                className="forge-toolbar-button forge-fontname-button group relative flex h-[30px] items-center justify-between gap-2 rounded border border-[#ccc] bg-white px-2.5 text-xs hover:border-[#aaa] hover:bg-[#f9f9f9]"
                aria-label="Font Family">
                <span className="forge-current-fontname truncate max-w-[80px]">
                    {currentFont || "Arial"}
                </span>
                <span className="text-[8px] opacity-60">▼</span>

                <span
                    className="forge-tooltip pointer-events-none absolute left-1/2 top-full z-30 mt-1 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-[10px] text-white opacity-0 transition-opacity group-hover:opacity-100"
                    data-i18n="fontFamily">
                    Font Family
                </span>
            </button>

            <div
                ref={dropdownRef}
                className="forge-toolbar-dropdown forge-dropdown-fontname absolute left-0 top-full z-20 hidden max-h-[180px] w-[140px] overflow-y-auto rounded border border-[#ccc] bg-white p-0 shadow-md rtl:left-auto rtl:right-0 [&.is-open]:block"
                role="list"
                aria-label="Font Family">
                {FONTS.map((font) => (
                    <button
                        key={font}
                        type="button"
                        className="forge-dropdown-item block w-full text-left px-3 py-1.5 text-xs text-[#333] hover:bg-[#007bff] hover:text-white transition-colors cursor-pointer"
                        role="listitem"
                        style={{ fontFamily: font }}
                        onMouseDown={(e) => {
                            e.preventDefault()
                            handleFontSelect(font)
                        }}>
                        {font}
                    </button>
                ))}
            </div>
        </div>
    )
}
