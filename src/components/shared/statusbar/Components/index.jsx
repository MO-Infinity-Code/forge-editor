export function Statusbar() {
    return (
        <div
            className="forge-statusbar"
            role="status">
            <div
                className="forge-resizebar"
                aria-label="resize">
                <div className="forge-icon-bar" />
                <div className="forge-icon-bar" />
                <div className="forge-icon-bar" />
            </div>
        </div>
    )
}
