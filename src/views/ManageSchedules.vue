<template>
  <div class="manage-schedules">
    <h1 class="month-header">
      <a class="btn prev" @click="previousMonth">前月</a>
      <div class="month-str">{{thisMonthStr}}</div>
      <a class="btn next" @click="nextMonth">翌月</a>
    </h1>
    <div class="days">
      <ADay v-for="d in days" :key="d.id" :day="d" :isOther="isOtherMonth(d)"/>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, reactive, defineComponent} from 'vue'
import dayjs from 'dayjs'
import ADayCls from '@/data/ADayCls'
import ADay from '@/components/ADay.vue'
export default defineComponent({
  components:{
    ADay
  },
  setup(){
    function createDays(month:Date):ADayCls[]{
      const first = dayjs(month).startOf('week')
      const last = dayjs(month).endOf('month').endOf('week')
      const diffDays = last.diff(first,'day') + 1
      return new Array(diffDays).fill(1).map((_,i)=>{
        const d = dayjs(first).set('day', i).toDate()
        return new ADayCls(d, {})
      })
    }
    const firstDay = dayjs().startOf('month').toDate()
    const state = reactive<{
      month:Date,
    }>({
        month:firstDay
      })
    return {
      name:'ManageSchedules',
      state,
      thisMonthStr:computed(()=> dayjs(state.month).format('YYYY年M月')),
      days:computed(()=> createDays(state.month)),
      nextMonth():void{
        state.month = dayjs(state.month).add(1, 'month').toDate()
      },
      previousMonth():void{
        state.month = dayjs(state.month).add(-1, 'month').toDate()
      },
      isOtherMonth(d:ADayCls):boolean{
        return state.month.getMonth() !== d.day.getMonth()
      }
    }
  }
})
</script>

<style lang="scss">
.month-header{
  display:flex;
  text-align:left;
  margin:2px;
  .month-str{
    width:200px;
    text-align:center;
  }
  .btn{
    height:40px;
    background-color:hsl(0,0,90%);
    border:solid 0.2px gray;
    font-size:15px;
    margin:0 2vh;
    padding:1.3vh 3vh;
    border-radius:25%;
    box-shadow: 0 3px 0 gray;
    cursor:pointer;
    &:hover{
      background-color:rgb(255, 255, 206);
    }
    &:active{
      box-shadow:0 0 0;
      margin-top:3px;
    }
  }
}
.days{
  display:flex;
  width:840px;
  flex-wrap:wrap;
}
</style>
