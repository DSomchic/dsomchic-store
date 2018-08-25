<template>
  <div class="trade">
    <div class="hero-body bg-cl-black">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <div class="box">
            <b-tabs type="is-toggle" position="is-centered">
              <b-tab-item label="Buy SC">
                <form>
                  <div class="field">
                      <div class="control">
                        <label class="label">ETH you spend</label>
                        <input class="input is-large" type="email" placeholder="Amount to spend" autofocus="">
                      </div>
                  </div>
                  <div class="field">
                      <div class="control">
                        <label class="label">SC you receive</label>
                        <input class="input is-large" type="password" placeholder="Amount you receive">
                      </div>
                  </div>
                  <button class="button is-block is-info is-large is-fullwidth">Submit</button>
                </form>
              </b-tab-item>
              <b-tab-item label="Sell SC">
                <form>
                  <div class="field">
                      <div class="control">
                        <label class="label">SC you spend</label>
                        <input class="input is-large" type="email" placeholder="Amount to spend" autofocus="">
                      </div>
                  </div>
                  <div class="field">
                      <div class="control">
                        <label class="label">ETH you receive</label>
                        <input class="input is-large" type="password" placeholder="Amount you receive">
                      </div>
                  </div>
                  <button class="button is-block is-info is-large is-fullwidth">Submit</button>
                </form>
              </b-tab-item>
            </b-tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
