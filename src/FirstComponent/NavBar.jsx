import React from "react";

const NavBar = () => {
	return (
		<div className='flex justify-between items-center m-10'>
			<div>
				<div>logo</div>
			</div>
			<ul className='flex justify-between items-center'>
				<li>Home</li>
				<li className='ml-4'>About</li>
				<li className='ml-4'>
					Cart <span>10</span>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
