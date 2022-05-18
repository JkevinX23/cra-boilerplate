import { render, screen } from '@testing-library/react'

import Icons from '..'

describe('<Icons/>', () => {
  it('should render the heading', () => {
    const { container } = render(<Icons />)

    expect(screen.getByRole('heading', { name: /Icons/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
