function checkOrder(available, ordered) {
    if (ordered === 0) {
        return "Your order is empty.";
    } else if (available < ordered) {
        return "Your order is too large, we don’t have enough goods.";
    } else {
        return "Your order is accepted.";
    }
}
console.log(checkOrder(20, 10), "Available amount is 21, and you ordered 7.");
console.log(checkOrder(5, 10), "Available amount is 7, and you ordered 21.");
console.log(checkOrder(15, 0), "Available amount is 21, and you ordered 0.");