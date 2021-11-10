<template>
  <div class="fullscreen flex justify-center items-center">
    <q-form greedy @submit="submit">
      <q-card class="login-form bg-grey-2">
        <q-card-section>
          <q-input
            v-model="username"
            label="Utente"
            lazy-rules
            :rules="[requiredRule]"
          />
          <q-input
            v-model="password"
            type="password"
            label="Password"
            lazy-rules
            :rules="[requiredRule]"
          />
        </q-card-section>
        <q-card-actions align="center">
          <q-btn type="submit" label="Login" />
          <q-btn type="reset" label="Reset" />
        </q-card-actions>
      </q-card>
    </q-form>
  </div>
</template>

<script lang="ts">
import { isLoggedIn } from 'src/models/login';
import { defineComponent, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'PageLogin',
  setup() {
    const formFields = reactive({
      username: '',
      password: '',
    });

    const router = useRouter();
    function submit() {
      if (formFields.username === 'admin' && formFields.password === 'admin') {
        isLoggedIn.value = true;
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        router.push('/');
      }
    }

    function requiredRule(value: string) {
      return !!value || 'Il campo non può essere vuoto';
    }

    return {
      ...toRefs(formFields),
      requiredRule,
      submit,
    };
  },
});
</script>

<style>
.login-form {
  width: 300px;
  width: 300px;
}
</style>
