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
    if (range.collapsed) {
        const fragment = range.createContextualFragment(html)
        range.insertNode(fragment)
        const lastChild = fragment.lastChild
        if (lastChild) {
            range.setStartAfter(lastChild)
            range.collapse(true)
        } else {
            range.collapse(false)
        }
        sel.removeAllRanges()
        sel.addRange(range)
    } else {
        document.execCommand("insertHTML", false, html)
    }
}

export function useInsertToolbar() {
    const insertLink = () => {
        const url = prompt("Enter URL:", "https://")
        if (url) {
            document.execCommand("createLink", false, url)
        }
    }

    const insertImage = () => {
        const url = prompt("Enter image URL:", "https://")
        if (url) {
            const imgHTML = `<img src="${url}" alt="Image" style="max-width: 100%;" />`
            focusEditor()
            insertHTML(imgHTML)
        }
    }

    const insertVideo = () => {
        const url = prompt("Enter video URL (YouTube/Vimeo):", "https://")
        if (url) {
            const videoHTML = `<video controls src="${url}" style="max-width: 100%;"></video>`
            focusEditor()
            insertHTML(videoHTML)
        }
    }

    return {
        insertLink,
        insertImage,
        insertVideo
    }
}
