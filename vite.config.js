import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@mdx-js/rollup'
import rehypeSlug from 'rehype-slug'

export default defineConfig({
  plugins: [mdx({ rehypePlugins: [rehypeSlug] }), react(), tailwindcss()],
  base: '/programming-knowledge-base/', 
})