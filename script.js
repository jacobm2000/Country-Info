
var newBtn=document.getElementById("getNew")
function getCountry(word) {
    var word=document.getElementById("word")
    var pageNum=Math.floor(Math.random() *6)+1
    console.log(pageNum)
    fetch("https://api.worldbank.org/v2/countries/?format=json&page="+pageNum).then(function(resp) {
        console.log(resp);
        return resp.json()
    }).then(function(data) {
        l=data[1].length
        x=Math.floor(Math.random() *l)
        console.log(data[1][x].region.value)
        if(data[1][x].region.value ==="Aggregates"){
            getCountry()
        }
       word.textContent=data[1][x].name;
        
       
    
    });
  }

newBtn.onclick=getCountry