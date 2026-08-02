// Classic Star Auto Industry
// Development by M.Muzammil K
// Offline Version
// =====================================

// اپنی Word فائل کے تمام ریکارڈ یہاں شامل کریں
const customers = [

{
name:"حیات کندیاں",
phone:"",
cnic:"",
guarantor:"",
guarantorPhone:"",
balance:"16000",
page:"2"
},

{
name:"محمد فاروق",
phone:"03015546283",
cnic:"",
guarantor:"",
guarantorPhone:"",
balance:"2000",
page:"6"
},

{
name:"محمد رمضان",
phone:"03489358556",
cnic:"",
guarantor:"",
guarantorPhone:"",
balance:"",
page:"14"
},

{
name:"محمد عرفان",
phone:"03015364966",
cnic:"",
guarantor:"اظہر",
guarantorPhone:"03027802911",
balance:"43000",
page:"15"
},

{
name:"محمد ارسلان",
phone:"03247554921",
cnic:"",
guarantor:"لقمان",
guarantorPhone:"",
balance:"10000",
page:"16"
}

];

// =========================
// Search Function
// =========================

function searchRecord(){

let search=document
.getElementById("searchInput")
.value
.trim();

if(search==""){

alert("Please Enter Phone Number or CNIC");

return;

}

let customer=customers.find(c=>

c.phone===search ||

c.cnic===search

);

let result=document.getElementById("result");

if(customer){

result.innerHTML=`

<div class="record-card">

<h2 style="color:green;">
Record Found
</h2>

<hr><br>

<p><b>Name:</b> ${customer.name}</p>

<p><b>Phone:</b> ${customer.phone}</p>

<p><b>CNIC:</b> ${customer.cnic}</p>

<p><b>Guarantor:</b> ${customer.guarantor}</p>

<p><b>Guarantor Phone:</b> ${customer.guarantorPhone}</p>

<p><b>Balance:</b> ${customer.balance}</p>

<p><b>Page No:</b> ${customer.page}</p>

<br>

<h3 style="color:#009688;">

Classic Star Auto Industry

</h3>

<p>

Development by
<b>M.Muzammil K</b>

</p>

</div>

`;

}else{

result.innerHTML=`

<h2 style="color:red;">
No Record Found
</h2>

`;

}

}