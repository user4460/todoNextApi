//https://illumination-k.dev/techblog/posts/prisma_next_simple_crud
import { NextApiHandler } from "next"
import prisma from "../../libs/prisma"

const handler = async (req, res) => {
   try {
      await prisma.todo.delete({ where: { id: req.body.id } })
      res.status(200).send("ok");
   } catch (error) {
      console.log(error)
      res.status(500).json(error)
   }
}

export default handler;