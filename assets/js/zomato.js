let base_url = 'http://localhost:3000'

$( document ).ready(function() {
    navbar()
    geoCodeJakarta()
})

function geoCodeJakarta() {
    $.ajax({
        url: base_url + `/zomato/geocode/-6.21462/106.84513`,
        method: "GET",
    })
    .done( function(result) {
        console.log(result)
        $("#card-list").html("")
        $("#card-list").append(`
            <h1>HI</h1>
        `)
    })
    .fail( function(error) {

    })
}

function navbar() {
    $("#nav").html(`
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <a class="navbar-brand" href="#">MakanBang</a>
        <button class="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <a class="nav-link" href="#">MakanBang <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>`)
}

function getCategory() {
    $.ajax({
        method: 'GET',
        url: base_url + '/zomato'
    })
    .done( function(response) {
        console.log(response)
    })
    .fail(function(error){
        console.log(error)
    })
}

function getCitiesSearch() {
    let q = ''
    $.ajax({
        method: 'GET',
        url: base_url + `/zomato/city/${q}`
    })
    .done( function(response) {
        console.log(response)
    })
    .fail(function(error){
        console.log(error)
    })
}

function getCollection() {
    let id = ''
    $.ajax({
        method: 'GET',
        url: base_url + `/zomato/collection/${id}`
    })
    .done( function(response) {
        console.log(response)
    })
    .fail(function(error){
        console.log(error)
    })
}

function getCuisines() {
    let id = ''
    $.ajax({
        method: 'GET',
        url: base_url + `/zomato/cuisines/${id}`
    })
    .done( function(response) {
        console.log(response)
    })
    .fail(function(error){
        console.log(error)
    })
}

// function getAllFood() {
//     $.ajax({
//         method: 'get',
//         url = ``,
//         data: {

//         }
//     })
//     .done( function() {

//     })
//     .fail( function() {
        
//     })
// }
