//https://illumination-k.dev/techblog/posts/prisma_next_simple_crud
//nextapihandlerを使うと、reqとresを使える
import { NextApiHandler } from "next"
import prisma from "../../libs/prisma"

//req.bodyには、クライアントから送られてきたデータが入っている
//res.status(200)で、クライアントに200番のステータスコードを返す
const handler = async (req, res) => {
   try {
      //prisma.todo.createとは、prismaのtodoモデルに対して、createメソッドを実行するという意味
      await prisma.todo.create({ data: { ...req.body, updatedAt: new Date() } })
      //res.status().send()とは、クライアントにステータスコードとデータを返すという意味
      res.status(200).send("ok");
   } catch (error) {
      console.log(error)
      //res.status(500).json(error)とは、クライアントにステータスコードとエラーを返すという意味
      res.status(500).json(error)
   }
}

export default handler;