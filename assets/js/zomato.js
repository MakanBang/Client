let base_url = 'http://localhost:3000'

$( document ).ready(function() {
    geoCodeJakarta()
})

$("#searchResto").keyup( function() {
    getSearch()
})

function geoCodeJakarta() {
    $.ajax({
        url: base_url + `/zomato/geocode/-6.21462/106.84513`,
        method: "GET",
    })
    .done( function(result) {
        $("#card-list").html("")
        result.found.nearby_restaurants.forEach( e => {

            $("#card-list").append(`
                <div class="col-sm-4 col-md-4">
                <div class="card mb-3">
                    <img class="card-img-top" src="${e.restaurant.thumb}" alt="Card image">
                    <div class="card-body">
                        <h4 class="card-title">${e.restaurant.name}</h4>
                        <p> Location: ${e.restaurant.location.address} </p>
                        <p class="card-text"> <small> ${e.restaurant.user_rating.votes} <i class="fa fa-heart-o" aria-hidden="true"></i> - ${e.restaurant.user_rating.aggregate_rating} <i class="fa fa-star-o" aria-hidden="true"></i> </small></p>
                        <a href="${e.restaurant.menu_url}" class="btn btn-primary">Check Menu</a>
                    </div>
                </div>
                </div>
            `)
            
        })
    })
    .fail( function(error) {

    })
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

function getSearch() {
    let q = $("#searchResto").val()
    $.ajax({
        method: 'GET',
        url: base_url + `/zomato/search/${q}`
    })
    .done( function(result) {
        $("#card-list").html("")
        result.found.restaurants.forEach( e => {

            $("#card-list").append(`
                <div class="col-sm-4 col-md-4">
                <div class="card mb-3">
                    <img class="card-img-top" src="${e.restaurant.thumb}" alt="Card image">
                    <div class="card-body">
                        <h4 class="card-title">${e.restaurant.name}</h4>
                        <p> Location: ${e.restaurant.location.address} </p>
                        <p class="card-text"> <small> ${e.restaurant.user_rating.votes} <i class="fa fa-heart-o" aria-hidden="true"></i> - ${e.restaurant.user_rating.aggregate_rating} <i class="fa fa-star-o" aria-hidden="true"></i> </small></p>
                        <a href="${e.restaurant.menu_url}" class="btn btn-primary">Check Menu</a>
                    </div>
                </div>
                </div>
            `)
            
        })
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
