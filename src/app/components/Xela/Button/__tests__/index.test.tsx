import { render, screen } from '@testing-library/react'

import Button from '..'

describe('<Button/>', () => {
  it('should render the heading', () => {
    const { container } = render(
      <Button
        background='blue'
        size='large'
        outline={false}
        disabled={false}
        icon=''
      >
        {' '}
        Button{' '}
      </Button>
    )

    expect(screen.getByRole('heading', { name: /Button/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
