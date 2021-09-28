import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { configStore } from '@/presentation/redux'
import { Theme } from '@/presentation/components/Theme'
import { theme } from '@/presentation/theme'
import { Router } from '@/presentation/components/Router'
import { StrictMode } from 'react'

const App = () => {
  return (
    <Provider store={configStore()}>
      <Theme theme={theme}>
        <Router />
      </Theme>
    </Provider>
  )
}

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
