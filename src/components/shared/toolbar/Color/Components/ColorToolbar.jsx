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
        <div className="forge-toolbar-group forge-toolbar-color">
            <div className="forge-color-item">
                <div className="forge-color-button-group">
                    <button
                        type="button"
                        className="forge-color-main forge-toolbar-button"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => applyRecentColor("foreColor")}
                        aria-label="Apply text color">
                        <span
                            className="forge-recent-color"
                            style={{ backgroundColor: "transparent", color: recentForeColor }}>
                            A
                        </span>
                        <span
                            className="forge-tooltip"
                            data-i18n="recentColor">
                            Recent Color
                        </span>
                    </button>
                    <button
                        ref={foreDropdownBtnRef}
                        type="button"
                        className="forge-color-dropdown-btn forge-toolbar-button"
                        onMouseDown={(e) => e.preventDefault()}
                        aria-label="More text colors">
                        ▼
                        <span
                            className="forge-tooltip"
                            data-i18n="moreColor">
                            More Color
                        </span>
                    </button>
                </div>
                <div
                    ref={foreDropdownRef}
                    className="forge-toolbar-dropdown forge-dropdown-color">
                    <div className="forge-color-section">
                        <div className="forge-color-section-header">
                            <span className="forge-color-title">Text Color</span>
                            <button
                                type="button"
                                className="forge-color-reset"
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

            <div className="forge-color-item">
                <div className="forge-color-button-group">
                    <button
                        type="button"
                        className="forge-color-main forge-toolbar-button"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => applyRecentColor("backColor")}
                        aria-label="Apply background color">
                        <span
                            className="forge-recent-color"
                            style={{ backgroundColor: recentBackColor, color: "#000" }}>
                            A
                        </span>
                        <span
                            className="forge-tooltip"
                            data-i18n="recentBackColor">
                            Recent Background Color
                        </span>
                    </button>
                    <button
                        ref={backDropdownBtnRef}
                        type="button"
                        className="forge-color-dropdown-btn forge-toolbar-button"
                        onMouseDown={(e) => e.preventDefault()}
                        aria-label="More background colors">
                        ▼
                        <span
                            className="forge-tooltip"
                            data-i18n="moreBackColor">
                            More Background Colors
                        </span>
                    </button>
                </div>
                <div
                    ref={backDropdownRef}
                    className="forge-toolbar-dropdown forge-dropdown-color">
                    <div className="forge-color-section">
                        <div className="forge-color-section-header">
                            <span className="forge-color-title">Background Color</span>
                            <button
                                type="button"
                                className="forge-color-reset"
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
