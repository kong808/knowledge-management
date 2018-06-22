var express = require("express")
var app = express()
var http = require('http').Server(app)
var fs = require("fs")
var bodyParser = require('body-parser')

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies
app.use(express.static(__dirname+"/public"))

app.get('/', function(req, res){
	res.sendFile(__dirname+'/tesis.html')
})


app.get('/dictionary', function(req, res){
	fs.readFile("dictionary.json", function(err, rs){
		if(err){
			return console.error(err)
		}
		console.log("Diccionario.JSON levantado correctamente:¡200 OK! ")
		res.send(rs)
	})
})

app.post('/dictionary', function(req,res){
	var datos
	var rs = fs.readFileSync("dictionary.json")
	console.log("RS (result set): "+rs)
	datos  = JSON.parse(rs) //converts String to JS Object (String to--> JSON)
	var last = datos.dictionary.length
	console.log("Palabra a agregar: "+req.body.word)
	var word = {"word" : req.body.word} //creates a JSON object 
	datos.dictionary.push(word) //push a JSON object into dictionary JSON array
	datos = JSON.stringify(datos) //converts JSON to String (JSON to--> String)
	console.log("Result data: "+datos)
	fs.writeFile("dictionary.json", datos,'utf8')
	res.send()
})


var server = http.listen(8080, function(){
	
	var port = server.address().port
	console.log("Server Running in http://127.0.0.1:"+port)
	console.log("Base dir: "+__dirname)
})
