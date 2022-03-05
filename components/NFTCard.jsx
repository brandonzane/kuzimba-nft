import { useEffect, useState } from 'react'

const style = {}

const NFTCard = ({ nftItem }) => {
  return <img src={nftItem.image} alt="" />
}

export default NFTCard
