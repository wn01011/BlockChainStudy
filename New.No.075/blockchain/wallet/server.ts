import express, { Express, Request, Response } from "express";
import axios from "axios";
import path from "path";
import Wallet from "./wallet";
import elliptic from "elliptic";

const app: Express = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/wallet/create", (req: Request, res: Response) => {
  res.json(new Wallet());
});

app.get("/wallet/list", (req: Request, res: Response) => {
  res.json(Wallet.getList());
});

app.get("/wallet/:address", async (req: Request, res: Response) => {
  const address: string = req.params.address;
  const privateKey: string = Wallet.getWalletPrivateKey(address);
  const wallet = new Wallet(privateKey);
  const balance = (
    await axios.post(
      "http://localhost:8080/balance",
      { address },
      {
        headers: {
          Authorization:
            "Basic " + Buffer.from("admin:1234").toString("base64"),
        },
      }
    )
  ).data.balance;
  wallet.balance = balance;

  res.json(wallet);
});

app.post("/transaction/send", (req: Request, res: Response) => {
  const signature: elliptic.ec.Signature = Wallet.createSign(req.body);
  console.log(signature);

  const txObj = {
    sender: req.body.sender.publicKey,
    received: req.body.received,
    amount: req.body.amount,
    signature,
  };
  axios.post("http://localhost:8080/transaction/send", txObj, {
    headers: {
      Authorization: "Basic " + Buffer.from("admin:1234").toString("base64"),
      // HTTP 통신에서의 인증 방법
      // Authorization: Basic 방식은 base64 포멧을 기본으로 한다.
    },
  });

  res.json(signature);
});

app.post("/block/mine", (req: Request, res: Response) => {
  axios
    .post("http://localhost:8080/block/mine", req.body, {
      headers: {
        Authorization: "Basic " + Buffer.from("admin:1234").toString("base64"),
      },
    })
    .then(({ data }) => {
      res.send(data);
    });
});

app.post("/balance", async (req: Request, res: Response) => {
  const balance = (
    await axios.post("http://localhost:8080/balance", req.body, {
      headers: {
        Authorization: "Basic " + Buffer.from("admin:1234").toString("base64"),
      },
    })
  ).data.balance;
  res.json({ balance });
});

app.listen(9514, () => {
  console.log("wallet server open 9514");
});
