import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowRight, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
// image import
import {
  bg1, bg2, bg3,
  client01, client02, client03, client04, client05, client06, client07, client08,rio,steven,
  digimintlogo,
  digimintlogo1, aboutUs1, aboutUs2, aboutUs3, aboutUs4, tokenLogo2,iconLogo2
} from "../../components/imageImport";

import StyleSwitcher from '../../components/StyleSwitcher'

const AboutUs = () => {
  const navigate = useNavigate()
  const clientRecord = [
    {
      image: steven,
      name: 'Steven Camilleri',
      position: 'Mentor, SuperVisor',
    },
    {
      image: rio,
      name: 'Onwuka Rosario',
      position: 'Software Developer',
    },
    
  ]

 

  return (
    <>
      
      {/* Start Home */}
      <section
        className="bg-half-170 d-table w-100"
        style={{ background: `url(${bg1}) bottom` }}
      >
        <div className="bg-overlay bg-gradient-overlay-2"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="title-heading text-center">
                <h5 className="heading fw-semibold sub-heading text-white title-dark">
                  Meet RealNFT
                </h5>
                <p className="text-white-50 para-desc mx-auto mb-0">
                Welcome to RealNFT, a real estate-based blockchain project that aims to revolutionize the way we buy, sell, and manage real estate assets.
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
                    DIGIMINT
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
                <img src={digimintlogo} className="img-fluid rounded shadow" alt="" />
              </div>
            </div>
            {/*end col*/}

            <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="section-title ms-lg-5">
                <h6 className="text-primary fw-normal">
                  Creative Vision & Mission
                </h6>
                <h4 className="title mb-4">
                  We  buy, sell, and manage <br />  digital art assets. 
                </h4>
                <p className="text-muted">
                Welcome to Digimint, a pioneering force in the world of digital art and Non-Fungible Tokens (NFTs). Founded on the principles of innovation, authenticity, and a passion for the evolving landscape of digital creativity, Digimint stands at the forefront of the NFT market.
                </p>
                <p className="text-muted mb-4">
                Our Mission
At Digimint, our mission is to redefine the art market by providing a seamless platform for the creation, discovery, and exchange of digital art through NFTs. We believe in empowering artists and collectors alike, bridging the gap between the traditional and the digital realms.
                </p>
                <p className="text-muted">
                Trusted Marketplace
As a trusted marketplace, Digimint facilitates secure transactions for both buyers and sellers. Our cutting-edge technology ensures transparency and authenticity, safeguarding the integrity of every NFT transaction on our platform.
                </p>
                <p className="text-muted mb-4">
                Supporting Artists
Digimint is dedicated to supporting artists in their digital journey. We provide a platform for artists to showcase their work, connect with a global audience, and monetize their creations in the digital realm. Our commitment extends beyond transactions; we aim to foster a community where artists thrive.


                </p>
                <p className="text-muted mb-0">
                Join Us in Shaping the Future of Digital Art
Whether you are an artist looking to share your creations, a collector seeking unique and valuable digital assets, or a supporter of the arts, Digimint welcomes you to join us in shaping the future of digital art and NFTs.
                </p>


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
       

        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-4">Our Team</h4>
                <p className="text-muted para-desc mb-0 mx-auto">
                  We are a huge marketplace dedicated to connecting great
                  artists of all DIGIMINT with their fans and unique token
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
      {/* <Footer  /> */}

      {/* Style switcher  */}
      <StyleSwitcher />
    </>
  )
}

export default AboutUs
