<template>
  <div id="app">
    <base-navbar></base-navbar>
    <router-view/>
  </div>
</template>

<script>
import BaseNavbar from '@/components/BaseNavbar.vue'
export default {
  components: { BaseNavbar }
}
</script>
