// mengambil id film pada url
var url_string = window.location.href;
var url = new URL(url_string);
var id = url.searchParams.get("id");

function buy(name, price){
    window.location.replace(`payment.html?name=${name}&price=${price}`)
}

$.ajax({ 
    type: "GET",
    url : `https://server-e-commerce-cms.herokuapp.com/products/${id}`,
    headers: {"access_token": localStorage.getItem('access_token')},
    success: function (result) {        
        // menampilkan semua data
        $('.phone__detail__info').append(`
            <div class="row">
                <div class="col-md-5 col-lg-3">
                    <div class="phone__poster__container">
                        <img class="w-100" src="${result.image_url}" alt="phone_poster">
                    </div>
                </div>
                <div class="col-md-7 col-lg-9 add_info" align="justify text-white">
                    <h4 class="backdrop__phone__title text-white">${result.name}</h4>
                    <p class="info text-white"> Brand:&nbsp${result.category}</p>
                    <p class="info text-white"> Stock:&nbsp${result.stock}</p>
                    <p class="info text-white"> Price:&nbspRp. ${result.price}</p>
                    <p class="phone__synopsis text-white">
                        Description: <br><br>
                        ${result.description}
                    </p>
                    <button class="btn btn-danger" onclick="buy('${result.name}', '${result.price}')">Buy Now</button>
                </div>
            </div>
        `);     
    },
    error: function (error) {
        // menampilkan error
        alert(`Error!, ${error.responseJSON.message}`)
    }
});
