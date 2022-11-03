// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const data = [
    {
      header: 'Web3',
      subHeader: 'NeoSwap',
      logo: 'https://picsum.photos/id/1/300/300',
      image: 'https://picsum.photos/id/2/300/200',
      description: 'Perfect NFT swaps, by design.',
    },
    {
      header: 'ESGxTech',
      subHeader: 'Cerqular',
      logo: 'https://picsum.photos/id/3/300/200',
      image: 'https://picsum.photos/id/4/300/200',
      description: 'The largest and fastest growing sustainable marketplace.',
    },
    {
      header: 'Industry4.0',
      subHeader: 'Antiverse',
      logo: 'https://picsum.photos/id/5/300/200',
      image: 'https://picsum.photos/id/6/300/200',
      description: 'Perfect NFT swaps, by design.',
    },
    {
      header: 'Web3',
      subHeader: 'Bunch Live',
      logo: 'https://picsum.photos/id/7/300/200',
      image: 'https://picsum.photos/id/8/300/200',
      description: 'Roblox meets Discord on the blockchain.',
    },
    {
      header: 'Web3',
      subHeader: 'NeoSwap',
      logo: 'https://picsum.photos/id/9/300/200',
      image: 'https://picsum.photos/id/10/300/200',
      description: 'Perfect NFT swaps, by design.',
    },
  ]
  res.status(200).json({ data })
  // const response = await fetch('https://picsum.photos/')
  // res.status(200).json(response)
}
