import app from "./server.js";
import mongodb from "mongodb";
//here we are going to set our database funtionality and out env variables
import dotenv from "dotenv";
import RestaurantsDAO from "./api/dao/restaurants.dao.js";

dotenv.config(); // we need to config the env file
const MongoClient = mongodb.MongoClient; // access to the mongo client

const port = process.env.PORT || 8000; // use the port specified in the .env or use the 8000
MongoClient.connect(process.env.RESTREVIEWS_DB_URI, {
  // we use the mongoClient to connect to the uri "env var in the .env"
  maxpoolSize: 50, // specify a maxPoolSize of 50
  wtimeoutMS: 2500, // time out in  ms
  useNewUrlParser: true,
})
  .catch((err) => {
    // we catch any errors in this catch block
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    await RestaurantsDAO.injectDB(client);
    //if everything is okay then we start listening on the port
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  });
