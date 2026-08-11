const colors = [
    ["#000000", "#424242", "#636363", "#9C9C94", "#CEC6CE", "#EFEFEF", "#F7F7F7", "#FFFFFF"],
    ["#FF0000", "#FF9C00", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#9C00FF", "#FF00FF"]
    // ... (باقي الصفوف)
]

function createColorPalette(event) {
    return `
    <div class="forge-color-palette">
      ${colors
          .map(
              (row) => `
        <div class="forge-color-row">
          ${row
              .map(
                  (color) => `
            <button type="button" class="forge-color-button"
              style="background-color: ${color}"
              data-event="${event}" data-value="${color}"
              aria-label="${color}">
            </button>
          `
              )
              .join("")}
        </div>
      `
          )
          .join("")}
    </div>
  `
}

export function createColorToolbar() {
    return `
    <div class="forge-toolbar-group forge-toolbar-color">
      <button type="button" class="forge-toolbar-button forge-current-color" data-command="recentColor" aria-label="Recent Color">
        <span class="forge-recent-color" style="background-color: #FFFF00; color: #000000">A</span>
      </button>
      <button type="button" class="forge-toolbar-button forge-color-dropdown-button" aria-label="More Color">▼</button>
      <div class="forge-toolbar-dropdown forge-dropdown-color" role="list">
        <div class="forge-color-section">
          <div class="forge-color-title">Background Color</div>
          <button type="button" class="forge-color-reset" data-event="backColor" data-value="transparent">Transparent</button>
          ${createColorPalette("backColor")}
        </div>
        <div class="forge-color-section">
          <div class="forge-color-title">Text Color</div>
          <button type="button" class="forge-color-reset" data-event="removeFormat" data-value="foreColor">Reset to default</button>
          ${createColorPalette("foreColor")}
        </div>
      </div>
    </div>
  `
}
