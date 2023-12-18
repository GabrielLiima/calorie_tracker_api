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
        },
        type: {
          type: String,
          required: true,
        },
        imageUrl: {
          type: String,
        },
        amount: {
          type: Number,
        },
        calories: {
          type: Number,
        },
        protein: {
          type: Number,
        },
        carbs: {
          type: Number,
        },
        fat: {
          type: Number,
        },
        percentProtein: {
          type: Number,
        },
        percentCarbs: {
          type: Number,
        },
        percentFat: {
          type: Number,
        }
      }
    ]
  },
  dailyCalories: {
    type: Number,
    required: true,
  },
  dailyProtein: {
    type: Number,
    required: true,
  },
  dailyCarbs: {
    type: Number,
    required: true,
  },
  dailyFat: {
    type: Number,
    required: true,
  },
  meals: {
    items: [
      {
        id: {
          type: Number,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        imageUrl: {
          type: String,
          required: true,
        },
        amount: {
          type: Number,
          required: true,
        },
        calories: {
          type: Number,
          required: true,
        },
        protein: {
          type: Number,
          required: true,
        },
        carbs: {
          type: Number,
          required: true,
        },
        fat: {
          type: Number,
          required: true,
        },
        percentProtein: {
          type: Number,
          required: true,
        },
        percentCarbs: {
          type: Number,
          required: true,
        },
        percentFat: {
          type: Number,
          required: true,
        },
        category: {
          type: String,
          required: true,
        },
        type: {
          type: String,
          required: true,
        },
        day: {
          type: String,
          required: true,
        },
        month: {
          type: String,
          required: true,
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

userSchema.methods.addMeal = function(meal) {
  this.meals.items.push(meal);

  return this.save();
}

module.exports = mongoose.model("User", userSchema);
