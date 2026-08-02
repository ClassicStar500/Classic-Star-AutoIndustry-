// ==============================
// Classic Star Auto Industry
// Development by M.Muzammil K
// ==============================

let customers = [];

// Load Data
fetch("data.json")
.then(response => response.json())
.then(data => {
    customers = data;
})
.catch(error => {
    console.log("Data Load Error:", error);
});

// Search Function
function searchRecord(){

    let value = document
    .getElementById("searchInput")
    .value
    .trim();

    if(value==""){
        alert("Please Enter Phone Number or CNIC");
        return;
    }

    let customer = customers.find(item =>
        item.phone === value ||
        item.cnic === value
    );

    let result = document.getElementById("result");

    if(customer){

        result.innerHTML = `

<div class="record-card">

<h2 style="color:green;">
Record Found
</h2>

<hr><br>

<p><b>Name :</b> ${customer.name}</p>

<p><b>Phone :</b> ${customer.phone}</p>

<p><b>CNIC :</b> ${customer.cnic}</p>

<p><b>Guarantor :</b> ${customer.guarantor}</p>

<p><b>Guarantor Phone :</b> ${customer.guarantorPhone}</p>

<p><b>Remaining Amount :</b> ${customer.balance}</p>

<p><b>Page No :</b> ${customer.page}</p>

<br>

<h3 style="color:#009688;">
Classic Star Auto Industry
</h3>

<p>
Record Found By
<b>M.Muzammil</b>
</p>

</div>

`;

    }

    else{

        result.innerHTML=`

<h2 style="color:red;">
No Record Found
</h2>

<p>

Customer Not Available

</p>

`;

    }

}

// Download Image

document
.getElementById("downloadBtn")
.addEventListener("click", function(){

html2canvas(document.querySelector("#result"))

.then(canvas=>{

let link=document.createElement("a");

link.download="Customer_Record.png";

link.href=canvas.toDataURL("image/png");

link.click();

});

});