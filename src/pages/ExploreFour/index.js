import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import Countdown from 'react-countdown'
import Navbar from '../../components/Navbar'
import StyleSwitcher from '../../components/StyleSwitcher'
import {
  bg01,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  item10,
  gif1,
  gif2,
  gif3,
  gif4,
  gif5,
  gif6,
  cta,
  client05,
  client06,
  client08,
} from '../../components/imageImport'

const ExploreFour = () => {
  const navigate = useNavigate()

  const AuctionData = [
    {
      image: gif1,
      title: 'Deep Sea Phantasy',
      id: 'May 29, 2022 6:0:0',
      type: 'GIFs',
    },
    {
      image: item1,
      title: 'CyberPrimal 042 LAN',
      id: '',
      type: 'Arts',
    },
    {
      image: gif2,
      title: 'Crypto Egg Stamp #5',
      id: '',
      type: 'Games',
    },
    {
      image: item2,
      title: 'Colorful Abstract Painting',
      id: 'June 03, 2022 5:3:1',
      type: '',
    },
    {
      image: item3,
      title: 'Liquid Forest Princess',
      id: '',
      type: '',
    },
    {
      image: gif3,
      title: 'Spider Eyes Modern Art',
      id: 'June 10, 2022 1:0:1',
      type: 'GIFs',
    },
    {
      image: item4,
      title: 'Synthwave Painting',
      id: '',
      type: '',
    },
    {
      image: gif4,
      title: 'Contemporary Abstract',
      id: '',
      type: 'GIFs',
    },
    {
      image: item5,
      title: 'Valkyrie Abstract Art',
      id: '',
      type: '',
    },
    {
      image: gif5,
      title: 'The girl with the firefly',
      id: '',
      type: '',
    },
    {
      image: item6,
      title: 'Dodo hide the seek',
      id: '',
      type: '',
    },
    {
      image: gif6,
      title: 'Pinky Ocean',
      id: 'June 10, 2022 1:0:1',
      type: '',
    },
    {
      image: item7,
      title: 'Rainbow Style',
      id: 'June 18, 2022 1:2:1',
      type: 'Music',
    },
    {
      image: item8,
      title: 'Running Puppets',
      id: '',
      type: 'Gallery',
    },
    {
      image: item9,
      title: 'Loop Donut',
      id: 'July 01, 2022 1:6:6',
      type: 'Video',
    },
    {
      image: item10,
      title: 'This is Our Story',
      id: 'July 15, 2022 2:5:5',
      type: '',
    },
  ]
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
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="sticky-bar">
                <h5 className="mb-0">NFT Filters</h5>
                <div className="p-4 rounded-md shadow mt-4">
                  <div>
                    <h6>Orders By:</h6>
                    <form>
                      <div className="form-check align-items-center d-flex mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="NewOrder"
                        />
                        <label
                          className="form-check-label fw-bold ms-2"
                          htmlFor="NewOrder"
                        >
                          Newest
                        </label>
                      </div>
                      <div className="form-check align-items-center d-flex mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="TrendOrder"
                        />
                        <label
                          className="form-check-label fw-bold ms-2"
                          htmlFor="TrendOrder"
                        >
                          Trending
                        </label>
                      </div>
                      <div className="form-check align-items-center d-flex mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="OldOrder"
                        />
                        <label
                          className="form-check-label fw-bold ms-2"
                          htmlFor="OldOrder"
                        >
                          Oldest
                        </label>
                      </div>
                    </form>
                  </div>

                  <div className="mt-4">
                    <h6>Catagories By:</h6>
                    <form>
                      <div className="form-check align-items-center d-flex mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="GamesCatagory"
                        />
                        <label
                          className="form-check-label fw-bold ms-2"
                          htmlFor="GamesCatagory"
                        >
                          Games
                        </label>
                      </div>
                      <div className="form-check align-items-center d-flex mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="ArtCatagory"
                        />
                        <label
                          className="form-check-label fw-bold ms-2"
                          htmlFor="ArtCatagory"
                        >
                          Art
                        </label>
                      </div>
                      <div className="form-check align-items-center d-flex mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="MusicCatagory"
                        />
                        <label
                          className="form-check-label fw-bold ms-2"
                          htmlFor="MusicCatagory"
                        >
                          Music
                        </label>
                      </div>
                      <div className="form-check align-items-center d-flex mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="VideoCatagory"
                        />
                        <label
                          className="form-check-label fw-bold ms-2"
                          htmlFor="VideoCatagory"
                        >
                          Video
                        </label>
                      </div>
                      <div className="form-check align-items-center d-flex mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="MemesCatagory"
                        />
                        <label
                          className="form-check-label fw-bold ms-2"
                          htmlFor="MemesCatagory"
                        >
                          Memes
                        </label>
                      </div>
                      <div className="form-check align-items-center d-flex mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="IllustrationCatagory"
                        />
                        <label
                          className="form-check-label fw-bold ms-2"
                          htmlFor="IllustrationCatagory"
                        >
                          Illustration
                        </label>
                      </div>
                      <div className="form-check align-items-center d-flex mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="GIFsCatagory"
                        />
                        <label
                          className="form-check-label fw-bold ms-2"
                          htmlFor="GIFsCatagory"
                        >
                          GIFs
                        </label>
                      </div>
                    </form>
                  </div>

                  <div className="mt-4">
                    <h6>Creators By:</h6>
                    <form>
                      <div className="form-check align-items-center d-flex mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="AllCreators"
                        />
                        <label
                          className="form-check-label fw-bold ms-2"
                          htmlFor="AllCreators"
                        >
                          All Creators
                        </label>
                      </div>
                      <div className="form-check align-items-center d-flex mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="VerifyCreators"
                        />
                        <label
                          className="form-check-label fw-bold ms-2"
                          htmlFor="VerifyCreators"
                        >
                          Verified Creators
                        </label>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/*end col*/}

            <div className="col-lg-9 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="row row-cols-xl-3 row-cols-lg-2 row-cols-1">
                {AuctionData?.map((data, index) => {
                  return (
                    <div
                      className={index < 3 ? 'col' : 'col pt-2 mt-4'}
                      key={index}
                    >
                      <div className="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1 p-3">
                        <div className="d-flex justify-content-between">
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
                                className="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle"
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
                                className="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle"
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
                                className="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle"
                              />
                            </a>
                          </div>

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

                        <div className="nft-image rounded-md mt-3 position-relative overflow-hidden">
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
                          {data?.type && (
                            <div className="position-absolute top-0 start-0 m-2">
                              <a
                                href=""
                                onClick={e => e.preventDefault()}
                                className="badge badge-link bg-primary"
                              >
                                {data?.type}
                              </a>
                            </div>
                          )}
                          <div
                            className={`${data?.id ? '' : 'hide-data'
                              } position-absolute bottom-0 start-0 m-2 bg-gradient-primary text-white title-dark rounded-pill px-3`}
                          >
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

                          <div className="d-flex justify-content-between mt-2">
                            <small className="rate fw-bold">20.5 ETH</small>
                            <small className="text-dark fw-bold">
                              1 out of 10
                            </small>
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
                      <i className="uil uil-process mdi-spin me-1"></i> Load
                      More
                    </a>
                  </div>
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
      </section>
      {/*end section*/}
      {/* End */}

      {/* CTA Start */}
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
      {/* CTA End */}
      {/* footer */}
      <Footer />

      {/* Style switcher  */}
      <StyleSwitcher />
    </>
  )
}

export default ExploreFour
