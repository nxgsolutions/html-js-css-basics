// document.getElementsByTagName("input").addEventListener("change", function () {

//     console.log("change firesd")
// })
document.getElementById("postal_code").addEventListener("change",()=>{ console.log("fired")})

function validateForm() {
    const form = document.getElementById('reg_form');

    // Get all form elements
    const formElements = Array.from(form.elements);
    console.log("formElements",formElements)
    formElements.forEach(element => {
        var dataValidate = JSON.parse(element.getAttribute("data"));
        var datatarget = element.getAttribute("data-target");
        var flag = false;
        if (element.required == true && element.value.trim() == "" && element.type != "submit") {
            element.classList.add("is-invalid");
            if (dataValidate && datatarget) {
                document.getElementById(datatarget).innerHTML = dataValidate.required;
            }
            console.log(element.id, element.required, element.getAttribute("data"));
        } else {
            element.classList.remove("is-invalid");
            if (dataValidate && datatarget) {
                document.getElementById(datatarget).innerHTML = ""
            }
            flag = true;
        }
    });

    if (checkAllcheckbox() && flag == true) {
        //$("#formError").show()
        return true;
    }

    return false;
}
function checkAllcheckbox() {
    checked = $("input[type=checkbox]:checked").length;

    if (checked) {
        //$("#formError").show();
        console.log("chala")
        document.getElementById("subject_error").innerHTML = ""
        return true;
    }
    else {
        document.getElementById("subject_error").innerHTML = "Subject is required";
        return false;
    }
}
function isNumber(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    console.log("charCode", charCode)
    if (charCode > 31 && (charCode < 46 || charCode > 57) || charCode == 47)
        return false;

    return true;
}
function ismobile(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
      console.log("charCode", charCode)
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

    return true;
}

function dateValidate() {
    var from_date = new Date(document.getElementById('from_date').value);
    var to_date = new Date(document.getElementById('to_date').value);
    console.log(from_date, to_date)
    from_date > to_date ?
        ($("#date_error").show(), document.getElementById("submit_button").disabled = true)
        :
        ($("#date_error").hide(), document.getElementById("submit_button").disabled = false);
}
function imageValidation(event) {
    let allowedExtension = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/bmp'];
    let type = event.target.files[0].type;
    let size = event.target.files[0].size / 1024;
    console.log("size",)
    console.log("type", type)
    if (allowedExtension.indexOf(type) > -1) {
        console.log("true")
    } else {
        event.target.value = "";
        id.style.innerHtml = "Invalid Format or Size"
        console.log("false")
    }
}

function DOBvalidation(event) {
    selectedDate = new Date(event.target.value);
    today = new Date();
    if (selectedDate > today) {
        document.getElementById(event.target.getAttribute("data-target")).innerHTML = "Future Date is Not Allowed!";
        event.target.value = "";
        return false;
    }
    else {
        document.getElementById(event.target.getAttribute("data-target")).innerHTML = ""
        return true;
    }
}