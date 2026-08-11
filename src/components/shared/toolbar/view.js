export function createViewToolbar() {
    return `
    <div class="forge-toolbar-group forge-toolbar-view">
      <button type="button" class="forge-toolbar-button" data-command="fullscreen" aria-label="Full Screen">⛶</button>
      <button type="button" class="forge-toolbar-button" data-command="codeview" aria-label="Code View">&lt;/&gt;</button>
      <button type="button" class="forge-toolbar-button" data-command="help" aria-label="Help">?</button>
    </div>
  `
}
