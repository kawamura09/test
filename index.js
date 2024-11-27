const express = require('express');
const path = require('path')

const app = express();

const port = parseInt(process.env.PORT) || process.argv[3] 

app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs');

//ここから
let person = {
  name:"河村武流",//自分の名前
 nickname: "かわもちゃん", //ニックネーム      
 birthday:"9月4日",//誕生日
  zodiac: "乙女座",  //星座       
   
};


console.log("ニックネーム: " + person.nickname);
console.log("星座: " + person.zodiac);
console.log("誕生日: " + person.motto);


for (let key in person) {
  console.log(key + ": " + person[key]);
}
//ここまで



app.get('/api', (req, res) => {
  res.json({"msg": "Hello world"});

});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})