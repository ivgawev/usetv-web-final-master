import { Suspense } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

export const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Switch></Switch>
      </Suspense>
    </BrowserRouter>
  )
}
