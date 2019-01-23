import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Button } from 'antd';
import '../css/User.css';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'我是一个User组件'
         };
    }
    componentDidMount() {
    	console.log(this.props);
	}
    render() {
        return (
            <div className="user">
				<Button type="primary">Primary</Button>
				faaf
				<Button type="primary">Prsimary</Button>

				{/* 用户组件*/}
                <div className="left">
					<Link to="/user/">用户列表</Link>

					<br />
					<br />

					<Link to="/user/add">增加用户</Link>

					<br />
					<br />

					<Link to="/user/edit">编辑用户</Link>

                </div>
                <div className="right">
					{

						this.props.routes.map((route,key)=>{

							return   <Route key={key} exact path={route.path} component={route.component} />
						})
					}
                </div>
            </div>
        );
    }
}

export default User;
