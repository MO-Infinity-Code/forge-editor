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

    return (
        <div
            ref={popoverRef}
            className="note-popover bottom note-image-popover"
            style={popoverStyle}>
            <div className="note-popover-arrow"></div>
            <div className="popover-content note-children-container">
                <div className="note-btn-group note-resize">
                    <button
                        type="button"
                        className="note-btn"
                        tabIndex="-1"
                        aria-label="Resize full"
                        onClick={() => onResize(target, 1)}>
                        <span className="note-fontsize-10">100%</span>
                    </button>
                    <button
                        type="button"
                        className="note-btn"
                        tabIndex="-1"
                        aria-label="Resize half"
                        onClick={() => onResize(target, 0.5)}>
                        <span className="note-fontsize-10">50%</span>
                    </button>
                    <button
                        type="button"
                        className="note-btn"
                        tabIndex="-1"
                        aria-label="Resize quarter"
                        onClick={() => onResize(target, 0.25)}>
                        <span className="note-fontsize-10">25%</span>
                    </button>
                    <button
                        type="button"
                        className="note-btn"
                        tabIndex="-1"
                        aria-label="Original size"
                        onClick={() => onResize(target, "original")}>
                        <i className="note-icon-rollback">↺</i>
                    </button>
                </div>
                <div className="note-btn-group note-float">
                    <button
                        type="button"
                        className="note-btn"
                        tabIndex="-1"
                        aria-label="Float Left"
                        onClick={() => onFloat(target, "left")}>
                        <i className="note-icon-float-left">◀</i>
                    </button>
                    <button
                        type="button"
                        className="note-btn"
                        tabIndex="-1"
                        aria-label="Float Right"
                        onClick={() => onFloat(target, "right")}>
                        <i className="note-icon-float-right">▶</i>
                    </button>
                    <button
                        type="button"
                        className="note-btn"
                        tabIndex="-1"
                        aria-label="Remove float"
                        onClick={() => onFloat(target, "none")}>
                        <i className="note-icon-rollback">↺</i>
                    </button>
                </div>
                <div className="note-btn-group note-remove">
                    <button
                        type="button"
                        className="note-btn"
                        tabIndex="-1"
                        aria-label="Remove Image"
                        onClick={() => onRemove(target)}>
                        <i className="note-icon-trash">🗑</i>
                    </button>
                </div>
            </div>
        </div>
    )
}
