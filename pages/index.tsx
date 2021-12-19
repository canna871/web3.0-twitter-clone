import type { NextPage } from 'next'
import Image from 'next/image';
import IconImage from '../public/emoji_nature_white_24dp.svg';
import PersonImage from '../public/person_white_24dp.svg';
import SettingsImage from '../public/settings_white_24dp.svg';
import LogOutImage from '../public/logout_white_24dp.svg';
import Post from '../components/Post';
import { useMoralis } from 'react-moralis';
import Login from '../components/Login';
import { useEffect, useState } from 'react';

const Index: NextPage = () => {
	/// VARIABLE DECLARATION ///
	const { isAuthenticated, user } = useMoralis();
	const [message, setMessage] = useState('');
	const [totalMessagesSentByUser, setTotalMessagesSentByUser] = useState(0);

	/// USE EFFECT ///
	useEffect(() => {
		if (user) {
			// if the user has sent a message before, update the total messages sent by the user
			if (user.get('totalMessagesSent')) {
				setTotalMessagesSentByUser(user.get('totalMessagesSent'));
			} 
			// else, set the total messages sent by the user to 0
			else {
				user.set('totalMessagesSent', 0);
			}
		}
	}, [])

	/// FUNCTION DECLARATION ///
	const tweet = () => {
		let tweets = user?.get('tweets') || [];
		tweets.push({
			like: 0,
			dislike: 0,
			message: message,
			id: totalMessagesSentByUser, // the total messages sent by the user is used as an id for the message since it is unique and will not be changed if the user deletes a message
		});
		// update the user's tweets in the database
		user?.set('tweets', tweets);
		// update the total messages sent by the user in the database
		user?.set('totalMessagesSent', totalMessagesSentByUser + 1);
		// update the total number of messages sent by the user in the state
		setTotalMessagesSentByUser(totalMessagesSentByUser + 1);
		// reset the value of the textarea
		setMessage('');
		user?.save();
	}

	return (
		<div>
			{/* render the homepage if the user is authenticated. Else, render the login page */}
			{isAuthenticated ? 
			<div>
				<h1 className='text-2xl font-bold p-3 mb-1'>Home</h1>
				<div className='mb-5 p-3'>
					<Image src={PersonImage} width={60} height={60} className='bg-gray-800 rounded-full' />
					<textarea placeholder="What's happening?" className='w-full m-1 p-1 bg-transparent border-b-2 outline-none' value={message} onChange={e => setMessage(e.target.value)} />
					<button className='bg-blue-600 text-white pl-4 pr-4 pt-2 pb-2 rounded-full font-semibold hover:bg-blue-700' onClick={tweet}>Tweet</button>
				</div>
				<div className='flex flex-col'>
					<Post message={message} like={13} dislike={10}/>
				</div>
			</div> : <Login />}
		</div>
	)
}

export default Index
