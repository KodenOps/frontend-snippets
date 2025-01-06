'use client';
import React, { useState } from 'react';
import { nigerianBanks } from '@/data/BanksList';
const Bankform = () => {
	const [isTyping, setisTyping] = useState(false);
	const [values, setvalues] = useState('');

	const filteredbank = nigerianBanks.filter(
		(bank) =>
			bank.fullName.toLowerCase().includes(values.toLowerCase()) ||
			bank.shortName.toLowerCase().includes(values.toLowerCase())
	);
	return (
		<div>
			<form className='md:w-2/3 w-full border-2 p-4 mt-4'>
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
	);
};

export default Bankform;
