import { useRef, useEffect } from "preact/hooks"
import { bindDropdownToggle } from "../../Hooks/dropdown"

export function ParagraphToolbar({ logic }) {
    const { execCommand } = logic
    const dropdownBtnRef = useRef(null)
    const dropdownRef = useRef(null)

    useEffect(() => {
        if (dropdownBtnRef.current && dropdownRef.current) {
            const destroy = bindDropdownToggle(dropdownBtnRef.current, dropdownRef.current)
            return destroy
        }
    }, [])

    return (
        <div className="forge-toolbar-group forge-toolbar-paragraph">
            <button
                type="button"
                className="forge-toolbar-button"
                onClick={() => execCommand("insertUnorderedList")}
                aria-label="Unordered list">
                <span className="forge-toolbar-icon">
                    <svg
                        viewBox="0 0 20 20"
                        width="16"
                        height="16">
                        <circle
                            cx="2.5"
                            cy="4"
                            r="1.5"
                        />
                        <circle
                            cx="2.5"
                            cy="10"
                            r="1.5"
                        />
                        <circle
                            cx="2.5"
                            cy="16"
                            r="1.5"
                        />
                        <rect
                            x="7"
                            y="3"
                            width="12"
                            height="2"
                            rx="1"
                        />
                        <rect
                            x="7"
                            y="9"
                            width="12"
                            height="2"
                            rx="1"
                        />
                        <rect
                            x="7"
                            y="15"
                            width="12"
                            height="2"
                            rx="1"
                        />
                    </svg>
                </span>
                <span
                    className="forge-tooltip"
                    data-i18n="unorderedList">
                    Bullet list
                </span>
            </button>

            <button
                type="button"
                className="forge-toolbar-button"
                onClick={() => execCommand("insertOrderedList")}
                aria-label="Ordered list">
                <span className="forge-toolbar-icon">
                    <svg
                        viewBox="0 0 20 20"
                        width="16"
                        height="16">
                        {/* الأسطر الثلاثة */}
                        <rect
                            x="7"
                            y="3"
                            width="12"
                            height="2"
                            rx="1"
                        />
                        <rect
                            x="7"
                            y="9"
                            width="12"
                            height="2"
                            rx="1"
                        />
                        <rect
                            x="7"
                            y="15"
                            width="12"
                            height="2"
                            rx="1"
                        />

                        {/* رقم 1 كبير واخد مساحة أفقية موازية لأول سطرين */}
                        <path
                            d="M 1.5 4.5 L 3.5 3 L 3.5 10 M 2 10 L 5 10"
                            fill="none"
                            stroke="#000"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                        {/* رقم 2 كبير وموازي للسطر الثالث */}
                        <path
                            d="M 1.5 14 C 1.5 12.8 4.5 12.8 4.5 14.5 C 4.5 16 1.5 16.5 1.5 18 L 5 18"
                            fill="none"
                            stroke="#000"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
                <span
                    className="forge-tooltip"
                    data-i18n="orderedList">
                    Numbered list
                </span>
            </button>

            <button
                ref={dropdownBtnRef}
                type="button"
                className="forge-toolbar-button"
                aria-label="Paragraph">
                <span className="forge-toolbar-icon">
                    <svg
                        viewBox="0 0 20 20"
                        width="16"
                        height="16">
                        <rect
                            x="1"
                            y="3"
                            width="18"
                            height="2"
                            rx="1"
                        />
                        <rect
                            x="1"
                            y="9"
                            width="18"
                            height="2"
                            rx="1"
                        />
                        <rect
                            x="1"
                            y="15"
                            width="12"
                            height="2"
                            rx="1"
                        />
                    </svg>
                </span>
                <span
                    className="forge-tooltip"
                    data-i18n="paragraph">
                    Paragraph
                </span>
            </button>

            <div
                ref={dropdownRef}
                className="forge-toolbar-dropdown forge-dropdown-paragraph"
                role="list"
                aria-label="Paragraph options">
                <div className="forge-toolbar-group forge-toolbar-align">
                    <button
                        type="button"
                        className="forge-toolbar-button"
                        onClick={() => execCommand("justifyLeft")}
                        aria-label="Align left">
                        <span className="forge-toolbar-icon">
                            <svg
                                viewBox="0 0 20 20"
                                width="16"
                                height="16">
                                <rect
                                    x="1"
                                    y="3"
                                    width="18"
                                    height="2"
                                    rx="1"
                                />
                                <rect
                                    x="1"
                                    y="9"
                                    width="12"
                                    height="2"
                                    rx="1"
                                />
                                <rect
                                    x="1"
                                    y="15"
                                    width="18"
                                    height="2"
                                    rx="1"
                                />
                            </svg>
                        </span>
                        <span
                            className="forge-tooltip"
                            data-i18n="alignLeft">
                            Left
                        </span>
                    </button>

                    <button
                        type="button"
                        className="forge-toolbar-button"
                        onClick={() => execCommand("justifyCenter")}
                        aria-label="Align center">
                        <span className="forge-toolbar-icon">
                            <svg
                                viewBox="0 0 20 20"
                                width="16"
                                height="16">
                                <rect
                                    x="1"
                                    y="3"
                                    width="18"
                                    height="2"
                                    rx="1"
                                />
                                <rect
                                    x="4"
                                    y="9"
                                    width="12"
                                    height="2"
                                    rx="1"
                                />
                                <rect
                                    x="1"
                                    y="15"
                                    width="18"
                                    height="2"
                                    rx="1"
                                />
                            </svg>
                        </span>
                        <span
                            className="forge-tooltip"
                            data-i18n="alignCenter">
                            Center
                        </span>
                    </button>

                    <button
                        type="button"
                        className="forge-toolbar-button"
                        onClick={() => execCommand("justifyRight")}
                        aria-label="Align right">
                        <span className="forge-toolbar-icon">
                            <svg
                                viewBox="0 0 20 20"
                                width="16"
                                height="16">
                                <rect
                                    x="1"
                                    y="3"
                                    width="18"
                                    height="2"
                                    rx="1"
                                />
                                <rect
                                    x="7"
                                    y="9"
                                    width="12"
                                    height="2"
                                    rx="1"
                                />
                                <rect
                                    x="1"
                                    y="15"
                                    width="18"
                                    height="2"
                                    rx="1"
                                />
                            </svg>
                        </span>
                        <span
                            className="forge-tooltip"
                            data-i18n="alignRight">
                            Right
                        </span>
                    </button>

                    <button
                        type="button"
                        className="forge-toolbar-button"
                        onClick={() => execCommand("justifyFull")}
                        aria-label="Justify">
                        <span className="forge-toolbar-icon">
                            <svg
                                viewBox="0 0 20 20"
                                width="16"
                                height="16">
                                <rect
                                    x="1"
                                    y="3"
                                    width="18"
                                    height="2"
                                    rx="1"
                                />
                                <rect
                                    x="1"
                                    y="9"
                                    width="18"
                                    height="2"
                                    rx="1"
                                />
                                <rect
                                    x="1"
                                    y="15"
                                    width="18"
                                    height="2"
                                    rx="1"
                                />
                            </svg>
                        </span>
                        <span
                            className="forge-tooltip"
                            data-i18n="justify">
                            Justify
                        </span>
                    </button>
                </div>

                <div className="forge-toolbar-group forge-toolbar-list">
                    <button
                        type="button"
                        className="forge-toolbar-button"
                        onClick={() => execCommand("outdent")}
                        aria-label="Outdent">
                        <span className="forge-toolbar-icon">
                            <svg
                                viewBox="0 0 20 20"
                                width="16"
                                height="16"
                                fill="none"
                                stroke="currentColor"
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
                            className="forge-tooltip"
                            data-i18n="outdent">
                            Outdent
                        </span>
                    </button>

                    <button
                        type="button"
                        className="forge-toolbar-button"
                        onClick={() => execCommand("indent")}
                        aria-label="Indent">
                        <span className="forge-toolbar-icon">
                            <svg
                                viewBox="0 0 20 20"
                                width="16"
                                height="16"
                                fill="none"
                                stroke="currentColor"
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
                            className="forge-tooltip"
                            data-i18n="indent">
                            Indent
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}
