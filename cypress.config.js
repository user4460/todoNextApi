//https://zenn.dev/ucwork/articles/21b7caaeb1cc61#github-actions
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'f34zyj',
  
  e2e: {
    baseUrl: 'http://localhost:3000'

  }
})
