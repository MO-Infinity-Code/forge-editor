import { showInputDialog } from "../../../Hooks/sweetAlert"

function saveSelection() {
    const sel = window.getSelection()
    if (sel && sel.rangeCount > 0) {
        return sel.getRangeAt(0).cloneRange()
    }
    return null
}

function restoreSelection(range) {
    if (!range) return
    const sel = window.getSelection()
    if (sel) {
        sel.removeAllRanges()
        sel.addRange(range)
    }
}

function focusEditor() {
    const editor = document.querySelector(".forge-editor__content")
    if (editor) {
        editor.focus()
        const range = document.createRange()
        const sel = window.getSelection()
        if (sel) {
            const lastChild = editor.lastChild
            if (lastChild) {
                range.setStartAfter(lastChild)
                range.collapse(true)
            } else {
                range.selectNodeContents(editor)
                range.collapse(false)
            }
            sel.removeAllRanges()
            sel.addRange(range)
        }
    }
}

function insertHTML(html) {
    const sel = window.getSelection()
    if (!sel || !sel.rangeCount) {
        focusEditor()
        setTimeout(() => insertHTML(html), 50)
        return
    }

    const range = sel.getRangeAt(0)
    range.deleteContents()

    const fragment = range.createContextualFragment(html)
    const lastChild = fragment.lastChild
    range.insertNode(fragment)

    if (lastChild) {
        range.setStartAfter(lastChild)
        range.collapse(true)
    } else {
        range.collapse(false)
    }

    sel.removeAllRanges()
    sel.addRange(range)
}

export function useInsertToolbar() {
    const insertLink = async () => {
        const savedRange = saveSelection()
        const result = await showInputDialog({
            title: "Insert Link",
            inputs: [
                {
                    placeholder: "URL",
                    value: "https://",
                    required: true,
                    requiredMessage: "URL is required"
                },
                { placeholder: "Link text (optional)" }
            ],
            confirmText: "Insert",
            cancelText: "Cancel"
        })

        if (result.isConfirmed && result.value) {
            restoreSelection(savedRange)
            const [url, text] = result.value
            const html =
                text ?
                    `<a href="${url}" target="_blank" rel="noopener">${text}</a>`
                :   `<a href="${url}" target="_blank" rel="noopener">${url}</a>`
            insertHTML(html)
        }
    }

    const insertImage = async () => {
        const savedRange = saveSelection()
        const result = await showInputDialog({
            title: "Insert Image",
            inputs: [
                {
                    placeholder: "Image URL",
                    value: "https://",
                    required: true,
                    requiredMessage: "Image URL is required"
                },
                { placeholder: "Alt text", value: "Image" }
            ],
            confirmText: "Insert",
            cancelText: "Cancel"
        })

        if (result.isConfirmed && result.value) {
            restoreSelection(savedRange)
            const [url, alt] = result.value
            const html = `<img src="${url}" alt="${alt}" style="max-width: 100%;">`
            insertHTML(html)
        }
    }

    const insertVideo = async () => {
        const savedRange = saveSelection()
        const result = await showInputDialog({
            title: "Insert Video",
            inputs: [
                {
                    placeholder: "Video URL (YouTube/Vimeo)",
                    value: "https://",
                    required: true,
                    requiredMessage: "Video URL is required"
                }
            ],
            confirmText: "Insert",
            cancelText: "Cancel"
        })

        if (result.isConfirmed && result.value) {
            restoreSelection(savedRange)
            const [url] = result.value
            let videoHtml
            if (url.includes("youtube.com") || url.includes("youtu.be")) {
                const embedUrl = url
                    .replace("watch?v=", "embed/")
                    .replace("youtu.be/", "youtube.com/embed/")
                videoHtml = `<iframe width="560" height="315" src="${embedUrl}" frameborder="0" allowfullscreen></iframe>`
            } else {
                videoHtml = `<video controls src="${url}" style="max-width: 100%;"></video>`
            }
            insertHTML(videoHtml)
        }
    }

    return {
        insertLink,
        insertImage,
        insertVideo
    }
}
