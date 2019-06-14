var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // sets port to 3306
  port: 3306,

  // default
  user: "root",

  // personal password
  password: "",
  //using bd created in sql
  database: "playlistDB"
});

connection.connect(function(err) {
  if (err) throw err;
  //console port
  console.log("connected as id " + connection.threadId);
  //calling all song function before
  queryAllSongs();
  //calling dance song function before
  queryDanceSongs();
});

function queryAllSongs() {
  connection.query("SELECT * FROM songs", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(
        res[i].id +
          " | " +
          res[i].title +
          " | " +
          res[i].artist +
          " | " +
          res[i].genre
      );
    }
    console.log("-----------------------------------");
  });
}

function queryDanceSongs() {
  //looking for songs wih genre of dance
  var query = connection.query(
    "SELECT * FROM songs WHERE genre=?",
    ["Dance"],
    function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log(
          res[i].id +
            " | " +
            res[i].title +
            " | " +
            res[i].artist +
            " | " +
            res[i].genre
        );
      }
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}
