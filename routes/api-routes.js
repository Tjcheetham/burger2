const db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
  // Search for Specific Character (or all characters) then provides JSON
  app.get("/", async function (req, res) {
    try {
      const dbBurgers = await db.Burger.findAll();

      const burgerObject = {burger: dbBurgers};
      // console.log(burgerObject);
      res.render('index', burgerObject );
    }
    catch (err) {
      console.log(err)

      res.status(500).end();
    };
  });

  // // GET route for getting all of the burgers
  // app.get("/api/burgers", function (req, res) {
  //   var query = {};
  //   if (req.query.burger_id) {
  //     query.BurgerId = req.query.burger_id;
  //   }
  //   // Here we add an "include" property to our options in our findAll query
  //   // We set the value to an array of the models we want to include in a left outer join
  //   // In this case, just db.Author
  //   db.Burger.findAll({}).then(function (dbBurger) {
  //     res.json(dbBurger);
  //   });
  // });

  // // Get route for retrieving a single post
  // app.get("/api/burgers/:id", function (req, res) {
  //   // Here we add an "include" property to our options in our findOne query
  //   // We set the value to an array of the models we want to include in a left outer join
  //   // In this case, just db.Author
  //   db.Burger.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function (dbBurger) {
  //     res.json(dbBurger);
  //   });
  // });

  // // POST route for saving a new burger
  // app.post("/api/burgers", function (req, res) {
  //   db.Burger.create({ burger_name })
  //   .then(function (dbBurger) {
  //     res.json(dbBurger);
  //   });
  // });

  app.post("/api/burgers", async function (req, res) {
    try {
        const { burger_name } = req.body;
        const burgers = await db.Burger.create({ burger_name });
        res.json(burgers);
    }
    catch (err) {
        console.log(err)
        res.status(500).end();
    }
});

  // DELETE route for deleting burgers
  app.delete("/api/burgers/:id", function (req, res) {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbBurger) {
      res.json(dbBurger);
    });
  });

  // PUT route for updating burgers
  app.put("/api/burgers/:id", function (req, res) {
    console.log(req.params.id);
    db.Burger.update(
      {
        devoured: true
      },
      {
        where: {
          id: req.params.id
        }
      }).then(function (dbBurger) {
        console.log(dbBurger);
        res.json(dbBurger);
      });
  });

};