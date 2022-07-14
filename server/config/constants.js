import dotenv from "dotenv";
dotenv.config();

const config = {
 
    JWT_EXPIRE: 7*24*60*60*1000,

    MAILING_SERVICE_CLIENT_ID : process.env.MAILING_SERVICE_CLIENT_ID ,
    MAILING_SERVICE_CLIENT_SECRET : process.env.MAILING_SERVICE_CLIENT_SECRET,
    MAILING_SERVICE_REFRESH_TOKEN : process.env.MAILING_SERVICE_REFRESH_TOKEN ,
    SENDER_EMAIL_ADDRESS : process.env.SENDER_EMAIL_ADDRESS,

};

export default config;