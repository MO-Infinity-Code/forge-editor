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

const ITEM_HEIGHT = 32
const VISIBLE_ITEMS = 4

export function FontNameToolbar({ currentFont, applyFont }) {
    const dropdownBtnRef = useRef(null)
    const dropdownRef = useRef(null)

    useEffect(() => {
        if (dropdownBtnRef.current && dropdownRef.current) {
            const destroy = bindDropdownToggle(dropdownBtnRef.current, dropdownRef.current)
            return destroy
        }
    }, [])

    const handleSelect = (font) => {
        applyFont(font)
        if (dropdownRef.current) dropdownRef.current.classList.remove("is-open")
        if (dropdownBtnRef.current) dropdownBtnRef.current.classList.remove("is-active")
    }

    const tooltipClass =
        "pointer-events-none absolute left-1/2 top-[calc(100%+8px)] z-30 -translate-x-1/2 whitespace-nowrap rounded-md border border-[#2c2c2c] bg-[#1e1e1e] px-2.5 py-1 text-[11px] font-medium leading-none text-white opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100 rtl:left-1/2 rtl:-translate-x-1/2 before:absolute before:bottom-full before:left-1/2 before:-translate-x-1/2 before:border-x-[5px] before:border-b-[5px] before:border-t-0 before:border-solid before:border-x-transparent before:border-b-[#2c2c2c] after:absolute after:bottom-full after:left-1/2 after:-translate-x-1/2 after:translate-y-[1px] after:border-x-[4px] after:border-b-[4px] after:border-t-0 after:border-solid after:border-x-transparent after:border-b-[#1e1e1e]"

    const ArrowIcon = () => (
        <svg
            className="h-2 w-2 fill-current text-[#666]"
            viewBox="0 0 10 6"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0l5 6 5-6H0z" />
        </svg>
    )

    return (
        <div className="forge-toolbar-group forge-toolbar-fontname relative flex shrink-0 items-center">
            <div className="forge-color-button-group flex h-[30px] items-center overflow-visible rounded border border-[#ccc] bg-white hover:border-[#aaa] hover:bg-[#f9f9f9]">
                <button
                    type="button"
                    className="forge-fontname-main group relative flex h-full w-[70px] shrink-0 items-center justify-center cursor-pointer border-none bg-transparent px-2 hover:bg-black/5"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => {
                        if (dropdownBtnRef.current) dropdownBtnRef.current.click()
                    }}
                    aria-label="Current font">
                    <span
                        className="forge-current-fontname inline-block max-w-[50px] truncate text-xs text-[#333]"
                        style={{ fontFamily: currentFont }}>
                        {currentFont}
                    </span>
                    <span
                        className={tooltipClass}
                        data-i18n="fontName">
                        Font Family
                    </span>
                </button>

                <button
                    ref={dropdownBtnRef}
                    type="button"
                    className="forge-fontname-dropdown-btn group relative flex h-full shrink-0 items-center justify-center min-w-[18px] cursor-pointer border-l border-[#ccc] bg-transparent px-1 hover:bg-black/5"
                    onMouseDown={(e) => e.preventDefault()}
                    aria-label="More fonts">
                    <ArrowIcon />
                    <span
                        className={tooltipClass}
                        data-i18n="moreFont">
                        More Fonts
                    </span>
                </button>
            </div>

            <div
                ref={dropdownRef}
                className="forge-toolbar-dropdown forge-dropdown-fontname absolute left-0 top-full z-20 hidden mt-1 min-w-[150px] overflow-y-auto rounded border border-[#ccc] bg-white p-1 shadow-md rtl:left-auto rtl:right-0 [&.is-open]:block"
                style={{ maxHeight: `${ITEM_HEIGHT * VISIBLE_ITEMS}px` }}>
                {FONTS.map((font) => (
                    <button
                        key={font}
                        type="button"
                        className="forge-dropdown-item flex w-full cursor-pointer items-center whitespace-nowrap rounded-sm px-2 text-left text-xs text-[#333] hover:bg-[#f0f0f0]"
                        style={{ fontFamily: font, height: `${ITEM_HEIGHT}px` }}
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => handleSelect(font)}>
                        {font}
                    </button>
                ))}
            </div>
        </div>
    )
}
