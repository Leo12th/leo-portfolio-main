import React from 'react';
import './Home.css';
import Me from './profile.png';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={Me} alt="" className='home__img' width='180' />
                <h1 className="home__name">Leonardo de Sousa Menezes Junior</h1>
                <span className="home__education">Fullstack Developer|| UI/UX Designer</span>
                <br></br>
                <br></br>
                <span className="home__education">C || C# || JavaScript || Angular || Vue3 </span>
                <br></br>
                <span className="home__education"> Node || PostgreSQL|| Java || Kotlin || Flutter || PHP </span>

                <HeaderSocials />

                <a href="#contact" > 
                        <button class="blob-btn">
                            Entre em contato
                            <span class="blob-btn__inner">
                            <span class="blob-btn__blobs">
                                <span class="blob-btn__blob"></span>
                                <span class="blob-btn__blob"></span>
                                <span class="blob-btn__blob"></span>
                                <span class="blob-btn__blob"></span>
                            </span>
                            </span>
                        </button>
                    <br/>
                </a>

                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )
}

export default Home
