function onClick () {
    // alert("clicked");
    var price = 1;
    var location = '144 Bloor St W Toronto, ON M5S 1M4';
    var term = 'coffee';
    var radius = 1000;
    
    console.log('HERE');
    var url = 'https://api.yelp.com/v3/businesses/search?'+ 'location=' + location + '&radius='+radius + '&limit=1' + '&term=' + term + '&price=' + price; 
    
    var key = 'Bearer 5qbNtRLgi9Qy1T48fKEE-ryGRujEbs-NJD8Yv3-LzqCddMUbV5o6n45b62vLdbYMmL-jdmIMhMEitgyKK_dc5D19gigPSKPsYg4eAKPsESUvEC9nSrdrKtBesX0XXnYx';
    fetch (url, {
        method: 'GET',
        headers: {
            'Authorization' : key,
            'Access-Control-Allow-Origin': '*'
        }
    }).then(response => response.json().then (responseJson => {
        var redirect = responseJson.businesses[0].url;
        window.location.href = redirect;
        
    }))
}

function randomPlace (){
    var url1 = 'https://www.yelp.ca/biz/mr-tonkatsu-toronto?osq=katsu';
    var url2 = 'https://www.yelp.ca/biz/gyubee-japanese-grill-bloor-toronto?osq=gyubee';
    var url3 = 'https://www.yelp.ca/biz/tokyo-sushi-toronto-11';
    var urls =  [url1, url2, url3];
    var random = Math.floor(Math.random()*3);
    window.location.href = urls[random];



}