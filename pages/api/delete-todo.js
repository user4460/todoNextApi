//https://illumination-k.dev/techblog/posts/prisma_next_simple_crud
import { NextApiHandler } from "next"
import prisma from "../../libs/prisma"

const handler = async (req, res) => {
   try {
      //prisma.todo.deleteとは、prismaのtodoモデルに対して、deleteメソッドを実行するという意味
      await prisma.todo.delete({ where: { id: req.body.id } })
      //res.status().send()とは、クライアントにステータスコードとデータを返すという意味
      res.status(200).send("ok");
   } catch (error) {
      console.log(error)
      res.status(500).json(error)
   }
}

export default handler;