import React from 'react';
import './Banner.css'
import img from './img/globe@1x.jpg'
import img2 from './img/Screenshot 2022-09-15 195904.png'


const Banner = () => {
    return (
        <div className='banner-container container '>
            <div >
                <h1 className='mx-auto'>How work <br /> should work</h1>
                <h5> Forget the old rules. You can have the best people. <br /> Right now. Right here.</h5>
                <div className='d-flex mt-4'>
                    <button type="button" class="custom-btn1  text-white">Find Talent</button>
                    <button type="button" class=" custom-btn2 ms-3">Find Work</button>
                </div>
                <div className='trusted-text '>
                    <p>Trusted by</p>
                    <img src={img2} alt="" />
                </div>
            </div>
            <div >
                <img className='img-fluid mx-auto' src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner;