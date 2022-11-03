// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const data = [
    {
      header: 'Web3',
      companies: [
        {
          image: 'https://picsum.photos/id/1/300/200',
          exit: true,
          multiple: 19,
        },
        { image: 'https://picsum.photos/id/2/300/200', mark: true },
        { image: 'https://picsum.photos/id/3/300/200' },
        { image: 'https://picsum.photos/id/4/300/200' },
        { image: 'https://picsum.photos/id/5/300/200' },
        { image: 'https://picsum.photos/id/6/300/200' },
        { image: 'https://picsum.photos/id/7/300/200' },
      ],
    },
    {
      header: 'FinTech',
      companies: [
        {
          image: 'https://picsum.photos/id/8/300/200',
          mark: true,
        },
        { image: 'https://picsum.photos/id/9/300/200', mark: true },
        { image: 'https://picsum.photos/id/10/300/200' },
        { image: 'https://picsum.photos/id/11/300/200' },
        { image: 'https://picsum.photos/id/12/300/200' },
      ],
    },
    {
      header: 'ESGxTech',
      companies: [
        {
          image: 'https://picsum.photos/id/13/300/200',
          mark: true,
        },
        { image: 'https://picsum.photos/id/14/300/200', exit: true },
        { image: 'https://picsum.photos/id/15/300/200' },
      ],
    },
    {
      header: 'Industry4',
      companies: [
        {
          image: 'https://picsum.photos/id/16/300/200',
          mark: true,
        },
        { image: 'https://picsum.photos/id/17/300/200' },
        { image: 'https://picsum.photos/id/18/300/200' },
        { image: 'https://picsum.photos/id/19/300/200' },
      ],
    },
  ]
  res.status(200).json({ data })
  // const response = await fetch('https://picsum.photos/')
  // res.status(200).json(response)
}
