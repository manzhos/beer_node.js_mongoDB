/* eslint-disable no-tabs */
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { NewBeer } from './pages/NewBeer'
import { AuthPage } from './pages/AuthPage'
import { BeerPage } from './pages/BeerPage'

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
			<Switch>
				<Route path="/addbeer" exact>
					<NewBeer />
				</Route>
				<Route path="/login" exact>
					<AuthPage />
				</Route>
				<Route path="/beer" exact>
					<BeerPage />
				</Route>
				<Redirect to="/login">
					<AuthPage />
				</Redirect>
			</Switch>
    )
  }

  return (
		<Switch>
				<Route path="/" exact>
					<AuthPage />
				</Route>
				<Redirect to="/login">
					<AuthPage />
				</Redirect>
		</Switch>
  )
}
