function calculateTotal(rowNum) {
    const price = parseFloat(document.getElementById(`price${rowNum}`).innerText.replace('$', ''));
    const quantity = parseInt(document.getElementById(`quantity${rowNum}`).value);
    const total = (price * quantity).toFixed(2);
    document.getElementById(`total${rowNum}`).innerText = total;

    calculateGrandTotal();
}

function calculateGrandTotal() {
    let grandTotal = 0.0;
    const totalElements = document.getElementsByClassName('total');

    for (let i = 0; i < totalElements.length; i++) {
        if (!isNaN(parseFloat(totalElements[i].innerText))) {
            grandTotal += parseFloat(totalElements[i].innerText);
        }
    }

    document.getElementById('grandTotal').innerText = grandTotal.toFixed(2);
}