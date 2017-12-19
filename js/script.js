//------------------------------FIRST NAME----------------------------------------
function checkFirstName() {
    var firstNameLength = $(firstName).val().length;
    if (firstNameLength >=6 && firstNameLength <=15){
        $('#firstNameError').text('');
        return true;
    }else {
        $('#firstNameError').text('First name should be between 6 to 15 characters');
        return false;
    }
};

$('#firstName').click(function () {
    checkFirstName();
});

$('#firstName').blur(function () {
    checkFirstName();
});

$('#firstName').keyup(function () {
    checkFirstName();

});

//------------------------------LAST NAME----------------------------------------

function checkLastName() {
    var lastNameLength = $(lastName).val().length;
    if (lastNameLength >=6 && lastNameLength <=15){
        $('#lastNameError').text('');
        return true;
    }else {
        $('#lastNameError').text('First name should be between 6 to 15 characters');
        return false;
    }
};

$('#lastName').click(function () {
    checkLastName();
});

$('#lastName').blur(function () {
    checkLastName();
});

$('#lastName').keyup(function () {
    checkLastName();

});

//------------------------------GENDER----------------------------------------
function checkGender() {
    var genderValue = $('input[type="radio"]:checked').val();
    if(genderValue){
        alert('test');
    }else {
        alert(demo);
    }
}

//------------------------------EMAIL ADDRESS----------------------------------------

function checkEmailAddress() {
    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[+a-zA-Z0-9.-]+\.[a-zA-Z]{3,3}$/i);
    if (pattern.test($(emailAddress).val())) {
        $('#emailAddressError').text(' ');
        return true;
    }else {
        $('#emailAddressError').text('Email address is invalid');
        return false;
    }
}
// $('#emailAddress').click(function () {
//     checkEmailAddress();
// });

$('#emailAddress').blur(function () {
    checkEmailAddress();
});

$('#emailAddress').keyup(function () {
    checkEmailAddress();

});
//------------------------------DISTRICT NAME----------------------------------------
function checkDistrictName() {
    var districtName = $('#districtName').val();
    if (districtName == ' '){
        $('#districtNameError').text('Please select valid district');
        return false;
    }else {
        $('#districtNameError').text(' ');
        return true;
    }
}
$('#districtName').change(function () {
    checkDistrictName();
});
//------------------------------PASSWORD----------------------------------------
function checkPassword() {
    var passwordLength = $('#password').val ().length;
    if (passwordLength >=6){
        $('#passwordError').text(' ');
        return true;
    }else {
        $('#passwordError').text('Password length at least 8 character');
        return false;
    }

}

$('#password').blur(function () {
    checkPassword();
});

$('#password').keyup(function () {
    checkPassword();

});

//------------------------------CONFIRM PASSWORD----------------------------------------
function checkConfirmPassword() {
    var passwordValue = $('#password').val ();
    var passwordValue1 = $('#confirmPassword').val ();
    if (passwordValue == passwordValue1){
        $('#confirmPasswordError').text(' ');
        return true;
    }else {
        $('#passwordError').text('Password not matched');
        return false;
    }

}

$('#confirmPassword').blur(function () {
    confirmPasswordError();
});

$('#confirmPassword').keyup(function () {
    confirmPasswordError();

});

//------------------------------SUBMIT----------------------------------------
$('#registrationForm').submit(function () {
    if (checkFirstName() == true && checkLastName() == true && checkEmailAddress() == true  && checkDistrictName() == true && checkPassword() == true && checkConfirmPassword() == true)
    return true;
});










