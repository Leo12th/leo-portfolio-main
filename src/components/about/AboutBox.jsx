import React from 'react'
import { RiFireLine, RiCupLine, RiGroupLine, RiEarthLine } from 'react-icons/ri';
import { HiLanguage } from 'react-icons/hi2';
const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <RiFireLine className='about__icon' />

                <div>
                    <h3 className="about__title">2</h3>
                    <span className="about__subtitle">Tempo de experiencia</span>
                </div>
            </div>

            <div className="about__box">
                <RiCupLine className='about__icon' />

                <div>
                    <h3 className="about__title">23</h3>
                    <span className="about__subtitle">Repositorios Github</span>
                </div>
            </div>

            <div className="about__box">
                <RiGroupLine className='about__icon' />

                <div>
                    <h3 className="about__title">13</h3>
                    <span className="about__subtitle">Projetos finalizados</span>
                </div>
            </div>

            <div className="about__box">
                <HiLanguage className='about__icon' />

                <div>
                    <h3 className="about__title">4</h3>
                    <span className="about__subtitle">Linguagens conhecidas</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox