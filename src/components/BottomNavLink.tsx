import Link from 'next/link';
import React from 'react';
import { BsMailbox, BsTwitterX } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const BottomNavLink = () => {
	return (
		<div className='bottom'>
			<hr className='mt-4' />
			<h3 className='mt-10 font-medium tracking-wider text-[#594ba6]'>
				QUICK LINKS - CONTACTS
			</h3>
			<div className='flex items-start md:gap-8 gap-16 mt-4'>
				<div className='left flex flex-col gap-6'>
					<Link
						href={'/repo'}
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
				<div className='right flex flex-col gap-6'>
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
	);
};

export default BottomNavLink;
