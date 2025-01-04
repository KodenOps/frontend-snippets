import React from 'react';
import DynamicIcon from './Icon';
import { IconType } from 'react-icons';
interface propType {
	IconName: IconType;
	headerTitle: string;
	headerPara: string;
}
const Headers = ({ IconName, headerPara, headerTitle }: propType) => {
	return (
		<div>
			<div className='flex items-center gap-4 px-4 md:px-0 text-[#594ba6]'>
				<DynamicIcon
					IconName={IconName}
					size={20}
				/>
				<h3 className='md:text-xl text-[20px] font-medium '>{headerTitle}</h3>
			</div>
			<p className='text-[18px] py-2 md:px-0 px-4'>{headerPara}</p>
		</div>
	);
};

export default Headers;
