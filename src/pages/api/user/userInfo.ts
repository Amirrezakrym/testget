import {PrismaClient} from '@prisma/client';
import type {NextApiRequest, NextApiResponse} from 'next';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export default async function usersServices(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== 'GET')
      return res.status(405).json({message: 'Method not allowed'});

   
    
    
    const user = await prisma.user.findFirst({
      select: {
        id: true,
        email: true,
        name: true,
      },
    });
    return res.status(200).json({data: user});
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: 'Internal server error'});
  }
}
