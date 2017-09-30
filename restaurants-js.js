$('button').on('click', function() {
    // alert('button clicked');
    // API CODE WITH AJAX

    var topic = $(this).attr('data-name')
    console.log(topic);
    // put topic in query URL
    // var queryURL = "https://developers.zomato.com/api/v2.1/search?entity_id=278&entity_type=city&q=BBQ%20and%20Deli&count=3&cuisines=BBQ";
    var queryURL = "https://developers.zomato.com/api/v2.1/search?entity_id=278&entity_type=city" + "&q=" + topic + "&count=3"
    $.ajax({
            url: queryURL,
            method: 'GET',
            headers: {
                "user-key": "a373fcfb055ee56dffe8f90af3ca43dc",
            }
        })
        .done(function(response) {
            console.log(response.restaurants[0].restaurant.name);
            // Get the modal
            console.log(response);
            var modal = document.getElementById('myModal');

            // Get the button that opens the modal
            $('.modal-content').empty();
            modal.style.display = "block";
            for (var i = 0; i < response.restaurants.length; i++) {
                // add classes and button to HTML
                var a = $('<button>')
                a.addClass('topicButton');
                a.addClass('btn btn-primary');
                a.attr('data-name', response.restaurants[i].restaurant.name);
                a.text(response.restaurants[i].restaurant.name + response.restaurants[i].restaurant.location.address);
                $('.modal-content').append(a);
            }

            // Get the <span> element that closes the modal
            // var span = document.getElementsByClassName("close")[0];

            // When the user clicks on <span> (x), close the modal
            // span.onclick = function() {
            // modal.style.display = "none";
            // }

            // When the user clicks anywhere outside of the modal, close it


            // create for loop to target the array 

            // jQuery to put the for loop info in the text box 
            // $(".modal-content").text(response.restaurants);
            // push array data from the4 API to the var modal
        });
});
window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}