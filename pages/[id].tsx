import React from 'react'
import Image from 'next/image';
import IconImage from '../public/emoji_nature_white_24dp.svg';
import PersonImage from '../public/person_white_24dp.svg';
import SettingsImage from '../public/settings_white_24dp.svg';
import LogOutImage from '../public/logout_white_24dp.svg';
import Post from '../components/Post';

const Profile = () => {
	return (
		<div>
			<h1 className='text-2xl font-bold p-3 mb-1'>Profile</h1>
			<div className='mb-5 p-3 flex'>
				<Image src={PersonImage} width={60} height={60} className='bg-gray-800 rounded-full' />
				<div className='ml-3'>
					<h1 className='text-2xl font-medium'>Username</h1>
					<p className='font-light'>XXX Tweets, XXX Followers</p>
				</div>
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

export default Profile
