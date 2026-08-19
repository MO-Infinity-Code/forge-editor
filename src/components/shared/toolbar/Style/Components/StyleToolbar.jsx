import { useState, useRef, useEffect } from "preact/hooks"

export function StyleToolbar() {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null)
    const buttonRef = useRef(null)

    useEffect(() => {
        if (!isOpen) return

        function handleClickOutside(e) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(e.target)
            ) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [isOpen])

    const buttonClass =
        "forge-toolbar-button group relative flex h-7 cursor-pointer items-center justify-center rounded-[2px] border border-[#ccc] bg-white px-2 text-sm leading-none transition-all duration-150 hover:bg-[#f0f0f0] active:translate-y-px"

    const itemClass =
        "forge-dropdown-item block cursor-pointer whitespace-nowrap px-3 py-1 text-[#333] no-underline transition-colors duration-100 hover:bg-[#f0f0f0]"

    const tooltipClass =
        "forge-tooltip pointer-events-none invisible absolute left-1/2 top-[calc(100%+8px)] -translate-x-1/2 whitespace-nowrap rounded-[2px] border border-[#333] bg-[#ffffe1] px-2 py-0.5 text-[13px] leading-[1.6] text-black opacity-0 shadow-[1px_1px_3px_rgba(0,0,0,0.3)] transition-opacity duration-150 group-hover:visible group-hover:opacity-100"

    const handleItemClick = () => {
        setIsOpen(false)
    }

    return (
        <div className="forge-toolbar-group forge-toolbar-style flex items-center gap-0.5">
            <div className="relative">
                <button
                    ref={buttonRef}
                    type="button"
                    className={buttonClass}
                    data-command="style"
                    aria-label="Style"
                    onClick={() => setIsOpen(!isOpen)}>
                    <span className="forge-icon">✦</span>
                    <span
                        className={tooltipClass}
                        data-i18n="style"></span>
                </button>

                <div
                    ref={dropdownRef}
                    className={`forge-toolbar-dropdown forge-dropdown-style absolute left-0 top-[calc(100%+4px)] z-20 max-h-24 min-w-[90px] overflow-y-auto rounded-[2px] border border-[#ccc] bg-white p-0 shadow-[0_2px_6px_rgba(0,0,0,0.15)] rtl:left-auto rtl:right-0 ${
                        isOpen ? "block" : "hidden"
                    }`}
                    role="list"
                    aria-label="Style">
                    <a
                        className={itemClass}
                        href="#"
                        data-value="p"
                        role="listitem"
                        onClick={handleItemClick}>
                        <p className="m-0 text-[13px] font-normal leading-[1.4]">Normal</p>
                    </a>
                    <a
                        className={itemClass}
                        href="#"
                        data-value="blockquote"
                        role="listitem"
                        onClick={handleItemClick}>
                        <blockquote className="m-0 text-[13px] font-normal leading-[1.4]">
                            Blockquote
                        </blockquote>
                    </a>
                    <a
                        className={itemClass}
                        href="#"
                        data-value="pre"
                        role="listitem"
                        onClick={handleItemClick}>
                        <pre className="m-0 font-mono text-[13px] leading-[1.4]">Code</pre>
                    </a>
                    <a
                        className={itemClass}
                        href="#"
                        data-value="h1"
                        role="listitem"
                        onClick={handleItemClick}>
                        <h1 className="m-0 text-[20px] font-normal leading-[1.4]">Heading 1</h1>
                    </a>
                    <a
                        className={itemClass}
                        href="#"
                        data-value="h2"
                        role="listitem"
                        onClick={handleItemClick}>
                        <h2 className="m-0 text-[18px] font-normal leading-[1.4]">Heading 2</h2>
                    </a>
                    <a
                        className={itemClass}
                        href="#"
                        data-value="h3"
                        role="listitem"
                        onClick={handleItemClick}>
                        <h3 className="m-0 text-[16px] font-normal leading-[1.4]">Heading 3</h3>
                    </a>
                    <a
                        className={itemClass}
                        href="#"
                        data-value="h4"
                        role="listitem"
                        onClick={handleItemClick}>
                        <h4 className="m-0 text-[15px] font-normal leading-[1.4]">Heading 4</h4>
                    </a>
                    <a
                        className={itemClass}
                        href="#"
                        data-value="h5"
                        role="listitem"
                        onClick={handleItemClick}>
                        <h5 className="m-0 text-[14px] font-normal leading-[1.4]">Heading 5</h5>
                    </a>
                    <a
                        className={itemClass}
                        href="#"
                        data-value="h6"
                        role="listitem"
                        onClick={handleItemClick}>
                        <h6 className="m-0 text-[13px] font-normal leading-[1.4]">Heading 6</h6>
                    </a>
                </div>
            </div>
        </div>
    )
}
