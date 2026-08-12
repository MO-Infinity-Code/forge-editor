export function StyleToolbar() {
    return (
        <div className="forge-toolbar-group forge-toolbar-style">
            <div className="forge-toolbar-group">
                <button
                    type="button"
                    className="forge-toolbar-button"
                    data-command="style"
                    aria-label="Style">
                    <span className="forge-icon">✦</span>
                    <span
                        className="forge-tooltip"
                        data-i18n="style"></span>
                </button>
                <div
                    className="forge-toolbar-dropdown forge-dropdown-style"
                    role="list"
                    aria-label="Style">
                    <a
                        className="forge-dropdown-item"
                        href="#"
                        data-value="p"
                        role="listitem">
                        <p data-i18n="normal"></p>
                    </a>
                    <a
                        className="forge-dropdown-item"
                        href="#"
                        data-value="blockquote"
                        role="listitem">
                        <blockquote data-i18n="blockquote"></blockquote>
                    </a>
                    <a
                        className="forge-dropdown-item"
                        href="#"
                        data-value="pre"
                        role="listitem">
                        <pre data-i18n="code"></pre>
                    </a>
                    <a
                        className="forge-dropdown-item"
                        href="#"
                        data-value="h1"
                        role="listitem">
                        <h1 data-i18n="header1"></h1>
                    </a>
                    <a
                        className="forge-dropdown-item"
                        href="#"
                        data-value="h2"
                        role="listitem">
                        <h2 data-i18n="header2"></h2>
                    </a>
                    <a
                        className="forge-dropdown-item"
                        href="#"
                        data-value="h3"
                        role="listitem">
                        <h3 data-i18n="header3"></h3>
                    </a>
                    <a
                        className="forge-dropdown-item"
                        href="#"
                        data-value="h4"
                        role="listitem">
                        <h4 data-i18n="header4"></h4>
                    </a>
                    <a
                        className="forge-dropdown-item"
                        href="#"
                        data-value="h5"
                        role="listitem">
                        <h5 data-i18n="header5"></h5>
                    </a>
                    <a
                        className="forge-dropdown-item"
                        href="#"
                        data-value="h6"
                        role="listitem">
                        <h6 data-i18n="header6"></h6>
                    </a>
                </div>
            </div>
        </div>
    )
}
