import React from 'react';
import { FaGithub, FaLinkedinIn,  FaInstagram} from 'react-icons/fa';

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://www.github.com/Leo12th' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href='https://hashnode.com/@Leojr.zip' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaInstagram/>
            </a>


            <a href='https://www.linkedin.com/in/leonardo-junior-021432176' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

        </div>
    );
};

export default HeaderSocials;
