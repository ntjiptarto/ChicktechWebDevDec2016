function createFavorite() 
{
    var listOfFavorites = document.getElementsByClassName("favorite");
    console.log(listOfFavorites);

    var theFirstFavorite = listOfFavorites.item(0);

    var theNewFavorite = theFirstFavorite.cloneNode(true);

    document.getElementById("content").appendChild(theNewFavorite);

    var newFavoriteTitle = document.getElementById("creator-title").value;
    var newFavoriteDescription = document.getElementById("creator-description").value;
    
    console.log("The title of the new favorite is " + newFavoriteTitle);
    console.log("The description of the new favorite is " + newFavoriteDescription);


    var newFavoriteMedia = document.getElementById("creator-media").value;
    var newFavoriteTitle = document.getElementById("creator-title").value;
    var newFavoriteDescription = document.getElementById("creator-description").value;


    theNewFavorite.getElementsByClassName("title")[0].innerHTML = newFavoriteTitle;
    theNewFavorite.getElementsByClassName("description")[0].innerHTML = newFavoriteDescription;
    theNewFavorite.getElementsByClassName("media")[0].innerHTML = newFavoriteMedia;

}