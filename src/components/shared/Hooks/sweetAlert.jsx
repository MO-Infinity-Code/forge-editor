import Swal from "sweetalert2"

export function showInputDialog({ title, inputs, confirmText, cancelText }) {
    const html = inputs
        .map((input, index) => {
            const id = `swal-input-${index}`
            const placeholder = input.placeholder || ""
            const value = input.value || ""
            return `<input id="${id}" class="swal2-input" placeholder="${placeholder}" value="${value}">`
        })
        .join("")

    return Swal.fire({
        title,
        html,
        focusConfirm: false,
        preConfirm: () => {
            const values = inputs.map((input, index) => {
                const id = `swal-input-${index}`
                const el = document.getElementById(id)
                if (!el) return null
                const val = el.value
                if (input.required && !val) {
                    Swal.showValidationMessage(input.requiredMessage || "This field is required")
                    return false
                }
                return val
            })
            if (values.includes(false)) return false
            return values
        },
        showCancelButton: true,
        confirmButtonText: confirmText || "Confirm",
        cancelButtonText: cancelText || "Cancel"
    })
}
