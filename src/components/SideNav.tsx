'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { CgClose, CgMenuGridO } from 'react-icons/cg';
import { FaWpforms } from 'react-icons/fa';
import { MdMenu, MdOutlineSmartButton } from 'react-icons/md';

import { BsMailbox, BsMenuDown, BsTwitterX } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { BiSolidHome } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';
import { IoMdColorWand } from 'react-icons/io';
import { MdAnimation } from 'react-icons/md';
import NavLinksCat from './NavLinksCat';
import BottomNavLink from './BottomNavLink';
const SideNav = () => {
	const [menuactive, setmenuactive] = useState(true);
	return (
		<div className='w-full md:h-auto  bg-[#dcdcdc09]'>
			{/* Mobile view nav */}
			<div className='mobiles md:hidden w-full z-100 overflow-scroll'>
				{/* the logo + menu icon */}
				<div className='topNav border-b-2 flex px-4 py-4 top-0  w-full justify-between fixed z-[1000] bg-white items-center'>
					<h3 className='font-black text-xl uppercase tracking-wide  text-[#2d32a2]'>
						Snypett
					</h3>
					<div onClick={() => setmenuactive(!menuactive)}>
						{menuactive ? (
							<MdMenu size={32} />
						) : (
							<CgClose
								size={32}
								color='#ff0000'
							/>
						)}
					</div>
				</div>
				{/* main navlist for mobile */}
				{menuactive ? (
					''
				) : (
					<div className='mainmobilelist px-4 mt-[60px] min-h-[95vh] fixed z-50 bg-white w-full flex flex-col justify-start gap-[150px]'>
						<div className='tops'>
							<p className='text-xl md:pt-2 pt-6 mb-4'>
								A collection of all your cool frontend components
							</p>
							<hr />
							<NavLinksCat
								menuactive={menuactive}
								setmenuactive={setmenuactive}
							/>
						</div>
						<div className='bottoms'>
							<BottomNavLink />
						</div>
					</div>
				)}
			</div>
			{/* Web View Nav */}
			<div className='navside h-screen w-full md:flex justify-center items-center hidden'>
				<div className='navbar h-[90%]  w-[80%] border-2 rounded-lg px-[16px] py-[40px] flex flex-col justify-between'>
					<div className='top'>
						{/* logo */}
						<h3 className='font-black text-2xl uppercase tracking-widest text-[#2d32a2]'>
							Snypett
						</h3>
						<p className='lg:text-lg md:text-[16px] font-normal'>
							A collection of all your cool frontend components
						</p>
						<hr className='mt-4' />
						{/* nav link */}
						<NavLinksCat
							menuactive={menuactive}
							setmenuactive={setmenuactive}
						/>
					</div>
					{/* QUICK LINKS */}
					<BottomNavLink />
				</div>
			</div>
		</div>
	);
};

export default SideNav;
