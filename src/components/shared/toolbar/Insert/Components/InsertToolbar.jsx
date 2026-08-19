export function InsertToolbar({ logic }) {
    const { insertLink, insertImage, insertVideo } = logic

    const buttonClass =
        "forge-toolbar-button relative flex h-7 box-border cursor-pointer items-center justify-center gap-0.5 rounded-[2px] border border-[#ccc] bg-white px-[7px] py-1 text-sm leading-none transition-all duration-150 ease-in-out hover:bg-[#f0f0f0] active:translate-y-px"

    const iconClass =
        "forge-toolbar-icon inline-block min-w-4 text-center text-sm font-medium leading-none"

    return (
        <div className="forge-toolbar-group forge-toolbar-insert flex items-center gap-0.5">
            <button
                type="button"
                className={buttonClass}
                onClick={insertLink}
                aria-label="Link">
                <span className={iconClass}>🔗</span>
                <span
                    className="forge-tooltip text-[13px]"
                    data-i18n="link">
                    Link
                </span>
            </button>
            <button
                type="button"
                className={buttonClass}
                onClick={insertImage}
                aria-label="Image">
                <span className={iconClass}>🖼</span>
                <span
                    className="forge-tooltip text-[13px]"
                    data-i18n="image">
                    Image
                </span>
            </button>
            <button
                type="button"
                className={buttonClass}
                onClick={insertVideo}
                aria-label="Video">
                <span className={iconClass}>▶</span>
                <span
                    className="forge-tooltip text-[13px]"
                    data-i18n="video">
                    Video
                </span>
            </button>
        </div>
    )
}
