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
  about,
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
    {
      image: client04,
      name: 'Jack John',
      position: 'Designer',
    },
    {
      image: client05,
      name: 'Krista John',
      position: 'Designer',
    },
    {
      image: client06,
      name: 'Roger Jackson',
      position: 'Designer',
    },
    {
      image: client07,
      name: 'Johnny English',
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
        style={{ background: `url(${bg01}) bottom` }}
      >
        <div className="bg-overlay bg-gradient-overlay-2"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="title-heading text-center">
                <h5 className="heading fw-semibold sub-heading text-white title-dark">
                  Meet Superex
                </h5>
                <p className="text-white-50 para-desc mx-auto mb-0">
                  NFT marketplace where anything is possible and all are welcome
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
                    href="/index"
                    onClick={e => {
                      e.preventDefault()
                      navigate('/index')
                    }}
                  >
                    Superex
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
                <img src={about} className="img-fluid rounded shadow" alt="" />
              </div>
            </div>
            {/*end col*/}

            <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="section-title ms-lg-5">
                <h6 className="text-primary fw-normal">
                  Creative Vision & Mission
                </h6>
                <h4 className="title mb-4">
                  We develop & create <br /> digital art.
                </h4>
                <p className="text-muted">
                  Launch your campaign and benefit from our expertise on
                  designing and managing conversion centered bootstrap html
                  page.
                </p>
                <p className="text-muted mb-0">
                  It seems that only fragments of the original text remain in
                  the Lorem Ipsum texts used today. One may speculate that over
                  the course of time certain letters were added or deleted at
                  various positions within the text. This might also explain why
                  one can now find slightly different versions.
                </p>

                <div className="mt-4 pt-2">
                  <a
                    href=""
                    onClick={e => e.preventDefault()}
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
                  We are a huge marketplace dedicated to connecting great
                  artists of all Superex with their fans and unique token
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

        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-4">Latest Blog or News</h4>
                <p className="text-muted para-desc mb-0 mx-auto">
                  We are a huge marketplace dedicated to connecting great
                  artists of all Superex with their fans and unique token
                  collectors!
                </p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}

          <div className="row">
            {blogRecord?.map((blog, index) => (
              <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                <div className="card blog blog-primary shadow rounded-md overflow-hidden">
                  <div className="position-relative">
                    <img
                      src={blog?.image}
                      className="img-fluid rounded-md"
                      alt=""
                    />
                    <div className="position-absolute top-0 end-0 m-3">
                      <span className="like-icon shadow-sm">
                        <a
                          href=""
                          onClick={e => e.preventDefault()}
                          className="text-muted icon"
                        >
                          <i className="mdi mdi-18px mdi-heart mb-0"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="card-body position-relative p-4">
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="badge tag gradient rounded-md fw-bold"
                    >
                      {blog?.type}
                    </a>

                    <ul className="list-unstyled mt-2">
                      <li className="list-inline-item text-muted small me-3">
                        <i className="uil uil-calendar-alt text-dark h6 me-1"></i>
                        20th January, 2022
                      </li>
                      <li className="list-inline-item text-muted small">
                        <i className="uil uil-clock text-dark h6 me-1"></i>5 min
                        read
                      </li>
                    </ul>
                    <a
                      href="/blog-detail"
                      onClick={e => {
                        e.preventDefault()
                        navigate('/blog-detail')
                      }}
                      className="text-dark title h5 mt-3"
                    >
                      {blog?.title}
                    </a>

                    <div className="mt-3 d-flex justify-content-between align-items-center">
                      <a
                        href="/blog-detail"
                        onClick={e => {
                          e.preventDefault()
                          navigate('/blog-detail')
                        }}
                        className="btn btn-link text-muted"
                      >
                        Read more <FiArrowRight className="fea icon-sm" />
                      </a>
                      <span className="text-muted fs-6">
                        by{' '}
                        <a
                          href="/creator-profile"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/creator-profile')
                          }}
                          className="link"
                        >
                          {blog?.createdBy}
                        </a>
                      </span>
                    </div>
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
