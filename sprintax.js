/// sprintax js script.

function newTransaction(description, date_of_sale, date_of_acquistion, stocks_bonds, costs_other_basic) {
    return {
    "description": description,
    "date_of_sale": date_of_sale,
    "date_of_acquistion": date_of_acquistion,
    "stocks_bonds": stocks_bonds,
    "costs_other_basic": costs_other_basic
    }
}
// All transactions.
var transactions = [
    newTransaction("ABC inc", "10/2/2020", "09/21/2020", "1234", "4321.00"),
    newTransaction("ABC inc", "10/2/2020", "09/21/2020", "1234", "4321.00")
]

// Copy and paste Robinhood's info
document.getElementById('__employer_details_employer_name').value="Robinhood Securities LLC"
document.getElementById('__employer_details_employer_address').value="500 Colonial Center Parkway Suite 100"
document.getElementById('__employer_details_employer_city').value="Lake Mary"
document.getElementById('__employer_details_employer_state').value="FL"
document.getElementById('__employer_details_employer_zip_code').value="32746"
document.getElementById('payers_federal_id').value="38-4019216"
document.getElementById('statecode').value="CA"

// This income is not connnected to U.S. real property
document.getElementById('reported_gain_or_loss2').click()

// Using url to determine which transaction is this
url = window.location.href
start_of_int = url.indexOf("?f=") + 3
idx = parseInt(url.slice(start_of_int, )) - 1

// Transaction info.
document.getElementById('description').value=transactions[idx].description
document.getElementById('date_of_sale').value=transactions[idx].date_of_sale
document.getElementById('date_of_acquistion').value=transactions[idx].date_of_acquistion
document.getElementById('stocks_bonds').value=transactions[idx].stocks_bonds
document.getElementById('costs_other_basic').value=transactions[idx].costs_other_basic

// Next page
nC();