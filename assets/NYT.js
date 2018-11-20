$("#searchButton").on("click", function (e) {
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm +
        "&api-key=98687988c69c42c99292e40062c2e174"
    console.log("SEARCH");

    e.preventDefault();
    var searchTerm = $("#searchTermBox").val();
    console.log("Im searching for:"+searchTerm);
    var numberRecord = $("#numberRecordBox").val();
    var startYear = $("#startYearBox").val();
    var startEnd = $("#endYearBox").val()
    //This is maybe where the articles should go $("#title-result").text(searchTerm);
    // var numberRecords = $("#numberRecords")
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (apiresponse) {
        console.log(apiresponse);

        var newsdetails=apiresponse.response.docs;
        console.log(newsdetails);
        for(var i=0;i<newsdetails.length;i++)
        {
          
            var newdiv=$("<div>");
            newdiv.html(newsdetails[i]);
            $("#contentDiv").prepend(newdiv);
        }
    });
});