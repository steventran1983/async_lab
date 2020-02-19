const request = require('request')
const urlCat = 'https://cat-fact.herokuapp.com/facts';
const fs = require('fs');



function getJson(url,fn){
    request.get(url,(error,respone,body)=>{
        if(error) return fn(error,null);
        return fn(null,body);
    })
}

getJson(urlCat,(error,result) =>{
    if(error) return console.log(error.message);
    let data = JSON.parse(result).all;
    fs.writeFile('result.json',JSON.stringify(data),(err)=>{
        if(err) return console.log(err.message);
        console.log("saved");
    })
})