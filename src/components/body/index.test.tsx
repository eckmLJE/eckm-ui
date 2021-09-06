import React from 'react'
import { render, screen } from '~/utils/test-utils'
import { Default } from './index.stories'

describe('Body', () => {
  it('renders', () => {
    render(<Default {...Default.args} />)
    expect(screen.getByText('Body text')).toBeInTheDocument()
  })
})
