const express = require('express'); 
const app = express(); 
const port = 3000; 
const path = require('path'); 
app.use(express.static('public'));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views')); 

app.get('/', (req, res) => {
    res.render('index' ,  
    { binTodeci : ' '}); 
}); 

app.post('/inputBinary', function(req, res){

    var flag = true; 
    var binary = req.body.binary;
    var decimal = parseInt(binary, 2);

    for(var i = 0; i < binary.length; i++) {
        if((String(binary).charAt(i)!= 0 )&& (String(binary).charAt(i) != 1)) {
            console.log(String(binary).charAt(i));
            flag = false;
            break;  
        }
    }

    if(flag) {
        // res.send("받은값 : " + binary + "\n변환값 : " + decimal); // 사용자에게 지정한 값을 응답해줌
        res.render('index', { binTodeci : decimal}); 


    }else {
        res.send("입력값이 2진수가 아닙니다" ); // 사용자에게 지정한 값을 응답해줌
    }

});

app.listen(port, () => {
    console.log("server is 실행중~"); 
}); 
