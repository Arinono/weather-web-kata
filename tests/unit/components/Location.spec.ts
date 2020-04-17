import { shallowMount, Wrapper } from '@vue/test-utils'
import Location from '@/components/Location.vue'

describe('Location', () => {
  let view: Wrapper<Location>
  let vm: any

  beforeAll(() => {
    view = shallowMount(Location, {
      propsData: {
        location: 'toto'
      }
    })
    vm = (view as any).vm
  })

  afterAll(() => {
    view.destroy()
  })

  it('should display a location', () => {
    expect(vm.location).toEqual('toto')
  })
})
