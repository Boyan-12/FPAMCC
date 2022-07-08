var password = document.getElementById('password')
var email = document.getElementById('email')
var btnLogin = document.getElementsByTagName('input')[2]


btnLogin.addEventListener('click', function(event){
    var valemail = email.value 
    var valpassword = password.value
    event.preventDefault();

    // melakukan validasi bahwa email atau password yang di input tidak kosong
    if(valemail!='' && valpassword!='' ){
        // mengirim request ke api untuk login, jika berhasil api akan mengembalikan nilai access_token
        // yang dibutuhkan saat melakukan request ke api untuk mendapatkan list product
        $.post( "https://server-e-commerce-cms.herokuapp.com/login", { email: valemail, password: valpassword })
        .done(function( data ) {
            alert('Selamat Datang')
            // menyimpan access_token api ke dalam local storage browser
            localStorage.setItem('access_token', data.access_token);
            // mengarahakan ke halaman home
            window.location.replace('home.html')
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


