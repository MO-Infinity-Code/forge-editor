export function useInsertToolbar() {
    const insertLink = () => {
        const url = prompt("Enter URL:", "https://")
        if (url) {
            document.execCommand("createLink", false, url)
        }
    }

    const insertImage = () => {
        const url = prompt("Enter image URL:", "https://")
        if (url) {
            document.execCommand("insertImage", false, url)
        }
    }

    const insertVideo = () => {
        const url = prompt("Enter video URL (YouTube/Vimeo):", "https://")
        if (url) {
            const videoHTML = `<video controls src="${url}"></video>`
            document.execCommand("insertHTML", false, videoHTML)
        }
    }

    return {
        insertLink,
        insertImage,
        insertVideo
    }
}
