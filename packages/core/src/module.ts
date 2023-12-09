import { readdirSync } from 'node:fs'
import { addComponentsDir, addImportsDir, addLayout, addPlugin, addTemplate, createResolver, defineNuxtModule, extendPages } from '@nuxt/kit'
import { join } from 'pathe'

export interface ModuleOptions {
  apiKey: string
}

export interface ModuleHooks {
  'my-module:init': any
}

export interface RuntimeModuleHooks {
  'my-module:runtime-hook': any
}

export interface ModulePublicRuntimeConfig {
  NAME: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module',
    configKey: 'myModule',
  },
  // Default configuration options of the Nuxt module
  defaults: {
    apiKey: 'test',
  },

  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)
    const runtimeDir = resolver.resolve('./runtime/layouts/default.vue')
    nuxt.options.build.transpile.push(runtimeDir)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
    addImportsDir(resolver.resolve('./runtime/composables'))
    addComponentsDir({
      path: resolver.resolve('./runtime/components'),
      global: true,
      prefix: 'core',
    })
    extendPages((pages) => {
      pages.push({
        name: 'test-page',
        path: '/test-page',
        file: resolver.resolve('./runtime/pages/testPage.vue'),
      })
    })
    addLayout(resolver.resolve('./runtime/layouts/default.vue'), 'default')
    const path = join(nuxt.options.rootDir, 'pages')
    // 获取path下的后辍为`.vue`的所有文件名
    const files = readdirSync(path).filter(file => file.endsWith('.vue')).map(file => file.replace('.vue', ''))
    addTemplate({
      filename: 'valid-pages.js',
      getContents: () => `export default ${JSON.stringify(files)}`,
    })
  },
})
