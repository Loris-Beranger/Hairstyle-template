import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../components/data'

type Data = {
  specialists: {}
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    const specialists = await prisma.specialist.findMany()

    res.status(200).json({
      specialists: specialists,
    })
  } else {
  }
}
