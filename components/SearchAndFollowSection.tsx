import React from 'react'
import IconImage from '../public/emoji_nature_white_24dp.svg';
import PersonImage from '../public/person_white_24dp.svg';
import SettingsImage from '../public/settings_white_24dp.svg';
import LogOutImage from '../public/logout_white_24dp.svg';
import Image from 'next/image';

const SearchAndFollowSection = () => {
	return (
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
	)
}

export default SearchAndFollowSection
