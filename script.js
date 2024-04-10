
var newBtn=document.getElementById("getNew")
var map=document.getElementById("map")
function getCountry() {
    let country=document.getElementById("country")
    let pageNum=Math.floor(Math.random() *6)+1
    let reg=document.getElementById("reg")
    let cap=document.getElementById("cap")
    let incomeLevel=document.getElementById("incomeLevel")
    fetch("https://api.worldbank.org/v2/countries/?format=json&page="+pageNum).then(function(resp) {
        
        return resp.json()
    }).then(function(data) {
        l=data[1].length
        x=Math.floor(Math.random() *l)
        lat=data[1][x].latitude
        lon=data[1][x].longitude
        reg.textContent="Region: " +data[1][x].region.value
        cap.textContent="Capital City: " +data[1][x].capitalCity
        incomeLevel.textContent="Income Level: "+data[1][x].incomeLevel.value
        if(data[1][x].region.value ==="Aggregates"){
            getCountry()
            
        }
        else{
            country.textContent=data[1][x].name;
  
            map.classList.add("bg-dark")
            map.src="https://maps.google.com/maps?q="+lat+","+lon+"&hl=en&z=6&amp&output=embed"
                let desc=document.getElementById("desc")
                fetch("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles="+country.textContent+"&formatversion=2&exsentences=3&exlimit=1&explaintext=1&origin=*").then(function(resp) {
            
                return resp.json()
            }).then(function(data) {
                desc.textContent="Description: "+data.query.pages[0].extract
                if(desc.textContent.length<40){
                    desc.textContent="Description: Not Avaliable"
                }
            })
        }
       
            
       
    
    });
  }

newBtn.onclick=getCountry