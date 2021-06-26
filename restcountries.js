var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {var data = JSON.parse(this.response);
    for(var j in data){
        console.log(data[j].flag)};
}
// console.log(data)}
    xhr.send();
