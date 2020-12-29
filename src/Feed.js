import React, {useState, useEffect} from 'react'
import "./Feed.css"
import StoryReel from "./StoryReel"
import MessageSender from "./MessageSender"
import Post from "./Post"
import db from "./firebase"

function Feed() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
    db.collection('posts')
    .orderBy('timestamp', 'desc')
    .onSnapshot((snapshot) => 
    setPosts(snapshot.docs.map((doc) =>({ id: doc.id, data: doc.data() })))
        )
    }, [])

    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender />


            {posts.map((posts) => (
                <Post 
                key={posts.id}
                profilePic={posts.data.profilePic}
                message={posts.data.message}
                timestamp={posts.data.timestamp}
                username={posts.data.username}
                image={posts.data.image}
                />
            ))}
        </div>
    )
}

export default Feed
