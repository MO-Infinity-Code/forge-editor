const DEFAULT_MIN_HEIGHT = 100

export function makeResizable(handle, target, options = {}) {
    if (!handle || !target) return () => {}

    const minHeight = options.minHeight ?? DEFAULT_MIN_HEIGHT
    const maxHeight = options.maxHeight ?? Infinity

    let startY = 0
    let startHeight = 0

    function onMouseMove(e) {
        const delta = e.clientY - startY
        let newHeight = startHeight + delta
        newHeight = Math.min(Math.max(newHeight, minHeight), maxHeight)
        target.style.height = `${newHeight}px`
    }

    function onMouseUp() {
        document.removeEventListener("mousemove", onMouseMove)
        document.removeEventListener("mouseup", onMouseUp)
        document.body.style.removeProperty("user-select")
        document.body.style.removeProperty("cursor")
    }

    function onMouseDown(e) {
        e.preventDefault()
        startY = e.clientY
        startHeight = target.getBoundingClientRect().height
        document.body.style.userSelect = "none"
        document.body.style.cursor = "s-resize"
        document.addEventListener("mousemove", onMouseMove)
        document.addEventListener("mouseup", onMouseUp)
    }

    handle.addEventListener("mousedown", onMouseDown)

    return function destroy() {
        handle.removeEventListener("mousedown", onMouseDown)
        document.removeEventListener("mousemove", onMouseMove)
        document.removeEventListener("mouseup", onMouseUp)
    }
}
