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

export function FontNameToolbar() {
    const buttonClass =
        "forge-toolbar-button group relative flex h-7 cursor-pointer items-center justify-center rounded-[2px] border border-[#ccc] bg-white px-2 text-xs leading-none transition-all duration-150 hover:bg-[#f0f0f0] active:translate-y-px [&.is-active]:bg-[#e5e5e5]"

    const itemClass =
        "forge-dropdown-item block w-full text-left cursor-pointer whitespace-nowrap px-3 py-1 text-xs text-[#333] no-underline transition-colors duration-100 hover:bg-[#f0f0f0]"

    const tooltipClass =
        "forge-tooltip pointer-events-none absolute left-1/2 top-[calc(100%+6px)] z-30 -translate-x-1/2 whitespace-nowrap rounded-sm bg-[#222] px-2 py-0.5 text-xs text-white transition-opacity duration-150 opacity-0 group-hover:opacity-100 group-has-[.is-open]:hidden before:absolute before:bottom-full before:left-1/2 before:-translate-x-1/2 before:border-x-[5px] before:border-b-[5px] before:border-x-transparent before:border-b-[#222]"

    return (
        <div className="forge-toolbar-group forge-toolbar-fontname flex items-center gap-0.5">
            <div className="relative group">
                <button
                    type="button"
                    className={buttonClass}
                    data-command="fontName"
                    aria-label="Font Name">
                    <span className="forge-current-fontname truncate max-w-[65px]">Arial</span>
                    <span className="ml-1 text-[8px] text-[#666]">▼</span>
                    <span
                        className={tooltipClass}
                        data-i18n="fontName">
                        Font Family
                    </span>
                </button>

                <div
                    className="forge-toolbar-dropdown forge-dropdown-fontname absolute left-0 top-[calc(100%+4px)] z-20 hidden [&.is-open]:block max-h-40 min-w-[130px] overflow-y-auto rounded-[2px] border border-[#ccc] bg-white p-0 shadow-[0_2px_6px_rgba(0,0,0,0.15)] rtl:left-auto rtl:right-0"
                    role="list"
                    aria-label="Font Family">
                    {FONTS.map((font) => (
                        <button
                            key={font}
                            type="button"
                            className={itemClass}
                            data-value={font}
                            role="listitem"
                            style={{ fontFamily: font }}>
                            {font}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}
