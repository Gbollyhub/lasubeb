<template>
  <div class="auth-bg">
    <notifications />

    <div class="auth-bg-cover">
      <div class="auth-div registration">
        <div class="auth-heading">
          <div class="auth-header">Login to access this page</div>
          <div class="auth-sub">Fill in your valid credentials to continue</div>
        </div>
        <div>
          <form @submit.prevent="login">
            <div class="auth-form-col">
              <label for="name" class="auth-form-label">Email Address</label
              ><input
                v-model="user.email_address"
                type="text"
                class="auth-input w-input"
                placeholder="Enter your username"
                required
              />
            </div>
            <div class="auth-form-col">
              <label for="name-2" class="auth-form-label">Password</label
              ><input
                v-model="user.password"
                type="password"
                class="auth-input w-input"
                placeholder="Enter your password"
                required
              />
            </div>

            <!-- <router-link to="/" class="auth-forgot-password">Forgot Password</router-link> -->
            <br />
            <button type="submit" class="auth-btn">LOGIN</button>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      loading: false,
      user: {
        email_address: "",
        password: ""
      }
    };
  },
  methods: {
    async login() {
      const resData = {
        email_address: this.user.email_address,
        password: this.user.password
      };
      try {
        this.loading = true;
        const user = await axios.post(`https://lasubeb-services.lasubeb.lg.gov.ng/login`, resData);
        if (typeof window !== "undefined") {
          localStorage.setItem("pk", user.data.token);

          this.loading = false;
            this.user.email_address = "";
            this.user.password = "";   
          this.$emit('eventname', true)
        }
      } catch (error) {
        this.loading = false;
        this.$notify({
          text: error.response.data.error,
          type: "error",
          duration: 3000,
          speed: 1000
        });
        this.error = error.response.data.error;
      }
    }
  }
};
</script>
