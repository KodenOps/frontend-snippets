import Link from 'next/link';
import React from 'react';
import { CgMenuGridO } from 'react-icons/cg';
import { FaWpforms } from 'react-icons/fa';
import { MdOutlineSmartButton } from 'react-icons/md';

import { BsMenuDown } from 'react-icons/bs';

import { IoMdColorWand } from 'react-icons/io';
import { MdAnimation } from 'react-icons/md';
const NavLinksCat = () => {
	return (
		<div className='categories'>
			<h3 className='mt-4 font-medium tracking-wider text-[#594ba6]'>
				CATEGORIES
			</h3>
			<div className='flex items-start md:gap-8 gap-16 mt-4'>
				<div className='left flex flex-col gap-4'>
					<Link
						href={'/form-snippets'}
						className='flex items-center justify-start gap-2'>
						<FaWpforms size={20} />

						<p className='font-medium text-slate-600'>Forms</p>
					</Link>
					<Link
						href={'/buttons'}
						className='flex items-center justify-start gap-2'>
						<MdOutlineSmartButton size={20} />

						<p className='font-medium text-slate-600'>Button</p>
					</Link>
					<Link
						href={'/thems'}
						className='flex items-center justify-start gap-2'>
						<IoMdColorWand size={20} />

						<p className='font-medium text-slate-600'>Themes</p>
					</Link>
				</div>
				<div className='right flex flex-col gap-4'>
					<Link
						href={'/animation'}
						className='flex items-center justify-start gap-2'>
						<MdAnimation size={20} />

						<p className='font-medium text-slate-600'>Animation</p>
					</Link>
					<Link
						href={'/footers'}
						className='flex items-center justify-start gap-2'>
						<BsMenuDown size={20} />

						<p className='font-medium text-slate-600'>Footers</p>
					</Link>
					<Link
						href={'/navigations'}
						className='flex items-center justify-start gap-2'>
						<CgMenuGridO size={20} />

						<p className='font-medium text-slate-600'>Navigations</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NavLinksCat;
