import React from 'react';
import me from '@/assets/img.png';
import Image from 'next/image';
import SideNav from '@/components/SideNav';
import { FaWpforms } from 'react-icons/fa';
import { formSnippets } from '@/data/formLinkDB';
import formgif from '@/assets/input.gif';
const SnippetList = () => {
	return (
		<div className='md:flex w-full'>
			<div className=''>
				<SideNav />
			</div>
			<div className='md:mt-[40px] mt-[60px] md:w-full mr-2 px-4 py-8 md:border-t-2'>
				<div className='flex items-center gap-4 px-4 md:px-0'>
					<FaWpforms size={20} />
					<h3 className='md:text-xl text-[20px] font-medium'>Form</h3>
				</div>
				<p className='text-[18px] py-2 md:px-0 px-4'>
					Collection of cool forms and form inputs functionalities.{' '}
				</p>
				<div className='mt-6 flex flex-wrap gap-4 items-start  md:justify-start justify-around'>
					{formSnippets.map((e) => (
						<div className='w-[150px] mb-6 '>
							<div className='w-[150px] h-[100px] shadow-lg relative flex items-center justify-center'>
								<p className='text-[10px] absolute top-4 right-2 border-2 px-2 rounded-full'>
									{e.level}
								</p>
								<Image
									src={formgif}
									alt='git'
									className='w-[80%] mt-6'
								/>
							</div>
							<p className='text-[14px] font-medium text-slate-500 md:text-left text-center'>
								{e.title}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SnippetList;
