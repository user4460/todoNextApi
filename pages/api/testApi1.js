import { NextApiRequest, NextApiResponse } from "next";

export default (req, res) => {
  const method = req.method;
  switch (method) {
    case "GET": {
      const { val1, val2 } = req.query;
      const result = Number(val1) + Number(val2);
      res.status(200).json({ result });
      break;
    }
    case "POST": {
      const { val1, val2 } = req.body;
      const result = val1 + val2;
      res.status(200).json({ result });
      break;
    }
    default: {
      res.status(403).end();
    }
  }
};
