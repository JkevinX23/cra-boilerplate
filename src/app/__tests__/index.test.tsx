import * as React from 'react'
import { createRenderer } from 'react-test-renderer/shallow'

import { Application } from '../App'

const renderer = createRenderer()

describe('<App />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<Application />)
    const renderedOutput = renderer.getRenderOutput()
    expect(renderedOutput).toMatchSnapshot()
  })
})
