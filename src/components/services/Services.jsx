import React from 'react';
import './Services.css';
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/service-3.svg'

const data = [
    {
        id: 1,
        image: Image1,
       
        title: "Designer UI/UX",
        description:
            "Criação de interfaces atraentes e funcionais para experiências digitais envolventes.",
    },
    {
        id: 2,
        image: Image2,
        title: "Desenvolvedor Fullstack",
        description:
        "Criação de experiências web dinâmicas com Vue3, Angular , React e Node.js."
 },
    
    {
        id: 3,
        image: Image3,
        title: "Gestão de Projetos",
        description:
            "Experiênte em liderar projetos acadêmicos e técnicos, demonstrando habilidades de organização e coordenação.",
    },
];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Serviços</h2>

            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt='' className='services__img' width="80" />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services