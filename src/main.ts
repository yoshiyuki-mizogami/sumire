import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

router.push('/ManageSchedules')//default page

dayjs.extend(duration)

createApp(App).use(router).mount('#app')
