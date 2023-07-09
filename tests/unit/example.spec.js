import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'WeightFit:Gewicht-Tracker-Anwendung Unsere App ist eine webbasierte Anwendung, die Benutzern ermöglicht, ihre Gewicht zu verfolgen und ihrer Fortschritt im Laufe der Zeit zu überwachen.'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
