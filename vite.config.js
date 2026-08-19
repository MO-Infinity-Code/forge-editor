import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
    build: {
        lib: {
            entry: "src/main/index.jsx",
            name: "ForgeEdit",
            fileName: "index",
            formats: ["es"]
        },
        rollupOptions: {
            external: ["preact", "preact/hooks", "sweetalert2"],
            output: {
                globals: {
                    preact: "preact",
                    "preact/hooks": "preact/hooks",
                    sweetalert2: "Swal"
                }
            }
        }
    },
    esbuild: {
        jsx: "automatic",
        jsxImportSource: "preact"
    },
    plugins: [tailwindcss()]
})
