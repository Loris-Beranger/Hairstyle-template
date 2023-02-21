import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../components/data'

type Data = {
  services: {}
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    const services = await prisma.service.findMany()

    res.status(200).json({
      services: services,
    })
  } else {
  }
}
