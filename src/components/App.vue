<template>
  <div class="app">
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
  </div>
</template>

<style lang="stylus">
  html, body
    margin: 0
    padding: 0
    min-width: 100%
    min-height: 100%
</style>
