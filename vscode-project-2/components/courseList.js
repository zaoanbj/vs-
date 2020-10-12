Vue.component('course-list', {
    data() {
        return {
            selectCourse: 0,
        }
    },
    props: {
        courses: {
            type: Array,
            default: ''
        },
    },
    template: `
        <div>
            <p v-if="courses.length==0">没有信息</p>
            <ul class="course-list" v-else>
                <!-- <li v-for="c in courses" :class={active: (selectCourse === c)}" @click="selectCourse = c">{{ c }}</li> -->
                <li v-for="c in courses" :style="{backgroundColor:(selectCourse===c)?'#ddd':''}" @click="selectCourse = c">{{ c }}</li>
            </ul>
        </div>`
})