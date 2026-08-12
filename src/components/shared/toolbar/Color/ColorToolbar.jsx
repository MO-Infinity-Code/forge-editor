import { ColorPalette } from "./colorPalette"

export function ColorToolbar({ logic }) {
    const {
        openDropdown,
        toggleDropdown,
        applyColor,
        applyRecentColor,
        resetColor,
        recentForeColor,
        recentBackColor
    } = logic

    return (
        <div className="forge-toolbar-group forge-toolbar-color">
            <div className="forge-color-item">
                <div className="forge-color-button-group">
                    <button
                        type="button"
                        className="forge-color-main forge-toolbar-button"
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
                        type="button"
                        className="forge-color-dropdown-btn forge-toolbar-button"
                        onClick={() => toggleDropdown("fore")}
                        aria-label="More text colors">
                        ▼
                        <span
                            className="forge-tooltip"
                            data-i18n="moreColor">
                            More Color
                        </span>
                    </button>
                </div>
                {openDropdown === "fore" && (
                    <div className="forge-toolbar-dropdown forge-dropdown-color">
                        <div className="forge-color-section">
                            <div className="forge-color-title">Text Color</div>
                            <button
                                type="button"
                                className="forge-color-reset"
                                onClick={() => resetColor("foreColor")}>
                                Reset
                            </button>
                            <ColorPalette
                                event="foreColor"
                                onApply={applyColor}
                            />
                        </div>
                    </div>
                )}
            </div>

            <div className="forge-color-item">
                <div className="forge-color-button-group">
                    <button
                        type="button"
                        className="forge-color-main forge-toolbar-button"
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
                        type="button"
                        className="forge-color-dropdown-btn forge-toolbar-button"
                        onClick={() => toggleDropdown("back")}
                        aria-label="More background colors">
                        ▼
                        <span
                            className="forge-tooltip"
                            data-i18n="moreBackColor">
                            More Background Colors
                        </span>
                    </button>
                </div>
                {openDropdown === "back" && (
                    <div className="forge-toolbar-dropdown forge-dropdown-color">
                        <div className="forge-color-section">
                            <div className="forge-color-title">Background Color</div>
                            <button
                                type="button"
                                className="forge-color-reset"
                                onClick={() => resetColor("backColor")}>
                                Transparent
                            </button>
                            <ColorPalette
                                event="backColor"
                                onApply={applyColor}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
