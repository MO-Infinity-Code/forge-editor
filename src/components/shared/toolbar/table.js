export function createTableToolbar() {
    return `
    <div class="forge-toolbar-group forge-toolbar-table">
      <button type="button" class="forge-toolbar-button" data-command="table" aria-label="Table">▦</button>
      <div class="forge-toolbar-dropdown forge-dropdown-table" role="list">
        <div class="forge-table-picker">
          <div class="forge-table-picker-mousecatcher" data-event="insertTable" data-value="1x1"></div>
          <div class="forge-table-picker-highlight"></div>
          <div class="forge-table-picker-unhighlight"></div>
        </div>
        <div class="forge-table-dimension">1 x 1</div>
      </div>
    </div>
  `
}
