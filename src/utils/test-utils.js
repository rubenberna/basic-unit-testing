import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import { store as mainStore } from 'appStore'

const AllProviders = ({ children }) => {
  return (
    <Provider store={mainStore}>
      {children}
    </Provider>
  )
}

const customRender = (ui, options) => 
  render(ui, { wrapper: AllProviders, ...options})

export * from '@testing-library/react'

// override render method
export { customRender as render }
