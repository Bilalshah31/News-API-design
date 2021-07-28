var news = document.getElementById('news');
function getData() {
  var searchValue = document.getElementById("search").value

  fetch(`https://newsapi.org/v2/everything?q=${searchValue}&from=2021-07-24&sortBy=publishedAt&apiKey=0f9b4062c0834d46ab541613cc85ff84`)
        .then(response => response.json())
        .then(json => setData(json))

  function setData(data) {
    
    news.innerHTML = ""

    for (var i = 0; i < data.articles.length; i++) {

      let card = `<div class="card  col-md-4  col-sm-6 " >
    <img class="card-img-top width="100%" src="${data.articles[i].urlToImage}" alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">${data.articles[i].author}</h5>
    <p class="card-text">${data.articles[i].description}</p>
    <p class="card-text">${data.articles[i].content}</p>
      </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${data.articles[i].publishedAt}</li>
    </ul>

      </div>`
      news.innerHTML += card;

    }
  }
}

















