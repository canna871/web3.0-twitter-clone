import React from 'react'
import Image from 'next/image';
import PersonImage from '../public/person_white_24dp.svg';
import SettingsImage from '../public/settings_white_24dp.svg';
import LogOutImage from '../public/logout_white_24dp.svg';
import IconImage from '../public/emoji_nature_white_24dp.svg';
import Like from '../public/thumb_up_white_24dp.svg';
import Dislike from '../public/thumb_down_white_24dp.svg';

const Post = () => {
	return (
		<div className='border-t p-3 max-h-80 overflow-y-scroll'>
			<Image src={PersonImage} width={55} height={55} className='bg-gray-800 rounded-full' />
			<div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa assumenda excepturi tempore odio repellendus error recusandae et tempora. Recusandae molestias quod vero debitis beatae, earum autem explicabo facere nam excepturi.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa assumenda excepturi tempore odio repellendus error recusandae et tempora. Recusandae molestias quod vero debitis beatae, earum autem explicabo facere nam excepturi.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa assumenda excepturi tempore odio repellendus error recusandae et tempora. Recusandae molestias quod vero debitis beatae, earum autem explicabo facere nam excepturi.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa assumenda excepturi tempore odio repellendus error recusandae et tempora. Recusandae molestias quod vero debitis beatae, earum autem explicabo facere nam excepturi.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa assumenda excepturi tempore odio repellendus error recusandae et tempora. Recusandae molestias quod vero debitis beatae, earum autem explicabo facere nam excepturi.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa assumenda excepturi tempore odio repellendus error recusandae et tempora. Recusandae molestias quod vero debitis beatae, earum autem explicabo facere nam excepturi.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa assumenda excepturi tempore odio repellendus error recusandae et tempora. Recusandae molestias quod vero debitis beatae, earum autem explicabo facere nam excepturi.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa assumenda excepturi tempore odio repellendus error recusandae et tempora. Recusandae molestias quod vero debitis beatae, earum autem explicabo facere nam excepturi.
				</p>
				<div>
					<Image src={Like} width={30} height={25} className='hover:bg-gray-600 transition-all rounded-full hover:cursor-pointer' />
					<Image src={Dislike} width={30} height={25} className='hover:bg-gray-600 transition-all rounded-full hover:cursor-pointer'/>
				</div>
			</div>
		</div>
	)
}

export default Post

