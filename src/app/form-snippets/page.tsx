import React from 'react';
import Image from 'next/image';
import SideNav from '@/components/SideNav';
import { FaWpforms } from 'react-icons/fa';
import { formSnippets } from '@/data/formLinkDB';
import formgif from '@/assets/input.gif';
import Link from 'next/link';
import Headers from '@/components/Headers';
const SnippetList = () => {
	return (
		<div className='md:flex w-full'>
			<div className=''>
				<SideNav />
			</div>
			<div className='md:mt-[40px] mt-[60px] md:w-full mr-2 px-4 py-8 md:border-t-2'>
				<Headers
					IconName={FaWpforms}
					headerTitle='Form'
					headerPara='Collection of cool forms and form inputs functionalities'
				/>
				<div className='mt-6 flex flex-wrap md:gap-6 gap-4 items-start  md:justify-around justify-around'>
					{formSnippets.map((e) => (
						<Link
							className='w-[150px] mb-6 z-0'
							href={e.link}>
							<div className='w-[150px] md:h-[150px] h-[100px] shadow-md relative flex items-center rounded-md justify-center hover:-translate-y-2 transition-all duration-[2s]'>
								<p className='text-[10px] absolute top-4 right-2 border-2 px-2 rounded-full'>
									{e.level}
								</p>
								<Image
									src={formgif}
									alt='git'
									className='w-[80%] mt-6'
								/>
							</div>
							<p className='text-[14px] font-medium text-slate-500 md:text-left text-center mt-2'>
								{e.title}
							</p>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default SnippetList;
