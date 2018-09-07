
$("#searchRecipe").keyup(function () {

    let value = $('#searchRecipe').val()
    
    if (value == '') {
        getRecipe()
    } else {
        $.ajax({
            method:"GET",
            url: localhost + "/foods/search?name=" + value
        })
        .done(response => {
            
             
            if (typeof response.data.meals !== null) {

                let stock = 7

                if (response.data.meals.length < 7) {
                    stock = response.data.meals.length
                }

                $(".recipe-list").text('')

                for (let i = 0; i < stock; i++) {
                
                    let ingredients = []

                    for (let j = 8; j < 28; j++) {
                        if (Object.values(response.data.meals[i])[j]) {
                            let tmp = ''
                            tmp += Object.values(response.data.meals[i])[j] + " : "
                            tmp += Object.values(response.data.meals[i])[j+20]
                            ingredients.push(tmp)
                        }
                    }
                    ingredients = ingredients.join(', ')
                    $(".recipe-list").append(
                        `
                        <div class="image-recipe">
                            <img src="${response.data.meals[i].strMealThumb}" alt="Avatar" class="box-recipe" style="width:170px; border-radius:15px" data-toggle="modal" data-target=".${response.data.meals[i].idMeal}">
                            <div class="middle">
                                <div class="text clicked" style="border-radius:10px;">
                                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg" onclick="modalAppend('${response.data.meals[i].strMealThumb}', '${response.data.meals[i].strMeal}', '${response.data.meals[i].strCategory}','${ingredients}')">${response.data.meals[i].strMeal}</button>
                                </div>
                            </div>
                        </div>
                        `
                    )
                }
            }
        })

    }
    
});