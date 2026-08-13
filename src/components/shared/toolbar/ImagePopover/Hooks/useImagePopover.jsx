import { useState, useEffect } from "preact/hooks"

export function useImagePopover() {
    const [target, setTarget] = useState(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleClick = (e) => {
            const img = e.target.closest("img")
            if (img) {
                setTarget(img)
                setVisible(true)
            } else {
                if (visible) {
                    setVisible(false)
                    setTarget(null)
                }
            }
        }

        const handleKeyDown = (e) => {
            if (e.key === "Escape" && visible) {
                setVisible(false)
                setTarget(null)
            }
        }

        document.addEventListener("click", handleClick)
        document.addEventListener("keydown", handleKeyDown)

        return () => {
            document.removeEventListener("click", handleClick)
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [visible])

    const handleResize = (img, scale) => {
        if (scale === "original") {
            img.style.width = ""
            img.style.height = ""
            img.removeAttribute("width")
            img.removeAttribute("height")
        } else {
            const naturalWidth = img.naturalWidth || img.width
            const naturalHeight = img.naturalHeight || img.height
            img.style.width = naturalWidth * scale + "px"
            img.style.height = naturalHeight * scale + "px"
        }
        setVisible(false)
        setTarget(null)
    }

    const handleFloat = (img, direction) => {
        if (direction === "none") {
            img.style.float = ""
            img.style.margin = ""
        } else {
            img.style.float = direction
            img.style.margin = direction === "left" ? "0 10px 5px 0" : "0 0 5px 10px"
        }
        setVisible(false)
        setTarget(null)
    }

    const handleRemove = (img) => {
        img.parentElement.removeChild(img)
        setVisible(false)
        setTarget(null)
    }

    const handleClose = () => {
        setVisible(false)
        setTarget(null)
    }

    return {
        target: visible ? target : null,
        onClose: handleClose,
        onResize: handleResize,
        onFloat: handleFloat,
        onRemove: handleRemove
    }
}
