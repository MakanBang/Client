var localhost = "https://makanbang.padangjs.com"

$(document).ready(function(){
    getRecipe()
})

function getRecipe() {

    $(".recipe-list").text("")
    $(".modal-recipe").text("")

    for(let i = 0; i < 7; i++) {
        $.ajax({
            method:"GET",
            url: localhost + "/foods"
        })
        .done(response => {

            if (response.data.meals) {

            let ingredients = []

            for (let i = 8; i < 28; i++) {
                if (Object.values(response.data.meals[0])[i]) {
                    let tmp = ''
                    tmp += Object.values(response.data.meals[0])[i] + " : "
                    tmp += Object.values(response.data.meals[0])[i+20]
                    ingredients.push(tmp)
                }
            }

            ingredients = ingredients.join(', ')

            $(".recipe-list").append(
                `
                <div class="image-recipe">
                    <img src="${response.data.meals[0].strMealThumb}" alt="Avatar" class="box-recipe" style="width:170px; border-radius:15px" data-toggle="modal" data-target=".${response.data.meals[0].idMeal}">
                    <div class="middle">
                        <div class="text clicked" style="border-radius:10px;">
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg" onclick="modalAppend('${response.data.meals[0].strMealThumb}', '${response.data.meals[0].strMeal}', '${response.data.meals[0].strCategory}','${ingredients}')">${response.data.meals[0].strMeal}</button>
                        </div>
                    </div>
                </div>
                `
            )
            }
        })
    }
}

function modalAppend(image, name, category, ingredient = null) {
    $(".modal-content-recipe").text("")
    $(".modal-content-recipe").append(`
        <div style="padding : 20px; text-align : center;">
            <img src="${image}" style="width:100%">
            <div style="margin-top : 20px">
                <h1>${name}</h1>
            </div>
            <div style="margin-top : 20px;">
                <h3>Category</h3>
                <p style="font-size:20px">${category}</p>
                <h3>Ingredients</h3>
                <p style="font-size:20px">${ingredient}</p>
            </div>
        </div>
    `)
}

