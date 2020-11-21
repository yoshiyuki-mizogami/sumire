<template>
  <div id="nav">
    <h1 class="title">スミレ</h1>
    <router-link to="/ManageSchedules">スケジュール</router-link>
    <router-link to="/ManageChildren">児童の一覧</router-link>
    <router-link to="/ManageWorkers">保育士の一覧</router-link>
  </div>
  <div class="content">
    <router-view/>
  </div>
</template>
<script lang="ts">
import {defineComponent, reactive} from 'vue'
import connection from '@/db/initConnection'
export default defineComponent({
  setup(){
    const state = reactive<{connected:boolean}>({
      connected:false
    })
    async function connect(){
      await connection.authenticate()
      state.connected = true
    }
    connect()
    return {
      state
    }
  }
})
</script>
<style lang="scss">
*{
  box-sizing:border-box;
}
html,body{
  margin:0;
  padding:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display:flex;
}

#nav {
  width:160px;
  padding: 30px;
  .title{
    margin:0;
    padding:0;
    font-size:20px;
  }
  a {
    display:block;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active{
      color: #42b983;
    }
  }
}

.content{
  flex-basis: calc(100% - 160px)
}

</style>
