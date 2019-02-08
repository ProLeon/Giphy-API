console.log("hello");
$(document).ready(function(){
    //variables
    let divId = 0;
    let amntOfFavs = 9;
    //array for default gifs on the page
    let gifs = [
        "Dogs",
        "Cats",
        "Cockatiels",
        "Birds"
    ]
    let favorites = [
        newFav = {
            src: "assets/images/placeholder.jpg",
            imgAnimated: "assets/images/placeholder.jpg",
            rating: "Add more favorites!",
        },
        newFav = {
            src: "assets/images/placeholder.jpg",
            imgAnimated: "assets/images/placeholder.jpg",
            rating: "Add more favorites!",
        },
        newFav = {
            src: "assets/images/placeholder.jpg",
            imgAnimated: "assets/images/placeholder.jpg",
            rating: "Add more favorites!",
        },
        newFav = {
            src: "assets/images/placeholder.jpg",
            imgAnimated: "assets/images/placeholder.jpg",
            rating: "Add more favorites!",
        },
        newFav = {
            src: "assets/images/placeholder.jpg",
            imgAnimated: "assets/images/placeholder.jpg",
            rating: "Add more favorites!",
        },
        newFav = {
            src: "assets/images/placeholder.jpg",
            imgAnimated: "assets/images/placeholder.jpg",
            rating: "Add more favorites!",
        },
        newFav = {
            src: "assets/images/placeholder.jpg",
            imgAnimated: "assets/images/placeholder.jpg",
            rating: "Add more favorites!",
        },
        newFav = {
            src: "assets/images/placeholder.jpg",
            imgAnimated: "assets/images/placeholder.jpg",
            rating: "Add more favorites!",
        },
        newFav = {
            src: "assets/images/placeholder.jpg",
            imgAnimated: "assets/images/placeholder.jpg",
            rating: "Add more favorites!",
        },
        newFav = {
            src: "assets/images/placeholder.jpg",
            imgAnimated: "assets/images/placeholder.jpg",
            rating: "Add more favorites!",
        },
    ];
    addGifButtons = function(){
        $("form").empty();
        for(i = 0;i < gifs.length; i++){
            $("form").append(
                "<button text='" + gifs[i] + "' class='btn btn-info' type='button' style='margin: 4px'>" + gifs[i] + "</button>"
            );
        }
        $("form").append(
            "<button text='' class='btn btn-danger' type='button' style='margin: 4px' buttonType='favButton'>" + "Favorites" + "</button>"
        );
    }
    addGifButtons();
    let generateGifs = function(type){
        queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=04V0cm1f2YcjKtGyckgcki1hbA3YZct5&limit=20"
        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function(response){
            console.log(response);
            divId += 1;
            $("#mainContent").prepend(
            "<div id='" + divId + "' class='row gifBox'>" +
                "<div class='col-md-12'>" +
                    "<div class='row'>" +
                        "<div class='col-md-2'>" +
                            "<img class='imgStyle' style='width:100%;height:100%;border: 2px solid white' src='" + response.data[0].images.fixed_height_still.url + "' animated='"+ response.data[0].images.fixed_height.url + "' still='"+ response.data[0].images.fixed_height_still.url +"' status='"+ "still" + "'/>" +
                        "</div>" +
                       " <div class='col-md-2'>" +
                            "<img class='imgStyle' style='width:100%;height:100%;border: 2px solid white' src='" + response.data[1].images.fixed_height_still.url + "' animated='"+ response.data[1].images.fixed_height.url + "' still='"+ response.data[1].images.fixed_height_still.url +"' status='"+ "still" + "'/>" +
                        "</div>" +
                        "<div class='col-md-2'>" +
                            "<img class='imgStyle' style='width:100%;height:100%;border: 2px solid white' src='" + response.data[2].images.fixed_height_still.url + "' animated='"+ response.data[2].images.fixed_height.url + "' still='"+ response.data[2].images.fixed_height_still.url +"' status='"+ "still" + "'/>" +
                       " </div>" +
                        "<div class='col-md-2'>" +
                            "<img class='imgStyle' style='width:100%;height:100%;border: 2px solid white' src='" + response.data[3].images.fixed_height_still.url + "' animated='"+ response.data[3].images.fixed_height.url + "' still='"+ response.data[3].images.fixed_height_still.url +"' status='"+ "still" + "'/>" +
                        "</div>" +
                        "<div class='col-md-2'>" +
                           " <img class='imgStyle' style='width:100%;height:100%;border: 2px solid white' src='" + response.data[4].images.fixed_height_still.url + "' animated='"+ response.data[4].images.fixed_height.url + "' still='"+ response.data[4].images.fixed_height_still.url +"' status='"+ "still" + "'/>" +
                        "</div>" +
                        "<div class='col-md-2'>" +
                            "<button class='btn btn-info' type='button' buttonId='" + divId + "' buttonType='closeButton'>" + "x" + "</button>" +                      
                        "</div>" +
                    "</div>" +
                    "<div class='row'>" +
                        "<div class='col-md-2' style='color:white'>" +
                            "rating :  " + response.data[0].rating + "  " + "<button class='btn btn-danger' type='button' storedRating ='" + response.data[0].rating + "' storedImgAnimated ='" + response.data[0].images.fixed_height.url + "' storedImgStill ='" + response.data[0].images.fixed_height_still.url + "' buttonType='favButtonAdd'>" + "+Favorite" + "</button>" +
                        "</div>" +
                       " <div class='col-md-2' style='color:white'>" +
                            "rating :  " + response.data[1].rating + "  " + "<button class='btn btn-danger' type='button' storedRating ='" + response.data[1].rating + "' storedImgAnimated ='" + response.data[1].images.fixed_height.url + "' storedImgStill ='" + response.data[1].images.fixed_height_still.url + "' buttonType='favButtonAdd'>" + "+Favorite" + "</button>" + " " +
                        "</div>" +
                        "<div class='col-md-2' style='color:white'>" +
                            "rating :  " + response.data[2].rating + "  " + "<button class='btn btn-danger' type='button' storedRating ='" + response.data[2].rating + "' storedImgAnimated ='" + response.data[2].images.fixed_height.url + "' storedImgStill ='" + response.data[2].images.fixed_height_still.url + "' buttonType='favButtonAdd'>" + "+Favorite" + "</button>" + " " +
                       " </div>" +
                        "<div class='col-md-2' style='color:white'>" +
                            "rating :  " + response.data[3].rating + "  " + "<button class='btn btn-danger' type='button' storedRating ='" + response.data[3].rating + "' storedImgAnimated ='" + response.data[3].images.fixed_height.url + "' storedImgStill ='" + response.data[3].images.fixed_height_still.url + "' buttonType='favButtonAdd'>" + "+Favorite" + "</button>" + " " +
                        "</div>" +
                        "<div class='col-md-2' style='color:white'>" +
                            "rating :  " + response.data[4].rating + "  " + "<button class='btn btn-danger' type='button' storedRating ='" + response.data[4].rating + "' storedImgAnimated ='" + response.data[4].images.fixed_height.url + "' storedImgStill ='" + response.data[4].images.fixed_height_still.url + "' buttonType='favButtonAdd'>" + "+Favorite" + "</button>" + " " +
                        "</div>" +
                        "<div class='col-md-2' style='color:white'>" +
                           ""  +                      
                        "</div>" +
                    "</div>" +
                "</div>" +
            "</div>"
            )
            divId += 1;
            $("#mainContent").prepend(
            "<div id='" + divId + "' class='row gifBox'>" +
                "<div class='col-md-12'>" +
                    "<div class='row'>" +
                        "<div class='col-md-2'>" +
                            "<img class='imgStyle' style='width:100%;height:100%;border: 2px solid white' src='" + response.data[5].images.fixed_height_still.url + "' animated='"+ response.data[5].images.fixed_height.url + "' still='"+ response.data[5].images.fixed_height_still.url +"' status='"+ "still" + "'/>" +
                        "</div>" +
                       " <div class='col-md-2'>" +
                            "<img class='imgStyle' style='width:100%;height:100%;border: 2px solid white' src='" + response.data[6].images.fixed_height_still.url + "' animated='"+ response.data[6].images.fixed_height.url + "' still='"+ response.data[6].images.fixed_height_still.url +"' status='"+ "still" + "'/>" +
                        "</div>" +
                        "<div class='col-md-2'>" +
                            "<img class='imgStyle' style='width:100%;height:100%;border: 2px solid white' src='" + response.data[7].images.fixed_height_still.url + "' animated='"+ response.data[7].images.fixed_height.url + "' still='"+ response.data[7].images.fixed_height_still.url +"' status='"+ "still" + "'/>" +
                       " </div>" +
                        "<div class='col-md-2'>" +
                            "<img class='imgStyle' style='width:100%;height:100%;border: 2px solid white' src='" + response.data[8].images.fixed_height_still.url + "' animated='"+ response.data[8].images.fixed_height.url + "' still='"+ response.data[8].images.fixed_height_still.url +"' status='"+ "still" + "'/>" +
                        "</div>" +
                        "<div class='col-md-2'>" +
                           " <img class='imgStyle' style='width:100%;height:100%;border: 2px solid white' src='" + response.data[9].images.fixed_height_still.url + "' animated='"+ response.data[9].images.fixed_height.url + "' still='"+ response.data[9].images.fixed_height_still.url +"' status='"+ "still" + "'/>" +
                        "</div>" +
                        "<div class='col-md-2'>" +
                            "<button class='btn btn-info' type='button' buttonId='" + divId + "' buttonType='closeButton'>" + "x" + "</button>" +                      
                        "</div>" +
                    "</div>" +
                    "<div class='row'>" +
                        "<div class='col-md-2' style='color:white'>" +
                            "rating :  " + response.data[5].rating + "  " + "<button class='btn btn-danger' type='button' storedRating ='" + response.data[5].rating + "' storedImgAnimated ='" + response.data[5].images.fixed_height.url + "' storedImgStill ='" + response.data[5].images.fixed_height_still.url + "' buttonType='favButtonAdd'>" + "+Favorite" + "</button>" + " " +
                        "</div>" +
                       " <div class='col-md-2' style='color:white'>" +
                            "rating :  " + response.data[6].rating + "  " + "<button class='btn btn-danger' type='button' storedRating ='" + response.data[6].rating + "' storedImgAnimated ='" + response.data[6].images.fixed_height.url + "' storedImgStill ='" + response.data[6].images.fixed_height_still.url + "' buttonType='favButtonAdd'>" + "+Favorite" + "</button>" + " " +
                        "</div>" +
                        "<div class='col-md-2' style='color:white'>" +
                            "rating :  " + response.data[7].rating + "  " + "<button class='btn btn-danger' type='button' storedRating ='" + response.data[7].rating + "' storedImgAnimated ='" + response.data[7].images.fixed_height.url + "' storedImgStill ='" + response.data[7].images.fixed_height_still.url + "' buttonType='favButtonAdd'>" + "+Favorite" + "</button>" + " " +
                       " </div>" +
                        "<div class='col-md-2' style='color:white'>" +
                            "rating :  " + response.data[8].rating + "  " + "<button class='btn btn-danger' type='button' storedRating ='" + response.data[8].rating + "' storedImgAnimated ='" + response.data[8].images.fixed_height.url + "' storedImgStill ='" + response.data[8].images.fixed_height_still.url + "' buttonType='favButtonAdd'>" + "+Favorite" + "</button>" + " " +
                        "</div>" +
                        "<div class='col-md-2' style='color:white'>" +
                            "rating :  " + response.data[0].rating + "  " + "<button class='btn btn-danger' type='button' storedRating ='" + response.data[9].rating + "' storedImgAnimated ='" + response.data[9].images.fixed_height.url + "' storedImgStill ='" + response.data[9].images.fixed_height_still.url + "' buttonType='favButtonAdd'>" + "+Favorite" + "</button>" + " " +
                        "</div>" +
                        "<div class='col-md-2' style='color:white'>" +
                           ""  +                      
                        "</div>" +
                    "</div>" +
                "</div>" +
            "</div>"
            )
        });
    }
    //pause and play gifs click handler
    $("html").on("click", "img", function(){
        status = $(this).attr("status");
        if(status == "still"){
            $(this).attr("src", $(this).attr("animated"))
            $(this).attr("status", "animated");
        }else{
            $(this).attr("src", $(this).attr("still"))
            $(this).attr("status", "still");
        };
    });
    generateFavoriteGifs = function(){
        $("#mainContent").prepend(
            "<div id='" + divId + "' class='row gifBox'>" +
                "<div class='col-md-12'>" +
                    "<div class='row'>" +
                        "<div class='col-md-2'>" +
                            "<img class='imgStyle' style='width:100%;height:100%;border: 2px solid white' src='" + favorites[0].src + "' animated='"+ favorites[0].imgAnimated + "' still='"+ favorites[0].src +"' status='"+ "still" + "'/>" +
                        "</div>" +
                       " <div class='col-md-2'>" +
                            "<img class='imgStyle' style='width:100%;height:100%;border: 2px solid white' src='" + favorites[1].src + "' animated='"+ favorites[1].imgAnimated + "' still='"+ favorites[1].src +"' status='"+ "still" + "'/>" +
                        "</div>" +
                        "<div class='col-md-2'>" +
                            "<img class='imgStyle' style='width:100%;height:100%;border: 2px solid white' src='" + favorites[2].src + "' animated='"+ favorites[2].imgAnimated + "' still='"+ favorites[2].src +"' status='"+ "still" + "'/>" +
                       " </div>" +
                        "<div class='col-md-2'>" +
                            "<img class='imgStyle' style='width:100%;height:100%;border: 2px solid white' src='" + favorites[3].src + "' animated='"+ favorites[3].imgAnimated + "' still='"+ favorites[3].src +"' status='"+ "still" + "'/>" +
                        "</div>" +
                        "<div class='col-md-2'>" +
                           " <img class='imgStyle' style='width:100%;height:100%;border: 2px solid white' src='" + favorites[4].src + "' animated='"+ favorites[4].imgAnimated + "' still='"+ favorites[4].src +"' status='"+ "still" + "'/>" +
                        "</div>" +
                        "<div class='col-md-2'>" +
                            "<button class='btn btn-info' type='button' buttonId='" + divId + "' buttonType='closeButton'>" + "x" + "</button>" +                      
                        "</div>" +
                    "</div>" +
                    "<div class='row'>" +
                        "<div class='col-md-2' style='color:white'>" +
                            "rating: " + favorites[0].rating +
                        "</div>" +
                       " <div class='col-md-2' style='color:white'>" +
                            "rating: " + favorites[1].rating +
                        "</div>" +
                        "<div class='col-md-2' style='color:white'>" +
                            "rating: " + favorites[2].rating +
                       " </div>" +
                        "<div class='col-md-2' style='color:white'>" +
                            "rating: " + favorites[3].rating +
                        "</div>" +
                        "<div class='col-md-2' style='color:white'>" +
                            "rating: " + favorites[4].rating +
                        "</div>" +
                        "<div class='col-md-2' style='color:white'>" +
                           ""  +                      
                        "</div>" +
                    "</div>" +
                "</div>" +
            "</div>"
            )
            divId += 1;
            $("#mainContent").prepend(
            "<div id='" + divId + "' class='row gifBox'>" +
                "<div class='col-md-12'>" +
                    "<div class='row'>" +
                        "<div class='col-md-2'>" +
                            "<img class='imgStyle' style='width:100%;height:100%;border: 2px solid white' src='" + favorites[5].src + "' animated='"+ favorites[5].imgAnimated + "' still='"+ favorites[5].src +"' status='"+ "still" + "'/>" +
                        "</div>" +
                       " <div class='col-md-2'>" +
                            "<img class='imgStyle' style='width:100%;height:100%;border: 2px solid white' src='" + favorites[6].src + "' animated='"+ favorites[6].imgAnimated + "' still='"+ favorites[6].src +"' status='"+ "still" + "'/>" +
                        "</div>" +
                        "<div class='col-md-2'>" +
                            "<img class='imgStyle' style='width:100%;height:100%;border: 2px solid white' src='" + favorites[7].src + "' animated='"+ favorites[7].imgAnimated + "' still='"+ favorites[7].src +"' status='"+ "still" + "'/>" +
                       " </div>" +
                        "<div class='col-md-2'>" +
                            "<img class='imgStyle' style='width:100%;height:100%;border: 2px solid white' src='" + favorites[8].src + "' animated='"+ favorites[8].imgAnimated + "' still='"+ favorites[8].src +"' status='"+ "still" + "'/>" +
                        "</div>" +
                        "<div class='col-md-2'>" +
                           " <img class='imgStyle' style='width:100%;height:100%;border: 2px solid white' src='" + favorites[9].src + "' animated='"+ favorites[9].imgAnimated + "' still='"+ favorites[9].src +"' status='"+ "still" + "'/>" +
                        "</div>" +
                        "<div class='col-md-2'>" +
                            "<button class='btn btn-info' type='button' buttonId='" + divId + "' buttonType='closeButton'>" + "x" + "</button>" +                      
                        "</div>" +
                    "</div>" +
                    "<div class='row'>" +
                        "<div class='col-md-2' style='color:white'>" +
                            "rating: " + favorites[5].rating +
                        "</div>" +
                       " <div class='col-md-2' style='color:white'>" +
                            "rating: " + favorites[6].rating +
                        "</div>" +
                        "<div class='col-md-2' style='color:white'>" +
                            "rating: " + favorites[7].rating +
                       " </div>" +
                        "<div class='col-md-2' style='color:white'>" +
                            "rating: " + favorites[8].rating +
                        "</div>" +
                        "<div class='col-md-2' style='color:white'>" +
                            "rating: " + favorites[9].rating +
                        "</div>" +
                        "<div class='col-md-2' style='color:white'>" +
                           ""  +                      
                        "</div>" +
                    "</div>" +
                "</div>" +
            "</div>"
            );
        
    }
    //checks for button you clicked on and displays gifs or deletes a div or adds favorites
    $("html").on("click","button", function(){
        if($(this).attr("buttonType") == 'closeButton'){
            divToDelete = $(this).attr("buttonId");
            $("#" + divToDelete ).remove();
        }else if($(this).attr("buttonType") == 'submitButton'){
            if($(".form-control").val() !== ""){
                newButton = $(".form-control").val();
                $(".form-control").val("");
                gifs.push(newButton);
                addGifButtons();
            };
        }else if($(this).attr("buttonType") == 'favButtonAdd'){
            if (amntOfFavs > -1){
                newFav = {
                    src: $(this).attr("storedImgStill"),
                    imgAnimated: $(this).attr("storedImgAnimated"),
                    rating: $(this).attr("storedRating"),
                }
                favorites.splice(amntOfFavs, 1, newFav);
                amntOfFavs -= 1;
            }else{
                alert("Sorry you've maxed out your favorite list")
                if(confirm("Would you like to clear out your favorite list?")== true){
                    favorites = [
                        newFav = {
                            src: "assets/images/placeholder.jpg",
                            imgAnimated: "assets/images/placeholder.jpg",
                            rating: "Add more favorites!",
                        },
                        newFav = {
                            src: "assets/images/placeholder.jpg",
                            imgAnimated: "assets/images/placeholder.jpg",
                            rating: "Add more favorites!",
                        },
                        newFav = {
                            src: "assets/images/placeholder.jpg",
                            imgAnimated: "assets/images/placeholder.jpg",
                            rating: "Add more favorites!",
                        },
                        newFav = {
                            src: "assets/images/placeholder.jpg",
                            imgAnimated: "assets/images/placeholder.jpg",
                            rating: "Add more favorites!",
                        },
                        newFav = {
                            src: "assets/images/placeholder.jpg",
                            imgAnimated: "assets/images/placeholder.jpg",
                            rating: "Add more favorites!",
                        },
                        newFav = {
                            src: "assets/images/placeholder.jpg",
                            imgAnimated: "assets/images/placeholder.jpg",
                            rating: "Add more favorites!",
                        },
                        newFav = {
                            src: "assets/images/placeholder.jpg",
                            imgAnimated: "assets/images/placeholder.jpg",
                            rating: "Add more favorites!",
                        },
                        newFav = {
                            src: "assets/images/placeholder.jpg",
                            imgAnimated: "assets/images/placeholder.jpg",
                            rating: "Add more favorites!",
                        },
                        newFav = {
                            src: "assets/images/placeholder.jpg",
                            imgAnimated: "assets/images/placeholder.jpg",
                            rating: "Add more favorites!",
                        },
                        newFav = {
                            src: "assets/images/placeholder.jpg",
                            imgAnimated: "assets/images/placeholder.jpg",
                            rating: "Add more favorites!",
                        },
                    ];
                    amntOfGifs = 9;
                }
            }
        }else if($(this).attr("buttonType") == 'favButton'){
            generateFavoriteGifs();
            console.log("display Favs");
        }else{
        console.log($(this).attr("text"));
        search = $(this).attr("text");
        generateGifs();
        }
    });
});
