const request = require("request");

function plus(num1,num2,cb){
    let URL = `http://localhost:3000/add/${num1}/${num2}`;
    request(URL,(error,res,body) =>{
        if(error) return cb(error,null);
        return cb(null,JSON.parse(body));
    }
    )
}

plus(6,7,(error,ketqua)=>{
    if(error) return console.log("Error");
    console.log(ketqua.result);
})

function multiple(num1,num2,cb){
    const URL = `http://localhost:3000/multiple/${num1}/${num2}`;
    request(URL,(error,res,body)=>{
        if(error) return cb(error.message);
        return cb(null,JSON.parse(body));
    })
}
multiple(8,10,(error,ketqua) =>{
    if(error) return console.log("Error");
    console.log(ketqua.result);
})

//(6+2)*3

plus(6,2,(error,ketqua)=>{
    let tong = ketqua.result;
    multiple(tong,3,(error,ketqua)=>{
        console.log(ketqua.result);
    }) 
})