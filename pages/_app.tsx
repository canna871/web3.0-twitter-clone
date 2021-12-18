import '../styles/globals.css'
import type { AppProps } from 'next/app'
import IconImage from '../public/emoji_nature_white_24dp.svg';
import PersonImage from '../public/person_white_24dp.svg';
import SettingsImage from '../public/settings_white_24dp.svg';
import LogOutImage from '../public/logout_white_24dp.svg';
import Image from 'next/image';

function MyApp({ Component, pageProps }: AppProps) {
	return (
	<div className='flex w-screen justify-between bg-black'>
		<nav className='w-3/12 flex flex-col border-r p-10 min-h-screen'>
			<div className=' p-2'>
				<Image src={IconImage} height={50} width={50} className='hover:bg-blue-600 transition-all rounded-full hover:cursor-pointer' />
			</div>
			<h1 className='text-white flex items-center text-2xl font-medium hover:bg-gray-600 transition-all rounded-full hover:cursor-pointer p-2'>
				<Image src={PersonImage} height={50} width={50} />
				Profile
			</h1>
			<h1 className='text-white flex items-center text-2xl font-medium hover:bg-gray-600 transition-all rounded-full hover:cursor-pointer p-2'>
				<Image src={SettingsImage} height={50} width={50} />
				Settings
			</h1>
			<h1 className='text-white flex items-center text-2xl font-medium hover:bg-red-600 transition-all rounded-full hover:cursor-pointer p-2'>
				<Image src={LogOutImage} height={50} width={50} />
				Log Out
			</h1>
		</nav>
	<div className='w-6/12 border-r text-white'>
		<Component {...pageProps} />
	</div>
		<div className='w-4/12 text-white p-5'>
			<input type="text" placeholder='Search Twitter' className='bg-gray-800 w-full p-3 rounded-full outline-none focus:outline-blue-600' />
			<div className='bg-gray-800 mt-5 rounded-xl'>
				<h1 className='text-xl font-bold p-3'>People to follow</h1>
				<div className='mt-3 hover:bg-gray-600 hover:cursor-pointer p-3'>
					<h3 className='text-lg font-medium'>Zeno</h3>
					<p className='font-light text-gray-400'>XXX followers</p>
				</div>
			</div>
		</div>
	</div>
	)
}

export default MyApp
