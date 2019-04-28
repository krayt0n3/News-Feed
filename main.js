


var query;
$(document).on('click', '#submit', function(event) {
event.preventDefault();
var query = $('#newsinput').val();
var time = moment();
var past = moment().subtract(7, 'days').calendar();
var currentTime = moment().format("YYYY-MM-DD");
var weekTime = moment(past).format("YYYY-MM-DD");
var queryURL = "https://newsapi.org/v2/everything?q=" + query + "&from=" + weekTime + "&to=" + currentTime + "&sortBy=popularity&apiKey=b6d2347a5d08474fa7e6b3fa1b9b5de6";




    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then((response) => {
        console.log(response);
        for (let i = 1; i < 5; i++) {
            $('#news').append(`

<div class="card" style="width: 18rem;">
  <img src="${response.articles[i].urlToImage}" class="card-img-top" alt="${response.articles[i].publishedAt}">
  <div class="card-body">
    <h5 class="card-title">${response.articles[i].title}</h5>
    <p class="card-text">${response.articles[i].description}</p>
    <a href="${response.articles[i].url}" class="btn btn-primary">Learn More</a>
  </div>
</div>

    `);  $('#newsinput').val('');
    }
    }
    )
    })
