import React, { Suspense, lazy, useEffect } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { store } from './js/store/store'
import './App.scss'
import Navigation from './js/components/navigation'
import Spinner from '@components/spinner'

const HomePage = lazy(() => import('@modules/home_page'))
const ProfilePage = lazy(() => import('@modules/profile_page'))
const SearchPage = lazy(() => import('@modules/search_page'))

function App() {
  /*
   * TODO: remove this hack
   *  it is here because I need additional request to get info about liked albums
   * */
  useEffect(() => {
    localStorage.removeItem('liked')
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Navigation />
        <div className="l-center">
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route path="/profile">
                <ProfilePage />
              </Route>
              <Route path="/search">
                <SearchPage />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </Router>
    </Provider>
  )
}

export default App
