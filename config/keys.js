const mongoPass = require("./passwords").mongoPass;

module.exports = {
  //mongoURI: "mongodb+srv://pct:" + mongoPass + "@cluster0-9gtht.mongodb.net/test?retryWrites=true&w=majority",
  mongoURI: "mongodb://localhost:27017", //for local
  secretOrKey: "secret",

  fitbit: {
    clientID: "22BQNG",
    clientSecret: "8410a8c8fc9e51258b0d8cad6526278d"
  }
};
