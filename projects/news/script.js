// 64b6581a57704cfab2713bf6b41a9a3b (API key)
let countary = 'in';
//Api key
let apiKey = '64b6581a57704cfab2713bf6b41a9a3b';
//Grab the news container
let newsAccordion = document.getElementById("newsAccordion");
//intentiate an xhr object
let xhr = new XMLHttpRequest;
//Open the xhr object
xhr.open('GET',`http://api.mediastack.com/v1/news?access_key=4322012a2d42c558d9bee28a7e2b8863`,true);
//What to do when response is ready
xhr.onload = function(){
    if(this.status == 200){
      let json =   JSON.parse(this.responseText);
      let articles = json.data;
      let  newsHtml = '';
      articles.forEach(function(element,index) {
        // console.log(element,index);
          let news = `
          <div class="card">
                        <div class="card-header" id="heading${index}">
                            <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                            <b>Breaking News ${index + 1}:</b> ${element.title}
                            </button>
                            </h2>
                        </div>
      
                    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                            <div class="card-body">${element.description}. <a href="${element.url}" target="_blank">Read more here</a>  
                            </div>
                    </div>
            </div>`;
            
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else{
        console.error("Some error occured")
    }
}
xhr.send();

