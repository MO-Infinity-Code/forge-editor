export function createStyleToolbar() {
    return `
    <div class="forge-toolbar-group forge-toolbar-style">
      <div class="forge-toolbar-group">
        <button type="button" class="forge-toolbar-button" data-command="style" aria-label="Style">
          <span class="forge-icon">✦</span>
        </button>
        <div class="forge-toolbar-dropdown forge-dropdown-style" role="list" aria-label="Style">
          <a class="forge-dropdown-item" href="#" data-value="p" role="listitem"><p>Normal</p></a>
          <a class="forge-dropdown-item" href="#" data-value="blockquote" role="listitem"><blockquote>Blockquote</blockquote></a>
          <a class="forge-dropdown-item" href="#" data-value="pre" role="listitem"><pre>Code</pre></a>
          <a class="forge-dropdown-item" href="#" data-value="h1" role="listitem"><h1>Header 1</h1></a>
          <a class="forge-dropdown-item" href="#" data-value="h2" role="listitem"><h2>Header 2</h2></a>
          <a class="forge-dropdown-item" href="#" data-value="h3" role="listitem"><h3>Header 3</h3></a>
          <a class="forge-dropdown-item" href="#" data-value="h4" role="listitem"><h4>Header 4</h4></a>
          <a class="forge-dropdown-item" href="#" data-value="h5" role="listitem"><h5>Header 5</h5></a>
          <a class="forge-dropdown-item" href="#" data-value="h6" role="listitem"><h6>Header 6</h6></a>
        </div>
      </div>
    </div>
  `
}
