import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import Countdown from 'react-countdown'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import StyleSwitcher from '../../components/StyleSwitcher'
import {
  client01, client02, client03, client04, client05, client06, client07, client08,
  client09, client10, client11, client12, client13,
  gif8, gif9, gif3, gif4, gif10, gif7, item11, item12, item3, item4, item13, item14,
  bgImage, bg1, bg2, bg3
} from '../../components/imageImport'

const DarkVersionThree = () => {
  const navigate = useNavigate()

  const toggleSwitcher = () => {
    var i = document.getElementById('style-switcher')
    if (i) {
      if (i.style.left === '-189px') {
        i.style.left = '0px'
      } else {
        i.style.left = '-189px'
      }
    }
  }

  const bestCreator = [
    {
      profileIcon: true,
      image: client01,
      name: 'StreetBoy',
      eth: '20.5 ETH',
    },
    {
      profileIcon: false,
      image: client13,
      name: 'FunnyGuy',
      eth: '20.5 ETH',
    },
    {
      profileIcon: true,
      image: client02,
      name: 'CutieGirl',
      eth: '20.5 ETH',
    },
    {
      profileIcon: true,
      image: client09,
      name: 'PandaOne',
      eth: '20.5 ETH',
    },
    {
      profileIcon: false,
      image: client03,
      name: 'NorseQueen',
      eth: '20.5 ETH',
    },
    {
      profileIcon: false,
      image: client04,
      name: 'BigBull',
      eth: '20.5 ETH',
    },
    {
      profileIcon: true,
      image: client10,
      name: 'KristyHoney',
      eth: '20.5 ETH',
    },
    {
      profileIcon: false,
      image: client05,
      name: 'Angel',
      eth: '20.5 ETH',
    },
    {
      profileIcon: true,
      image: client11,
      name: 'ButterFly',
      eth: '20.5 ETH',
    },
    {
      profileIcon: true,
      image: client06,
      name: 'CrazyAnyone',
      eth: '20.5 ETH',
    },
    {
      profileIcon: false,
      image: client07,
      name: 'LooserBad',
      eth: '20.5 ETH',
    },
    {
      profileIcon: true,
      image: client12,
      name: 'Princess',
      eth: '20.5 ETH',
    },
  ]

  const AuctionData = [
    {
      image: gif7,
      title: 'Deep Sea Phantasy',
      type: 'GIFs',
      filter: ['all', 'games'],
    },
    {
      image: item11,
      title: 'CyberPrimal 042 LAN',
      type: 'Arts',
      filter: ['all', 'art'],
    },
    {
      image: gif8,
      title: 'Crypto Egg Stamp #5',
      type: 'GIFs',
      filter: ['all', 'music', 'meme'],
    },
    {
      image: item12,
      title: 'Colorful Abstract Painting',
      type: 'Memes',
      filter: ['all', 'video'],
    },
    {
      image: item13,
      title: 'Liquid Forest Princess',
      type: 'Illustration',
      filter: ['all', 'video', 'meme'],
    },
    {
      image: gif9,
      title: 'Spider Eyes Modern Art',
      type: 'GIFs',
      filter: ['all', 'games'],
    },
    {
      image: item14,
      title: 'Synthwave Painting',
      type: 'Games',
      filter: ['all', 'art'],
    },
    {
      image: gif10,
      title: 'Contemporary Abstract',
      type: 'GIFs',
      filter: ['all', 'music'],
    },
  ]

  const blogList = [
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
  const liveAuctions = [
    {
      image: item3,
      title: 'Liquid Forest Princess',
      id: 'July 01, 2022 1:6:6',
      type: 'Illustration',
      client: client11,
      author: 'Butterfly',
    },
    {
      image: gif3,
      title: 'Spider Eyes Modern Art',
      id: 'July 15, 2022 2:5:5',
      type: 'GIFs',
      client: client04,
      author: 'BigBull',
    },
    {
      image: item4,
      title: 'Synthwave Painting',
      id: 'Aug 08, 2022 5:1:4',
      type: 'GIFs',
      client: client12,
      author: 'Princess',
    },
    {
      image: gif4,
      title: 'Contemporary Abstract',
      id: 'Aug 20, 2022 1:6:3',
      type: 'GIFs',
      client: client13,
      author: 'KristyHoney',
    },
  ]
  const [allData, setAllData] = useState(AuctionData)
  const [type, setType] = useState('all')
  const location = useLocation()

  useEffect(() => {
    setTimeout(() => {
      if (location?.pathname === '/index-three-dark-rtl') {
        document.getElementById('theme-opt').href = './css/style-dark-rtl.min.css'
      } else if (location?.pathname === '/index-three') {
        document.getElementById('theme-opt').href = './css/style.min.css'
      } else if (location?.pathname === '/index-three-rtl') {
        document.getElementById('theme-opt').href = './css/style-rtl.min.css'
      } else {
        document.getElementById('theme-opt').href = './css/style-dark.min.css'
      }
      toggleSwitcher(false)
    }, 100)
  }, [location?.pathname])

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
        className="bg-half-260 d-flex align-items-center bg-dark"
        style={{
          background: `url(${bgImage})`,
          backgroundPosition: "top center",
          backgroundSize: "cover"
        }}
      >
        <div className="container z-index-1">
          <div className="background-lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="title-heading text-center">
                <h4 className="heading text-white mb-4 title-dark fw-bold">
                  The Biggest <br /> Collections of NFTs
                </h4>
                <p className="text-white title-dark mb-0 para-desc mx-auto">
                  We are a huge marketplace dedicated to connecting great
                  artists of all Superex with their fans and unique token
                  collectors!
                </p>

                <div className="mt-4 pt-2">
                  <a
                    href="/aboutus"
                    onClick={e => {
                      e.preventDefault()
                      navigate('/aboutus')
                    }}
                    className="btn btn-primary rounded-md"
                  >
                    Discover Now
                  </a>
                </div>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* End Home */}

      {/* Start */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="card border-0 text-center features feature-primary feature-clean">
                <div className="icons text-center mx-auto">
                  <i className="uil uil-card-atm d-block rounded-md h3 mb-0"></i>
                </div>

                <div className="content mt-4 pt-2">
                  <h5 className="mb-3">Set up your wallet</h5>
                  <p className="text-muted mb-0">
                    Start working with Superex NFTs that can provide everything
                  </p>
                </div>
              </div>
            </div>
            {/*end col*/}

            <div className="col-lg-3 col-md-6 col-12 mt-5 mt-sm-0">
              <div className="card border-0 text-center features feature-primary feature-clean">
                <div className="icons text-center mx-auto">
                  <i className="uil uil-bitcoin-circle d-block rounded-md h3 mb-0"></i>
                </div>

                <div className="content mt-4 pt-2">
                  <h5 className="mb-3">Buy your collection</h5>
                  <p className="text-muted mb-0">
                    Start working with Superex NFTs that can provide everything
                  </p>
                </div>
              </div>
            </div>
            {/*end col*/}

            <div className="col-lg-3 col-md-6 col-12 mt-5 mt-lg-0">
              <div className="card border-0 text-center features feature-primary feature-clean">
                <div className="icons text-center mx-auto">
                  <i className="uil uil-wallet d-block rounded-md h3 mb-0"></i>
                </div>

                <div className="content mt-4 pt-2">
                  <h5 className="mb-3">Add your NFT's</h5>
                  <p className="text-muted mb-0">
                    Start working with Superex NFTs that can provide everything
                  </p>
                </div>
              </div>
            </div>
            {/*end col*/}

            <div className="col-lg-3 col-md-6 col-12 mt-5 mt-lg-0">
              <div className="card border-0 text-center features feature-primary feature-clean">
                <div className="icons text-center mx-auto">
                  <i className="uil uil-layers d-block rounded-md h3 mb-0"></i>
                </div>

                <div className="content mt-4 pt-2">
                  <h5 className="mb-3">Sell Your NFT's</h5>
                  <p className="text-muted mb-0">
                    Start working with Superex NFTs that can provide everything
                  </p>
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
            <div className="col">
              <div className="section-title text-center mb-5 pb-3">
                <h4 className="title mb-4">Popular Creators</h4>
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

          <div className="row g-4">
            {bestCreator?.map(data => {
              return (
                <div className="col-lg-3 col-md-4" key={data?.name}>
                  <div className="creators creator-primary creators-two bg-white d-flex align-items-center p-3 rounded-md shadow">
                    <div className="d-flex align-items-center">
                      <div className="position-relative d-inline-flex">
                        <img
                          src={data?.image}
                          className="avatar avatar-md-sm shadow-md rounded-pill"
                          alt=""
                        />
                        {data?.profileIcon && (
                          <>
                            <span className="verified text-primary">
                              <i className="mdi mdi-check-decagram"></i>
                            </span>
                            <span className="online text-success">
                              <i className="mdi mdi-circle"></i>
                            </span>
                          </>
                        )}
                      </div>

                      <div className="ms-3">
                        <h6 className="mb-0">
                          <a
                            href="/creators"
                            onClick={e => {
                              e.preventDefault()
                              navigate('/creators')
                            }}
                            className="text-dark name"
                          >
                            {data?.name}
                          </a>
                        </h6>
                        <small className="text-muted">{data?.eth}</small>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}

        <div className="container mt-100 mt-60">
          <div className="row align-items-end mb-5 pb-3">
            <div className="col-lg-4">
              <div className="section-title mb-4 mb-lg-0">
                <h4 className="title mb-2">Newest Items</h4>
                <p className="text-muted mb-0">
                  Best sellers of the week's NFTs
                </p>
              </div>
            </div>
            {/*end slide*/}

            <div className="col-lg-8 filters-group-wrap">
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
            className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4"
            id="grid"
            style={{ justifyContent: "left" }}
          >
            {allData?.map(data => {
              return (
                <div className="col picture-item" key={data?.title}>
                  <div className="card bg-white nft-items nft-primary rounded-md shadow overflow-hidden mb-1">
                    <div className="nft-image position-relative overflow-hidden">
                      <a
                        href="/item-detail-one"
                        onClick={e => {
                          e.preventDefault()
                          navigate('/item-detail-one')
                        }}
                      >
                        <img src={data?.image} className="img-fluid" alt="" />
                      </a>
                      <div className="position-absolute top-0 start-0 m-3">
                        <a
                          href=""
                          onClick={e => e.preventDefault()}
                          className="badge badge-link bg-primary"
                        >
                          {data?.type}
                        </a>
                      </div>
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

                    <div className="card-body content position-relative">
                      <a
                        href="/item-detail-one"
                        onClick={e => {
                          e.preventDefault()
                          navigate('/item-detail-one')
                        }}
                        className="title text-dark h6"
                      >
                        {data?.title}
                      </a>

                      <div className="d-flex align-items-center justify-content-between mt-3">
                        <div className="">
                          <small className="mb-0 d-block fw-semibold">
                            Current Bid:
                          </small>
                          <small className="rate fw-bold">20.5 ETH</small>
                        </div>
                        <a
                          href="/item-detail-one"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/item-detail-one')
                          }}
                          className="btn btn-icon btn-pills btn-primary"
                        >
                          <i className="uil uil-shopping-bag"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            {/*end col*/}
          </div>
          {/*end row*/}

          <div className="row">
            <div className="col mt-4">
              <div className="text-center">
                <a
                  href="/explore-two"
                  onClick={e => {
                    e.preventDefault()
                    navigate('/explore-two')
                  }}
                  className="btn btn-primary rounded-md"
                >
                  View More <i className="uil uil-arrow-right"></i>
                </a>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}

        <div className="container mt-100 mt-60">
          <div className="row">
            <div className="col">
              <div className="section-two rounded-md shadow bg-gradient-primary px-md-5 px-4">
                <div className="row align-items-end">
                  <div className="col-md-8">
                    <div className="section-title text-md-start text-center">
                      <h6 className="text-white-50 mb-1">
                        Join with Superex Community
                      </h6>
                      <h4 className="title text-white title-dark mb-4">
                        Become a Creator!
                      </h4>

                      <p className="text-white-50 para-desc mb-0">
                        We are a huge marketplace dedicated to connecting great
                        artists of all Superex with their fans and unique token
                        collectors!
                      </p>
                    </div>
                  </div>
                  {/*end col*/}

                  <div className="col-md-4 mt-4 pt-2 mt-sm-0 pt-sm-0">
                    <div className="text-md-end text-center">
                      <a
                        href="become-creator"
                        onClick={e => {
                          e.preventDefault()
                          navigate('/become-creator')
                        }}
                        className="btn btn-primary rounded-md"
                      >
                        Click here <i className="uil uil-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}

        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col">
              <div className="section-title text-center mb-5 pb-3">
                <h4 className="title mb-4">Live Auctions</h4>
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

          <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4">
            {liveAuctions?.map((data, index) => {
              return (
                <div className="col" key={index}>
                  <div className="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1 p-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <img
                          src={data?.client}
                          alt="user"
                          className="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle"
                        />
                        <a
                          href=""
                          onClick={e => e.preventDefault()}
                          className="text-dark small creator-name h6 mb-0 ms-2"
                        >
                          @{data?.author}
                        </a>
                      </div>
                    </div>

                    <div className="nft-image rounded-md mt-3 position-relative overflow-hidden">
                      <a
                        href="/item-detail-one"
                        onClick={e => {
                          e.preventDefault()
                          navigate('/item-detail-one')
                        }}
                      >
                        <img src={data?.image} className="img-fluid" alt="" />
                      </a>
                      <div className="position-absolute top-0 start-0 m-2">
                        <span className="badge badge-link bg-primary">
                          {data?.type}
                        </span>
                      </div>
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

                      <div className="position-absolute bottom-0 start-0 m-2 bg-gradient-primary text-white title-dark rounded-pill px-3">
                        <i className="uil uil-clock"></i>{' '}
                        <Countdown
                          date={data?.id}
                          renderer={({ days, hours, minutes, seconds }) => (
                            <span>
                              {days}:{hours}:{minutes}:{seconds}
                            </span>
                          )}
                        />
                      </div>
                    </div>

                    <div className="card-body content position-relative p-0 mt-3">
                      <a
                        href="/item-detail-one"
                        onClick={e => {
                          e.preventDefault()
                          navigate('/item-detail-one')
                        }}
                        className="title text-dark h6"
                      >
                        {data?.title}
                      </a>

                      <div className="d-flex align-items-center justify-content-between mt-3">
                        <div className="">
                          <small className="mb-0 d-block fw-semibold">
                            Current Bid:
                          </small>
                          <small className="rate fw-bold">20.5 ETH</small>
                        </div>
                        <a
                          href="/item-detail-one"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/item-detail-one')
                          }}
                          className="btn btn-icon btn-pills btn-primary"
                        >
                          <i className="uil uil-shopping-bag"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}

        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col">
              <div className="section-title text-center mb-5 pb-3">
                <h4 className="title mb-4">Latest Blogs</h4>
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

          <div className="row g-4">
            {blogList?.map((data, index) => {
              return (
                <div className="col-lg-4 col-md-6" key={data?.title}>
                  <div className="card blog blog-primary shadow rounded-md overflow-hidden">
                    <div className="position-relative">
                      <img
                        src={data?.image}
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
                        className="badge tag gradient rounded-md fw-bold"
                      >
                        {data?.type}
                      </a>

                      <ul className="list-unstyled mt-2">
                        <li className="list-inline-item text-muted small me-3">
                          <i className="uil uil-calendar-alt text-dark h6 me-1"></i>
                          20th January, 2022
                        </li>
                        <li className="list-inline-item text-muted small">
                          <i className="uil uil-clock text-dark h6 me-1"></i>5
                          min read
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
                        {data?.title}
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
                            {data?.createdBy}
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}

            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* End */}
      {/* footer */}
      <Footer />

      {/* Style switcher  */}
      <StyleSwitcher />
    </>
  )
}

export default DarkVersionThree
