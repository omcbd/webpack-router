import { Router, Route, hashHistory,IndexRoute } from 'react-router';
import React, { PropTypes } from 'react'
import App from  './app.js'
import Home from './home.js'
import About from './about.js'
import Work from './work.js'
import Blog from './blog.js'
class Routes extends React.Component {
  render () {
      return (
        <Router history={hashHistory}>
            <Route path="/" component={App}>        //外层路由即父路由需要在render中设置{this.props.children}来访问子路由
                <IndexRoute component={Home}/>      //IndexRoute 与父路由同时显示，
                <Route path="/about" component={About} />
                <Route path="/work" component={Work} />
                <Route path="/blog/:title" component={Blog} />  // :title 路由变量 在 Blog 的props属性的 params属性产生一个title属性,它的值是访问/blog/时的路径   如 /blog/abc 则 title=abc
            </Route>
        </Router>
      )
  }
}

export default Routes ;
