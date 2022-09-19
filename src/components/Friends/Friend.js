import React, { useEffect, useState } from 'react';
import Friends from '../Friend/Friends';

const Friend = () => {
    const [friends, setFriends] = useState([])
    console.log(friends);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))

    }, [])

    return (
        <div>
            <h1 className='text-center text-Danger'>Totall :{friends.length}</h1>
            <div className="container">
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                        {
                            friends.map(friend => <Friends
                                key={friend.id}
                                friend={friend}
                            ></Friends>)
                        }
                    </div>
                </div>
                </div>
    );
};

export default Friend;