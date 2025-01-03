import React from 'react';
import me from '@/assets/img.png';
import Image from 'next/image';
import SideNav from '@/components/SideNav';

const SnippetList = () => {
	return (
		<div className='md:flex w-full'>
			<div className=''>
				<SideNav />
			</div>
			<p className='md:mt-[40px] mt-[80px] w-full '>hello world</p>
		</div>
	);
};

export default SnippetList;
