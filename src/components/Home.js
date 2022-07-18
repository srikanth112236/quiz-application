import React from 'react'
import "../styles/Home.css";
import SlideImageOne from '../assets/images/slide-images/slide-1.gif'
import SlideImageTwo from '../assets/images/slide-images/slide-2.svg'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <>
            <div className='slide-1'>
                <div className='container slide'>
                    <div className='slide-logo col-md-6 col-sm-6'>
                        <img src={SlideImageOne} alt='SlideImageOne' />
                    </div>
                    <div className='slide-content col-md-6 col-sm-6'>
                        <h2 className='slide-one-title mb-4' >Online psychological, educational and IQ tests</h2>
                        <p className='title-descp mt-4 mb-4' >Find out the answer to how to become better if you dont know your strengths and weaknesses.</p>
                        <Link to='/quiz-home'  className='slide-btn text-decoration-none' >Test Me !</Link >
                    </div>
                </div>
            </div>
            <div className='slide-2'>
                <div className='container slide'>
                    <div className='slide-logo col-md-6 col-sm-6'>
                        <img src={SlideImageTwo} alt='SlideImageOne' />
                    </div>
                    <div className='slide-content col-md-6 col-sm-6'>
                        <h2 className='slide-one-title mb-4' >Psychological tests</h2>
                        <ul className='slide2-content'>
                            <li>"Who am I?" or "What is happening to me?" Use all means to understand yourself and those around you.</li>
                            <li>Create your psychological portrait of personality.
                            </li>
                            <li> professional tests give an accurate result.</li>
                        </ul>   </div>
                </div>
            </div>
            <div className='slide-3'>
                <div className='container slide'>
                    <div className='slide-logo col-md-6 col-sm-6'>
                        <img src={SlideImageTwo} alt='SlideImageOne' />
                    </div>
                    <div className='slide-content col-md-6 col-sm-6'>
                        <h2 className='slide-one-title mb-4' >Erudition and knowledge tests</h2>
                        <ul className='slide2-content'>
                            <li>School tests will determine your basic knowledge.</li>
                            <li>Riddles and puzzles will test your logic.
                            </li>
                            <li> Intellectual and IQ tests will evaluate the maximum capacity of your brain.</li>
                            <li>Career tests will help you choose a profession properly.</li>
                        <Link to='/quiz-home'  className='slide-btn text-decoration-none' >Test Me !</Link >

                        </ul>   </div>
                </div>
            </div>
            <div className='slide-4'>
            <div className='container slide'>
                <div className='slide-logo col-md-6 col-sm-6'>
                    <img src={SlideImageTwo} alt='SlideImageOne' />
                </div>
                <div className='slide-content col-md-6 col-sm-6'>
                    <h2 className='slide-one-title mb-4' >Tests for entertainment</h2>
                    <ul className='slide2-content'>
                        <li>It helps you have fun.</li>
                        <li>Includen tests on popular films and television shows.
                        </li>
                        <li>Includen tests for girls about love and family.</li>
                        <li>Check the compatibility of the pair.</li>
                    </ul>   </div>
            </div>
            <div className='container slide'>
            <div className='slide-content col-md-6 col-sm-6'>
            <h2 className='slide-one-title mb-4' >Easy registration and even more..</h2>
            <ul className='slide2-content'>
                <li>Test results will remain on your profile</li>
                <li>Riddles and puzzles will test your logic.
                </li>
                <li> Don’t have enough time to complete the test? Your progress will always be saved!</li>
            </ul>   </div>
            <div className='slide-form slide-logo col-md-6 col-sm-6'>
               <div className='form'>
               <h2 className='form-title mb-4'>
               Free Registartion
               </h2>
               <input className='mb-4 inputs' type="text" name="name" placeholder='Enter Name' value="" />
               <input className='mb-2 inputs' type="password" name="name" placeholder='Enter Password' value="" />
               <button className='register'>Registaration</button>
               <ul className='form-icons'>
								<li ><a href="https://facebook.com" target='_blank'><i className="fa-brands fa-facebook"></i></a> </li>
								<li ><a href="https://google.com" target='_blank'><i className="fa-brands fa-google"></i></a> </li>

							</ul>
                            <p className='form-link' >When you register you agree to <span><a href="">the processing of personal data</a></span></p>
               </div>
            </div>
         
        </div>
        <div className='container slide'>
       
        <div className='slide-content col-md-6 col-sm-6'>
       
            <ul className='slide2-content'>
                <li>Our resource contains all the popular psychological tests that will tell you about your abilities, weaknesses, and personality traits. We constantly check and improve the quality of tests so that they meet modern requirements for psychological methods and educational tests. You can test your childs IQ with the pictorial test, or carry out a comprehensive analysis of the drawings of everyone in your family and learn about their hidden fears and problems. Also, with the help of educational tests, you can determine and improve your level of knowledge in various areas.
                It is convenient, so you can take tests on your phone or computer as well as on the app.</li>
                <Link to='/quiz-home'  className='slide-btn text-decoration-none' >Test Me !</Link >

                </ul>
               </div>
               <div className='slide-logo col-md-6 col-sm-6'>
               <img src={SlideImageTwo} alt='SlideImageOne' />
           </div>
    </div>
        </div>
        </>
    )
}

export default Home