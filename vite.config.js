import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"
import cssInjectedByJs from "vite-plugin-css-injected-by-js"

export default defineConfig({
    build: {
        lib: {
            entry: "src/main/main.jsx",
            name: "ForgeEdit",
            fileName: "index",
            formats: ["es"]
        },
        rollupOptions: {
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
    plugins: [tailwindcss(), cssInjectedByJs()]
})
