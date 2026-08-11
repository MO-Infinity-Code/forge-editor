export function getEditorOptions(element) {
    return {
        type: element.getAttribute("type") || "light",
        placeholder: element.getAttribute("placeholder") || "",
        width: element.getAttribute("width") || "100%",
        height: element.getAttribute("height") || "300px"
    }
}
