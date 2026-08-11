// main/index.js
import { getEditorOptions } from "../components/shared/Hooks/options.js"
import { createLightEditor } from "../components/light/index.js"

function ForgeEditor(element) {
    const options = getEditorOptions(element)
    console.log(options)
    if (options.type === "light") {
        const editorEl = createLightEditor(options)
        element.innerHTML = ""
        element.appendChild(editorEl)
        editorEl.style.width = options.width
        editorEl.style.height = options.height
        return editorEl
    }
    return null
}

export default ForgeEditor
