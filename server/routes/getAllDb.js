var express = require("express");
var router = express.Router();
var conncectDb = require("../helpers/connectDB");

/* GET home page. */
router.get("/", function (req, res, next) {
    conncectDb.connectToServer(function (err, client) {
    if (err) {
      console.log(err);
    }
    else{
        var db = conncectDb.getDb();

        remote_devices_collection = db.collection( 'remote-device' );
        remote_devices_collection.find().toArray((err, results) => {
            res.json(results);
        });

    }
  });

});

module.exports = router;
