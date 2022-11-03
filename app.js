function validateForm(){
    
        document.getElementById('name_error').style.display = 'none'
    
        let name = document.forms['myForm']['name'].value
        let second_name = document.forms['myForm']['second_name'].value
        let email = document.forms['myForm']['email'].value
        let passwd1 = document.forms['myForm']['passwd1'].value
        let passwd2 = document.forms['myForm']['passwd2'].value
        let gender = document.forms['myForm']['gender'].value
        if (!name) {
           document.getElementById('name_error').style.display = 'block'
        }

        if (!second_name) {
            document.getElementById('sname-error').style.display = 'block'
        }

        if (!email) {
            document.getElementById('email-error').style.display = 'block'
        }

        if (email) {
            if (!ValidateEmail(email)) {
                document.getElementById('email-error-format').style.display = 'block'
            }    
        }

        if (!passwd1) {
            document.getElementById('passwd1-error').style.display = 'block'
        }

        if (!passwd2) {
            document.getElementById('passwd2-error').style.display = 'block'
        }

        if (!gender) {
            document.getElementById('gender-error').style.display = 'block'
        }

        if (!ValidateEmail(email)) {
            document.getElementById('email-error-format').style.display = 'block'
        }

        
        if (passwd1 != passwd2 && (passwd1 != '' || passwd1 != 'underfiend')) {
            alert('Пароли не совпадают')
        }
        return false;
    }

    let data = {
        name : name,
        second_name : second_name,
        email: email,
        password1: passwd1,
        password2: passwd2,
        gender: gender,
        opt: valfromselect,
        subscribe: subs
    }

    console.log(data)


document.getElementById('myForm').onsubmit = () => {
    return validateForm();
    }
    
    
function ValidateEmail(input) {
    let re = /\S+@\S+\. \S+/
    return re.test(email)
    }
      
