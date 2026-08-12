export function useFontToolbar() {
    const executeCommand = (command) => {
        document.execCommand(command, false, null)
    }
    return { executeCommand }
}
