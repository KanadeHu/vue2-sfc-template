import { fireEvent, render, screen } from '@testing-library/vue'

import MyTest from '../../src/component/Test'

describe('test组件单元测试组', () => {
  it('increament click', async () => {
    await render(MyTest)

    const comNode = await screen.findByTestId('info')
    expect(comNode).toBeTruthy()
    expect(comNode.textContent).toContain('计数器：1')

    // 执行事件
    const button = await screen.findByTestId('click')
    await fireEvent.click(button)

    expect(comNode.textContent).toContain('计数器：2')
  })
})
