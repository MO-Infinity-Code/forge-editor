export function FontToolbar({ onCommand }) {
    return (
        <div className="forge-toolbar-group forge-toolbar-font">
            <button
                type="button"
                className="forge-toolbar-button forge-btn-bold"
                onClick={() => onCommand("bold")}
                aria-label="Bold">
                <strong>B</strong>
                <span
                    className="forge-tooltip"
                    data-i18n="bold"></span>
            </button>
            <button
                type="button"
                className="forge-toolbar-button forge-btn-underline"
                onClick={() => onCommand("underline")}
                aria-label="Underline">
                <u>U</u>
                <span
                    className="forge-tooltip"
                    data-i18n="underline"></span>
            </button>
            <button
                type="button"
                className="forge-toolbar-button"
                onClick={() => onCommand("removeFormat")}
                aria-label="Remove Font Style">
                <span>⌫</span>
                <span
                    className="forge-tooltip"
                    data-i18n="removeFormat"></span>
            </button>
        </div>
    )
}
