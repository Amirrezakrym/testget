import type {NextApiRequest, NextApiResponse} from 'next';
import {PrismaClient} from '@prisma/client';
import {NextResponse} from 'next/server';

const prisma = new PrismaClient();

interface IRegisterBody {
  email: string;
  name: string; 
}

export default async function usersServices(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== 'POST')
      return res.status(405).json({message: 'Method not allowed'});

    const data: IRegisterBody = req.body;
    if (!data.email ||!data.name) {
      return res.status(400).json({message: 'please fill all the fields'});
    }

    const newUser = await prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
      },
    });

    return res
      .status(201)
      .json({message: 'user created successfully', user: newUser});
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: 'Internal server error'});
  }
}
