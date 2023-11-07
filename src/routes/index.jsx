import { Route, Routes } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";

// export const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <MainLayout></MainLayout>,
// 		children: [
// 			{
// 				path: "/",
// 				element: <Home />,
// 			},
// 			{
// 				path: "/aboutus",
// 				element: <AboutUs />,
// 			},
// 		],
// 	},
// ]);

const Routers = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<MainLayout></MainLayout>}
			>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/aboutus"
					element={<AboutUs />}
				/>
			</Route>
		</Routes>
	);
};

export default Routers;
