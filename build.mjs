import * as esbuild from 'esbuild'
import vuePlugin from "esbuild-plugin-vue3"
import stylePlugin from 'esbuild-style-plugin'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

const context = await esbuild.context({
  entryPoints: ['src/app.js', 'src/style.css'],
  bundle: true,  
  outdir: 'assets',
  plugins: [
    vuePlugin(), 
    stylePlugin({
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    })
  ]
})

await context.watch()
