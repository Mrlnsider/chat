var User = function (name = "user",
					 foto = "http://iconshow.me/media/images/ui/ios7-icons/png/256/contact-outline.png",
 					 email = "user@gmail.com") {
	this.name = name
	this.fotoURL = foto
	this.email = email
	this.info = ""	
	this.city = "Мой город"
	var adress = "Адресс проживания"
	Object.defineProperty ( this, "city", {
	        enumerable: false
	})
}
User.prototype.chat = (function ( text ) {
	var elem = document.createElement ( 'div' )
	document.body.appendChild ( elem );
	elem.style =  `
		position : fixed;
		right : 15px;
		bottom : 0px;
		width : 300px;
		height : 350px;
		padding : 10px;
		border : 1px solid black;
		border-top-left-radius: 20px;
		background : grey;
		overflow: auto;
		text-align: center;
	`	
	elem.foto = elem.appendChild (document.createElement ( 'img' ) )
	elem.foto.style.width = "60px" 
	elem.name = elem.appendChild (document.createElement ( 'p' ) )
	elem.name.style = "font-weight: bold"
	elem.message = elem.appendChild (document.createElement ( 'textarea' ) )
	elem.message.style = "width: 100%; height: 90%; resize: none"
	elem.message.placeholder = "Сообщение"
	elem.message.oninput = function ( event ) {
        event.target.parentNode.querySelector ( 'img' ).src = User.admin.fotoURL
        event.target.parentNode.querySelector ( 'p' ).innerHTML = User.admin.name
    }
	return elem 
}) ()
User.__proto__.admin = {
	name : "Admin",
	fotoURL : "http://www.beritakedukaan.com/assets/logo.png"
}

User.prototype.write = function (text) {
	this.chat.foto.src = this.fotoURL
	this.chat.name.innerHTML = this.name
	this.chat.message.value = text
}
User.prototype.read = function () {
	this.chat.foto.src = this.fotoURL
	this.chat.name.innerHTML = this.name
	this.info = this.chat.message.value
    console.log ( `${this.name} прочитал сообщение:\n${this.info}` )
    this.chat.message.value= "Прочитано"
}
var user = [] 
user [1] = new User ("Max", "https://i.pinimg.com/originals/3b/7d/6f/3b7d6f60e2d450b899c322266fc6edfd.png", "maxovsyanikov@gmail.com")
user [2] = new User ("Igor", "https://cdn0.iconfinder.com/data/icons/customers-and-service/512/13.png")
user [3] = new User ()

function getOPN (user) {
	console.log ("Cобственные свойства экземпляра :",Object.getOwnPropertyNames ( user ))
}
function getKeys (user) {
	console.log ("Cобственные перечислимые свойства экземпляра :",Object.keys ( user ))
}
function forIn (user) {
	for (var x in user )
 	console.log ("Перечислимое свойство экземпляра :", [x] , user[x])
}

// 1) массив с именами собственные свойства экземпляра --- Object.getOwnPropertyNames ( obj )
// 2) массив с именами собственные перечислимые свойства экземпляра --- Object.keys ( obj )
// 3) перечислимые свойства экземпляра ( и собственные, и унаследованные ) --- for ... in