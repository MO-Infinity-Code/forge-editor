import { useRef, useEffect } from "preact/hooks"
import { ColorPalette } from "./colorPalette"
import { bindDropdownToggle } from "../../Hooks/dropdown"

export function ColorToolbar({ logic }) {
    const { applyColor, applyRecentColor, resetColor, recentForeColor, recentBackColor } = logic

    const foreDropdownBtnRef = useRef(null)
    const foreDropdownRef = useRef(null)
    const backDropdownBtnRef = useRef(null)
    const backDropdownRef = useRef(null)

    useEffect(() => {
        if (foreDropdownBtnRef.current && foreDropdownRef.current) {
            const destroy = bindDropdownToggle(foreDropdownBtnRef.current, foreDropdownRef.current)
            return destroy
        }
    }, [])

    useEffect(() => {
        if (backDropdownBtnRef.current && backDropdownRef.current) {
            const destroy = bindDropdownToggle(backDropdownBtnRef.current, backDropdownRef.current)
            return destroy
        }
    }, [])

    const handleForeColorSelect = (event, value) => {
        applyColor(event, value)
        if (foreDropdownRef.current) foreDropdownRef.current.classList.remove("is-open")
        if (foreDropdownBtnRef.current) foreDropdownBtnRef.current.classList.remove("is-active")
    }

    const handleBackColorSelect = (event, value) => {
        applyColor(event, value)
        if (backDropdownRef.current) backDropdownRef.current.classList.remove("is-open")
        if (backDropdownBtnRef.current) backDropdownBtnRef.current.classList.remove("is-active")
    }

    const handleForeReset = () => {
        resetColor("foreColor")
        if (foreDropdownRef.current) foreDropdownRef.current.classList.remove("is-open")
        if (foreDropdownBtnRef.current) foreDropdownBtnRef.current.classList.remove("is-active")
    }

    const handleBackReset = () => {
        resetColor("backColor")
        if (backDropdownRef.current) backDropdownRef.current.classList.remove("is-open")
        if (backDropdownBtnRef.current) backDropdownBtnRef.current.classList.remove("is-active")
    }

    // سهم الـ Dropdown (SVG)
    const ArrowIcon = () => (
        <svg
            className="h-2 w-2 fill-current text-[#666]"
            viewBox="0 0 10 6"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0l5 6 5-6H0z" />
        </svg>
    )

    return (
        <div className="forge-toolbar-group forge-toolbar-color flex items-center gap-1">
            {/* Text Color */}
            <div className="forge-color-item relative flex items-center">
                <div className="forge-color-button-group flex h-[30px] items-center overflow-visible rounded border border-[#ccc] bg-white hover:border-[#aaa] hover:bg-[#f9f9f9]">
                    <button
                        type="button"
                        className="forge-color-main group relative flex h-full items-center justify-center min-w-[28px] cursor-pointer border-none bg-transparent p-0 hover:bg-black/5"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => applyRecentColor("foreColor")}
                        aria-label="Apply text color">
                        <span
                            className="forge-recent-color flex h-5 w-5 items-center justify-center rounded-[2px] border border-[#ccc] text-xs font-bold"
                            style={{ backgroundColor: "transparent", color: recentForeColor }}>
                            A
                        </span>
                        <span
                            className="forge-tooltip pointer-events-none absolute left-1/2 top-full z-30 mt-1 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-[10px] text-white opacity-0 transition-opacity group-hover:opacity-100 before:absolute before:bottom-full before:left-1/2 before:-translate-x-1/2 before:border-x-[4px] before:border-b-[4px] before:border-x-transparent before:border-b-black"
                            data-i18n="recentColor">
                            Recent Color
                        </span>
                    </button>

                    <button
                        ref={foreDropdownBtnRef}
                        type="button"
                        className="forge-color-dropdown-btn group relative flex h-full items-center justify-center min-w-[18px] cursor-pointer border-l border-[#ccc] bg-transparent px-1 hover:bg-black/5"
                        onMouseDown={(e) => e.preventDefault()}
                        aria-label="More text colors">
                        <ArrowIcon />
                        <span
                            className="forge-tooltip pointer-events-none absolute left-1/2 top-full z-30 mt-1 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-[10px] text-white opacity-0 transition-opacity group-hover:opacity-100 before:absolute before:bottom-full before:left-1/2 before:-translate-x-1/2 before:border-x-[4px] before:border-b-[4px] before:border-x-transparent before:border-b-black"
                            data-i18n="moreColor">
                            More Color
                        </span>
                    </button>
                </div>

                <div
                    ref={foreDropdownRef}
                    className="forge-toolbar-dropdown forge-dropdown-color absolute left-0 top-full z-20 hidden mt-1 max-h-[220px] min-w-[180px] overflow-y-auto rounded border border-[#ccc] bg-white p-2 shadow-md rtl:left-auto rtl:right-0 [&.is-open]:block">
                    <div className="forge-color-section">
                        <div className="forge-color-section-header mb-1.5 flex items-center justify-between">
                            <span className="forge-color-title text-xs font-bold text-[#333]">
                                Text Color
                            </span>
                            <button
                                type="button"
                                className="forge-color-reset cursor-pointer rounded border border-[#ccc] bg-[#f5f5f5] px-2 py-0.5 text-[11px] font-medium text-[#333] hover:border-[#999] hover:bg-[#e6e6e6]"
                                onMouseDown={(e) => e.preventDefault()}
                                onClick={handleForeReset}>
                                Reset
                            </button>
                        </div>
                        <ColorPalette
                            event="foreColor"
                            onApply={handleForeColorSelect}
                        />
                    </div>
                </div>
            </div>

            {/* Background Color */}
            <div className="forge-color-item relative flex items-center">
                <div className="forge-color-button-group flex h-[30px] items-center overflow-visible rounded border border-[#ccc] bg-white hover:border-[#aaa] hover:bg-[#f9f9f9]">
                    <button
                        type="button"
                        className="forge-color-main group relative flex h-full items-center justify-center min-w-[28px] cursor-pointer border-none bg-transparent p-0 hover:bg-black/5"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => applyRecentColor("backColor")}
                        aria-label="Apply background color">
                        <span
                            className="forge-recent-color flex h-5 w-5 items-center justify-center rounded-[2px] border border-[#ccc] text-xs font-bold"
                            style={{
                                backgroundColor: recentBackColor || "#FFFFFF",
                                color: "#000"
                            }}>
                            A
                        </span>
                        <span
                            className="forge-tooltip pointer-events-none absolute left-1/2 top-full z-30 mt-1 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-[10px] text-white opacity-0 transition-opacity group-hover:opacity-100 before:absolute before:bottom-full before:left-1/2 before:-translate-x-1/2 before:border-x-[4px] before:border-b-[4px] before:border-x-transparent before:border-b-black"
                            data-i18n="recentBackColor">
                            Recent Background Color
                        </span>
                    </button>

                    <button
                        ref={backDropdownBtnRef}
                        type="button"
                        className="forge-color-dropdown-btn group relative flex h-full items-center justify-center min-w-[18px] cursor-pointer border-l border-[#ccc] bg-transparent px-1 hover:bg-black/5"
                        onMouseDown={(e) => e.preventDefault()}
                        aria-label="More background colors">
                        <ArrowIcon />
                        <span
                            className="forge-tooltip pointer-events-none absolute left-1/2 top-full z-30 mt-1 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-[10px] text-white opacity-0 transition-opacity group-hover:opacity-100 before:absolute before:bottom-full before:left-1/2 before:-translate-x-1/2 before:border-x-[4px] before:border-b-[4px] before:border-x-transparent before:border-b-black"
                            data-i18n="moreBackColor">
                            More Background Colors
                        </span>
                    </button>
                </div>

                <div
                    ref={backDropdownRef}
                    className="forge-toolbar-dropdown forge-dropdown-color absolute left-0 top-full z-20 hidden mt-1 max-h-[220px] min-w-[180px] overflow-y-auto rounded border border-[#ccc] bg-white p-2 shadow-md rtl:left-auto rtl:right-0 [&.is-open]:block">
                    <div className="forge-color-section">
                        <div className="forge-color-section-header mb-1.5 flex items-center justify-between">
                            <span className="forge-color-title text-xs font-bold text-[#333]">
                                Background Color
                            </span>
                            <button
                                type="button"
                                className="forge-color-reset cursor-pointer rounded border border-[#ccc] bg-[#f5f5f5] px-2 py-0.5 text-[11px] font-medium text-[#333] hover:border-[#999] hover:bg-[#e6e6e6]"
                                onMouseDown={(e) => e.preventDefault()}
                                onClick={handleBackReset}>
                                White
                            </button>
                        </div>
                        <ColorPalette
                            event="backColor"
                            onApply={handleBackColorSelect}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
