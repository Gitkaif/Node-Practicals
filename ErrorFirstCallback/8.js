function checkStock(productId, stock, callback) {
    if (!productId) {
        return callback("Product ID is required", null);
    }

    if (stock <= 0) {
        return callback("Product is out of stock", null);
    }

    callback(null, "Stock available. Order can be placed");
}

checkStock("P101", 0, (err, message) => {
    if (err) {
        console.log("Error:", err);
    } else {
        console.log(message);
    }
});
