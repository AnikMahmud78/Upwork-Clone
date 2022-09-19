import React from 'react';

const Friends = (props) => {
    const { name, username } = props.friend;
    return (


        <div className="col-6">
            <div className="p-3 border bg-light">
                <h5>Name:{name}</h5>
                <button className='btn btn-primary'>{username}</button>
            </div>
        </div>


    );
};

export default Friends;