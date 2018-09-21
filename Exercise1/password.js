function validateForm()
{
    let password = document.getElementById("Password").value;
    let password_confirm = document.getElementById("PasswordConfirm").value;
    if(password.length < 8)
    {
        alert('Your password must be at least 8 characters long.')
    }
    else if (password != password_confirm)
    {
        alert('The passwords do not match.')
            
    }
    else
    {
       alert('Password validated'); 
    }
}