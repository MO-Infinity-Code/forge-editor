export function FontToolbar({ onCommand, isBold, isUnderline }) {
    const btnBaseClass =
        "group relative flex h-7 w-7 items-center justify-center p-0 text-sm leading-none cursor-pointer transition-colors duration-150 active:translate-y-px"
    const btnNormalClass = "bg-white text-[#333] hover:bg-[#f0f0f0]"
    const btnActiveClass =
        "bg-[#e2e8f0] text-black border-inner shadow-[inset_0_1px_3px_rgba(0,0,0,0.2)] font-bold"

    const tooltipClass =
        "pointer-events-none absolute left-1/2 top-[calc(100%+8px)] z-30 -translate-x-1/2 whitespace-nowrap rounded-md border border-[#2c2c2c] bg-[#1e1e1e] px-2.5 py-1 text-[11px] font-medium leading-none text-white opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100 rtl:left-1/2 rtl:-translate-x-1/2 before:absolute before:bottom-full before:left-1/2 before:-translate-x-1/2 before:border-x-[5px] before:border-b-[5px] before:border-t-0 before:border-solid before:border-x-transparent before:border-b-[#2c2c2c] after:absolute after:bottom-full after:left-1/2 after:-translate-x-1/2 after:translate-y-[1px] after:border-x-[4px] after:border-b-[4px] after:border-t-0 after:border-solid after:border-x-transparent after:border-b-[#1e1e1e]"

    return (
        <div className="forge-toolbar-group forge-toolbar-font inline-flex items-center rounded-sm border border-[#ccc] bg-white divide-x divide-[#ccc] rtl:divide-x-reverse">
            <button
                type="button"
                className={`${btnBaseClass} ${isBold ? btnActiveClass : btnNormalClass}`}
                onClick={() => onCommand("bold")}
                aria-label="Bold">
                <span className="text-sm font-bold font-serif">B</span>
                <span
                    className={tooltipClass}
                    data-i18n="bold">
                    Bold
                </span>
            </button>

            <button
                type="button"
                className={`${btnBaseClass} ${isUnderline ? btnActiveClass : btnNormalClass}`}
                onClick={() => onCommand("underline")}
                aria-label="Underline">
                <span className="text-sm font-bold font-serif underline">U</span>
                <span
                    className={tooltipClass}
                    data-i18n="underline">
                    Underline
                </span>
            </button>

            <button
                type="button"
                className={`${btnBaseClass} ${btnNormalClass}`}
                onClick={() => onCommand("removeFormat")}
                aria-label="Remove Font Style">
                <span className="inline-block h-4 w-4 text-center text-sm leading-none">
                    <svg
                        viewBox="0 0 20 20"
                        className="block h-4 w-4 fill-none stroke-black"
                        strokeWidth="2">
                        <path d="M 4 4 L 16 16 M 16 4 L 4 16" />
                    </svg>
                </span>
                <span
                    className={tooltipClass}
                    data-i18n="removeFormat">
                    Remove Font Style
                </span>
            </button>
        </div>
    )
}
