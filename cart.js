function updateProductNumber(product, price, isIncreasing, productsTotal) {
    const productInput = document.getElementById(product);
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;

    const productTotal = document.getElementById(productsTotal);
    productTotal.innerText = productNumber * price;

    calculateTotal();

};

function getInputValue(product) {
    const productInput = document.getElementById(product);
    const productNumberText = productInput.value;
    const productNumber = parseInt(productNumberText);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue("phone-number") * 1219;
    const caseTotal = getInputValue("case-number") * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;
    document.getElementById("sub-total").innerText = subTotal;
    document.getElementById("tax-total").innerText = tax;
    document.getElementById("total-price").innerText = total;

}

document.getElementById("phone-plus").addEventListener("click", function () {
    updateProductNumber("phone-number", 1219, true, "phone-total");
});
document.getElementById("phone-minus").addEventListener("click", function () {
    updateProductNumber("phone-number", 1219, false, "phone-total");
});
document.getElementById("case-plus").addEventListener("click", function () {
    updateProductNumber("case-number", 59, true, "case-total");
});
document.getElementById("case-minus").addEventListener("click", function () {
    updateProductNumber("case-number", 59, false, "case-total");
})