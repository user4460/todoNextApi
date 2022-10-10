//https://illumination-k.dev/techblog/posts/prisma_next_simple_crud
import { NextApiHandler } from "next"
import prisma from "../../libs/prisma"

const handler= async (req, res) => {
   try {
      const todos = await prisma.todo.findMany();
      res.status(200).json(todos);
   } catch (error) {
      console.log(error)
      res.status(500).json(error)
   }
}

export default handler;