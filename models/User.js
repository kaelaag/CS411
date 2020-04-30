const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

UserSchema.set('toObject', {
	transform: function (doc, ret, options)  {
		let returnJson = {
			_id: ret._id,
			email: ret.email,
			name: ret.name,
			date: ret.date
		}
		return returnJson;
	}
});

module.exports = User = mongoose.model("users", UserSchema);
