export function InsertToolbar({ logic }) {
    const { insertLink, insertImage, insertVideo } = logic

    return (
        <div className="forge-toolbar-group forge-toolbar-insert">
            <button
                type="button"
                className="forge-toolbar-button"
                onClick={insertLink}
                aria-label="Link">
                🔗
                <span
                    className="forge-tooltip"
                    data-i18n="link">
                    Link
                </span>
            </button>
            <button
                type="button"
                className="forge-toolbar-button"
                onClick={insertImage}
                aria-label="Picture">
                🖼
                <span
                    className="forge-tooltip"
                    data-i18n="picture">
                    Picture
                </span>
            </button>
            <button
                type="button"
                className="forge-toolbar-button"
                onClick={insertVideo}
                aria-label="Video">
                ▶
                <span
                    className="forge-tooltip"
                    data-i18n="video">
                    Video
                </span>
            </button>
        </div>
    )
}
