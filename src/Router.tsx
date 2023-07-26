import { Routes, Route } from 'react-router-dom'

import { LandingPage } from './pages/LandingPage'

const routes = [
  {
    path: '/',
    component: LandingPage,
  },
]

export function Router() {
  return (
    <Routes>
      {routes.map(route => (
        <Route key={route.path} path={route.path} Component={route.component} />
      ))}
    </Routes>
  )
}
