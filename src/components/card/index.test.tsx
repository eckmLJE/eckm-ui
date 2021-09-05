import React from 'react'
import { render, screen } from '~/utils/test-utils'
import { Primary } from './index.stories'

describe('Card', () => {
  it('renders', () => {
    render(<Primary {...Primary.args} />)
    expect(screen.getByText('test')).toBeInTheDocument()
  })
})
