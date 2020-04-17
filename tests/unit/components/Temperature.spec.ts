import { shallowMount, Wrapper } from '@vue/test-utils'
import Temperature from '@/components/Temperature.vue'

describe('Temperature', () => {
  let view: Wrapper<Temperature>
  let vm: any

  beforeAll(() => {
    view = shallowMount(Temperature, {
      propsData: {
        temp: 1,
        season: 'winter'
      }
    })
    vm = (view as any).vm
  })

  afterAll(() => {
    view.destroy()
  })

  it('should have default props', () => {
    expect(vm.temp).toEqual(1)
    expect(vm.season).toEqual('winter')
  })

  it('should diplay the snowflake icon', () => {
    expect(vm.icon).toEqual('/img/snowflake.png')
  })
})
