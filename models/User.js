const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  favorites: {
    items: [
      {
        id: {
          type: Number,
          required: true,
        },
        name: {
          type: String,
          required: true
        }
      }
    ]
  }
});

userSchema.methods.addFavorite = function(item) {
  const it = this.favorites.items.find(
    (i) => i.id == item.id
  );

  if(!it) {
    this.favorites.items.push(item);
  }

  return this.save();
}

userSchema.methods.removeFavorite = function(id) {
  this.favorites.items = this.favorites.items.filter((i) => i.id != id);

  return this.save();
}

module.exports = mongoose.model("User", userSchema);
