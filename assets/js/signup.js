var password = document.getElementById('password')
var password2 = document.getElementById('password2')
var email = document.getElementById('email')
var btnLogin = document.getElementsByTagName('input')[3]


btnLogin.addEventListener('click', function(event){
    event.preventDefault();
    var valemail = email.value 
    var valpassword = password.value
    var valpassword2 = password2.value

    // melakukan validasi bahwa email atau password yang di input tidak kosong
    // dan memastikan password dan konfirmasi password nilainya sama
    if( valpassword!='' && valpassword2!='' && valpassword2 !== valpassword){
        alert('Password tidak cocok')
    }
    else if(valemail!='' && valpassword!='' && valpassword2!=''){
        $.post( "https://server-e-commerce-cms.herokuapp.com/register", 
        { name: valemail, email: valemail, password: valpassword })
        .done(function( data ) {
            alert('Berhasil Sign Up, Silahkan login!')
            // mengarahakan ke halaman login
            window.location.replace('signin.html')
        })
        .fail(function(err) {
            // menampilkan pesan error
            alert( `error, ${err.responseJSON.message}` );
        });
    }
    else{
        // menampilkan pesan validasi
        alert('Mohon diisi dulu datanya')
    }
})


