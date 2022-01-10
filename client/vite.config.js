import { defineConfig } from 'vite'
import react from 'vite-preset-react'

// see https://medium.com/codex/you-should-choose-vite-over-cra-for-react-apps-heres-why-47e2e7381d13 for svgr like in CRA
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})
