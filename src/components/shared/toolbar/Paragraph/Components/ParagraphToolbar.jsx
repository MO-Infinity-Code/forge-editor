import { useRef, useEffect, useState } from "preact/hooks"

export function ParagraphToolbar({ logic = {} }) {
    const { saveSelectionRange, toggleUnorderedList, toggleOrderedList, setAlignment } = logic

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
        "forge-toolbar-button relative flex h-8 items-center justify-center bg-white px-2.5 text-sm transition-all duration-150 hover:bg-[#f5f5f5] active:bg-[#e8e8e8] focus:outline-none"

    const iconClass = "forge-toolbar-icon inline-block h-4 w-4"

    return (
        <div
            ref={containerRef}
            className="forge-toolbar-group forge-toolbar-paragraph relative inline-flex items-center text-black">
            <style>{`
                .forge-toolbar-paragraph svg * {
                    vector-effect: non-scaling-stroke;
                }
                .forge-tooltip {
                    display: none;
                }
            `}</style>

            <div className="inline-flex rounded-md border border-[#d1d5db] bg-white shadow-sm -space-x-px overflow-hidden">
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
                            className="flex h-7 w-7 items-center justify-center rounded hover:bg-gray-100"
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
                        </button>

                        <button
                            type="button"
                            className="flex h-7 w-7 items-center justify-center rounded hover:bg-gray-100"
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
                        </button>

                        <button
                            type="button"
                            className="flex h-7 w-7 items-center justify-center rounded hover:bg-gray-100"
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
                        </button>

                        <button
                            type="button"
                            className="flex h-7 w-7 items-center justify-center rounded hover:bg-gray-100"
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
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
