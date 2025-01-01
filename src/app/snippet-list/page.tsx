import React from 'react';
import me from '@/assets/img.png';
import Image from 'next/image';
import Link from 'next/link';
const SnippetList = () => {
	return (
		<div>
			<div className='navside h-screen w-[24%] md:flex justify-center items-center hidden  '>
				<div className='navbar h-[90%]  w-[80%] border-2 rounded-lg p-[16px]'>
					{/* logo */}
					<Image
						src={me}
						alt='background image'
						className='z-20 w-16'
					/>
					<Link href={'/snippet-list'}>
						<p>Snippets List</p>
					</Link>
				</div>
			</div>
			<div className='listside'></div>
		</div>
	);
};

export default SnippetList;
