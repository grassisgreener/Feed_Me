$('#atkins-restaurant').on('click', function() {
    alert('button clicked');
    // API CODE WITH AJAX
    var topic = $(this).attr('data-name')"restaurants"
    console.log(topic);
    var queryURL = "https://developers.zomato.com/api/v2.1/categories?q=" + topic;

    $.ajax({
    	url: queryURL,
    	method: 'GET',
    	headers: {
    	"user-key": "a373fcfb055ee56dffe8f90af3ca43dc",
    	}
    })
        .done(function(response) {
            console.log(response)
        });
});

