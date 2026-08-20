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

    const activeFont = currentFont || "Arial"

    return (
        <div className="forge-toolbar-group forge-toolbar-fontname relative flex items-center">
            <div
                ref={dropdownBtnRef}
                className="forge-fontname-button-group flex h-[30px] items-center overflow-visible rounded border border-[#ccc] bg-white hover:border-[#aaa] hover:bg-[#f9f9f9] cursor-pointer">
                {/* عرض الخط الحالي */}
                <div
                    className="forge-fontname-main flex h-full items-center justify-center min-w-[60px] px-2 select-none"
                    onMouseDown={(e) => e.preventDefault()}>
                    <span
                        className="forge-current-fontname truncate max-w-[75px] text-xs font-medium"
                        style={{ fontFamily: activeFont }}>
                        {activeFont}
                    </span>
                </div>

                {/* زر السهم لتغيير القائمة */}
                <div
                    className="forge-fontname-dropdown-btn flex h-full items-center justify-center min-w-[18px] border-l border-[#ccc] px-1 text-[8px] text-[#666]"
                    onMouseDown={(e) => e.preventDefault()}>
                    ▼
                </div>
            </div>

            {/* القائمة المنسدلة لاختيار الخط فوراً */}
            <div
                ref={dropdownRef}
                className="forge-toolbar-dropdown forge-dropdown-fontname absolute left-0 top-full z-20 hidden mt-1 max-h-[180px] w-[140px] overflow-y-auto rounded border border-[#ccc] bg-white p-0 shadow-md rtl:left-auto rtl:right-0 [&.is-open]:block"
                role="list"
                aria-label="Font Family">
                {FONTS.map((font) => (
                    <button
                        key={font}
                        type="button"
                        className={`forge-dropdown-item block w-full text-left px-3 py-1.5 text-xs text-[#333] hover:bg-[#007bff] hover:text-white transition-colors cursor-pointer ${
                            activeFont === font ? "bg-[#f0f0f0] font-bold" : ""
                        }`}
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
