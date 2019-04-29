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


<div class="card">
  <ul class="list-group list-group-flush">
  <a href="${response.articles[i].url}" target="_blank"><li class="list-group-item"><h6>${response.articles[i].title}</h6><br /><p>${response.articles[i].author}</p></li></a>
  </ul>
</div>



    `);  $('#newsinput').val('');
    }
    }
    )
    })
