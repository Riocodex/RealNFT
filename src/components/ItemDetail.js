import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Countdown from 'react-countdown'
import Footer from './Footer'

import StyleSwitcher from './StyleSwitcher'

import { client01, client02, client03, client08, client09, client10, item1, item2, gif1, gif2, itemDetail1,home9, home4, home5, home6, home7, home8 } from './imageImport'

const ItemDetail = ({item, marketplace, toggleProp, setLoading, setItems, nft}) => {
    const navigate = useNavigate()
  
    const activityData = [
      {
        title: 'Digital Art Collection',
        author: 'Panda',
        time: '1 hours ago',
        favorite: 'Started Following',
        image: item1,
      },
      {
        title: 'Skrrt Cobain Official',
        author: 'ButterFly',
        time: '2 hours ago',
        favorite: 'Liked by',
        image: gif1,
      },
      {
        title: 'Wow! That Brain Is Floating',
        author: 'ButterFly',
        time: '2 hours ago',
        favorite: 'Liked by',
        image: item2,
      },
    ]
    const createdData = [
      {
        image: home4,
        title: '1406 Chimney Rock Dr, Allen, TX 75002',
        id: 'May 29, 2022 6:0:0',
        type: 'GIFs',
        client: client01,
        author: 'StreetBoy',
      },
      {
        image: home5,
        title: '1407 Spring St, Allen, TX 75002',
        id: 'June 03, 2022 5:3:1',
        type: 'Arts',
        client: client09,
        author: 'PandaOne',
      },
      {
        image: home6,
        title: '1036 Margo Dr, Allen, TX 75013',
        id: 'June 10, 2022 1:0:1',
        type: 'GIFs',
        client: client02,
        author: 'CutieGirl',
      },
      {
        image: home7,
        title: '806 Walden Ct, Allen, TX 75002',
        id: 'June 18, 2022 1:2:1',
        type: 'Memes',
        client: client03,
        author: 'NorseQueen',
      },
    ]
    return (
      <>
        {/* Navbar */}
        
  
        {/* Start */}
        <section className="bg-item-detail d-table w-100">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="sticky-bar">
                  <img
                    src={home9}
                    className="img-fluid rounded-md shadow"
                    alt=""
                  />
                </div>
              </div>
  
              <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="ms-lg-5">
                <div className="title-heading">
                
                <h4 className="h3 fw-bold mb-0">
                600{' '}
                  <span className="text-gradient-primary">Grimsworth Ct</span><button className=' m-2 p-2'>
                  <h1>X</h1>
              </button> <br />{' '}
                  <span className="text-gradient-primary">Allen</span>{' '}
                  TX 75002
                </h4>
              </div>
  
                  <div className="row">
                    <div className="col-md-6 mt-4 pt-2">
                      <h6>Current Bid</h6>
                      <h4 className="mb-0">4.85 ETH</h4>
                      <small className="mb-0 text-muted">$450.48USD</small>
                    </div>
  
                    <div className="col-md-6 mt-4 pt-2">
                      <h6>Auction Ending In</h6>
                      <Countdown
                        date={'Aug 20, 2022 1:6:3'}
                        renderer={({ days, hours, minutes, seconds }) => (
                          <span>
                            {days}:{hours}:{minutes}:{seconds}
                          </span>
                        )}
                      />
                    </div>
  
                    <div className="col-12 mt-4 pt-2">
                      <a
                        href="#"
                        className="btn btn-l btn-pills btn-primary me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#NftBid"
                      >
                        <i className="mdi mdi-gavel fs-5 me-2"></i> Place a Bid
                      </a>
                      <a
                        href="#"
                        className="btn btn-l btn-pills btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#NftBuynow"
                      >
                        <i className="mdi mdi-cart fs-5 me-2"></i> Buy Now
                      </a>
                    </div>
                  </div>
  
                  <div className="row mt-4 pt-2">
                    <div className="col-12">
                      <ul
                        className="nav nav-tabs border-bottom"
                        id="myTab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="detail-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#detailItem"
                            type="button"
                            role="tab"
                            aria-controls="detailItem"
                            aria-selected="true"
                          >
                            Details
                          </button>
                        </li>
  
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="bids-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#bids"
                            type="button"
                            role="tab"
                            aria-controls="bids"
                            aria-selected="false"
                          >
                            Facts and Features
                          </button>
                        </li>
  
                        {/* <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="activity-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#activity"
                            type="button"
                            role="tab"
                            aria-controls="activity"
                            aria-selected="false"
                          >
                            Home Value
                          </button>
                        </li> */}
                      </ul>
  
                      <div className="tab-content mt-4 pt-2" id="myTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="detailItem"
                          role="tabpanel"
                          aria-labelledby="detail-tab"
                        >
                          <p className="text-muted">
                          No HOA! Welcome to your new home in the heart of Allen! This darling single-story 3 BR 2 BA is situated on a peaceful cul-de-sac in a friendly and quiet neighborhood, perfect for families with kids or pets. With a huge lot, you'll have all the
                          </p>
                          {/* <p className="text-muted">
                            What does it mean? Biomechanics is the study of the
                            structure, function and motion of the mechanical
                            aspects of biological systems, at any level from whole
                            organisms to organs, cells and cell organelles, using
                            the methods of mechanics. Biomechanics is a branch of
                            biophysics.
                          </p> */}
                          <h6>Owner</h6>
  
                          <div className="creators creator-primary d-flex align-items-center">
                            <div className="position-relative">
                              <img
                                src={client09}
                                className="avatar avatar-md-sm shadow-md rounded-pill"
                                alt=""
                              />
                              <span className="verified text-primary">
                                <i className="mdi mdi-check-decagram"></i>
                              </span>
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
                                  PandaOne
                                </a>
                              </h6>
                            </div>
                          </div>
                        </div>
  
                        <div
                          className="tab-pane fade"
                          id="bids"
                          role="tabpanel"
                          aria-labelledby="bids-tab"
                        >
                          <div className="creators creator-primary d-flex align-items-center">
                            {/* <div className="position-relative">
                              <img
                                src={client01}
                                className="avatar avatar-md-sm shadow-md rounded-pill"
                                alt=""
                              />
                            </div> */}
  
                            <div className="ms-3">
                              <h5 className="mb-0">
                                Bedrooms and Bathrooms <span className="text-muted"></span>{' '}
                               
                              </h5>
                              <br/>
                              <h6>Bedrooms: <small className="text-muted">4</small></h6>
                              <h6>Bathrooms: <small className="text-muted">2</small></h6>
                              <h6>Full Bathrooms: <small className="text-muted">2</small></h6>
                            </div>
                          </div>
  
                         
  
                         
                        </div>
  
                        <div
                          className="tab-pane fade"
                          id="activity"
                          role="tabpanel"
                          aria-labelledby="activity-tab"
                        >
                          <div className="row g-4">
                            {activityData?.map(data => {
                              return (
                                <div className="col-12" key={data?.title}>
                                  <div className="card activity activity-primary rounded-md shadow p-4">
                                    <div className="d-flex align-items-center">
                                      <div className="position-relative">
                                        <img
                                          src={data?.image}
                                          className="avatar avatar-md-md rounded-md shadow-md"
                                          alt=""
                                        />
  
                                        <div className="position-absolute top-0 start-0 translate-middle px-1 rounded-lg shadow-md bg-white">
                                          {data?.favorite ===
                                            'Started Following' ? (
                                            <i className="mdi mdi-account-check mdi-18px text-success"></i>
                                          ) : data?.favorite === 'Liked by' ? (
                                            <i className="mdi mdi-heart mdi-18px text-danger"></i>
                                          ) : (
                                            <i className="mdi mdi-format-list-bulleted mdi-18px text-warning"></i>
                                          )}
                                        </div>
                                      </div>
                                      <span className="content ms-3">
                                        <a
                                          href=""
                                          onClick={e => e.preventDefault()}
                                          className="text-dark title mb-0 h6 d-block"
                                        >
                                          {data?.time}
                                        </a>
                                        <small className="text-muted d-block mt-1">
                                          {data?.favorite}{' '}
                                          <a
                                            href=""
                                            onClick={e => e.preventDefault()}
                                            className="link fw-bold"
                                          >
                                            @{data?.author}
                                          </a>
                                        </small>
  
                                        <small className="text-muted d-block mt-1">
                                          {data?.time}
                                        </small>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              )
                            })}
                            {/*end col*/}
                          </div>
                          {/*end row*/}
                        </div>
                      </div>
                    </div>
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
                <div className="section-title text-center mb-4 pb-2">
                  <h4 className="title mb-4">Related Auction Items</h4>
                  <p className="text-muted para-desc mb-0 mx-auto">
                    We are a huge marketplace dedicated to connecting great
                    artists of all RealNFt with their fans and unique token
                    collectors!
                  </p>
                </div>
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
  
            <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1">
              {createdData?.map(data => {
                return (
                  <div className="col mt-4 pt-2" key={data?.title}>
                    <div className="card nft-items nft-primary nft-auction rounded-md shadow overflow-hidden mb-1 p-3">
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
                          href="/item-detail"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/item-detail')
                          }}
                        >
                          <img src={data?.image} className="img-fluid" alt="" />
                        </a>
                        <div className="position-absolute top-0 start-0 m-2">
                          <a
                            href=""
                            onClick={e => e.preventDefault()}
                            className="badge badge-link bg-primary"
                          >
                            {data?.type}
                          </a>
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
  
                        {/* <div className="position-absolute bottom-0 start-0 m-2 h5 bg-gradient-primary text-white title-dark rounded-pill px-3">
                          <i className="uil uil-clock"></i>{' '}
                          <Countdown
                            date={data?.id}
                            renderer={({ days, hours, minutes, seconds }) => (
                              <span>
                                {days}:{hours}:{minutes}:{seconds}
                              </span>
                            )}
                          />
                        </div> */}
                      </div>
  
                      <div className="card-body content position-relative p-0 mt-3">
                        <a
                          href="/item-detail"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/item-detail')
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
                            href="/item-detail"
                            onClick={e => {
                              e.preventDefault()
                              navigate('/item-detail')
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
        </section>
        {/*end section*/}
        {/* End */}
  
        {/* Place Bid Modal */}
        <div
          className="modal fade"
          id="NftBid"
          aria-hidden="true"
          aria-labelledby="bidtitle"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered modal-sm">
            <div className="modal-content border-0 shadow-md rounded-md">
              <div className="modal-header">
                <h5 className="modal-title" id="bidtitle">
                  Place a Bid
                </h5>
                <button
                  type="button"
                  className="btn btn-close"
                  data-bs-dismiss="modal"
                  id="close-modal"
                >
                  <i className="uil uil-times fs-4"></i>
                </button>
              </div>
              <div className="modal-body p-4">
                <form>
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-4">
                        <label className="form-label fw-bold">
                          Your Bid Price <span className="text-danger">*</span>
                        </label>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          className="form-control"
                          placeholder="00.00 ETH"
                        />
                        <small className="text-muted">
                          <span className="text-dark">Note:</span> Bid price at
                          least 1 ETH
                        </small>
                      </div>
                    </div>
                    {/*end col*/}
                    <div className="col-12">
                      <div className="mb-4">
                        <label className="form-label fw-bold">
                          Enter Your QTY <span className="text-danger">*</span>
                        </label>
                        <input
                          name="email"
                          id="email"
                          type="email"
                          className="form-control"
                          placeholder="0"
                        />
                        <small className="text-muted">
                          <span className="text-dark">Note:</span> Max. Qty 5
                        </small>
                      </div>
                    </div>
                    {/*end col*/}
                  </div>
                </form>
  
                <div className="pt-3 border-top">
                  <div className="d-flex justify-content-between">
                    <p className="fw-bold small"> You must bid at least:</p>
                    <p className="text-primary"> 1.22 ETH </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="fw-bold small"> Service free:</p>
                    <p className="text-primary"> 0.05 ETH </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="fw-bold small"> Total bid amount:</p>
                    <p className="text-primary mb-0"> 1.27 ETH </p>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-pills btn-primary"
                  data-bs-target="#placebid"
                  data-bs-toggle="modal"
                >
                  <i className="mdi mdi-gavel fs-5 me-2"></i> Place a Bid
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="placebid"
          aria-hidden="true"
          aria-labelledby="bidsuccess"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered modal-sm">
            <div className="modal-content border-0 shadow-md rounded-md">
              <div className="modal-header">
                <h5 className="modal-title" id="bidsuccess">
                  Bidding Successful
                </h5>
                <button
                  type="button"
                  className="btn btn-close"
                  data-bs-dismiss="modal"
                  id="close-modal"
                >
                  <i className="uil uil-times fs-4"></i>
                </button>
              </div>
              <div className="modal-body p-4">
                your bid (1.27ETH) has been listing to our database
              </div>
              <div className="modal-footer">
                <a
                  href="/activity"
                  onClick={e => {
                    e.preventDefault()
                    navigate('/activity')
                  }}
                  data-bs-toggle="modal"
                  className="btn btn-pills btn-primary"
                >
                  <i className="mdi mdi-basket-plus fs-5 me-2"></i> View Your Bid
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Place Bid Modal */}
  
        {/* Buy Now NFt Modal */}
        <div
          className="modal fade"
          id="NftBuynow"
          aria-hidden="true"
          aria-labelledby="buyNft"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered modal-sm">
            <div className="modal-content border-0 shadow-md rounded-md">
              <div className="modal-header">
                <h5 className="modal-title" id="buyNft">
                  Checkout
                </h5>
                <button
                  type="button"
                  className="btn btn-close"
                  data-bs-dismiss="modal"
                  id="close-modal"
                >
                  <i className="uil uil-times fs-4"></i>
                </button>
              </div>
              <div className="modal-body p-4">
                <form>
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-4">
                        <label className="form-label fw-bold">
                          Your Price <span className="text-danger">*</span>
                        </label>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          className="form-control"
                          defaultValue="1.5ETH"
                        />
                      </div>
                    </div>
                    {/*end col*/}
                  </div>
                </form>
  
                <div className="py-3 border-top">
                  <div className="d-flex justify-content-between">
                    <p className="fw-bold small"> You must bid at least:</p>
                    <p className="text-primary"> 1.22 ETH </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="fw-bold small"> Service free:</p>
                    <p className="text-primary"> 0.05 ETH </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="fw-bold small"> Total bid amount:</p>
                    <p className="text-primary mb-0"> 1.27 ETH </p>
                  </div>
                </div>
  
                <div className="bg-soft-danger p-3 rounded shadow">
                  <div className="d-flex align-items-center">
                    <i className="uil uil-exclamation-circle h2 mb-0 me-2"></i>
                    <div className="flex-1">
                      <h6 className="mb-0">This creator is not verified</h6>
                      <small className="mb-0">
                        Purchase this item at your own risk
                      </small>
                    </div>
                  </div>
                </div>
  
                <div className="mt-4">
                  <button
                    className="btn btn-pills btn-primary w-100"
                    data-bs-target="#buyNftSuccess"
                    data-bs-toggle="modal"
                  >
                    <i className="mdi mdi-cart fs-5 me-2"></i> Continue
                  </button>
                  <form>
                    <div className="form-check align-items-center d-flex mt-2">
                      <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        id="AcceptT&C"
                      />
                      <label
                        className="form-check-label text-muted ms-2"
                        htmlFor="AcceptT&C"
                      >
                        I Accept{' '}
                        <a
                          href=""
                          onClick={e => e.preventDefault()}
                          className="text-primary"
                        >
                          Terms And Condition
                        </a>
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="buyNftSuccess"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel2"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered modal-sm">
            <div className="modal-content border-0 shadow-md rounded-md">
              <div className="position-absolute top-0 start-100 translate-middle z-index-1">
                <button
                  type="button"
                  className="btn btn-icon btn-pills btn-sm btn-light btn-close opacity-10"
                  data-bs-dismiss="modal"
                  id="close-modal"
                >
                  <i className="uil uil-times fs-4"></i>
                </button>
              </div>
              <div className="modal-body text-center p-4">
                <h3>Yahhhoooo! 🎉</h3>
                <h6 className="text-muted mb-0">
                  You successfully purchased{' '}
                  <a href="" className="text-reset">
                    <u>RIO nft</u>
                  </a>{' '}
                  from RealNFt
                </h6>
  
                <ul className="rounded-md shadow p-4 border list-unstyled mt-4">
                  <li className="d-flex justify-content-between">
                    <span className="fw-bold me-5">Status:</span>
                    <span className="text-warning">Processing</span>
                  </li>
  
                  <li className="d-flex justify-content-between mt-2">
                    <span className="fw-bold me-5">Transaction ID:</span>
                    <span className="text-muted">qhut0...hfteh45</span>
                  </li>
                </ul>
  
                <ul className="list-unstyled social-icon mb-0 mt-4">
                  {[
                    'uil uil-facebook-f',
                    'uil uil-instagram',
                    'uil uil-linkedin',
                    'uil uil-dribbble',
                    'uil uil-twitter',
                  ]?.map((data, index) => {
                    return (
                      <li className="list-inline-item lh-1 mr-1" key={index}>
                        <a href="" className="rounded">
                          <i className={data}></i>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Buy Now NFt Modal */}
        {/* footer */}
        <Footer />
  
        {/* Style switcher  */}
        <StyleSwitcher />
      </>
    )
  }
  
  export default ItemDetail
  