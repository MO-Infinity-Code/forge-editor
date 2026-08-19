import { useRef, useEffect } from "preact/hooks"
import { bindDropdownToggle } from "../../Hooks/dropdown"

export function ParagraphToolbar({ logic }) {
    const { execCommand, saveSelectionRange } = logic
    const dropdownBtnRef = useRef(null)
    const dropdownRef = useRef(null)

    useEffect(() => {
        if (dropdownBtnRef.current && dropdownRef.current) {
            const destroy = bindDropdownToggle(dropdownBtnRef.current, dropdownRef.current)
            return destroy
        }
    }, [])

    const handleMouseDown = (e) => {
        e.preventDefault()
        saveSelectionRange()
    }

    const paraButtonClass =
        "forge-toolbar-button relative flex h-7 w-7 box-border cursor-pointer items-center justify-center rounded-[2px] border border-[#ccc] bg-white p-0 text-sm leading-none transition-all duration-150 ease-in-out hover:bg-[#f0f0f0] active:translate-y-px"

    const iconClass = "forge-toolbar-icon inline-block h-4 w-4"

    return (
        <div className="forge-toolbar-group forge-toolbar-paragraph flex items-center gap-0.5 text-black">
            <style>{`
                .forge-toolbar-dropdown { display: none; }
                .forge-toolbar-dropdown.is-open { display: block; }
                .forge-toolbar-paragraph svg * {
                    vector-effect: non-scaling-stroke;
                }
            `}</style>

            {/* زر قائمة غير مرتبة */}
            <button
                type="button"
                className={paraButtonClass}
                onMouseDown={handleMouseDown}
                onClick={() => execCommand("insertUnorderedList")}
                aria-label="Unordered list">
                <span className={iconClass}>
                    <svg
                        viewBox="0 0 20 20"
                        className="block h-4 w-4">
                        <circle
                            cx="2.5"
                            cy="4"
                            r="1.5"
                            fill="black"
                        />
                        <circle
                            cx="2.5"
                            cy="10"
                            r="1.5"
                            fill="black"
                        />
                        <circle
                            cx="2.5"
                            cy="16"
                            r="1.5"
                            fill="black"
                        />
                        <rect
                            x="7"
                            y="3"
                            width="12"
                            height="2"
                            rx="1"
                            fill="black"
                        />
                        <rect
                            x="7"
                            y="9"
                            width="12"
                            height="2"
                            rx="1"
                            fill="black"
                        />
                        <rect
                            x="7"
                            y="15"
                            width="12"
                            height="2"
                            rx="1"
                            fill="black"
                        />
                    </svg>
                </span>
                <span
                    className="forge-tooltip text-[13px]"
                    data-i18n="unorderedList">
                    Bullet list
                </span>
            </button>

            {/* زر قائمة مرتبة */}
            <button
                type="button"
                className={paraButtonClass}
                onMouseDown={handleMouseDown}
                onClick={() => execCommand("insertOrderedList")}
                aria-label="Ordered list">
                <span className={iconClass}>
                    <svg
                        viewBox="0 0 20 20"
                        className="block h-4 w-4">
                        <rect
                            x="7"
                            y="3"
                            width="12"
                            height="2"
                            rx="1"
                            fill="black"
                        />
                        <rect
                            x="7"
                            y="9"
                            width="12"
                            height="2"
                            rx="1"
                            fill="black"
                        />
                        <rect
                            x="7"
                            y="15"
                            width="12"
                            height="2"
                            rx="1"
                            fill="black"
                        />
                        <path
                            d="M 1.5 4.5 L 3.5 3 L 3.5 10 M 2 10 L 5 10"
                            fill="none"
                            stroke="black"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M 1.5 14 C 1.5 12.8 4.5 12.8 4.5 14.5 C 4.5 16 1.5 16.5 1.5 18 L 5 18"
                            fill="none"
                            stroke="black"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
                <span
                    className="forge-tooltip text-[13px]"
                    data-i18n="orderedList">
                    Numbered list
                </span>
            </button>

            {/* زر الفقرة لفتح القائمة المنسدلة */}
            <button
                ref={dropdownBtnRef}
                type="button"
                className={paraButtonClass}
                onMouseDown={handleMouseDown}
                aria-label="Paragraph">
                <span className={iconClass}>
                    <svg
                        viewBox="0 0 20 20"
                        className="block h-4 w-4">
                        <rect
                            x="1"
                            y="3"
                            width="18"
                            height="2"
                            rx="1"
                            fill="black"
                        />
                        <rect
                            x="1"
                            y="9"
                            width="18"
                            height="2"
                            rx="1"
                            fill="black"
                        />
                        <rect
                            x="1"
                            y="15"
                            width="12"
                            height="2"
                            rx="1"
                            fill="black"
                        />
                    </svg>
                </span>
                <span
                    className="forge-tooltip text-[13px]"
                    data-i18n="paragraph">
                    Paragraph
                </span>
            </button>

            {/* القائمة المنسدلة لخيارات المحاذاة والمسافة */}
            <div
                ref={dropdownRef}
                className="forge-toolbar-dropdown forge-dropdown-paragraph absolute left-0 top-full z-10 min-w-[130px] rounded-[2px] border border-[#ccc] bg-white p-1 rtl:left-auto rtl:right-0"
                role="list"
                aria-label="Paragraph options">
                <div className="forge-toolbar-group forge-toolbar-align mb-0.5 flex gap-0.5 border-b border-[#eee] py-0.5">
                    <button
                        type="button"
                        className={paraButtonClass}
                        onMouseDown={handleMouseDown}
                        onClick={() => execCommand("justifyLeft")}
                        aria-label="Align left">
                        <span className={iconClass}>
                            <svg
                                viewBox="0 0 20 20"
                                className="block h-4 w-4">
                                <rect
                                    x="1"
                                    y="3"
                                    width="18"
                                    height="2"
                                    rx="1"
                                    fill="black"
                                />
                                <rect
                                    x="1"
                                    y="9"
                                    width="12"
                                    height="2"
                                    rx="1"
                                    fill="black"
                                />
                                <rect
                                    x="1"
                                    y="15"
                                    width="18"
                                    height="2"
                                    rx="1"
                                    fill="black"
                                />
                            </svg>
                        </span>
                        <span
                            className="forge-tooltip text-[13px]"
                            data-i18n="alignLeft">
                            Left
                        </span>
                    </button>

                    <button
                        type="button"
                        className={paraButtonClass}
                        onMouseDown={handleMouseDown}
                        onClick={() => execCommand("justifyCenter")}
                        aria-label="Align center">
                        <span className={iconClass}>
                            <svg
                                viewBox="0 0 20 20"
                                className="block h-4 w-4">
                                <rect
                                    x="1"
                                    y="3"
                                    width="18"
                                    height="2"
                                    rx="1"
                                    fill="black"
                                />
                                <rect
                                    x="4"
                                    y="9"
                                    width="12"
                                    height="2"
                                    rx="1"
                                    fill="black"
                                />
                                <rect
                                    x="1"
                                    y="15"
                                    width="18"
                                    height="2"
                                    rx="1"
                                    fill="black"
                                />
                            </svg>
                        </span>
                        <span
                            className="forge-tooltip text-[13px]"
                            data-i18n="alignCenter">
                            Center
                        </span>
                    </button>

                    <button
                        type="button"
                        className={paraButtonClass}
                        onMouseDown={handleMouseDown}
                        onClick={() => execCommand("justifyRight")}
                        aria-label="Align right">
                        <span className={iconClass}>
                            <svg
                                viewBox="0 0 20 20"
                                className="block h-4 w-4">
                                <rect
                                    x="1"
                                    y="3"
                                    width="18"
                                    height="2"
                                    rx="1"
                                    fill="black"
                                />
                                <rect
                                    x="7"
                                    y="9"
                                    width="12"
                                    height="2"
                                    rx="1"
                                    fill="black"
                                />
                                <rect
                                    x="1"
                                    y="15"
                                    width="18"
                                    height="2"
                                    rx="1"
                                    fill="black"
                                />
                            </svg>
                        </span>
                        <span
                            className="forge-tooltip text-[13px]"
                            data-i18n="alignRight">
                            Right
                        </span>
                    </button>

                    <button
                        type="button"
                        className={paraButtonClass}
                        onMouseDown={handleMouseDown}
                        onClick={() => execCommand("justifyFull")}
                        aria-label="Justify">
                        <span className={iconClass}>
                            <svg
                                viewBox="0 0 20 20"
                                className="block h-4 w-4">
                                <rect
                                    x="1"
                                    y="3"
                                    width="18"
                                    height="2"
                                    rx="1"
                                    fill="black"
                                />
                                <rect
                                    x="1"
                                    y="9"
                                    width="18"
                                    height="2"
                                    rx="1"
                                    fill="black"
                                />
                                <rect
                                    x="1"
                                    y="15"
                                    width="18"
                                    height="2"
                                    rx="1"
                                    fill="black"
                                />
                            </svg>
                        </span>
                        <span
                            className="forge-tooltip text-[13px]"
                            data-i18n="justify">
                            Justify
                        </span>
                    </button>
                </div>

                <div className="forge-toolbar-group forge-toolbar-list flex gap-0.5 py-0.5">
                    <button
                        type="button"
                        className={paraButtonClass}
                        onMouseDown={handleMouseDown}
                        onClick={() => execCommand("outdent")}
                        aria-label="Outdent">
                        <span className={iconClass}>
                            <svg
                                viewBox="0 0 20 20"
                                className="block h-4 w-4"
                                fill="none"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <line
                                    x1="9"
                                    y1="3"
                                    x2="19"
                                    y2="3"
                                />
                                <line
                                    x1="9"
                                    y1="10"
                                    x2="19"
                                    y2="10"
                                />
                                <line
                                    x1="9"
                                    y1="17"
                                    x2="19"
                                    y2="17"
                                />
                                <polyline points="6,7 2,10 6,13" />
                            </svg>
                        </span>
                        <span
                            className="forge-tooltip text-[13px]"
                            data-i18n="outdent">
                            Outdent
                        </span>
                    </button>

                    <button
                        type="button"
                        className={paraButtonClass}
                        onMouseDown={handleMouseDown}
                        onClick={() => execCommand("indent")}
                        aria-label="Indent">
                        <span className={iconClass}>
                            <svg
                                viewBox="0 0 20 20"
                                className="block h-4 w-4"
                                fill="none"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <line
                                    x1="9"
                                    y1="3"
                                    x2="19"
                                    y2="3"
                                />
                                <line
                                    x1="9"
                                    y1="10"
                                    x2="19"
                                    y2="10"
                                />
                                <line
                                    x1="9"
                                    y1="17"
                                    x2="19"
                                    y2="17"
                                />
                                <polyline points="2,7 6,10 2,13" />
                            </svg>
                        </span>
                        <span
                            className="forge-tooltip text-[13px]"
                            data-i18n="indent">
                            Indent
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}
