import React from 'react'
import Image from 'next/image';
import PersonImage from '../public/person_white_24dp.svg';
import SettingsImage from '../public/settings_white_24dp.svg';
import LogOutImage from '../public/logout_white_24dp.svg';
import IconImage from '../public/emoji_nature_white_24dp.svg';
import Like from '../public/thumb_up_white_24dp.svg';
import Dislike from '../public/thumb_down_white_24dp.svg';

const Post = ({message, like, dislike}: any) => {
	return (
		<div className='border-t p-3 max-h-80 overflow-y-scroll'>
			<Image src={PersonImage} width={55} height={55} className='bg-gray-800 rounded-full' />
			<div>
				<pre>{message}</pre>
				<div className='flex'>
					<Image src={Like} width={30} height={25} className='hover:bg-gray-600 transition-all rounded-full hover:cursor-pointer' />
					<p>{like}</p>
					<Image src={Dislike} width={30} height={25} className='hover:bg-gray-600 transition-all rounded-full hover:cursor-pointer'/>
					<p>{dislike}</p>
				</div>
			</div>
		</div>
	)
}

export default Post

