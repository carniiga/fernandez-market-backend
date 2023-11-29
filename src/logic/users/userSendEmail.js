import nodemailer from "nodemailer"

 export const transporter = nodemailer.createTransport({
    service:"gmail",
    host: "localhost",
    port: 3000,
    secure: true,
    auth: {
      user: "carniigafernandez@gmail.com",
      pass: "upkt nfbx xsya wxpm",
    }
  
  }
 
  );



