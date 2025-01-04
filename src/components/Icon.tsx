import React from 'react';
import { IconType } from 'react-icons';

interface IconProps {
	IconName: IconType;
	size?: number;
	color?: string;
}

const DynamicIcon: React.FC<IconProps> = ({
	IconName,
	size = 20,
	color = '#594ba6',
}) => {
	return (
		<IconName
			size={size}
			color={color}
		/>
	);
};

export default DynamicIcon;
