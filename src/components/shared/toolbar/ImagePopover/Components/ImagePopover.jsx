import { useRef } from "preact/hooks"

export function ImagePopover({ target, onClose, onResize, onFloat, onRemove }) {
    const popoverRef = useRef(null)

    if (!target) return null

    const rect = target.getBoundingClientRect()
    const popoverStyle = {
        display: "block",
        left: rect.left + rect.width / 2 - 100 + "px",
        top: rect.bottom + 10 + "px",
        position: "fixed",
        zIndex: 9999
    }

    const baseBtnClass =
        "note-btn cursor-pointer rounded-[2px] border border-[#ccc] bg-[#f5f5f5] px-2 py-1 text-xs leading-[1.4] transition-all duration-100 ease-in-out hover:border-[#999] hover:bg-[#e6e6e6] active:translate-y-px active:bg-[#d0d0d0]"

    const groupClass =
        "note-btn-group flex gap-0.5 border-r border-[#ddd] pr-1 last:border-r-0 last:pr-0"

    const iconClass = "not-italic text-sm leading-none"

    return (
        <div
            ref={popoverRef}
            className="note-popover bottom note-image-popover absolute z-[1000] min-w-[200px] rounded-[4px] border border-[#ccc] bg-white p-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
            style={popoverStyle}>
            <style>{`
        .note-popover.bottom .note-popover-arrow::after {
          content: "";
          position: absolute;
          top: 1px;
          left: -7px;
          border-left: 7px solid transparent;
          border-right: 7px solid transparent;
          border-bottom: 7px solid #fff;
        }
      `}</style>

            <div className="note-popover-arrow absolute -top-2 left-1/2 -translate-x-1/2 border-l-8 border-r-8 border-b-8 border-b-[#ccc] border-l-transparent border-r-transparent" />

            <div className="popover-content note-children-container flex flex-wrap items-center gap-1">
                <div className={`${groupClass} note-resize`}>
                    <button
                        type="button"
                        className={baseBtnClass}
                        tabIndex="-1"
                        aria-label="Resize full"
                        onClick={() => onResize(target, 1)}>
                        <span className="note-fontsize-10 text-[10px]">100%</span>
                    </button>
                    <button
                        type="button"
                        className={baseBtnClass}
                        tabIndex="-1"
                        aria-label="Resize half"
                        onClick={() => onResize(target, 0.5)}>
                        <span className="note-fontsize-10 text-[10px]">50%</span>
                    </button>
                    <button
                        type="button"
                        className={baseBtnClass}
                        tabIndex="-1"
                        aria-label="Resize quarter"
                        onClick={() => onResize(target, 0.25)}>
                        <span className="note-fontsize-10 text-[10px]">25%</span>
                    </button>
                    <button
                        type="button"
                        className={baseBtnClass}
                        tabIndex="-1"
                        aria-label="Original size"
                        onClick={() => onResize(target, "original")}>
                        <i className={`note-icon-rollback ${iconClass}`}>↺</i>
                    </button>
                </div>

                <div className={`${groupClass} note-float`}>
                    <button
                        type="button"
                        className={baseBtnClass}
                        tabIndex="-1"
                        aria-label="Float Left"
                        onClick={() => onFloat(target, "left")}>
                        <i className={`note-icon-float-left ${iconClass}`}>◀</i>
                    </button>
                    <button
                        type="button"
                        className={baseBtnClass}
                        tabIndex="-1"
                        aria-label="Float Right"
                        onClick={() => onFloat(target, "right")}>
                        <i className={`note-icon-float-right ${iconClass}`}>▶</i>
                    </button>
                    <button
                        type="button"
                        className={baseBtnClass}
                        tabIndex="-1"
                        aria-label="Remove float"
                        onClick={() => onFloat(target, "none")}>
                        <i className={`note-icon-rollback ${iconClass}`}>↺</i>
                    </button>
                </div>

                <div className={`${groupClass} note-remove`}>
                    <button
                        type="button"
                        className={baseBtnClass}
                        tabIndex="-1"
                        aria-label="Remove Image"
                        onClick={() => onRemove(target)}>
                        <i className={`note-icon-trash ${iconClass}`}>🗑</i>
                    </button>
                </div>
            </div>
        </div>
    )
}
