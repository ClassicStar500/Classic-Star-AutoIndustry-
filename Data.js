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
},

{
name:"نعیم عباس",
phone:"03015807012",
cnic:"",
guarantor:"رانا سجاد",
guarantorPhone:"03001098287",
balance:"68000",
page:"23"
},

{
name:"قیصر محمود",
phone:"03057480466",
cnic:"",
guarantor:"",
guarantorPhone:"",
balance:"9200",
page:"25"
},

{
name:"علی رضا",
phone:"03255836334",
cnic:"",
guarantor:"",
guarantorPhone:"",
balance:"2000",
page:"33"
}
  ,
  

{
name:"ذیشان",
phone:"03140402410",
cnic:"",
guarantor:"",
guarantorPhone:"03110413286",
balance:"50000",
page:"35"
},

{
name:"عطا اللہ",
phone:"03015187607",
cnic:"",
guarantor:"",
guarantorPhone:"03057480466",
balance:"8000",
page:"43"
},

{
name:"محمد اصف",
phone:"03017955401",
cnic:"",
guarantor:"حافظ نزیر سویا",
guarantorPhone:"03444872205",
balance:"8000",
page:"45"
},

{
name:"محمد عظیم",
phone:"03292922953",
cnic:"",
guarantor:"محمد شکیل",
guarantorPhone:"03090520052",
balance:"1000",
page:"54"
},

{
name:"محمد زبیر",
phone:"03027074216",
cnic:"",
guarantor:"",
guarantorPhone:"",
balance:"19500",
page:"59"
},

{
name:"محمد رشید",
phone:"03019233627",
cnic:"",
guarantor:"زبیر",
guarantorPhone:"03027074216",
balance:"20000",
page:"60"
},

{
name:"ولید عباس اسڑ",
phone:"03002192959",
cnic:"",
guarantor:"",
guarantorPhone:"",
balance:"Nil",
page:"61"
},

{
name:"محمد مزمل",
phone:"03291301426",
cnic:"",
guarantor:"",
guarantorPhone:"",
balance:"225000",
page:"67"
},

{
name:"احسن اقبال",
phone:"03426933063",
cnic:"",
guarantor:"عمران",
guarantorPhone:"03009290092",
balance:"18000",
page:"74"
},

{
name:"محمد اعظم",
phone:"03027908074",
cnic:"",
guarantor:"",
guarantorPhone:"",
balance:"48000",
page:"75"
},

{
name:"اویس بھٹی",
phone:"03027982973",
cnic:"",
guarantor:"",
guarantorPhone:"",
balance:"28500",
page:"81"
},

{
name:"نجیب اللہ خان",
phone:"03002783727",
cnic:"",
guarantor:"",
guarantorPhone:"03022378202",
balance:"38500",
page:"82"
},

{
name:"قیصر محمود",
phone:"03057480466",
cnic:"",
guarantor:"",
guarantorPhone:"",
balance:"18000",
page:"83"
},

{
name:"محمد بلال",
phone:"",
cnic:"",
guarantor:"",
guarantorPhone:"",
balance:"5000",
page:"86"
},

{
name:"مزمل وقاص",
phone:"03046216125",
cnic:"",
guarantor:"",
guarantorPhone:"03271147952",
balance:"83000",
page:"88"
  }

// آگے اسی ترتیب سے Part 2 میں جاری رہے گا

  ,

{
name:"محمد عرفان",
phone:"03039837818",
cnic:"",
guarantor:"",
guarantorPhone:"",
balance:"3000",
page:"91"
},

{
name:"بشیر احمد",
phone:"03260227856",
cnic:"",
guarantor:"عبدالمجید مجوکا",
guarantorPhone:"",
balance:"88000",
page:"95"
},

{
name:"مختیار",
phone:"03057498905",
cnic:"",
guarantor:"لقمان",
guarantorPhone:"",
balance:"43000",
page:"210"
},

{
name:"رانا سجاد",
phone:"03017950604",
cnic:"",
guarantor:"",
guarantorPhone:"",
balance:"63000",
page:"212"
},

{
name:"محمد عثمان",
phone:"03069216450",
cnic:"",
guarantor:"لقمان",
guarantorPhone:"",
balance:"33000",
page:"214"
},

{
name:"محمد وقاص نعیم",
phone:"03007975494",
cnic:"",
guarantor:"رانا ناصر",
guarantorPhone:"03036370664",
balance:"200000",
page:"215"
},

{
name:"محمد سجاد",
phone:"03064773847",
cnic:"",
guarantor:"محمد عظیم",
guarantorPhone:"03292922943",
balance:"33000",
page:"216"
},

{
name:"محمد طارق",
phone:"03260305129",
cnic:"",
guarantor:"فیاض",
guarantorPhone:"03019245893",
balance:"48000",
page:"217"
},

{
name:"شفاء اللہ",
phone:"",
cnic:"",
guarantor:"تقویر کلور کوٹ",
guarantorPhone:"03027132707",
balance:"23000",
page:"221"
},

{
name:"ناصر",
phone:"03041185302",
cnic:"",
guarantor:"عبدالمجید مجوکا",
guarantorPhone:"",
balance:"128000",
page:"223"
},

{
name:"عبدالمجید",
phone:"03021481113",
cnic:"",
guarantor:"",
guarantorPhone:"",
balance:"183000",
page:"224"
},

{
name:"",
phone:"03045793366",
cnic:"",
guarantor:"عبدالمجید مجوکا",
guarantorPhone:"03021481113",
balance:"5000",
page:"225"
},

{
name:"محمد خان",
phone:"03017283016",
cnic:"",
guarantor:"",
guarantorPhone:"",
balance:"25000",
page:"226"
},

{
name:"بلال",
phone:"03417551282",
cnic:"",
guarantor:"",
guarantorPhone:"03491632499",
balance:"15000",
page:"228"
},

{
name:"محمد بلال",
phone:"03000412010",
cnic:"",
guarantor:"ساجد",
guarantorPhone:"",
balance:"25000",
page:"230"
}
  ,

{
name:"محمد رمضان",
phone:"03056976092",
cnic:"",
guarantor:"عبدالمجید مجوکا",
guarantorPhone:"",
balance:"28000",
page:"236"
},

{
name:"محمد عرفان",
phone:"03046424818",
cnic:"",
guarantor:"لقمان",
guarantorPhone:"",
balance:"38000",
page:"238"
},

{
name:"",
phone:"03014710439",
cnic:"",
guarantor:"عبدالمجید مجوکا",
guarantorPhone:"",
balance:"128000",
page:"242"
},

{
name:"محمد شفا اللہ",
phone:"03038910411",
cnic:"",
guarantor:"تنویر کلوٹ کوٹ",
guarantorPhone:"03027132707",
balance:"2000",
page:"244"
},

{
name:"محمود حسن",
phone:"03020667327",
cnic:"",
guarantor:"عرفان",
guarantorPhone:"03039837818",
balance:"20000",
page:"251"
},

{
name:"محمد سلیمان",
phone:"03016343496",
cnic:"",
guarantor:"عبدالمجید مجوکا",
guarantorPhone:"",
balance:"13000",
page:"252"
},

{
name:"محمد رمضان",
phone:"03037101351",
cnic:"",
guarantor:"لقمان",
guarantorPhone:"",
balance:"33000",
page:"254"
},

{
name:"محمد صادق حسین شاہ",
phone:"03227695765",
cnic:"",
guarantor:"لقمان",
guarantorPhone:"",
balance:"130000",
page:"257"
},

{
name:"کامران",
phone:"03017058248",
cnic:"",
guarantor:"لقمان",
guarantorPhone:"",
balance:"6000",
page:"258"
},

{
name:"محمد اکرم",
phone:"03017968062",
cnic:"",
guarantor:"لقمان",
guarantorPhone:"",
balance:"130000",
page:"259"
},

{
name:"عطا محمد",
phone:"03041351713",
cnic:"",
guarantor:"عبدالمجید مجوکا",
guarantorPhone:"",
balance:"290000",
page:"264"
},

{
name:"سمیع اللہ + ثنا اللہ",
phone:"03457576501,03095081775",
cnic:"",
guarantor:"",
guarantorPhone:"",
balance:"60000",
page:"265"
},

{
name:"حمید",
phone:"03021601785",
cnic:"",
guarantor:"تنویر کلوٹ کوٹ",
guarantorPhone:"03027132707",
balance:"34000",
page:"266"
},

{
name:"فیصل گجراتی",
phone:"",
cnic:"",
guarantor:"",
guarantorPhone:"",
balance:"42000",
page:"267"
},

{
name:"ساجد عباس",
phone:"03006690592",
cnic:"",
guarantor:"",
guarantorPhone:"",
balance:"113000",
page:"270"
  }
,

{
name:"محمد اصف",
phone:"03066358855",
cnic:"",
guarantor:"لقمان",
guarantorPhone:"",
balance:"120000",
page:"271"
},

{
name:"حیدر",
phone:"03200525907",
cnic:"",
guarantor:"لقمان",
guarantorPhone:"",
balance:"40000",
page:"273"
},

{
name:"خالد عباس",
phone:"03148621728",
cnic:"",
guarantor:"اشرف کنڈیاں",
guarantorPhone:"",
balance:"35000",
page:"274"
},

{
name:"حمید اللہ خان",
phone:"03347975634",
cnic:"",
guarantor:"عامر",
guarantorPhone:"",
balance:"40000",
page:"276"
},

{
name:"نبیل",
phone:"03010578620",
cnic:"",
guarantor:"زین العابدین",
guarantorPhone:"03017804959",
balance:"130000",
page:"277"
},

{
name:"محمد احسان الحق",
phone:"03016345844",
cnic:"",
guarantor:"عبدالمجید مجوکا",
guarantorPhone:"",
balance:"80000",
page:"278"
},

{
name:"محمد عمیر",
phone:"03261195085",
cnic:"",
guarantor:"عبدالمجید مجوکا",
guarantorPhone:"",
balance:"30000",
page:"279"
},

{
name:"محمد بلال",
phone:"03027463796",
cnic:"",
guarantor:"عبدالمجید مجوکا",
guarantorPhone:"",
balance:"105000",
page:"280"
},

{
name:"اختر حسین شاہ",
phone:"03015455457",
cnic:"",
guarantor:"ارباز مستری",
guarantorPhone:"",
balance:"110000",
page:"281"
},

{
name:"حمزہ سرور",
phone:"03277835080",
cnic:"",
guarantor:"صدیق",
guarantorPhone:"03056539290",
balance:"10000",
page:"282"
},

{
name:"محمد اقبال",
phone:"03041018185",
cnic:"",
guarantor:"ساجد ہرنولی",
guarantorPhone:"03006690592",
balance:"130000",
page:"283"
},

{
name:"محمد شفیق",
phone:"",
cnic:"",
guarantor:"ساجد ہرنولی",
guarantorPhone:"03006690592",
balance:"130000",
page:"286"
},

{
name:"محمد عامر",
phone:"03017082859",
cnic:"",
guarantor:"محمد زبیر + نصراللہ",
guarantorPhone:"03069516039",
balance:"90000",
page:"288"
},

{
name:"عبداللہ بلوچ",
phone:"",
cnic:"",
guarantor:"",
guarantorPhone:"",
balance:"84000",
page:"289"
},

{
name:"محمد رمضان",
phone:"03254072230",
cnic:"",
guarantor:"",
guarantorPhone:"",
balance:"55000",
page:"290"
  }
,

{
name:"ذیشان",
phone:"03059688700",
cnic:"",
guarantor:"یاسر + اویس",
guarantorPhone:"",
balance:"65000",
page:"291"
},

{
name:"",
phone:"03029541083",
cnic:"",
guarantor:"عبدالمجید مجوکا",
guarantorPhone:"",
balance:"20000",
page:"292"
},

{
name:"بلال",
phone:"03027692756",
cnic:"",
guarantor:"ممتاز + تنویر کلور کوٹ",
guarantorPhone:"03056410615",
balance:"20000",
page:"293"
},

{
name:"مقصود احمد",
phone:"03049904814",
cnic:"",
guarantor:"لقمان",
guarantorPhone:"",
balance:"148000",
page:"294"
},

{
name:"محمد عرفان",
phone:"03067651541",
cnic:"",
guarantor:"ریاض خان",
guarantorPhone:"",
balance:"80000",
page:"295"
},

{
name:"محمد رمضان",
phone:"03026830137",
cnic:"",
guarantor:"اویس والد احمد نواز",
guarantorPhone:"03089467375",
balance:"80000",
page:"299"
},

{
name:"جبار احمد",
phone:"03068569866",
cnic:"",
guarantor:"لقمان",
guarantorPhone:"",
balance:"14000",
page:"300"
},

{
name:"محمد عمران",
phone:"03408396723",
cnic:"",
guarantor:"اشرف کنڈیاں",
guarantorPhone:"",
balance:"15000",
page:"301"
},

{
name:"محمد عزیز",
phone:"",
cnic:"",
guarantor:"لقمان",
guarantorPhone:"",
balance:"185000",
page:"302"
},

{
name:"احمد خان",
phone:"03016412874",
cnic:"",
guarantor:"سجاد مستری",
guarantorPhone:"",
balance:"40000",
page:"303"
},

{
name:"امجد علی",
phone:"03461382582",
cnic:"",
guarantor:"",
guarantorPhone:"",
balance:"98000",
page:"305"
},

{
name:"محمد نواز",
phone:"03078747479",
cnic:"",
guarantor:"علی محمد",
guarantorPhone:"",
balance:"70000",
page:"306"
},

{
name:"محمد منیر",
phone:"",
cnic:"",
guarantor:"سجاد مستری",
guarantorPhone:"",
balance:"80000",
page:"309"
},

{
name:"محمد معاویہ شبیر",
phone:"03019591313",
cnic:"",
guarantor:"محمد فیروز",
guarantorPhone:"",
balance:"82000",
page:"311"
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
