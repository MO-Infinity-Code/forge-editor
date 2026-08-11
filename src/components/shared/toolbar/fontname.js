export function createFontNameToolbar() {
    const fonts = [
        "Arial",
        "Arial Black",
        "Comic Sans MS",
        "Courier New",
        "Helvetica",
        "Impact",
        "Tahoma",
        "Times New Roman",
        "Verdana",
        "Nunito Sans",
        "Segoe UI"
    ]

    return `
    <div class="forge-toolbar-group forge-toolbar-fontname">
      <button type="button" class="forge-toolbar-button forge-fontname-button" data-command="fontName" aria-label="Font Family">
        <span class="forge-current-fontname">Nunito Sans</span>
      </button>
      <div class="forge-toolbar-dropdown forge-dropdown-fontname" role="list" aria-label="Font Family">
        ${fonts
            .map(
                (font) => `
          <a class="forge-dropdown-item" href="#" data-value="${font}" role="listitem" style="font-family: '${font}'">
            ${font}
          </a>
        `
            )
            .join("")}
      </div>
    </div>
  `
}
