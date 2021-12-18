import type { NextPage } from 'next'
import Image from 'next/image';
import IconImage from '../public/emoji_nature_white_24dp.svg';
import PersonImage from '../public/person_white_24dp.svg';
import SettingsImage from '../public/settings_white_24dp.svg';
import LogOutImage from '../public/logout_white_24dp.svg';
import Post from '../components/Post';

const Index: NextPage = () => {
	return (
		<div>
			<h1 className='text-7xl font-bold p-3 mb-5'>Home</h1>
			<div className='mb-5 p-3'>
				<Image src={PersonImage} width={60} height={60} className='bg-gray-800 rounded-full' />
				<textarea placeholder="What's happening?" className='w-full m-1 p-1 bg-transparent border-b-2 outline-none' />
				<button className='bg-blue-600 text-white pl-4 pr-4 pt-2 pb-2 rounded-full font-semibold hover:bg-blue-700'>Tweet</button>
			</div>
			<div className='flex flex-col'>
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
			</div>
		</div>
	)
}

export default Index
