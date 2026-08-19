export function FontToolbar({ onCommand }) {
    return (
        <div className="forge-toolbar-group forge-toolbar-font">
            <button
                type="button"
                className="forge-toolbar-button forge-btn-bold min-w-[32px] rounded-[2px] px-1.5 py-1 text-center text-base transition-all duration-150 ease-in-out hover:border-[#999] hover:bg-[#e6e6e6] hover:shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] active:border-[#666] active:bg-[#d0d0d0] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]"
                onClick={() => onCommand("bold")}
                aria-label="Bold">
                <strong className="text-base font-black leading-none text-[#333]">B</strong>
                <span
                    className="forge-tooltip text-[13px]"
                    data-i18n="bold"></span>
            </button>
            <button
                type="button"
                className="forge-toolbar-button forge-btn-underline min-w-[32px] rounded-[2px] px-1.5 py-1 text-center text-base transition-all duration-150 ease-in-out hover:border-[#999] hover:bg-[#e6e6e6] hover:shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] active:border-[#666] active:bg-[#d0d0d0] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]"
                onClick={() => onCommand("underline")}
                aria-label="Underline">
                <u className="text-base leading-none text-[#333] underline underline-offset-2">U</u>
                <span
                    className="forge-tooltip text-[13px]"
                    data-i18n="underline"></span>
            </button>
            <button
                type="button"
                className="forge-toolbar-button min-w-[32px] rounded-[2px] px-1.5 py-1 text-center text-base transition-all duration-150 ease-in-out hover:border-[#999] hover:bg-[#e6e6e6] hover:shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] active:border-[#666] active:bg-[#d0d0d0] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]"
                onClick={() => onCommand("removeFormat")}
                aria-label="Remove Font Style">
                <span className="text-lg leading-none text-[#333]">⌫</span>
                <span
                    className="forge-tooltip text-[13px]"
                    data-i18n="removeFormat"></span>
            </button>
        </div>
    )
}
