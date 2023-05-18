import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { FiArrowRight } from "react-icons/fi";
import Countdown from "react-countdown";
import nftData from "../../utils/Nft.json";
import marketplaceData from "../../utils/Marketplace.json";
import { ethers } from "ethers";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ItemDetail from "../../components/ItemDetail";
// import ItemDetail from '../../components/Item'
import StyleSwitcher from "../../components/StyleSwitcher";
import {
  client01,
  client02,
  client03,
  client04,
  client05,
  client06,
  client07,
  client08,
  client09,
  client10,
  client11,
  client12,
  client13,
  bgImage,
  bg1,
  bg2,
  bg3,
  home3,
  home4,
  home5,
  home6,
  home7,
  home8,
  home9,
  home10,
} from "../../components/imageImport";

const DarkVersionThree = () => {
  const [items, setItems] = useState([]);
  // const [marketplace1, setMarketplace1] = useState({});
  // const [nft1, setNft1] = useState({});
  const [marketplace2, setMarketplace2] = useState({});
  const [nft2, setNft2] = useState({});
  const [toggle, setToggle] = useState(false);
  const [item, setItem] = useState({});

  useEffect(() => {
    console.log({ items });
  }, [items]);

  //

  const nftAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const nftABI = nftData.abi;
  const marketplaceAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
  const marketplaceABI = marketplaceData.abi;

  const loadMarketplaceItems = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        // setMarketplace1(marketplace);
        // setNft1(nft);
        const provider = new ethers.providers.Web3Provider(ethereum, "any");
        const signer = provider.getSigner();
        const nft2 = new ethers.Contract(nftAddress, nftABI, signer);
        setNft2(nft2);
        const marketplace2 = new ethers.Contract(
          marketplaceAddress,
          marketplaceABI,
          signer
        );
        setMarketplace2(marketplace2);
        // console.log("this is marketplace1", marketplace1);
        console.log("this is marketplace2", marketplace2);

        const itemCount = await marketplace2.itemCount();

        console.log("ITEM COUNT => ", itemCount);

        let items = [];
        for (let i = 1; i <= itemCount; i++) {
          const item = await marketplace2.items(i);
          if (!item.sold) {
            // get uri url from nft contract
            const uri = await nft2.tokenURI(item.tokenId);
            // use uri to fetch the nft metadata stored on ipfs
            const response = await fetch(uri);
            const metadata = await response.json();
            // get total price of item (item price + fee)
            const totalPrice = await marketplace2.getTotalPrice(item.itemId);
            // Add item to items array
            items.push({
              totalPrice,
              itemId: item.itemId,
              seller: item.seller,
              name: metadata.name,
              description: metadata.description,
              image: metadata.image,
              bedrooms: metadata.bedrooms,
              bathrooms: metadata.bathrooms,
              yearBuilt: metadata.yearBuilt,
              units: metadata.units,
              propertyAddress: metadata.propertyAddress,
              propertyCity: metadata.propertyCity,
              propertyState: metadata.propertyState,
              zipCode: metadata.zipCode,
              increment: metadata.increment,
              endTime: metadata.endTime,
            });
          }
        }

        setItems(items);
        console.log("these are items", items);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleProp = (item) => {
    setItem(item);
    toggle ? setToggle(false) : setToggle(true);
  };

 
  const buyMarketItem = async (item) => {
    await (await marketplace2.purchaseItem(item.itemId, { value: item.totalPrice })).wait()
    loadMarketplaceItems()
  }
  
  const navigate = useNavigate();

  const toggleSwitcher = () => {
    var i = document.getElementById("style-switcher");
    if (i) {
      if (i.style.left === "-189px") {
        i.style.left = "0px";
      } else {
        i.style.left = "-189px";
      }
    }
  };

  const bestCreator = [
    {
      profileIcon: true,
      image: client01,
      name: "StreetBoy",
      usdt: "20.5 ETH",
    },
    {
      profileIcon: false,
      image: client13,
      name: "FunnyGuy",
      eth: "20.5 ETH",
    },
    {
      profileIcon: true,
      image: client02,
      name: "CutieGirl",
      eth: "20.5 ETH",
    },
    {
      profileIcon: true,
      image: client09,
      name: "PandaOne",
      eth: "20.5 ETH",
    },
    {
      profileIcon: false,
      image: client03,
      name: "NorseQueen",
      eth: "20.5 ETH",
    },
    {
      profileIcon: false,
      image: client04,
      name: "BigBull",
      eth: "20.5 ETH",
    },
    {
      profileIcon: true,
      image: client10,
      name: "KristyHoney",
      eth: "20.5 ETH",
    },
    {
      profileIcon: false,
      image: client05,
      name: "Angel",
      eth: "20.5 ETH",
    },
    {
      profileIcon: true,
      image: client11,
      name: "ButterFly",
      eth: "20.5 ETH",
    },
    {
      profileIcon: true,
      image: client06,
      name: "CrazyAnyone",
      eth: "20.5 ETH",
    },
    {
      profileIcon: false,
      image: client07,
      name: "LooserBad",
      eth: "20.5 ETH",
    },
    {
      profileIcon: true,
      image: client12,
      name: "Princess",
      eth: "20.5 ETH",
    },
  ];

  const HomeData = [
    {
      image: home10,
      title: "8999 Franklin Trenton Rd, Franklin, OH 45005",
      type: "Rental",
      filter: ["all", "rental"],
      payment: "$1,426/month",
    },
    {
      image: home9,
      title: "112 Cottage St, Camden, OH 45311",

      filter: ["all", "mortgage"],
      payment: "$2,426/month",
    },
    {
      image: home3,
      title: "310 Donna Dr, Camden, OH 45311",

      filter: ["all", "mortgage"],
      payment: "$3,426/month",
    },
    {
      image: home4,
      title: "31 S Lafayette St, Camden, OH 45311",
      type: "Homes",
      filter: ["all", "homes"],
      payment: "$4,426/month",
    },
    {
      image: home5,
      title: "4820 Hollywreath Ct, Dayton, OH 45424",
      type: "Rental",
      filter: ["all", "rental"],
      payment: "$5,426/month",
    },
    {
      image: home6,
      title: "2276 Cobblestone Ct, Beavercreek, OH 45431",
      type: "Homes",
      filter: ["all", "homes"],
      payment: "$6,426/month",
    },
    {
      image: home7,
      title: "4754 Fox Run, Fairborn, OH 45324",
      type: "Rental",
      filter: ["all", "rental"],
      payment: "$10,426/month",
    },
    {
      image: home8,
      title: "9755 Olde Park Dr, Tipp City, OH 45371Contemporary Abstract",
      type: "Rental",
      filter: ["all", "rental"],
      payment: "$11,426/month",
    },
  ];

  const blogList = [
    {
      image: bg1,
      title: "Mindfulness Activities for Kids & Toddlers with NFT",
      createdBy: "@callyjoe",
      type: "Arts",
    },
    {
      image: bg2,
      title: "Save Thousands Of Lives Through This NFT",
      createdBy: "@kristyhoney",
      type: "Illustration",
    },
    {
      image: bg3,
      title: "A place where technology meets craftsmanship",
      createdBy: "@pandaone",
      type: "Music",
    },
  ];
  const liveAuctions = [
    {
      image: home10,
      title: "9755 Olde Park Dr, Tipp City, OH 45371Contemporary Abstract",
      id: "July 01, 2022 1:6:6",

      client: client11,
      author: "Butterfly",
    },
    {
      image: home8,
      title: "4754 Fox Run, Fairborn, OH 45324",
      id: "July 15, 2022 2:5:5",

      client: client04,
      author: "BigBull",
    },
    {
      image: home4,
      title: "2276 Cobblestone Ct, Beavercreek, OH 45431",
      id: "Aug 08, 2022 5:1:4",

      client: client12,
      author: "Princess",
    },
    {
      image: home9,
      title: "31 S Lafayette St, Camden, OH 45311",
      id: "Aug 20, 2022 1:6:3",

      client: client13,
      author: "KristyHoney",
    },
  ];
  const [allData, setAllData] = useState(HomeData);
  const [type, setType] = useState("all");
  const location = useLocation();

  useEffect(() => {
    loadMarketplaceItems();
    setTimeout(() => {
      if (location?.pathname === "/index-three-dark-rtl") {
        document.getElementById("theme-opt").href =
          "./css/style-dark-rtl.min.css";
      } else if (location?.pathname === "/index-three") {
        document.getElementById("theme-opt").href = "./css/style.min.css";
      } else if (location?.pathname === "/index-three-rtl") {
        document.getElementById("theme-opt").href = "./css/style-rtl.min.css";
      } else {
        document.getElementById("theme-opt").href = "./css/style-dark.min.css";
      }
      toggleSwitcher(false);
    }, 100);
  }, [location?.pathname]);

  const setFilter = (type) => {
    setType(type);
    const newOne = HomeData?.filter((data) => data?.filter?.includes(type));
    setAllData(newOne);
  };
  return (
    <>
      {/* Start Home */}
      <section
        className="bg-half-260 d-flex align-items-center bg-dark"
        style={{
          background: `url(${bgImage})`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
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
                  The Biggest <br /> Collections of Digital Assets
                </h4>
                <p className="text-white title-dark mb-0 para-desc mx-auto">
                  Welcome to RETHESTATE, a real estate-based blockchain project
                  that aims to revolutionize the way we buy, sell, and manage
                  real estate assets.
                </p>

                <div className="mt-4 pt-2">
                  <a
                    href="/aboutus"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/aboutus");
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
        {/*end container*/}

        {/*end container*/}

        <div className="container mt-100 mt-60">
          <div className="row align-items-end mb-5 pb-3">
            <div className="col-lg-4">
              <div className="section-title mb-4 mb-lg-0">
                <h4 className="title mb-2">Home Recommendations</h4>
                <p className="text-muted mb-0">Best Home Recommendations</p>
              </div>
            </div>
            {/*end slide*/}

            <div className="col-lg-8 filters-group-wrap">
              <div className="filters-group">
                <ul className="container-filter mb-0 categories-filter text-center list-unstyled">
                  <li
                    className={`list-inline-item categories position-relative text-dark ${
                      type === "all" ? "active" : ""
                    }`}
                    data-group="all"
                    onClick={() => setFilter("all")}
                  >
                    <i className="uil uil-browser"></i> All
                  </li>
                  <li
                    className={`list-inline-item categories position-relative text-dark ${
                      type === "rental" ? "active" : ""
                    }`}
                    data-group="rental"
                    onClick={() => setFilter("rental")}
                  >
                    <i className="uil uil-house"></i> Rental
                  </li>

                  <li
                    className={`list-inline-item categories position-relative text-dark ${
                      type === "homes" ? "active" : ""
                    }`}
                    data-group="homes"
                    onClick={() => setFilter("homes")}
                  >
                    <i className="uil uil-house"></i> Homes
                  </li>
                </ul>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}

          {items?.length ? (
            <div
              className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4"
              id="grid"
              style={{ justifyContent: "left" }}
            >
              {items.map((item, idx) => {
                console.log("this is sis item",item)
                console.log("itemId",ethers.utils.formatEther(item?.itemId))

                return (
                  <div className="col picture-item" key={idx}>
                    <div className="card bg-white nft-items nft-primary rounded-md shadow overflow-hidden mb-1">
                      <div className="nft-image position-relative overflow-hidden">
                        {/* <a  onClick={() => toggleProp(item)} key={idx}>
                          <img src={item.image} className="img-fluid" alt="" />
                        </a> */}
                        <Link to={`/item/${ethers.utils.formatEther(item?.itemId)}`}   key={idx}>
                          <img src={item.image} className="img-fluid" alt="" />
                        </Link>
                      </div>

                      <div className="card-body content position-relative">
                        <p
                         
                          className="title text-dark h6"
                        >
                          {item.name}
                        </p>

                        <div className="d-flex align-items-center justify-content-between mt-3">
                          <div className="">
                            <small className="mb-0 d-block fw-semibold">
                              Current Price:
                            </small>
                            <small className="rate fw-bold">
                              {ethers.utils.formatEther(item.totalPrice)}  ETH
                            </small>
                          </div>
                         
                          <button className="btn btn-icon btn-pills btn-primary">
                          <i onClick={() => buyMarketItem(item)} className="uil uil-shopping-bag"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              {/*end col*/}
            </div>
          ) : (
            <main style={{ padding: "1rem 0" }}>
              <h2>No listed assets</h2>
            </main>
          )}

          {toggle && (
            <ItemDetail
              item={item}
              marketplace={marketplace2}
              toggleProp={toggleProp}
              setItems={setItems}
              nft={nft2}
            />
          )}
          {/*end row*/}

          <div className="row">
            <div className="col mt-4">
              <div className="text-center">
                <a
                  href="/explore"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/explore");
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
          <div className="row align-items-end mb-5 pb-3">
            <div className="col-lg-4">
              <div className="section-title mb-4 mb-lg-0">
                <h4 className="title mb-2">NFT Rentals</h4>
                <p className="text-muted mb-0">Best NFT Rentals</p>
              </div>
            </div>
            {/*end slide*/}

            <div className="col-lg-8 filters-group-wrap">
              <div className="filters-group">
                <ul className="container-filter mb-0 categories-filter text-center list-unstyled">
                  <li
                    className={`list-inline-item categories position-relative text-dark ${
                      type === "all" ? "active" : ""
                    }`}
                    data-group="all"
                    onClick={() => setFilter("all")}
                  >
                    <i className="uil uil-browser"></i> All
                  </li>
                  <li
                    className={`list-inline-item categories position-relative text-dark ${
                      type === "rental" ? "active" : ""
                    }`}
                    data-group="rental"
                    onClick={() => setFilter("rental")}
                  >
                    <i className="uil uil-house"></i> Rental
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
            {allData?.map((data) => {
              return (
                <div className="col picture-item" key={data?.title}>
                  <div className="card bg-white nft-items nft-primary rounded-md shadow overflow-hidden mb-1">
                    <div className="nft-image position-relative overflow-hidden">
                      <a
                        href="/item-detail"
                        onClick={(e) => {
                          e.preventDefault();
                          navigate("/item-detail");
                        }}
                      >
                        <img src={data?.image} className="img-fluid" alt="" />
                      </a>
                      <div className="position-absolute top-0 start-0 m-3">
                        <a
                          href=""
                          onClick={(e) => e.preventDefault()}
                          className="badge badge-link bg-primary"
                        >
                          {data?.type}
                        </a>
                      </div>
                      <div className="position-absolute top-0 end-0 m-3">
                        <span className="like-icon shadow-sm">
                          <a
                            href=""
                            onClick={(e) => e.preventDefault()}
                            className="text-muted icon"
                          >
                            <i className="mdi mdi-18px mdi-heart mb-0"></i>
                          </a>
                        </span>
                      </div>
                    </div>

                    <div className="card-body content position-relative">
                      <a
                        href="/item-detail"
                        onClick={(e) => {
                          e.preventDefault();
                          navigate("/item-detail");
                        }}
                        className="title text-dark h6"
                      >
                        {data?.title}
                      </a>
                      <br />
                      <br />

                      <div className="d-flex align-items-center justify-content-between mt-3">
                        <div className="">
                          <small className="mb-0 d-block fw-semibold">
                            Current Bid:
                          </small>
                          <small className="rate fw-bold">200 USDC</small>
                        </div>
                        <a
                          href=""
                          onClick={(e) => {
                            e.preventDefault();
                            // navigate('/item-detail-one')
                          }}
                          className="btn btn-icon btn-pills btn-primary"
                        >
                          <i className="uil uil-shopping-bag"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {/*end col*/}
          </div>
          {/*end row*/}

          <div className="row">
            <div className="col mt-4">
              <div className="text-center">
                <a
                  href="/explore"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/explore");
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
        {/* end container */}
        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col">
              <div className="section-title text-center mb-5 pb-3">
                <h4 className="title mb-4">Popular Realtors</h4>
                <p className="text-muted para-desc mb-0 mx-auto">
                  Our mission and main focus at RETHESTATE is to simplify what
                  can often be a tedious and time-consuming process for
                  homeowners, prospective buyers, and tenants.
                </p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}

          <div className="row g-4">
            {bestCreator?.map((data) => {
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
                            href=""
                            onClick={(e) => {
                              e.preventDefault();
                              // navigate('/creators')
                            }}
                            className="text-dark name"
                          >
                            {data?.name}
                          </a>
                        </h6>
                        <small className="text-muted">2000 USDC</small>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
                        Join with Rethestate Community
                      </h6>
                      <h4 className="title text-white title-dark mb-4">
                        Real Estate Valuation Tool!
                      </h4>

                      <p className="text-white-50 para-desc mb-0">
                        ‘I must create a system or be enslaved by another man’s;
                        I will not reason and compare: my business is to
                        create.’ -William Blake
                      </p>
                    </div>
                  </div>
                  {/*end col*/}

                  <div className="col-md-4 mt-4 pt-2 mt-sm-0 pt-sm-0">
                    <div className="text-md-end text-center">
                      <a
                        href=""
                        onClick={(e) => {
                          e.preventDefault();
                          // navigate('/become-creator')
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
                  We are a huge marketplace a real estate-based blockchain
                  project that aims to revolutionize the way we buy, sell, and
                  manage real estate assets.
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
                          onClick={(e) => e.preventDefault()}
                          className="text-dark small creator-name h6 mb-0 ms-2"
                        >
                          @{data?.author}
                        </a>
                      </div>
                    </div>

                    <div className="nft-image rounded-md mt-3 position-relative overflow-hidden">
                      <a
                        href=""
                        onClick={(e) => {
                          e.preventDefault();
                          // navigate('/item-detail-one')
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
                            onClick={(e) => e.preventDefault()}
                            className="text-muted icon"
                          >
                            <i className="mdi mdi-18px mdi-heart mb-0"></i>
                          </a>
                        </span>
                      </div>

                      <div className="position-absolute bottom-0 start-0 m-2 bg-gradient-primary text-white title-dark rounded-pill px-3">
                        <i className="uil uil-clock"></i>{" "}
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
                        href=""
                        onClick={(e) => {
                          e.preventDefault();
                          // navigate('/item-detail-one')
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
                          href=""
                          onClick={(e) => {
                            e.preventDefault();
                            // navigate('/item-detail-one')
                          }}
                          className="btn btn-icon btn-pills btn-primary"
                        >
                          <i className="uil uil-shopping-bag"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}

        {/*end container*/}
      </section>
      {/*end section*/}
      {/* End */}
      {/* footer */}
      <Footer />

      {/* Style switcher  */}
      <StyleSwitcher />
    </>
  );
};

export default DarkVersionThree;
