//https://qiita.com/tatsuya-miyamoto/items/f99eb069f65b30f2f816#%E5%9F%BA%E6%9C%AC%E7%B3%BB-1
import {NextApiRequest, NextApiResponse} from "next";
import { setCookie } from "../../../modules/cookie";

export default (req , res) => {
  const method = req.method;
  switch (method) {
    case "GET": {
      const { userId } = req.query;
      setCookie(res, "userId", userId);
      res.status(200).json({ header: res.getHeader("Set-Cookie") });
      break;
    }
    default: {
      res.status(403).end();
    }
  }
};
