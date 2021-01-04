import React from 'react'
import {render} from '@testing-library/react'
import {Button} from './Button'

describe('Button', () => {
  test('renders Button component', () => {
    render(<Button onClick={() => console.log(1)}>Click</Button>)
  })
})
