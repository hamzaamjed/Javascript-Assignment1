function FormValidation() {
    const email = document.getElementById("inputEmail4").value;
    const pass = document.getElementById("inputPassword4").value;
    const address1 = document.getElementById("inputAddress").value;
    const address2 = document.getElementById("inputAddress2").value;
    const city = document.getElementById("inputCity").value;
    const state = document.getElementById("inputState").value;
    const zip = document.getElementById("inputZip").value;
    const checkMeOut = document.getElementById("gridCheck").value;


    try {
        if (email === "") throw "E-mail";
        if (pass === "") throw "Password";
        if (address1 === "") throw "Address1";
        if (address2 === "") throw "Address2";
        if (city === "") throw "City";
        if (state === "Choose") throw "State";
        if (zip === "") throw "Zip";

        const param = new URLSearchParams({
            email,
            pass,
            address1,
            address2,
            city,
            state,
            zip,
            checkMeOut
        });

        let newUrl = new URL("http://127.0.0.1:5500/Summary.html?" + param.toString());
        window.open(newUrl);

    } catch (err) {
        alert(err + " is Empty");
    }

}