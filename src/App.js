import React, { Component } from 'react';
import './css/index.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import routes from './model/router';


class App extends Component {
  render() {
    return (
        <Router>
			<div>
				<header className="title">
					<Link to="/">首页组件</Link>
					<Link to="/user">用户页面</Link>
					<Link to="/shop">商户</Link>
					<Link to="/news">新闻</Link>
				</header>

{/*				{
					routes.map((route, key) => {
						if(route.exact) {
							return <Route key={key} exact path={route.path} component={route.component} />
						}else {
							return <Route key={key} path={route.path} component={route.component} />
						}

					})
				}*/}
				{
					routes.map((route, key) => {
						if(route.exact) {
							return <Route key={key} exact path={route.path}
										  render={props => (
											  // pass the sub-routes down to keep nesting
											  <route.component {...props} routes={route.routes} />
										  )}
									/>
						}else {
							return <Route key={key} path={route.path}
										  render={props => (
											  // pass the sub-routes down to keep nesting
											  <route.component {...props} routes={route.routes} />
										  )}
									/>
						}

					})
				}
			  </div>
        </Router>
    );
  }
}

export default App;
