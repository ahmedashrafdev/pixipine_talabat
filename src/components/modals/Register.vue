<template>
  <div class="normal-case tracking-normal">
    <a href="/#register" @click.prevent="show" class="text-lg uppercase">{{$t('register')}}</a>
    <modal name="modal-register" @opened="opened" :adaptive="true" :height="600" :width="400">
      <div class="px-10 py-8 text-textcolor">
        <h2 class="mb-4 uppercase tracking-wide text-xl">{{$t('register')}}</h2>
        <form 
          @keydown="form.errors.clear($event.target.id)"
          autocomplete="off"
          @submit.prevent="onSubmit()">
          <text-field :field="form.name" :validation="nameValidation" v-model="form.name" fieldName="name" type="text" :hasErr="form.errors.has('name')" :errMsg="form.errors.get('name')"/>
          <text-field :field="form.phone" :validation="phoneValidation" v-model="form.phone" fieldName="phone" type="text" :hasErr="form.errors.has('phone')" :errMsg="form.errors.get('phone')"/>
          <text-field :field="form.email" :validation="emailValidation" v-model="form.email" fieldName="email" type="email" :hasErr="form.errors.has('email')" :errMsg="form.errors.get('email')"/>
          <text-field :field="form.password" :validation="passwordValidation" v-model="form.password" fieldName="password" type="password" :hasErr="form.errors.has('password')" :errMsg="form.errors.get('password')"/>
          <text-field :field="form.password_confirmation" :validation="passwordConfirmationValidation" v-model="form.password_confirmation" fieldName="password_confirmation" type="password" :hasErr="form.errors.has('password_confirmation')" :errMsg="form.errors.get('password_confirmation')"/>
          <submit-btn :isDisabled="form.errors.any()" :isLoading="form.isLoading" title="login"/>
          
        </form>
        <div class="text-sm font-normal text-center">
          <p>{{$t('alredy_have_account')}}<a href="#" class="text-blue-600 hover:text-blue-800" @click.prevent="showLogin">Login</a></p>
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
        name: "ahmed ashraf",
        email: "ahmed@ahmedd2.com",
        phone: "01022052546",
        password: "123456",
        password_confirmation: "123456",
      }),
      emailValidation: [
        { message:"required", regex:/[^()]/ },
				{ message:'invalid_email', regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ },],
      passwordValidation: [
				{ message:"required", regex:/[^()]/ },
				{ message:"min_6", regex:/.{6,}/ },
      ],
      phoneValidation: [
				{ message:"required", regex:/[^()]/ },
				{ message:"numiric", regex:/^0|[1-9]\d*$/ },
      ],
      nameValidation: [
				{ message:"required", regex:/[^()]/ },
      ],
      passwordConfirmationValidation: [
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
        .post("http://127.0.0.1:8000/api/register")
        .then( async (data) => {
          await this.$store.dispatch('user/login', { data })
          await this.$store.dispatch('ui/showFlashMsg', { "msg" : 'registerd_successed' , duration: 3000 , type : "success" })
          this.hide()
          this.$router.push('/menu')
        });
    },
    show() {
      this.$modal.show('modal-register')
    },
    showLogin() {
      this.$modal.show('modal-login')
      this.$modal.hide('modal-register')
    },
    opened() {
      // this.$refs.email.focus()
      // let modal = document.querySelector(".v--modal-box.v--modal");
      // let value = modal.style.left;
      // modal.style.left = "auto";
      // modal.style.right = value;
    },
    hide() {
      this.$modal.hide('modal-register')
    }
  }
}
</script>