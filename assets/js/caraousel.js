<<<<<<< HEAD
var localhost = "http://localhost:3000"
=======
const localhost = "http://localhost:3000"
>>>>>>> f59234e1548cf8471117d0989315f62817d08e26

$(document).ready(function(){
    carausel()
})

<<<<<<< HEAD

=======
>>>>>>> f59234e1548cf8471117d0989315f62817d08e26
function carausel() {
    
    for (let i = 0; i < 5;i++) {
        if (i == 0) {
            $(".carousel-indicators").append(
                `<li data-target="#carouselExampleIndicators" data-slide-to="${i}"> class="active"> </li>`
            )
        } else {
            $(".carousel-indicators").append(
                `<li data-target="#carouselExampleIndicators" data-slide-to="${i}"></li>`
            )
        }
    }

    for (let i = 0; i < 5; i++) {
        $.ajax({
            method:"GET",
            url: localhost + "/foods"
        })
        .done(response => {
            if (i == 0) {
                $(".carousel-inner").append(
                    `<div class="carousel-item active">
<<<<<<< HEAD
                        <img class="d-block w-100" src="${response.data.meals[0].strMealThumb}">
                        <div class="carousel-caption d-none d-md-block">
                            <div style="padding : 5px; border-radius: 15px; background-color: rgba(255, 255, 255, 0.63); font-size:bold;"> 
                                <h3 class="text-carousel">${response.data.meals[0].strMeal}</h3>
                            </div>
                        </div>
=======
                        <img class="d-block w-100" src="${response.data.meals[0].strMealThumb}"
>>>>>>> f59234e1548cf8471117d0989315f62817d08e26
                    </div>`
                )
            } else {
                $(".carousel-inner").append(
                    `<div class="carousel-item">
<<<<<<< HEAD
                        <img class="d-block w-100" src="${response.data.meals[0].strMealThumb}">
                        <div class="carousel-caption d-none d-md-block">
                            <div style="padding : 5px; border-radius: 15px; background-color: rgba(255, 255, 255, 0.63); font-size:bold;"> 
                                <h3 class="text-carousel">${response.data.meals[0].strMeal}</h3>
                            </div>
                        </div>
=======
                        <img class="d-block w-100" src="${response.data.meals[0].strMealThumb}"
>>>>>>> f59234e1548cf8471117d0989315f62817d08e26
                    </div>`
                )
            }
            carauselNextBtn()
        })
    }       
}

function carauselNextBtn() {
    $(".carousel-inner").append(`
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    `)
}