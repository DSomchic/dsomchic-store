<template>
  <div class="transfer">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="hero-body bg-cl-black">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <div class="box">
            <form>
              <div class="field">
                  <div class="control">
                    <label class="label">Address of receiver</label>
                    <input class="input is-large" type="email" placeholder="Enter address" autofocus="">
                  </div>
              </div>
              <div class="field">
                  <div class="control">
                    <label class="label">Amount to transfer</label>
                    <input class="input is-large" type="password" placeholder="Enter amount to transfer">
                  </div>
              </div>
              <button class="button is-block is-info is-large is-fullwidth">Submit</button>
            </form>
          </div>
        </div>
      </div> 
    </div>   
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'transfer',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
body {
  color: #2c3e50;
}

</style>
