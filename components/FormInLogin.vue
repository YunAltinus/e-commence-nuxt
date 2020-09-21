<template>
  <div>
    <div>
      <button id="show-btn" class="n-btn btn" @click="$bvModal.show('bv-modal-example')">Giriş Yap</button>
      <b-modal id="bv-modal-example" hide-footer>
        <div>
          <b-tabs content-class="mt-3" align="center">
            <b-tab title="Giriş" active>
              <template v-slot:modal-title>Giris</template>
              <div class="d-block text-center">
                <b-form-group
                  id="signin-email"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  label="Email"
                  label-for="input-horizontal"
                >
                  <b-form-input type="email" v-model="email" id="input-signin-email"></b-form-input>
                </b-form-group>
                <b-form-group
                  id="signin-password"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  label="parola"
                  label-for="input-horizontal"
                >
                  <b-form-input type="password" v-model="password" id="input-signin-password"></b-form-input>
                </b-form-group>
                <button class="mt-3 btn w-50" block @click="signInUser">Giriş yap</button>
              </div>
            </b-tab>
            <b-tab title="Kayıt">
              <template v-slot:modal-title>Kayit</template>
              <div class="d-block text-center">
                <b-form-group
                  id="signin-email"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  label="Email"
                  label-for="input-horizontal"
                >
                  <b-form-input type="email" v-model="email" id="input-signin-email"></b-form-input>
                </b-form-group>
                <b-form-group
                  id="signin-password"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  label="parola"
                  label-for="input-horizontal"
                >
                  <b-form-input type="password" v-model="password" id="input-signin-parola"></b-form-input>
                </b-form-group>
                <b-form-group
                  id="signin-name"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  label="name"
                  label-for="input-horizontal"
                >
                  <b-form-input type="text" v-model="name" id="input-signin-name"></b-form-input>
                </b-form-group>
                <b-form-group
                  id="signin-phone"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  label="phone"
                  label-for="input-horizontal"
                >
                  <b-form-input type="number" v-model="phone" id="input-signin-phone"></b-form-input>
                </b-form-group>
                <b-form-group
                  id="signin-adress"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  label="adres"
                  label-for="input-horizontal"
                >
                  <b-form-textarea type="text" v-model="adress" id="input-signin-adress"></b-form-textarea>
                </b-form-group>
              <button class="mt-3 btn w-50" block @click="createUser">Kayıt yap</button>
              </div>
            </b-tab>
          </b-tabs>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      name: null,
      phone: null,
      adress: null
    };
  },
  methods: {
    async createUser() {
      try {
        let newUser = {
          email: this.email,
          password: this.password,
          name: this.name,
          phone: this.phone,
          adress: this.adress
        };

        await this.$store.dispatch("createUser", newUser);

        this.$bvModal.hide("bv-modal-example");
      } catch (error) {
        console.log("createUser ==>> NAVBAR", error);
      }
    },
    async signInUser() {
      try {
        await this.$store.dispatch("signInUser", {email: this.email, password: this.password});

        this.$bvModal.hide("bv-modal-example");
      } catch (error) {
        console.log("signInUser ==>> NAVBAR", error);
      }
    }
  }
};
</script>

<style>
</style>