import FullReload from 'vite-plugin-full-reload'
import autoprefixer from 'autoprefixer'
import { createHtmlPlugin } from 'vite-plugin-html'
import { defineConfig } from 'vite'
import dotenv from 'dotenv'
import handlebars from 'vite-plugin-handlebars'
import postcssCombine from 'postcss-combine-media-query'
import postcssPresetEnv from 'postcss-preset-env'
import { resolve } from 'path'
import serverConfig from './server.config.js'
import sortMediaQueries from 'postcss-sort-media-queries'
import viteImagemin from 'vite-plugin-imagemin'
import pages from './pages.config.js'
import path from 'path'

const root = resolve(__dirname, 'src/')
const outDir = resolve(__dirname, 'dist')
dotenv.config({ path: resolve(__dirname, '.env') })

const pagesInput = {}

pages.forEach(page => {
  pagesInput[page.name] = page.path
})

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/vet-cat/' : '/',
  preview: {
    port: 8000,
    strictPort: true,
  },
  envDir: path.resolve(__dirname, '../..'),
  server: serverConfig,
  publicDir: path.resolve(__dirname, './public'),
  plugins: [
    handlebars({
      reloadOnPartialChange: true,
      partialDirectory: resolve(__dirname, 'src/html/'),
      helpers: {
        eq: (a, b) => a === b,
        eqString: (a, b) => a.trim() === b.trim(),
        and: (a, b) => a && b,
        ifCond: function (v1, operator, v2, options) {
          switch (operator) {
            case '==':
              return v1 == v2 ? options.fn(this) : options.inverse(this)
            case '===':
              return v1 === v2 ? options.fn(this) : options.inverse(this)
            case '!=':
              return v1 != v2 ? options.fn(this) : options.inverse(this)
            case '<':
              return v1 < v2 ? options.fn(this) : options.inverse(this)
            case '<=':
              return v1 <= v2 ? options.fn(this) : options.inverse(this)
            case '>':
              return v1 > v2 ? options.fn(this) : options.inverse(this)
            case '>=':
              return v1 >= v2 ? options.fn(this) : options.inverse(this)
            default:
              return options.inverse(this)
          }
        },

        array: (...args) => args.slice(0, -1),
        hash: function (options) {
          return options.hash
        },
      },
    }),
    FullReload('./**/*', { delay: 0 }),
    viteImagemin({
      skipIfLarger: true,
      clearCache: true,
      gifsicle: {
        optimizationLevel: 2,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 2,
      },
      mozjpeg: {
        quality: 75,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
    createHtmlPlugin({
      minify: true,
      collapseWhitespace: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true,
      minifyCSS: true,
      minifyJS: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import', 'legacy-js-api'],
      },
    },
    postcss: {
      plugins: [autoprefixer(), postcssPresetEnv(), postcssCombine(), sortMediaQueries({ sort: 'desktop-first' })],
    },
  },
  build: {
    outDir,
    emptyOutDir: true,
    chunkSizeWarningLimit: 2000,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        dead_code: true,
        unused: true,
        join_vars: true,
        collapse_vars: true,
        reduce_funcs: true,
        reduce_vars: true,
        passes: 3,
        toplevel: true,
        hoist_funs: true,
        hoist_vars: true,
        if_return: true,
        sequences: true,
        conditionals: true,
        evaluate: true,
        unsafe: true,
        unsafe_arrows: true,
        unsafe_comps: true,
        unsafe_math: true,
        unsafe_methods: true,
        unsafe_proto: true,
      },
      parse: {
        html5_comments: false,
        shebang: false,
      },
      format: {
        comments: false,
      },
      safari10: true,
    },
    rollupOptions: {
      input: {
        ...pagesInput,
      },
      output: {
        assetFileNames: ({ name }) => {
          name = name.toLowerCase()

          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return 'assets/images/[name]-[hash][extname]'
          }

          if (/\.css$/.test(name ?? '')) {
            return 'assets/styles/[name]-[hash][extname]'
          }

          if (/\.js$/.test(name ?? '')) {
            return 'assets/js/[name]-[hash][extname]'
          }

          return 'assets/[name]-[hash][extname]'
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': root,
    },
  },
})
