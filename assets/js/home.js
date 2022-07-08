// Menampilkan 6 handphone terpopuler
$.ajax({ 
    type: "GET",
    url : 'https://server-e-commerce-cms.herokuapp.com/products',
    headers: {"access_token": localStorage.getItem('access_token')},
    success: function (result) {

      let npopular = 1; //indikator jumlah data populer yang sudah ditampilkan
      for(var i = 0; i < result.length; i++) {
        // jika data yang ditampilkan sudah 6 makan proses pengulangan diberhentikan
        if(npopular >= 6){
          break;
        }

        // menampilkan data populer jika stock hp lebih atau sama dengan 100
        if(result[i].stock >= 100){
          npopular++; //menambahkan nilai indikator

          //menampilkannya ke daftar populer
          $('#popular').append(`
            <div class="phone__list__item">
              <a href="detail.html?id=${result[i].id}">
                <div class="phone__list__item__poster">
                  <img src="${result[i].image_url}" alt="phone-Poster">
                </div>
                <div class="phone__list__item__info">
                ${result[i].name}
              </a>	
              </div>
            </div>
          `);
        }
      }
    },
    error: function (error) {
        // menampilkan pesan errror
        alert(`Error!, ${error.responseJSON.message}`)
    }
  });


  
// menampilkan 6 list handphone  
  $.ajax({ 
    type: "GET",
    url : 'https://server-e-commerce-cms.herokuapp.com/products',
    headers: {"access_token": localStorage.getItem('access_token')},
    success: function (result) {
      let listphone = 1;//indikator jumlah data list yang sudah ditampilkan
      for(var i = 0; i < result.length; i++) {
        // jika data yang ditampilkan sudah 6 makan proses pengulangan diberhentikan
        if(listphone >= 6){
          break;
        }

        listphone++; //menambahkan nilai indikator
        //menampilkannya ke list
        $('#list').append(`
          <div class="phone__list__item">
            <a href="detail.html?id=${result[i].id}">
              <div class="phone__list__item__poster">
                <img src="${result[i].image_url}" alt="phone-Poster">
              </div>
              <div class="phone__list__item__info">
              ${result[i].name}
            </a>	
            </div>
          </div>
        `);
      }
    },
    error: function (error) {
        // menampilkan pesan errror
        alert(`Error!, ${error.responseJSON.message}`)
    }
  });			