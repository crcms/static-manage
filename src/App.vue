<template>
  <div id="app">
    <header-view></header-view>

    <div class="main">
      <div class="left">
        <router-link :to="{ name: 'as'}">aaaa</router-link>
        <router-link :to="{ name: 'bs'}">bbbb</router-link>
        <router-link :to="{ name: 'cs'}">cccc</router-link>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>

    <!-- basic -->
    <icon name="beer"></icon>

    <!-- with options -->
    <icon name="sync" scale="2" spin></icon>
    <icon name="comment" flip="horizontal"></icon>
    <icon name="code-fork" label="Forked Repository"></icon>

    <!-- stacked icons -->
    <icon label="No Photos">
      <icon name="camera"></icon>
      <icon name="ban" scale="2" class="alert"></icon>
    </icon>

    <footer-view></footer-view>
  </div>
</template>

<script>
import HeaderView from './components/Header.vue'
import FooterView from './components/Footer.vue'
export default {
  name: 'app',
  components: {
    HeaderView,
    FooterView
  }
}
</script>

<style>
</style>
