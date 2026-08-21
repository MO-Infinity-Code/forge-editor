import { useRef, useEffect, useState } from "preact/hooks"

export function ParagraphToolbar({ logic = {} }) {
    const {
        saveSelectionRange,
        toggleUnorderedList,
        toggleOrderedList,
        setAlignment,
        outdent,
        indent
    } = logic

    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const handleAction = (e, actionFn, param = null) => {
        e.preventDefault()

        if (typeof saveSelectionRange === "function") {
            saveSelectionRange()
        }

        if (typeof actionFn === "function") {
            actionFn(param)
        }
    }

    const groupButtonClass =
        "forge-toolbar-button group relative flex h-8 items-center justify-center bg-white px-2.5 text-sm transition-all duration-150 hover:bg-[#f5f5f5] active:bg-[#e8e8e8] focus:outline-none"

    const iconClass = "forge-toolbar-icon inline-block h-4 w-4"

    const tooltipClass =
        "pointer-events-none absolute left-1/2 top-[calc(100%+8px)] z-30 -translate-x-1/2 whitespace-nowrap rounded-md border border-[#2c2c2c] bg-[#1e1e1e] px-2.5 py-1 text-[11px] font-medium leading-none text-white opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100 rtl:left-1/2 rtl:-translate-x-1/2 before:absolute before:bottom-full before:left-1/2 before:-translate-x-1/2 before:border-x-[5px] before:border-b-[5px] before:border-t-0 before:border-solid before:border-x-transparent before:border-b-[#2c2c2c] after:absolute after:bottom-full after:left-1/2 after:-translate-x-1/2 after:translate-y-[1px] after:border-x-[4px] after:border-b-[4px] after:border-t-0 after:border-solid after:border-x-transparent after:border-b-[#1e1e1e]"

    const dropdownItemClass =
        "group relative flex h-7 w-7 items-center justify-center rounded hover:bg-gray-100"

    return (
        <div
            ref={containerRef}
            className="forge-toolbar-group forge-toolbar-paragraph relative inline-flex items-center text-black">
            <style>{`
                .forge-toolbar-paragraph svg * {
                    vector-effect: non-scaling-stroke;
                }
            `}</style>

            <div className="inline-flex rounded-md border border-[#d1d5db] bg-white shadow-sm -space-x-px">
                <button
                    type="button"
                    className={groupButtonClass}
                    onMouseDown={(e) => handleAction(e, toggleUnorderedList)}
                    aria-label="Unordered list">
                    <span className={iconClass}>
                        <svg
                            viewBox="0 0 20 20"
                            className="block h-4 w-4">
                            <circle
                                cx="3"
                                cy="5"
                                r="1.5"
                                fill="black"
                            />
                            <circle
                                cx="3"
                                cy="10"
                                r="1.5"
                                fill="black"
                            />
                            <circle
                                cx="3"
                                cy="15"
                                r="1.5"
                                fill="black"
                            />
                            <rect
                                x="7"
                                y="4"
                                width="11"
                                height="2"
                                rx="1"
                                fill="black"
                            />
                            <rect
                                x="7"
                                y="9"
                                width="11"
                                height="2"
                                rx="1"
                                fill="black"
                            />
                            <rect
                                x="7"
                                y="14"
                                width="11"
                                height="2"
                                rx="1"
                                fill="black"
                            />
                        </svg>
                    </span>
                    <span
                        className={tooltipClass}
                        data-i18n="unorderedList">
                        Bullet list
                    </span>
                </button>

                <div className="w-[1px] bg-[#e5e7eb] my-1"></div>

                <button
                    type="button"
                    className={groupButtonClass}
                    onMouseDown={(e) => handleAction(e, toggleOrderedList)}
                    aria-label="Ordered list">
                    <span className={iconClass}>
                        <svg
                            viewBox="0 0 20 20"
                            className="block h-4 w-4">
                            <rect
                                x="7"
                                y="4"
                                width="11"
                                height="2"
                                rx="1"
                                fill="black"
                            />
                            <rect
                                x="7"
                                y="9"
                                width="11"
                                height="2"
                                rx="1"
                                fill="black"
                            />
                            <rect
                                x="7"
                                y="14"
                                width="11"
                                height="2"
                                rx="1"
                                fill="black"
                            />
                            <path
                                d="M 1.5 4.5 L 3.5 3 L 3.5 10 M 2 10 L 5 10"
                                fill="none"
                                stroke="black"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M 1.5 14 C 1.5 12.8 4.5 12.8 4.5 14.5 C 4.5 16 1.5 16.5 1.5 18 L 5 18"
                                fill="none"
                                stroke="black"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                    <span
                        className={tooltipClass}
                        data-i18n="orderedList">
                        Numbered list
                    </span>
                </button>

                <div className="w-[1px] bg-[#e5e7eb] my-1"></div>

                <button
                    type="button"
                    className={`${groupButtonClass} gap-1 pr-1.5`}
                    onMouseDown={(e) => {
                        e.preventDefault()
                        if (typeof saveSelectionRange === "function") saveSelectionRange()
                    }}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Paragraph">
                    <span className={iconClass}>
                        <svg
                            viewBox="0 0 20 20"
                            className="block h-4 w-4">
                            <rect
                                x="1"
                                y="4"
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
                                y="14"
                                width="12"
                                height="2"
                                rx="1"
                                fill="black"
                            />
                        </svg>
                    </span>
                    <svg
                        className={`h-2.5 w-2.5 fill-current text-gray-700 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                    <span
                        className={tooltipClass}
                        data-i18n="paragraph">
                        Paragraph options
                    </span>
                </button>
            </div>

            {isOpen && (
                <div
                    className="forge-toolbar-dropdown absolute left-0 top-full mt-1 z-20 min-w-[130px] rounded-md border border-[#ccc] bg-white p-1 shadow-lg rtl:left-auto rtl:right-0 block"
                    role="list"
                    aria-label="Paragraph options">
                    <div className="forge-toolbar-group forge-toolbar-align mb-0.5 flex gap-0.5 border-b border-[#eee] pb-1">
                        <button
                            type="button"
                            className={dropdownItemClass}
                            onMouseDown={(e) => {
                                handleAction(e, setAlignment, "left")
                                setIsOpen(false)
                            }}
                            aria-label="Align left">
                            <span className={iconClass}>
                                <svg
                                    viewBox="0 0 20 20"
                                    className="block h-4 w-4">
                                    <rect
                                        x="1"
                                        y="4"
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
                                        y="14"
                                        width="18"
                                        height="2"
                                        rx="1"
                                        fill="black"
                                    />
                                </svg>
                            </span>
                            <span
                                className={tooltipClass}
                                data-i18n="alignLeft">
                                Align left
                            </span>
                        </button>

                        <button
                            type="button"
                            className={dropdownItemClass}
                            onMouseDown={(e) => {
                                handleAction(e, setAlignment, "center")
                                setIsOpen(false)
                            }}
                            aria-label="Align center">
                            <span className={iconClass}>
                                <svg
                                    viewBox="0 0 20 20"
                                    className="block h-4 w-4">
                                    <rect
                                        x="1"
                                        y="4"
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
                                        y="14"
                                        width="18"
                                        height="2"
                                        rx="1"
                                        fill="black"
                                    />
                                </svg>
                            </span>
                            <span
                                className={tooltipClass}
                                data-i18n="alignCenter">
                                Align center
                            </span>
                        </button>

                        <button
                            type="button"
                            className={dropdownItemClass}
                            onMouseDown={(e) => {
                                handleAction(e, setAlignment, "right")
                                setIsOpen(false)
                            }}
                            aria-label="Align right">
                            <span className={iconClass}>
                                <svg
                                    viewBox="0 0 20 20"
                                    className="block h-4 w-4">
                                    <rect
                                        x="1"
                                        y="4"
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
                                        y="14"
                                        width="18"
                                        height="2"
                                        rx="1"
                                        fill="black"
                                    />
                                </svg>
                            </span>
                            <span
                                className={tooltipClass}
                                data-i18n="alignRight">
                                Align right
                            </span>
                        </button>

                        <button
                            type="button"
                            className={dropdownItemClass}
                            onMouseDown={(e) => {
                                handleAction(e, setAlignment, "justify")
                                setIsOpen(false)
                            }}
                            aria-label="Justify">
                            <span className={iconClass}>
                                <svg
                                    viewBox="0 0 20 20"
                                    className="block h-4 w-4">
                                    <rect
                                        x="1"
                                        y="4"
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
                                        y="14"
                                        width="18"
                                        height="2"
                                        rx="1"
                                        fill="black"
                                    />
                                </svg>
                            </span>
                            <span
                                className={tooltipClass}
                                data-i18n="justify">
                                Justify
                            </span>
                        </button>
                    </div>

                    <div className="forge-toolbar-group forge-toolbar-list flex gap-0.5 py-0.5">
                        <button
                            type="button"
                            className={dropdownItemClass}
                            onMouseDown={(e) => {
                                handleAction(e, outdent)
                                setIsOpen(false)
                            }}
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
                                        y1="4"
                                        x2="19"
                                        y2="4"
                                    />
                                    <line
                                        x1="9"
                                        y1="10"
                                        x2="19"
                                        y2="10"
                                    />
                                    <line
                                        x1="9"
                                        y1="16"
                                        x2="19"
                                        y2="16"
                                    />
                                    <polyline points="6,8 2,12 6,16" />
                                </svg>
                            </span>
                            <span
                                className={tooltipClass}
                                data-i18n="outdent">
                                Outdent
                            </span>
                        </button>

                        <button
                            type="button"
                            className={dropdownItemClass}
                            onMouseDown={(e) => {
                                handleAction(e, indent)
                                setIsOpen(false)
                            }}
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
                                        y1="4"
                                        x2="19"
                                        y2="4"
                                    />
                                    <line
                                        x1="9"
                                        y1="10"
                                        x2="19"
                                        y2="10"
                                    />
                                    <line
                                        x1="9"
                                        y1="16"
                                        x2="19"
                                        y2="16"
                                    />
                                    <polyline points="2,8 6,12 2,16" />
                                </svg>
                            </span>
                            <span
                                className={tooltipClass}
                                data-i18n="indent">
                                Indent
                            </span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
