import React, { Component } from 'react'
import { Route, Redirect, Switch } from "react-router-dom"
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

import './App.css'

import Preloader from './components/common/Preloader/Preloader'
import { initializeApp } from './redux/app-reducer'
import PostsContainer from './components/Posts/PostsContainer'
import SinglePostContainer from './components/SinglePost/SinglePostContainer'
import NotFound from './components/common/NotFound/NotFound'

class App extends Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if (!this.props.initialized) {
      return (
              <Preloader />
      )
    }
    return (
      <div className='app-wrapper'>
        <Switch>
          <Route exact path="/"
                  render={() => <Redirect to='/posts' />} />
          <Route exact path="/posts"
                  render={() => <PostsContainer />} />
          <Route exact path="/post/:postId?"
                  render={() => <SinglePostContainer /> } />
          <Route path='/404'
                  render={() => <NotFound />} />
          <Route path='*'
                  render={() => <Redirect to='/404' />} />
        </Switch>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {
          initializeApp
  })
)(App)
