import { shallowMount, Wrapper } from '@vue/test-utils'
import Landscape from '@/components/Landscape.vue'

describe('Landscape', () => {
  let view: Wrapper<Landscape>
  let vm: any

  beforeAll(() => {
    view = shallowMount(Landscape)
    vm = (view as any).vm
  })

  afterAll(() => {
    view.destroy()
  })

  describe('season', () => {
    describe('default', () => {
      it('should show the fall illustration', () => {
        expect(vm.img).toEqual('/img/illustration_1.jpg')
      })
    })
    describe('fall', () => {
      it('should show the fall illustration', () => {
        view.setProps({
          season: 'fall'
        })
        expect(vm.img).toEqual('/img/illustration_1.jpg')
      })
    })
    describe('winter', () => {
      it('should show the winter illustration', () => {
        view.setProps({
          season: 'winter'
        })
        expect(vm.img).toEqual('/img/illustration_2.jpg')
      })
    })
  })
})
