import { shallowMount, Wrapper } from '@vue/test-utils'
import Date from '@/components/Date.vue'

describe('Date', () => {
  let view: Wrapper<Date>
  let vm: any

  beforeAll(() => {
    view = shallowMount(Date, {
      propsData: {
        date: 'toto'
      }
    })
    vm = (view as any).vm
  })

  afterAll(() => {
    view.destroy()
  })

  it('should display a date', () => {
    expect(vm.date).toEqual('toto')
  })
})
