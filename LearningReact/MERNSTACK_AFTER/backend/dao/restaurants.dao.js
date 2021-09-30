let restaurants;

export default class RestaurantsDAO {
  static async injectDB(conn) {
    //method to inject the database
    if (restaurants) {
      //if it already has something in it just return
      return;
    }
    try {
      //we try to connect to the .db(env variable of the db that we want, collection means that we only want the restaurants out of that db
      restaurants = await conn
        .db(process.env.RESTREVIEWS_NS)
        .collection("restaurants");
    } catch (err) {
      console.error("unable to connect to the database " + err);
    }
  }

  static async getRestaurants({
    filters = null,
    page = 0,
    restaurantsPerPage = 20,
  } = {}) {
    let query;
    if (filters) {
      if ("name" in filters) {
        query = { $text: { $search: filters["name"] } };
      } else if ("cuisine" in filters) {
        query = { cuisine: { $eq: filters["cuisine"] } };
      } else if ("zipcode" in filters) {
        query = { "address.zipcode": { $eq: filters["zipcode"] } };
      }
    }

    let cursor;

    try {
      cursor = await restaurants.find(query);
    } catch (err) {
      console.error("unable to issue the command " + err);
      return { restaurantsList: [], totalNumRestaurants: 0 };
    }

    const displayCursor = cursor
      .limit(restaurantsPerPage)
      .skip(restaurantsPerPage * page);

    try {
      const restaurantsList = await displayCursor.toArray();
      const totalNumRestaurants = await restaurants.countDocuments(query);
      return { restaurantsList, totalNumRestaurants };
    } catch (e) {
      console.error(
        "unable to convert cursor to array or problem counting documents " + e
      );
      return { restaurantsList: [], totalNumRestaurants: 0 };
    }
  }
}
