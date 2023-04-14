import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Countdown from 'react-countdown'
import Footer from '../../components/Footer'
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
  exploreidea,
  exploreidea2,
  exploreidea3,
  home3, 
  home4, 
  home5, 
  home6, 
  home7, 
  home8, 
  home9, 
  home10,
  iconLogo2,
  tokenLogo,
  tokenLogo2
} from '../../components/imageImport'

import Choices from 'choices.js'

const ExploreTwo = () => {
  const navigate = useNavigate()

  const exploreData = [
    {
      image: home3,
      title: 'Buildable plan: Interior Unit, Villas at Chaparral, Allen, TX 75002',
      id: 'May 29, 2022 6:0:0',
      type: 'Rental',
    },
    {
      image: home4,
      title: '310 Donna Dr, Camden, OH 45311',
      id: '',
      type: 'Rental',
    },
    {
      image: home5,
      title: '4820 Hollywreath Ct, Dayton, OH 45424',
      id: '',
      type: 'Rental',
    },
    {
      image: home6,
      title: '2276 Cobblestone Ct, Beavercreek, OH 45431',
      id: 'June 03, 2022 5:3:1',
      type: 'Real Estate',
    },
    {
      image: home7,
      title: '4754 Fox Run, Fairborn, OH 45324',
      id: '',
      type: 'Home',
    },
    {
      image:home8,
      title: '9755 Olde Park Dr, Tipp City, OH 45371Contemporary Abstract',
      id: 'June 10, 2022 1:0:1',
      type: 'Home',
    },
    {
      image: home9,
      title: '203 Tortugas Dr, Allen, TX 75002',
      id: '',
      type: '',
    },
    {
      image:home10,
      title: '23 Heritage Way, Allen, TX 75002',
      id: '',
      type: 'Real Estate',
    },
    {
      image: home3,
      title: 'Buildable plan: Interior Unit, Villas at Chaparral, Allen, TX 75002',
      id: 'May 29, 2022 6:0:0',
      type: 'Rental',
    },
    {
      image: home4,
      title: '310 Donna Dr, Camden, OH 45311',
      id: '',
      type: 'Home',
    },
    {
      image: home5,
      title: '4820 Hollywreath Ct, Dayton, OH 45424',
      id: '',
      type: 'Rental',
    },
    {
      image: home6,
      title: '2276 Cobblestone Ct, Beavercreek, OH 45431',
      id: 'June 03, 2022 5:3:1',
      type: 'Real Estate',
    },
    {
      image: home7,
      title: '4754 Fox Run, Fairborn, OH 45324',
      id: '',
      type: 'Home',
    },
    {
      image:home8,
      title: '9755 Olde Park Dr, Tipp City, OH 45371Contemporary Abstract',
      id: 'June 10, 2022 1:0:1',
      type: 'Home',
    },
    {
      image: home9,
      title: '203 Tortugas Dr, Allen, TX 75002',
      id: '',
      type: '',
    },
    {
      image:home10,
      title: '23 Heritage Way, Allen, TX 75002',
      id: '',
      type: 'Real Estate',
    },
    
  ]
  useEffect(() => {
    new Choices('#choices-criteria')
    var singleCategorie = document.getElementById('choices-type')
    if (singleCategorie) {
      new Choices('#choices-type')
    }
  }, [])
  return (
    <>
      {/* Navbar */}
      
      {/* Start Home */}
      <section
        className="bg-half-170 d-table w-100"
        style={{ background: `url(${exploreidea3}) bottom` }}
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
                  Explore the latest  digitized real estate assets worldwide<br></br>
                  Enter an address, neighborhood,city or ZIP code
                </p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
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
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="features-absolute">
                <div className="row justify-content-center" id="reserve-form">
                  <div className="col-xl-10 mt-lg-5">
                    <div className="card bg-white feature-top border-0 shadow rounded p-3">
                      <form action="#">
                        <div className="registration-form text-dark text-start">
                          <div className="row g-lg-0">
                            <div className="col-lg-3 col-md-6 mt-3 mt-md-0">
                              <div className="filter-search-form position-relative filter-border">
                                <i className="uil uil-search icons"></i>
                                <input
                                  name="name"
                                  type="text"
                                  id="search-keyword"
                                  className="form-control filter-input-box bg-light border-0"
                                  placeholder="Enter an address"
                                />
                              </div>
                            </div>
                            {/*end col*/}

                            <div className="col-lg-3 col-md-6 mt-3 mt-md-0">
                              <div className="filter-search-form position-relative filter-border">
                                <i className="uil uil-search icons"></i>
                                <input
                                  name="name"
                                  type="text"
                                  id="search-keyword"
                                  className="form-control filter-input-box bg-light border-0"
                                  placeholder="Enter ZIP code"
                                />
                              </div>
                            </div>
                            {/*end col*/}

                            <div className="col-lg-3 col-md-6 mt-3 mt-md-0">
                              <div className="filter-search-form position-relative filter-border">
                                <i className="uil uil-search icons"></i>
                                <input
                                  name="name"
                                  type="text"
                                  id="search-keyword"
                                  className="form-control filter-input-box bg-light border-0"
                                  placeholder="Enter an address, neighborhood,city or ZIP code"
                                />
                              </div>
                            </div>
                            {/*end col*/}

                            <div className="col-lg-3 col-md-6 mt-3 mt-md-0">
                              <div className="filter-search-form position-relative filter-border">
                                <i className="uil uil-window icons"></i>
                                <select
                                  className="form-select"
                                  data-trigger
                                  name="choices-criteria"
                                  id="choices-criteria"
                                  aria-label="Default select example"
                                  defaultValue="Type"
                                >
                                  <option value=""selected="selected">Choose City</option>
                                  <option value="1">Miami</option>
                                  <option value="2">New York</option>
                                  <option value="3">New Jersey</option>
                                
                                </select>
                              </div>
                            </div>
                            {/*end col*/}

                            <div className="col-lg-3 col-md-6 mt-3 mt-lg-0">
                              <div className="filter-search-form position-relative filter-border">
                                <i className="uil uil-window icons"></i>
                                <select
                                  className="form-select "
                                  data-trigger
                                  name="choices-type"
                                  id="choices-type"
                                  aria-label="Default select example"
                                  defaultValue="Location"
                                >
                                  <option value="">Choose State</option>
                                  <option value="1">Florida</option>
                                  <option value="2">Alaska</option>
                                  <option value="3">Ohio</option>
                                  <option value="4">Hawaii</option>
                                  <option value="5">Washington</option>
                                </select>
                              </div>
                            </div>
                            {/*end col*/}

                            <div className="col-lg-3 col-md-6 mt-3 mt-lg-0">
                              <input
                                type="submit"
                                id="search"
                                name="search"
                                style={{ height: 60 }}
                                className="btn btn-primary rounded-md searchbtn submit-btn w-100"
                                value="Search"
                              />
                            </div>
                            {/*end col*/}
                          </div>
                          {/*end row*/}
                        </div>
                        {/*end container*/}
                      </form>
                    </div>
                  </div>
                  {/*ed col*/}
                </div>
                {/*end row*/}
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}

        <div className="container">
          <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1">
            {exploreData?.map(data => {
              return (
                <div className="col mt-4 pt-2" key={data?.title}>
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
                        href="/item-detail"
                        onClick={e => {
                          e.preventDefault()
                          navigate('/item-detail')
                        }}
                      >
                        <img src={data?.image} className="img-fluid" alt="" />
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
                        {/* <small className="fw-bold"></small> */}
                      </div>
                    </div>

                    <div className="card-body content position-relative p-0 mt-3">
                      <a
                        href=""
                        onClick={e => {
                          e.preventDefault()
                          // navigate('/item-detail-one')
                        }}
                        className="title text-dark h6"
                      >
                        {data?.title}
                      </a>

                      <div className="d-flex justify-content-between mt-2">
                        <small className="rate fw-bold">200,000 USDC</small>
                        <small className="text-dark fw-bold">1 out of 10</small>
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

      {/* CTA Start */}
      <section className="section pt-0 pt-sm-5 mt-0 mt-sm-5">
        <div className="container">
          <div className="bg-black rounded-md p-md-5 p-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="app-subscribe text-center text-md-start">
                    <img src={tokenLogo2} className="img-fluid" height="120" alt="" />
                  </div>
                </div>
                {/*end col*/}

                <div className="col-lg-8 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="section-title text-center text-md-start ms-xl-5 ms-md-4">
                    <h4 className="display-6 fw-bold text-white title-dark mb-0">
                      Get{' '}
                      <span className="text-gradient-primary fw-bold">
                        Free Token Collections{' '}
                      </span>{' '}
                      <br />
                      with your first nft
                    </h4>

                    <div className="mt-4">
                      <a
                        href=""
                        onClick={e => e.preventDefault()}
                        className="btn btn-link primary text-white title-dark"
                      >
                        Get Started <i className="uil uil-arrow-right"></i>
                      </a>
                    </div>
                    <div className='d-flex mt-2'>
                    <div className="col-lg-3 col-md-6 mt-3 mx-2 mt-lg-0">
                    <input
                                type="submit"
                                id="search"
                                name="search"
                                style={{ height: 60 }}
                                className="btn btn-primary rounded-md searchbtn submit-btn w-100"
                                value="Buy a Home"
                              />
                            </div>
                            <div className="col-lg-3 col-md-6 mx-2 mt-3 mt-lg-0">
                              <input
                                type="submit"
                                id="search"
                                name="search"
                                style={{ height: 60 }}
                                className="btn btn-primary rounded-md searchbtn submit-btn w-100"
                                value="Sell a Home"
                              />
                            </div>
                           
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

export default ExploreTwo
