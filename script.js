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
        
    }



}




clearForm()

