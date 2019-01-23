import Home from "../components/Home";
import User from "../components/User";
import UserAdd from "../components/User/UserAdd";
import UserList from "../components/User/UserList";

import Shop from "../components/Shop";
import News from "../components/News";
import UserEdit from "../components/User/UserEdit";


const routes = [
	{
		path: "/",
		component: Home,
		exact: true
	},
	{
		path: "/user",
		component: User,
		routes: [
			{
				path: "/user/",
				component: UserList
			},
			{
				path: "/user/add",
				component: UserAdd
			},
			{
				path: "/user/edit",
				component: UserEdit
			},

		]
	},
	{
		path: "/shop",
		component: Shop,
	},
	{
		path: "/news",
		component: News,
	},
];

export default routes;