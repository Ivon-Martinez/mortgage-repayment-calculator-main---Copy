//document.getElementById('mortgageForm').addEventListener('submit', calculateRepayments);
const form = document.getElementById('mortgageForm');
form.addEventListener('submit', calculateRepayments);





function calculateRepayments(event) {
    event.preventDefault();

    const mortgageAmount = parseFloat(document.getElementById('mortgageAmount').value);
    const yearsMortgage = parseFloat(document.getElementById('yearsMortgage').value);
    const mortgageInterest = parseFloat(document.getElementById('mortgageInterest').value);

    const mortgageType = document.querySelector('input[name = "mortgageType"]:checked').value;

    const mortgageAmountError = document.querySelector(".amount_error");
    const yearsError = document.querySelector(".years_error");
    const interestError = document.querySelector(".percentage_error");
    const typeError = document.querySelector(".type_error");


    if (isNaN(mortgageAmount) || mortgageAmount <= 0){
        // document.getElementById('formattedAmount').textContent = "Please enter a valid number.";
       // mortgageAmountError.classList.remove("hide");
        //return; 

        document.getElementById('')

    }

    // if (mortgageAmount==='number'){
    //     mortgageAmountError.classList.add("hide");
    //     return;
    // }

    if (isNaN(yearsMortgage)){
        //document.getElementById('years').textContent = "Please enter a valid number.";
        yearsError.classList.remove("hide");
        return;
    }

    if (isNaN(mortgageInterest)){
        document.getElementById('percentage').textContent = "Please enter a valid number.";
        //interestError.classList.remove("hide");
        return;
    }

    if ((mortgageType !== "mortgageRepayment" ) && (mortgageType !== "interestOnly" )){
        typeError.classList.remove("hide");
        return;
    }


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


    document.getElementById('monthlyRepayment').textContent = `Your monthly repayments: £${parseFloat(monthlyRepayment.toFixed(2)).toLocaleString()}`;
    document.getElementById('totalRepayment').textContent = `Total you'll repay over the term: £${parseFloat(totalRepayment.toFixed(2)).toLocaleString()}`;
}

function clearForm(){
    document.getElementById('mortgageForm').reset();
    document.getElementById('monthlyRepayment').textContent = 'Your monthly repayments: ';
    document.getElementById('totalRepayment').textContent = "Total you'll repay over the term: ";
  
}

