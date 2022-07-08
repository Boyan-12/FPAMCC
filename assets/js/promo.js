var promocode = document.getElementById('promocode')
var btnRedeem = document.getElementById('redeem')

btnRedeem.addEventListener('click', function(){
    var valPromocode = promocode.value
    
    if(valPromocode =='gadgetNih'){
        // jika kode voucher same dengan gadgetNih akan menampilkan alert berhasil dan mengarahkan ke halaman home 
        alert('Selamat Promo Code Berhasil digunakan')
        window.location.replace('home.html')
    }
    else {
        alert('Promo Code Tidak Berlaku!')
    }

})