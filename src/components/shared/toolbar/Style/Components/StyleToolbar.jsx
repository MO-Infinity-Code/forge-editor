export function StyleToolbar() {
    const buttonClass =
        "forge-toolbar-button group relative flex h-7 cursor-pointer items-center justify-center rounded-[2px] border border-[#ccc] bg-white px-2 text-sm leading-none transition-all duration-150 hover:bg-[#f0f0f0] active:translate-y-px [&.is-active]:bg-[#e5e5e5]"

    const itemClass =
        "forge-dropdown-item block w-full text-left cursor-pointer whitespace-nowrap px-3 py-1 text-[#333] no-underline transition-colors duration-100 hover:bg-[#f0f0f0]"

    const tooltipClass =
        "pointer-events-none absolute left-1/2 top-[calc(100%+8px)] z-30 -translate-x-1/2 whitespace-nowrap rounded-md border border-[#2c2c2c] bg-[#1e1e1e] px-2.5 py-1 text-[11px] font-medium leading-none text-white opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100 group-has-[.is-open]:hidden rtl:left-1/2 rtl:-translate-x-1/2 before:absolute before:bottom-full before:left-1/2 before:-translate-x-1/2 before:border-x-[5px] before:border-b-[5px] before:border-t-0 before:border-solid before:border-x-transparent before:border-b-[#2c2c2c] after:absolute after:bottom-full after:left-1/2 after:-translate-x-1/2 after:translate-y-[1px] after:border-x-[4px] after:border-b-[4px] after:border-t-0 after:border-solid after:border-x-transparent after:border-b-[#1e1e1e]"

    return (
        <div className="forge-toolbar-group forge-toolbar-style flex items-center gap-0.5">
            <div className="relative group">
                <button
                    type="button"
                    className={buttonClass}
                    data-command="style"
                    aria-label="Style">
                    <span className="forge-icon">✦</span>
                    <span
                        className={tooltipClass}
                        data-i18n="style">
                        Style
                    </span>
                </button>

                <div
                    className="forge-toolbar-dropdown forge-dropdown-style absolute left-0 top-[calc(100%+4px)] z-20 hidden [&.is-open]:block max-h-24 min-w-[110px] overflow-y-auto rounded-[2px] border border-[#ccc] bg-white p-0 shadow-[0_2px_6px_rgba(0,0,0,0.15)] rtl:left-auto rtl:right-0"
                    role="list"
                    aria-label="Style">
                    <button
                        type="button"
                        className={itemClass}
                        data-value="p"
                        role="listitem">
                        <p className="m-0 text-[13px] font-normal leading-[1.4]">Normal</p>
                    </button>
                    <button
                        type="button"
                        className={itemClass}
                        data-value="blockquote"
                        role="listitem">
                        <blockquote className="m-0 text-[13px] font-normal leading-[1.4]">
                            Blockquote
                        </blockquote>
                    </button>
                    <button
                        type="button"
                        className={itemClass}
                        data-value="pre"
                        role="listitem">
                        <pre className="m-0 font-mono text-[13px] leading-[1.4]">Code</pre>
                    </button>
                    <button
                        type="button"
                        className={itemClass}
                        data-value="h1"
                        role="listitem">
                        <h1 className="m-0 text-[20px] font-normal leading-[1.4]">Heading 1</h1>
                    </button>
                    <button
                        type="button"
                        className={itemClass}
                        data-value="h2"
                        role="listitem">
                        <h2 className="m-0 text-[18px] font-normal leading-[1.4]">Heading 2</h2>
                    </button>
                    <button
                        type="button"
                        className={itemClass}
                        data-value="h3"
                        role="listitem">
                        <h3 className="m-0 text-[16px] font-normal leading-[1.4]">Heading 3</h3>
                    </button>
                    <button
                        type="button"
                        className={itemClass}
                        data-value="h4"
                        role="listitem">
                        <h4 className="m-0 text-[15px] font-normal leading-[1.4]">Heading 4</h4>
                    </button>
                    <button
                        type="button"
                        className={itemClass}
                        data-value="h5"
                        role="listitem">
                        <h5 className="m-0 text-[14px] font-normal leading-[1.4]">Heading 5</h5>
                    </button>
                    <button
                        type="button"
                        className={itemClass}
                        data-value="h6"
                        role="listitem">
                        <h6 className="m-0 text-[13px] font-normal leading-[1.4]">Heading 6</h6>
                    </button>
                </div>
            </div>
        </div>
    )
}
