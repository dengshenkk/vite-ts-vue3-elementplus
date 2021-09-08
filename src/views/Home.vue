<template>
  <div class="Home">
    Home
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'

/**
 * Created by haijinsha At 2021-09-08 16:12:00
 */
export default {
  props: {},
  emits: [],
  setup () {
    const state = reactive({})

    onMounted(() => {
      console.log('Home init~')
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
.Home {

}
</style>
