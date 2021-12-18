import React from 'react'
import Image from 'next/image';
import IconImage from '../public/emoji_nature_white_24dp.svg';
import PersonImage from '../public/person_white_24dp.svg';
import SettingsImage from '../public/settings_white_24dp.svg';
import LogOutImage from '../public/logout_white_24dp.svg';

const Settings = () => {
	return (
		<div>
			<h1 className='text-2xl font-bold p-3 mb-1'>Settings</h1>
			<div className='mb-5 p-3'>
				<Image src={PersonImage} width={60} height={60} className='bg-gray-800 rounded-full' />
				<div className='flex items-center'>
					<h1>username: </h1>
					<input type='text' value='username' className='w-full m-1 p-1 bg-transparent border-b-2 outline-none' />
				</div>
				<div className='flex items-center'>
					<h1>password: </h1>
					<input type='text' value='your password' className='w-full m-1 p-1 bg-transparent border-b-2 outline-none' />
				</div>
				<button className='bg-blue-600 text-white pl-4 pr-4 pt-2 pb-2 rounded-full font-semibold hover:bg-blue-700'>Save</button>
			</div>
		</div>
	)
}

export default Settings
