document.getElementById('mortgageForm').addEventListener('submit', calculateRepayments);
const form = document.getElementById('mortgageForm');


function calculateRepayments(event) {
    event.preventDefault();

    const mortgageAmount = parseFloat(document.getElementById('mortgageAmount').value);
    const yearsMortgage = parseFloat(document.getElementById('yearsMortgage').value);
    const mortgageInterest = parseFloat(document.getElementById('mortgageInterest').value);

    const mortgageType = document.querySelector('input[name = "mortgageType]:checked').value;

    let monthlyRepayment, totalRepayment;

    if (mortgageType === 'mortgageRepayment') {
        const x = Math.pow(1+mortgageInterest, yearsMortgage);
        monthlyRepayment = (mortgageAmount * mortgageInterest * x) / (x - 1);
    } 
    else {
        monthlyRepayment = (mortgageAmount * mortgageInterest);
    }

    totalRepayment = monthlyRepayment * yearsMortgage;

    document.getElementById('monthlyRepayment').textContent = `Your monthly repayments: $${monthlyRepayment.toFixed(2)}`;
    document.getElementById('totalRepayment').textContent = `Total you'll repay over the term: $${totalRepayment.toFixed(2)}`;
}

function clearForm(){
    document.getElementById('mortgageForm').reset();
    document.getElementById('monthlyRepayment').textContent = 'Your monthly repayments: ';
    document.getElementById('totalRepayment').textContent = "Total you'll repay over the term: ";
  
}

