'use client';
import Headers from '@/components/Headers';
import SideNav from '@/components/SideNav';
import React, { useState } from 'react';
import { FaWpforms } from 'react-icons/fa';

const page = () => {


	return (
		<div className='md:flex w-full'>
			<div className='w-[40%]'>
				<SideNav />
			</div>
			<div className='md:mt-[40px] mt-[60px] md:w-full mr-2 px-4 py-8 md:border-t-2'>
				<Headers
					IconName={FaWpforms}
					headerTitle='Button'
					headerPara='Collection of cool Buttons for your next project'
				/>
				<div className='mt-6 flex flex-wrap gap-4 items-start  md:justify-start justify-around'></div>
			</div>
		</div>
	);
};

export default page;
