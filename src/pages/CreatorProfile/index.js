import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { FiCamera } from 'react-icons/fi'
import Countdown from 'react-countdown'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { ethers } from "ethers"
import nftData from "../../utils/Nft.json";
import marketplaceData from "../../utils/Marketplace.json";
import StyleSwitcher from '../../components/StyleSwitcher'
import {
  client01, client02, client03, client04, client05, client06, client08,
  client10, client12, client13,
  gif1, gif2, gif3, gif4, gif5, gif6,
  item1, item2, item3, item4, item5, item6, item7, item8, item9, item10,
  single, ofcDesk, prodToCard,home1, home2, home3, home4, home5, home6, home7, home8, home9, home10
} from '../../components/imageImport'

const CreateProfile = ({currentAccount}) => {
  const navigate = useNavigate()

  const createdData = [
    {
      image: home1,
      title: '633 Ridgemont Dr, Allen, TX 75002',
      type: 'Rentals',
      id: 'May 29, 2022 6:0:0'
    },
    {
      image: home2,
      title: '925 Sycamore Creek Rd, Allen, TX 75002',
      type: 'Homes',
      id: ''
    },
    {
      image: home4,
      title: '205 Willow Creek Cir, Allen, TX 75002',
      type: 'Homes',
      id: ''
    },
    {
      image: home5,
      title: '719 Pebblebrook Dr, Allen, TX 75002',
      type: '',
      id: 'June 03, 2022 5:3:1'
    },
    {
      image: home6,
      title: 'Buildable plan: Wexford, Village Cooperative of Allen (Active Adults 62+), Allen, TX 75013',
      type: '',
      id: ''
    },
    {
      image: home7,
      title: 'Buildable plan: Queensland, Village Cooperative of Allen (Active Adults 62+), Allen, TX 75013',
      type: 'Rentals',
      id: 'June 10, 2022 1:0:1'
    },
    {
      image: home8,
      title: '1649 Jessica Dr, Allen, TX 75002',
      type: '',
      id: ''
    },
    {
      image: home9,
      title: '1649 Jude Dr, Allen, TX 75002',
      type: 'Rentals',
      id: ''
    },
  ]
  const onSaleData = [
    {
      image: home9,
      title: '1649 Jude Dr, Allen, TX 75002',
      type: 'Rentals',
      id: 'May 29, 2022 6:0:0'
    },
    {
      image: home8,
      title: '1649 Jessica Dr, Allen, TX 75002',
      type: 'Homes',
      id: ''
    },
    {
      image: home7,
      title: 'Buildable plan: Queensland, Village Cooperative of Allen (Active Adults 62+), Allen, TX 75013',
      type: 'Homes',
      id: ''
    },
  ]

  const followerData = [
    {
      name: 'CutieGirl',
      location: 'Brookfield, WI',
      image: client02,
      subMenu: [item1, item2, item3, item4, item5, gif4],
    },
    {
      name: 'FunnyGuy',
      location: 'Brookfield, WI',
      image: client13,
      subMenu: [item3, gif1, item9, item6, item1, gif2],
    },
    {
      name: 'NorseQueen',
      location: 'Brookfield, WI',
      image: client03,
      subMenu: [gif5, item2, gif6, item4, item5],
    },
    {
      name: 'BigBull',
      location: 'Brookfield, WI',
      image: client04,
      subMenu: [item7, item8, item9, item10],
    },
    {
      name: 'KristyHoney',
      location: 'Brookfield, WI',
      image: client10,
      subMenu: [item1, item2, item3, item4, item5, item6],
    },
    {
      name: 'Princess',
      location: 'Brookfield, WI',
      image: client12,
      subMenu: [item5, item8, item4, item7, item5, item10],
    },
  ]

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
    {
      title: 'Our Journey Start',
      author: 'CalvinCarlo',
      time: '5 hours ago',
      favorite: 'Listed by',
      image: item3,
    },
    {
      title: 'BitBears',
      author: 'ButterFly',
      time: '8 hours ago',
      favorite: 'Liked by',
      image: gif2,
    },
    {
      title: 'Little Kokeshi #13',
      author: 'ButterFly',
      time: '10 hours ago',
      favorite: 'Liked by',
      image: item4,
    },
    {
      title: 'EVOL Floater',
      author: 'CutieGirl',
      time: '13 hours ago',
      favorite: 'Started Following',
      image: gif3,
    },
    {
      title: 'Smart Ape Club (SAC) - Limited Edition',
      author: 'CalvinCarlo',
      time: '18 hours ago',
      favorite: 'Listed by',
      image: gif4,
    },
    {
      title: 'THE SECRET SOCIETY XX #775',
      author: 'CalvinCarlo',
      time: '23 hours ago',
      favorite: 'Listed by',
      image: gif5,
    },
    {
      title: 'Create Your Own World',
      author: 'ButterFly',
      time: '24 hours ago',
      favorite: 'Liked by',
      image: item5,
    },
  ]

  const [items, setItems] = useState([]);
  // const [marketplace1, setMarketplace1] = useState({});
  // const [nft1, setNft1] = useState({});
  const [marketplace2, setMarketplace2] = useState({});
  const [nft2, setNft2] = useState({});
  const [item, setItem] = useState({});
  const [purchases, setPurchases] = useState([])
  const [listedItems, setListedItems] = useState([])
  const [soldItems, setSoldItems] = useState([])

  useEffect(() => {
    console.log({ items });
  }, [items]);

  //

  const nftAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const nftABI = nftData.abi;
  const marketplaceAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
  const marketplaceABI = marketplaceData.abi;

  const loadFile = function (event) {
    var image = document.getElementById(event.target.name)
    image.src = URL.createObjectURL(event.target.files[0])
  }
  const loadPurchasedItems = async () => {
    try {
     
      const {ethereum} = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum, "any");
        const signer = provider.getSigner();
        const nft2 = new ethers.Contract(nftAddress, nftABI, signer);
        
        const marketplace2 = new ethers.Contract(
          marketplaceAddress,
          marketplaceABI,
          signer
        );
        
           // Fetch purchased items from marketplace by quering Offered events with the buyer set as the user
      const filter =  marketplace2.filters.Bought(null,null,null,null,null,currentAccount)
      const results = await marketplace2.queryFilter(filter)
      //Fetch metadata of each nft and add that to listedItem object.
      const purchases = await Promise.all(results.map(async i => {
        // fetch arguments from each result
        i = i.args
       
        // get uri url from nft contract
        const uri = await nft2.tokenURI(i.tokenId)
        // use uri to fetch the nft metadata stored on ipfs 
        const response = await fetch(uri)
        const metadata = await response.json()
        // get total price of item (item price + fee)
        const totalPrice = await marketplace2.getTotalPrice(i.itemId)
        // define listed item object
        let purchasedItem = {
          totalPrice,
          price: i.price,
          itemId: i.itemId,
          name: metadata.name,
          description: metadata.description,
          image: metadata.image
        }
        return purchasedItem
      }))
     
      setPurchases(purchases)

      }
    } catch (error) {
      console.error(error.message);
      
    }
    
  };

  const loadListedItems = async () => {
    
    try {
     
      const {ethereum} = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum, "any");
        const signer = provider.getSigner();
        const nft2 = new ethers.Contract(nftAddress, nftABI, signer);
        
        const marketplace2 = new ethers.Contract(
          marketplaceAddress,
          marketplaceABI,
          signer
        );

         // Load all sold items that the user listed
      const itemCount = await marketplace2.itemCount()
      let listedItems = []
      let soldItems = []
      for (let indx = 1; indx <= itemCount; indx++) {
        const i = await marketplace2.items(indx)
        if (i.seller.toLowerCase() === currentAccount) {
          // get uri url from nft contract
          const uri = await nft2.tokenURI(i.tokenId)
          // use uri to fetch the nft metadata stored on ipfs 
          const response = await fetch(uri)
          const metadata = await response.json()
          // get total price of item (item price + fee)
          const totalPrice = await marketplace2.getTotalPrice(i.itemId)
          // define listed item object
          let item = {
            totalPrice,
            price: i.price,
            itemId: i.itemId,
            name: metadata.name,
            description: metadata.description,
            image: metadata.image
          }
          listedItems.push(item)
          // Add listed item to sold items array if sold
          if (i.sold) soldItems.push(item)
        }
      }
      
      setListedItems(listedItems)
      setSoldItems(soldItems)

       
       
      }
    } catch (error) {
      console.error(error.message);
      
    }
    
  };
  useEffect(() => {
    loadListedItems()
  }, [])

  useEffect(() => {
    loadPurchasedItems()
  }, [])

  return (
    <>
      

      {/* Start Home */}
      <section className="bg-creator-profile">

        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul
                className="nav nav-tabs border-bottom"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="Create-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#CreateItem"
                    type="button"
                    role="tab"
                    aria-controls="CreateItem"
                    aria-selected="true"
                  >
                     Purchases
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="Liked-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#Liked"
                    type="button"
                    role="tab"
                    aria-controls="Liked"
                    aria-selected="false"
                  >
                    Listed Items
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="Sale-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#Sale"
                    type="button"
                    role="tab"
                    aria-controls="Sale"
                    aria-selected="false"
                  >
                    Sold
                  </button>
                </li>

                {/* <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="Collection-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#Collection"
                    type="button"
                    role="tab"
                    aria-controls="Collection"
                    aria-selected="false"
                  >
                    Collection
                  </button>
                </li> */}

             

               

                
              </ul>

              <div className="tab-content mt-4 pt-2" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="CreateItem"
                  role="tabpanel"
                  aria-labelledby="Create-tab"
                >
                  {/* if value select purchased */}
                  {purchases.length > 0 ? 
                  <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4">
                    {purchases.map((item, idx) => (
             
              <div className="col" key={idx}>
                <div className="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1 p-3">
                  <div className="d-flex justify-content-between">
                    <div className="img-group">
                   
                    
                    
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
                      <img
                        src={item.image}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    {/* {data?.type && (
                      <div className="position-absolute top-0 start-0 m-2">
                        <a
                          href=""
                          onClick={e => e.preventDefault()}
                          className="badge badge-link bg-primary"
                        >
                          Rentals
                        </a>
                      </div>
                    )} */}
                    {/* <div className={`${data?.id ? '' : 'hide-data'} position-absolute bottom-0 start-0 m-2 bg-gradient-primary text-white title-dark rounded-pill px-3`}>
                      <i className="uil uil-clock"></i>
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
                      {item.name}
                    </a>

                    <div className="d-flex justify-content-between mt-2">
                      <small className="rate fw-bold">{ethers.utils.formatEther(item.totalPrice)}  ETH</small>
                      {/* <small className="text-dark fw-bold">
                        1 out of 10
                      </small> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
         
                  {/*end row*/}
                </div> :(
                   <div className="row justify-content-center">
                   <div className="col-lg-5 col-md-8 text-center">
                     <img src={ofcDesk} className="img-fluid" alt="" />

                     <div className="content">
                       <h5 className="mb-4">No Items</h5>
                       <p className="text-muted">
                         Show your appreciation for other's work by liking the
                         shots you love. We'll collect all of your likes here
                         for you to revisit anytime.
                       </p>
                     </div>
                   </div>
                   {/* end col */}
                 </div>
                )}
                  
                </div>
                {/* if value select Listed */}
                <div
                  className="tab-pane fade"
                  id="Liked"
                  role="tabpanel"
                  aria-labelledby="Liked-tab"
                >
                  
                  {listedItems.length > 0 ?
                  <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4">
                    {listedItems.map((item, idx) => (
             
              <div className="col" key={idx}>
                <div className="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1 p-3">
                  <div className="d-flex justify-content-between">
                    <div className="img-group">
                   
                    
                    
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
                      <img
                        src={item.image}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    {/* {data?.type && (
                      <div className="position-absolute top-0 start-0 m-2">
                        <a
                          href=""
                          onClick={e => e.preventDefault()}
                          className="badge badge-link bg-primary"
                        >
                          Rentals
                        </a>
                      </div>
                    )} */}
                    {/* <div className={`${data?.id ? '' : 'hide-data'} position-absolute bottom-0 start-0 m-2 bg-gradient-primary text-white title-dark rounded-pill px-3`}>
                      <i className="uil uil-clock"></i>
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
                      {item.name}
                    </a>

                    <div className="d-flex justify-content-between mt-2">
                      <small className="rate fw-bold">{ethers.utils.formatEther(item.totalPrice)}  ETH</small>
                      {/* <small className="text-dark fw-bold">
                        1 out of 10
                      </small> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
         
                  {/*end row*/}
                </div> :(
                   <div className="row justify-content-center">
                   <div className="col-lg-5 col-md-8 text-center">
                     <img src={ofcDesk} className="img-fluid" alt="" />

                     <div className="content">
                       <h5 className="mb-4">No Items</h5>
                       <p className="text-muted">
                         Show your appreciation for other's work by liking the
                         shots you love. We'll collect all of your likes here
                         for you to revisit anytime.
                       </p>
                     </div>
                   </div>
                   {/* end col */}
                 </div>
                )}
                  
                  {/* end row */}
                </div>
                {/* if value select on sale */}
                <div
                  className="tab-pane fade"
                  id="Sale"
                  role="tabpanel"
                  aria-labelledby="Sale-tab"
                >
                  <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4">
                    {onSaleData?.map((onSale, index) => (
                      <div className="col" key={index}>
                        <div className="card nft-items nft-primary nft-auction rounded-md shadow overflow-hidden mb-1 p-3">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <img
                                src={client01}
                                alt="user"
                                className="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle"
                              />
                              <a
                                href=""
                                onClick={e => e.preventDefault()}
                                className="text-dark small creator-name h6 mb-0 ms-2"
                              >
                                @StreetBoyyy
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
                              <img
                                src={onSale?.image}
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <div className="position-absolute top-0 start-0 m-2">
                              <a
                                href=""
                                onClick={e => e.preventDefault()}
                                className="badge badge-link bg-primary"
                              >
                                {onSale?.type}
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
                              {onSale?.title}
                            </a>

                            <div className="d-flex align-items-center justify-content-between mt-3">
                              <div className="">
                                <small className="mb-0 d-block fw-semibold">
                                  Current Bid:
                                </small>
                                <small className="rate fw-bold">200,000 USDC</small>
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
                    ))}
                  </div>
                  {/*end row*/}
                </div>
                {/* if value select collection */}
                <div
                  className="tab-pane fade "
                  id="Collection"
                  role="tabpanel"
                  aria-labelledby="Collection-tab"
                >
                  <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-8 text-center">
                      <img src={prodToCard} className="img-fluid" alt="" />

                      <div className="content mt-4">
                        <h5 className="mb-4">No Collection</h5>
                        <p className="text-muted">
                          Save interesting shots into personalized collections,
                          and discover new and interesting recommendations along
                          the way.
                        </p>
                      </div>
                    </div>
                    {/*end col*/}
                  </div>
                  {/*end row*/}
                </div>
                {/* if value select follower */}
                <div
                  className="tab-pane fade"
                  id="Followers"
                  role="tabpanel"
                  aria-labelledby="Followers-tab"
                >
                  <h5 className="mb-4">{followerData?.length} Followers</h5>
                  <div className="row g-4">
                    {followerData?.map(data => {
                      return (
                        <div className="col-md-6" key={data?.name}>
                          <div className="p-4 rounded-md shadow users user-primary">
                            <div className="d-flex align-items-center">
                              <div className="position-relative">
                                <img
                                  src={data?.image}
                                  className="avatar avatar-md-md rounded-pill shadow-sm img-thumbnail"
                                  alt=""
                                />
                                <div className="position-absolute bottom-0 end-0">
                                  <a
                                    href=""
                                    onClick={e => e.preventDefault()}
                                    className="btn btn-icon btn-pills btn-sm btn-primary"
                                  >
                                    <i className="uil uil-plus"></i>
                                  </a>
                                </div>
                              </div>

                              <div className="content ms-3">
                                <h6 className="mb-0">
                                  <a
                                    href="/creator-profile"
                                    onClick={e => {
                                      e.preventDefault()
                                      navigate('/creator-profile')
                                    }}
                                    className="text-dark name"
                                  >
                                    CutieGirl
                                  </a>
                                </h6>
                                <small className="text-muted d-flex align-items-center">
                                  <i className="uil uil-map-marker fs-5 me-1"></i>{' '}
                                  {data?.location}
                                </small>
                              </div>
                            </div>

                            <div className="border-top my-4"></div>
                            <div className="row row-cols-xl-6 g-3">
                              {data?.subMenu?.map((sub, index) => (
                                <div className="col" key={index * 10}>
                                  <a
                                    href="/item-detail-one"
                                    onClick={e => {
                                      e.preventDefault()
                                      navigate('/item-detail-one')
                                    }}
                                    className="user-item"
                                  >
                                    <img
                                      src={sub}
                                      className="img-fluid rounded-md shadow-sm"
                                      alt=""
                                    />
                                  </a>
                                </div>
                              ))}
                            </div>
                            {/*end row */}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
                {/* if value select activity */}
                <div
                  className="tab-pane fade"
                  id="Activites"
                  role="tabpanel"
                  aria-labelledby="Activites-tab"
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
                                  {data?.favorite === 'Started Following' ? (
                                    <i className="mdi mdi-account-check mdi-18px text-success"></i>
                                  ) : data?.favorite === 'Liked by' ? (
                                    <i className="mdi mdi-heart mdi-18px text-danger"></i>
                                  ) : (
                                    <i className="mdi mdi-format-list-bulleted mdi-18px text-warning"></i>
                                  )}
                                </div>
                                <div className="position-absolute top-0 start-0 translate-middle px-1 rounded-lg shadow-md bg-white"></div>
                                <div className="position-absolute top-0 start-0 translate-middle px-1 rounded-lg shadow-md bg-white"></div>
                              </div>

                              <span className="content ms-3">
                                <a
                                  href=""
                                  onClick={e => e.preventDefault()}
                                  className="text-dark title mb-0 h6 d-block"
                                >
                                  {data?.title}
                                </a>
                                <small className="text-muted d-block mt-1">
                                  {data?.favorite}
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
                  </div>
                </div>
                {/* if value select about */}
                <div
                  className="tab-pane fade"
                  id="About"
                  role="tabpanel"
                  aria-labelledby="About-tab"
                >
                  <h5 className="mb-4">Calvin Carlo</h5>

                  <p className="text-muted mb-0">
                    I have started my career as a trainee and prove my self and
                    achieve all the milestone with good guidance and reach up to
                    the project manager. In this journey, I understand all the
                    procedure which make me a good developer, team leader, and a
                    project manager.
                  </p>
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
      {/* footer */}
      <Footer />

      {/* Style switcher  */}
      <StyleSwitcher />
    </>
  )
}

export default CreateProfile
