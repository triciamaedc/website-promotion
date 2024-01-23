function buyProduct() {
    console.log("Buy button clicked");

    var productPrice = 10.00;
    var quantity = prompt("How many items do you want to buy?", "1");

    if (quantity !== null && !isNaN(quantity) && quantity > 0) {
        var totalAmount = calculateTotal(productPrice, quantity);
        var isConfirmed = confirm("Total amount: ₱" + totalAmount.toFixed(2) + "\nDo you want to proceed with the purchase?");

        if (isConfirmed) {
            alert("Thank you for your purchase!");
        } else {
            alert("Purchase canceled.");
        }
    } else {
        alert("Invalid quantity. Please enter a valid number.");
    }
}

function calculateTotal(price, quantity) {
    var total = price * quantity;
    return total;
}