function showDetails(){

alert(`
ADEYEMI & CO PROPERTY DETAILS

Location: Lagos

Bedrooms: 4
Bathrooms: 5
Parking Space: 3

Property Features:

✓ POP Ceiling
✓ Fitted Kitchen
✓ Security House
✓ Borehole
✓ Water Heater
✓ CCTV
✓ Balcony
✓ Good Road Network

Payment Plan Available

Contact:
+234 801 234 5678
`);

}

document.querySelector(".submit-btn")
.addEventListener("click", function(){

alert(
"Property Submission Portal Coming Soon!"
);

});

document.querySelectorAll("a").forEach(link => {

link.addEventListener("click", function(e){

let target = this.getAttribute("href");

if(target.startsWith("#")){

e.preventDefault();

document.querySelector(target)
.scrollIntoView({
behavior:"smooth"
});

}

});

});