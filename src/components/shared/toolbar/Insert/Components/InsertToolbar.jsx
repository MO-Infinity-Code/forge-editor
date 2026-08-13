export function InsertToolbar({ logic }) {
    const { insertLink, insertImage, insertVideo } = logic

    return (
        <div className="forge-toolbar-group forge-toolbar-insert">
            <button
                type="button"
                className="forge-toolbar-button"
                onClick={insertLink}
                aria-label="Link">
                <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
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
                <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2">
                    <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                    />
                    <circle
                        cx="8.5"
                        cy="8.5"
                        r="1.5"
                    />
                    <polyline points="21 15 16 10 5 21" />
                </svg>
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
                <span className="forge-toolbar-icon">▶</span>
                <span
                    className="forge-tooltip"
                    data-i18n="video">
                    Video
                </span>
            </button>
        </div>
    )
}
