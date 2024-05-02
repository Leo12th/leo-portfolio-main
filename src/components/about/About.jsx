import React from 'react';
import './About.css';
import Image from '../../components/home/profile.png';
import AboutBox from './AboutBox';

import Curriculo from '../../assets/curriculo.pdf'; // Importe o arquivo PDF local

const About = () => {
    const downloadCurriculo = () => {
        const link = document.createElement('a');
        link.href = Curriculo;
        link.setAttribute('download', 'curriculo.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <section className="about container section" id="about">
            <h2 className="section__title">Sobre</h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            
                                Prazer, me chamo Leonardo, estudante de Sistemas de Informação na Universidade Federal de Uberlândia.
                                Apaixonado por tecnologia desde cedo, sou um desenvolvedor Fullstack 
                                além de ter proficiência em inglês, e estar atualmente estudando francês e alemão. 
                                Estou sempre buscando aprender e aprimorar minhas habilidades técnicas para contribuir em projetos de desenvolvimento de software.
                                <br></br>
                                <br></br>
                                Principais linguagens:
                            </p>
                            
                        <ul className="about__list">
                            <li>HTML & CSS</li>
                            <li>JavaScript</li>
                            <li>C & C#</li>
                            <li>Bootstrap & Tailwind CSS</li>
                            <li>Java</li>
                            <li>Angular</li>
                            <li>React</li>
                            <li>Vue3</li>
                            <li>PostgreSQL</li>
                            <li>PHP</li>
                            <li>Flutter</li>
                            <li>Node</li>

                        </ul>
                        <button className="blob-btn" onClick={downloadCurriculo}>
                            Download curriculo
                            <span className="blob-btn__inner">
                                <span className="blob-btn__blobs">
                                    <span className="blob-btn__blob"></span>
                                    <span className="blob-btn__blob"></span>
                                    <span className="blob-btn__blob"></span>
                                    <span className="blob-btn__blob"></span>
                                </span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {}
            <AboutBox />
        </section>
    );
}

export default About;
