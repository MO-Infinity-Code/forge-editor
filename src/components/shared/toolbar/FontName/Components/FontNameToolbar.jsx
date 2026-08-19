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
        <div className="forge-toolbar-group forge-toolbar-fontname relative">
            <style>{`
        .forge-toolbar-dropdown.forge-dropdown-fontname {
          display: none !important;
        }
        .forge-toolbar-dropdown.forge-dropdown-fontname.is-open {
          display: block !important;
        }
      `}</style>

            <button
                ref={dropdownBtnRef}
                type="button"
                className="forge-toolbar-button forge-fontname-button min-w-[80px] text-left"
                aria-label="Font Family">
                <span className="forge-current-fontname">{currentFont}</span>
                <span
                    className="forge-tooltip"
                    data-i18n="fontFamily">
                    Font Family
                </span>
            </button>

            <div
                ref={dropdownRef}
                className="forge-toolbar-dropdown forge-dropdown-fontname absolute left-0 top-full z-10 max-h-[100px] min-w-[120px] overflow-y-auto overflow-x-hidden border border-[#ccc] bg-white p-0 rtl:left-auto rtl:right-0"
                role="list"
                aria-label="Font Family">
                {FONTS.map((font) => (
                    <a
                        key={font}
                        className="forge-dropdown-item box-border block h-[30px] whitespace-nowrap border-b border-[#f0f0f0] px-3 py-2 leading-[14px] text-[#333] no-underline last:border-b-0"
                        href="#"
                        data-value={font}
                        role="listitem"
                        style={{ fontFamily: font }}
                        onClick={(e) => {
                            e.preventDefault()
                            handleFontSelect(font)
                        }}>
                        {font}
                    </a>
                ))}
            </div>
        </div>
    )
}
