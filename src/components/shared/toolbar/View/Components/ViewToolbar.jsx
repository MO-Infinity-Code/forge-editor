export function ViewToolbar({ logic }) {
    const { toggleFullscreen, toggleCodeView, showHelp } = logic

    return (
        <div className="forge-toolbar-group forge-toolbar-view">
            <button
                type="button"
                className="forge-toolbar-button"
                onClick={toggleFullscreen}
                aria-label="Full Screen">
                <span className="forge-toolbar-icon">⛶</span>
                <span
                    className="forge-tooltip"
                    data-i18n="fullscreen">
                    Full Screen
                </span>
            </button>
            <button
                type="button"
                className="forge-toolbar-button"
                onClick={toggleCodeView}
                aria-label="Code View">
                <span className="forge-toolbar-icon">&lt;/&gt;</span>
                <span
                    className="forge-tooltip"
                    data-i18n="codeview">
                    Code View
                </span>
            </button>
            {/* <button
                type="button"
                className="forge-toolbar-button"
                onClick={showHelp}
                aria-label="Help">
                <span className="forge-toolbar-icon">?</span>
                <span
                    className="forge-tooltip"
                    data-i18n="help">
                    Help
                </span>
            </button> */}
        </div>
    )
}
