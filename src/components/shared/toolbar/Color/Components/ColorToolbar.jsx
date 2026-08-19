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
        if (foreDropdownRef.current) {
            foreDropdownRef.current.classList.remove("is-open")
        }
        if (foreDropdownBtnRef.current) {
            foreDropdownBtnRef.current.classList.remove("is-active")
        }
    }

    const handleBackColorSelect = (event, value) => {
        applyColor(event, value)
        if (backDropdownRef.current) {
            backDropdownRef.current.classList.remove("is-open")
        }
        if (backDropdownBtnRef.current) {
            backDropdownBtnRef.current.classList.remove("is-active")
        }
    }

    const handleForeReset = () => {
        resetColor("foreColor")
        if (foreDropdownRef.current) {
            foreDropdownRef.current.classList.remove("is-open")
        }
        if (foreDropdownBtnRef.current) {
            foreDropdownBtnRef.current.classList.remove("is-active")
        }
    }

    const handleBackReset = () => {
        resetColor("backColor")
        if (backDropdownRef.current) {
            backDropdownRef.current.classList.remove("is-open")
        }
        if (backDropdownBtnRef.current) {
            backDropdownBtnRef.current.classList.remove("is-active")
        }
    }

    return (
        <div className="forge-toolbar-group forge-toolbar-color flex items-center gap-1">
            <div className="forge-color-item relative z-10 flex items-center">
                <div className="forge-color-button-group flex h-7 items-center overflow-visible rounded-[2px] border border-[#ccc] bg-transparent hover:border-[#aaa] hover:bg-black/5">
                    <button
                        type="button"
                        className="forge-color-main forge-toolbar-button min-w-[28px] cursor-pointer border-none bg-transparent p-0 text-sm hover:bg-black/[0.08]"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => applyRecentColor("foreColor")}
                        aria-label="Apply text color">
                        <span
                            className="forge-recent-color flex h-5 w-5 shrink-0 items-center justify-center rounded-[2px] border border-[#ccc] text-sm font-bold"
                            style={{ backgroundColor: "transparent", color: recentForeColor }}>
                            A
                        </span>
                        <span
                            className="forge-tooltip py-0.5 px-[7px]"
                            data-i18n="recentColor">
                            Recent Color
                        </span>
                    </button>
                    <button
                        ref={foreDropdownBtnRef}
                        type="button"
                        className="forge-color-dropdown-btn forge-toolbar-button min-w-[18px] cursor-pointer border-l border-[#ccc] border-none bg-transparent px-1 py-0 text-[10px] text-[#666] hover:bg-black/[0.08]"
                        onMouseDown={(e) => e.preventDefault()}
                        aria-label="More text colors">
                        ▼
                        <span
                            className="forge-tooltip py-0.5 px-[7px]"
                            data-i18n="moreColor">
                            More Color
                        </span>
                    </button>
                </div>
                <div
                    ref={foreDropdownRef}
                    className="forge-toolbar-dropdown forge-dropdown-color mt-1 max-h-[200px] min-w-[160px] overflow-y-auto rounded-[3px] p-1.5 shadow-[0_2px_6px_rgba(0,0,0,0.15)] rtl:left-auto rtl:right-0">
                    <div className="forge-color-section mb-1.5 last:mb-0">
                        <div className="forge-color-section-header mb-1 flex items-center justify-between">
                            <span className="forge-color-title text-xs font-bold text-[#333]">
                                Text Color
                            </span>
                            <button
                                type="button"
                                className="forge-color-reset cursor-pointer rounded-[2px] border border-[#ccc] bg-[#f5f5f5] px-2 py-0.5 text-[11px] font-medium text-[#333] transition-all duration-150 ease-in-out hover:border-[#999] hover:bg-[#e6e6e6] active:translate-y-px active:border-[#666] active:bg-[#d0d0d0]"
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

            <div className="forge-color-item relative z-10 flex items-center">
                <div className="forge-color-button-group flex h-7 items-center overflow-visible rounded-[2px] border border-[#ccc] bg-transparent hover:border-[#aaa] hover:bg-black/5">
                    <button
                        type="button"
                        className="forge-color-main forge-toolbar-button min-w-[28px] cursor-pointer border-none bg-transparent p-0 text-sm hover:bg-black/[0.08]"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => applyRecentColor("backColor")}
                        aria-label="Apply background color">
                        <span
                            className="forge-recent-color flex h-5 w-5 shrink-0 items-center justify-center rounded-[2px] border border-[#ccc] text-sm font-bold"
                            style={{ backgroundColor: recentBackColor, color: "#000" }}>
                            A
                        </span>
                        <span
                            className="forge-tooltip py-0.5 px-[7px]"
                            data-i18n="recentBackColor">
                            Recent Background Color
                        </span>
                    </button>
                    <button
                        ref={backDropdownBtnRef}
                        type="button"
                        className="forge-color-dropdown-btn forge-toolbar-button min-w-[18px] cursor-pointer border-l border-[#ccc] border-none bg-transparent px-1 py-0 text-[10px] text-[#666] hover:bg-black/[0.08]"
                        onMouseDown={(e) => e.preventDefault()}
                        aria-label="More background colors">
                        ▼
                        <span
                            className="forge-tooltip py-0.5 px-[7px]"
                            data-i18n="moreBackColor">
                            More Background Colors
                        </span>
                    </button>
                </div>
                <div
                    ref={backDropdownRef}
                    className="forge-toolbar-dropdown forge-dropdown-color mt-1 max-h-[200px] min-w-[160px] overflow-y-auto rounded-[3px] p-1.5 shadow-[0_2px_6px_rgba(0,0,0,0.15)] rtl:left-auto rtl:right-0">
                    <div className="forge-color-section mb-1.5 last:mb-0">
                        <div className="forge-color-section-header mb-1 flex items-center justify-between">
                            <span className="forge-color-title text-xs font-bold text-[#333]">
                                Background Color
                            </span>
                            <button
                                type="button"
                                className="forge-color-reset cursor-pointer rounded-[2px] border border-[#ccc] bg-[#f5f5f5] px-2 py-0.5 text-[11px] font-medium text-[#333] transition-all duration-150 ease-in-out hover:border-[#999] hover:bg-[#e6e6e6] active:translate-y-px active:border-[#666] active:bg-[#d0d0d0]"
                                onMouseDown={(e) => e.preventDefault()}
                                onClick={handleBackReset}>
                                Transparent
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
