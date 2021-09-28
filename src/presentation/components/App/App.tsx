import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { configStore } from '@/presentation/redux'
import { Router } from '@/presentation/components/Router'
import { StrictMode } from 'react'

const App = () => {
  return (
    <Provider store={configStore()}>
      <Router />
    </Provider>
  )
}

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
