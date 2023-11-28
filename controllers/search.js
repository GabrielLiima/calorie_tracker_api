const axios = require("axios");

exports.getFood = (req, res) => {
  const query = req.params.query;

  // res.json({
  //   results: [
  //     { id: 9003, name: "apple", image: "apple.jpg" },
  //     { id: 9019, name: "applesauce", image: "applesauce.png" },
  //     { id: 9016, name: "apple juice", image: "apple-juice.jpg" },
  //     { id: 1009016, name: "apple cider", image: "apple-cider.jpg" },
  //     { id: 10019297, name: "apple jelly", image: "apple-jelly.jpg" },
  //     { id: 19294, name: "apple butter", image: "apple-jelly.jpg" },
  //     { id: 1042035, name: "apple pie spice", image: "garam-masala.jpg" },
  //     { id: 19312, name: "apple pie filling", image: "apple-pie-slice.jpg" },
  //     {
  //       id: 2048,
  //       name: "apple cider vinegar",
  //       image: "apple-cider-vinegar.jpg",
  //     },
  //     { id: 10123, name: "applewood smoked baconnnnnnnnnnnnnnnnn", image: "raw-bacon.png" },
  //   ],
  //   offset: 0,
  //   number: 10,
  //   totalResults: 39,
  // });

  axios
    .get(
      `https://api.spoonacular.com/food/ingredients/search?apiKey=f0f9bb36c7dc469fb3d02d7fe7cfbc26&query=${query}`
    )
    .then((response) => {
      res.setHeader("content-type", "application/json");
      res.json(response.data);
    })
    .catch((err) => console.log(err));
};

exports.getDetails = (req, res) => {
  const id = req.params.id;

  // res.json({
  //   id: 9266,
  //   original: "pineapples",
  //   originalName: "pineapples",
  //   name: "pineapples",
  //   amount: 100,
  //   unit: "",
  //   unitShort: "",
  //   unitLong: "",
  //   possibleUnits: ["piece", "slice", "fruit", "g", "oz", "cup", "serving"],
  //   estimatedCost: { value: 29900, unit: "US Cents" },
  //   consistency: "solid",
  //   shoppingListUnits: ["pieces"],
  //   aisle: "Produce",
  //   image: "pineapple.jpg",
  //   meta: [],
  //   nutrition: {
  //     nutrients: [
  //       { name: "Alcohol", amount: 0, unit: "g", percentOfDailyNeeds: 0 },
  //       {
  //         name: "Net Carbohydrates",
  //         amount: 10588.5,
  //         unit: "g",
  //         percentOfDailyNeeds: 3850.36,
  //       },
  //       {
  //         name: "Vitamin B3",
  //         amount: 452.5,
  //         unit: "mg",
  //         percentOfDailyNeeds: 2262.5,
  //       },
  //       {
  //         name: "Calories",
  //         amount: 45250,
  //         unit: "kcal",
  //         percentOfDailyNeeds: 2262.5,
  //       },
  //       {
  //         name: "Sugar",
  //         amount: 8914.25,
  //         unit: "g",
  //         percentOfDailyNeeds: 9904.72,
  //       },
  //       {
  //         name: "Fiber",
  //         amount: 1267,
  //         unit: "g",
  //         percentOfDailyNeeds: 5068,
  //       },
  //       {
  //         name: "Vitamin B12",
  //         amount: 0,
  //         unit: "µg",
  //         percentOfDailyNeeds: 0,
  //       },
  //       {
  //         name: "Poly Unsaturated Fat",
  //         amount: 36.2,
  //         unit: "g",
  //         percentOfDailyNeeds: 0,
  //       },
  //       {
  //         name: "Potassium",
  //         amount: 98645,
  //         unit: "mg",
  //         percentOfDailyNeeds: 2818.43,
  //       },
  //       {
  //         name: "Sodium",
  //         amount: 905,
  //         unit: "mg",
  //         percentOfDailyNeeds: 39.35,
  //       },
  //       {
  //         name: "Calcium",
  //         amount: 11765,
  //         unit: "mg",
  //         percentOfDailyNeeds: 1176.5,
  //       },
  //       {
  //         name: "Cholesterol",
  //         amount: 0,
  //         unit: "mg",
  //         percentOfDailyNeeds: 0,
  //       },
  //       {
  //         name: "Folic Acid",
  //         amount: 0,
  //         unit: "µg",
  //         percentOfDailyNeeds: 0,
  //       },
  //       {
  //         name: "Copper",
  //         amount: 99.55,
  //         unit: "mg",
  //         percentOfDailyNeeds: 4977.5,
  //       },
  //       {
  //         name: "Vitamin B1",
  //         amount: 71.5,
  //         unit: "mg",
  //         percentOfDailyNeeds: 4766.33,
  //       },
  //       {
  //         name: "Choline",
  //         amount: 4977.5,
  //         unit: "mg",
  //         percentOfDailyNeeds: 0,
  //       },
  //       {
  //         name: "Carbohydrates",
  //         amount: 11855.5,
  //         unit: "g",
  //         percentOfDailyNeeds: 3951.83,
  //       },
  //       {
  //         name: "Vitamin B6",
  //         amount: 101.36,
  //         unit: "mg",
  //         percentOfDailyNeeds: 5068,
  //       },
  //       {
  //         name: "Vitamin A",
  //         amount: 52490,
  //         unit: "IU",
  //         percentOfDailyNeeds: 1049.8,
  //       },
  //       {
  //         name: "Folate",
  //         amount: 16290,
  //         unit: "µg",
  //         percentOfDailyNeeds: 4072.5,
  //       },
  //       {
  //         name: "Saturated Fat",
  //         amount: 8.15,
  //         unit: "g",
  //         percentOfDailyNeeds: 50.91,
  //       },
  //       {
  //         name: "Vitamin B5",
  //         amount: 192.76,
  //         unit: "mg",
  //         percentOfDailyNeeds: 1927.65,
  //       },
  //       {
  //         name: "Fat",
  //         amount: 108.6,
  //         unit: "g",
  //         percentOfDailyNeeds: 167.08,
  //       },
  //       {
  //         name: "Magnesium",
  //         amount: 10860,
  //         unit: "mg",
  //         percentOfDailyNeeds: 2715,
  //       },
  //       {
  //         name: "Vitamin D",
  //         amount: 0,
  //         unit: "µg",
  //         percentOfDailyNeeds: 0,
  //       },
  //       { name: "Caffeine", amount: 0, unit: "mg", percentOfDailyNeeds: 0 },
  //       {
  //         name: "Iron",
  //         amount: 262.45,
  //         unit: "mg",
  //         percentOfDailyNeeds: 1458.06,
  //       },
  //       {
  //         name: "Phosphorus",
  //         amount: 7240,
  //         unit: "mg",
  //         percentOfDailyNeeds: 724,
  //       },
  //       {
  //         name: "Zinc",
  //         amount: 108.6,
  //         unit: "mg",
  //         percentOfDailyNeeds: 724,
  //       },
  //       {
  //         name: "Selenium",
  //         amount: 90.5,
  //         unit: "µg",
  //         percentOfDailyNeeds: 129.29,
  //       },
  //       {
  //         name: "Vitamin E",
  //         amount: 18.1,
  //         unit: "mg",
  //         percentOfDailyNeeds: 120.67,
  //       },
  //       { name: "Lycopene", amount: 0, unit: "µg", percentOfDailyNeeds: 0 },
  //       {
  //         name: "Protein",
  //         amount: 488.7,
  //         unit: "g",
  //         percentOfDailyNeeds: 977.4,
  //       },
  //       {
  //         name: "Manganese",
  //         amount: 838.93,
  //         unit: "mg",
  //         percentOfDailyNeeds: 41946.75,
  //       },
  //       {
  //         name: "Mono Unsaturated Fat",
  //         amount: 11.77,
  //         unit: "g",
  //         percentOfDailyNeeds: 0,
  //       },
  //       {
  //         name: "Vitamin C",
  //         amount: 43259,
  //         unit: "mg",
  //         percentOfDailyNeeds: 52435.15,
  //       },
  //       {
  //         name: "Vitamin K",
  //         amount: 633.5,
  //         unit: "µg",
  //         percentOfDailyNeeds: 603.33,
  //       },
  //       {
  //         name: "Vitamin B2",
  //         amount: 28.96,
  //         unit: "mg",
  //         percentOfDailyNeeds: 1703.53,
  //       },
  //     ],
  //     properties: [
  //       { name: "Glycemic Index", amount: 58.67, unit: "" },
  //       { name: "Glycemic Load", amount: 6211.92, unit: "" },
  //       { name: "Nutrition Score", amount: 86.95652173913044, unit: "%" },
  //     ],
  //     flavonoids: [
  //       { name: "Cyanidin", amount: 0, unit: "mg" },
  //       { name: "Petunidin", amount: 0, unit: "mg" },
  //       { name: "Delphinidin", amount: 0, unit: "mg" },
  //       { name: "Malvidin", amount: 0, unit: "mg" },
  //       { name: "Pelargonidin", amount: 0, unit: "mg" },
  //       { name: "Peonidin", amount: 0, unit: "mg" },
  //       { name: "Catechin", amount: 0, unit: "mg" },
  //       { name: "Epigallocatechin", amount: 0, unit: "mg" },
  //       { name: "Epicatechin", amount: 0, unit: "mg" },
  //       { name: "Epicatechin 3-gallate", amount: 0, unit: "mg" },
  //       { name: "Epigallocatechin 3-gallate", amount: 0, unit: "mg" },
  //       { name: "Theaflavin", amount: 0, unit: "" },
  //       { name: "Thearubigins", amount: 0, unit: "" },
  //       { name: "Eriodictyol", amount: 0, unit: "" },
  //       { name: "Hesperetin", amount: 0, unit: "mg" },
  //       { name: "Naringenin", amount: 0, unit: "mg" },
  //       { name: "Apigenin", amount: 0, unit: "mg" },
  //       { name: "Luteolin", amount: 9.05, unit: "mg" },
  //       { name: "Isorhamnetin", amount: 0, unit: "" },
  //       { name: "Kaempferol", amount: 0, unit: "mg" },
  //       { name: "Myricetin", amount: 9.05, unit: "mg" },
  //       { name: "Quercetin", amount: 126.7, unit: "mg" },
  //       { name: "Theaflavin-3,3'-digallate", amount: 0, unit: "" },
  //       { name: "Theaflavin-3'-gallate", amount: 0, unit: "" },
  //       { name: "Theaflavin-3-gallate", amount: 0, unit: "" },
  //       { name: "Gallocatechin", amount: 0, unit: "mg" },
  //     ],
  //     caloricBreakdown: {
  //       percentProtein: 3.88,
  //       percentFat: 1.94,
  //       percentCarbs: 94.18,
  //     },
  //     weightPerServing: { amount: 90500, unit: "g" },
  //   },
  //   categoryPath: ["tropical fruit", "fruit"],
  // });

  axios
    .get(
      `https://api.spoonacular.com/food/ingredients/${id}/information?apiKey=f0f9bb36c7dc469fb3d02d7fe7cfbc26&amount=100`
    )
    .then((response) => {
      res.setHeader("content-type", "application/json");
      res.json(response.data);
    })
    .catch((err) => console.log(err));
};
