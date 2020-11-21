<template>
  <div class="aDay" :class="{isOther}">
    <div class="dayHead">{{dateStr}}</div>
  </div>
</template>

<script lang="ts">
import dayjs from 'dayjs'
import { Options, Vue } from 'vue-class-component';
import ADayCls from '@/data/ADayCls'

@Options({
  props: {
    isOther:Boolean,
    day:ADayCls
  }
})
export default class ADay extends Vue {
  day!:ADayCls
  get dateStr():string{
    return dayjs(this.day.day).format('M月D日')
  }
}
</script>

<style lang="scss" scoped>
.aDay{
  font-size:14px;
  width:120px;
  height:110px;
  border:solid 0.5px hsl(0, 0%, 50%);
  &.isOther{
    background-color:hsl(0, 0%, 70%);
  }
  .dayHead{
    text-align:left;
    padding-left:1vh;
  }
}

</style>
