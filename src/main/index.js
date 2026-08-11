import { getEditorOptions } from "../components/shared/Hooks/options.js"
import { createLightEditor } from "../components/light/index.js"

function ForgeEditor(element) {
    const options = getEditorOptions(element)
    console.log(options)
    if (options.type === "light") {
        element.innerHTML = createLightEditor(options)
    }
    const editor = element.firstElementChild

    editor.style.width = options.width
    editor.style.height = options.height

    return editor
}

export default ForgeEditor
