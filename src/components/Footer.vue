<template>
  <div class="Footer">
    Footer
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'

/**
 * Created by haijinsha At 2021-09-08 16:59:35
 */
export default {
  props: {},
  emits: [],
  setup () {
    const state = reactive({})

    onMounted(() => {
      console.log('Footer init~')
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
.Footer {

}
</style>
