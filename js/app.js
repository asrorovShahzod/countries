let list = document.querySelector('.countries-list')
let body = document.querySelector('.dark')
let region = document.querySelector('.region')
let searchInput = document.querySelector('.search-input')

let countries = [
    {url: "./img/flag-germany.png", country: "Germany", proporties : {Population: "11,319,511", Region: "Europe", Capital: "Brassels"}},
    {url: "./img/flag-usa.png", country: "United States of America", proporties : { Population: "323,947,000", Region: "Americas", Capital: "Washington, D.C" }},  
    {url: "./img/flag-brasil.png", country: "Brazil", proporties : { Population: "206,135,893", Region: "Americas", Capital: "Brasília" }},
    {url: "./img/flag-iceland.png", country: "Iceland", proporties : { Population: "334,300", Region: "Europe", Capital: "Reykjavik" }},
    {url: "./img/flag-afganistan.png", country: "Afghanistan", proporties : { Population: "27,657,145", Region: "Asia", Capital: "Kabul" }},
    {url: "./img/flag-iland-iceland.png", country: "Åland Islands", proporties : { Population: "28,875", Region: "Europe", Capital: "Mariehamn" }},
    {url: "./img/flag-albania.png", country: "Albania", proporties : { Population: "2,886,026", Region: "Europe", Capital: "Tirana" }},
    {url: "./img/flag-algeria.png", country: "Algeria", proporties : { Population: "40,400,000", Region: "Afrika", Capital: "Algiers" }},
];

function render(arr){
    list.innerHTML = null
    for(let i = 0;i<arr.length;i++){
        let li = document.createElement('li')
        li.setAttribute('class' , 'countries-item')
        li.innerHTML = `
         <a href="#" class="country-link">
            <img src=${arr[i].url} alt="germany" class="country-flag-img">
            <div class="info">
                <h2 class="country-heading">${arr[i].country}</h2>
                <ul class="info-list">
                    <li class="country-info"><span class="info-text">Population:</span> ${arr[i].proporties.Population}</li>
                    <li class="country-info"><span class="info-text">Region:</span> ${arr[i].proporties.Region}</li>
                    <li class="country-info"><span class="info-text">Capital:</span> ${arr[i].proporties.Capital}</li>
                </ul>
            </div>
        </a>
        `
        list.append(li)
    }
}

document.querySelector('.dark-mode').addEventListener('click' , function(){
    body.classList.toggle('dark')
})

region.addEventListener('change' , function(){
    let newArr = countries.filter(item =>  region.value == 0 ? true : item.proporties.Region == region.value)
    render(newArr)
})


render(countries)

searchInput.addEventListener('input' , function(){
    let newArr = countries.filter(item => item.country.toLowerCase().includes(searchInput.value.toLowerCase()))
    render(newArr)
})