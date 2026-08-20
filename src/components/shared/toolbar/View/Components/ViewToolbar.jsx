export function ViewToolbar({ logic }) {
    const { toggleFullscreen, toggleCodeView, showHelp } = logic

    const buttonClass =
        "forge-toolbar-button group relative flex h-7 cursor-pointer items-center justify-center rounded-[2px] border border-[#ccc] bg-white px-0.5 py-1 text-sm leading-none transition-all duration-150 hover:bg-[#f0f0f0] active:translate-y-px"

    const tooltipClass =
        "forge-tooltip pointer-events-none invisible absolute left-1/2 top-[calc(100%+8px)] -translate-x-1/2 whitespace-nowrap rounded-[2px] border border-[#333] bg-[#ffffe1] px-2 py-0.5 text-[13px] leading-[1.6] text-black opacity-0 shadow-[1px_1px_3px_rgba(0,0,0,0.3)] transition-opacity duration-150 group-hover:visible group-hover:opacity-100"

    return (
        <div className="forge-toolbar-group forge-toolbar-view flex items-center gap-0.5">
            <button
                type="button"
                className={buttonClass}
                onClick={toggleFullscreen}
                aria-label="Full Screen">
                <span className="forge-toolbar-icon">⛶</span>
                <span
                    className={tooltipClass}
                    data-i18n="fullscreen">
                    Full Screen
                </span>
            </button>

            <button
                type="button"
                className={buttonClass}
                onClick={toggleCodeView}
                aria-label="Code View">
                <span className="forge-toolbar-icon">&lt;/&gt;</span>
                <span
                    className={tooltipClass}
                    data-i18n="codeview">
                    Code View
                </span>
            </button>
        </div>
    )
}
{
    /* <button
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
            </button> */
}
