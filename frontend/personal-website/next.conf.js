import dotenv from "dotenv";
dotenv.config();

module.exports = {
  env: {
    REACT_APP_SERVICE_ID: process.env.REACT_APP_SERVICE_ID,
    REACT_APP_TEMPLATE_ID: process.env.REACT_APP_TEMPLATE_ID,
    REACT_APP_USER_ID: process.env.REACT_APP_USER_ID,
  },
};
