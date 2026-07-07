
function learnMore() {
    alert("Welcome to Tech Store!\nDiscover our latest technology products.");
}


function buyNow() {
    let choice = confirm("Do you want to purchase this product?");

    if (choice) {
        alert("Thank you! Your order has been placed successfully.");
    } else {
        alert("No problem! Continue shopping.");
    }
}

function showMessage() {
    let name = prompt("Please enter your name:");

    if (name && name.trim() !== "") {
        alert("Thank you, " + name + "! We will contact you soon.");
    } else {
        alert("Thank you for visiting Tech Store!");
    }
}