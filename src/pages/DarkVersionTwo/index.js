import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { tns } from 'tiny-slider/src/tiny-slider';
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import StyleSwitcher from '../../components/StyleSwitcher'
import {
  work1, work2, work3, work4, work5, work6, work7, work8, work9, work10, work11, work12,
  client01, client02, client03, client04, client05, client06, client07, client08,
  client09, client10, client11, client12, client13,
  gif1, gif2, gif3, gif4, gif5, gif6, item1, item2, item3, item4, item5, item6,
  c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12,
} from '../../components/imageImport'

const DarkVersionTwo = () => {
  const navigate = useNavigate()
  useEffect(() => {
    if (document.getElementsByClassName('tiny-three-item-nav-arrow').length > 0) {
      var slider = tns({
        container: '.tiny-three-item-nav-arrow',
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: 'bottom',
        controlsText: [
          '<i class="mdi mdi-chevron-left "></i>',
          '<i class="mdi mdi-chevron-right"></i>',
        ],
        nav: false,
        speed: 400,
        gutter: 12,
        responsive: {
          992: {
            items: 3,
          },

          767: {
            items: 2,
          },

          320: {
            items: 1,
          },
        },
      })
    }
    if (document.getElementsByClassName('tiny-five-item').length > 0) {
      var slider = tns({
        container: '.tiny-five-item',
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: 'bottom',
        speed: 400,
        gutter: 12,
        responsive: {
          1025: {
            items: 5,
          },

          992: {
            items: 3,
          },

          767: {
            items: 2,
          },

          320: {
            items: 1,
          },
        },
      })
    }
    if (document.getElementsByClassName('tiny-five-item-nav-arrow').length > 0) {
      var slider6 = tns({
        container: '.tiny-five-item-nav-arrow',
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: 'bottom',
        controlsText: [
          '<i class="mdi mdi-chevron-left "></i>',
          '<i class="mdi mdi-chevron-right"></i>',
        ],
        nav: false,
        speed: 400,
        gutter: 10,
        responsive: {
          992: {
            items: 5,
          },

          767: {
            items: 3,
          },

          320: {
            items: 1,
          },
        },
      })
    }
  }, [])

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

  const creator = [
    {
      background: work1,
      Image: client01,
      name: 'Steven Townsend',
      author: 'StreetBoy',
    },
    {
      background: work2,
      Image: client02,
      name: 'Tiffany Betancourt',
      author: 'CutieGirl',
    },
    {
      background: work3,
      Image: client03,
      name: 'Mari Harrington',
      author: 'NorseQueen',
    },
    {
      background: work4,
      Image: client04,
      name: 'Floyd Glasgow',
      author: 'BigBull',
    },
    {
      background: work5,
      Image: client05,
      name: 'Donna Schultz',
      author: 'Angel',
    },
    {
      background: work6,
      Image: client06,
      name: 'Joshua Morris',
      author: 'CrazyAnyone',
    },
    {
      background: work7,
      Image: client07,
      name: 'Carl Williams',
      author: 'LooserBad',
    },
    {
      background: work8,
      Image: client08,
      name: 'Eugene Green',
      author: 'KristyHoney',
    },
    {
      background: work9,
      Image: client09,
      name: 'Julius Canale',
      author: 'PandaOne',
    },
    {
      background: work10,
      Image: client10,
      name: 'Michael Williams',
      author: 'FunnyGuy',
    },
    {
      background: work11,
      Image: client11,
      name: 'Jacqueline Burns',
      author: 'ButterFly',
    },
    {
      background: work12,
      Image: client12,
      name: 'Rosaria Vargas',
      author: 'Princess',
    },
  ]

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
      type: 'Arts',
      filter: ['all', 'art'],
    },
    {
      image: gif2,
      title: 'Crypto Egg Stamp #5',
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
      type: '',
      filter: ['all', 'art'],
    },
    {
      image: gif4,
      title: 'Contemporary Abstract',
      type: 'GIFs',
      filter: ['all', 'music'],
    },
    {
      image: item5,
      title: 'Valkyrie Abstract Art',
      type: '',
      filter: ['all', 'video', 'meme'],
    },
    {
      image: gif5,
      title: 'The girl with the firefly',
      type: '',
      filter: ['all', 'art'],
    },
    {
      image: item6,
      title: 'Dodo hide the seek',
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

  const collectionData = [
    {
      title: 'Digital Arts',
      img1: c3,
      img2: c1,
      img3: c4,
      img4: c10,
      client: client01,
    },
    {
      title: 'Sports',
      img1: c2,
      img2: c5,
      img3: c6,
      img4: c7,
      client: client10,
    },
    {
      title: 'Photography',
      img1: c8,
      img2: c9,
      img3: c11,
      img4: c12,
      client: client12,
    },
    {
      title: 'Illustrations',
      img1: c4,
      img2: c1,
      img3: c10,
      img4: c3,
      client: client02,
    },
    {
      title: 'Animations',
      img1: c5,
      img2: c6,
      img3: c2,
      img4: c7,
      client: client09,
    },
    {
      title: 'Virtual Reality',
      img1: c11,
      img2: c9,
      img3: c8,
      img4: c12,
      client: client11,
    },
  ]
  const [allData, setAllData] = useState(AuctionData)
  const [type, setType] = useState('all')
  const location = useLocation()

  useEffect(() => {
    setTimeout(() => {
      if (location?.pathname === '/index-two-dark-rtl') {
        document.getElementById('theme-opt').href = './css/style-dark-rtl.min.css'
      } else if (location?.pathname === '/index-two') {
        document.getElementById('theme-opt').href = './css/style.min.css'
      } else if (location?.pathname === '/index-two-rtl') {
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
      <div className="round-effect">
        <div className="primary-round opacity-3"></div>
        <div className="gradient-round opacity-3"></div>
      </div>

      <Navbar />

      {/* Start Home */}
      <section className="bg-half-174">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="tiny-five-item">
                {allData?.map(data => {
                  return (
                    <div className="tiny-slide" key={data?.title}>
                      <div className="card bg-white nft-items nft-primary rounded-md shadow-md overflow-hidden mx-2 my-3">
                        <div className="nft-image position-relative overflow-hidden">
                          <a
                            href="/item-detail-one"
                            onClick={e => {
                              e.preventDefault()
                              navigate('/item-detail-one')
                            }}
                          >
                            <img
                              src={data?.image}
                              className="img-fluid"
                              alt=""
                            />
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
                {/*end slide*/}
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}

        <div className="container mt-100 mt-60">
          <div className="row align-items-end">
            <div className="col-md-8">
              <div className="section-title mb-4 pb-2">
                <h4 className="title mb-2">Explore Your Items</h4>
                <p className="text-muted mb-0">
                  Explore the latest NFTs digital product
                </p>
              </div>
            </div>
            {/*end col*/}

            <div className="col-md-4">
              <div className="text-end d-md-block d-none">
                <a
                  href="/explore-one"
                  onClick={e => {
                    e.preventDefault()
                    navigate('/explore-one')
                  }}
                  className="btn btn-link primary text-dark"
                >
                  See More <i className="uil uil-arrow-right"></i>
                </a>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}

          <div className="row justify-content-center mb-4 pb-2">
            <div className="col filters-group-wrap">
              <div className="filters-group">
                <ul className="container-filter mb-0 categories-filter list-unstyled filter-options">
                  <li
                    className={`list-inline-item categories position-relative text-dark ${type === 'all' ? 'active' : ''
                      }`}
                    onClick={() => setFilter('all')}
                  >
                    <i className="uil uil-browser"></i> All
                  </li>
                  <li
                    className={`list-inline-item categories position-relative text-dark ${type === 'games' ? 'active' : ''
                      }`}
                    onClick={() => setFilter('games')}
                  >
                    <i className="uil uil-volleyball"></i> Games
                  </li>
                  <li
                    className={`list-inline-item categories position-relative text-dark ${type === 'art' ? 'active' : ''
                      }`}
                    onClick={() => setFilter('art')}
                  >
                    <i className="uil uil-chart-pie-alt"></i> Art
                  </li>
                  <li
                    className={`list-inline-item categories position-relative text-dark ${type === 'music' ? 'active' : ''
                      }`}
                    onClick={() => setFilter('music')}
                  >
                    <i className="uil uil-music"></i> Music
                  </li>
                  <li
                    className={`list-inline-item categories position-relative text-dark ${type === 'video' ? 'active' : ''
                      }`}
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
            {allData?.map((data, index) => {
              return (
                <div className="col picture-item" key={index}>
                  <div className="card bg-white nft-items nft-primary rounded-md shadow overflow-hidden mb-1">
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
                          {data?.title}
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

          <div className="row justify-content-center">
            <div className="col">
              <div className="text-center d-block d-md-none mt-4">
                <a
                  href="/explore-one"
                  onClick={e => {
                    e.preventDefault()
                    navigate('/explore-one')
                  }}
                  className="btn btn-link primary text-dark"
                >
                  See More <i className="uil uil-arrow-right"></i>
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
            <div className="col-12">
              <div className="section-title">
                <h4 className="title mb-2">Best Creators & Sellers</h4>
                <p className="text-muted mb-0">
                  Best sellers of the week's NFTs
                </p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
          <div className="row">
            {bestCreator?.map((data, index) => {
              return (
                <div className="col-lg-3 col-md-4 mt-5" key={data?.name}>
                  <div className="creators creator-primary d-flex align-items-center">
                    <span className="fw-bold text-muted">
                      {index < 10 ? `0${index}.` : `${index}.`}
                    </span>

                    <div className="d-flex align-items-center ms-3">
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
            {/*end row*/}
          </div>
        </div>
        {/*end container*/}

        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-2">Popular Collection</h4>
                <p className="text-muted mb-0">
                  Best Collection of the week's NFTs
                </p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}

          <div className="row">
            <div className="col">
              <div className="tiny-three-item-nav-arrow">
                {collectionData?.map(data => {
                  return (<div className="tiny-slide" key={data?.title}>
                    <div className="card bg-white collections collection-primary rounded-md shadow p-2 pb-0 m-1">
                      <div className="row g-2">
                        <div className="col-12">
                          <img
                            src={data?.img1}
                            className="img-fluid shadow-sm rounded-md"
                            alt=""
                          />
                        </div>
                        {/*end col*/}

                        <div className="col-4">
                          <img
                            src={data?.img2}
                            className="img-fluid shadow-sm rounded-md"
                            alt=""
                          />
                        </div>
                        {/*end col*/}

                        <div className="col-4">
                          <img
                            src={data?.img3}
                            className="img-fluid shadow-sm rounded-md"
                            alt=""
                          />
                        </div>
                        {/*end col*/}

                        <div className="col-4">
                          <img
                            src={data?.img4}
                            className="img-fluid shadow-sm rounded-md"
                            alt=""
                          />
                        </div>
                        {/*end col*/}
                      </div>
                      {/*end row*/}

                      <div className="content text-center p-4 mt-n5">
                        <div className="position-relative d-inline-flex">
                          <img
                            src={data?.client}
                            className="avatar avatar-small rounded-pill img-thumbnail shadow-md"
                            alt=""
                          />
                          <span className="verified text-primary">
                            <i className="mdi mdi-check-decagram"></i>
                          </span>
                        </div>

                        <div className="mt-2">
                          <a
                            href="/explore-four"
                            onClick={e => {
                              e.preventDefault()
                              navigate('/explore-four')
                            }}
                            className="text-dark title h5"
                          >
                            {data?.title}
                          </a>

                          <p className="text-muted mb-0 small">27 Items</p>
                        </div>
                      </div>
                    </div>
                  </div>)
                })}
              </div>

              {/*end slide*/}
            </div>
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* End Home */}

      {/* footer */}
      <Footer />

      {/* Style switcher  */}
      <StyleSwitcher />
    </>
  )
}

export default DarkVersionTwo
