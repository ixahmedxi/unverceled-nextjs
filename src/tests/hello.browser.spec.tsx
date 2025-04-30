import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'

import Home from '@/app/page'

test('renders hello', async () => {
  const { getByText } = render(<Home />)
  await expect.element(getByText(/hello world/i)).toBeInTheDocument()
})
