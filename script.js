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


    let isValid = true;

    document.querySelectorAll('.form_flex').forEach(el => {el.classList.remove('error');})

    if (isNaN(amount) || amount <= 0) {
        // Show the alert element with ID 'amount-alert'
        document.getElementById('amount_alert').style.display = 'block';
        
        // Add 'error' class to the element with ID 'mortgage-amount-main'
        document.getElementById('mortgage-amount-main').classList.add('error');
        
        // Set isValid to false indicating validation failure
        isValid = false;
    } else {
        // Hide the alert element with ID 'amount-alert'
        document.getElementById('amount_alert').style.display = 'none';
    }

    if (isNaN(term) || term <= 0) {
        document.getElementById('term_alert').style.display = 'block';
        document.getElementById('mortgage-term-main').classList.add('error');
        isValid = false;
    } else {
        document.getElementById('term_alert').style.display = 'none';
    }

    if (isNaN(rate) || rate <= 0) {
        document.getElementById('rate_alert').style.display = 'block';
        document.getElementById('interest-rate-main').classList.add('error');
        isValid = false;
    } else {
        document.getElementById('rate_alert').style.display = 'none';
    }


    if (!mortgageType) {
        document.getElementById('type_alert').style.display = 'block';
        document.querySelectorAll('.radio_inputs').forEach(el => {
            el.classList.add('error')
        })
        isValid= false;
    }
    else {
        document.getElementById('type_alert').style.display = 'none';
        document.querySelectorAll('.radio_inputs').forEach(el => {
            el.classList.remove('error')
        })
    }



    // if (isNaN(mortgageAmount) || mortgageAmount <= 0){
    //     // document.getElementById('formattedAmount').textContent = "Please enter a valid number.";
    //    // mortgageAmountError.classList.remove("hide");
    //     //return; 
    //     document.getElementById('')
    // }

    // if (isNaN(yearsMortgage)){
    //     //document.getElementById('years').textContent = "Please enter a valid number.";
    //     yearsError.classList.remove("hide");
    //     return;
    // }

    // if (isNaN(mortgageInterest)){
    //     document.getElementById('percentage').textContent = "Please enter a valid number.";
    //     //interestError.classList.remove("hide");
    //     return;
    // }

    // if ((mortgageType !== "mortgageRepayment" ) && (mortgageType !== "interestOnly" )){
    //     typeError.classList.remove("hide");
    //     return;
    // }

    if (isValid){

        let monthlyRepayment, totalRepayment;

        default_text.classList.add('hide')
        calculations_container.classList.add('show')


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

    else {
        document.getElementById('result').innerText = ''
        document.getElementById('term_result').innerText = ''


        default_text.classList.remove('hide')
        calculations_container.classList.remove('show')
    }
}

function clearForm(){
    document.getElementById('mortgageForm').reset();
    document.getElementById('monthlyRepayment').textContent = 'Your monthly repayments: ';
    document.getElementById('totalRepayment').textContent = "Total you'll repay over the term: ";
    document.querySelectorAll('.form_alert').forEach(alert => {alert.style.display = 'none'
    })

    defaultText.classList.remove('hide')
    calculations_container.classList.remove('show')

    document.querySelectorAll('.radio_inputs').forEach(div =>{
    div.classList.remove('selected')
    })

    document.querySelectorAll('.form_flex').forEach(el =>{
        el.classList.remove('error')
    })
}
document.querySelectorAll('.form_alert').forEach(alert =>{
alert.style.display = 'none'

})



