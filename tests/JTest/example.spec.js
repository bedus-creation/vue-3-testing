import { mount } from '@vue/test-utils'
import expect from 'expect';
import Example from '../../resources/js/components/Example.vue';

describe('Example', () => {
    it('increments count when button is clicked', () => {
        const wrapper = mount(Example)
        wrapper.find('button').trigger('click')
        expect(wrapper.find('div').text()).toMatch('1')
    })
})