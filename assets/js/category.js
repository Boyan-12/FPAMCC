var urlParams = new URLSearchParams(window.location.search);
// mengambil nilai query string pada url
let category = urlParams.get('category');

function buy(name, price){
    window.location.replace(`payment.html?name=${name}&price=${price}`)
}

// jika kategori memiliki nilai maka akan mengambil data handphone dari api
if(category){
    $.ajax({ 
        type: "GET",
        url : 'https://server-e-commerce-cms.herokuapp.com/products',
        headers: {"access_token": localStorage.getItem('access_token')},
        success: function (result) {
            // mengosongkan isi konten dari halaman saat ini
            $('#popular').empty();
            for(var i = 0; i < result.length; i++) {
                // melakukan filter berdasrkan kategori yang dipilih
                if(result[i].category == category) {
                    // lalu menampilkannya jika category cocok dengan yang dipilih
                    $('#popular').append(`
                        <div class="phone__list__item">
                        <a href="detail.html?id=${result[i].id}">
                            <div class="phone__list__item__poster">
                                <img src="${result[i].image_url}" alt="phone-Poster">
                            </div>
                            <div class="phone__list__item__info">
                            ${result[i].name}
                        </a>
                            <div class="phone__list__item__info_rilis">Rp ${result[i].price}</div>
                            <button class="btn btn-danger" onclick="buy('${result[i].name}', '${result[i].price}')">Buy Now</button>
                        </div>
                        </div>
                    `);
                }
            }
        },
        error: function (error) {
            alert(`Error!, ${JSON.stringify(error)}`)
        }
    });
}
