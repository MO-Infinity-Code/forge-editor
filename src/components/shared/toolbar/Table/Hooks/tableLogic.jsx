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

export function useTableToolbar() {
    const insertTable = (rows, cols) => {
        let html = '<table style="width:100%;border-collapse:collapse;border:1px solid #ddd;">'
        for (let r = 0; r < rows; r++) {
            html += "<tr>"
            for (let c = 0; c < cols; c++) {
                html += '<td style="border:1px solid #ddd;padding:8px;"><br></td>'
            }
            html += "</tr>"
        }
        html += "</table><br>"
        focusEditor()
        insertHTML(html)
    }

    return {
        insertTable
    }
}
