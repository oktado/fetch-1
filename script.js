let url = "https://restcountries.eu/rest/v2/all"
let list = document.getElementById('list');


let getData = async () => {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

for (let i=0;i<data.length;i++) {
    let listFlag = `
   <div id="card-margin" class="col-12 col-md-3">
                <div class="card">
                    <img class="card-img-top height 150" src="${data[i].flag}" alt="Card image cap">
                        <div class="card-body">
                            <h2 class="card-title color=red">${data[i].name}</h2>
                            <p class="card-text">${data[i].capital}</p>
                        </div>
                </div>
            </div>
    
    
    `;


        list.innerHTML += listFlag

    }
};

getData();


