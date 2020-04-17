import { shallowMount } from '@vue/test-utils'
import WeatherCard from '@/components/WeatherCard.vue'

describe('WeatherCard', () => {
  it('should mount', () => {
    const wrapper = shallowMount(WeatherCard, {
      propsData: {
        data: {
          temperature: 1,
          date: 'Monday, 21 nov 2142',
          location: 'Amsterdam, Netherlands',
          season: 'winter'
        }
      }
    })
    expect(wrapper.html()).toBeTruthy()
  })
})
