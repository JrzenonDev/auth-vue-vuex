<template>
  <div class="login-page">
    <form @submit.prevent="submit()" action="">
      <div class="card">
        <div class="card-header">Login</div>
        <div class="card-body">
          <div class="form-group">
            <input
              required
              type="email"
              v-model="form.email"
              class="form-control"
              placeholder="E-mail"
            />
          </div>
          <div class="form-group">
            <input
              required
              type="password"
              v-model="form.password"
              class="form-control"
              placeholder="Senha"
            />
          </div>
          <button class="btn btn-primary d-blox">Entrar</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: {
      email: '',
      password: ''
    }
  }),
  methods: {
    submit () {
      console.log(this.form)
    }
  }
}
</script>

<style lang="scss" scoped>
.login-page {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  width: 450px;
}
</style>
