import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import StyleSwitcher from '../../components/StyleSwitcher'
import {
  bg01, item1, item2, item3, item4, item5, item6,
  gif1, gif2, gif3, gif4, gif5, gif6,
  cta, client05, client06, client08
} from '../../components/imageImport'

const ExploreOne = () => {
  const navigate = useNavigate()
  const AuctionData = [
    {
      image: gif1,
      title: 'Deep Sea Phantasy',
      type: 'GIFs',
      filter: ['all', 'games'],
    },
    {
      image: item1,
      title: 'CyberPrimal 042 LAN',
      time: '',
      type: 'Arts',
      filter: ['all', 'art'],
    },
    {
      image: gif2,
      title: 'Crypto Egg Stamp #5',
      time: '',
      type: 'Games',
      filter: ['all', 'music', 'meme'],
    },
    {
      image: item2,
      title: 'Colorful Abstract Painting',
      type: '',
      filter: ['all', 'video'],
    },
    {
      image: item3,
      title: 'Liquid Forest Princess',
      time: '',
      type: '',
      filter: ['all', 'video', 'meme'],
    },
    {
      image: gif3,
      title: 'Spider Eyes Modern Art',
      type: 'GIFs',
      filter: ['all', 'games'],
    },
    {
      image: item4,
      title: 'Synthwave Painting',
      time: '',
      type: '',
      filter: ['all', 'art'],
    },
    {
      image: gif4,
      title: 'Contemporary Abstract',
      time: '',
      type: 'GIFs',
      filter: ['all', 'music'],
    },
    {
      image: item5,
      title: 'Valkyrie Abstract Art',
      time: '',
      type: '',
      filter: ['all', 'video', 'meme'],
    },
    {
      image: gif5,
      title: 'The girl with the firefly',
      time: '',
      type: '',
      filter: ['all', 'art'],
    },
    {
      image: item6,
      title: 'Dodo hide the seek',
      time: '',
      type: '',
      filter: ['all', 'games'],
    },
    {
      image: gif6,
      title: 'Pinky Ocean',
      type: '',
      filter: ['all', 'music'],
    },
  ]

  const [allData, setAllData] = useState(AuctionData)
  const [type, setType] = useState('all')
  const location = useLocation()
  const setFilter = type => {
    setType(type)
    const newOne = AuctionData?.filter(data => data?.filter?.includes(type))
    setAllData(newOne)
  }
  return (
    <>
      {/* Navbar */}
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
                  Marketplace
                </h5>
                <p className="text-white-50 para-desc mx-auto mb-0">
                  Explore the latest NFTs digital product
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
                  Explore
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

      {/* Start */}
      <section className="section">
        <div className="container">
          <div className="row justify-content-center mb-4 pb-2">
            <div className="col filters-group-wrap">
              <div className="filters-group">
                <ul className="container-filter mb-0 categories-filter text-center list-unstyled">
                  <li
                    className={`list-inline-item categories position-relative text-dark ${type === 'all' ? 'active' : ''
                      }`}
                    // data-group="all"
                    onClick={() => setFilter('all')}
                  >
                    <i className="uil uil-browser"></i> All
                  </li>
                  <li
                    className={`list-inline-item categories position-relative text-dark ${type === 'games' ? 'active' : ''
                      }`}
                    // data-group="games"
                    onClick={() => setFilter('games')}
                  >
                    <i className="uil uil-volleyball"></i> Games
                  </li>
                  <li
                    className={`list-inline-item categories position-relative text-dark ${type === 'art' ? 'active' : ''
                      }`}
                    // data-group="art"
                    onClick={() => setFilter('art')}
                  >
                    <i className="uil uil-chart-pie-alt"></i> Art
                  </li>
                  <li
                    className={`list-inline-item categories position-relative text-dark ${type === 'music' ? 'active' : ''
                      }`}
                    // data-group="music"
                    onClick={() => setFilter('music')}
                  >
                    <i className="uil uil-music"></i> Music
                  </li>
                  <li
                    className={`list-inline-item categories position-relative text-dark ${type === 'video' ? 'active' : ''
                      }`}
                    // data-group="video"
                    onClick={() => setFilter('video')}
                  >
                    <i className="uil uil-camera-plus"></i> Video
                  </li>
                  <li
                    className={`list-inline-item categories position-relative text-dark ${type === 'meme' ? 'active' : ''
                      }`}
                    // data-group="memes"
                    onClick={() => setFilter('meme')}
                  >
                    <i className="uil uil-rocket"></i> Memes
                  </li>
                </ul>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}

          <div
            className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 g-4"
            id="grid"
          >
            {allData?.map(data => {
              return (
                <div className="col picture-item" key={data?.title}>
                  <div className="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1">
                    <div className="nft-image position-relative overflow-hidden">
                      <img src={data?.image} className="img-fluid" alt="" />
                      <div className="position-absolute top-0 end-0 m-2">
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

                      <div className="bid-btn">
                        <a
                          href="/item-detail-one"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/item-detail-one')
                          }}
                          className="btn btn-pills"
                        >
                          <i className="mdi mdi-gavel fs-5 align-middle me-1"></i>{' '}
                          Bid
                        </a>
                      </div>
                    </div>

                    <div className="card-body content position-relative">
                      <div className="img-group">
                        <a
                          href="/creator-profile"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/creator-profile')
                          }}
                          className="user-avatar"
                        >
                          <img
                            src={client08}
                            alt="user"
                            className="avatar avatar-sm-sm img-thumbnail border-0 shadow-md rounded-circle"
                          />
                        </a>
                        <a
                          href="/creator-profile"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/creator-profile')
                          }}
                          className="user-avatar ms-n3"
                        >
                          <img
                            src={client05}
                            alt="user"
                            className="avatar avatar-sm-sm img-thumbnail border-0 shadow-md rounded-circle"
                          />
                        </a>
                        <a
                          href="/creator-profile"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/creator-profile')
                          }}
                          className="user-avatar ms-n3"
                        >
                          <img
                            src={client06}
                            alt="user"
                            className="avatar avatar-sm-sm img-thumbnail border-0 shadow-md rounded-circle"
                          />
                        </a>
                      </div>

                      <div className="mt-2">
                        <a
                          href="/item-detail-one"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/item-detail-one')
                          }}
                          className="title text-dark h6"
                        >
                          Deep Sea Phantasy
                        </a>

                        <div className="d-flex justify-content-between mt-2">
                          <small className="rate fw-bold">20.5 ETH</small>
                          <small className="text-dark fw-bold">
                            1 out of 10
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            {/*end col*/}
          </div>
          {/*end row*/}

          <div className="row justify-content-center mt-4">
            <div className="col">
              <div className="text-center">
                <a
                  href=""
                  onClick={e => e.preventDefault()}
                  className="btn btn-primary rounded-md"
                >
                  <i className="uil uil-process mdi-spin me-1"></i> Load More
                </a>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* End */}

      <section className="section pt-0 pt-sm-5 mt-0 mt-sm-5">
        <div className="container">
          <div className="bg-black rounded-md p-md-5 p-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="app-subscribe text-center text-md-start">
                    <img src={cta} className="img-fluid" height="120" alt="" />
                  </div>
                </div>
                {/*end col*/}

                <div className="col-lg-8 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="section-title text-center text-md-start ms-xl-5 ms-md-4">
                    <h4 className="display-6 fw-bold text-white title-dark mb-0">
                      Get{' '}
                      <span className="text-gradient-primary fw-bold">
                        Free collections{' '}
                      </span>{' '}
                      <br /> with your subscription
                    </h4>

                    <div className="mt-4">
                      <a
                        href=""
                        onClick={e => e.preventDefault()}
                        className="btn btn-link primary text-white title-dark"
                      >
                        Subscribe Now <i className="uil uil-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                {/*end col*/}
              </div>
              {/*end row*/}
            </div>
            {/*end container*/}
          </div>
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* footer */}
      <Footer />

      {/* Style switcher  */}
      <StyleSwitcher />
    </>
  )
}

export default ExploreOne
