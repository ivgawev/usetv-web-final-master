import { lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route as BrowserRoute, Redirect } from 'react-router-dom'
import { Route } from '@/presentation/components/Router'

const Home = lazy(() => import('@/presentation/pages/home'))

export const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Switch>
          <BrowserRoute exact path={Route.HOME} component={Home} />
          <Redirect exact from={Route.DEFAULT} to={Route.HOME} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}
