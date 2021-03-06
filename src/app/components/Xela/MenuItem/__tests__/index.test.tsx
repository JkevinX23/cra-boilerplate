import { render, screen } from '@testing-library/react'

import MenuItem from '..'

describe('<MenuItem/>', () => {
  it('should render the heading', () => {
    const { container } = render(<MenuItem icon='dashboard' text='kevin' />)

    expect(
      screen.getByRole('heading', { name: /MenuItem/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
