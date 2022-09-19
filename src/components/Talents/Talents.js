import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Talent from './Talent';
import './Talents.css'

const Talents = () => {
    const [talents, setTalents] = useState([]);
    useEffect(() => {

        fetch("talents.json")
            .then(res => res.json())
            .then(data => setTalents(data))

    }, [])

    return (
        <div>
            <div className="container talents-container">
                <h1>Browse talent by category </h1>
                <p>Looking for work? <a href="/">Browse jobs</a></p>
            </div>
            <div className='talents-box container'>
                <Link 
              
                >
                    <div className=' row row-cols-1 row-cols-md-4 g-4'>
                        {
                            talents.map(talent => <Talent
                                key={talent.id}
                                talent={talent}
                            ></Talent>)
                        }
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Talents;