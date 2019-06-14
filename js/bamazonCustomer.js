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
  console.log("Connected!");
  //calling function before
  merch();
});
function merch() {
  connection.query("SELECT * FROM  products", function(err, result) {
    if (err) throw err;
    console.log(result);
    for (var i = 0; i < result.length; i++) {
      //display products > 0, else
      var r = result[i];
      if (r.stock_quantity > 0) {
        var price = Number.parseFloat(r.price);
        console.log(
          "Item ID: " +
            r.item_id +
            " " +
            "Name: " +
            r.product_name +
            "  " +
            "Price: " +
            price
        );
      } else {
        console.log(
          "Item ID: " +
            r.item_id +
            " " +
            "Name: " +
            r.product_name +
            ":" +
            " " +
            "Out of stock my dude!"
        );
      }
    }
    return purchase();
  });
  //if stock call purchase function
}
function purchase() {
  //use inquirer to ask for item id
  //use inquirer to ask for purchase
}
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
  .then(function(product) {
    var id = product.item_id;
    var quantity = product.quantity;
    console.log("ID: ", id);
    console.log("Quantity: ", quantity);

    instock(quantity, id);
  });

// Function that will check stock quantity
function instock(quantity, id) {
  //select all from products table
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;

    for (var j = 0; j < res.length; j++) {
      if (res[j].stock_quantity === 0) {
        console.log(
          "Item ID: " +
            res[j].id +
            " " +
            "Name: " +
            res[j].product_name +
            ":" +
            " " +
            "Item is not in stock!"
        );
      } else {
        updateProducts(quantity, id);
        return merch();
      }
    }
  });
}

function updateProducts(quantity, id) {
  var query = connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        stock_quantity: quantity - quantity
      },
      {
        item_id: `${id}`
      }
    ],
    function(err, results) {
      console.log(results);
      if (err) {
        throw err;
      }
      if (quantity > results[0]) {
        var results = results[0].stock_quantity;
        console.log(
          "Insufficient quantity, sorry we do not have enough " +
            results[0].product_name +
            "to complete your order."
        );
      } else {
        console.log("Your order has been placed successfully!");
        console.log(results);
      }
    }
  );
}
