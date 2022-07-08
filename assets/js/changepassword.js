function savePassword(){
    var newpassword = document.getElementById('newpassword').value
    var confirmpassword = document.getElementById('confirmpassword').value

    if((newpassword == confirmpassword) && (newpassword || confirmpassword == null)){
        alert("Password Berhasil Diubah")
        window.location.replace('home.html')
    }
    else{
        alert("Password Tidak Berhasil Diubah")
    }
}