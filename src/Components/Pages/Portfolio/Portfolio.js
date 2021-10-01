

import React, { useState } from 'react'
import portfolio from '../../images/person.jpg'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

import aboutimage from '../../images/about.png'
import abcdimge from '../../images/abad.png'
import apriimage from '../../images/apri.png'
import nalieimage from '../../images/nalie.png'
import v1image from '../../images/v1.png'
import baneimage from '../../images/bane.png'
import capimage from '../../images/cap.png'
import pauseimage from '../../images/pause.png'
import portfolioimage from '../../images/Portfolio.png'
import client from '../../images/1.png'
import client_2 from '../../images/22.png'
import dotsimage from '../../images/dots.jpg'

// import './App.css'
const Portfolio = () => {

    const [count, setcount] = useState('0')
    const [count1, setcount1] = useState('0')
    const [data, setdata] = useState([
        {
            id: 0,
            title: 'Web Design ',
            img: abcdimge,
            img2: capimage,
            des: 'Get awesome design services',
            link: 'from inkyy.com '

        },
        {
            id: 1,
            title: 'Web Design ',
            img: apriimage,
            img2: capimage,
            des: 'Get awesome design services',
            link: 'from inkyy.com '


        },
        {
            id: 2,
            title: 'Web Design ',
            img: nalieimage,
            img2: capimage,
            des: 'Get awesome design services',
            link: 'from inkyy.com '

        },
        {
            id: 3,
            title: 'Web Design ',
            img: v1image,
            img2: capimage,
            des: 'Get awesome design services',
            link: 'from inkyy.com '

        },
        {
            id: 4,
            title: 'Web Design ',
            img: baneimage,
            img2: capimage,
            des: 'Get awesome design services',
            link: 'from inkyy.com '

        },
        {
            id: 5,
            title: 'Web Design ',
            img: apriimage,
            img2: capimage,
            des: 'Get awesome design services',
            link: 'from inkyy.com '

        },
    ])

    return (
        <div className="home_container">


            <div className="header">
                <div className="nav">
                    <div className="logo">
                        <img className="logo_img" src={portfolioimage} />
                    </div>
                    <div>
                        <img src={dotsimage} className="text_align" />
                    </div>
                    <div className="pageName">
                        <ul>
                            <li><a className="btnnn">About</a></li>
                            <li><a className="btnnn">Portfolio</a></li>
                            <li><a className="btnnn">Contact</a></li>
                            <li><a className="satrt_btn">Get Started</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="home_main">
                <div className="home_left">
                    <p className="texthire">Hello, I am</p>
                    <h1 className="name_home">Mark Reccardo</h1>
                    <p className="paragraphfont">A young <span className="ui_color">UI/UX</span> designer with crazy for mobile & Web design.<br /><br />Find Me on</p>
                    <div>
                        <FaInstagramSquare className="icon_style" />
                        <FaFacebook className="font_size" />
                        <FaSkype className="font_size" />
                        <FaLinkedinIn className="font_size" />
                        <FaGoogle className="font_size" />
                    </div>
                    <div className="home_btn">
                        <button className="hire_btn">Hire Me</button>
                        <button className="portfolio_btn">Portfolio</button>
                    </div>
                </div>
                <div >
                    <img className="image_right" src={portfolio} />
                </div>
            </div>
            <div className="home_about">
                <div className="about_main">
                    <div className="home_left">
                        <div className="about_div">
                            <h1 className="text_div_about">About me</h1>
                            {/* <p style={{ color: 'red' }}>
                                __________________
                            </p> */}
                        </div>
                        <p className="about_div_des">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        <p className="about_div_des">   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <div className="home_btn">

                            <button className="download_cv_button">Download CV</button>
                        </div>
                    </div>
                    <div >
                        <div className="image_about">
                            <img className="image_style" src={aboutimage} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="home_about1">
                <div className="about_main">
                    <div className="home_left1">
                        <div className="about_div">
                            <h1 className="portfolio_text">Portfolio</h1>
                            <div className="about_it">

                            </div>
                        </div>
                        <div style={{ display: 'flex', }} >
                            <div className="backicon">
                                <FaAngleLeft />
                            </div>
                            <div className="fronticon">

                                <FaAngleRight />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="about_main">
                    <div className="portfolio_des">
                        <h4 onClick={() => setcount(0)} className="about_portfolio">
                            All
                        </h4>

                        <h4 onClick={() => setcount(1)} className="about_portfolioo">
                            Logo
                        </h4>
                        <h4 onClick={() => setcount(2)} className="about_portfolioo">
                            Websites
                        </h4>
                        <h4 onClick={() => setcount(3)} className="about_portfolioo">
                            MobileApps
                        </h4>
                    </div>
                </div>
                <div className="about_main_div2">
                    {count == 0 ?
                        <div className="image_div2">
                            {data && data.slice(0, 3).map((item, index) => {
                                return (

                                    <div key={index} className="img_style">
                                        <img src={item.img} className="list_img" />
                                    </div>

                                )
                            })
                            }
                        </div> : count == 1 ?
                            <div className="image_div3" >
                                {data && data.slice(3, 6).map((item, index) => {
                                    return (
                                        <div key={index} className="img_style">
                                            <img src={item.img} className="list_img" />
                                        </div>
                                    )
                                })
                                }

                            </div> : count == 2 ? <div className="image_div2">
                                {data && data.slice(0, 3).map((item, index) => {
                                    return (
                                        <div key={index} className="img_style">
                                            <img src={item.img} className="list_img" />
                                        </div>
                                    )
                                })
                                }
                            </div> : count == 3 ? <div className="image_div3" >
                                {data && data.slice(3, 6).map((item, index) => {
                                    return (
                                        <div key={index} className="img_style">
                                            <img src={item.img} className="list_img" />
                                        </div>
                                    )
                                })
                                }
                            </div> : null}
                </div>





            </div>


            <div className="home_capabilities">

                <div className="person_capability">
                    <h1 className="capabilities">
                        My Capabilities
                    </h1>
                    {/* <h1 style={{ background: 'red', justifyContent: 'center', alignItems: 'center', alignContent: 'center', textAlign: 'center' }}>

                    </h1> */}

                    <p className="person">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et t enim ad minim veniam, quis nostrud exercitation.
                    </p>
                </div>

                <div className="about_capability">

                    <div className="capability_img">
                        {data && data.slice(0, 3).map((item, index) => {
                            return (

                                <div key={index} className="card_style">
                                    <div className="card_styling">
                                        <img src={item.img2} className="styling_img" />
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <h3 className="style_color">
                                            {item.title}
                                        </h3>

                                        <p className="style_color">
                                            {item.des}
                                        </p>
                                        <p className="style_color">
                                            {item.link}
                                        </p>
                                    </div>
                                </div>

                            )
                        })
                        }
                    </div>
                </div>

                <div className="about_capability">

                    <div className="capability_img">
                        {data && data.slice(0, 3).map((item, index) => {
                            return (

                                <div key={index} className="div_height">
                                    <div className="card_styling"> <img src={item.img2} className="styling_img" /></div>
                                    <div style={{ textAlign: 'center' }}>
                                        <h3 className="style_color">
                                            {item.title}
                                        </h3>

                                        <p className="style_color">
                                            {item.des}
                                        </p>
                                        <p className="style_color">
                                            {item.link}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>

            <div className="client_about">

                <div className="client_capabilities">

                    <div className="person_capability">
                        <h1 className="client_text">
                            What My Client Says
                        </h1>


                        <p className="person">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et t enim ad minim veniam, quis nostrud exercitation.                        </p>
                    </div>

                    <div style={{ display: 'flex' }}>

                        <div className="client_leftdiv">
                            <div className="cli_pic">
                                <img onClick={() => setcount1(0)} className="cli_img" src={client} />
                                <img onClick={() => setcount1(1)} className="cli_img2" src={client_2} />
                                <img onClick={() => setcount1(2)} className="cli_img3" src={client_2} />
                            </div>
                            <div className="cli_pic">
                                <img onClick={() => setcount1(3)} className="cli_img3" src={client_2} />
                                <img onClick={() => setcount1(4)} className="cli_img2" src={client_2} />
                                <img onClick={() => setcount1(5)} className="cli_img" src={client} />
                            </div>
                        </div>

                        <div className="client_righttdiv">
                            <img src={pauseimage} className="client_portion" />
                            {count1 == 0 ? <p className="text_description">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt is the most explicabo.
                            </p> : count1 == 1 ? <p className="text_description">
                                Tip: The word cascading means that a style applied to a parent element will also apply to all children elements within the parent. So, if you set the color of the body text to "blue", all headings, paragraphs, and other text elements within the body will also get the same color (unless you specify something else)!
                            </p> : count1 == 2 ? <p className="text_description">
                                The browser will calculate and select a width for the specified element. External style sheets can be referenced with a full URL or with a path relative to the current web page.
                            </p> : count1 == 3 ? <p className="text_description">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt is the most explicabo.
                            </p> : count1 == 4 ? <p className="text_description">
                                Tip: The word cascading means that a style applied to a parent element will also apply to all children elements within the parent. So, if you set the color of the body text to "blue", all headings, paragraphs, and other text elements within the body will also get the same color (unless you specify something else)!
                            </p> : count1 == 5 ? <p className="text_description">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt is the most explicabo.
                            </p> : 'No Description'}
                            <div className="client_div">
                                <img src={pauseimage} className="client_portion1" />
                            </div>
                            <p className="text_description">
                                - Sara Smith

                            </p>
                            <p className="textclient">
                                CEO ABC Company
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="home_form">

                <div className="person_capability">
                    <h1 className="capabilities">
                        Let’s Make Something
                    </h1>
                    <h1 className="capabilities">
                        Great Together
                    </h1>
                    {/* <h1 style={{ background: 'red', justifyContent: 'center', alignItems: 'center', alignContent: 'center', textAlign: 'center' }}>

    </h1> */}

                    <p className="person">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                        ut labore et t enim ad minim veniam, quis nostrud exercitation                    </p>
                </div>
                <div className="from">
                    <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                        <input className="input" placeholder="Enter name"></input>
                        <input className="input" placeholder="Enter password"></input>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center' }}>
                        <input className="input" placeholder="Phone"></input>
                        <input className="input" placeholder="Budget"></input>
                        <input className="inputmessage" placeholder="Phone"></input>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>

                    <button className="hire_frombtn">
                        hire me
                    </button>
                </div>
            </div>
            <div className="portfolio_about">

                <div className="portfolio_capabilities">

                    <div className="person_capability">
                        <h1 className="portfolio">
                            Portfolio
                        </h1>
                        <div className="portflio_alignment">
                            <p className="footer">
                                About  |  Portfolio  |  Contact
                            </p>
                        </div>
                        <p className="footer">
                            NY / +1 123456 7890 / hello@graphics.studio.com
                        </p>
                        <div style={{ marginTop: '20px' }}>
                            <FaInstagramSquare className="icon_style" />
                            <FaFacebook className="font_size" />
                            <FaSkype className="font_size" />
                            <FaLinkedinIn className="font_size" />
                            <FaGoogle className="font_size" />
                        </div>
                        <p className="copyrights">
                            Copyright © 2019 Graphics Studio | All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Portfolio