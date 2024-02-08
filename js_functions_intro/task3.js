function checkOrder(available, ordered) {
    if (ordered === 0) {
        return "Your order is empty.";
    } else if (available < ordered) {
        return "Your order is too large, we don’t have enough goods.";
    } else {
        return "Your order is accepted.";
    }
}
console.log(checkOrder(21, 7), "Available amount is 21, and you ordered 7.");
console.log(checkOrder(7, 21), "Available amount is 7, and you ordered 21.");
console.log(checkOrder(21, 0), "Available amount is 21, and you ordered 0.");