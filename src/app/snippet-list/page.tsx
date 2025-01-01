import React from 'react';
import me from '@/assets/img.png';
import Image from 'next/image';
import Link from 'next/link';
import { CgMenuGridO } from 'react-icons/cg';
import { FaWpforms } from 'react-icons/fa';
import { MdOutlineSmartButton } from 'react-icons/md';
import { IoMdColorWand } from 'react-icons/io';
import { MdAnimation } from 'react-icons/md';
import { BsMailbox, BsMenuDown, BsTwitterX } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { BiSolidHome } from 'react-icons/bi';

const SnippetList = () => {
	return (
		<div>
			<div className='navside h-screen w-[24%] md:flex justify-center items-center hidden  '>
				<div className='navbar h-[90%]  w-[80%] border-2 rounded-lg px-[16px] py-[40px] flex flex-col justify-between'>
					<div className='top'>
						{/* logo */}
						<h3 className='font-black text-xl uppercase tracking-widest text-[#2d32a2]'>
							Snypett
						</h3>
						<p className='text-lg font-normal'>
							A collection of all your cool frontend components
						</p>
						<hr className='mt-4' />
						{/* nav link */}
						<Link
							href={'/'}
							className='flex items-center justify-start gap-2 mt-4'>
							<BiSolidHome size={20} />

							<p className='font-medium text-slate-600'>Start Page</p>
						</Link>
						<Link
							href={'/snippet-list'}
							className='flex items-center justify-start gap-2 mt-4'>
							<CgMenuGridO size={20} />

							<p className='font-medium text-slate-600'>Snippets List</p>
						</Link>
						{/* CATEGORIES */}
						<h3 className='mt-10 font-medium tracking-wider text-[#594ba6]'>
							CATEGORIES
						</h3>
						<div className='flex items-start gap-8 mt-4'>
							<div className='left flex flex-col gap-4'>
								<Link
									href={'/snippet-list'}
									className='flex items-center justify-start gap-2'>
									<FaWpforms size={20} />

									<p className='font-medium text-slate-600'>Forms</p>
								</Link>
								<Link
									href={'/snippet-list'}
									className='flex items-center justify-start gap-2'>
									<MdOutlineSmartButton size={20} />

									<p className='font-medium text-slate-600'>Button</p>
								</Link>
								<Link
									href={'/snippet-list'}
									className='flex items-center justify-start gap-2'>
									<IoMdColorWand size={20} />

									<p className='font-medium text-slate-600'>Themes</p>
								</Link>
							</div>
							<div className='right flex flex-col gap-4'>
								<Link
									href={'/snippet-list'}
									className='flex items-center justify-start gap-2'>
									<MdAnimation size={20} />

									<p className='font-medium text-slate-600'>Animation</p>
								</Link>
								<Link
									href={'/snippet-list'}
									className='flex items-center justify-start gap-2'>
									<BsMenuDown size={20} />

									<p className='font-medium text-slate-600'>Footers</p>
								</Link>
								<Link
									href={'/snippet-list'}
									className='flex items-center justify-start gap-2'>
									<CgMenuGridO size={20} />

									<p className='font-medium text-slate-600'>Navigations</p>
								</Link>
							</div>
						</div>
					</div>

					{/* QUICK LINKS */}
					<div className='bottom'>
						<hr className='mt-4' />
						<h3 className='mt-10 font-medium tracking-wider text-[#594ba6]'>
							QUICK LINKS - CONTACTS
						</h3>
						<div className='flex items-start gap-8 mt-4'>
							<div className='left flex flex-col gap-4'>
								<Link
									href={'/snippet-list'}
									className='flex items-center justify-start gap-2'>
									<FaGithub size={20} />

									<p className='font-medium text-slate-600'>Repo</p>
								</Link>
								<Link
									href={'/snippet-list'}
									className='flex items-center justify-start gap-2'>
									<FaLinkedin size={20} />

									<p className='font-medium text-slate-600'>LinkedIn</p>
								</Link>
							</div>
							<div className='right flex flex-col gap-4'>
								<Link
									href={'/snippet-list'}
									className='flex items-center justify-start gap-2'>
									<BsTwitterX size={20} />

									<p className='font-medium text-slate-600'>X - Twitter</p>
								</Link>
								<Link
									href={'/snippet-list'}
									className='flex items-center justify-start gap-2'>
									<BsMailbox size={20} />

									<p className='font-medium text-slate-600'>Suggestion</p>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='listside'></div>
		</div>
	);
};

export default SnippetList;
