import React from 'react'
import { ErrorMessage } from './ErrorMessage'
import { render } from '@testing-library/react'

test('Display an error message and a retry button', () => {
  let clicked = false
  const error = Error('oups')

  const { getByText } = render(
    <ErrorMessage
      onClick={() => { clicked = true }}
    >
      {error.message}
    </ErrorMessage>
  )

  expect(getByText('oups').tagName).toEqual('H4')
  expect(getByText('Retry').tagName).toEqual('BUTTON')
})
