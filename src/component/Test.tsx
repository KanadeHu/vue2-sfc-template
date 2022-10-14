import { defineComponent, ref } from 'vue'

const MyTest = defineComponent({
  name: 'MyTest',
  setup() {
    const count = ref(1)

    const add = () => {
      count.value += 1
    }

    return () => {
      return (
        <div>
          <div class="count-info" data-testid="info">
            计数器：{count.value}
          </div>
          <button onClick={add} data-testid="click">
            计数器+
          </button>
        </div>
      )
    }
  },
})

export default MyTest
