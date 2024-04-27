import type {NextApiRequest, NextApiResponse} from 'next';
import {PrismaClient} from '@prisma/client';
import { use } from 'react';
const prisma = new PrismaClient();

export default async function usersServices(
  req: NextApiRequest,
  res: NextApiResponse
)  {
  if (req.method === 'GET') {
   
    const {id} = req.query;

    if (id) {
      const user = await prisma.user.findFirst({
        where:{
            id: Number(id),
        }
      });
      if (!user) {
        return res.json({error: 'Not found'});
      }
      res.json(user);
    } else {
        const users = await prisma.user.findMany()
      res.json(users);
    }
    
  }
  if (req.method === 'POST') {
    const { email , name} = req.body;
    const user = await prisma.user.create({
        data: {
          email ,
          name 
        },
    })
    return res.json(user);
  }
  if (req.method === 'PUT') {
    let data = await prisma.user.update({
      where: {
        id: req.body.id,
      },
      data: {
        email: req.body.email,
        name: req.body.name
      },
    });
    return res.json(data);
  }
  if (req.method === 'DELETE') {
    let data = await prisma.user.delete({
      where: {
        id: req.body.id,
      },
    });
    return res.json(data);
  }
  return res.json({});
}