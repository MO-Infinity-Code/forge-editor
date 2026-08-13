export function useParagraphToolbar() {
    const execCommand = (command) => {
        document.execCommand(command, false, null)
    }

    return {
        execCommand
    }
}
