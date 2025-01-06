'use client';
import Bankform from '@/components/Bankform';
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
				<div className='border-b-2 pb-4'>
					<Headers
						IconName={FaWpforms}
						headerTitle='Snippet 1: Search And Display While Typing'
						headerPara='Search for an item in a list and display result while typing'
					/>
				</div>

				<div className='maincontent flex lg:flex-row flex-col items-start gap4 justify-between flex-wrap'>
					<div className='left mt-4 w-full flex-1 border-r-2 border-dotted min-h-[100vh]'>
						Hello
					</div>
					<div className='right w-full flex-1  px-4'>
						<Bankform />
						<hr />
						<button className='bg-black py-2 px-6 w-full rounded-md text-white mt-4'>
							Click to Copy
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
