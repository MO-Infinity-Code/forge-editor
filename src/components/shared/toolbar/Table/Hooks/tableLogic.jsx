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

export function useTableToolbar() {
    const insertTable = (rows, cols) => {
        const colWidth = (100 / cols).toFixed(2) + "%"

        let html =
            '<table style="width:100%;table-layout:fixed;border-collapse:collapse;border:1px solid #ddd;">'

        for (let r = 0; r < rows; r++) {
            html += "<tr>"
            for (let c = 0; c < cols; c++) {
                html += `<td style="border:1px solid #ddd;padding:8px;width:${colWidth};text-align:center;vertical-align:middle;overflow:hidden;word-break:break-word;"><br></td>`
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
