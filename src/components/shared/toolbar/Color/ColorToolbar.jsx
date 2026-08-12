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
                        className="forge-color-main"
                        onClick={() => applyRecentColor("foreColor")}
                        aria-label="Apply text color">
                        <span
                            className="forge-recent-color"
                            style={{ backgroundColor: recentForeColor, color: "#fff" }}>
                            A
                        </span>
                    </button>
                    <button
                        type="button"
                        className="forge-color-dropdown-btn"
                        onClick={() => toggleDropdown("fore")}
                        aria-label="More text colors">
                        ▼
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
                        className="forge-color-main"
                        onClick={() => applyRecentColor("backColor")}
                        aria-label="Apply background color">
                        <span
                            className="forge-recent-color"
                            style={{ backgroundColor: recentBackColor, color: "#000" }}>
                            A
                        </span>
                    </button>
                    <button
                        type="button"
                        className="forge-color-dropdown-btn"
                        onClick={() => toggleDropdown("back")}
                        aria-label="More background colors">
                        ▼
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
