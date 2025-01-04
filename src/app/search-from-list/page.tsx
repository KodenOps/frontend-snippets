'use client';
import Headers from '@/components/Headers';
import SideNav from '@/components/SideNav';
import React, { useState } from 'react';
import { FaWpforms } from 'react-icons/fa';
import { nigerianBanks } from '@/data/BanksList';
const page = () => {
	const [isTyping, setisTyping] = useState(false);
	const [values, setvalues] = useState('');

	const filteredbank = nigerianBanks.filter(
		(bank) =>
			bank.fullName.toLowerCase().includes(values.toLowerCase()) ||
			bank.shortName.toLowerCase().includes(values.toLowerCase())
	);
	return (
		<div className='md:flex w-full'>
			<div className='w-[40%]'>
				<SideNav />
			</div>
			<div className='md:mt-[40px] mt-[60px] md:w-full mr-2 px-4 py-8 md:border-t-2'>
				<Headers
					IconName={FaWpforms}
					headerTitle='Snippet 1: Search And Display While Typing'
					headerPara='Search for an item in a list and display result while typing'
				/>
				<form className='md:w-[500px] w-full border-2 p-4 mt-4'>
					<input
						type='text'
						placeholder='Enter Bank name'
						value={values}
						className='px-4 py-2 w-full border-2 mb-4 rounded-sm outline-blue-600'
						onChange={(e) => {
							setisTyping(true);
							setvalues(e.target.value);
						}}
						// onBlur={() => setisTyping(false)}
					/>
					{isTyping && values && (
						<ul className='  overflow-auto w-full border-2 mb-4 rounded-sm outline-blue-600'>
							{filteredbank.length > 0 ? (
								filteredbank.map((e) => (
									<li
										onClick={() => {
											setvalues(e.fullName);
											setisTyping(false);
										}}
										key={e.fullName}
										className='px-4 py-2 w-full hover:bg-blue-600  hover:text-white cursor-pointer'>
										{e.fullName}
									</li>
								))
							) : (
								<li>"No bank found"</li>
							)}
						</ul>
					)}
					<button className='bg-blue-600 py-2 px-6 w-full rounded-md text-white'>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default page;
