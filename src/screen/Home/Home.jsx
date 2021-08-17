import './Home.css'
import PageProgress from 'react-page-progress'

import React, { useRef } from "react";
import { Link } from "react-router-dom"
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";

import Contact from '../../components/Contact/Contact'
import About from '../../components/About/About'
import Skills from '../../components/Skills/Skills'
import Projects from '../../components/Projects/Projects'

function Home() {
    const FadeUp = batch(Fade(), Move(), Sticky(), ZoomIn());
    // const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const contactCall = useRef(null)
    const top = useRef()
    const handleContact = () => contactCall.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    const handleButton = () => top.current.scrollIntoView({ behavior: 'smooth', block: 'start' })



    return (
        <div className="main-container">
            {/* <PageProgress color={'white'} height={10} /> */}
            <div ref={top} className="nav-bar">
                <Link to="/resume"> <h3>Resume</h3></Link>
                <a onClick={handleContact}><h3>Contact</h3></a>
            </div>
            <ScrollContainer>
                <ScrollPage page={0}>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                        <div className="top">
                            <h1>I AM ASLAN SHAKEN</h1>
                            <hr></hr>
                            <p>an engineer, a creative, an innovator, a leader</p>
                            <div>
                                <a href="https://github.com/aslanshaken" target="_blank"><img className="link-img" src="https://image.flaticon.com/icons/png/512/25/25231.png" /></a>
                                <a href="https://www.linkedin.com/in/aslanshaken/" target="_blank"><img className="link-img" src="https://library.kissclipart.com/20180907/ehe/kissclipart-linkedin-icon-for-resume-clipart-social-media-link-79f9bc808e514401.jpg" /></a>
                                <a href="https://www.instagram.com/a.shaken33/" target="_blank" ><img className="link-img" src="https://www.pngfind.com/pngs/m/2-23339_black-and-white-instagram-logo-instagram-logo-2018.png" /></a>
                            </div>
                            <img className="scroll-down" src="https://static.thenounproject.com/png/54414-200.png" />
                        </div>
                    </Animator>
                </ScrollPage>

                <About />
                <Skills />
                <Projects />

                <ScrollPage page={14}>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                        <span style={{ fontSize: "3em" }}>contact me</span>
                    </Animator>
                </ScrollPage>

            </ScrollContainer >

            <Contact
                contactCall={contactCall}
                handleButton={handleButton}
            />

        </div>
    )
}

export default Home;