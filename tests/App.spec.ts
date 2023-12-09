import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import HelloWorld from '../components/HelloWorld.vue'

describe('HelloWorld', () => {
  it(`should render "Olá mundo!"`, () => {
    const wrapper = mount(HelloWorld)
    expect(wrapper.find('h1').text()).toBe('Olá mundo!')
  })
})
