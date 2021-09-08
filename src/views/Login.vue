<template>
  <div class="Login">
    Login
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'

/**
 * Created by haijinsha At 2021-09-08 17:22:57
 */
export default {
  props: {},
  emits: [],
  setup () {
    const state = reactive({})

    onMounted(() => {
      console.log('Login init~')
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
.Login {

}
</style>
