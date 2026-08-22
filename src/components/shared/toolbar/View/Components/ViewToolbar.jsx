export function ViewToolbar({ logic }) {
    const { toggleFullscreen, toggleCodeView, showHelp } = logic

    const buttonClass =
        "forge-toolbar-button group relative flex h-8 cursor-pointer items-center justify-center rounded-[2px] border border-[#ccc] bg-white px-2 text-sm leading-none transition-all duration-150 hover:bg-[#f0f0f0] active:translate-y-px"

    const tooltipClass =
        "pointer-events-none absolute left-1/2 top-[calc(100%+8px)] z-30 -translate-x-1/2 whitespace-nowrap rounded-md border border-[#2c2c2c] bg-[#1e1e1e] px-2.5 py-1 text-[11px] font-medium leading-none text-white opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100 rtl:left-1/2 rtl:-translate-x-1/2 before:absolute before:bottom-full before:left-1/2 before:-translate-x-1/2 before:border-x-[5px] before:border-b-[5px] before:border-t-0 before:border-solid before:border-x-transparent before:border-b-[#2c2c2c] after:absolute after:bottom-full after:left-1/2 after:-translate-x-1/2 after:translate-y-[1px] after:border-x-[4px] after:border-b-[4px] after:border-t-0 after:border-solid after:border-x-transparent after:border-b-[#1e1e1e]"

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

            {/* <button
                type="button"
                className={buttonClass}
                onClick={showHelp}
                aria-label="Help">
                <span className="forge-toolbar-icon">?</span>
                <span
                    className={tooltipClass}
                    data-i18n="help">
                    Help
                </span>
            </button> */}
        </div>
    )
}
