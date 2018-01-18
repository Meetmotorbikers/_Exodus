UserModel = {
  firstName: String,
  lastName: String,
  email: String,
  hashedPassword: String,
  bike: String,
  picture: String,
  tours: {
    pastTours: Array, // arr of tours id
    futureTours: Array // arr of tours id
  },
  friends: Array // arr of users id
};

TourModel = {
  id: String,
  name: String,
  description: String,
  startDate: String,
  startTime: String,
  maxRidersNumber: Number,
  startPoint: String,
  endpoint: String,
  stops: Set, // set of points on the map
  route: Set, // set of points on the map
  riders: Array // arr of users id
};
