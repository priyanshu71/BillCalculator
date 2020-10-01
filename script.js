var total = 0

function calculateBill() {

    var name = document.getElementById("name").value;
    var billAmount = parseFloat(document.getElementById("amount").value);
    var tip = parseFloat(document.getElementById("tip").value);
    var discount = parseFloat(document.getElementById("discount").value);
    var mobileNumber = document.getElementById("contact").value;

    const gst = 0.18;
    if (billAmount === 0) {
        alert("Enter Correct Amount");
        return;
    }

    if (name === "") {
        alert("Enter Name of Customer");
        return;
    }

    if (discount < 0) {
        alert("Choose Payment Method");
        return;

    }

    if (mobileNumber.length != 10) {
        alert("Enter Correct Mobile Number");
        return;
    }


    total = ((1 + tip - discount + gst) * billAmount);

    total = total.toFixed(2);

    document.getElementById("display").style.display = "block";
    document.getElementById("price").innerHTML = total;
    document.getElementById("successTransaction").innerHTML = name + ", Thanks for Shopping !!!";
}

function printpage() {
    window.print();
}
