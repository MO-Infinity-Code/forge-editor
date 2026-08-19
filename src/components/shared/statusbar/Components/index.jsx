export function Statusbar() {
    return (
        <div
            className="forge-statusbar box-border flex h-2.5 w-full flex-shrink-0 cursor-s-resize items-center justify-center rounded-b-[3px] border-t border-[#ccc] bg-[#f0f0f0]"
            role="status">
            <div
                className="flex flex-col items-center gap-px"
                aria-label="resize">
                <div className="h-px w-3 rounded-[1px] bg-[#888]" />
                <div className="h-px w-3 rounded-[1px] bg-[#888]" />
                <div className="h-px w-3 rounded-[1px] bg-[#888]" />
            </div>
        </div>
    )
}
