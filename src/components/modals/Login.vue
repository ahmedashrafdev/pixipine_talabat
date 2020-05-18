<template>
  <div class="normal-case tracking-normal">
    <a href="/#login" @click.prevent="show" class="text-lg uppercase">{{
      $t("login")
    }}</a>
    <modal
      name="modal-login"
      @opened="opened"
      :adaptive="true"
      :height="400"
      :width="400"
    >
      <div class="px-10 py-8 text-textcolor">
        <h2 class="mb-4 uppercase tracking-wide  text-xl">{{ $t("login") }}</h2>
        <form
          
          @keydown="form.errors.clear($event.target.id)"
          autocomplete="off"
          @submit.prevent="onSubmit()"
        >
          <text-field :field="form.email" :validation="emailValidation" v-model="form.email" fieldName="email" type="email" :hasErr="form.errors.has('email')" :errMsg="form.errors.get('email')"/>
          <text-field :field="form.password" :validation="passwordValidation" v-model="form.password" fieldName="password" type="password" :hasErr="form.errors.has('password')" :errMsg="form.errors.get('password')"/>
          <submit-btn :isDisabled="form.errors.any()" :isLoading="form.isLoading" title="login"/>
        </form>
        <div class="text-sm font-normal text-center">
          <p>
            {{ $t("dont_have_account") }}
            <a
              href="#"
              class="text-blue-600 hover:text-blue-800"
              @click.prevent="showRegister"
              >{{ $t("register") }}</a
            >
          </p>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import Form from "@/classes/Form"
import TextField from "@/components/inputs/TextField.vue"
import SubmitBtn from "@/components/inputs/SubmitBtn.vue"
export default {
  data() {
    return {
      form: new Form({
        email: "ahmed@ahmed.com",
        password: "123456",
      }),
      emailValidation: [
        { message:"required", regex:/[^()]/ },
				{ message:'invalid_email', regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ },],
      passwordValidation: [
				{ message:"required", regex:/[^()]/ },
				{ message:"min_6", regex:/.{6,}/ },
			],
    };
  },
  components:{
    "text-field" : TextField,
    "submit-btn" : SubmitBtn,
  },
  methods: {
    onSubmit() {
      this.form
        .post("http://127.0.0.1:8000/api/login")
        .then( async (data) => {
          await this.$store.dispatch('user/login', { data })
          await this.$store.dispatch('ui/showFlashMsg', { "msg" : 'login_successed' , duration: 3000 , type : "success" })
          this.hide()
          this.$router.push('/menu')
        });
    },
    show() {
      this.$modal.show("modal-login");
    },
    showRegister() {
      this.$modal.show("modal-register");
      this.$modal.hide("modal-login");
    },
    opened() {
      // this.$refs.email.focus();
      let modal = document.querySelector(".v--modal-box.v--modal");
      // let value = modal.style.left;
      // modal.style.left = "auto";
      // modal.style.right = value;
    },
    hide() {
      this.$modal.hide("modal-login");
    },
  },
};
</script>
