import { createContext, useState, useEffect, useContext } from "react";
import { ethers } from "ethers";
import nftData from "../utils/Nft.json";
import marketplaceData from "../utils/Marketplace.json";

const ItemContext = createContext({});

const ItemContextProvider = ({ children }) => {
  const [globalItems, setGlobalItems] = useState([]);
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

        const marketplace2 = new ethers.Contract(
          marketplaceAddress,
          marketplaceABI,
          signer
        );

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

        setGlobalItems(items);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadMarketplaceItems();
  }, []);

  useEffect(() => {
    console.log("HALA!!", { globalItems });
  }, [globalItems]);

  return (
    <ItemContext.Provider value={{ globalItems }}>
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;

export const useItemContext = () => useContext(ItemContext);
