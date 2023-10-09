<template>
  <div class="auth-bg">
    <div class="auth-bg-cover">
      <notifications position="bottom right"/>
      <div class="auth-div registration">
        <div class="auth-heading">
          <div class="auth-header">Registration</div>
          <div class="auth-sub">Fill in your valid credentials to continue</div>
        </div>
        <div>
          <form @submit.prevent="register">
            <div class="auth-form-row">
              <div class="auth-form-col half-col">
                <label for="name" class="auth-form-label">First Name</label
                ><input
                  v-model="user.first_name"
                  required
                  type="text"
                  class="auth-input w-input"
                  placeholder="Type here"
                />
              </div>
              <div class="auth-form-col half-col">
                <label for="name-2" class="auth-form-label">Last Name</label
                ><input
                  v-model="user.last_name"
                  required
                  type="text"
                  class="auth-input w-input"
                  placeholder="Type here"
                />
              </div>
              <div class="auth-form-col half-col">
                <label for="name-4" class="auth-form-label">Email Address</label
                ><input
                  v-model="user.email_address"
                  required
                  type="email"
                  class="auth-input w-input"
                  placeholder="Type here"
                />
              </div>
              <div class="auth-form-col half-col">
                <label for="name-2" class="auth-form-label">Phone Number</label
                ><input
                  v-model="user.phone_number"
                  required
                  type="tel"
                  class="auth-input w-input"
                  placeholder="Type here"
                />
              </div>
              <div class="auth-form-col half-col">
                <label for="name-3" class="auth-form-label">Password</label
                ><input
                  required
                  v-model="user.password"
                  type="password"
                  class="auth-input w-input"
                  placeholder="Type here"
                />
              </div>
              <div class="auth-form-col half-col">
                <label for="name-2" class="auth-form-label"
                  >Confirm Password</label
                ><input
                  v-model="user.confirm_password"
                  required
                  type="password"
                  class="auth-input w-input"
                  placeholder="Type here"
                />
              </div>
            </div>
            <br /><br />

            <button type="submit" class="auth-btn">
              {{ loading ? "LOADING..." : "REGISTER" }}
            </button>
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
        first_name: "",
        last_name: "",
        phone_number: "",
        email_address: "",
        password: "",
        confirm_password: ""
      }
    };
  },
  methods: {
    async register() {
      if (this.user.password === this.user.confirm_password) {
        const resData = {
          first_name: this.user.first_name,
          last_name: this.user.last_name,
          email_address: this.user.email_address,
          phone_number: this.user.phone_number,
          password: this.user.password,
          role: 1
        };
        try {
          this.loading = true;
          await axios.post(
            `https://lasubeb-services.lasubeb.lg.gov.ng/create-account`,
            resData
          );
          if (typeof window !== "undefined") {
            this.loading = false;

            this.$notify({
              text: "Registration Successful! Please Proceed to login",
              type: "success",
              duration: 3000,
              speed: 1000
            });
            this.user.first_name = "";
            this.user.last_name = "";
            this.user.email_address = "";
            this.user.phone_number = "";
            this.user.password = "";
            this.user.confirm_password = "";
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
      } else {
        this.$notify({
          text: "Password does not match Confirm Password",
          type: "error",
          duration: 3000,
          speed: 1000
        });
      }
    }
  }
};
</script>
