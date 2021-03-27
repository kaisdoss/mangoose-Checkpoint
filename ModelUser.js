// Always add this line when using Database!!!
require("./index.js");
const User = require("./user.js");
// Create and Save a Record of a Model:
const personne = new User({
  name: "Forat",
  age: 25,
  favoriteFoods: ["Pizza", "Lasagne"],
});

// Save a Record of a Model
personne
  .save()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error("Here Is Our Error: ", err);
  });

// To Create Many Records with model.create()

User.create([
  { name: "Seif", age: 32, favoriteFoods: ["Pizza", "Couscous"] },
  { name: "Mouna", age: 29, favoriteFoods: ["Spaghetti", "Leblebi"] },
  { name: "Amine", age: 43, favoriteFoods: ["Viande", "Scalope"] },
  { name: "Lampard", age: 44, favoriteFoods: ["Poisson", "Cake"] },
])
  .then((data) => {
    console.log("data", data);

    // Use model.find() to Search Your Database
    User.find({ name: "Seif" }, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log("3------------> find seif: ", data);
      }
    });

    // Use model.findOne() to Return a Single Matching Document

    User.findOne({ favoriteFoods: { $in: ["Pizza"] } }, function (err, res) {
      if (res) {
        console.log("food------>", res);
      } else console.log(err);
    });
    User.find({ favoriteFoods: { $all: ["Poisson"] } }, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });

    //           //  --------------------//

    //   Use model.findById() to Search Your Database By _id
    User.findById({ _id: "605d32367e9e99237cfd2563" }, (err, data) => {
      if (err) console.log(err);
      else console.log("findById(Mouna--->):", data);
    });

    // Perform Classic Updates by Running Find, Edit, then Save
    User.findOne({ name: "Amine" }, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        data.age = 13;
        data.favoriteFoods.push("Sushi");
        data.save((err, update) => {
          if (err) {
            console.log(err);
          }
          console.log(update);
        });
      }
    });
    //findOneAndUpdate
    User.findOneAndUpdate({ name: "lampard" }, { age: 50 }, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log("The New Data Is: ", data);
      }
    });

    // findByIdAndRemove
    User.findByIdAndRemove("605d32367e9e99237cfd2562", (err, data) => {
      if (err) console.log(err);
      else console.log('find by Id--->:',data);
    });
    // remove
    User.deleteOne({ age: { $gte: 30 } }, (err, data) => {
      if (err) console.log(err);
      else console.log(data);
    });

    // Chain Search Query
    const queryChain = (done) => {
      const foodToSearch = "burrito";
      Prototype.find({ favoriteFoods: foodToSearch })
        .sort({ name: "asc" })
        .limit(2)
        .select("-age")
        .exec((err, data) => {
          if (err) {
            console.error(err);
          }
          done(null,'ggggggggggg', data);
          console.log('queryChain here---->:',data);
        });
    };
  })
  .catch((err) => {
    console.log("Can't Add Duplicate Name!", err);
  });
