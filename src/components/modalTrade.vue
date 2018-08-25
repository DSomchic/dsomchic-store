<template>
  <div class="modal-card" style="width: 100%">
    <header class="modal-card-head">
      <p class="modal-card-title">Trade</p>
    </header>
    <section class="modal-card-body">
      <b-field label="Transaction Hash">
        <b-input
          disabled
          :value="hash"
          placeholder="transacion"
          required>
        </b-input>
      </b-field>
      <div class="dp-flex jtf-ct-center w-100pct">
        <span v-if="confirmation === 'loading'">
          <Spinner name="wave"/>
        </span>
        <span v-else-if="confirmation === 'success'"><i class="mdi mdi-check-circle-outline"></i> success</span>
        <span v-else-if="confirmation === 'fail'"><i class="mdi mdi-close-circle-outline"></i> fail</span>
      </div>
      <div class="dp-flex jtf-ct-center w-100pct">
        <span>{{message}}</span>
      </div>
    </section>
    <footer class="modal-card-foot dp-flex jtf-ct-center">
      <a :href="`https://kovan.etherscan.io/tx/${hash}`" target="_blank" class="button is-primary">View Transaction</a>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    hash: {
      type: String,
      required: true
    },
    confirmation: {
      type: String,
      required: true
    },
    message: {
      type: String,
      default: ''
    }
  }
}
</script>
