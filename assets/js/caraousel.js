const localhost = "http://localhost:3000"

$(document).ready(function(){
    carausel()
})

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
                        <img class="d-block w-100" src="${response.data.meals[0].strMealThumb}"
                    </div>`
                )
            } else {
                $(".carousel-inner").append(
                    `<div class="carousel-item">
                        <img class="d-block w-100" src="${response.data.meals[0].strMealThumb}"
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