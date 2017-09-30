var atkins_query = "Atkin's food site:pinterest.com";

$("#atkins_button").on("click", function() {
	var params = {
            // Request parameters
            "q": atkins_query,
            "count": "10",
            "offset": "0",
            "mkt": "en-us",
            "safeSearch": "Moderate",
            "imageType": "Photo",
            "size": "Large"
        };

        $("#image_container_header_div").empty();

    	$("#image_container_header_div").append("<h1>Atkin's Diet</h1><br><h4>Mouse over to see a larger image!</h4>");

        $("#image_container").empty();

        $.ajax({
        	url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?" + $.param(params),
        	beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","8e73ba146d4b44a0a7ed605fb8306728");
            },
            type: "GET",
            // Request body
            data: "{body}",
        }).done(function(data) {

        	console.log(data);

        	var stuffFromBing = data.value;

            // Looping through each result item
            for (var i = 0; i < stuffFromBing.length; i++) {

            	var search_image = $("<img class=\"image_hover\">");
            	search_image.attr("src", data.value[i].contentUrl);

            	$("#image_container").append(search_image);

            };
        });
    });

var vegetarian_query = "vegetarian food -vegan site:pinterest.com";

$("#vegetarian_button").on("click", function() {
	var params = {
                // Request parameters
                "q": vegetarian_query,
                "count": "10",
                "offset": "0",
                "mkt": "en-us",
                "safeSearch": "Moderate",
                "imageType": "Photo",
                "size": "Large"
            };

        	$("#image_container_header_div").empty();

    		$("#image_container_header_div").append("<h1>Vegetarian</h1><br><h4>Mouse over to see a larger image!</h4>");

            $("#image_container").empty();

            $.ajax({
            	url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?" + $.param(params),
            	beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","8e73ba146d4b44a0a7ed605fb8306728");
            },
            type: "GET",
            // Request body
            data: "{body}",
        })

            .done(function(data) {

            	console.log(data);

            	var stuffFromBing = data.value;

              // Looping through each result item
              for (var i = 0; i < stuffFromBing.length; i++) {

              	var search_image = $("<img class=\"image_hover\">");
              	search_image.attr("src", data.value[i].contentUrl);

              	$("#image_container").append(search_image);
              };
          });
        });

var vegan_query = "vegan food -site:pinterest.com";

$("#vegan_button").on("click", function() {
	var params = {
        // Request parameters
        "q": vegan_query,
        "count": "10",
        "offset": "0",
        "mkt": "en-us",
        "safeSearch": "Moderate",
        "imageType": "Photo",
        "size": "Large"
    };

    $("#image_container_header_div").empty();

    $("#image_container_header_div").append("<h1>Vegan</h1><br><h4>Mouse over to see a larger image!</h4>");

    $("#image_container").empty();

    $.ajax({
    	url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?" + $.param(params),
    	beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","8e73ba146d4b44a0a7ed605fb8306728");
            },
            type: "GET",
            // Request body
            data: "{body}",
        })

    .done(function(data) {

    	console.log(data);

    	var stuffFromBing = data.value;

              // Looping through each result item
              for (var i = 0; i < stuffFromBing.length; i++) {

              	var search_image = $("<img class=\"image_hover\">");
              	search_image.attr("src", data.value[i].contentUrl);

              	$("#image_container").append(search_image);
              };
          });
});

var south_beach_query = "South Beach food -site:pinterest.com -travel";

$("#south_beach_button").on("click", function() {
	var params = {
        // Request parameters
        "q": south_beach_query,
        "count": "10",
        "offset": "0",
        "mkt": "en-us",
        "safeSearch": "Moderate",
        "imageType": "Photo",
        "size": "Large"
    };

    $("#image_container_header_div").empty();

    $("#image_container_header_div").append("<h1>South Beach Diet</h1><br><h4>Mouse over to see a larger image!</h4>");

    $("#image_container").empty();

    $.ajax({
    	url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?" + $.param(params),
    	beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","8e73ba146d4b44a0a7ed605fb8306728");
            },
            type: "GET",
            // Request body
            data: "{body}",
        })

    .done(function(data) {

    	console.log(data);

    	var stuffFromBing = data.value;

              // Looping through each result item
              for (var i = 0; i < stuffFromBing.length; i++) {

              	var search_image = $("<img class=\"image_hover\">");
              	search_image.attr("src", data.value[i].contentUrl);

              	$("#image_container").append(search_image);
              };
          });
});

var mediterranean_query = "mediterranean food site:pinterest.com";

$("#mediterranean_button").on("click", function() {
	var params = {
        // Request parameters
        "q": mediterranean_query,
        "count": "10",
        "offset": "0",
        "mkt": "en-us",
        "safeSearch": "Moderate",
        "imageType": "Photo"
    };

    $("#image_container_header_div").empty();

    $("#image_container_header_div").append("<h1>Mediterranean Diet</h1><br><h4>Mouse over to see a larger image!</h4>");

    $("#image_container").empty();

    $.ajax({
    	url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?" + $.param(params),
    	beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","8e73ba146d4b44a0a7ed605fb8306728");
            },
            type: "GET",
            // Request body
            data: "{body}",
        })

    .done(function(data) {

    	console.log(data);

    	var stuffFromBing = data.value;

              // Looping through each result item
              for (var i = 0; i < stuffFromBing.length; i++) {

              	var search_image = $("<img class=\"image_hover\">");
              	search_image.attr("src", data.value[i].contentUrl);

              	$("#image_container").append(search_image);
              };
          });
});

var paleo_query = "paleo food -site:pinterest.com";

$("#paleo_button").on("click", function() {
	var params = {
        // Request parameters
        "q": paleo_query,
        "count": "10",
        "offset": "0",
        "mkt": "en-us",
        "safeSearch": "Moderate",
        "imageType": "Photo"
    };

    $("#image_container_header_div").empty();

    $("#image_container_header_div").append("<h1>Paleo Diet</h1><br><h4>Mouse over to see a larger image!</h4>");

    $("#image_container").empty();

    $.ajax({
    	url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?" + $.param(params),
    	beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","8e73ba146d4b44a0a7ed605fb8306728");
            },
            type: "GET",
            // Request body
            data: "{body}",
        })

    .done(function(data) {

    	console.log(data);

    	var stuffFromBing = data.value;

              // Looping through each result item
              for (var i = 0; i < stuffFromBing.length; i++) {

              	var search_image = $("<img class=\"image_hover\">");
              	search_image.attr("src", data.value[i].contentUrl);

              	$("#image_container").append(search_image);
              };
          });
});