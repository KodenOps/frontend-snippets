import React from 'react';
import me from '@/assets/img.png';
import Image from 'next/image';
import SideNav from '@/components/SideNav';

const SnippetList = () => {
	return (
		<div className='md:flex'>
			<SideNav />
			<p className='md:mt-0 mt-[80px]'>hello world</p>
		</div>
	);
};

export default SnippetList;
