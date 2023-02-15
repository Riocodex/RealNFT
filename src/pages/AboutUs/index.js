import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowRight, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
// image import
import {
  bg1, bg2, bg3,
  client01, client02, client03, client04, client05, client06, client07, client08,
  bg01,
  about, aboutUs1, aboutUs2, aboutUs3, aboutUs4, tokenLogo2,iconLogo2
} from "../../components/imageImport";

import StyleSwitcher from '../../components/StyleSwitcher'

const AboutUs = () => {
  const navigate = useNavigate()
  const clientRecord = [
    {
      image: client01,
      name: 'Calvin Carlo',
      position: 'Designer',
    },
    {
      image: client02,
      name: 'Aliana Rosy',
      position: 'Designer',
    },
    {
      image: client08,
      name: 'Micheal Carlo',
      position: 'Designer',
    },
    {
      image: client03,
      name: 'Sofia Razaq',
      position: 'Designer',
    },
  ]

  const blogRecord = [
    {
      image: bg1,
      title: 'Mindfulness Activities for Kids & Toddlers with NFT',
      createdBy: '@callyjoe',
      type: 'Arts',
    },
    {
      image: bg2,
      title: 'Save Thousands Of Lives Through This NFT',
      createdBy: '@kristyhoney',
      type: 'Illustration',
    },
    {
      image: bg3,
      title: 'A place where technology meets craftsmanship',
      createdBy: '@pandaone',
      type: 'Music',
    },
  ]

  return (
    <>
      <Navbar />
      {/* Start Home */}
      <section
        className="bg-half-170 d-table w-100"
        style={{ background: `url(${aboutUs3}) bottom` }}
      >
        <div className="bg-overlay bg-gradient-overlay-2"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="title-heading text-center">
                <h5 className="heading fw-semibold sub-heading text-white title-dark">
                  Meet Rethestate
                </h5>
                <p className="text-white-50 para-desc mx-auto mb-0">
                Welcome to RETHESTATE, a real estate-based blockchain project that aims to revolutionize the way we buy, sell, and manage real estate assets.
                </p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}

          <div className="position-middle-bottom">
            <nav aria-label="breadcrumb" className="d-block">
              <ul
                className="breadcrumb breadcrumb-muted mb-0 p-0"
                style={{ backgroundColor: 'transparent' }}
              >
                <li className="breadcrumb-item">
                  <a
                    href="/"
                    onClick={e => {
                      e.preventDefault()
                      navigate('/')
                    }}
                  >
                    Rethestate
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  About us
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      {/* End Home */}

      {/* Start Section */}
      <section className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6">
              <div className="about-image position-relative">
                <img src={iconLogo2} className="img-fluid rounded shadow" alt="" />
              </div>
            </div>
            {/*end col*/}

            <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="section-title ms-lg-5">
                <h6 className="text-primary fw-normal">
                  Creative Vision & Mission
                </h6>
                <h4 className="title mb-4">
                  We  buy, sell, and manage <br />  real estate assets. 
                </h4>
                <p className="text-muted">
                Our goal is to create a more efficient, transparent, and secure real estate market that is accessible to everyone, regardless of location or background. We do this by using smart contracts on the Ethereum network to digitize real estate assets and automate many of the manual processes that are still done today.
                </p>
                <p className="text-muted mb-4">
                The benefits of this system are numerous, including reduced costs and increased liquidity for what has traditionally been a relatively illiquid asset. By simplifying the process and eliminating waste, we believe that we can create a truly decentralized and barrier-free real estate marketplace that is accessible to all types of end users.
                </p>
                <p className="text-muted">
                However, we know that this is a massive undertaking that requires the support and participation of property owners around the world. That’s why we have designed our platform to be governed by property owners, ensuring that their interests are always at the forefront of our decision-making.
                </p>
                <p className="text-muted mb-4">
                We believe that the adoption of cryptographic blockchain technology by property owners worldwide is the key to unlocking the full potential of the real estate market and creating a more equitable and prosperous future for all.
                </p>
                <p className="text-muted mb-0">
                We believe that the adoption of cryptographic blockchain technology by property owners worldwide is the key to unlocking the full potential of the real estate market and creating a more equitable and prosperous future for all.
                </p>


                <div className="mt-4 pt-2">
                  <a
                    href="https://rethestate.com/"
                    onClick={
                      e => e.preventDefault()
                      // navigate('https://rethestate.com/</div>')
                    }
                    className="btn btn-primary rounded-md"
                   
                  >
                    Read More <i className="uil uil-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}

        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="row">
                <div className="col-md-4 col-6">
                  <div className="counter-box position-relative text-center">
                    <h4 className="mb-0 display-5 fw-bold title-dark mt-2">
                      $
                      <span className="counter-value" data-target="40">
                        3
                      </span>
                      M
                    </h4>
                    <span className="counter-head fw-semibold text-muted title-dark">
                      Trading volume
                    </span>
                  </div>
                  {/*end counter box*/}
                </div>
                {/*end col*/}

                <div className="col-md-4 col-6">
                  <div className="counter-box position-relative text-center">
                    <h4 className="mb-0 display-5 fw-bold title-dark mt-2">
                      <span className="counter-value" data-target="200">
                        1
                      </span>
                    </h4>
                    <span className="counter-head fw-semibold text-muted title-dark">
                      NFTs created
                    </span>
                  </div>
                  {/*end counter box*/}
                </div>
                {/*end col*/}

                <div className="col-md-4 col-6">
                  <div className="counter-box position-relative text-center">
                    <h4 className="mb-0 display-5 fw-bold title-dark mt-2">
                      <span className="counter-value" data-target="234">
                        100
                      </span>
                      K
                    </h4>
                    <span className="counter-head fw-semibold text-muted title-dark">
                      Total users
                    </span>
                  </div>
                  {/*end counter box*/}
                </div>
                {/*end col*/}
              </div>
              {/*end row*/}
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}

        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-4">Our Team</h4>
                <p className="text-muted para-desc mb-0 mx-auto">
                  We are a huge marketp qace dedicated to connecting great
                  artists of all Rethestate with their fans and unique token
                  collectors!
                </p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}

          <div className="row">
            {clientRecord?.map(client => (
              <div
                className="col-lg-3 col-md-4 col-12 mt-4 pt-2"
                key={client?.name}
              >
                <div className="card team team-primary text-center">
                  <div className="card-img team-image d-inline-block mx-auto rounded-pill shadow avatar avatar-ex-large overflow-hidden">
                    <img src={client?.image} className="img-fluid" alt="" />
                    <div className="card-overlay avatar avatar-ex-large rounded-pill"></div>

                    <ul className="list-unstyled team-social mb-0">
                      <li className="list-inline-item">
                        <a href="" className="btn btn-sm btn-pills btn-icon">
                          <FiFacebook className="fea icon-sm fea-social" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="" className="btn btn-sm btn-pills btn-icon">
                          <FiInstagram className="fea icon-sm fea-social" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="" className="btn btn-sm btn-pills btn-icon">
                          <FiTwitter className="fea icon-sm fea-social" />
                        </a>
                      </li>
                    </ul>
                    {/*end icon*/}
                  </div>

                  <div className="content mt-3">
                    <a href="" className="text-dark h6 mb-0 title d-block">
                      {client?.name}
                    </a>
                    <small className="text-muted mb-0 fw-normal">
                      {client?.position}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}

       
      </section>
      {/*end section*/}
      {/* End Section */}

      {/* Footer */}
      <Footer />

      {/* Style switcher  */}
      <StyleSwitcher />
    </>
  )
}

export default AboutUs
