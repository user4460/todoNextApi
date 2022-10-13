//https://illumination-k.dev/techblog/posts/prisma_next_simple_crud
import type { NextApiHandler } from "next"
import prisma from "../../libs/prisma"

//nextapihandlerを使うと、reqとresを使える
const handler: NextApiHandler = async (req, res) => {
   if (!req.body.id) {
      res.status(400).send("Bad Request. need id!");
      return
   }
   try {
      //prisma.todo.updateとは、prismaのtodoモデルに対して、updateメソッドを実行するという意味
      await prisma.todo.update({ data: { ...req.body, updatedAt: new Date() }, where: { id: req.body.id } })
      res.status(200).send("ok");
   } catch (error) {
      console.log(error)
      res.status(500).json(error)
   }
}

export default handler;