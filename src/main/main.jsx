import ForgeEditor from "./index.jsx"

const elements = document.querySelectorAll("forge-editor")
const editors = []

elements.forEach((element) => {
    const instance = ForgeEditor(element)
    if (instance) editors.push(instance)
})

window.forgeEditors = editors

const btn = document.getElementById("get-html-btn")
const output = document.getElementById("html-output")

if (btn && output && editors[0]) {
    btn.addEventListener("click", () => {
        output.value = editors[0].getHTML()
    })
}
