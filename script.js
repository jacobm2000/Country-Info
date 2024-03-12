
var newBtn=document.getElementById("getNew")
var map=document.getElementById("map")
function getCountry(word) {
    var word=document.getElementById("word")
    var pageNum=Math.floor(Math.random() *6)+1

    fetch("https://api.worldbank.org/v2/countries/?format=json&page="+pageNum).then(function(resp) {
        
        return resp.json()
    }).then(function(data) {
        l=data[1].length
        x=Math.floor(Math.random() *l)
        lat=data[1][x].latitude
        lon=data[1][x].longitude
        map.src="https://maps.google.com/maps?q="+lat+","+lon+"&hl=en&z=2&amp&output=embed"
        if(data[1][x].region.value ==="Aggregates"){
            getCountry()
            
        }
       word.textContent=data[1][x].name;
        
       
    
    });
  }

newBtn.onclick=getCountry