import { useRef } from "preact/hooks"

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

function placeCaretAtEnd(element) {
    if (!element) return
    const range = document.createRange()
    range.selectNodeContents(element)
    range.collapse(false)
    const sel = window.getSelection()
    if (sel) {
        sel.removeAllRanges()
        sel.addRange(range)
    }
}

function isBlockElement(el) {
    if (!el || el.nodeType !== 1) return false
    const tag = el.tagName.toLowerCase()
    return ["p", "div", "h1", "h2", "h3", "h4", "h5", "h6", "li", "blockquote", "pre"].includes(tag)
}

function getBlockFromNode(node) {
    if (!node) return null
    let current = node.nodeType === 3 ? node.parentNode : node
    while (current && current !== document.body && !isBlockElement(current)) {
        current = current.parentNode
    }
    return current && isBlockElement(current) ? current : null
}

function getListItem(node) {
    if (!node) return null
    let current = node.nodeType === 3 ? node.parentNode : node
    while (current && current !== document.body && current.tagName !== "LI") {
        current = current.parentNode
    }
    return current && current.tagName === "LI" ? current : null
}

function createList(tagType) {
    const list = document.createElement(tagType)
    list.className = tagType === "ul" ? "list-disc pl-5 my-2" : "list-decimal pl-5 my-2"
    return list
}

function wrapBlockInList(block, tagType) {
    const list = createList(tagType)
    const li = document.createElement("li")
    li.innerHTML = block.innerHTML
    list.appendChild(li)
    block.parentNode.replaceChild(list, block)
    return li
}

function unwrapList(list) {
    const parent = list.parentNode
    const fragment = document.createDocumentFragment()
    const items = Array.from(list.children)
    let lastInserted = null
    items.forEach((li) => {
        const div = document.createElement("div")
        div.innerHTML = li.innerHTML
        fragment.appendChild(div)
        lastInserted = div
    })
    parent.replaceChild(fragment, list)
    return lastInserted
}

function changeListType(list, newTag) {
    const newList = createList(newTag)
    newList.innerHTML = list.innerHTML
    list.parentNode.replaceChild(newList, list)
    return newList
}

export function useParagraphToolbar() {
    const savedRangeRef = useRef(null)

    const saveSelectionRange = () => {
        savedRangeRef.current = saveSelection()
    }

    const toggleList = (tagType) => {
        restoreSelection(savedRangeRef.current)
        const sel = window.getSelection()
        if (!sel || !sel.rangeCount) return

        let node = sel.anchorNode
        if (!node) return
        if (node.nodeType === 3) node = node.parentNode

        const currentLi = getListItem(node)
        if (currentLi) {
            const parentList = currentLi.parentNode
            if (parentList && (parentList.tagName === "UL" || parentList.tagName === "OL")) {
                if (parentList.tagName.toLowerCase() === tagType) {
                    const lastDiv = unwrapList(parentList)
                    if (lastDiv) placeCaretAtEnd(lastDiv)
                } else {
                    const newList = changeListType(parentList, tagType)
                    const lastLi = newList.lastElementChild
                    if (lastLi) placeCaretAtEnd(lastLi)
                }
                savedRangeRef.current = saveSelection()
                return
            }
        }

        const block = getBlockFromNode(node)
        if (!block) return

        if (block.getAttribute && block.getAttribute("contenteditable") === "true") {
            const tempDiv = document.createElement("div")
            tempDiv.innerHTML = block.innerHTML
            block.innerHTML = ""
            block.appendChild(tempDiv)
            const li = wrapBlockInList(tempDiv, tagType)
            placeCaretAtEnd(li)
        } else {
            const li = wrapBlockInList(block, tagType)
            placeCaretAtEnd(li)
        }

        savedRangeRef.current = saveSelection()
    }

    const setAlignment = (alignment) => {
        restoreSelection(savedRangeRef.current)
        const sel = window.getSelection()
        if (!sel || !sel.rangeCount) return

        let node = sel.anchorNode
        if (!node) return
        if (node.nodeType === 3) node = node.parentNode

        const block = node.closest("p, div, h1, h2, h3, h4, h5, h6, li, blockquote, pre")
        if (block) {
            block.style.textAlign = alignment
        }
        savedRangeRef.current = saveSelection()
    }

    const indent = () => {
        restoreSelection(savedRangeRef.current)
        const sel = window.getSelection()
        if (!sel || !sel.rangeCount) return

        let node = sel.anchorNode
        if (!node) return
        if (node.nodeType === 3) node = node.parentNode

        const li = getListItem(node)
        if (li) {
            const parentList = li.parentNode
            if (!parentList || (parentList.tagName !== "UL" && parentList.tagName !== "OL")) return

            const prevLi = li.previousElementSibling
            if (!prevLi || prevLi.tagName !== "LI") return

            let nestedList = prevLi.querySelector(":scope > ul, :scope > ol")
            if (!nestedList) {
                nestedList = createList(parentList.tagName.toLowerCase())
                prevLi.appendChild(nestedList)
            }

            nestedList.appendChild(li)
            placeCaretAtEnd(li)
        } else {
            const block = getBlockFromNode(node)
            if (!block) return
            const currentMargin = parseInt(block.style.marginLeft) || 0
            block.style.marginLeft = currentMargin + 20 + "px"
        }

        savedRangeRef.current = saveSelection()
    }

    const outdent = () => {
        restoreSelection(savedRangeRef.current)
        const sel = window.getSelection()
        if (!sel || !sel.rangeCount) return

        let node = sel.anchorNode
        if (!node) return
        if (node.nodeType === 3) node = node.parentNode

        const li = getListItem(node)
        if (li) {
            const parentList = li.parentNode
            if (!parentList || (parentList.tagName !== "UL" && parentList.tagName !== "OL")) return

            const grandParentLi = parentList.parentNode
            if (grandParentLi && grandParentLi.tagName === "LI") {
                const outerList = grandParentLi.parentNode
                outerList.insertBefore(li, grandParentLi.nextSibling)
                if (parentList.children.length === 0) {
                    parentList.remove()
                }
                placeCaretAtEnd(li)
            } else {
                const div = document.createElement("div")
                div.innerHTML = li.innerHTML
                const outerParent = parentList.parentNode

                if (parentList.children.length === 1) {
                    outerParent.replaceChild(div, parentList)
                } else {
                    outerParent.insertBefore(div, parentList.nextSibling)
                    parentList.removeChild(li)
                }
                placeCaretAtEnd(div)
            }
        } else {
            const block = getBlockFromNode(node)
            if (!block) return
            const currentMargin = parseInt(block.style.marginLeft) || 0
            block.style.marginLeft = Math.max(0, currentMargin - 20) + "px"
        }

        savedRangeRef.current = saveSelection()
    }

    return {
        saveSelectionRange,
        toggleUnorderedList: () => toggleList("ul"),
        toggleOrderedList: () => toggleList("ol"),
        setAlignment,
        indent,
        outdent
    }
}
