document.getElementById('mortgageForm').addEventListener('submit', calculateRepayments);
const form = document.getElementById('mortgageForm');


let inputAmount = document.querySelector("#mortgageAmount");
inputAmount.addEventListener("keyup",(event)=>{
    var tempNumber = inputAmount.value.replace(/,/g, "");
    var comaSeparator = tempNumber.split(/(?=(?:\d{3})+$)/).join(",");

    if (!isNaN(tempNumber) && tempNumber.length > 0) {
        // Format the number with commas
        var comaSeparator = parseFloat(tempNumber).toLocaleString();
        inputAmount.value = comaSeparator;
    } else if (tempNumber.length === 0) {
        inputAmount.value = "";
    } else {
        // If input is not a valid number, reset to the previous value
        var previousValue = event.target.getAttribute("data-previous-value") || "";
        inputAmount.value = previousValue;
    }





    inputAmount.value = comaSeparator;
})




function calculateRepayments(event) {
    event.preventDefault();

    const mortgageAmount = parseFloat(document.getElementById('mortgageAmount').value);
    const yearsMortgage = parseFloat(document.getElementById('yearsMortgage').value);
    const mortgageInterest = parseFloat(document.getElementById('mortgageInterest').value);

    const mortgageType = document.querySelector('input[name = "mortgageType"]:checked').value;

    let monthlyRepayment, totalRepayment;

    if (mortgageType === 'mortgageRepayment') {
        const n = yearsMortgage * 12;
        const r = (mortgageInterest/100)/12;
        const x = Math.pow(1+r, n);
        monthlyRepayment = mortgageAmount * ((r * x) / (x - 1));
        totalRepayment = monthlyRepayment * n;
    } 
    else {
        const n = yearsMortgage * 12;
        const r = (mortgageInterest/100)/12;
        monthlyRepayment = (mortgageAmount * r);
        totalRepayment = monthlyRepayment * n;
    }


    document.getElementById('monthlyRepayment').textContent = `Your monthly repayments: £${monthlyRepayment.toFixed(2)}`;
    document.getElementById('totalRepayment').textContent = `Total you'll repay over the term: £${totalRepayment.toFixed(2)}`;
}

function clearForm(){
    document.getElementById('mortgageForm').reset();
    document.getElementById('monthlyRepayment').textContent = 'Your monthly repayments: ';
    document.getElementById('totalRepayment').textContent = "Total you'll repay over the term: ";
  
}

