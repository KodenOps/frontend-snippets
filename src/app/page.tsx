import Image from 'next/image';
import bg from '@/assets/bg.png';
import me from '@/assets/img.png';
import Link from 'next/link';
export default function Home() {
	return (
		<div className='w-screen h-screen overflow-hidden relative '>
			<div className='content w-full h-full flex items-center justify-center flex-col'>
				{/* image */}
				<Image
					src={me}
					alt='background image'
					className='z-20 w-24'
				/>
				{/* header */}
				<div className='header flex flex-col gap-20 items-center z-20'>
					<div className='top'>
						<h3 className='md:text-2xl text-xl text-center mb-2 text-slate-50'>
							The Vault For All Snippets
						</h3>
						<h3 className='font-extrabold md:text-5xl text-4xl text-center text-[#64D8DA]'>
							WITH JSX & TSX
						</h3>
					</div>
					<Link
						href={'/form-snippets'}
						className='shadow-md py-4 px-6 w-[240px] mt-4 rounded-md bg-slate-50 text-center'>
						View Snippets
					</Link>
				</div>
			</div>
			<div className='img absolute top-0 z-0 w-full h-screen '>
				<Image
					src={bg}
					alt='background image'
					className='object-cover h-screen'
				/>
			</div>
		</div>
	);
}
