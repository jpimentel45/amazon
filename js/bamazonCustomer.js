var mysql = require("mysql");
var inquirer = require("inquirer");
// create host for sql database
var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "nauj1994",

  database: "bamazon_db"
});
//call back function if no error merch will be displayed
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected: " + connection.threadId);
  //calling function before
  merch();
});

//display product table and availability of product
function merch() {
  connection.query("SELECT * FROM  products", function(err, result) {
    if (err) throw err;
    for (var i = 0; i < result.length; i++) {
      //display productstable: id,name,price > 0, else no stock
      var r = result[i];
      if (r.stock_quantity > 0) {
        var price = Number.parseFloat(r.price);
        var stock = Number.parseFloat(r.stock_quantity);
        console.log(
          "Item ID: " +
            r.item_id +
            " " +
            "Name: " +
            r.product_name +
            "  " +
            "Price: " +
            price +
            " " +
            "Stock: " +
            " " +
            stock
        );
      } else {
        console.log(
          "Item ID: " +
            r.item_id +
            " " +
            "Name: " +
            r.product_name +
            " " +
            "Stock:" +
            " " +
            "Out of stock my dude!"
        );
      }
    }
    return purchase();
  });
}
function purchase() {
  //use inquirer to ask for item id
  //use inquirer to ask for purchase
  inquirer
    .prompt([
      {
        type: "input",
        name: "item_id",
        message: "What is the item id?"
      },
      {
        type: "input",
        name: "quantity",
        message: "How many would you like to purchase?"
      }
    ])
    .then(function(answer) {
      //db if item is greater than zero, purchase, if 0 the item is not available
      connection.query(
        "SELECT * FROM products WHERE item_id=?",
        answer.item_id,
        function(err, res) {
          for (var i = 0; i < res.length; i++) {
            if (answer.quantity > res[i].stock_quantity) {
              console.log("The selected item is not in stock!");

              purchase();
            } else {
              console.log("The selected item is in stock!.");
            }
          }
        }
      );
    });
}
