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

    const btnSquareClass =
        "group relative flex h-7 w-7 items-center justify-center bg-white p-0 text-sm leading-none text-[#333] cursor-pointer hover:bg-[#f0f0f0] active:translate-y-px"
    const tooltipClass =
        "pointer-events-none absolute left-1/2 top-[calc(100%+8px)] z-30 -translate-x-1/2 whitespace-nowrap rounded-sm border border-[#333] bg-[#ffffe1] px-2 py-0.5 text-xs leading-[1.6] text-black opacity-0 shadow-[1px_1px_3px_rgba(0,0,0,0.3)] transition-opacity duration-150 group-hover:visible group-hover:opacity-100 rtl:left-1/2 rtl:-translate-x-1/2 before:absolute before:bottom-full before:left-1/2 before:-translate-x-1/2 before:border-x-[5px] before:border-b-[5px] before:border-t-0 before:border-solid before:border-x-transparent before:border-b-[#333] after:absolute after:bottom-full after:left-1/2 after:-translate-x-1/2 after:translate-y-px after:border-x-[4px] after:border-b-[4px] after:border-t-0 after:border-solid after:border-x-transparent after:border-b-[#ffffe1]"

    return (
        <div className="relative flex flex-wrap items-center gap-1.5 border-b border-[#ccc] bg-[#f9f9f9] p-1">
            <div className="relative flex items-center rounded-sm border border-[#ccc] bg-white">
                <button
                    ref={dropdownBtnRef}
                    type="button"
                    className={`${btnSquareClass} rounded-sm px-1 w-auto min-w-[32px] justify-between gap-1`}
                    aria-label="Paragraph">
                    <span className="inline-block h-4 w-4 text-center text-sm leading-none [&_rect]:fill-black">
                        <svg
                            viewBox="0 0 20 20"
                            className="block h-4 w-4">
                            <path
                                d="M 4 4 L 10 4 L 10 16 M 10 4 L 16 4 M 10 10 L 16 10 M 10 16 L 16 16"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                            <circle
                                cx="5"
                                cy="12"
                                r="2"
                                fill="black"
                            />
                        </svg>
                    </span>
                    <span className="text-[10px] text-[#666]">▼</span>
                    <span
                        className={tooltipClass}
                        data-i18n="paragraph">
                        Formatting
                    </span>
                </button>

                <div
                    ref={dropdownRef}
                    className="forge-toolbar-dropdown absolute left-0 top-full z-10 hidden min-w-[130px] border border-[#ccc] bg-white p-1 rtl:left-auto rtl:right-0 [&.is-open]:block"
                    role="list"
                    aria-label="Paragraph options">
                    <div className="relative mb-0.5 flex items-center gap-0.5 border-b border-[#eee] pb-0.5">
                        <button
                            type="button"
                            className={btnSquareClass}
                            onClick={() => execCommand("justifyLeft")}
                            aria-label="Align left">
                            <span className="inline-block h-4 w-4 [&_rect]:fill-black">
                                <svg
                                    viewBox="0 0 20 20"
                                    className="block h-4 w-4">
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
                            <span className={tooltipClass}>Left</span>
                        </button>
                        <button
                            type="button"
                            className={btnSquareClass}
                            onClick={() => execCommand("justifyCenter")}
                            aria-label="Align center">
                            <span className="inline-block h-4 w-4 [&_rect]:fill-black">
                                <svg
                                    viewBox="0 0 20 20"
                                    className="block h-4 w-4">
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
                            <span className={tooltipClass}>Center</span>
                        </button>
                        <button
                            type="button"
                            className={btnSquareClass}
                            onClick={() => execCommand("justifyRight")}
                            aria-label="Align right">
                            <span className="inline-block h-4 w-4 [&_rect]:fill-black">
                                <svg
                                    viewBox="0 0 20 20"
                                    className="block h-4 w-4">
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
                            <span className={tooltipClass}>Right</span>
                        </button>
                    </div>

                    <div className="relative flex items-center gap-0.5 py-0.5">
                        <button
                            type="button"
                            className={btnSquareClass}
                            onClick={() => execCommand("outdent")}
                            aria-label="Outdent">
                            <span className="inline-block h-4 w-4 [&_line]:stroke-black [&_polyline]:stroke-black">
                                <svg
                                    viewBox="0 0 20 20"
                                    className="block h-4 w-4"
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
                            <span className={tooltipClass}>Outdent</span>
                        </button>
                        <button
                            type="button"
                            className={btnSquareClass}
                            onClick={() => execCommand("indent")}
                            aria-label="Indent">
                            <span className="inline-block h-4 w-4 [&_line]:stroke-black [&_polyline]:stroke-black">
                                <svg
                                    viewBox="0 0 20 20"
                                    className="block h-4 w-4"
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
                            <span className={tooltipClass}>Indent</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="inline-flex items-center rounded-sm border border-[#ccc] bg-white divide-x divide-[#ccc] rtl:divide-x-reverse">
                <button
                    type="button"
                    className={btnSquareClass}
                    onClick={() => execCommand("bold")}
                    aria-label="Bold">
                    <span className="text-sm font-bold font-serif">B</span>
                    <span
                        className={tooltipClass}
                        data-i18n="bold">
                        Bold
                    </span>
                </button>

                <button
                    type="button"
                    className={btnSquareClass}
                    onClick={() => execCommand("underline")}
                    aria-label="Underline">
                    <span className="text-sm font-bold font-serif underline">U</span>
                    <span
                        className={tooltipClass}
                        data-i18n="underline">
                        Underline
                    </span>
                </button>

                <button
                    type="button"
                    className={btnSquareClass}
                    onClick={() => execCommand("removeFormat")}
                    aria-label="Remove Font Style">
                    <span className="inline-block h-4 w-4 text-center text-sm leading-none">
                        <svg
                            viewBox="0 0 20 20"
                            className="block h-4 w-4 fill-none stroke-black"
                            strokeWidth="2">
                            <path d="M 4 4 L 16 16 M 16 4 L 4 16" />
                        </svg>
                    </span>
                    <span
                        className={tooltipClass}
                        data-i18n="removeFormat">
                        Remove Font Style
                    </span>
                </button>
            </div>

            <div className="inline-flex items-center rounded-sm border border-[#ccc] bg-white divide-x divide-[#ccc] rtl:divide-x-reverse">
                <button
                    type="button"
                    className={btnSquareClass}
                    onClick={() => execCommand("insertUnorderedList")}
                    aria-label="Unordered list">
                    <span className="inline-block h-4 w-4 min-w-[16px] text-center text-sm leading-none [&_circle]:fill-black [&_rect]:fill-black">
                        <svg
                            viewBox="0 0 20 20"
                            className="block h-4 w-4">
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
                        className={tooltipClass}
                        data-i18n="unorderedList">
                        Bullet list
                    </span>
                </button>

                <button
                    type="button"
                    className={btnSquareClass}
                    onClick={() => execCommand("insertOrderedList")}
                    aria-label="Ordered list">
                    <span className="inline-block h-4 w-4 min-w-[16px] text-center text-sm leading-none [&_rect]:fill-black">
                        <svg
                            viewBox="0 0 20 20"
                            className="block h-4 w-4">
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
                            <path
                                d="M 1.5 4.5 L 3.5 3 L 3.5 10 M 2 10 L 5 10"
                                fill="none"
                                stroke="#000"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
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
                        className={tooltipClass}
                        data-i18n="orderedList">
                        Numbered list
                    </span>
                </button>
            </div>
        </div>
    )
}
