import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import IconImage from '../public/emoji_nature_white_24dp.svg';
import PersonImage from '../public/person_white_24dp.svg';
import SettingsImage from '../public/settings_white_24dp.svg';
import LogOutImage from '../public/logout_white_24dp.svg';
import Post from '../components/Post';
import { useRouter } from 'next/router';
import { useMoralis, useMoralisQuery } from 'react-moralis';

const Profile = () => {
	/// VARIABLE DECLARATIONS ///
	const router = useRouter();
	const { id } = router.query;
	const [tweets, setTweets] = useState([]);
	const [profileIsUser, setProfileIsUser] = useState(false);
	const [userName, setUserName] = useState('user not found');
	const [userTweetsCount, setUserTweetsCount] = useState(0);
	const [userFollowersCount, setUserFollowersCount] = useState(0);
	const { user } = useMoralis();
	const { data } = useMoralisQuery(`User`);

	/// USE EFFECT ///
	useEffect(() => {
		// find the user by the id in the url, and update all the display information
		data.forEach(u => { 
			if (u.get('ethAddress') === id) {
				setTweets(u.get('tweets'));
				setUserName(u.get('username'));
				setUserTweetsCount(u.get('tweets')?.length);
				setUserFollowersCount(u.get('followers')?.length);
			}
		});

		// check if the user referred in the url is the current user
		setProfileIsUser(user?.get('ethAddress') === id);
	})

	/// FUNCTIONS DECLARATION ///
	const deleteTweet = (id: number) => {
		// find the tweet by the id and delete it
		let newTweets = user?.get('tweets') || [];
		newTweets = newTweets.filter((t: any) => t.id !== id);
		user?.set('tweets', newTweets);
		user?.save();
		setTweets(newTweets);
	}

	return (
		<div>
			<h1 className='text-2xl font-bold p-3 mb-1'>Profile</h1>
			<div className='mb-5 p-3 flex'>
				<Image src={PersonImage} width={60} height={60} className='bg-gray-800 rounded-full' />
				<div className='ml-3'>
					<h1 className='text-2xl font-medium'>{userName}</h1>
					<p className='font-light'>{userTweetsCount} Tweets, {userFollowersCount} Followers</p>
				</div>
			</div>
			<div className='flex flex-col'>
				{ 
				tweets !== undefined ?
				tweets.map((tweet: any, index: any) => 
					<div>
						<Post key={index} message={tweet.message} like={tweet.like} dislike={tweet.dislike} />	
						{profileIsUser ? <button className='bg-red-600 text-white mb-1 ml-2 mr-2 p-2 rounded-full font-semibold hover:bg-red-700' onClick={() => deleteTweet(tweet.id)}>Delete</button> : null}
					</div>
				) :
				null
				}
			</div>
		</div>
	)
}

export default Profile
