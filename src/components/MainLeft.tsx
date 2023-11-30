import React from 'react';
import { Element } from 'react-scroll';
import photo from '../assets/image/cv.png';
import html from '../assets/icon/html.svg'
import css from '../assets/icon/css.svg'
import js from '../assets/icon/js.svg'
import ts from '../assets/icon/ts.svg'
import webpack from '../assets/icon/webpack.svg'
import git from '../assets/icon/git.svg'
import rus from '../assets/icon/rus.svg'
import eng from '../assets/icon/eng.svg'
import mail from '../assets/icon/mail.svg'
import phone from '../assets/icon/tel.svg'
import github from '../assets/icon/github.svg'
import '../styles/MainLeft.scss'

const MainLeft = () => {
    return (
        <div className='main__left'>
            <section className='basic_information'>
                <div className='basic_information__container'>
                    <div className='basic_information__container_photo'>
                        <img src={photo} alt='My_Photo'/>
                    </div>
                    <div className='basic_information__container_title__wrap'>
                        <h1 className='title'>Vasili Skorobogaty</h1>
                    </div>
                    <Element name="skills" className='basic_information__container_skills'>
                        <h2 className='basic_information__container_skills-title title-main'>skills</h2>
                        <ul className='basic_information__container_skills_contain'>
                            <li className='skills' id='html'>
                                <img className='skills_img' src={html} alt='html'/>
                            </li>
                            <li className='skills' id='css'>
                                <img className='skills_img' src={css} alt='css'/>
                            </li>
                            <li className='skills' id='js'>
                                <img className='skills_img' src={js} alt='js'/>
                            </li>
                            <li className='skills' id='ts'>
                                <img className='skills_img' src={ts} alt='ts'/>
                            </li>
                            <li className='skills' id='webpack'>
                                <img className='skills_img' src={webpack} alt='webpack'/>
                            </li>
                            <li className='skills' id='git'>
                                <img className='skills_img' src={git} alt='git'/>
                            </li>
                        </ul>
                    </Element>
                    <Element name='education' className='basic_information__container_education'>
                        <h2 className='basic_information__container_education-title title-main'>
                            education
                        </h2>
                        <span className='basic_information__container_education-text'>
                            Minsk State College of Electronics, "Computer Operator", 2017-2020
                        </span>
                    </Element>
                    <Element name='courses' className='basic_information__container_courses'>
                        <h2 className='basic_information__container_courses-title title-main'>
                            courses
                        </h2>
                            <div className='basic_information__container_courses-contain'>
                                <span className='basic_information__container_courses-text'>
                                    JS/FE Pre-School 2022Q2 (
                                    <a href='https://rs.school/'>
                                        Rs-school
                                    </a>
                                    )
                                </span>
                                <span className='basic_information__container_courses-text'>
                                    JavaScript/Front-end 2022Q3 (
                                     <a href='https://rs.school/'>
                                        Rs-school
                                     </a>
                                    )
                                </span>
                                <span className='basic_information__container_courses-text'>
                                    React 2023 Q1 (
                                    <a href='https://rs.school/'>
                                        Rs-school
                                     </a>
                                    )
                                </span>
                                <span className='basic_information__container_courses-text'>
                                    Software Testing Basics (
                                    <a href='https://qa-academy.lv/ob-akademii/'>
                                        QA Academy
                                    </a>
                                    )
                                </span>
                            </div>
                    </Element>
                    <Element name='language' className='basic_information__container language'>
                        <div className='basic_information__container_language' >
                            <h2 className='basic_information__container_language-title title-main'>
                                language
                            </h2>
                        </div>
                        <div className='basic_information__container_language-contain'>
                              <img className='basic_information__container_language-contain_img'
                                   src={rus}
                                   alt='rus'
                              />
                            <span className='basic_information__container_language-contain_text'>
                                Native
                            </span>
                        </div>
                        <div className='basic_information__container_language-contain'>
                            <img className='basic_information__container_language-contain_img'
                                 src={eng}
                                 alt='eng'
                            />
                            <span className='basic_information__container_language-contain_text'>
                                Elementary / Pre-Intermediate
                            </span>
                        </div>
                    </Element>
                    <Element name='contacts' className='basic_information__container contact'>
                        <div className='basic_information__container_contact' >
                            <h2 className='basic_information__container_contact title-main'>
                                contacts
                            </h2>
                        </div>
                        <div className='basic_information__container_contact-contain'>
                            <a  className='basic_information__container_contact-contain_link'
                                href='mailto:dzho.ker.700@gmail.com'
                            >
                                <img className='basic_information__container_contact-contain_img'
                                     src={mail}
                                     alt='mail'
                                />
                                <span className='basic_information__container_contact-contain_text'>
                                    dzho.ker.700@gmail.com
                                </span>
                            </a>
                        </div>
                        <div className='basic_information__container_contact-contain'>
                            <a  className='basic_information__container_contact-contain_link'
                                href='https://t.me/Vasya576'
                            >
                            <img className='basic_information__container_contact-contain_img'
                                 src={phone}
                                 alt='phone'
                            />
                            <span className='basic_information__container_contact-contain_text'>
                                @Vasya576
                            </span>
                            </a>
                        </div>
                        <div className='basic_information__container_contact-contain'>
                            <a  className='basic_information__container_contact-contain_link'
                                href='https://github.com/VasaSkor'
                            >
                                <img className='basic_information__container_contact-contain_img'
                                     src={github}
                                     alt='github'
                                />
                                <span className='basic_information__container_contact-contain_text'>
                                    VasaSkor
                                </span>
                            </a>
                        </div>
                    </Element>
                </div>
            </section>
        </div>
    );
};

export default MainLeft;