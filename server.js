const express = require("express");
const app = express();


app.get('/',(req,res,next) =>{
    res.send("Thang Cong Tu");
})

app.get('/:operation/:firstnum/:secnum',(req,res,next)=>{
    const {operation, firstnum, secnum} = req.params;
    if(isNaN(firstnum) || isNaN(secnum)){
        res.send({error: "Invalid Parameter"});
    }

    // res.send(req.params);
    const obj = {
        pheptinh: operation,
        fist: firstnum,
        second: secnum
    };
    
    const calcualtion = new Calculation(operation,firstnum,secnum)
    calcualtion.result();
    res.send({
        operate: operation,
        fistNumber: firstnum,
        secNumber: secnum,
        result: calcualtion.result()
    })
    
})

function Calculation(operation,first,second){
    this.operation = operation;
    this.first = first;
    this.second = second;
}

Calculation.prototype.operate = function(){
    if(this.operation === 'add'){
        return '+'
    }
    if(this.operation === 'multiple'){
        return '*'
    }
    if(this.operation === 'divide'){
        return '/'
    }
    if(this.operation === 'subtract'){
        return '-'
    }
    
}

Calculation.prototype.result = function() {
    // console.log(this.operate);
    let result = `${this.first}${this.operate()}${this.second}`;
    console.log(result);
    return eval(result);
    // console.log(this.first,this.second,this.operate)
}

app.listen("3000");