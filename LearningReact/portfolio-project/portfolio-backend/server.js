import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8001;

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.post("/mail", (req, res) => {
  // this is the route where we are going to post the email sent info
  const { email, msg } = req.body;
  //deconstructing the req.body that contains both the email of the sender
  //and also the body of the email
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "lolihrndz1997@gmail.com",
      pass: "Lolito12",
    },
  });

  const mailData = {
    from: email,
    to: "lolihrndz1997@gmail.com",
    subject: "portfolio email",
    text: msg + " email: " + email,
  };

  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("email sent" + info.response);
      res.status(200);
    }
  });
});

app.listen(port, () => {
  console.log("listening on port " + port);
});
