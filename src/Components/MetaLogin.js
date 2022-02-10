import React, { useState } from "react";
import { Link } from "react-router-dom";
// import UAuth from "@uauth/js";
import uauth from "./uauth";

const MetaLogin = ({ auth, setAuth }) => {
	const [user, setUser] = useState();

	const handleLogin = async () => {
		try {
			await uauth?.loginWithPopup();
			const user = await uauth?.user();
			setUser(user);
			setAuth(true);
		} catch (error) {
			console.log(error);
		}
		return window.location.reload();
	};

	return (
		<>
			<div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
				<div className="container m-auto h-screen w-screen flex justify-center items-center flex-col justify-evenly sm:px-6 lg:px-8">
					<div className="text-white text-3xl md:text-6xl">
						Gini Index Calculator
					</div>

					<button
						onClick={handleLogin}
						className="h-auto w-auto bg-[#7878FD] text-white rounded-full text-lg px-8 py-5 z-0 hover:drop-shadow-xl focus:drop-shadow-2xl focus:outline-none sm:w-fill"
					>
						Login with Unstoppable
					</button>
				</div>
			</div>
		</>
	);
};

export default MetaLogin;
