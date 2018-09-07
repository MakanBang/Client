// var localhost = "http://localhost:3000"

$(document).ready(function(){
    getRecipe()
})

function getRecipe() {
    for(let i = 0; i < 7; i++) {
        $.ajax({
            method:"GET",
            url: localhost + "/foods"
        })
        .done(response => {
            $(".recipe-list").append(
                `
                <div class="image-recipe">
                    <img src="${response.data.meals[0].strMealThumb}" alt="Avatar" class="box-recipe" style="width:150px; border-radius:15px">
                    <div class="middle" href="google.com">
                        <div class="text" style="border-radius:10px;">${response.data.meals[0].strMeal}</div>
                    </div>
                </div>
                `
            )
        })
    }
}

{/* <div class="card ml-4" style="width: 10rem;">
                <img class="card-img-top" src="..." alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Judul recipe.</p>
                    <a href="#" class="btn btn-primary">Get Recipe</a>
                </div>
            </div> */}