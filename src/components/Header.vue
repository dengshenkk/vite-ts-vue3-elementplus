<template>
  <div class="Header">
    <div class="container">
      <div class="logo">conduit</div>
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/login">Sign in</router-link>
      <router-link class="link" to="/register">Sign up</router-link>
    </div>
    <div class="banner">
      <h2>conduit</h2>
      <span>A place to share your knowledge</span>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'

/**
 * Created by haijinsha At 2021-09-08 16:55:48
 */
export default {
  props: {},
  emits: [],
  setup () {
    const state = reactive({})

    onMounted(() => {
      console.log('Header init~')
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
$--color-primary: #54ac45;
.Header {
  .container {
    display: flex;
    align-items: center;
    margin: 0 auto;
    height: 60px;
    width: 1200px;

    @media (max-width: 1200px) {
      & {
        width: 980px;
      }
    }

    @media (max-width: 980px) {
      & {
        width: 750px;
      }
    }

    .logo {
      flex: 1;
      cursor: pointer;
      color: $--color-primary;
      font-size: 24px;
    }

    .link {
      cursor: pointer;
      margin-right: 8px;
      color: #999999;
    }
  }

  .banner {
    height: 120px;
    background-color: $--color-primary;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #ffffff;

    h2 {
      font-size: 36px;
      margin-bottom: 8px;
    }
  }
}
</style>
