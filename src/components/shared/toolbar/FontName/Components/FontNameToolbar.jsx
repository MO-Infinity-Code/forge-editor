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
        <div className="forge-toolbar-group forge-toolbar-fontname">
            <button
                ref={dropdownBtnRef}
                type="button"
                className="forge-toolbar-button forge-fontname-button"
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
                className="forge-toolbar-dropdown forge-dropdown-fontname"
                role="list"
                aria-label="Font Family">
                {FONTS.map((font) => (
                    <a
                        key={font}
                        className="forge-dropdown-item"
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
