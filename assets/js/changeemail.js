function saveEmail(){
    var newemail = document.getElementById('newemail').value
    var confirmemail = document.getElementById('confirmemail').value

    if((newemail == confirmemail) && (newemail || confirmemail == null)){
        alert("Email Berhasil Diubah")
        window.location.replace('home.html')
    }
    else{
        alert("Email Tidak Berhasil Diubah")
    }
}