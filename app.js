const db = require("./database.js");
const express = require("express")
const app = express()
const session = require("express-session")
var bodyparser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
var mysql = require('mysql');
const ejsLint = require('ejs-lint');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(session({
	secret: uuidv4(),
	resave: true,
	saveUninitialized: true
}))

// civil sem 1 enter
app.get('/civilsem1enter', function (req, res) {
	res.render("homepage/civil/civilsem1/civilsem1enter.ejs", { title: "civilsem1enter", success: "" });
});

// civil sem 2 enter
app.get('/civilsem2enter', function (req, res) {
	res.render("homepage/civil/civilsem2/civilsem2enter.ejs", { title: "civilsem2enter", success: "" });
});

// civil sem 3 enter
app.get('/civilsem3enter', function (req, res) {
	res.render("homepage/civil/civilsem3/civilsem3enter.ejs", { title: "civilsem3enter", success: "" });
});

// civil sem 4 enter
app.get('/civilsem4enter', function (req, res) {
	res.render("homepage/civil/civilsem4/civilsem4enter.ejs", { title: "civilsem4enter", success: "" });
});

// civil sem 5 enter
app.get('/civilsem5enter', function (req, res) {
	res.render("homepage/civil/civilsem5/civilsem5enter.ejs", { title: "civilsem5enter", success: "" });
});

// civil sem 6 enter
app.get('/civilsem6enter', function (req, res) {
	res.render("homepage/civil/civilsem6/civilsem6enter.ejs", { title: "civilsem6enter", success: "" });
});

// computer sem 1 enter
app.get('/computersem1enter', function (req, res) {
	res.render("homepage/computer/computersem1/computersem1enter.ejs", { title: "computersem1enter", success: "" });
});

// computer sem 2 enter
app.get('/computersem2enter', function (req, res) {
	res.render("homepage/computer/computersem2/computersem2enter.ejs", { title: "computersem2enter", success: "" });
});

// computer sem 3 enter
app.get('/computersem3enter', function (req, res) {
	res.render("homepage/computer/computersem3/computersem3enter.ejs", { title: "computersem3enter", success: "" });
});

// computer sem 4 enter
app.get('/computersem4enter', function (req, res) {
	res.render("homepage/computer/computersem4/computersem4enter.ejs", { title: "computersem4enter", success: "" });
});

// computer sem 5 enter
app.get('/computersem5enter', function (req, res) {
	res.render("homepage/computer/computersem5/computersem5enter.ejs", { title: "computersem5enter", success: "" });
});

// computer sem 6 enter
app.get('/computersem6enter', function (req, res) {
	res.render("homepage/computer/computersem6/computersem6enter.ejs", { title: "computersem6enter", success: "" });
});

// electronic sem 1 enter
app.get('/electronicsem1enter', function (req, res) {
	res.render("homepage/electronics/electronicsem1/electronicsem1enter.ejs", { title: "electronicsem1enter", success: "" });
});

// electronic sem 2 enter
app.get('/electronicsem2enter', function (req, res) {
	res.render("homepage/electronics/electronicsem2/electronicsem2enter.ejs", { title: "electronicsem2enter", success: "" });
});

// electronic sem 3 enter
app.get('/electronicsem3enter', function (req, res) {
	res.render("homepage/electronics/electronicsem3/electronicsem3enter.ejs", { title: "electronicsem3enter", success: "" });
});

// electronic sem 4 enter
app.get('/electronicsem4enter', function (req, res) {
	res.render("homepage/electronics/electronicsem4/electronicsem4enter.ejs", { title: "electronicsem4enter", success: "" });
});

// electronic sem 5 enter
app.get('/electronicsem5enter', function (req, res) {
	res.render("homepage/electronics/electronicsem5/electronicsem5enter.ejs", { title: "electronicsem5enter", success: "" });
});

// electronic sem 6 enter
app.get('/electronicsem6enter', function (req, res) {
	res.render("homepage/electronics/electronicsem6/electronicsem6enter.ejs", { title: "electronicsem6enter", success: "" });
});

// mechanical sem 1 enter
app.get('/mechanicalsem1enter', function (req, res) {
	res.render("homepage/mechanical/mechanicalsem1/mechanicalsem1enter.ejs", { title: "mechanicalsem1enter", success: "" });
});

// mechanical sem 2 enter
app.get('/mechanicalsem2enter', function (req, res) {
	res.render("homepage/mechanical/mechanicalsem2/mechanicalsem2enter.ejs", { title: "mechanicalsem2enter", success: "" });
});

// mechanical sem 3 enter
app.get('/mechanicalsem3enter', function (req, res) {
	res.render("homepage/mechanical/mechanicalsem3/mechanicalsem3enter.ejs", { title: "mechanicalsem3enter", success: "" });
});

// mechanical sem 4 enter
app.get('/mechanicalsem4enter', function (req, res) {
	res.render("homepage/mechanical/mechanicalsem4/mechanicalsem4enter.ejs", { title: "mechanicalsem4enter", success: "" });
});

// mechanical sem 5 enter
app.get('/mechanicalsem5enter', function (req, res) {
	res.render("homepage/mechanical/mechanicalsem5/mechanicalsem5enter.ejs", { title: "mechanicalsem5enter", success: "" });
});

// mechanical sem 6 enter
app.get('/mechanicalsem6enter', function (req, res) {
	res.render("homepage/mechanical/mechanicalsem6/mechanicalsem6enter.ejs", { title: "mechanicalsem6enter", success: "" });
});



////teacher co years path
app.get('/firstco1', function (req, res) {
	res.render("teacher/computer/firstco1.ejs", { title: "firstco", success: "", user: req.session.user });
});

app.get('/secondco1', function (req, res) {
	res.render("teacher/computer/secondco1.ejs", { title: "secondco", success: "", user: req.session.user });
});

app.get('/thirdco1', function (req, res) {
	res.render("teacher/computer/thirdco1.ejs", { title: "thirdco", success: "", user: req.session.user });
});


////teacher electronics years path
app.get('/firstelectronics1', function (req, res) {
	res.render("teacher/electronics/firstelectronics1.ejs", { title: "firstelectronics", success: "", user: req.session.user });
});

app.get('/secondelectronics1', function (req, res) {
	res.render("teacher/electronics/secondelectronics1.ejs", { title: "secondco", success: "", user: req.session.user });
});

app.get('/thirdelectronics1', function (req, res) {
	res.render("teacher/electronics/thirdelectronics1.ejs", { title: "thirdco", success: "", user: req.session.user });
});


////teacher civil years path
app.get('/firstcivil1', function (req, res) {
	res.render("teacher/civil/firstcivil1.ejs", { title: "firstcivil", success: "", user: req.session.user });
});

app.get('/secondcivil1', function (req, res) {
	res.render("teacher/civil/secondcivil1.ejs", { title: "secondco", success: "", user: req.session.user });
});

app.get('/thirdcivil1', function (req, res) {
	res.render("teacher/civil/thirdcivil1.ejs", { title: "thirdco", success: "", user: req.session.user });
});

////teacher mechanical years path
app.get('/firstmechanical1', function (req, res) {
	res.render("teacher/mechanical/firstmechanical1.ejs", { title: "firstco", success: "", user: req.session.user });
});

app.get('/secondmechanical1', function (req, res) {
	res.render("teacher/mechanical/secondmechanical1.ejs", { title: "secondco", success: "", user: req.session.user });
});

app.get('/thirdmechanical1', function (req, res) {
	res.render("teacher/mechanical/thirdmechanical1.ejs", { title: "thirdco", success: "", user: req.session.user });
});



///// principal co path

app.get('/firstco11', function (req, res) {
	res.render("principal/firstco11.ejs", { title: "firstco", success: "", user: req.session.user });
});

app.get('/secondco11', function (req, res) {
	res.render("principal/secondco11.ejs", { title: "secondco", success: "", user: req.session.user });
});

app.get('/thirdco11', function (req, res) {
	res.render("principal/thirdco11.ejs", { title: "thirdco", success: "", user: req.session.user });
});

///// principal civil path

app.get('/firstcivil11', function (req, res) {
	res.render("principal/firstcivil11.ejs", { title: "firstco", success: "", user: req.session.user });
});

app.get('/secondcivil11', function (req, res) {
	res.render("principal/secondcivil11.ejs", { title: "secondco", success: "", user: req.session.user });
});

app.get('/thirdcivil11', function (req, res) {
	res.render("principal/thirdcivil11.ejs", { title: "thirdco", success: "", user: req.session.user });
});

///// principal electronics path

app.get('/firstelectronics11', function (req, res) {
	res.render("principal/firstelectronics11.ejs", { title: "firstco", success: "", user: req.session.user });
});

app.get('/secondelectronics11', function (req, res) {
	res.render("principal/secondelectronics11.ejs", { title: "secondco", success: "", user: req.session.user });
});

app.get('/thirdelectronics11', function (req, res) {
	res.render("principal/thirdelectronics11.ejs", { title: "thirdco", success: "", user: req.session.user });
});

///// principal mechanical path

app.get('/firstmechanical11', function (req, res) {
	res.render("principal/firstmechanical11.ejs", { title: "firstco", success: "", user: req.session.user });
});

app.get('/secondmechanical11', function (req, res) {
	res.render("principal/secondmechanical11.ejs", { title: "secondco", success: "", user: req.session.user });
});

app.get('/thirdmechanical11', function (req, res) {
	res.render("principal/thirdmechanical11.ejs", { title: "thirdco", success: "", user: req.session.user });
});


// civil sem 1 otp
app.get('/otp11.1', function (req, res) {
	res.render("teacher/civil/civilsem1/civilsem1otpp.ejs", { title: "otp11.1", success: "", user: req.session.user });
});

// civil sem 2 otp
app.get('/otp11.2', function (req, res) {
	res.render("teacher/civil/civilsem2/civilsem2otpp.ejs", { title: "otp11.2", success: "", user: req.session.user });
});

// civil sem 3 otp
app.get('/otp11.3', function (req, res) {
	res.render("teacher/civil/civilsem3/civilsem3otpp.ejs", { title: "otp11.3", success: "", user: req.session.user });
});

// civil sem 4 otp
app.get('/otp11.4', function (req, res) {
	res.render("teacher/civil/civilsem4/civilsem4otpp.ejs", { title: "otp11.4", success: "", user: req.session.user });
});

// civil sem 5 otp
app.get('/otp11.5', function (req, res) {
	res.render("teacher/civil/civilsem5/civilsem5otpp.ejs", { title: "otp11.5", success: "", user: req.session.user });
});

// civil sem 6 otp
app.get('/otp11.6', function (req, res) {
	res.render("teacher/civil/civilsem6/civilsem6otpp.ejs", { title: "otp11.6", success: "", user: req.session.user });
});

// computer sem 1 otp
app.get('/otp11.7', function (req, res) {
	res.render("teacher/computer/computersem1/computersem1otpp.ejs", { title: "otp11.7", success: "", user: req.session.user });
});

// computer sem 2 otp
app.get('/otp11.8', function (req, res) {
	res.render("teacher/computer/computersem2/computersem2otpp.ejs", { title: "otp11.8", success: "", user: req.session.user });
});

// computer sem 3 otp
app.get('/otp11.9', function (req, res) {
	res.render("teacher/computer/computersem3/computersem3otpp.ejs", { title: "otp11.9", success: "", user: req.session.user });
});

// computer sem 4 otp
app.get('/otp11.10', function (req, res) {
	res.render("teacher/computer/computersem4/computersem4otpp.ejs", { title: "otp11.10", success: "", user: req.session.user });
});

// computer sem 5 otp
app.get('/otp11.11', function (req, res) {
	res.render("teacher/computer/computersem5/computersem5otpp.ejs", { title: "otp11.11", success: "", user: req.session.user });
});

// computer sem 6 otp
app.get('/otp11.12', function (req, res) {
	res.render("teacher/computer/computersem6/computersem6otpp.ejs", { title: "otp11.12", success: "", user: req.session.user });
});

// electronic sem 1 otp
app.get('/otp11.13', function (req, res) {
	res.render("teacher/electronics/electronicsem1/electronicsem1otpp.ejs", { title: "otp11.13", success: "", user: req.session.user });
});

// electronic sem 2 otp
app.get('/otp11.14', function (req, res) {
	res.render("teacher/electronics/electronicsem2/electronicsem2otpp.ejs", { title: "otp11.14", success: "", user: req.session.user });
});

// electronic sem 3 otp
app.get('/otp11.15', function (req, res) {
	res.render("teacher/electronics/electronicsem3/electronicsem3otpp.ejs", { title: "otp11.15", success: "", user: req.session.user });
});

// electronic sem 4 otp
app.get('/otp11.16', function (req, res) {
	res.render("teacher/electronics/electronicsem4/electronicsem4otpp.ejs", { title: "otp11.16", success: "", user: req.session.user });
});

// electronic sem 5 otp
app.get('/otp11.17', function (req, res) {
	res.render("teacher/electronics/electronicsem5/electronicsem5otpp.ejs", { title: "otp11.17", success: "", user: req.session.user });
});

// electronic sem 6 otp
app.get('/otp11.18', function (req, res) {
	res.render("teacher/electronics/electronicsem6/electronicsem6otpp.ejs", { title: "otp11.18", success: "", user: req.session.user });
});

// mechanical sem 1 otp
app.get('/otp11.19', function (req, res) {
	res.render("teacher/mechanical/mechanicalsem1/mechanicalsem1otpp.ejs", { title: "otp11.19", success: "", user: req.session.user });
});

// mechanical sem 2 otp
app.get('/otp11.20', function (req, res) {
	res.render("teacher/mechanical/mechanicalsem2/mechanicalsem2otpp.ejs", { title: "otp11.20", success: "", user: req.session.user });
});

// mechanical sem 3 otp
app.get('/otp11.21', function (req, res) {
	res.render("teacher/mechanical/mechanicalsem3/mechanicalsem3otpp.ejs", { title: "otp11.21", success: "", user: req.session.user });
});

// mechanical sem 4 otp
app.get('/otp11.22', function (req, res) {
	res.render("teacher/mechanical/mechanicalsem4/mechanicalsem4otpp.ejs", { title: "otp11.22", success: "", user: req.session.user });
});

// mechanical sem 5 otp
app.get('/otp11.23', function (req, res) {
	res.render("teacher/mechanical/mechanicalsem5/mechanicalsem5otpp.ejs", { title: "otp11.23", success: "", user: req.session.user });
});

// mechanical sem 6 otp
app.get('/otp11.24', function (req, res) {
	res.render("teacher/mechanical/mechanicalsem6/mechanicalsem6otpp.ejs", { title: "otp11.24", success: "", user: req.session.user });
});

/// login path
app.get('/', function (req, res) {
	res.render("home.ejs", { title: "homepage ", success: "" });
});


app.get('/index11', function (req, res) {
	res.render("teacher/index11.ejs", { title: " teachers homepage ", success: "" });
});

app.get('/index111', function (req, res) {
	res.render("principal/homepage.ejs", { title: " principal homepage ", success: "" });
});

app.get('/register', function (req, res) {
	res.render("admin/register.ejs", { title: " teachers homepage ", success: "" });
});

app.get('/register1', function (req, res) {
	res.render("teacher/register1.ejs", { title: " teachers homepage ", success: "" });
});


///admin path

app.get('/computer', function (req, res) {
	if (req.session.username1) {
		res.render("computer/computer.ejs", { title: "computer", success: "", user: req.session.user });
	} else {
		res.redirect("/login")
	}
});

app.get('/electronics', function (req, res) {
	if (req.session.username1) {
		res.render("electronics/electronics.ejs", { title: "electronics", success: "", user: req.session.user });
	} else {
		res.redirect("/login")
	}
});

app.get('/civil', function (req, res) {
	if (req.session.username1) {
		res.render("civil/civil.ejs", { title: "civil", success: "", user: req.session.user });
	} else {
		res.redirect("/login")
	}
});

app.get('/mechanical', function (req, res) {
	if (req.session.username1) {
		res.render("mechanical/mechanical.ejs", { title: "mechanical", success: "", user: req.session.user });
	} else {
		res.redirect("/login")
	}
});

///teachers path

app.get('/computer1', function (req, res) {
	if (req.session.username1) {
		res.render("teacher/computer1.ejs", { title: "computer", success: "", user: req.session.user });
	} else {
		res.redirect("/login11")
	}
});

app.get('/electronics1', function (req, res) {
	if (req.session.username1) {
		res.render("teacher/electronics1.ejs", { title: "electronics", success: "", user: req.session.user });
	} else {
		res.redirect("/login11")
	}
});

app.get('/civil1', function (req, res) {
	if (req.session.username1) {
		res.render("teacher/civil1.ejs", { title: "civil", success: "", user: req.session.user });
	} else {
		res.redirect("/login11")
	}
});

app.get('/mechanical1', function (req, res) {
	if (req.session.username1) {
		res.render("teacher/mechanical1.ejs", { title: "mechanical", success: "", user: req.session.user });
	} else {
		res.redirect("/login11")
	}
});

app.get('/login11', function (req, res) {
	res.render("teacher/login11.ejs", { title: "login", success: "" });
});

//// principal path

app.get('/computer11', function (req, res) {
	if (req.session.username1) {
		res.render("principal/computer11.ejs", { title: "computer", success: "", user: req.session.user });
	} else {
		res.redirect("/login111")
	}
});

app.get('/electronics11', function (req, res) {
	if (req.session.username1) {
		res.render("principal/electronics11.ejs", { title: "electronics", success: "", user: req.session.user });
	} else {
		res.redirect("/login111")
	}
});

app.get('/civil11', function (req, res) {
	if (req.session.username1) {
		res.render("principal/civil11.ejs", { title: "civil", success: "", user: req.session.user });
	} else {
		res.redirect("/login111")
	}
});

app.get('/mechanical11', function (req, res) {
	if (req.session.username1) {
		res.render("principal/mechanical11.ejs", { title: "mechanical", success: "", user: req.session.user });
	} else {
		res.redirect("/login111")
	}
});

app.get('/login11', function (req, res) {
	res.render("teacher/login11.ejs", { title: "login", success: "" });
});

// principal login
app.get('/login111', function (req, res) {
	res.render("principal/login111.ejs", { title: "login", success: "" });
});
////

app.get('/firstele', function (req, res) {
	res.render("electronics/firstele.ejs", { title: "firstelectronic", success: "", user: req.session.user });
});

app.get('/secondele', function (req, res) {
	res.render("electronics/secondele.ejs", { title: "secondelectronic", success: "", user: req.session.user });
});
app.get('/thirdele', function (req, res) {
	res.render("electronics/thirdele.ejs", { title: "thirdelectronic", success: "", user: req.session.user });
});

////

app.get('/firstco', function (req, res) {
	res.render("computer/firstco.ejs", { title: "firstco", success: "", user: req.session.user });
});

app.get('/secondco', function (req, res) {
	res.render("computer/secondco.ejs", { title: "secondco", success: "", user: req.session.user });
});

app.get('/thirdco', function (req, res) {
	res.render("computer/thirdco.ejs", { title: "thirdco", success: "", user: req.session.user });
});


/////

app.get('/firstce', function (req, res) {
	res.render("civil/firstcivil.ejs", { title: "firstce", success: "", user: req.session.user });
});

app.get('/secondce', function (req, res) {
	res.render("civil/secondcivil.ejs", { title: "secondce", success: "", user: req.session.user });
});
app.get('/thirdce', function (req, res) {
	res.render("civil/thirdcivil.ejs", { title: "thirdce", success: "", user: req.session.user });
});

/////

app.get('/firstme', function (req, res) {
	res.render("mechanical/firstmech.ejs", { title: "mechanical", success: "", user: req.session.user });
});

app.get('/secondme', function (req, res) {
	res.render("mechanical/secondmech.ejs", { title: "mechanical", success: "", user: req.session.user });
});
app.get('/thirdme', function (req, res) {
	res.render("mechanical/thirdmech.ejs", { title: "mechanical", success: "", user: req.session.user });
});

/////

app.get('/registerco', function (req, res) {
	res.render("registration/registerco.ejs", { title: "registerco", success: "" });
});

app.get('/registerce', function (req, res) {
	res.render("registration/registerce.ejs", { title: "registerce", success: "" });
});

app.get('/registerel', function (req, res) {
	res.render("registration/registerel.ejs", { title: "registerel", success: "" });
});

app.get('/registermec', function (req, res) {
	res.render("registration/registermec.ejs", { title: "registermec", success: "" });
});

///civil sem 1 
app.get('/civilsem1reg', function (req, res) {
	res.render("civil/civilsem1/civilsem1reg.ejs", { title: "sosem1reg", success: "" });
});

/// civil sem 2
app.get('/civilsem2reg', function (req, res) {
	res.render("civil/civilsem2/civilsem2reg.ejs", { title: "sosem2reg", success: "" });
});

/// civil sem 3
app.get('/civilsem3reg', function (req, res) {
	res.render("civil/civilsem3/civilsem3reg.ejs", { title: "sosem3reg", success: "" });
});

///civil sem 4
app.get('/civilsem4reg', function (req, res) {
	res.render("civil/civilsem4/civilsem4reg.ejs", { title: "sosem4reg", success: "" });
});

/// civil sem 5
app.get('/civilsem5reg', function (req, res) {
	res.render("civil/civilsem5/civilsem5reg.ejs", { title: "sosem5reg", success: "" });
});

///civil sem 6
app.get('/civilsem6reg', function (req, res) {
	res.render("civil/civilsem6/civilsem6reg.ejs", { title: "sosem6reg", success: "" });
});

///computer sem 1 
app.get('/computersem1reg', function (req, res) {
	res.render("computer/computersem1/computersem1reg.ejs", { title: "sosem1reg", success: "" });
});

/// computer sem 2
app.get('/computersem2reg', function (req, res) {
	res.render("computer/computersem2/computersem2reg.ejs", { title: "sosem2reg", success: "" });
});

/// computer sem 3
app.get('/computersem3reg', function (req, res) {
	res.render("computer/computersem3/computersem3reg.ejs", { title: "sosem3reg", success: "" });
});

///computer sem 4
app.get('/computersem4reg', function (req, res) {
	res.render("computer/computersem4/computersem4reg.ejs", { title: "sosem4reg", success: "" });
});

/// computer sem 5
app.get('/computersem5reg', function (req, res) {
	res.render("computer/computersem5/computersem5reg.ejs", { title: "sosem5reg", success: "" });
});

///computer sem 6
app.get('/computersem6reg', function (req, res) {
	res.render("computer/computersem6/computersem6reg.ejs", { title: "sosem6reg", success: "" });
});

///mechanical sem 1 
app.get('/mechanicalsem1reg', function (req, res) {
	res.render("mechanical/mechanicalsem1/mechanicalsem1reg.ejs", { title: "sosem1reg", success: "" });
});

/// mechanical sem 2
app.get('/mechanicalsem2reg', function (req, res) {
	res.render("mechanical/mechanicalsem2/mechanicalsem2reg.ejs", { title: "sosem2reg", success: "" });
});

/// mechanical sem 3
app.get('/mechanicalsem3reg', function (req, res) {
	res.render("mechanical/mechanicalsem3/mechanicalsem3reg.ejs", { title: "sosem3reg", success: "" });
});

///mechanical sem 4
app.get('/mechanicalsem4reg', function (req, res) {
	res.render("mechanical/mechanicalsem4/mechanicalsem4reg.ejs", { title: "sosem4reg", success: "" });
});

/// mechanical sem 5
app.get('/mechanicalsem5reg', function (req, res) {
	res.render("mechanical/mechanicalsem5/mechanicalsem5reg.ejs", { title: "sosem5reg", success: "" });
});

///mechanical sem 6
app.get('/mechanicalsem6reg', function (req, res) {
	res.render("mechanical/mechanicalsem6/mechanicalsem6reg.ejs", { title: "sosem6reg", success: "" });
});

///electronic sem 1 
app.get('/electronicsem1reg', function (req, res) {
	res.render("electronics/electronicsem1/electronicsem1reg.ejs", { title: "sosem1reg", success: "" });
});

/// electronic sem 2
app.get('/electronicsem2reg', function (req, res) {
	res.render("electronics/electronicsem2/electronicsem2reg.ejs", { title: "sosem2reg", success: "" });
});

/// electronic sem 3
app.get('/electronicsem3reg', function (req, res) {
	res.render("electronics/electronicsem3/electronicsem3reg.ejs", { title: "sosem3reg", success: "" });
});

///electronic sem 4
app.get('/electronicsem4reg', function (req, res) {
	res.render("electronics/electronicsem4/electronicsem4reg.ejs", { title: "sosem4reg", success: "" });
});

/// electronic sem 5
app.get('/electronicsem5reg', function (req, res) {
	res.render("electronics/electronicsem5/electronicsem5reg.ejs", { title: "sosem5reg", success: "" });
});

///electronic sem 6
app.get('/electronicsem6reg', function (req, res) {
	res.render("electronics/electronicsem6/electronicsem6reg.ejs", { title: "sosem6reg", success: "" });
});
////// 

app.get('/login', function (req, res) {
	res.render("admin/login.ejs", { title: "login", success: "" });
});

//// civil sem 1 otp
app.get('/civilsem1attend', function (req, res) {
	res.render("civil/civilsem1/civilsem1attend.ejs", { title: "civilsem1attend", success: "" });
});

//// civil sem 2 otp
app.get('/civilsem2attend', function (req, res) {
	res.render("civil/civilsem2/civilsem2attend.ejs", { title: "civilsem2attend", success: "" });
});

//// civil sem 3 otp
app.get('/civilsem3attend', function (req, res) {
	res.render("civil/civilsem3/civilsem3attend.ejs", { title: "civilsem3attend", success: "" });
});

//// civil sem 4 otp
app.get('/civilsem4attend', function (req, res) {
	res.render("civil/civilsem4/civilsem4attend.ejs", { title: "civilsem4attend", success: "" });
});

//// civil sem 5 otp
app.get('/civilsem5attend', function (req, res) {
	res.render("civil/civilsem5/civilsem5attend.ejs", { title: "civilsem5attend", success: "" });
});

//// civil sem 6 otp
app.get('/civilsem6attend', function (req, res) {
	res.render("civil/civilsem6/civilsem6attend.ejs", { title: "civilsem6attend", success: "" });
});

//// computer sem 1 otp
app.get('/cosem1attend', function (req, res) {
	res.render("computer/computersem1/cosem1attend.ejs", { title: "cosem1attend", success: "" });
});

//// computer sem 2 otp
app.get('/cosem2attend', function (req, res) {
	res.render("computer/computersem2/cosem2attend.ejs", { title: "cosem2attend", success: "" });
});

//// computer sem 3 otp
app.get('/cosem3attend', function (req, res) {
	res.render("computer/computersem3/cosem3attend.ejs", { title: "cosem3attend", success: "" });
});

//// computer sem 4 otp
app.get('/cosem4attend', function (req, res) {
	res.render("computer/computersem4/cosem4attend.ejs", { title: "cosem4attend", success: "" });
});

//// computer sem 5 otp
app.get('/cosem5attend', function (req, res) {
	res.render("computer/computersem5/cosem5attend.ejs", { title: "cosem5attend", success: "" });
});

//// computer sem 6 otp
app.get('/cosem6attend', function (req, res) {
	res.render("computer/computersem6/cosem6attend.ejs", { title: "cosem6attend", success: "" });
});

//// electronics sem 1 otp
app.get('/electronicsem1attend', function (req, res) {
	res.render("electronics/electronicsem1/electronicsem1attend.ejs", { title: "electronicsem1attend", success: "" });
});

//// electronics sem 2 otp
app.get('/electronicsem2attend', function (req, res) {
	res.render("electronics/electronicsem2/electronicsem2attend.ejs", { title: "electronicsem2attend", success: "" });
});

//// electronics sem 3 otp
app.get('/electronicsem3attend', function (req, res) {
	res.render("electronics/electronicsem3/electronicsem3attend.ejs", { title: "electronicsem3attend", success: "" });
});

//// electronics sem 4 otp
app.get('/electronicsem4attend', function (req, res) {
	res.render("electronics/electronicsem4/electronicsem4attend.ejs", { title: "electronicsem4attend", success: "" });
});

//// electronics sem 5 otp
app.get('/electronicsem5attend', function (req, res) {
	res.render("electronics/electronicsem5/electronicsem5attend.ejs", { title: "electronicsem5attend", success: "" });
});

//// electronics sem 6 otp
app.get('/electronicsem6attend', function (req, res) {
	res.render("electronics/electronicsem6/electronicsem6attend.ejs", { title: "electronicsem6attend", success: "" });
});

//// mechanical sem 1 otp
app.get('/mechanicalsem1attend', function (req, res) {
	res.render("mech/mechanicalsem1/mechanicalsem1attend.ejs", { title: "mechanicalsem1attend", success: "" });
});

//// mechanical sem 2 otp
app.get('/mechanicalsem2attend', function (req, res) {
	res.render("mech/mechanicalsem2/mechanicalsem2attend.ejs", { title: "mechanicalsem2attend", success: "" });
});

//// mechanical sem 3 otp
app.get('/mechanicalsem3attend', function (req, res) {
	res.render("mech/mechanicalsem3/mechanicalsem3attend.ejs", { title: "mechanicalsem3attend", success: "" });
});

//// mechanical sem 4 otp
app.get('/mechanicalsem4attend', function (req, res) {
	res.render("mech/mechanicalsem/mechanicalsem4attend.ejs", { title: "mechanicalsem4attend", success: "" });
});

//// mechanical sem 5 otp
app.get('/mechanicalsem5attend', function (req, res) {
	res.render("mech/mechanicalsem5/mechanicalsem5attend.ejs", { title: "mechanicalsem5attend", success: "" });
});

//// mechanical sem 6 otp
app.get('/mechanicalsem6attend', function (req, res) {
	res.render("mech/mechanicalsem6/mechanicalsem6attend.ejs", { title: "mechanicalsem6attend", success: "" });
});


app.get('/invaliduser', function (req, res) {
	res.render("admin/invaliduser.ejs", { title: "invaliduser", success: "" });
});

app.post('/auth', function (req, response) {
	// Capture the input fields
	let username1 = req.body.username;
	let password1 = req.body.password;
	// Ensure the input fields exists and are not empty
	if (username1 && password1) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		db.query('SELECT * FROM teacher_info WHERE teacher_user = ? AND teacher_pass= ?', [username1, password1], function (error, results) {
			// If there is an issue with the query, output the error
			// console.log(req.query);
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				req.session.loggedin = true;
				req.session.username1 = username1;
				// Redirect to home page
				response.redirect('/index');
			} else {
				// response.send('Incorrect Username and/or Password!');
				response.redirect('/register');
			}
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
})

////teachers login

app.post('/auth1', function (req, response) {
	// Capture the input fields
	let username1 = req.body.username;
	let password1 = req.body.password;
	// Ensure the input fields exists and are not empty
	if (username1 && password1) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		db.query('SELECT * FROM teacher_info WHERE teacher_user = ? AND teacher_pass= ?', [username1, password1], function (error, results) {
			// If there is an issue with the query, output the error
			// console.log(req.query);
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				req.session.loggedin = true;
				req.session.username1 = username1;
				// Redirect to home page
				response.redirect('/index11');
			} else {
				// response.send('Incorrect Username and/or Password!');
				response.redirect('/register1');
			}
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

//// principal login

app.post('/auth11', function (req, response) {
	// Capture the input fields
	let username1 = req.body.username;
	let password1 = req.body.password;
	// Ensure the input fields exists and are not empty
	if (username1 && password1) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		db.query('SELECT * FROM teacher_info WHERE teacher_user = ? AND teacher_pass= ?', [username1, password1], function (error, results) {
			// If there is an issue with the query, output the error
			// console.log(req.query);
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				req.session.loggedin = true;
				req.session.username1 = username1;
				// Redirect to home page
				response.redirect('/index111');
			} else {
				// response.send('Incorrect Username and/or Password!');
				response.redirect('/register1');
			}
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
})
// route for logout

app.get("/logout", (req, res) => {
	req.session.destroy(function (err) {
		if (err) {
			console.log(err);
			res.send("Error")
		} else {
			//   res.redirect('/login')
			res.render('home.ejs', { title: "Express", logout: "logout Successfully..." })

		}
	})
});


//// teachers logout 
app.get("/logout1", (req, res) => {
	req.session.destroy(function (err) {
		if (err) {
			console.log(err);
			res.send("Error")
		} else {
			//   res.redirect('/login')
			res.render('teacher/login11.ejs', { title: "Express", logout: "logout Successfully..." })

		}
	})
});

/// principal logout
app.get("/logout11", (req, res) => {
	req.session.destroy(function (err) {
		if (err) {
			console.log(err);
			res.send("Error")
		} else {
			//   res.redirect('/login')
			res.render('principal/login111.ejs', { title: "Express", logout: "logout Successfully..." })

		}
	})
});

/////otp

/////civil sem 1

app.post('/otp1.1', function (req, response) {
	// Capture the input fields
	let otp = req.body.otp;
	let subject = req.body.subject;
	let student_er_no = req.body.student_er_no;
	let student_er_no1 = req.body.student_er_no;
	let student_roll = req.body.student_roll;
	// Ensure the input fields exists and are not empty
	if (student_er_no && student_roll) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		db.query('SELECT * FROM civil_dept WHERE  student_er_no= ? AND student_roll= ?', [student_er_no, student_roll], function (error, results) {
			// If there is an issue with the query, output the error
			console.log(req.query);
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				req.session.loggedin = true;
				req.session.student_er_no = student_er_no;

				// Ensure the input fields exists and are not empty
				if (otp && subject) {
					// Execute SQL query that'll select the account from the database based on the specified username and password
					db.query('SELECT * FROM otp WHERE  otp= ? AND subject= ?', [otp, subject], function (error, results) {
						// If there is an issue with the query, output the error
						console.log(req.query);
						if (error) throw error;
						// If the account exists
						if (results.length > 0) {
							// Authenticate the user
							req.session.loggedin = true;
							req.session.otp = otp;
							// Redirect to home page
							response.render('admin/attendencemarked.ejs', { title: "otp", done: "Attendend marked successfully " });
							//////subjects
							if (subject === "english") {
								var sql = "INSERT INTO `semester_1_ce` (`student_er_no`, `attendance_date`, `english`) VALUES ('" + student_er_no + "', CURRENT_DATE ,'1')";
								db.query(sql, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "basic_science") {
								var updateQuery = "UPDATE `semester_1_ce` SET `student_er_no`= ?,basic_science=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "basic_mathematics") {
								var updateQuery = "UPDATE `semester_1_ce` SET `student_er_no`= ?,basic_mathematics=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "fundamental_of_ict") {
								var updateQuery = "UPDATE `semester_1_ce` SET `student_er_no`= ?,fundamental_of_ict=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "engineering_graphics") {
								var updateQuery = "UPDATE `semester_1_ce` SET `student_er_no`= ?,engineering_graphics=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "workshop_practice") {
								var updateQuery = "UPDATE `semester_1_ce` SET `student_er_no`= ?,workshop_practice=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else {
								console.log("error");
							}
						} else {
							// response.send('Incorrect Username and/or Password!');
							response.render('civil/civilsem1/civilsem1attend.ejs', { title: "otp", otp: "Wrong otp" })
						}
						// response.redirect("/")
						response.end();
					});
				} else {
					// response.send('Incorrect Username and/or Password!');
					response.render('civil/civilsem1/civilsem1attend.ejs', { title: "otp", otp: "Wrong otp" })
				}
			} else {
				response.render('admin/invaliduser.ejs', { title: "Invalid user", user: "User do not exists!" })
			}
		});
	} else {
		res.redirect("/")
		response.end();
	}
});

/////civil sem 2

app.post('/otp1.2', function (req, response) {
	// Capture the input fields
	let otp = req.body.otp;
	let subject = req.body.subject;
	let student_er_no = req.body.student_er_no;
	let student_er_no1 = req.body.student_er_no;
	let student_roll = req.body.student_roll;
	// Ensure the input fields exists and are not empty
	if (student_er_no && student_roll) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		db.query('SELECT * FROM civil_dept WHERE  student_er_no= ? AND student_roll= ?', [student_er_no, student_roll], function (error, results) {
			// If there is an issue with the query, output the error
			console.log(req.query);
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				req.session.loggedin = true;
				req.session.student_er_no = student_er_no;

				// Ensure the input fields exists and are not empty
				if (otp && subject) {
					// Execute SQL query that'll select the account from the database based on the specified username and password
					db.query('SELECT * FROM otp WHERE  otp= ? AND subject= ?', [otp, subject], function (error, results) {
						// If there is an issue with the query, output the error
						console.log(req.query);
						if (error) throw error;
						// If the account exists
						if (results.length > 0) {
							// Authenticate the user
							req.session.loggedin = true;
							req.session.otp = otp;
							// Redirect to home page
							response.render('admin/attendencemarked.ejs', { title: "otp", done: "Attendend marked successfully " });
							//////subjects
							if (subject === "applied_mathematics") {
								var sql = "INSERT INTO `semester_2_ce` (`student_er_no`, `attendance_date`, `applied_mathematics`) VALUES ('" + student_er_no + "', CURRENT_DATE ,'1')";
								db.query(sql, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "applied_science") {
								var updateQuery = "UPDATE `semester_2_ce` SET `student_er_no`= ?,applied_science=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "applied_mechanics") {
								var updateQuery = "UPDATE `semester_2_ce` SET `student_er_no`= ?,applied_mechanics=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "construction_materials") {
								var updateQuery = "UPDATE `semester_2_ce` SET `student_er_no`= ?,construction_materials=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "basic_surveying") {
								var updateQuery = "UPDATE `semester_2_ce` SET `student_er_no`= ?,basic_surveying=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "civil_engineering_workshop_and_practice") {
								var updateQuery = "UPDATE `semester_2_ce` SET `student_er_no`= ?,civil_engineering_workshop_and_practice=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "business_communication_using_computers") {
								var updateQuery = "UPDATE `semester_2_ce` SET `student_er_no`= ?,business_communication_using_computers=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else {
								console.log("error");
							}
						} else {
							// response.send('Incorrect Username and/or Password!');
							response.render('civil/civilsem2/civilsem2attend.ejs', { title: "otp", otp: "Wrong otp" })
						}
						// response.redirect("/")
						response.end();
					});
				} else {
					// response.send('Incorrect Username and/or Password!');
					response.render('civil/civilsem2/civilsem2attend.ejs', { title: "otp", otp: "Wrong otp" })
				}
			} else {
				response.render('admin/invaliduser.ejs', { title: "Invalid user", user: "User do not exists!" })
			}
		});
	} else {
		res.redirect("/")
		response.end();
	}
});

/////civil sem 3

app.post('/otp1.3', function (req, response) {
	// Capture the input fields
	let otp = req.body.otp;
	let subject = req.body.subject;
	let student_er_no = req.body.student_er_no;
	let student_er_no1 = req.body.student_er_no;
	let student_roll = req.body.student_roll;
	// Ensure the input fields exists and are not empty
	if (student_er_no && student_roll) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		db.query('SELECT * FROM civil_dept WHERE  student_er_no= ? AND student_roll= ?', [student_er_no, student_roll], function (error, results) {
			// If there is an issue with the query, output the error
			console.log(req.query);
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				req.session.loggedin = true;
				req.session.student_er_no = student_er_no;

				// Ensure the input fields exists and are not empty
				if (otp && subject) {
					// Execute SQL query that'll select the account from the database based on the specified username and password
					db.query('SELECT * FROM otp WHERE  otp= ? AND subject= ?', [otp, subject], function (error, results) {
						// If there is an issue with the query, output the error
						console.log(req.query);
						if (error) throw error;
						// If the account exists
						if (results.length > 0) {
							// Authenticate the user
							req.session.loggedin = true;
							req.session.otp = otp;
							// Redirect to home page
							response.render('admin/attendencemarked.ejs', { title: "otp", done: "Attendend marked successfully " });
							//////subjects
							if (subject === "advance_surveying") {
								var sql = "INSERT INTO `semester_3_ce` (`student_er_no`, `attendance_date`, `advance_surveying`) VALUES ('" + student_er_no + "', CURRENT_DATE ,'1')";
								db.query(sql, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "highway_engineering") {
								var updateQuery = "UPDATE `semester_3_ce` SET `student_er_no`= ?,highway_engineering=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "mechanics_of_structures") {
								var updateQuery = "UPDATE `semester_3_ce` SET `student_er_no`= ?,mechanics_of_structures=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "building_construction") {
								var updateQuery = "UPDATE `semester_3_ce` SET `student_er_no`= ?,building_construction=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "concrete_technology") {
								var updateQuery = "UPDATE `semester_3_ce` SET `student_er_no`= ?,concrete_technology=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "computer_aided_drawing") {
								var updateQuery = "UPDATE `semester_3_ce` SET `student_er_no`= ?,computer_aided_drawing=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else {
								console.log("error");
							}
						} else {
							// response.send('Incorrect Username and/or Password!');
							response.render('civil/civilsem3/civilsem3attend.ejs', { title: "otp", otp: "Wrong otp" })
						}
						// response.redirect("/")
						response.end();
					});
				} else {
					// response.send('Incorrect Username and/or Password!');
					response.render('civil/civilsem3/civilsem3attend.ejs', { title: "otp", otp: "Wrong otp" })
				}
			} else {
				response.render('admin/invaliduser.ejs', { title: "Invalid user", user: "User do not exists!" })
			}
		});
	} else {
		res.redirect("/")
		response.end();
	}
});

/////civil sem 4

app.post('/otp1.4', function (req, response) {
	// Capture the input fields
	let otp = req.body.otp;
	let subject = req.body.subject;
	let student_er_no = req.body.student_er_no;
	let student_er_no1 = req.body.student_er_no;
	let student_roll = req.body.student_roll;
	// Ensure the input fields exists and are not empty
	if (student_er_no && student_roll) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		db.query('SELECT * FROM civil_dept WHERE  student_er_no= ? AND student_roll= ?', [student_er_no, student_roll], function (error, results) {
			// If there is an issue with the query, output the error
			console.log(req.query);
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				req.session.loggedin = true;
				req.session.student_er_no = student_er_no;

				// Ensure the input fields exists and are not empty
				if (otp && subject) {
					// Execute SQL query that'll select the account from the database based on the specified username and password
					db.query('SELECT * FROM otp WHERE  otp= ? AND subject= ?', [otp, subject], function (error, results) {
						// If there is an issue with the query, output the error
						console.log(req.query);
						if (error) throw error;
						// If the account exists
						if (results.length > 0) {
							// Authenticate the user
							req.session.loggedin = true;
							req.session.otp = otp;
							// Redirect to home page
							response.render('admin/attendencemarked.ejs', { title: "otp", done: "Attendend marked successfully " });
							//////subjects
							if (subject === "hydraulics") {
								var sql = "INSERT INTO `semester_4_ce` (`student_er_no`, `attendance_date`, `hydraulics`) VALUES ('" + student_er_no + "', CURRENT_DATE ,'1')";
								db.query(sql, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "theory_of_structures") {
								var updateQuery = "UPDATE `semester_4_ce` SET `student_er_no`= ?,theory_of_structures=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "railway_and_bridge_engineering") {
								var updateQuery = "UPDATE `semester_4_ce` SET `student_er_no`= ?,railway_and_bridge_engineering=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "geo_technical_engineering") {
								var updateQuery = "UPDATE `semester_4_ce` SET `student_er_no`= ?,geo_technical_engineering=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "building_planning_and_drawing") {
								var updateQuery = "UPDATE `semester_4_ce` SET `student_er_no`= ?,building_planning_and_drawing=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "environmental_studies") {
								var updateQuery = "UPDATE `semester_4_ce` SET `student_er_no`= ?,environmental_studies=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else {
								console.log("error");
							}
						} else {
							// response.send('Incorrect Username and/or Password!');
							response.render('civil/civilsem4/civilsem4attend.ejs', { title: "otp", otp: "Wrong otp" })
						}
						// response.redirect("/")
						response.end();
					});
				} else {
					// response.send('Incorrect Username and/or Password!');
					response.render('civil/civilsem4/civilsem4attend.ejs', { title: "otp", otp: "Wrong otp" })
				}
			} else {
				response.render('admin/invaliduser.ejs', { title: "Invalid user", user: "User do not exists!" })
			}
		});
	} else {
		res.redirect("/")
		response.end();
	}
});

/////civil sem 5

app.post('/otp1.5', function (req, response) {
	// Capture the input fields
	let otp = req.body.otp;
	let subject = req.body.subject;
	let student_er_no = req.body.student_er_no;
	let student_er_no1 = req.body.student_er_no;
	let student_roll = req.body.student_roll;
	// Ensure the input fields exists and are not empty
	if (student_er_no && student_roll) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		db.query('SELECT * FROM civil_dept WHERE  student_er_no= ? AND student_roll= ?', [student_er_no, student_roll], function (error, results) {
			// If there is an issue with the query, output the error
			console.log(req.query);
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				req.session.loggedin = true;
				req.session.student_er_no = student_er_no;

				// Ensure the input fields exists and are not empty
				if (otp && subject) {
					// Execute SQL query that'll select the account from the database based on the specified username and password
					db.query('SELECT * FROM otp WHERE  otp= ? AND subject= ?', [otp, subject], function (error, results) {
						// If there is an issue with the query, output the error
						console.log(req.query);
						if (error) throw error;
						// If the account exists
						if (results.length > 0) {
							// Authenticate the user
							req.session.loggedin = true;
							req.session.otp = otp;
							// Redirect to home page
							response.render('admin/attendencemarked.ejs', { title: "otp", done: "Attendend marked successfully " });
							//////subjects
							if (subject === "water_resource_engineering") {
								var sql = "INSERT INTO `semester_5_ce` (`student_er_no`, `attendance_date`, `water_resource_engineering`) VALUES ('" + student_er_no + "', CURRENT_DATE ,'1')";
								db.query(sql, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "design_of_steel_and_rcc_structure") {
								var updateQuery = "UPDATE `semester_5_ce` SET `student_er_no`= ?,design_of_steel_and_rcc_structure=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "estimating_costing_and_valuation") {
								var updateQuery = "UPDATE `semester_5_ce` SET `student_er_no`= ?,estimating_costing_and_valuation=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "public_health_engineering") {
								var updateQuery = "UPDATE `semester_5_ce` SET `student_er_no`= ?,public_health_engineering=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "traffic_engineering") {
								var updateQuery = "UPDATE `semester_5_ce` SET `student_er_no`= ?,traffic_engineering=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "industrial_training") {
								var updateQuery = "UPDATE `semester_5_ce` SET `student_er_no`= ?,industrial_training=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "capstone_project_planning") {
								var updateQuery = "UPDATE `semester_5_ce` SET `student_er_no`= ?,capstone_project_planning=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else {
								console.log("error");
							}
						} else {
							// response.send('Incorrect Username and/or Password!');
							response.render('civil/civilsem5/civilsem5attend.ejs', { title: "otp", otp: "Wrong otp" })
						}
						// response.redirect("/")
						response.end();
					});
				} else {
					// response.send('Incorrect Username and/or Password!');
					response.render('civil/civilsem5/civilsem5attend.ejs', { title: "otp", otp: "Wrong otp" })
				}
			} else {
				response.render('admin/invaliduser.ejs', { title: "Invalid user", user: "User do not exists!" })
			}
		});
	} else {
		res.redirect("/")
		response.end();
	}
});

/////civil sem 6

app.post('/otp1.6', function (req, response) {
	// Capture the input fields
	let otp = req.body.otp;
	let subject = req.body.subject;
	let student_er_no = req.body.student_er_no;
	let student_er_no1 = req.body.student_er_no;
	let student_roll = req.body.student_roll;
	// Ensure the input fields exists and are not empty
	if (student_er_no && student_roll) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		db.query('SELECT * FROM civil_dept WHERE  student_er_no= ? AND student_roll= ?', [student_er_no, student_roll], function (error, results) {
			// If there is an issue with the query, output the error
			console.log(req.query);
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				req.session.loggedin = true;
				req.session.student_er_no = student_er_no;

				// Ensure the input fields exists and are not empty
				if (otp && subject) {
					// Execute SQL query that'll select the account from the database based on the specified username and password
					db.query('SELECT * FROM otp WHERE  otp= ? AND subject= ?', [otp, subject], function (error, results) {
						// If there is an issue with the query, output the error
						console.log(req.query);
						if (error) throw error;
						// If the account exists
						if (results.length > 0) {
							// Authenticate the user
							req.session.loggedin = true;
							req.session.otp = otp;
							// Redirect to home page
							response.render('admin/attendencemarked.ejs', { title: "otp", done: "Attendend marked successfully " });
							//////subjects
							if (subject === "management") {
								var sql = "INSERT INTO `semester_6_ce` (`student_er_no`, `attendance_date`, `management`) VALUES ('" + student_er_no + "', CURRENT_DATE ,'1')";
								db.query(sql, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "contracts_and_accounts") {
								var updateQuery = "UPDATE `semester_6_ce` SET `student_er_no`= ?,contracts_and_accounts=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "maintenance_and_repairs_of_structure") {
								var updateQuery = "UPDATE `semester_6_ce` SET `student_er_no`= ?,maintenance_and_repairs_of_structure=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "emerging_trends_in_civil_engineering") {
								var updateQuery = "UPDATE `semester_6_ce` SET `student_er_no`= ?,emerging_trends_in_civil_engineering=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "solid_waste_management") {
								var updateQuery = "UPDATE `semester_6_ce` SET `student_er_no`= ?,solid_waste_management=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "capstone_project_execution_and_report_writing") {
								var updateQuery = "UPDATE `semester_6_ce` SET `student_er_no`= ?,capstone_project_execution_and_report_writing=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "construction_management") {
								var updateQuery = "UPDATE `semester_6_ce` SET `student_er_no`= ?,construction_management=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "enterprenureship_development") {
								var updateQuery = "UPDATE `semester_6_ce` SET `student_er_no`= ?,enterprenureship_development=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else {
								console.log("error");
							}
						} else {
							// response.send('Incorrect Username and/or Password!');
							response.render('civil/civilsem6/civilsem6attend.ejs', { title: "otp", otp: "Wrong otp" })
						}
						// response.redirect("/")
						response.end();
					});
				} else {
					// response.send('Incorrect Username and/or Password!');
					response.render('civil/civilsem6/civilsem6attend.ejs', { title: "otp", otp: "Wrong otp" })
				}
			} else {
				response.render('admin/invaliduser.ejs', { title: "Invalid user", user: "User do not exists!" })
			}
		});
	} else {
		res.redirect("/")
		response.end();
	}
});

/////computer sem 1

app.post('/otp1.7', function (req, response) {
	// Capture the input fields
	let otp = req.body.otp;
	let subject = req.body.subject;
	let student_er_no = req.body.student_er_no;
	let student_er_no1 = req.body.student_er_no;
	let student_roll = req.body.student_roll;
	// Ensure the input fields exists and are not empty
	if (student_er_no && student_roll) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		db.query('SELECT * FROM computer_dept WHERE  student_er_no= ? AND student_roll= ?', [student_er_no, student_roll], function (error, results) {
			// If there is an issue with the query, output the error
			console.log(req.query);
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				req.session.loggedin = true;
				req.session.student_er_no = student_er_no;

				// Ensure the input fields exists and are not empty
				if (otp && subject) {
					// Execute SQL query that'll select the account from the database based on the specified username and password
					db.query('SELECT * FROM otp WHERE  otp= ? AND subject= ?', [otp, subject], function (error, results) {
						// If there is an issue with the query, output the error
						console.log(req.query);
						if (error) throw error;
						// If the account exists
						if (results.length > 0) {
							// Authenticate the user
							req.session.loggedin = true;
							req.session.otp = otp;
							// Redirect to home page
							response.render('admin/attendencemarked.ejs', { title: "otp", done: "Attendend marked successfully " });
							//////subjects
							if (subject === "english") {
								var sql = "INSERT INTO `semester_1_c` (`student_er_no`, `attendance_date`, `english`) VALUES ('" + student_er_no + "', CURRENT_DATE ,'1')";
								db.query(sql, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "basic_science") {
								var updateQuery = "UPDATE `semester_1_c` SET `student_er_no`= ?,basic_science=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no,1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "basic_mathematics") {
								var updateQuery = "UPDATE `semester_1_c` SET `student_er_no`= ?,basic_mathematics=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no,1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "fundamental_of_ict") {
								var updateQuery = "UPDATE `semester_1_c` SET `student_er_no`= ?,fundamental_of_ict=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no,1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "engineering_graphics") {
								var updateQuery = "UPDATE `semester_1_c` SET `student_er_no`= ?,engineering_graphics=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no,1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "workshop_practice") {
								var updateQuery = "UPDATE `semester_1_c` SET `student_er_no`= ?,workshop_practice=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no,1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else {
								console.log("error");
							}
						} else {
							// response.send('Incorrect Username and/or Password!');
							response.render('computer/computersem1/cosem1attend.ejs', { title: "otp", otp: "Wrong otp" })
						}
						// response.redirect("/")
						response.end();
					});
				} else {
					// response.send('Incorrect Username and/or Password!');
					response.render('computer/computersem1/cosem1attend.ejs', { title: "otp", otp: "Wrong otp" })
				}
			} else {
				response.render('admin/invaliduser.ejs', { title: "Invalid user", user: "User do not exists!" })
			}
		});
	} else {
		res.redirect("/")
		response.end();
	}
});

/////computer sem 2

app.post('/otp1.8', function (req, response) {
	// Capture the input fields
	let otp = req.body.otp;
	let subject = req.body.subject;
	let student_er_no = req.body.student_er_no;
	let student_er_no1 = req.body.student_er_no;
	let student_roll = req.body.student_roll;
	// Ensure the input fields exists and are not empty
	if (student_er_no && student_roll) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		db.query('SELECT * FROM computer_dept WHERE  student_er_no= ? AND student_roll= ?', [student_er_no, student_roll], function (error, results) {
			// If there is an issue with the query, output the error
			console.log(req.query);
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				req.session.loggedin = true;
				req.session.student_er_no = student_er_no;

				// Ensure the input fields exists and are not empty
				if (otp && subject) {
					// Execute SQL query that'll select the account from the database based on the specified username and password
					db.query('SELECT * FROM otp WHERE  otp= ? AND subject= ?', [otp, subject], function (error, results) {
						// If there is an issue with the query, output the error
						console.log(req.query);
						if (error) throw error;
						// If the account exists
						if (results.length > 0) {
							// Authenticate the user
							req.session.loggedin = true;
							req.session.otp = otp;
							// Redirect to home page
							response.render('admin/attendencemarked.ejs', { title: "otp", done: "Attendend marked successfully " });
							//////subjects
							if (subject === "elements_of_electrical_engineering") {
								var sql = "INSERT INTO `semester_2_c` (`student_er_no`, `attendance_date`, `elements_of_electrical_engineering`) VALUES ('" + student_er_no + "', CURRENT_DATE ,'1')";
								db.query(sql, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "applied_mathematics") {
								var updateQuery = "UPDATE `semester_2_c` SET `student_er_no`= ?,applied_mathematics=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "basic_electronics") {
								var updateQuery = "UPDATE `semester_2_c` SET `student_er_no`= ?,basic_electronics=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "programming_in_c") {
								var updateQuery = "UPDATE `semester_2_c` SET `student_er_no`= ?,programming_in_c=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "business_communication_using_computers") {
								var updateQuery = "UPDATE `semester_2_c` SET `student_er_no`= ?,business_communication_using_computers=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "computer_peripheral_and_hardware_maintenance") {
								var updateQuery = "UPDATE `semester_2_c` SET `student_er_no`= ?,computer_peripheral_and_hardware_maintenance=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "webpage_designing_with_html") {
								var updateQuery = "UPDATE `semester_2_c` SET `student_er_no`= ?,webpage_designing_with_html=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else {
								console.log("error");
							}
						} else {
							// response.send('Incorrect Username and/or Password!');
							response.render('computer/computersem2/cosem2attend.ejs', { title: "otp", otp: "Wrong otp" })
						}
						// response.redirect("/")
						response.end();
					});
				} else {
					// response.send('Incorrect Username and/or Password!');
					response.render('computer/computersem2/cosem2attend.ejs', { title: "otp", otp: "Wrong otp" })
				}
			} else {
				response.render('admin/invaliduser.ejs', { title: "Invalid user", user: "User do not exists!" })
			}
		});
	} else {
		res.redirect("/")
		response.end();
	}
});

/////computer sem 3

app.post('/otp1.9', function (req, response) {
	// Capture the input fields
	let otp = req.body.otp;
	let subject = req.body.subject;
	let student_er_no = req.body.student_er_no;
	let student_er_no1 = req.body.student_er_no;
	let student_roll = req.body.student_roll;
	// Ensure the input fields exists and are not empty
	if (student_er_no && student_roll) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		db.query('SELECT * FROM computer_dept WHERE  student_er_no= ? AND student_roll= ?', [student_er_no, student_roll], function (error, results) {
			// If there is an issue with the query, output the error
			console.log(req.query);
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				req.session.loggedin = true;
				req.session.student_er_no = student_er_no;

				// Ensure the input fields exists and are not empty
				if (otp && subject) {
					// Execute SQL query that'll select the account from the database based on the specified username and password
					db.query('SELECT * FROM otp WHERE  otp= ? AND subject= ?', [otp, subject], function (error, results) {
						// If there is an issue with the query, output the error
						console.log(req.query);
						if (error) throw error;
						// If the account exists
						if (results.length > 0) {
							// Authenticate the user
							req.session.loggedin = true;
							req.session.otp = otp;
							// Redirect to home page
							response.render('admin/attendencemarked.ejs', { title: "otp", done: "Attendend marked successfully " });
							//////subjects
							if (subject === "object_oriented_programming_using_c_plus") {
								var sql = "INSERT INTO `semester_3_c` (`student_er_no`, `attendance_date`, `object_oriented_programming_using_c_plus`) VALUES ('" + student_er_no + "', CURRENT_DATE ,'1')";
								db.query(sql, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "data_structure_using_c") {
								var updateQuery = "UPDATE `semester_3_c` SET `student_er_no`= ?,data_structure_using_c=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "computer_graphics") {
								var updateQuery = "UPDATE `semester_3_c` SET `student_er_no`= ?,computer_graphics=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "database_management_system") {
								var updateQuery = "UPDATE `semester_3_c` SET `student_er_no`= ?,database_management_system=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "digital_techniques") {
								var updateQuery = "UPDATE `semester_3_c` SET `student_er_no`= ?,digital_techniques=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else {
								console.log("error");
							}
						} else {
							// response.send('Incorrect Username and/or Password!');
							response.render('computer/computersem3/cosem3attend.ejs', { title: "otp", otp: "Wrong otp" })
						}
						// response.redirect("/")
						response.end();
					});
				} else {
					// response.send('Incorrect Username and/or Password!');
					response.render('computer/computersem3/cosem3attend.ejs', { title: "otp", otp: "Wrong otp" })
				}
			} else {
				response.render('admin/invaliduser.ejs', { title: "Invalid user", user: "User do not exists!" })
			}
		});
	} else {
		res.redirect("/")
		response.end();
	}
});

/////computer sem 4

app.post('/otp1.10', function (req, response) {
	// Capture the input fields
	let otp = req.body.otp;
	let subject = req.body.subject;
	let student_er_no = req.body.student_er_no;
	let student_er_no1 = req.body.student_er_no;
	let student_roll = req.body.student_roll;
	// Ensure the input fields exists and are not empty
	if (student_er_no && student_roll) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		db.query('SELECT * FROM computer_dept WHERE  student_er_no= ? AND student_roll= ?', [student_er_no, student_roll], function (error, results) {
			// If there is an issue with the query, output the error
			console.log(req.query);
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				req.session.loggedin = true;
				req.session.student_er_no = student_er_no;

				// Ensure the input fields exists and are not empty
				if (otp && subject) {
					// Execute SQL query that'll select the account from the database based on the specified username and password
					db.query('SELECT * FROM otp WHERE  otp= ? AND subject= ?', [otp, subject], function (error, results) {
						// If there is an issue with the query, output the error
						console.log(req.query);
						if (error) throw error;
						// If the account exists
						if (results.length > 0) {
							// Authenticate the user
							req.session.loggedin = true;
							req.session.otp = otp;
							// Redirect to home page
							response.render('admin/attendencemarked.ejs', { title: "otp", done: "Attendend marked successfully " });
							//////subjects
							if (subject === "java_programming") {
								var sql = "INSERT INTO `semester_4_c` (`student_er_no`, `attendance_date`, `java_programming`) VALUES ('" + student_er_no + "', CURRENT_DATE ,'1')";
								db.query(sql, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "software_engineering") {
								var updateQuery = "UPDATE `semester_4_c` SET `student_er_no`= ?,software_engineering=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "data_communication_and_computer_network") {
								var updateQuery = "UPDATE `semester_4_c` SET `student_er_no`= ?,data_communication_and_computer_network=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "microprocessors") {
								var updateQuery = "UPDATE `semester_4_c` SET `student_er_no`= ?,microprocessors=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "gui_application_development_using_vbnet") {
								var updateQuery = "UPDATE `semester_4_c` SET `student_er_no`= ?,gui_application_development_using_vbnet=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else {
								console.log("error");
							}
						} else {
							// response.send('Incorrect Username and/or Password!');
							response.render('computer/computersem4/cosem4attend.ejs', { title: "otp", otp: "Wrong otp" })
						}
						// response.redirect("/")
						response.end();
					});
				} else {
					// response.send('Incorrect Username and/or Password!');
					response.render('computer/computersem4/cosem4attend.ejs', { title: "otp", otp: "Wrong otp" })
				}
			} else {
				response.render('admin/invaliduser.ejs', { title: "Invalid user", user: "User do not exists!" })
			}
		});
	} else {
		res.redirect("/")
		response.end();
	}
});

/////computer sem 5

app.post('/otp1.11', function (req, response) {
	// Capture the input fields
	let otp = req.body.otp;
	let subject = req.body.subject;
	let student_er_no = req.body.student_er_no;
	let student_er_no1 = req.body.student_er_no;
	let student_roll = req.body.student_roll;
	// Ensure the input fields exists and are not empty
	if (student_er_no && student_roll) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		db.query('SELECT * FROM computer_dept WHERE  student_er_no= ? AND student_roll= ?', [student_er_no, student_roll], function (error, results) {
			// If there is an issue with the query, output the error
			console.log(req.query);
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				req.session.loggedin = true;
				req.session.student_er_no = student_er_no;

				// Ensure the input fields exists and are not empty
				if (otp && subject) {
					// Execute SQL query that'll select the account from the database based on the specified username and password
					db.query('SELECT * FROM otp WHERE  otp= ? AND subject= ?', [otp, subject], function (error, results) {
						// If there is an issue with the query, output the error
						console.log(req.query);
						if (error) throw error;
						// If the account exists
						if (results.length > 0) {
							// Authenticate the user
							req.session.loggedin = true;
							req.session.otp = otp;
							// Redirect to home page
							response.render('admin/attendencemarked.ejs', { title: "otp", done: "Attendend marked successfully " });
							//////subjects
							if (subject === "environmental_studies") {
								var sql = "INSERT INTO `semester_5_c` (`student_er_no`, `attendance_date`, `environmental_studies`) VALUES ('" + student_er_no + "', CURRENT_DATE ,'1')";
								db.query(sql, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "operating_system") {
								var updateQuery = "UPDATE `semester_5_c` SET `student_er_no`= ?,operating_system=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "advance_java_programming") {
								var updateQuery = "UPDATE `semester_5_c` SET `student_er_no`= ?,advance_java_programming=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "software_testing") {
								var updateQuery = "UPDATE `semester_5_c` SET `student_er_no`= ?,software_testing=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "advance_computer_network") {
								var updateQuery = "UPDATE `semester_5_c` SET `student_er_no`= ?,advance_computer_network=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "industrial_training") {
								var updateQuery = "UPDATE `semester_5_c` SET `student_er_no`= ?,industrial_training=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "capstone_project_planning") {
								var updateQuery = "UPDATE `semester_5_c` SET `student_er_no`= ?,capstone_project_planning=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else {
								console.log("error");
							}
						} else {
							// response.send('Incorrect Username and/or Password!');
							response.render('computer/computersem5/cosem5attend.ejs', { title: "otp", otp: "Wrong otp" })
						}
						// response.redirect("/")
						response.end();
					});
				} else {
					// response.send('Incorrect Username and/or Password!');
					response.render('computer/computersem5/cosem5attend.ejs', { title: "otp", otp: "Wrong otp" })
				}
			} else {
				response.render('admin/invaliduser.ejs', { title: "Invalid user", user: "User do not exists!" })
			}
		});
	} else {
		res.redirect("/")
		response.end();
	}
});

/////computer sem 6

app.post('/otp1.12', function (req, response) {
	// Capture the input fields
	let otp = req.body.otp;
	let subject = req.body.subject;
	let student_er_no = req.body.student_er_no;
	let student_er_no1 = req.body.student_er_no;
	let student_roll = req.body.student_roll;
	// Ensure the input fields exists and are not empty
	if (student_er_no && student_roll) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		db.query('SELECT * FROM computer_dept WHERE  student_er_no= ? AND student_roll= ?', [student_er_no, student_roll], function (error, results) {
			// If there is an issue with the query, output the error
			console.log(req.query);
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				req.session.loggedin = true;
				req.session.student_er_no = student_er_no;

				// Ensure the input fields exists and are not empty
				if (otp && subject) {
					// Execute SQL query that'll select the account from the database based on the specified username and password
					db.query('SELECT * FROM otp WHERE  otp= ? AND subject= ?', [otp, subject], function (error, results) {
						// If there is an issue with the query, output the error
						console.log(req.query);
						if (error) throw error;
						// If the account exists
						if (results.length > 0) {
							// Authenticate the user
							req.session.loggedin = true;
							req.session.otp = otp;
							// Redirect to home page
							response.render('admin/attendencemarked.ejs', { title: "otp", done: "Attendend marked successfully " });
							//////subjects
							if (subject === "management") {
								var sql = "INSERT INTO `semester_6_c` (`student_er_no`, `attendance_date`, `management`) VALUES ('" + student_er_no + "', CURRENT_DATE ,'1')";
								db.query(sql, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "programming_with_python") {
								var updateQuery = "UPDATE `semester_6_c` SET `student_er_no`= ?,programming_with_python=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "mobile_application_development") {
								var updateQuery = "UPDATE `semester_6_c` SET `student_er_no`= ?,mobile_application_development=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "emerging_trends_in_computer_and_information_technology") {
								var updateQuery = "UPDATE `semester_6_c` SET `student_er_no`= ?,emerging_trends_in_computer_and_information_technology=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "network_and_information_security") {
								var updateQuery = "UPDATE `semester_6_c` SET `student_er_no`= ?,network_and_information_security=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "enterpreneurship_development") {
								var updateQuery = "UPDATE `semester_6_c` SET `student_er_no`= ?,enterpreneurship_development=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "capstone_project_execution_and_report_writing") {
								var updateQuery = "UPDATE `semester_6_c` SET `student_er_no`= ?,capstone_project_execution_and_report_writing=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else {
								console.log("error");
							}
						} else {
							// response.send('Incorrect Username and/or Password!');
							response.render('computer/computersem6/cosem6attend.ejs', { title: "otp", otp: "Wrong otp" })
						}
						// response.redirect("/")
						response.end();
					});
				} else {
					// response.send('Incorrect Username and/or Password!');
					response.render('computer/computersem6/cosem6attend.ejs', { title: "otp", otp: "Wrong otp" })
				}
			} else {
				response.render('admin/invaliduser.ejs', { title: "Invalid user", user: "User do not exists!" })
			}
		});
	} else {
		res.redirect("/")
		response.end();
	}
});

/////electronic sem 1

app.post('/otp1.13', function (req, response) {
	// Capture the input fields
	let otp = req.body.otp;
	let subject = req.body.subject;
	let student_er_no = req.body.student_er_no;
	let student_er_no1 = req.body.student_er_no;
	let student_roll = req.body.student_roll;
	// Ensure the input fields exists and are not empty
	if (student_er_no && student_roll) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		db.query('SELECT * FROM electronic_dept WHERE  student_er_no= ? AND student_roll= ?', [student_er_no, student_roll], function (error, results) {
			// If there is an issue with the query, output the error
			console.log(req.query);
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				req.session.loggedin = true;
				req.session.student_er_no = student_er_no;

				// Ensure the input fields exists and are not empty
				if (otp && subject) {
					// Execute SQL query that'll select the account from the database based on the specified username and password
					db.query('SELECT * FROM otp WHERE  otp= ? AND subject= ?', [otp, subject], function (error, results) {
						// If there is an issue with the query, output the error
						console.log(req.query);
						if (error) throw error;
						// If the account exists
						if (results.length > 0) {
							// Authenticate the user
							req.session.loggedin = true;
							req.session.otp = otp;
							// Redirect to home page
							response.render('admin/attendencemarked.ejs', { title: "otp", done: "Attendend marked successfully " });
							//////subjects
							if (subject === "english") {
								var sql = "INSERT INTO `semester_1_e` (`student_er_no`, `attendance_date`, `english`) VALUES ('" + student_er_no + "', CURRENT_DATE ,'1')";
								db.query(sql, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "basic_science") {
								var updateQuery = "UPDATE `semester_1_e` SET `student_er_no`= ?,basic_science=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "basic_mathematics") {
								var updateQuery = "UPDATE `semester_1_e` SET `student_er_no`= ?,basic_mathematics=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "fundamental_of_ict") {
								var updateQuery = "UPDATE `semester_1_e` SET `student_er_no`= ?,fundamental_of_ict=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "engineering_graphics") {
								var updateQuery = "UPDATE `semester_1_e` SET `student_er_no`= ?,engineering_graphics=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "workshop_practice") {
								var updateQuery = "UPDATE `semester_1_e` SET `student_er_no`= ?,workshop_practice=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else {
								console.log("error");
							}
						} else {
							// response.send('Incorrect Username and/or Password!');
							response.render('electronics/electronicsem1/electronicsem1attend.ejs', { title: "otp", otp: "Wrong otp" })
						}
						// response.redirect("/")
						response.end();
					});
				} else {
					// response.send('Incorrect Username and/or Password!');
					response.render('electronics/electronicsem1/electronicsem1attend.ejs', { title: "otp", otp: "Wrong otp" })
				}
			} else {
				response.render('admin/invaliduser.ejs', { title: "Invalid user", user: "User do not exists!" })
			}
		});
	} else {
		res.redirect("/")
		response.end();
	}
});

/////electronic sem 2

app.post('/otp1.14', function (req, response) {
	// Capture the input fields
	let otp = req.body.otp;
	let subject = req.body.subject;
	let student_er_no = req.body.student_er_no;
	let student_er_no1 = req.body.student_er_no;
	let student_roll = req.body.student_roll;
	// Ensure the input fields exists and are not empty
	if (student_er_no && student_roll) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		db.query('SELECT * FROM electronic_dept WHERE  student_er_no= ? AND student_roll= ?', [student_er_no, student_roll], function (error, results) {
			// If there is an issue with the query, output the error
			console.log(req.query);
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				req.session.loggedin = true;
				req.session.student_er_no = student_er_no;

				// Ensure the input fields exists and are not empty
				if (otp && subject) {
					// Execute SQL query that'll select the account from the database based on the specified username and password
					db.query('SELECT * FROM otp WHERE  otp= ? AND subject= ?', [otp, subject], function (error, results) {
						// If there is an issue with the query, output the error
						console.log(req.query);
						if (error) throw error;
						// If the account exists
						if (results.length > 0) {
							// Authenticate the user
							req.session.loggedin = true;
							req.session.otp = otp;
							// Redirect to home page
							response.render('admin/attendencemarked.ejs', { title: "otp", done: "Attendend marked successfully " });
							//////subjects
							if (subject === "applied_mathematics") {
								var sql = "INSERT INTO `semester_2_e` (`student_er_no`, `attendance_date`, `applied_mathematics`) VALUES ('" + student_er_no + "', CURRENT_DATE ,'1')";
								db.query(sql, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "elements_of_electrical_engineering") {
								var updateQuery = "UPDATE `semester_2_e` SET `student_er_no`= ?,elements_of_electrical_engineering=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "basic_electronics") {
								var updateQuery = "UPDATE `semester_2_e` SET `student_er_no`= ?,basic_electronics=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "electronic_engineering_materials") {
								var updateQuery = "UPDATE `semester_2_e` SET `student_er_no`= ?,electronic_engineering_materials=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "c_programming_languages") {
								var updateQuery = "UPDATE `semester_2_e` SET `student_er_no`= ?,c_programming_languages=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "business_communication_using_computers") {
								var updateQuery = "UPDATE `semester_2_e` SET `student_er_no`= ?,business_communication_using_computers=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else {
								console.log("error");
							}
						} else {
							// response.send('Incorrect Username and/or Password!');
							response.render('electronics/electronicsem2/electronicsem2attend.ejs', { title: "otp", otp: "Wrong otp" })
						}
						// response.redirect("/")
						response.end();
					});
				} else {
					// response.send('Incorrect Username and/or Password!');
					response.render('electronics/electronicsem2/electronicsem2attend.ejs', { title: "otp", otp: "Wrong otp" })
				}
			} else {
				response.render('admin/invaliduser.ejs', { title: "Invalid user", user: "User do not exists!" })
			}
		});
	} else {
		res.redirect("/")
		response.end();
	}
});

/////electronic sem 3

app.post('/otp1.15', function (req, response) {
	// Capture the input fields
	let otp = req.body.otp;
	let subject = req.body.subject;
	let student_er_no = req.body.student_er_no;
	let student_er_no1 = req.body.student_er_no;
	let student_roll = req.body.student_roll;
	// Ensure the input fields exists and are not empty
	if (student_er_no && student_roll) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		db.query('SELECT * FROM electronic_dept WHERE  student_er_no= ? AND student_roll= ?', [student_er_no, student_roll], function (error, results) {
			// If there is an issue with the query, output the error
			console.log(req.query);
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				req.session.loggedin = true;
				req.session.student_er_no = student_er_no;

				// Ensure the input fields exists and are not empty
				if (otp && subject) {
					// Execute SQL query that'll select the account from the database based on the specified username and password
					db.query('SELECT * FROM otp WHERE  otp= ? AND subject= ?', [otp, subject], function (error, results) {
						// If there is an issue with the query, output the error
						console.log(req.query);
						if (error) throw error;
						// If the account exists
						if (results.length > 0) {
							// Authenticate the user
							req.session.loggedin = true;
							req.session.otp = otp;
							// Redirect to home page
							response.render('admin/attendencemarked.ejs', { title: "otp", done: "Attendend marked successfully " });
							//////subjects
							if (subject === "digital_techniques") {
								var sql = "INSERT INTO `semester_3_e` (`student_er_no`, `attendance_date`, `digital_techniques`) VALUES ('" + student_er_no + "', CURRENT_DATE ,'1')";
								db.query(sql, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "applied_electronics") {
								var updateQuery = "UPDATE `semester_3_e` SET `student_er_no`= ?,applied_electronics=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "electric_circuits_and_networks") {
								var updateQuery = "UPDATE `semester_3_e` SET `student_er_no`= ?,electric_circuits_and_networks=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "electronic_measurement_and_instrumentation") {
								var updateQuery = "UPDATE `semester_3_e` SET `student_er_no`= ?,electronic_measurement_and_instrumentation=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "principles_of_electronic_communication") {
								var updateQuery = "UPDATE `semester_3_e` SET `student_er_no`= ?,principles_of_electronic_communication=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else {
								console.log("error");
							}
						} else {
							// response.send('Incorrect Username and/or Password!');
							response.render('electronics/electronicsem3/electronicsem3attend.ejs', { title: "otp", otp: "Wrong otp" })
						}
						// response.redirect("/")
						response.end();
					});
				} else {
					// response.send('Incorrect Username and/or Password!');
					response.render('electronics/electronicsem3/electronicsem3attend.ejs', { title: "otp", otp: "Wrong otp" })
				}
			} else {
				response.render('admin/invaliduser.ejs', { title: "Invalid user", user: "User do not exists!" })
			}
		});
	} else {
		res.redirect("/")
		response.end();
	}
});

/////electronic sem 4

app.post('/otp1.16', function (req, response) {
	// Capture the input fields
	let otp = req.body.otp;
	let subject = req.body.subject;
	let student_er_no = req.body.student_er_no;
	let student_er_no1 = req.body.student_er_no;
	let student_roll = req.body.student_roll;
	// Ensure the input fields exists and are not empty
	if (student_er_no && student_roll) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		db.query('SELECT * FROM electronic_dept WHERE  student_er_no= ? AND student_roll= ?', [student_er_no, student_roll], function (error, results) {
			// If there is an issue with the query, output the error
			console.log(req.query);
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				req.session.loggedin = true;
				req.session.student_er_no = student_er_no;

				// Ensure the input fields exists and are not empty
				if (otp && subject) {
					// Execute SQL query that'll select the account from the database based on the specified username and password
					db.query('SELECT * FROM otp WHERE  otp= ? AND subject= ?', [otp, subject], function (error, results) {
						// If there is an issue with the query, output the error
						console.log(req.query);
						if (error) throw error;
						// If the account exists
						if (results.length > 0) {
							// Authenticate the user
							req.session.loggedin = true;
							req.session.otp = otp;
							// Redirect to home page
							response.render('admin/attendencemarked.ejs', { title: "otp", done: "Attendend marked successfully " });
							//////subjects
							if (subject === "linear_integrated_circuits") {
								var sql = "INSERT INTO `semester_4_e` (`student_er_no`, `attendance_date`, `linear_integrated_circuits`) VALUES ('" + student_er_no + "', CURRENT_DATE ,'1')";
								db.query(sql, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "consumer_electronics") {
								var updateQuery = "UPDATE `semester_4_e` SET `student_er_no`= ?,consumer_electronics=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "microcontroller_and_application") {
								var updateQuery = "UPDATE `semester_4_e` SET `student_er_no`= ?,microcontroller_and_application=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "basic_power_electronics") {
								var updateQuery = "UPDATE `semester_4_e` SET `student_er_no`= ?,basic_power_electronics=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "digital_communication_systems") {
								var updateQuery = "UPDATE `semester_4_e` SET `student_er_no`= ?,digital_communication_systems=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "maintenance_of_electronics_equipments_and_eda_tools_practices") {
								var updateQuery = "UPDATE `semester_4_e` SET `student_er_no`= ?,maintenance_of_electronics_equipments_and_eda_tools_practices=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else {
								console.log("error");
							}
						} else {
							// response.send('Incorrect Username and/or Password!');
							response.render('electronics/electronicsem4/electronicsem4attend.ejs', { title: "otp", otp: "Wrong otp" })
						}
						// response.redirect("/")
						response.end();
					});
				} else {
					// response.send('Incorrect Username and/or Password!');
					response.render('electronics/electronicsem4/electronicsem4attend.ejs', { title: "otp", otp: "Wrong otp" })
				}
			} else {
				response.render('admin/invaliduser.ejs', { title: "Invalid user", user: "User do not exists!" })
			}
		});
	} else {
		res.redirect("/")
		response.end();
	}
});

/////electronic sem 5

app.post('/otp1.17', function (req, response) {
	// Capture the input fields
	let otp = req.body.otp;
	let subject = req.body.subject;
	let student_er_no = req.body.student_er_no;
	let student_er_no1 = req.body.student_er_no;
	let student_roll = req.body.student_roll;
	// Ensure the input fields exists and are not empty
	if (student_er_no && student_roll) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		db.query('SELECT * FROM electronic_dept WHERE  student_er_no= ? AND student_roll= ?', [student_er_no, student_roll], function (error, results) {
			// If there is an issue with the query, output the error
			console.log(req.query);
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				req.session.loggedin = true;
				req.session.student_er_no = student_er_no;

				// Ensure the input fields exists and are not empty
				if (otp && subject) {
					// Execute SQL query that'll select the account from the database based on the specified username and password
					db.query('SELECT * FROM otp WHERE  otp= ? AND subject= ?', [otp, subject], function (error, results) {
						// If there is an issue with the query, output the error
						console.log(req.query);
						if (error) throw error;
						// If the account exists
						if (results.length > 0) {
							// Authenticate the user
							req.session.loggedin = true;
							req.session.otp = otp;
							// Redirect to home page
							response.render('admin/attendencemarked.ejs', { title: "otp", done: "Attendend marked successfully " });
							//////subjects
							if (subject === "environmental_studies") {
								var sql = "INSERT INTO `semester_5_e` (`student_er_no`, `attendance_date`, `environmental_studies`) VALUES ('" + student_er_no + "', CURRENT_DATE ,'1')";
								db.query(sql, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "control_system") {
								var updateQuery = "UPDATE `semester_5_e` SET `student_er_no`= ?,control_system=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "embedded_system") {
								var updateQuery = "UPDATE `semester_5_e` SET `student_er_no`= ?,embedded_system=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "mobile_and_wireless_communication") {
								var updateQuery = "UPDATE `semester_5_e` SET `student_er_no`= ?,mobile_and_wireless_communication=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "microwave_and_radar") {
								var updateQuery = "UPDATE `semester_5_e` SET `student_er_no`= ?,microwave_and_radar=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "industrial_training") {
								var updateQuery = "UPDATE `semester_5_e` SET `student_er_no`= ?,industrial_training=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "capstone_project_planning") {
								var updateQuery = "UPDATE `semester_5_e` SET `student_er_no`= ?,capstone_project_planning=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else {
								console.log("error");
							}
						} else {
							// response.send('Incorrect Username and/or Password!');
							response.render('electronics/electronicsem5/electronicsem5attend.ejs', { title: "otp", otp: "Wrong otp" })
						}
						// response.redirect("/")
						response.end();
					});
				} else {
					// response.send('Incorrect Username and/or Password!');
					response.render('electronics/electronicsem5/electronicsem5attend.ejs', { title: "otp", otp: "Wrong otp" })
				}
			} else {
				response.render('admin/invaliduser.ejs', { title: "Invalid user", user: "User do not exists!" })
			}
		});
	} else {
		res.redirect("/")
		response.end();
	}
});

/////electronic sem 6

app.post('/otp1.18', function (req, response) {
	// Capture the input fields
	let otp = req.body.otp;
	let subject = req.body.subject;
	let student_er_no = req.body.student_er_no;
	let student_er_no1 = req.body.student_er_no;
	let student_roll = req.body.student_roll;
	// Ensure the input fields exists and are not empty
	if (student_er_no && student_roll) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		db.query('SELECT * FROM electronic_dept WHERE  student_er_no= ? AND student_roll= ?', [student_er_no, student_roll], function (error, results) {
			// If there is an issue with the query, output the error
			console.log(req.query);
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				req.session.loggedin = true;
				req.session.student_er_no = student_er_no;

				// Ensure the input fields exists and are not empty
				if (otp && subject) {
					// Execute SQL query that'll select the account from the database based on the specified username and password
					db.query('SELECT * FROM otp WHERE  otp= ? AND subject= ?', [otp, subject], function (error, results) {
						// If there is an issue with the query, output the error
						console.log(req.query);
						if (error) throw error;
						// If the account exists
						if (results.length > 0) {
							// Authenticate the user
							req.session.loggedin = true;
							req.session.otp = otp;
							// Redirect to home page
							response.render('admin/attendencemarked.ejs', { title: "otp", done: "Attendend marked successfully " });
							//////subjects
							if (subject === "management") {
								var sql = "INSERT INTO `semester_6_e` (`student_er_no`, `attendance_date`, `management`) VALUES ('" + student_er_no + "', CURRENT_DATE ,'1')";
								db.query(sql, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "computer_networking_and_data_communication") {
								var updateQuery = "UPDATE `semester_6_e` SET `student_er_no`= ?,computer_networking_and_data_communication=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "emerging_trends_in_electronics") {
								var updateQuery = "UPDATE `semester_6_e` SET `student_er_no`= ?,emerging_trends_in_electronics=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "optical_network_and_satellite_communication") {
								var updateQuery = "UPDATE `semester_6_e` SET `student_er_no`= ?,optical_network_and_satellite_communication=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "enterpreneurship_development") {
								var updateQuery = "UPDATE `semester_6_e` SET `student_er_no`= ?,enterpreneurship_development=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "capstone_project_execution_and_report_writing") {
								var updateQuery = "UPDATE `semester_6_e` SET `student_er_no`= ?,capstone_project_execution_and_report_writing=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "vlsi_with_vhdl") {
								var updateQuery = "UPDATE `semester_6_e` SET `student_er_no`= ?,vlsi_with_vhdl=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else {
								console.log("error");
							}
						} else {
							// response.send('Incorrect Username and/or Password!');
							response.render('electronics/electronicsem6/electronicsem6attend.ejs', { title: "otp", otp: "Wrong otp" })
						}
						// response.redirect("/")
						response.end();
					});
				} else {
					// response.send('Incorrect Username and/or Password!');
					response.render('electronics/electronicsem6/electronicsem6attend.ejs', { title: "otp", otp: "Wrong otp" })
				}
			} else {
				response.render('admin/invaliduser.ejs', { title: "Invalid user", user: "User do not exists!" })
			}
		});
	} else {
		res.redirect("/")
		response.end();
	}
});

/////mechanical sem 1

app.post('/otp1.19', function (req, response) {
	// Capture the input fields
	let otp = req.body.otp;
	let subject = req.body.subject;
	let student_er_no = req.body.student_er_no;
	let student_er_no1 = req.body.student_er_no;
	let student_roll = req.body.student_roll;
	// Ensure the input fields exists and are not empty
	if (student_er_no && student_roll) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		db.query('SELECT * FROM mechanical_dept WHERE  student_er_no= ? AND student_roll= ?', [student_er_no, student_roll], function (error, results) {
			// If there is an issue with the query, output the error
			console.log(req.query);
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				req.session.loggedin = true;
				req.session.student_er_no = student_er_no;

				// Ensure the input fields exists and are not empty
				if (otp && subject) {
					// Execute SQL query that'll select the account from the database based on the specified username and password
					db.query('SELECT * FROM otp WHERE  otp= ? AND subject= ?', [otp, subject], function (error, results) {
						// If there is an issue with the query, output the error
						console.log(req.query);
						if (error) throw error;
						// If the account exists
						if (results.length > 0) {
							// Authenticate the user
							req.session.loggedin = true;
							req.session.otp = otp;
							// Redirect to home page
							response.render('admin/attendencemarked.ejs', { title: "otp", done: "Attendend marked successfully " });
							//////subjects
							if (subject === "english") {
								var sql = "INSERT INTO `semester_1_m` (`student_er_no`, `attendance_date`, `english`) VALUES ('" + student_er_no + "', CURRENT_DATE ,'1')";
								db.query(sql, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "basic_science") {
								var updateQuery = "UPDATE `semester_1_m` SET `student_er_no`= ?,basic_science=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "basic_mathematics") {
								var updateQuery = "UPDATE `semester_1_m` SET `student_er_no`= ?,basic_mathematics=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "fundamental_of_ict") {
								var updateQuery = "UPDATE `semester_1_m` SET `student_er_no`= ?,fundamental_of_ict=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "engineering_graphics") {
								var updateQuery = "UPDATE `semester_1_m` SET `student_er_no`= ?,engineering_graphics=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "workshop_practice") {
								var updateQuery = "UPDATE `semester_1_m` SET `student_er_no`= ?,workshop_practice=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else {
								console.log("error");
							}
						} else {
							// response.send('Incorrect Username and/or Password!');
							response.render('mech/mechanicalsem1/mechanicalsem1attend.ejs', { title: "otp", otp: "Wrong otp" })
						}
						// response.redirect("/")
						response.end();
					});
				} else {
					// response.send('Incorrect Username and/or Password!');
					response.render('mech/mechanicalsem1/mechanicalsem1attend.ejs', { title: "otp", otp: "Wrong otp" })
				}
			} else {
				response.render('admin/invaliduser.ejs', { title: "Invalid user", user: "User do not exists!" })
			}
		});
	} else {
		res.redirect("/")
		response.end();
	}
});

/////mechanical sem 2

app.post('/otp1.20', function (req, response) {
	// Capture the input fields
	let otp = req.body.otp;
	let subject = req.body.subject;
	let student_er_no = req.body.student_er_no;
	let student_er_no1 = req.body.student_er_no;
	let student_roll = req.body.student_roll;
	// Ensure the input fields exists and are not empty
	if (student_er_no && student_roll) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		db.query('SELECT * FROM mechanical_dept WHERE  student_er_no= ? AND student_roll= ?', [student_er_no, student_roll], function (error, results) {
			// If there is an issue with the query, output the error
			console.log(req.query);
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				req.session.loggedin = true;
				req.session.student_er_no = student_er_no;

				// Ensure the input fields exists and are not empty
				if (otp && subject) {
					// Execute SQL query that'll select the account from the database based on the specified username and password
					db.query('SELECT * FROM otp WHERE  otp= ? AND subject= ?', [otp, subject], function (error, results) {
						// If there is an issue with the query, output the error
						console.log(req.query);
						if (error) throw error;
						// If the account exists
						if (results.length > 0) {
							// Authenticate the user
							req.session.loggedin = true;
							req.session.otp = otp;
							// Redirect to home page
							response.render('admin/attendencemarked.ejs', { title: "otp", done: "Attendend marked successfully " });
							//////subjects
							if (subject === "applied_science") {
								var sql = "INSERT INTO `semester_2_m` (`student_er_no`, `attendance_date`, `applied_science`) VALUES ('" + student_er_no + "', CURRENT_DATE ,'1')";
								db.query(sql, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "applied_mechanics") {
								var updateQuery = "UPDATE `semester_2_m` SET `student_er_no`= ?,applied_mechanics=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "applied_mathematics") {
								var updateQuery = "UPDATE `semester_2_m` SET `student_er_no`= ?,applied_mathematics=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "engineering_drawing") {
								var updateQuery = "UPDATE `semester_2_m` SET `student_er_no`= ?,engineering_drawing=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "mechanical_engineering_workshop") {
								var updateQuery = "UPDATE `semester_2_m` SET `student_er_no`= ?,mechanical_engineering_workshop=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "business_communication_using_computers") {
								var updateQuery = "UPDATE `semester_2_m` SET `student_er_no`= ?,business_communication_using_computers=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else {
								console.log("error");
							}
						} else {
							// response.send('Incorrect Username and/or Password!');
							response.render('mech/mechanicalsem2/mechanicalsem2attend.ejs', { title: "otp", otp: "Wrong otp" })
						}
						// response.redirect("/")
						response.end();
					});
				} else {
					// response.send('Incorrect Username and/or Password!');
					response.render('mech/mechanicalsem2/mechanicalsem2attend.ejs', { title: "otp", otp: "Wrong otp" })
				}
			} else {
				response.render('admin/invaliduser.ejs', { title: "Invalid user", user: "User do not exists!" })
			}
		});
	} else {
		res.redirect("/")
		response.end();
	}
});

/////mechanical sem 3

app.post('/otp1.21', function (req, response) {
	// Capture the input fields
	let otp = req.body.otp;
	let subject = req.body.subject;
	let student_er_no = req.body.student_er_no;
	let student_er_no1 = req.body.student_er_no;
	let student_roll = req.body.student_roll;
	// Ensure the input fields exists and are not empty
	if (student_er_no && student_roll) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		db.query('SELECT * FROM mechanical_dept WHERE  student_er_no= ? AND student_roll= ?', [student_er_no, student_roll], function (error, results) {
			// If there is an issue with the query, output the error
			console.log(req.query);
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				req.session.loggedin = true;
				req.session.student_er_no = student_er_no;

				// Ensure the input fields exists and are not empty
				if (otp && subject) {
					// Execute SQL query that'll select the account from the database based on the specified username and password
					db.query('SELECT * FROM otp WHERE  otp= ? AND subject= ?', [otp, subject], function (error, results) {
						// If there is an issue with the query, output the error
						console.log(req.query);
						if (error) throw error;
						// If the account exists
						if (results.length > 0) {
							// Authenticate the user
							req.session.loggedin = true;
							req.session.otp = otp;
							// Redirect to home page
							response.render('admin/attendencemarked.ejs', { title: "otp", done: "Attendend marked successfully " });
							//////subjects
							if (subject === "mechanical_engineering_workshop") {
								var sql = "INSERT INTO `semester_3_m` (`student_er_no`, `attendance_date`, `mechanical_engineering_workshop`) VALUES ('" + student_er_no + "', CURRENT_DATE ,'1')";
								db.query(sql, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "basic_electrical_and_electronics_engineering") {
								var updateQuery = "UPDATE `semester_3_m` SET `student_er_no`= ?,basic_electrical_and_electronics_engineering=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "thermal_engineering") {
								var updateQuery = "UPDATE `semester_3_m` SET `student_er_no`= ?,thermal_engineering=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "mechanical_working_drawing") {
								var updateQuery = "UPDATE `semester_3_m` SET `student_er_no`= ?,mechanical_working_drawing=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "engineering_metrology") {
								var updateQuery = "UPDATE `semester_3_m` SET `student_er_no`= ?,engineering_metrology=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "mechanical_engineering_metarials") {
								var updateQuery = "UPDATE `semester_3_m` SET `student_er_no`= ?,mechanical_engineering_metarials=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else {
								console.log("error");
							}
						} else {
							// response.send('Incorrect Username and/or Password!');
							response.render('mech/mechanicalsem3/mechanicalsem3attend.ejs', { title: "otp", otp: "Wrong otp" })
						}
						// response.redirect("/")
						response.end();
					});
				} else {
					// response.send('Incorrect Username and/or Password!');
					response.render('mech/mechanicalsem3/mechanicalsem3attend.ejs', { title: "otp", otp: "Wrong otp" })
				}
			} else {
				response.render('admin/invaliduser.ejs', { title: "Invalid user", user: "User do not exists!" })
			}
		});
	} else {
		res.redirect("/")
		response.end();
	}
});

/////mechanical sem 4

app.post('/otp1.22', function (req, response) {
	// Capture the input fields
	let otp = req.body.otp;
	let subject = req.body.subject;
	let student_er_no = req.body.student_er_no;
	let student_er_no1 = req.body.student_er_no;
	let student_roll = req.body.student_roll;
	// Ensure the input fields exists and are not empty
	if (student_er_no && student_roll) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		db.query('SELECT * FROM mechanical_dept WHERE  student_er_no= ? AND student_roll= ?', [student_er_no, student_roll], function (error, results) {
			// If there is an issue with the query, output the error
			console.log(req.query);
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				req.session.loggedin = true;
				req.session.student_er_no = student_er_no;

				// Ensure the input fields exists and are not empty
				if (otp && subject) {
					// Execute SQL query that'll select the account from the database based on the specified username and password
					db.query('SELECT * FROM otp WHERE  otp= ? AND subject= ?', [otp, subject], function (error, results) {
						// If there is an issue with the query, output the error
						console.log(req.query);
						if (error) throw error;
						// If the account exists
						if (results.length > 0) {
							// Authenticate the user
							req.session.loggedin = true;
							req.session.otp = otp;
							// Redirect to home page
							response.render('admin/attendencemarked.ejs', { title: "otp", done: "Attendend marked successfully " });
							//////subjects
							if (subject === "theory_of_machines") {
								var sql = "INSERT INTO `semester_4_m` (`student_er_no`, `attendance_date`, `theory_of_machines`) VALUES ('" + student_er_no + "', CURRENT_DATE ,'1')";
								db.query(sql, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "mechanical_engineering_measurements") {
								var updateQuery = "UPDATE `semester_4_m` SET `student_er_no`= ?,mechanical_engineering_measurements=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "fluid_mechanics_and_machinery") {
								var updateQuery = "UPDATE `semester_4_m` SET `student_er_no`= ?,fluid_mechanics_and_machinery=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "manufacturing_process") {
								var updateQuery = "UPDATE `semester_4_m` SET `student_er_no`= ?,manufacturing_process=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "environmental_studies") {
								var updateQuery = "UPDATE `semester_4_m` SET `student_er_no`= ?,environmental_studies=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "computer_aided_drafting") {
								var updateQuery = "UPDATE `semester_4_m` SET `student_er_no`= ?,computer_aided_drafting=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else {
								console.log("error");
							}
						} else {
							// response.send('Incorrect Username and/or Password!');
							response.render('mech/mechanicalsem4/mechanicalsem4attend.ejs', { title: "otp", otp: "Wrong otp" })
						}
						// response.redirect("/")
						response.end();
					});
				} else {
					// response.send('Incorrect Username and/or Password!');
					response.render('mech/mechanicalsem4/mechanicalsem4attend.ejs', { title: "otp", otp: "Wrong otp" })
				}
			} else {
				response.render('admin/invaliduser.ejs', { title: "Invalid user", user: "User do not exists!" })
			}
		});
	} else {
		res.redirect("/")
		response.end();
	}
});

/////mechanical sem 5

app.post('/otp1.23', function (req, response) {
	// Capture the input fields
	let otp = req.body.otp;
	let subject = req.body.subject;
	let student_er_no = req.body.student_er_no;
	let student_er_no1 = req.body.student_er_no;
	let student_roll = req.body.student_roll;
	// Ensure the input fields exists and are not empty
	if (student_er_no && student_roll) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		db.query('SELECT * FROM mechanical_dept WHERE  student_er_no= ? AND student_roll= ?', [student_er_no, student_roll], function (error, results) {
			// If there is an issue with the query, output the error
			console.log(req.query);
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				req.session.loggedin = true;
				req.session.student_er_no = student_er_no;

				// Ensure the input fields exists and are not empty
				if (otp && subject) {
					// Execute SQL query that'll select the account from the database based on the specified username and password
					db.query('SELECT * FROM otp WHERE  otp= ? AND subject= ?', [otp, subject], function (error, results) {
						// If there is an issue with the query, output the error
						console.log(req.query);
						if (error) throw error;
						// If the account exists
						if (results.length > 0) {
							// Authenticate the user
							req.session.loggedin = true;
							req.session.otp = otp;
							// Redirect to home page
							response.render('admin/attendencemarked.ejs', { title: "otp", done: "Attendend marked successfully " });
							//////subjects
							if (subject === "management") {
								var sql = "INSERT INTO `semester_5_m` (`student_er_no`, `attendance_date`, `management`) VALUES ('" + student_er_no + "', CURRENT_DATE ,'1')";
								db.query(sql, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "power_engineering_and_refrigeration") {
								var updateQuery = "UPDATE `semester_5_m` SET `student_er_no`= ?,power_engineering_and_refrigeration=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "advance_manufacturing_process") {
								var updateQuery = "UPDATE `semester_5_m` SET `student_er_no`= ?,advance_manufacturing_process=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "elements_of_machine_design") {
								var updateQuery = "UPDATE `semester_5_m` SET `student_er_no`= ?,elements_of_machine_design=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "tool_engineering") {
								var updateQuery = "UPDATE `semester_5_m` SET `student_er_no`= ?,tool_engineering=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "solid_modeling_and_additive_manufacturing") {
								var updateQuery = "UPDATE `semester_5_m` SET `student_er_no`= ?,solid_modeling_and_additive_manufacturing=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "industrial_training") {
								var updateQuery = "UPDATE `semester_5_m` SET `student_er_no`= ?,industrial_training=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "capstone_project_planning") {
								var updateQuery = "UPDATE `semester_5_m` SET `student_er_no`= ?,capstone_project_planning=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else {
								console.log("error");
							}
						} else {
							// response.send('Incorrect Username and/or Password!');
							response.render('mech/mechanicalsem5/mechanicalsem5attend.ejs', { title: "otp", otp: "Wrong otp" })
						}
						// response.redirect("/")
						response.end();
					});
				} else {
					// response.send('Incorrect Username and/or Password!');
					response.render('mech/mechanicalsem5/mechanicalsem5attend.ejs', { title: "otp", otp: "Wrong otp" })
				}
			} else {
				response.render('admin/invaliduser.ejs', { title: "Invalid user", user: "User do not exists!" })
			}
		});
	} else {
		res.redirect("/")
		response.end();
	}
});

/////mechanical sem 6

app.post('/otp1.24', function (req, response) {
	// Capture the input fields
	let otp = req.body.otp;
	let subject = req.body.subject;
	let student_er_no = req.body.student_er_no;
	let student_er_no1 = req.body.student_er_no;
	let student_roll = req.body.student_roll;
	// Ensure the input fields exists and are not empty
	if (student_er_no && student_roll) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		db.query('SELECT * FROM mechanical_dept WHERE  student_er_no= ? AND student_roll= ?', [student_er_no, student_roll], function (error, results) {
			// If there is an issue with the query, output the error
			console.log(req.query);
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				req.session.loggedin = true;
				req.session.student_er_no = student_er_no;

				// Ensure the input fields exists and are not empty
				if (otp && subject) {
					// Execute SQL query that'll select the account from the database based on the specified username and password
					db.query('SELECT * FROM otp WHERE  otp= ? AND subject= ?', [otp, subject], function (error, results) {
						// If there is an issue with the query, output the error
						console.log(req.query);
						if (error) throw error;
						// If the account exists
						if (results.length > 0) {
							// Authenticate the user
							req.session.loggedin = true;
							req.session.otp = otp;
							// Redirect to home page
							response.render('admin/attendencemarked.ejs', { title: "otp", done: "Attendend marked successfully " });
							//////subjects
							if (subject === "refrigeration_and_air_condition") {
								var sql = "INSERT INTO `semester_6_m` (`student_er_no`, `attendance_date`, `refrigeration_and_air_condition`) VALUES ('" + student_er_no + "', CURRENT_DATE ,'1')";
								db.query(sql, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "industrial_hydraulics_and_pneumatics") {
								var updateQuery = "UPDATE `semester_6_m` SET `student_er_no`= ?,industrial_hydraulics_and_pneumatics=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "industrial_engineering_and_quality_control") {
								var updateQuery = "UPDATE `semester_6_m` SET `student_er_no`= ?,industrial_engineering_and_quality_control=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "emerging_trends_in_mechanical_engineering") {
								var updateQuery = "UPDATE `semester_6_m` SET `student_er_no`= ?,emerging_trends_in_mechanical_engineering=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "enterpreneurship_development") {
								var updateQuery = "UPDATE `semester_6_m` SET `student_er_no`= ?,enterpreneurship_development=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else if (subject === "automobile_development") {
								var updateQuery = "UPDATE `semester_6_m` SET `student_er_no`= ?,automobile_development=? WHERE `student_er_no`=?";
								var query = mysql.format(updateQuery, [student_er_no, 1, student_er_no1]);
								db.query(query, function (err, response) {
									if (err) throw err;
									console.log(response.insertId);
								});
							} else {
								console.log("error");
							}
						} else {
							// response.send('Incorrect Username and/or Password!');
							response.render('mech/mechanicalsem6/mechanicalsem6attend.ejs', { title: "otp", otp: "Wrong otp" })
						}
						// response.redirect("/")
						response.end();
					});
				} else {
					// response.send('Incorrect Username and/or Password!');
					response.render('mech/mechanicalsem6/mechanicalsem6attend.ejs', { title: "otp", otp: "Wrong otp" })
				}
			} else {
				response.render('admin/invaliduser.ejs', { title: "Invalid user", user: "User do not exists!" })
			}
		});
	} else {
		res.redirect("/")
		response.end();
	}
});


//// first co stu
app.get("/firstcostu", function (req, res, next) {
	var getQuery = "SELECT * FROM `computer_dept` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		console.log(result);
		if (req.session.username1) {
			res.render("computer/firstcostu.ejs", { title: "firstcostu", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/firstco")
		}
	});
});

app.get('/delete1/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "SET FOREIGN_KEY_CHECKS=0;DELETE FROM `computer_dept` WHERE `student_er_no`= ? LIMIT 1";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/firstcostu');
	});

});

app.get('/edit1/:id', function (req, res, next) {
	var id = req.params.id;
	// console.log(id)
	var getQuery = "select * FROM `computer_dept` WHERE `student_er_no`= ?";
	var query = mysql.format(getQuery, id);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);
		res.render('computer/edit1.ejs', { title: 'FY CO Records', computer: json, success: '', user: req.session.user });
	});
});


app.post('/update1/', function (req, res, next) {
	var student_roll = req.body.student_roll;
	var student_year = req.body.student_year;
	var student_name = req.body.student_name;
	var student_email = req.body.student_email;
	var parents_name = req.body.parents_name;
	var parent_email = req.body.parent_email;
	var student_er_no = req.body.student_er_no;
	var student_er_no1 = req.body.student_er_no;


	var updateQuery = 'UPDATE `computer_dept` SET `student_roll`=?,`student_year`=?,`student_name`=?,`student_email`=?,`parents_name`=?,`parent_email`=?,`student_er_no`=? WHERE `student_er_no`=?';
	var query = mysql.format(updateQuery, [student_roll, student_year, student_name, student_email, parents_name, parent_email, student_er_no, student_er_no1]);
	db.query(query, function (err, response) {
		if (err) throw err;
		console.log(response.insertId);
		res.redirect('/firstcostu');
	});
});


// /////// co second yr


app.get("/secondcostu", function (req, res, next) {
	var getQuery = "SELECT * FROM `computer_dept` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("computer/secondcostu.ejs", { title: "secondcostu", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/secondco")
		}
	});
});

app.get('/delete3/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "SET FOREIGN_KEY_CHECKS=0;DELETE FROM `computer_dept` WHERE `student_er_no`= ? LIMIT 1";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/secondcostu');
	});

});

app.get('/edit3/:id', function (req, res, next) {
	var id = req.params.id;
	// console.log(id)
	var getQuery = "select * FROM `computer_dept` WHERE `student_er_no`= ?";
	var query = mysql.format(getQuery, id);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);
		res.render('computer/edit1.1.ejs', { title: 'SY CO Records', computer: json, success: '', user: req.session.user });
	});
});


app.post('/update3/', function (req, res, next) {
	var student_roll = req.body.student_roll;
	var student_year = req.body.student_year;
	var student_name = req.body.student_name;
	var student_email = req.body.student_email;
	var parents_name = req.body.parents_name;
	var parent_email = req.body.parent_email;
	var student_er_no = req.body.student_er_no;
	var student_er_no1 = req.body.student_er_no;


	var updateQuery = 'UPDATE `computer_dept` SET `student_roll`=?,`student_year`=?,`student_name`=?,`student_email`=?,`parents_name`=?,`parent_email`=?,`student_er_no`=? WHERE `student_er_no`=?';
	var query = mysql.format(updateQuery, [student_roll, student_year, student_name, student_email, parents_name, parent_email, student_er_no, student_er_no1]);
	db.query(query, function (err, response) {
		if (err) throw err;
		console.log(response.insertId);
		res.redirect('/secondcostu');
	});
});


///// co third

app.get("/thirdcostu", function (req, res, next) {
	var getQuery = "SELECT * FROM `computer_dept` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("computer/thirdcostu.ejs", { title: "thirdcostu", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/thirdco")
		}
	});
});

app.get('/delete4/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "SET FOREIGN_KEY_CHECKS=0;DELETE FROM `computer_dept` WHERE `student_er_no`= ? LIMIT 1 ";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {
		if (err) throw err;
		res.redirect('/thirdcostu');
	});

});

app.get('/edit4/:id', function (req, res, next) {
	var id = req.params.id;
	// console.log(id)
	var getQuery = "select * FROM `computer_dept` WHERE `student_er_no`= ?";
	var query = mysql.format(getQuery, id);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);
		res.render('computer/edit1.2.ejs', { title: 'TY CO Records', computer: json, success: '', user: req.session.user });
	});
});


app.post('/update4/', function (req, res, next) {
	var student_roll = req.body.student_roll;
	var student_year = req.body.student_year;
	var student_name = req.body.student_name;
	var student_email = req.body.student_email;
	var parents_name = req.body.parents_name;
	var parent_email = req.body.parent_email;
	var student_er_no = req.body.student_er_no;
	var student_er_no1 = req.body.student_er_no;


	var updateQuery = 'UPDATE `computer_dept` SET `student_roll`=?,`student_year`=?,`student_name`=?,`student_email`=?,`parents_name`=?,`parent_email`=?,`student_er_no`=? WHERE `student_er_no`=?';
	var query = mysql.format(updateQuery, [student_roll, student_year, student_name, student_email, parents_name, parent_email, student_er_no, student_er_no1]);
	db.query(query, function (err, response) {
		if (err) throw err;
		console.log(response.insertId);
		res.redirect('/thirdcostu');
	});
});

///// electrical


app.get("/firstelestu", function (req, res, next) {
	var getQuery = "SELECT * FROM `electronic_dept` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999 ";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("electronics/firstelestu.ejs", { title: "firstelestu", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/firstele")
		}
	});
});

app.get('/delete2/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "SET FOREIGN_KEY_CHECKS=0;DELETE FROM `electronic_dept` WHERE `student_er_no`= ? LIMIT 1";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/firstelestu');
	});

});

app.get('/edit2/:id', function (req, res, next) {
	var id = req.params.id;
	// console.log(id)
	var getQuery = "select * FROM `electronic_dept` WHERE `student_er_no`= ?";
	var query = mysql.format(getQuery, id);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('electronics/edit2.ejs', { title: 'edit', computer: json, success: '', user: req.session.user });

	});
});


app.post('/update2/', function (req, res, next) {
	var student_roll = req.body.student_roll;
	var student_year = req.body.student_year;
	var student_name = req.body.student_name;
	var student_email = req.body.student_email;
	var parents_name = req.body.parents_name;
	var parent_email = req.body.parent_email;
	var student_er_no = req.body.student_er_no;
	var student_er_no1 = req.body.student_er_no;


	var updateQuery = 'UPDATE `electronic_dept` SET `student_roll`=?,`student_year`=?,`student_name`=?,`student_email`=?,`parents_name`=?,`parent_email`=?,`student_er_no`=? WHERE `student_er_no`=?';
	var query = mysql.format(updateQuery, [student_roll, student_year, student_name, student_email, parents_name, parent_email, student_er_no, student_er_no1]);
	db.query(query, function (err, response) {
		if (err) throw err;
		console.log(response.insertId);
		res.redirect('/firstelestu');
	});
});


///// second ele

app.get("/secondelestu", function (req, res, next) {
	var getQuery = "SELECT * FROM `electronic_dept` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("electronics/secondelestu.ejs", { title: "secondelestu", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/secondele")
		}
	});
});

app.get('/delete5/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "SET FOREIGN_KEY_CHECKS=0;DELETE FROM `electronic_dept` WHERE `student_er_no`= ? LIMIT 1";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/secondelestu');
	});

});

app.get('/edit5/:id', function (req, res, next) {
	var id = req.params.id;
	// console.log(id)
	var getQuery = "select * FROM `electronic_dept` WHERE `student_er_no`= ?";
	var query = mysql.format(getQuery, id);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('electronics/edit2.1.ejs', { title: 'edit', computer: json, success: '', user: req.session.user });

	});
});


app.post('/update5/', function (req, res, next) {
	var student_roll = req.body.student_roll;
	var student_year = req.body.student_year;
	var student_name = req.body.student_name;
	var student_email = req.body.student_email;
	var parents_name = req.body.parents_name;
	var parent_email = req.body.parent_email;
	var student_er_no = req.body.student_er_no;
	var student_er_no1 = req.body.student_er_no;


	var updateQuery = 'UPDATE `electronic_dept` SET `student_roll`=?,`student_year`=?,`student_name`=?,`student_email`=?,`parents_name`=?,`parent_email`=?,`student_er_no`=? WHERE `student_er_no`=?';
	var query = mysql.format(updateQuery, [student_roll, student_year, student_name, student_email, parents_name, parent_email, student_er_no, student_er_no1]);
	db.query(query, function (err, response) {
		if (err) throw err;
		console.log(response.insertId);
		res.redirect('/secondelestu');
	});
});


////third ele


app.get("/thirdelestu", function (req, res, next) {
	var getQuery = "SELECT * FROM `electronic_dept` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999 ";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("electronics/thirdelestu.ejs", { title: "thirdelestu", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/thirdele")
		}
	});
});

app.get('/delete6/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "SET FOREIGN_KEY_CHECKS=0;DELETE FROM `electronic_dept` WHERE `student_er_no`= ? LIMIT 1";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/thirdelestu');
	});

});

app.get('/edit6/:id', function (req, res, next) {
	var id = req.params.id;
	// console.log(id)
	var getQuery = "select * FROM `electronic_dept` WHERE `student_er_no`= ?";
	var query = mysql.format(getQuery, id);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('electronics/edit2.2.ejs', { title: 'edit', computer: json, success: '', user: req.session.user });

	});
});


app.post('/update6/', function (req, res, next) {
	var student_roll = req.body.student_roll;
	var student_year = req.body.student_year;
	var student_name = req.body.student_name;
	var student_email = req.body.student_email;
	var parents_name = req.body.parents_name;
	var parent_email = req.body.parent_email;
	var student_er_no = req.body.student_er_no;
	var student_er_no1 = req.body.student_er_no;


	var updateQuery = 'UPDATE `electronic_dept` SET `student_roll`=?,`student_year`=?,`student_name`=?,`student_email`=?,`parents_name`=?,`parent_email`=?,`student_er_no`=? WHERE `student_er_no`=?';
	var query = mysql.format(updateQuery, [student_roll, student_year, student_name, student_email, parents_name, parent_email, student_er_no, student_er_no1]);
	db.query(query, function (err, response) {
		if (err) throw err;
		console.log(response.insertId);
		res.redirect('/thirdelestu');
	});
});

///// civil first stu


app.get("/firstcestu", function (req, res, next) {
	var getQuery = "SELECT * FROM `civil_dept` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999 ";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("civil/firstcivilstu.ejs", { title: "firstcivilstu", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/firstce")
		}
	});
});

app.get('/delete7/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "SET FOREIGN_KEY_CHECKS=0;DELETE FROM `civil_dept` WHERE `student_er_no`= ? LIMIT 1";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/firstcestu');
	});

});

app.get('/edit7/:id', function (req, res, next) {
	var id = req.params.id;
	// console.log(id)
	var getQuery = "select * FROM `civil_dept` WHERE `student_er_no`= ?";
	var query = mysql.format(getQuery, id);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('civil/edit3.ejs', { title: 'edit', computer: json, success: '', user: req.session.user });

	});
});


app.post('/update7/', function (req, res, next) {
	var student_roll = req.body.student_roll;
	var student_year = req.body.student_year;
	var student_name = req.body.student_name;
	var student_email = req.body.student_email;
	var parents_name = req.body.parents_name;
	var parent_email = req.body.parent_email;
	var student_er_no = req.body.student_er_no;
	var student_er_no1 = req.body.student_er_no;


	var updateQuery = 'UPDATE `civil_dept` SET `student_roll`=?,`student_year`=?,`student_name`=?,`student_email`=?,`parents_name`=?,`parent_email`=?,`student_er_no`=? WHERE `student_er_no`=?';
	var query = mysql.format(updateQuery, [student_roll, student_year, student_name, student_email, parents_name, parent_email, student_er_no, student_er_no1]);
	db.query(query, function (err, response) {
		if (err) throw err;
		console.log(response.insertId);
		res.redirect('/firstcestu');
	});
});

////// civil sec stu


app.get("/secondcestu", function (req, res, next) {
	var getQuery = "SELECT * FROM `civil_dept` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999 ";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("civil/secondcivilstu.ejs", { title: "secondcestu", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/secondce")
		}
	});
});

app.get('/delete8/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "SET FOREIGN_KEY_CHECKS=0;DELETE FROM `civil_dept` WHERE `student_er_no`= ? LIMIT 1";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/secondcestu');
	});

});

app.get('/edit8/:id', function (req, res, next) {
	var id = req.params.id;
	// console.log(id)
	var getQuery = "select * FROM `civil_dept` WHERE `student_er_no`= ?";
	var query = mysql.format(getQuery, id);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('civil/edit3.1.ejs', { title: 'edit', computer: json, success: '', user: req.session.user });

	});
});


app.post('/update8/', function (req, res, next) {
	var student_roll = req.body.student_roll;
	var student_year = req.body.student_year;
	var student_name = req.body.student_name;
	var student_email = req.body.student_email;
	var parents_name = req.body.parents_name;
	var parent_email = req.body.parent_email;
	var student_er_no = req.body.student_er_no;
	var student_er_no1 = req.body.student_er_no;


	var updateQuery = 'UPDATE `civil_dept` SET `student_roll`=?,`student_year`=?,`student_name`=?,`student_email`=?,`parents_name`=?,`parent_email`=?,`student_er_no`=? WHERE `student_er_no`=?';
	var query = mysql.format(updateQuery, [student_roll, student_year, student_name, student_email, parents_name, parent_email, student_er_no, student_er_no1]);
	db.query(query, function (err, response) {
		if (err) throw err;
		console.log(response.insertId);
		res.redirect('/secondcestu');
	});
});

/// civil stu third


app.get("/thirdcestu", function (req, res, next) {
	var getQuery = "SELECT * FROM `civil_dept` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999 ";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("civil/thirdcivilstu.ejs", { title: "thirdcestu", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/thirdce")
		}
	});
});

app.get('/delete9/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "SET FOREIGN_KEY_CHECKS=0;DELETE FROM `civil_dept` WHERE `student_er_no`= ? LIMIT 1";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/thirdcestu');
	});

});

app.get('/edit9/:id', function (req, res, next) {
	var id = req.params.id;
	// console.log(id)
	var getQuery = "select * FROM `civil_dept` WHERE `student_er_no`= ?";
	var query = mysql.format(getQuery, id);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('civil/edit3.2.ejs', { title: 'edit', computer: json, success: '', user: req.session.user });

	});
});


app.post('/update9/', function (req, res, next) {
	var student_roll = req.body.student_roll;
	var student_year = req.body.student_year;
	var student_name = req.body.student_name;
	var student_email = req.body.student_email;
	var parents_name = req.body.parents_name;
	var parent_email = req.body.parent_email;
	var student_er_no = req.body.student_er_no;
	var student_er_no1 = req.body.student_er_no;


	var updateQuery = 'UPDATE `civil_dept` SET `student_roll`=?,`student_year`=?,`student_name`=?,`student_email`=?,`parents_name`=?,`parent_email`=?,`student_er_no`=? WHERE `student_er_no`=?';
	var query = mysql.format(updateQuery, [student_roll, student_year, student_name, student_email, parents_name, parent_email, student_er_no, student_er_no1]);
	db.query(query, function (err, response) {
		if (err) throw err;
		console.log(response.insertId);
		res.redirect('/thirdcestu');
	});
});


/////// mechanical first stu
app.get("/firstmestu", function (req, res, next) {
	var getQuery = "SELECT * FROM `mechanical_dept` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999 ";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("mechanical/firstmechstu.ejs", { title: "firstmestu", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/firstme")
		}
	});
});

app.get('/delete10/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "SET FOREIGN_KEY_CHECKS=0;DELETE FROM `mechanical_dept` WHERE `student_er_no`= ? LIMIT 1";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/firstmestu');
	});

});

app.get('/edit10/:id', function (req, res, next) {
	var id = req.params.id;
	// console.log(id)
	var getQuery = "select * FROM `mechanical_dept` WHERE `student_er_no`= ?";
	var query = mysql.format(getQuery, id);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('mechanical/edit4.ejs', { title: 'edit', computer: json, success: '', user: req.session.user });

	});
});


app.post('/update10/', function (req, res, next) {
	var student_roll = req.body.student_roll;
	var student_year = req.body.student_year;
	var student_name = req.body.student_name;
	var student_email = req.body.student_email;
	var parents_name = req.body.parents_name;
	var parent_email = req.body.parent_email;
	var student_er_no = req.body.student_er_no;
	var student_er_no1 = req.body.student_er_no;


	var updateQuery = 'UPDATE `mechanical_dept` SET `student_roll`=?,`student_year`=?,`student_name`=?,`student_email`=?,`parents_name`=?,`parent_email`=?,`student_er_no`=? WHERE `student_er_no`=?';
	var query = mysql.format(updateQuery, [student_roll, student_year, student_name, student_email, parents_name, parent_email, student_er_no, student_er_no1]);
	db.query(query, function (err, response) {
		if (err) throw err;
		console.log(response.insertId);
		res.redirect('/firstmestu');
	});
});

////// second stu mech

app.get("/secondmestu", function (req, res, next) {
	var getQuery = "SELECT * FROM `mechanical_dept` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999 ";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("mechanical/secondmechstu.ejs", { title: "secondmestu", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/secondme")
		}
	});
});

app.get('/delete11/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "SET FOREIGN_KEY_CHECKS=0;DELETE FROM `mechanical_dept` WHERE `student_er_no`= ? LIMIT 1";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/secondmestu');
	});

});

app.get('/edit11/:id', function (req, res, next) {
	var id = req.params.id;
	// console.log(id)
	var getQuery = "select * FROM `mechanical_dept` WHERE `student_er_no`= ?";
	var query = mysql.format(getQuery, id);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('mechanical/edit4.1.ejs', { title: 'edit', computer: json, success: '', user: req.session.user });

	});
});


app.post('/update11/', function (req, res, next) {
	var student_roll = req.body.student_roll;
	var student_year = req.body.student_year;
	var student_name = req.body.student_name;
	var student_email = req.body.student_email;
	var parents_name = req.body.parents_name;
	var parent_email = req.body.parent_email;
	var student_er_no = req.body.student_er_no;
	var student_er_no1 = req.body.student_er_no;


	var updateQuery = 'UPDATE `mechanical_dept` SET `student_roll`=?,`student_year`=?,`student_name`=?,`student_email`=?,`parents_name`=?,`parent_email`=?,`student_er_no`=? WHERE `student_er_no`=?';
	var query = mysql.format(updateQuery, [student_roll, student_year, student_name, student_email, parents_name, parent_email, student_er_no, student_er_no1]);
	db.query(query, function (err, response) {
		if (err) throw err;
		console.log(response.insertId);
		res.redirect('/secondmestu');
	});
});

//// third stu mech

app.get("/thirdmestu", function (req, res, next) {
	var getQuery = "SELECT * FROM `mechanical_dept` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999 ";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("mechanical/thirdmechstu.ejs", { title: "thirdmestu", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/thirdce")
		}
	});
});

app.get('/delete12/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "SET FOREIGN_KEY_CHECKS=0;DELETE FROM `mechanical_dept` WHERE `student_er_no`= ? LIMIT 1";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/thirdmestu');
	});

});

app.get('/edit12/:id', function (req, res, next) {
	var id = req.params.id;
	// console.log(id)
	var getQuery = "select * FROM `mechanical_dept` WHERE `student_er_no`= ?";
	var query = mysql.format(getQuery, id);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('mechanical/edit4.2.ejs', { title: 'edit', computer: json, success: '', user: req.session.user });

	});
});


app.post('/update12/', function (req, res, next) {
	var student_roll = req.body.student_roll;
	var student_year = req.body.student_year;
	var student_name = req.body.student_name;
	var student_email = req.body.student_email;
	var parents_name = req.body.parents_name;
	var parent_email = req.body.parent_email;
	var student_er_no = req.body.student_er_no;
	var student_er_no1 = req.body.student_er_no;


	var updateQuery = 'UPDATE `mechanical_dept` SET `student_roll`=?,`student_year`=?,`student_name`=?,`student_email`=?,`parents_name`=?,`parent_email`=?,`student_er_no`=? WHERE `student_er_no`=?';
	var query = mysql.format(updateQuery, [student_roll, student_year, student_name, student_email, parents_name, parent_email, student_er_no, student_er_no1]);
	db.query(query, function (err, response) {
		if (err) throw err;
		console.log(response.insertId);
		res.redirect('/thirdmestu');
	});
});

////////

//route for dashboard
app.get('/index', (req, res) => {
	if (req.session.username1) {
		res.render('admin/index.ejs', { user: req.session.user })
	} else {
		res.redirect("/login")
	}
})

app.get("/users", function (req, res, next) {
	var getQuery = "SELECT * FROM `teacher_info`";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("admin/users.ejs", { title: "users", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/login")
		}
	});
});
//// register teacher

app.post("/register1", function (req, res) {
	//   console.log(req.body);

	var firstname = req.body.firstname;
	var lastname = req.body.lastname;
	var username = req.body.username;
	var password = req.body.password;
	var department = req.body.department;

	db.getConnection(function (err) {
		if (err) {
			res.send("Error occured.");
		} else {
			var sql =
				"INSERT INTO teacher_info(teacher_fname,teacher_lname,teacher_user,teacher_pass,teacher_dept) VALUES ('" + firstname + "','" + lastname + "','" + username + "','" + password + "','" + department + "')";
			//   window.alert("signup successful");
			res.redirect("/index")
			db.query(sql, function (err2) {
				if (err2) {
					console.log(err2);
				}
			});
		}
	});
});






// /////

app.post("/register", function (req, res) {
	//   console.log(req.body);

	var firstname = req.body.firstname;
	var lastname = req.body.lastname;
	var username = req.body.username;
	var password = req.body.password;
	var department = req.body.department;

	db.getConnection(function (err) {
		if (err) {
			res.send("Error occured.");
		} else {
			var sql =
				"INSERT INTO teacher_info(teacher_fname,teacher_lname,teacher_user,teacher_pass,teacher_dept) VALUES ('" + firstname + "','" + lastname + "','" + username + "','" + password + "','" + department + "')";
			//   window.alert("signup successful");
			res.redirect("/")
			db.query(sql, function (err2) {
				if (err2) {
					console.log(err2);
				}
			});
		}
	});
});

app.post("/registerco", function (req, res) {
	//   console.log(req.body);

	var name = req.body.name;
	var rollNumber = req.body.rollNumber;
	var gmail = req.body.gmail;
	var erno = req.body.erno;
	var Pname = req.body.Pname;
	var Pgmail = req.body.Pgmail;
	var year = req.body.year;

	db.getConnection(function (err) {
		if (err) {
			res.send("Error occured.");

		} else {
			var sql = "INSERT INTO `computer_dept`(`student_roll`, `student_year`, `student_name`, `student_email`, `parents_name`, `parent_email`, `student_er_no`) VALUES ('" + rollNumber + "','" + year + "','" + name + "','" + gmail + "','" + Pname + "','" + Pgmail + "' ,'" + erno + "')";
			// res.redirect("/")
			db.query(sql, function (err2) {
				if (err2) {
					console.log(err2);
				}
			});
		}
	});
});

app.post("/registerel", function (req, res) {
	//   console.log(req.body);

	var name1 = req.body.name1;
	var rollNumber1 = req.body.rollNumber1;
	var gmail1 = req.body.gmail1;
	var erno1 = req.body.erno1;
	var Pname1 = req.body.Pname1;
	var Pgmail1 = req.body.Pgmail1;
	var year1 = req.body.year1;

	db.getConnection(function (err) {
		if (err) {
			res.send("Error occured.");

		} else {
			var sql = "INSERT INTO `electronic_dept`(`student_roll`, `student_year`, `student_name`, `student_email`, `parents_name`, `parent_email`, `student_er_no`) VALUES ('" + rollNumber1 + "','" + year1 + "','" + name1 + "','" + gmail1 + "','" + Pname1 + "','" + Pgmail1 + "' ,'" + erno1 + "')";
			// res.redirect("/")

			db.query(sql, function (err2) {
				if (err2) {
					console.log(err2);
				}
			});
		}
	});
});

app.post("/registerce", function (req, res) {
	//   console.log(req.body);

	var name = req.body.name;
	var rollNumber = req.body.rollNumber;
	var gmail = req.body.gmail;
	var erno = req.body.erno;
	var Pname = req.body.Pname;
	var Pgmail = req.body.Pgmail;
	var year = req.body.year;

	db.getConnection(function (err) {
		if (err) {
			res.send("Error occured.");

		} else {
			var sql = "INSERT INTO `civil_dept`(`student_roll`, `student_year`, `student_name`, `student_email`, `parents_name`, `parent_email`, `student_er_no`) VALUES ('" + rollNumber + "','" + year + "','" + name + "','" + gmail + "','" + Pname + "','" + Pgmail + "' ,'" + erno + "')";
			// res.redirect("/")
			db.query(sql, function (err2) {
				if (err2) {
					console.log(err2);
				}
			});
		}
	});
});

app.post("/registermec", function (req, res) {
	//   console.log(req.body);

	var name = req.body.name;
	var rollNumber = req.body.rollNumber;
	var gmail = req.body.gmail;
	var erno = req.body.erno;
	var Pname = req.body.Pname;
	var Pgmail = req.body.Pgmail;
	var year = req.body.year;

	db.getConnection(function (err) {
		if (err) {
			res.send("Error occured.");

		} else {
			var sql = "INSERT INTO `mechanical_dept`(`student_roll`, `student_year`, `student_name`, `student_email`, `parents_name`, `parent_email`, `student_er_no`) VALUES ('" + rollNumber + "','" + year + "','" + name + "','" + gmail + "','" + Pname + "','" + Pgmail + "' ,'" + erno + "')";
			// res.redirect("/")
			db.query(sql, function (err2) {
				if (err2) {
					console.log(err2);
				}
			});
		}
	});
});



app.get('/edit/:id', function (req, res, next) {
	var id = req.params.id;
	// console.log(id)
	var getQuery = "select * from `teacher_info` where `teacher_id`= ?";
	var query = mysql.format(getQuery, id);
	db.query(query, function (err, result) {
		if (err) throw err;
		console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('admin/edit.ejs', { title: ' Staff Records', computer: json, success: '', user: req.session.user });

	});
});

app.post('/update/', function (req, res, next) {
	var teacher_id = req.body.teacher_id;
	var teacher_fname = req.body.teacher_fname;
	var teacher_lname = req.body.teacher_lname;
	var teacher_user = req.body.teacher_user;
	var teacher_pass = req.body.teacher_pass;
	var teacher_dept = req.body.teacher_dept;


	var updateQuery = 'UPDATE `teacher_info` SET `teacher_fname`=? ,`teacher_lname`=?,`teacher_user`=?,`teacher_pass`=?,`teacher_dept`=? where `teacher_id`=?';
	var query = mysql.format(updateQuery, [teacher_fname, teacher_lname, teacher_user, teacher_pass, teacher_dept, teacher_id]);
	db.query(query, function (err, response) {
		if (err) throw err;
		console.log(response.insertId);
		res.redirect('/users');
	});
});

app.get('/delete/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `teacher_info` WHERE `teacher_id`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/users');
	});

});

//// civil sem 1
app.get("/civilsem1", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_mark_1_ce` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999 ";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("civil/civilsem1/civilsem1.ejs", { title: "civilsem1", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/firstce")
		}
	});
});

app.get('/delete8.1/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_mark_1_ce` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/civilsem1');
	});

});

app.get('/edit8.1/:id', function (req, res, next) {
	var id = req.params.id;
	// console.log(id)
	var getQuery = "select * FROM `semester_mark_1_ce` WHERE `student_er_no`= ?";
	var query = mysql.format(getQuery, id);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('civil/civilsem1/civilsem1edit.ejs', { title: 'edit', computer: json, success: '', user: req.session.user });

	});
});


app.post('/update8.1/', function (req, res, next) {
	var student_er_no = req.body.student_er_no;
	var english = req.body.english;
	var basic_science = req.body.basic_science;
	var basic_mathematics = req.body.basic_mathematics;
	var fundamental_of_ict = req.body.fundamental_of_ict;
	var engineering_graphics = req.body.engineering_graphics;
	var workshop_practice = req.body.workshop_practice;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;
	var student_er_no1 = req.body.student_er_no;


	var updateQuery = "UPDATE `semester_mark_1_ce` SET `student_er_no`=?,`english`=?,`basic_science`=?,`basic_mathematics`=?,`fundamental_of_ict`=?,`engineering_graphics`=?,`workshop_practice`=?,`percentage`=?,`rating`=?,`remark`=? WHERE `student_er_no`=?";
	var sql = mysql.format(updateQuery, [student_er_no, english, basic_science, basic_mathematics, fundamental_of_ict, engineering_graphics, workshop_practice, percentage, rating, remark, student_er_no1]);
	db.query(sql, function (err, response) {
		if (err) throw err;
		console.log(response.insertId);
		res.redirect('/civilsem1');
	});
});

//// civil sem 2
app.get("/civilsem2", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_mark_2_ce` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999 ";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("civil/civilsem2/civilsem2.ejs", { title: "civilsem2", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/firstce")
		}
	});
});

app.get('/delete8.2/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_mark_2_ce` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/civilsem2');
	});

});

app.get('/edit8.2/:id', function (req, res, next) {
	var id = req.params.id;
	// console.log(id)
	var getQuery = "select * FROM `semester_mark_2_ce` WHERE `student_er_no`= ?";
	var query = mysql.format(getQuery, id);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('civil/civilsem2/civilsem2edit.ejs', { title: 'edit', computer: json, success: '', user: req.session.user });

	});
});


app.post('/update8.2/', function (req, res, next) {
	var student_er_no = req.body.student_er_no;
	var applied_mathematics = req.body.applied_mathematics;
	var applied_science = req.body.applied_science;
	var applied_mechanics = req.body.applied_mechanics;
	var construction_materials = req.body.construction_materials;
	var basic_surveying = req.body.basic_surveying;
	var civil_engineering_workshop_and_practice = req.body.civil_engineering_workshop_and_practice;
	var business_communication_using_computers = req.body.business_communication_using_computers;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;
	var student_er_no1 = req.body.student_er_no;


	var updateQuery = "UPDATE `semester_mark_2_ce` SET `student_er_no`=?,`applied_mathematics`=?,`applied_science`=?,`applied_mechanics`=?,`construction_materials`=?,`basic_surveying`=?,`civil_engineering_workshop_and_practice`=?,`business_communication_using_computers`=?,`percentage`=?,`rating`=?,`remark`=? WHERE `student_er_no`=?";
	var sql = mysql.format(updateQuery, [student_er_no, applied_mathematics, applied_science, applied_mechanics, construction_materials, basic_surveying, civil_engineering_workshop_and_practice, business_communication_using_computers, percentage, rating, remark, student_er_no1]);
	db.query(sql, function (err, response) {
		if (err) throw err;
		console.log(response.insertId);
		res.redirect('/civilsem2');
	});
});

//// civil sem 3
app.get("/civilsem3", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_mark_3_ce` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999 ";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("civil/civilsem3/civilsem3.ejs", { title: "civilsem3", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/secondce")
		}
	});
});

app.get('/delete8.3/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_mark_3_ce` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/civilsem3');
	});

});

app.get('/edit8.3/:id', function (req, res, next) {
	var id = req.params.id;
	// console.log(id)
	var getQuery = "select * FROM `semester_mark_3_ce` WHERE `student_er_no`= ?";
	var query = mysql.format(getQuery, id);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('civil/civilsem3/civilsem3edit.ejs', { title: 'edit', computer: json, success: '', user: req.session.user });

	});
});


app.post('/update8.3/', function (req, res, next) {
	var student_er_no = req.body.student_er_no;
	var advance_surveying = req.body.advance_surveying;
	var highway_engineering = req.body.highway_engineering;
	var mechanics_of_structures = req.body.mechanics_of_structures;
	var building_construction = req.body.building_construction;
	var concrete_technology = req.body.concrete_technology;
	var computer_aided_drawing = req.body.computer_aided_drawing;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;
	var student_er_no1 = req.body.student_er_no;


	var updateQuery = "UPDATE `semester_mark_1_ce` SET `student_er_no`=?,`advance_surveying`=?,`highway_engineering`=?,`mechanics_of_structures`=?,`building_construction`=?,`concrete_technology`=?,`computer_aided_drawing`=?,`percentage`=?,`rating`=?,`remark`=? WHERE `student_er_no`=?";
	var sql = mysql.format(updateQuery, [student_er_no, advance_surveying, highway_engineering, mechanics_of_structures, building_construction, concrete_technology, computer_aided_drawing, percentage, rating, remark, student_er_no1]);
	db.query(sql, function (err, response) {
		if (err) throw err;
		console.log(response.insertId);
		res.redirect('/civilsem3');
	});
});

//// civil sem 4
app.get("/civilsem4", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_mark_4_ce` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999 ";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("civil/civilsem4/civilsem4.ejs", { title: "civilsem4", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/secondce")
		}
	});
});

app.get('/delete8.4/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_mark_4_ce` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/civilsem4');
	});

});

app.get('/edit8.4/:id', function (req, res, next) {
	var id = req.params.id;
	// console.log(id)
	var getQuery = "select * FROM `semester_mark_4_ce` WHERE `student_er_no`= ?";
	var query = mysql.format(getQuery, id);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('civil/civilsem4/civilsem4edit.ejs', { title: 'edit', computer: json, success: '', user: req.session.user });

	});
});


app.post('/update8.4/', function (req, res, next) {
	var student_er_no = req.body.student_er_no;
	var hydraulics = req.body.hydraulics;
	var theory_of_structures = req.body.theory_of_structures;
	var railway_and_bridge_engineering = req.body.railway_and_bridge_engineering;
	var geo_technical_engineering = req.body.geo_technical_engineering;
	var building_planning_and_drawing = req.body.building_planning_and_drawing;
	var environmental_studies = req.body.environmental_studies;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;
	var student_er_no1 = req.body.student_er_no;


	var updateQuery = "UPDATE `semester_mark_4_ce` SET `student_er_no`=?,`hydraulics`=?,`theory_of_structures`=?,`railway_and_bridge_engineering`=?,`geo_technical_engineering`=?,`building_planning_and_drawing`=?,`environmental_studies`=?,`percentage`=?,`rating`=?,`remark`=? WHERE `student_er_no`=?";
	var sql = mysql.format(updateQuery, [student_er_no, hydraulics, theory_of_structures, railway_and_bridge_engineering, geo_technical_engineering, building_planning_and_drawing, environmental_studies, percentage, rating, remark, student_er_no1]);
	db.query(sql, function (err, response) {
		if (err) throw err;
		console.log(response.insertId);
		res.redirect('/civilsem4');
	});
});

//// civil sem 5
app.get("/civilsem5", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_mark_5_ce` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999 ";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("civil/civilsem5/civilsem5.ejs", { title: "civilsem5", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/thirdce")
		}
	});
});

app.get('/delete8.5/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_mark_5_ce` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/civilsem5');
	});

});

app.get('/edit8.5/:id', function (req, res, next) {
	var id = req.params.id;
	// console.log(id)
	var getQuery = "select * FROM `semester_mark_5_ce` WHERE `student_er_no`= ?";
	var query = mysql.format(getQuery, id);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('civil/civilsem5/civilsem5edit.ejs', { title: 'edit', computer: json, success: '', user: req.session.user });

	});
});


app.post('/update8.5/', function (req, res, next) {
	var student_er_no = req.body.student_er_no;
	var water_resource_engineering = req.body.water_resource_engineering;
	var design_of_steel_and_rcc_structure = req.body.design_of_steel_and_rcc_structure;
	var estimating_costing_and_valuation = req.body.estimating_costing_and_valuation;
	var public_health_engineering = req.body.public_health_engineering;
	var traffic_engineering = req.body.traffic_engineering;
	var industrial_training = req.body.industrial_training;
	var capstone_project_planning = req.body.capstone_project_planning;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;
	var student_er_no1 = req.body.student_er_no;


	var updateQuery = "UPDATE `semester_mark_1_ce` SET `student_er_no`=?,`water_resource_engineering`=?,`design_of_steel_and_rcc_structure`=?,`estimating_costing_and_valuation`=?,`public_health_engineering`=?,`traffic_engineering`=?,`industrial_training`=?,``capstone_project_planning`=?,`percentage`=?,`rating`=?,`remark`=? WHERE `student_er_no`=?";
	var sql = mysql.format(updateQuery, [student_er_no, water_resource_engineering, design_of_steel_and_rcc_structure, estimating_costing_and_valuation, public_health_engineering, traffic_engineering, industrial_training, capstone_project_planning, percentage, rating, remark, student_er_no1]);
	db.query(sql, function (err, response) {
		if (err) throw err;
		console.log(response.insertId);
		res.redirect('/civilsem5');
	});
});

//// civil sem 6    
app.get("/civilsem6", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_mark_6_ce` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999 ";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("civil/civilsem6/civilsem6.ejs", { title: "civilsem6", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/thirdce")
		}
	});
});

app.get('/delete8.6/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_mark_6_ce` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/civilsem6');
	});

});

app.get('/edit8.6/:id', function (req, res, next) {
	var id = req.params.id;
	// console.log(id)
	var getQuery = "select * FROM `semester_mark_6_ce` WHERE `student_er_no`= ?";
	var query = mysql.format(getQuery, id);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('civil/civilsem6/civilsem6edit.ejs', { title: 'edit', computer: json, success: '', user: req.session.user });

	});
});


app.post('/update8.6/', function (req, res, next) {
	var student_er_no = req.body.student_er_no;
	var management = req.body.management;
	var contracts_and_accounts = req.body.contracts_and_accounts;
	var maintenance_and_repairs_of_structure = req.body.maintenance_and_repairs_of_structure;
	var emerging_trends_in_civil_engineering = req.body.emerging_trends_in_civil_engineering;
	var solid_waste_management = req.body.solid_waste_management;
	var capstone_project_execution_and_report_writing = req.body.capstone_project_execution_and_report_writing;
	var construction_management = req.body.construction_management;
	var enterprenureship_development = req.body.enterprenureship_development;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;
	var student_er_no1 = req.body.student_er_no;


	var updateQuery = "UPDATE `semester_mark_6_ce` SET `student_er_no`=?,`management`=?,`contracts_and_accounts`=?,`maintenance_and_repairs_of_structure`=?,`emerging_trends_in_civil_engineering`=?,`solid_waste_management`=?,`capstone_project_execution_and_report_writing`=?,`construction_management`=?,`enterprenureship_development`=?,`percentage`=?,`rating`=?,`remark`=? WHERE `student_er_no`=?";
	var sql = mysql.format(updateQuery, [student_er_no, management, contracts_and_accounts, maintenance_and_repairs_of_structure, emerging_trends_in_civil_engineering, solid_waste_management, capstone_project_execution_and_report_writing, construction_management, enterprenureship_development, percentage, rating, remark, student_er_no1]);
	db.query(sql, function (err, response) {
		if (err) throw err;
		console.log(response.insertId);
		res.redirect('/civilsem6');
	});
});

//// computer sem 1
app.get("/computersem1", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_mark_1_c` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999 ";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("computer/computersem1/computersem1.ejs", { title: "computersem1", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/firstco")
		}
	});
});

app.get('/delete8.7/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_mark_1_c` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/computersem1');
	});

});

app.get('/edit8.7/:id', function (req, res, next) {
	var id = req.params.id;
	// console.log(id)
	var getQuery = "select * FROM `semester_mark_1_c` WHERE `student_er_no`= ?";
	var query = mysql.format(getQuery, id);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('computer/computersem1/computersem1edit.ejs', { title: 'edit', computer: json, success: '', user: req.session.user });

	});
});


app.post('/update8.7/', function (req, res, next) {
	var student_er_no = req.body.student_er_no;
	var english = req.body.english;
	var basic_science = req.body.basic_science;
	var basic_mathematics = req.body.basic_mathematics;
	var fundamental_of_ict = req.body.fundamental_of_ict;
	var engineering_graphics = req.body.engineering_graphics;
	var workshop_practice = req.body.workshop_practice;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;
	var student_er_no1 = req.body.student_er_no;


	var updateQuery = "UPDATE `semester_mark_1_c` SET `student_er_no`=?,`english`=?,`basic_science`=?,`basic_mathematics`=?,`fundamental_of_ict`=?,`engineering_graphics`=?,`workshop_practice`=?,`percentage`=?,`rating`=?,`remark`=? WHERE `student_er_no`=?";
	var sql = mysql.format(updateQuery, [student_er_no, english, basic_science, basic_mathematics, fundamental_of_ict, engineering_graphics, workshop_practice, percentage, rating, remark, student_er_no1]);
	db.query(sql, function (err, response) {
		if (err) throw err;
		console.log(response.insertId);
		res.redirect('/computersem1');
	});
});

//// computer sem 2
app.get("/computersem2", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_mark_2_c` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999 ";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("computer/computersem2/computersem2.ejs", { title: "computersem2", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/firstco")
		}
	});
});

app.get('/delete8.8/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_mark_2_c` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/computersem2');
	});

});

app.get('/edit8.8/:id', function (req, res, next) {
	var id = req.params.id;
	// console.log(id)
	var getQuery = "select * FROM `semester_mark_2_c` WHERE `student_er_no`= ?";
	var query = mysql.format(getQuery, id);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('computer/computersem2/computersem2edit.ejs', { title: 'edit', computer: json, success: '', user: req.session.user });

	});
});


app.post('/update8.8/', function (req, res, next) {
	var student_er_no = req.body.student_er_no;
	var elements_of_electrical_engineering = req.body.elements_of_electrical_engineering;
	var applied_mathematics = req.body.applied_mathematics;
	var basic_electronics = req.body.basic_electronics;
	var programming_in_c = req.body.programming_in_c;
	var business_communication_using_computers = req.body.business_communication_using_computers;
	var computer_peripheral_and_hardware_maintenance = req.body.computer_peripheral_and_hardware_maintenance;
	var webpage_designing_with_html = req.body.webpage_designing_with_html;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;
	var student_er_no1 = req.body.student_er_no;


	var updateQuery = "UPDATE `semester_mark_2_c` SET `student_er_no`=?,`elements_of_electrical_engineering`=?,`applied_mathematics`=?,`basic_electronics`=?,`programming_in_c`=?,`business_communication_using_computers`=?,`computer_peripheral_and_hardware_maintenance`=?,`webpage_designing_with_html`=?`percentage`=?,`rating`=?,`remark`=? WHERE `student_er_no`=?";
	var sql = mysql.format(updateQuery, [student_er_no, elements_of_electrical_engineering, applied_mathematics, basic_electronics, programming_in_c, business_communication_using_computers, computer_peripheral_and_hardware_maintenance, webpage_designing_with_html, percentage, rating, remark, student_er_no1]);
	db.query(sql, function (err, response) {
		if (err) throw err;
		console.log(response.insertId);
		res.redirect('/computersem2');
	});
});

//// computer sem 3
app.get("/computersem3", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_mark_3_c` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999 ";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("computer/computersem3/computersem3.ejs", { title: "computersem3", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/secondco")
		}
	});
});

app.get('/delete8.9/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_mark_3_c` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/computersem3');
	});

});

app.get('/edit8.9/:id', function (req, res, next) {
	var id = req.params.id;
	// console.log(id)
	var getQuery = "select * FROM `semester_mark_3_c` WHERE `student_er_no`= ?";
	var query = mysql.format(getQuery, id);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('computer/computersem3/computersem3edit.ejs', { title: 'edit', computer: json, success: '', user: req.session.user });

	});
});


app.post('/update8.9/', function (req, res, next) {
	var student_er_no = req.body.student_er_no;
	var object_oriented_programming_using_cplus = req.body.object_oriented_programming_using_cplus;
	var data_structure_using_c = req.body.data_structure_using_c;
	var computer_graphics = req.body.computer_graphics;
	var database_management_system = req.body.database_management_system;
	var digital_techniques = req.body.digital_techniques;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;
	var student_er_no1 = req.body.student_er_no;


	var updateQuery = "UPDATE `semester_mark_3_c` SET `student_er_no`=?,`object_oriented_programming_using_cplus`=?,`data_structure_using_c`=?,`computer_graphics`=?,`database_management_system`=?,`digital_techniques`=?,`percentage`=?,`rating`=?,`remark`=? WHERE `student_er_no`=?";
	var sql = mysql.format(updateQuery, [student_er_no, object_oriented_programming_using_cplus, data_structure_using_c, computer_graphics, database_management_system, digital_techniques, percentage, rating, remark, student_er_no1]);
	db.query(sql, function (err, response) {
		if (err) throw err;
		console.log(response.insertId);
		res.redirect('/computersem3');
	});
});

//// computer sem 4
app.get("/computersem4", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_mark_4_c` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999 ";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("computer/computersem4/computersem4.ejs", { title: "computersem4", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/secondco")
		}
	});
});

app.get('/delete8.10/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_mark_4_c` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/computersem4');
	});

});

app.get('/edit8.10/:id', function (req, res, next) {
	var id = req.params.id;
	// console.log(id)
	var getQuery = "select * FROM `semester_mark_4_c` WHERE `student_er_no`= ?";
	var query = mysql.format(getQuery, id);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('computer/computersem4/computersem4edit.ejs', { title: 'edit', computer: json, success: '', user: req.session.user });

	});
});


app.post('/update8.10/', function (req, res, next) {
	var student_er_no = req.body.student_er_no;
	var java_programming = req.body.java_programming;
	var software_engineering = req.body.software_engineering;
	var data_communication_and_computer_network = req.body.data_communication_and_computer_network;
	var microprocessors = req.body.microprocessors;
	var gui_application_development_using_vbnet = req.body.gui_application_development_using_vbnet;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;
	var student_er_no1 = req.body.student_er_no;


	var updateQuery = "UPDATE `semester_mark_4_c` SET `student_er_no`=?,`java_programming`=?,`software_engineering`=?,`data_communication_and_computer_network`=?,`microprocessors`=?,`gui_application_development_using_vbnet`=?,`percentage`=?,`rating`=?,`remark`=? WHERE `student_er_no`=?";
	var sql = mysql.format(updateQuery, [student_er_no, java_programming, software_engineering, data_communication_and_computer_network, microprocessors, gui_application_development_using_vbnet, percentage, rating, remark, student_er_no1]);
	db.query(sql, function (err, response) {
		if (err) throw err;
		console.log(response.insertId);
		res.redirect('/computersem4');
	});
});

//// computer sem 5
app.get("/computersem5", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_mark_5_c` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999 ";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("computer/computersem5/computersem5.ejs", { title: "computersem5", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/thirdco")
		}
	});
});

app.get('/delete8.11/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_mark_5_c` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/computersem5');
	});

});

app.get('/edit8.11/:id', function (req, res, next) {
	var id = req.params.id;
	// console.log(id)
	var getQuery = "select * FROM `semester_mark_5_c` WHERE `student_er_no`= ?";
	var query = mysql.format(getQuery, id);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('computer/computersem5/computersem5edit.ejs', { title: 'edit', computer: json, success: '', user: req.session.user });

	});
});


app.post('/update8.11/', function (req, res, next) {
	var student_er_no = req.body.student_er_no;
	var environmental_studies = req.body.environmental_studies;
	var operating_system = req.body.operating_system;
	var advance_java_programming = req.body.advance_java_programming;
	var software_testing = req.body.software_testing;
	var advance_computer_network = req.body.advance_computer_network;
	var industrial_training = req.body.industrial_training;
	var capstone_project_planning = req.body.capstone_project_planning;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;
	var student_er_no1 = req.body.student_er_no;


	var updateQuery = "UPDATE `semester_mark_5_c` SET `student_er_no`=?,`environmental_studies`=?,`operating_system`=?,`advance_java_programming`=?,`software_testing`=?,`advance_computer_network`=?,`industrial_training`=?,`capstone_project_planning`=?`percentage`=?,`rating`=?,`remark`=? WHERE `student_er_no`=?";
	var sql = mysql.format(updateQuery, [student_er_no, environmental_studies, operating_system, advance_java_programming, software_testing, advance_computer_network, industrial_training, capstone_project_planning, percentage, rating, remark, student_er_no1]);
	db.query(sql, function (err, response) {
		if (err) throw err;
		console.log(response.insertId);
		res.redirect('/computersem5');
	});
});

//// computer sem 6
app.get("/computersem6", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_mark_6_c` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999 ";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("computer/computersem6/computersem6.ejs", { title: "computersem6", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/thirdco")
		}
	});
});

app.get('/delete8.12/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_mark_6_c` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/computersem6');
	});

});

app.get('/edit8.12/:id', function (req, res, next) {
	var id = req.params.id;
	// console.log(id)
	var getQuery = "select * FROM `semester_mark_6_c` WHERE `student_er_no`= ?";
	var query = mysql.format(getQuery, id);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('computer/computersem6/computersem6edit.ejs', { title: 'edit', computer: json, success: '', user: req.session.user });

	});
});


app.post('/update8.12/', function (req, res, next) {
	var student_er_no = req.body.student_er_no;
	var management = req.body.management;
	var programming_with_python = req.body.programming_with_python;
	var mobile_application_development = req.body.mobile_application_development;
	var emerging_trends_in_computer_and_information_technology = req.body.emerging_trends_in_computer_and_information_technology;
	var network_and_information_security = req.body.network_and_information_security;
	var enterpreneurship_development = req.body.enterpreneurship_development;
	var capstone_project_execution_and_report_writing = req.body.capstone_project_execution_and_report_writing;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;
	var student_er_no1 = req.body.student_er_no;


	var updateQuery = "UPDATE `semester_mark_6_c` SET `student_er_no`=?,`management`=?,`programming_with_python`=?,`mobile_application_development`=?,`emerging_trends_in_computer_and_information_technology`=?,`network_and_information_security`=?,`enterpreneurship_development`=?,`capstone_project_execution_and_report_writing`=?`percentage`=?,`rating`=?,`remark`=? WHERE `student_er_no`=?";
	var sql = mysql.format(updateQuery, [student_er_no, management, programming_with_python, mobile_application_development, emerging_trends_in_computer_and_information_technology, network_and_information_security, enterpreneurship_development, capstone_project_execution_and_report_writing, percentage, rating, remark, student_er_no1]);
	db.query(sql, function (err, response) {
		if (err) throw err;
		console.log(response.insertId);
		res.redirect('/computersem6');
	});
});

//// electronic sem 1
app.get("/electronicsem1", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_mark_1_e` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999 ";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("electronics/electronicsem1/electronicsem1.ejs", { title: "electronicsem1", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/firstele")
		}
	});
});

app.get('/delete8.13/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_mark_1_e` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/electronicsem1');
	});

});

app.get('/edit8.13/:id', function (req, res, next) {
	var id = req.params.id;
	// console.log(id)
	var getQuery = "select * FROM `semester_mark_1_e` WHERE `student_er_no`= ?";
	var query = mysql.format(getQuery, id);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('electronics/electronicsem1/electronicsem1edit.ejs', { title: 'edit', computer: json, success: '', user: req.session.user });

	});
});


app.post('/update8.13/', function (req, res, next) {
	var student_er_no = req.body.student_er_no;
	var english = req.body.english;
	var basic_science = req.body.basic_science;
	var basic_mathematics = req.body.basic_mathematics;
	var fundamental_of_ict = req.body.fundamental_of_ict;
	var engineering_graphics = req.body.engineering_graphics;
	var workshop_practice = req.body.workshop_practice;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;
	var student_er_no1 = req.body.student_er_no;


	var updateQuery = "UPDATE `semester_mark_1_e` SET `student_er_no`=?,`english`=?,`basic_science`=?,`basic_mathematics`=?,`fundamental_of_ict`=?,`engineering_graphics`=?,`workshop_practice`=?,`percentage`=?,`rating`=?,`remark`=? WHERE `student_er_no`=?";
	var sql = mysql.format(updateQuery, [student_er_no, english, basic_science, basic_mathematics, fundamental_of_ict, engineering_graphics, workshop_practice, percentage, rating, remark, student_er_no1]);
	db.query(sql, function (err, response) {
		if (err) throw err;
		console.log(response.insertId);
		res.redirect('/electronicsem1');
	});
});

//// electronic sem 2
app.get("/electronicsem2", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_mark_2_e` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999 ";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("electronics/electronicsem2/electronicsem2.ejs", { title: "electronicsem2", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/firstele")
		}
	});
});

app.get('/delete8.14/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_mark_2_e` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/electronicsem2');
	});

});

app.get('/edit8.14/:id', function (req, res, next) {
	var id = req.params.id;
	// console.log(id)
	var getQuery = "select * FROM `semester_mark_2_e` WHERE `student_er_no`= ?";
	var query = mysql.format(getQuery, id);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('electronics/electronicsem2/electronicsem2edit.ejs', { title: 'edit', computer: json, success: '', user: req.session.user });

	});
});


app.post('/update8.14/', function (req, res, next) {
	var student_er_no = req.body.student_er_no;
	var applied_mathematics = req.body.applied_mathematics;
	var elements_of_electrical_engineering = req.body.elements_of_electrical_engineering;
	var basic_electronics = req.body.basic_electronics;
	var electronic_engineering_materials = req.body.electronic_engineering_materials;
	var c_programming_languages = req.body.c_programming_languages;
	var business_communication_using_computers = req.body.business_communication_using_computers;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;
	var student_er_no1 = req.body.student_er_no;


	var updateQuery = "UPDATE `semester_mark_2_e` SET `student_er_no`=?,`applied_mathematics`=?,`elements_of_electrical_engineering`=?,`basic_electronics`=?,`electronic_engineering_materials`=?,`c_programming_languages`=?,`business_communication_using_computers`=?,`percentage`=?,`rating`=?,`remark`=? WHERE `student_er_no`=?";
	var sql = mysql.format(updateQuery, [student_er_no, applied_mathematics, elements_of_electrical_engineering, basic_electronics, electronic_engineering_materials, c_programming_languages, business_communication_using_computers, percentage, rating, remark, student_er_no1]);
	db.query(sql, function (err, response) {
		if (err) throw err;
		console.log(response.insertId);
		res.redirect('/electronicsem2');
	});
});

//// electronics sem 3
app.get("/electronicsem3", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_mark_3_e` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999 ";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("electronics/electronicsem3/electronicsem3.ejs", { title: "electronicsem3", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/secondele")
		}
	});
});

app.get('/delete8.15/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_mark_3_e` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/electronicsem3');
	});

});

app.get('/edit8.15/:id', function (req, res, next) {
	var id = req.params.id;
	// console.log(id)
	var getQuery = "select * FROM `semester_mark_3_e` WHERE `student_er_no`= ?";
	var query = mysql.format(getQuery, id);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('electronics/electronicsem3/electronicsem3edit.ejs', { title: 'edit', computer: json, success: '', user: req.session.user });

	});
});


app.post('/update8.15/', function (req, res, next) {
	var student_er_no = req.body.student_er_no;
	var digital_techniques = req.body.digital_techniques;
	var applied_electronics = req.body.applied_electronics;
	var electric_circuits_and_networks = req.body.electric_circuits_and_networks;
	var electronic_measurement_and_instrumentation = req.body.electronic_measurement_and_instrumentation;
	var principles_of_electronic_communication = req.body.principles_of_electronic_communication;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;
	var student_er_no1 = req.body.student_er_no;


	var updateQuery = "UPDATE `semester_mark_3_e` SET `student_er_no`=?,`digital_techniques`=?,`applied_electronics`=?,`electric_circuits_and_networks`=?,`electronic_measurement_and_instrumentation`=?,`principles_of_electronic_communication`=?,`percentage`=?,`rating`=?,`remark`=? WHERE `student_er_no`=?";
	var sql = mysql.format(updateQuery, [student_er_no, digital_techniques, applied_electronics, electric_circuits_and_networks, electronic_measurement_and_instrumentation, principles_of_electronic_communication, percentage, rating, remark, student_er_no1]);
	db.query(sql, function (err, response) {
		if (err) throw err;
		console.log(response.insertId);
		res.redirect('/electronicsem3');
	});
});

//// electronic sem 4
app.get("/electronicsem4", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_mark_4_e` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999 ";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("electronics/electronicsem4/electronicsem4.ejs", { title: "electronicsem4", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/secondele")
		}
	});
});

app.get('/delete8.16/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_mark_4_e` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/electronicsem4');
	});

});

app.get('/edit8.16/:id', function (req, res, next) {
	var id = req.params.id;
	// console.log(id)
	var getQuery = "select * FROM `semester_mark_4_e` WHERE `student_er_no`= ?";
	var query = mysql.format(getQuery, id);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('electronics/electronicsem4/electronicsem4edit.ejs', { title: 'edit', computer: json, success: '', user: req.session.user });

	});
});


app.post('/update8.16/', function (req, res, next) {
	var student_er_no = req.body.student_er_no;
	var linear_integrated_circuits = req.body.linear_integrated_circuits;
	var consumer_electronics = req.body.consumer_electronics;
	var microcontroller_and_application = req.body.microcontroller_and_application;
	var basic_power_electronics = req.body.basic_power_electronics;
	var digital_communication_systems = req.body.digital_communication_systems;
	var maintenance_of_electronics_equipments_and_eda_tools_practices = req.body.maintenance_of_electronics_equipments_and_eda_tools_practices;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;
	var student_er_no1 = req.body.student_er_no;


	var updateQuery = "UPDATE `semester_mark_4_e` SET `student_er_no`=?,`linear_integrated_circuits`=?,`consumer_electronics`=?,`microcontroller_and_application`=?,`basic_power_electronics`=?,`digital_communication_systems`=?,`maintenance_of_electronics_equipments_and_eda_tools_practices`=?,`percentage`=?,`rating`=?,`remark`=? WHERE `student_er_no`=?";
	var sql = mysql.format(updateQuery, [student_er_no, linear_integrated_circuits, consumer_electronics, microcontroller_and_application, basic_power_electronics, digital_communication_systems, maintenance_of_electronics_equipments_and_eda_tools_practices, percentage, rating, remark, student_er_no1]);
	db.query(sql, function (err, response) {
		if (err) throw err;
		console.log(response.insertId);
		res.redirect('/electronicsem4');
	});
});

//// electronic sem 5
app.get("/electronicsem5", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_mark_5_e` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999 ";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("electronics/electronicsem5/electronicsem5.ejs", { title: "electronicsem5", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/thirdele")
		}
	});
});

app.get('/delete8.17/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_mark_5_e` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/electronicsem5');
	});

});

app.get('/edit8.17/:id', function (req, res, next) {
	var id = req.params.id;
	// console.log(id)
	var getQuery = "select * FROM `semester_mark_5_e` WHERE `student_er_no`= ?";
	var query = mysql.format(getQuery, id);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('electronics/electronicsem5/electronicsem5edit.ejs', { title: 'edit', computer: json, success: '', user: req.session.user });

	});
});


app.post('/update8.17/', function (req, res, next) {
	var student_er_no = req.body.student_er_no;
	var environmental_studies = req.body.environmental_studies;
	var control_system = req.body.control_system;
	var embedded_system = req.body.embedded_system;
	var mobile_and_wireless_communication = req.body.mobile_and_wireless_communication;
	var microwave_and_radar = req.body.microwave_and_radar;
	var industrial_training = req.body.industrial_training;
	var capstone_project_planning = req.body.capstone_project_planning;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;
	var student_er_no1 = req.body.student_er_no;


	var updateQuery = "UPDATE `semester_mark_5_e` SET `student_er_no`=?,`environmental_studies`=?,`control_system`=?,`embedded_system`=?,`mobile_and_wireless_communication`=?,`microwave_and_radar`=?,`industrial_training`=?,`capstone_project_planning`=?`percentage`=?,`rating`=?,`remark`=? WHERE `student_er_no`=?";
	var sql = mysql.format(updateQuery, [student_er_no, environmental_studies, control_system, embedded_system, mobile_and_wireless_communication, microwave_and_radar, industrial_training, capstone_project_planning, percentage, rating, remark, student_er_no1]);
	db.query(sql, function (err, response) {
		if (err) throw err;
		console.log(response.insertId);
		res.redirect('/electronicsem5');
	});
});

//// electronic sem 6
app.get("/electronicsem6", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_mark_6_e` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999 ";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("electronics/electronicsem6/electronicsem6.ejs", { title: "electronicsem6", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/thirdele")
		}
	});
});

app.get('/delete8.18/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_mark_6_e` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/electronicsem6');
	});

});

app.get('/edit8.18/:id', function (req, res, next) {
	var id = req.params.id;
	// console.log(id)
	var getQuery = "select * FROM `semester_mark_6_e` WHERE `student_er_no`= ?";
	var query = mysql.format(getQuery, id);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('electronics/electronicsem6/electronicsem6edit.ejs', { title: 'edit', computer: json, success: '', user: req.session.user });

	});
});


app.post('/update8.18/', function (req, res, next) {
	var student_er_no = req.body.student_er_no;
	var management = req.body.management;
	var computer_networking_and_data_communication = req.body.computer_networking_and_data_communication;
	var emerging_trends_in_electronics = req.body.emerging_trends_in_electronics;
	var optical_network_and_satellite_communication = req.body.optical_network_and_satellite_communication;
	var enterpreneurship_development = req.body.enterpreneurship_development;
	var capstone_project_execution_and_report_writing = req.body.capstone_project_execution_and_report_writing;
	var vlsi_with_vhdl = req.body.vlsi_with_vhdl;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;
	var student_er_no1 = req.body.student_er_no;


	var updateQuery = "UPDATE `semester_mark_6_e` SET `student_er_no`=?,`management`=?,`computer_networking_and_data_communication`=?,`emerging_trends_in_electronics`=?,`optical_network_and_satellite_communication`=?,`enterpreneurship_development`=?,`capstone_project_execution_and_report_writing`=?,`vlsi_with_vhdl`=?`,percentage`=?,`rating`=?,`remark`=? WHERE `student_er_no`=?";
	var sql = mysql.format(updateQuery, [student_er_no, management, computer_networking_and_data_communication, emerging_trends_in_electronics, optical_network_and_satellite_communication, enterpreneurship_development, capstone_project_execution_and_report_writing, vlsi_with_vhdl, percentage, rating, remark, student_er_no1]);
	db.query(sql, function (err, response) {
		if (err) throw err;
		console.log(response.insertId);
		res.redirect('/electronicsem6');
	});
});

//// mechanical sem 1
app.get("/mechanicalsem1", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_mark_1_m` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999 ";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("mechanical/mechanicalsem1/mechanicalsem1.ejs", { title: "mechanicalsem1", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/firstme")
		}
	});
});

app.get('/delete8.19/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_mark_1_m` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/mechanicalsem1');
	});

});

app.get('/edit8.19/:id', function (req, res, next) {
	var id = req.params.id;
	// console.log(id)
	var getQuery = "select * FROM `semester_mark_1_m` WHERE `student_er_no`= ?";
	var query = mysql.format(getQuery, id);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('mechanical/mechanicalsem1/mechanicalsem1edit.ejs', { title: 'edit', computer: json, success: '', user: req.session.user });

	});
});


app.post('/update8.19/', function (req, res, next) {
	var student_er_no = req.body.student_er_no;
	var english = req.body.english;
	var basic_science = req.body.basic_science;
	var basic_mathematics = req.body.basic_mathematics;
	var fundamental_of_ict = req.body.fundamental_of_ict;
	var engineering_graphics = req.body.engineering_graphics;
	var workshop_practice = req.body.workshop_practice;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;
	var student_er_no1 = req.body.student_er_no;


	var updateQuery = "UPDATE `semester_mark_1_m` SET `student_er_no`=?,`english`=?,`basic_science`=?,`basic_mathematics`=?,`fundamental_of_ict`=?,`engineering_graphics`=?,`workshop_practice`=?,`percentage`=?,`rating`=?,`remark`=? WHERE `student_er_no`=?";
	var sql = mysql.format(updateQuery, [student_er_no, english, basic_science, basic_mathematics, fundamental_of_ict, engineering_graphics, workshop_practice, percentage, rating, remark, student_er_no1]);
	db.query(sql, function (err, response) {
		if (err) throw err;
		console.log(response.insertId);
		res.redirect('/mechanicalsem1');
	});
});

//// electronic sem 2
app.get("/mechanicalsem2", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_mark_2_m` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999 ";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("mechanical/mechanicalsem2/mechanicalsem2.ejs", { title: "mechanicalsem2", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/firstme")
		}
	});
});

app.get('/delete8.20/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_mark_2_m` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/mechanicalsem2');
	});

});

app.get('/edit8.20/:id', function (req, res, next) {
	var id = req.params.id;
	// console.log(id)
	var getQuery = "select * FROM `semester_mark_2_m` WHERE `student_er_no`= ?";
	var query = mysql.format(getQuery, id);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('mechanical/mechanicalsem2/mechanicalsem2edit.ejs', { title: 'edit', computer: json, success: '', user: req.session.user });

	});
});


app.post('/update8.20/', function (req, res, next) {
	var student_er_no = req.body.student_er_no;
	var applied_science = req.body.applied_science;
	var applied_mechanics = req.body.applied_mechanics;
	var applied_mathematics = req.body.applied_mathematics;
	var engineering_drawing = req.body.engineering_drawing;
	var mechanical_engineering_workshop = req.body.mechanical_engineering_workshop;
	var business_communication_using_computers = req.body.business_communication_using_computers;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;
	var student_er_no1 = req.body.student_er_no;


	var updateQuery = "UPDATE `semester_mark_2_m` SET `student_er_no`=?,`applied_science`=?,`applied_mechanics`=?,`applied_mathematics`=?,`engineering_drawing`=?,`mechanical_engineering_workshop`=?,`business_communication_using_computers`=?,`percentage`=?,`rating`=?,`remark`=? WHERE `student_er_no`=?";
	var sql = mysql.format(updateQuery, [student_er_no, applied_science, applied_mechanics, applied_mathematics, engineering_drawing, mechanical_engineering_workshop, business_communication_using_computers, percentage, rating, remark, student_er_no1]);
	db.query(sql, function (err, response) {
		if (err) throw err;
		console.log(response.insertId);
		res.redirect('/mechanicalsem2');
	});
});

//// mechanical sem 3
app.get("/mechanicalsem3", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_mark_3_m` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999 ";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("mechanical/mechanicalsem3/mechanicalsem3.ejs", { title: "mechanicalsem3", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/secondme")
		}
	});
});

app.get('/delete8.21/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_mark_3_m` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/mechanicalsem3');
	});

});

app.get('/edit8.21/:id', function (req, res, next) {
	var id = req.params.id;
	// console.log(id)
	var getQuery = "select * FROM `semester_mark_3_m` WHERE `student_er_no`= ?";
	var query = mysql.format(getQuery, id);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('mechanical/mechanicalsem3/mechanicalsem3edit.ejs', { title: 'edit', computer: json, success: '', user: req.session.user });

	});
});


app.post('/update8.21/', function (req, res, next) {
	var student_er_no = req.body.student_er_no;
	var mechanical_engineering_workshop = req.body.mechanical_engineering_workshop;
	var basic_electrical_and_electronics_engineering = req.body.basic_electrical_and_electronics_engineering;
	var thermal_engineering = req.body.thermal_engineering;
	var mechanical_working_drawing = req.body.mechanical_working_drawing;
	var engineering_metrology = req.body.engineering_metrology;
	var mechanical_engineering_metarials = req.body.mechanical_engineering_metarials;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;
	var student_er_no1 = req.body.student_er_no;


	var updateQuery = "UPDATE `semester_mark_3_m` SET `student_er_no`=?,`mechanical_engineering_workshop`=?,`basic_electrical_and_electronics_engineering`=?,`thermal_engineering`=?,`mechanical_working_drawing`=?,`engineering_metrology`=?,`mechanical_engineering_metarials`=?,`percentage`=?,`rating`=?,`remark`=? WHERE `student_er_no`=?";
	var sql = mysql.format(updateQuery, [student_er_no, mechanical_engineering_workshop, basic_electrical_and_electronics_engineering, thermal_engineering, mechanical_working_drawing, engineering_metrology, mechanical_engineering_metarials, percentage, rating, remark, student_er_no1]);
	db.query(sql, function (err, response) {
		if (err) throw err;
		console.log(response.insertId);
		res.redirect('/mechanicalsem3');
	});
});

//// mechanical sem 4
app.get("/mechanicalsem4", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_mark_4_m` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999 ";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("mechanical/mechanicalsem4/mechanicalsem4.ejs", { title: "mechanicalsem4", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/secondme")
		}
	});
});

app.get('/delete8.22/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_mark_4_m` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/mechanicalsem4');
	});

});

app.get('/edit8.22/:id', function (req, res, next) {
	var id = req.params.id;
	// console.log(id)
	var getQuery = "select * FROM `semester_mark_4_m` WHERE `student_er_no`= ?";
	var query = mysql.format(getQuery, id);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('mechanical/mechanicalsem4/mechanicalsem4edit.ejs', { title: 'edit', computer: json, success: '', user: req.session.user });

	});
});


app.post('/update8.22/', function (req, res, next) {
	var student_er_no = req.body.student_er_no;
	var theory_of_machines = req.body.theory_of_machines;
	var mechanical_engineering_measurements = req.body.mechanical_engineering_measurements;
	var fluid_mechanics_and_machinery = req.body.fluid_mechanics_and_machinery;
	var manufacturing_process = req.body.manufacturing_process;
	var environmental_studies = req.body.environmental_studies;
	var computer_aided_drafting = req.body.computer_aided_drafting;
	var fundamental_of_machatronics = req.body.fundamental_of_machatronics;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;
	var student_er_no1 = req.body.student_er_no;


	var updateQuery = "UPDATE `semester_mark_4_m` SET `student_er_no`=?,`theory_of_machines`=?,`mechanical_engineering_measurements`=?,`fluid_mechanics_and_machinery`=?,`manufacturing_process`=?,`environmental_studies`=?,`computer_aided_drafting`=?,`fundamental_of_machatronics`=?,`percentage`=?,`rating`=?,`remark`=? WHERE `student_er_no`=?";
	var sql = mysql.format(updateQuery, [student_er_no, theory_of_machines, mechanical_engineering_measurements, fluid_mechanics_and_machinery, manufacturing_process, environmental_studies, computer_aided_drafting, fundamental_of_machatronics, percentage, rating, remark, student_er_no1]);
	db.query(sql, function (err, response) {
		if (err) throw err;
		console.log(response.insertId);
		res.redirect('/mechanicalsem4');
	});
});

//// mechanical sem 5
app.get("/mechanicalsem5", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_mark_5_m` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999 ";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("mechanical/mechanicalsem5/mechanicalsem5.ejs", { title: "mechanicalsem5", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/thirdme")
		}
	});
});

app.get('/delete8.23/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_mark_5_m` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/mechanicalsem5');
	});

});

app.get('/edit8.23/:id', function (req, res, next) {
	var id = req.params.id;
	// console.log(id)
	var getQuery = "select * FROM `semester_mark_5_m` WHERE `student_er_no`= ?";
	var query = mysql.format(getQuery, id);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('mechanical/mechanicalsem5/mechanicalsem5edit.ejs', { title: 'edit', computer: json, success: '', user: req.session.user });

	});
});


app.post('/update8.23/', function (req, res, next) {
	var student_er_no = req.body.student_er_no;
	var management = req.body.management;
	var power_engineering_and_refrigeration = req.body.power_engineering_and_refrigeration;
	var advance_manufacturing_process = req.body.advance_manufacturing_process;
	var elements_of_machine_design = req.body.elements_of_machine_design;
	var tool_engineering = req.body.tool_engineering;
	var solid_modeling_and_additive_manufacturing = req.body.solid_modeling_and_additive_manufacturing;
	var industrial_training = req.body.industrial_training;
	var capstone_project_planning = req.body.capstone_project_planning;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;
	var student_er_no1 = req.body.student_er_no;


	var updateQuery = "UPDATE `semester_mark_5_m` SET `student_er_no`=?,`management`=?,`power_engineering_and_refrigeration`=?,`advance_manufacturing_process`=?,`elements_of_machine_design`=?,`tool_engineering`=?,`solid_modeling_and_additive_manufacturing`=?,`industrial_training`=?,`capstone_project_planning`=?`percentage`=?,`rating`=?,`remark`=? WHERE `student_er_no`=?";
	var sql = mysql.format(updateQuery, [student_er_no, management, power_engineering_and_refrigeration, advance_manufacturing_process, elements_of_machine_design, tool_engineering, solid_modeling_and_additive_manufacturing, industrial_training, capstone_project_planning, percentage, rating, remark, student_er_no1]);
	db.query(sql, function (err, response) {
		if (err) throw err;
		console.log(response.insertId);
		res.redirect('/mechanicalsem5');
	});
});

//// mechanical sem 6
app.get("/mechanicalsem6", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_mark_6_m` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999 ";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("mechanical/mechanicalsem6/mechanicalsem6.ejs", { title: "mechanicalsem6", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/thirdme")
		}
	});
});

app.get('/delete8.24/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_mark_6_m` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/mechanicalsem6');
	});

});

app.get('/edit8.24/:id', function (req, res, next) {
	var id = req.params.id;
	// console.log(id)
	var getQuery = "select * FROM `semester_mark_6_m` WHERE `student_er_no`= ?";
	var query = mysql.format(getQuery, id);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('mechanical/mechanicalsem6/mechanicalsem6edit.ejs', { title: 'edit', computer: json, success: '', user: req.session.user });

	});
});


app.post('/update8.24/', function (req, res, next) {
	var student_er_no = req.body.student_er_no;
	var refrigeration_and_air_condition = req.body.refrigeration_and_air_condition;
	var industrial_hydraulics_and_pneumatics = req.body.industrial_hydraulics_and_pneumatics;
	var industrial_engineering_and_quality_control = req.body.industrial_engineering_and_quality_control;
	var emerging_trends_in_mechanical_engineering = req.body.emerging_trends_in_mechanical_engineering;
	var enterpreneurship_development = req.body.enterpreneurship_development;
	var automobile_development = req.body.automobile_development;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;
	var student_er_no1 = req.body.student_er_no;


	var updateQuery = "UPDATE `semester_mark_6_m` SET `student_er_no`=?,`refrigeration_and_air_condition`=?,`industrial_hydraulics_and_pneumatics`=?,`industrial_engineering_and_quality_control`=?,`emerging_trends_in_mechanical_engineering`=?,`enterpreneurship_development`=?,`automobile_development`=?,`percentage`=?,`rating`=?,`remark`=? WHERE `student_er_no`=?";
	var sql = mysql.format(updateQuery, [student_er_no, refrigeration_and_air_condition, industrial_hydraulics_and_pneumatics, industrial_engineering_and_quality_control, emerging_trends_in_mechanical_engineering, enterpreneurship_development, automobile_development, percentage, rating, remark, student_er_no1]);
	db.query(sql, function (err, response) {
		if (err) throw err;
		console.log(response.insertId);
		res.redirect('/mechanicalsem6');
	});
});


/////view users


///// civil sem 1
app.get('/view8.1/:id', function (req, res, next) {
	var id = req.params.id;
	var id1 = req.params.id;
	// console.log(id)
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.english, t2.basic_science, t2.basic_mathematics, t2.fundamental_of_ict, t2.engineering_graphics, t2.workshop_practice, t2.percentage, t2.rating, t2.remark FROM `civil_dept` AS t1 LEFT JOIN semester_mark_1_ce AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = ? AND t1.student_er_no = ? LIMIT 1;";
	var query = mysql.format(getQuery, [id1, id]);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('civil/civilsem1/civilsem1view.ejs', { title: 'civilsem1view', computer: json, success: '', user: req.session.user });

	});
});

///// civil sem 2
app.get('/view8.2/:id', function (req, res, next) {
	var id = req.params.id;
	var id1 = req.params.id;
	// console.log(id)
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.applied_mathematics, t2.applied_science, t2.applied_mechanics, t2.construction_materials, t2.basic_surveying, t2.civil_engineering_workshop_and_practice, t2.business_communication_using_computers, t2.percentage, t2.rating, t2.remark FROM `civil_dept` AS t1 LEFT JOIN semester_mark_2_ce AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = ? AND t1.student_er_no = ? LIMIT 1;";
	var query = mysql.format(getQuery, [id1, id]);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('civil/civilsem2/civilsem2view.ejs', { title: 'civilsem1view', computer: json, success: '', user: req.session.user });

	});
});


///// civil sem 1
app.get('/view8.1/:id', function (req, res, next) {
	var id = req.params.id;
	var id1 = req.params.id;
	// console.log(id)
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.english, t2.basic_science, t2.basic_mathematics, t2.fundamental_of_ict, t2.engineering_graphics, t2.workshop_practice, t2.percentage, t2.rating, t2.remark FROM `civil_dept` AS t1 LEFT JOIN semester_mark_1_ce AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = ? AND t1.student_er_no = ? LIMIT 1;";
	var query = mysql.format(getQuery, [id1, id]);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('civil/civilsem1/civilsem1view.ejs', { title: 'civilsem1view', computer: json, success: '', user: req.session.user });

	});
});

///// civil sem 2
app.get('/view8.2/:id', function (req, res, next) {
	var id = req.params.id;
	var id1 = req.params.id;
	// console.log(id)
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.applied_mathematics, t2.applied_science, t2.applied_mechanics, t2.construction_materials, t2.basic_surveying, t2.civil_engineering_workshop_and_practice, t2.business_communication_using_computers, t2.percentage, t2.rating, t2.remark FROM `civil_dept` AS t1 LEFT JOIN semester_mark_2_ce AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = ? AND t1.student_er_no = ? LIMIT 1;";
	var query = mysql.format(getQuery, [id1, id]);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('civil/civilsem2/civilsem2view.ejs', { title: 'civilsem2view', computer: json, success: '', user: req.session.user });

	});
});

///// civil sem 3
app.get('/view8.3/:id', function (req, res, next) {
	var id = req.params.id;
	var id1 = req.params.id;
	// console.log(id)
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.advance_surveying, t2.highway_engineering, t2.mechanics_of_structures, t2.building_construction, t2.concrete_technology, t2.computer_aided_drawing, t2.percentage, t2.rating, t2.remark FROM `civil_dept` AS t1 LEFT JOIN semester_mark_3_ce AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = ? AND t1.student_er_no = ? LIMIT 1;";
	var query = mysql.format(getQuery, [id1, id]);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('civil/civilsem3/civilsem3view.ejs', { title: 'civilsem3view', computer: json, success: '', user: req.session.user });

	});
});

///// civil sem 4
app.get('/view8.4/:id', function (req, res, next) {
	var id = req.params.id;
	var id1 = req.params.id;
	// console.log(id)
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.hydraulics, t2.theory_of_structures, t2.railway_and_bridge_engineering, t2.geo_technical_engineering, t2.building_planning_and_drawing, t2.environmental_studies, t2.percentage, t2.rating, t2.remark FROM `civil_dept` AS t1 LEFT JOIN semester_mark_4_ce AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = ? AND t1.student_er_no = ? LIMIT 1;";
	var query = mysql.format(getQuery, [id1, id]);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('civil/civilsem4/civilsem4view.ejs', { title: 'civilsem4view', computer: json, success: '', user: req.session.user });

	});
});

///// civil sem 5
app.get('/view8.5/:id', function (req, res, next) {
	var id = req.params.id;
	var id1 = req.params.id;
	// console.log(id)
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.water_resource_engineering, t2.design_of_steel_and_rcc_structure, t2.estimating_costing_and_valuation, t2.public_health_engineering, t2.traffic_engineering, t2.industrial_training, t2.capstone_project_planning, t2.percentage, t2.rating, t2.remark FROM `civil_dept` AS t1 LEFT JOIN semester_mark_5_ce AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = ? AND t1.student_er_no = ? LIMIT 1;";
	var query = mysql.format(getQuery, [id1, id]);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('civil/civilsem5/civilsem5view.ejs', { title: 'civilsem5view', computer: json, success: '', user: req.session.user });

	});
});

///// civil sem 6
app.get('/view8.6/:id', function (req, res, next) {
	var id = req.params.id;
	var id1 = req.params.id;
	// console.log(id)
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.management, t2.contracts_and_accounts, t2.maintenance_and_repairs_of_structure, t2.emerging_trends_in_civil_engineering, t2.solid_waste_management, t2.capstone_project_execution_and_report_writing, t2.construction_management, t2.enterprenureship_development, t2.percentage, t2.rating, t2.remark FROM `civil_dept` AS t1 LEFT JOIN semester_mark_6_ce AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = ? AND t1.student_er_no = ? LIMIT 1;";
	var query = mysql.format(getQuery, [id1, id]);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('civil/civilsem6/civilsem6view.ejs', { title: 'civilsem6view', computer: json, success: '', user: req.session.user });

	});
});

///// computer sem 1
app.get('/view8.7/:id', function (req, res, next) {
	var id = req.params.id;
	var id1 = req.params.id;
	// console.log(id)
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.english, t2.basic_science, t2.basic_mathematics, t2.fundamental_of_ict, t2.engineering_graphics, t2.workshop_practice, t2.percentage, t2.rating, t2.remark FROM `computer_dept` AS t1 LEFT JOIN semester_mark_1_c AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = ? AND t1.student_er_no = ? LIMIT 1;";
	var query = mysql.format(getQuery, [id1, id]);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('computer/computersem1/computersem1view.ejs', { title: 'computersem1view', computer: json, success: '', user: req.session.user });

	});
});

///// computer sem 2
app.get('/view8.8/:id', function (req, res, next) {
	var id = req.params.id;
	var id1 = req.params.id;
	// console.log(id)
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.elements_of_electrical_engineering, t2.applied_mathematics, t2.basic_electronics, t2.programming_in_c, t2.business_communication_using_computers, t2.computer_peripheral_and_hardware_maintenance, t2.webpage_designing_with_html, t2.percentage, t2.rating, t2.remark FROM `computer_dept` AS t1 LEFT JOIN semester_mark_2_c AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = ? AND t1.student_er_no = ? LIMIT 1;";
	var query = mysql.format(getQuery, [id1, id]);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('computer/computersem2/computersem2view.ejs', { title: 'computersem2view', computer: json, success: '', user: req.session.user });

	});
});

///// computer sem 3
app.get('/view8.9/:id', function (req, res, next) {
	var id = req.params.id;
	var id1 = req.params.id;
	// console.log(id)
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.object_oriented_programming_using_c_plus, t2.data_structure_using_c, t2.computer_graphics, t2.database_management_system, t2.digital_techniques, t2.percentage, t2.rating, t2.remark FROM `computer_dept` AS t1 LEFT JOIN semester_mark_3_c AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = ? AND t1.student_er_no = ? LIMIT 1;";
	var query = mysql.format(getQuery, [id1, id]);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('computer/computersem3/computersem3view.ejs', { title: 'computersem3view', computer: json, success: '', user: req.session.user });

	});
});

///// computer sem 4
app.get('/view8.10/:id', function (req, res, next) {
	var id = req.params.id;
	var id1 = req.params.id;
	// console.log(id)
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.java_programming, t2.software_engineering, t2.data_communication_and_computer_network, t2.microprocessors, t2.gui_application_development_using_vb.net, t2.percentage, t2.rating, t2.remark FROM `computer_dept` AS t1 LEFT JOIN semester_mark_4_c AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = ? AND t1.student_er_no = ? LIMIT 1;";
	var query = mysql.format(getQuery, [id1, id]);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('computer/computersem4/computersem4view.ejs', { title: 'computersem4view', computer: json, success: '', user: req.session.user });

	});
});

///// computer sem 5
app.get('/view8.11/:id', function (req, res, next) {
	var id = req.params.id;
	var id1 = req.params.id;
	// console.log(id)
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.environmental_studies, t2.operating_system, t2.advance_java_programming, t2.software_testing, t2.advance_computer_network, t2.industrial_training, t2.capstone_project_planning, t2.percentage, t2.rating, t2.remark FROM `computer_dept` AS t1 LEFT JOIN semester_mark_5_c AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = ? AND t1.student_er_no = ? LIMIT 1;";
	var query = mysql.format(getQuery, [id1, id]);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('computer/computersem5/computersem5view.ejs', { title: 'computersem5view', computer: json, success: '', user: req.session.user });

	});
});

///// computer sem 6
app.get('/view8.12/:id', function (req, res, next) {
	var id = req.params.id;
	var id1 = req.params.id;
	// console.log(id)
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.management, t2.programming_with_python, t2.mobile_application_development, t2.emerging_trends_in_computer_and_information_technology, t2.network_and_information_security, t2.enterpreneurship_development, t2.capstone_project_execution_and_report_writing, t2.percentage, t2.rating, t2.remark FROM `computer_dept` AS t1 LEFT JOIN semester_mark_6_c AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = ? AND t1.student_er_no = ? LIMIT 1;";
	var query = mysql.format(getQuery, [id1, id]);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('computer/computersem6/computersem6view.ejs', { title: 'computersem6view', computer: json, success: '', user: req.session.user });

	});
});

///// electronics sem 1
app.get('/view8.13/:id', function (req, res, next) {
	var id = req.params.id;
	var id1 = req.params.id;
	// console.log(id)
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.english, t2.basic_science, t2.basic_mathematics, t2.fundamental_of_ict, t2.engineering_graphics, t2.workshop_practice, t2.percentage, t2.rating, t2.remark FROM `electronic_dept` AS t1 LEFT JOIN semester_mark_1_e AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = ? AND t1.student_er_no = ? LIMIT 1;";
	var query = mysql.format(getQuery, [id1, id]);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('electronics/electronicsem1/electronicsem1view.ejs', { title: 'electronicsem1view', computer: json, success: '', user: req.session.user });

	});
});

///// electronics sem 2
app.get('/view8.14/:id', function (req, res, next) {
	var id = req.params.id;
	var id1 = req.params.id;
	// console.log(id)
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.applied_mathematics, t2.elements_of_electrical_engineering, t2.basic_electronics, t2.electronic_engineering_materials, t2.c_programming_languages, t2.business_communication_using_computers, t2.percentage, t2.rating, t2.remark FROM `electronic_dept` AS t1 LEFT JOIN semester_mark_2_e AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = ? AND t1.student_er_no = ? LIMIT 1;";
	var query = mysql.format(getQuery, [id1, id]);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('electronics/electronicsem2/electronicsem2view.ejs', { title: 'electronicsem2view', computer: json, success: '', user: req.session.user });

	});
});

///// electronics sem 3
app.get('/view8.15/:id', function (req, res, next) {
	var id = req.params.id;
	var id1 = req.params.id;
	// console.log(id)
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.digital_techniques, t2.applied_electronics, t2.electric_circuits_and_networks, t2.electronic_measurement_and_instrumentation, t2.principles_of_electronic_communication, t2.percentage, t2.rating, t2.remark FROM `electronic_dept` AS t1 LEFT JOIN semester_mark_3_e AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = ? AND t1.student_er_no = ? LIMIT 1;";
	var query = mysql.format(getQuery, [id1, id]);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('electronics/electronicssem3/electronicssem3view.ejs', { title: 'electronicssem3view', computer: json, success: '', user: req.session.user });

	});
});

///// electronics sem 4
app.get('/view8.16/:id', function (req, res, next) {
	var id = req.params.id;
	var id1 = req.params.id;
	// console.log(id)
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.linear_integrated_circuits, t2.consumer_electronics, t2.microcontroller_and_application, t2.geo_technical_engineering, t2.basic_power_electronics, t2.digital_communication_systems, t2.maintenance_of_electronics_equipments_and_eda_tools_practices, t2.percentage, t2.rating, t2.remark FROM `electronic_dept` AS t1 LEFT JOIN semester_mark_4_e AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = ? AND t1.student_er_no = ? LIMIT 1;";
	var query = mysql.format(getQuery, [id1, id]);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('electronics/eletronicsem4/eletronicsem4view.ejs', { title: 'eletronicsem4view', computer: json, success: '', user: req.session.user });

	});
});

///// electronics sem 5
app.get('/view8.17/:id', function (req, res, next) {
	var id = req.params.id;
	var id1 = req.params.id;
	// console.log(id)
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.environmental_studies, t2.control_system, t2.embedded_system, t2.mobile_and_wireless_communication, t2.traffic_engineering, t2.microwave_and_radar, t2.industrial_training, t2.capstone_project_planning, t2.percentage, t2.rating, t2.remark FROM `electronic_dept` AS t1 LEFT JOIN semester_mark_5_e AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = ? AND t1.student_er_no = ? LIMIT 1;";
	var query = mysql.format(getQuery, [id1, id]);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('electronics/electronicsem5/electronicsem5view.ejs', { title: 'electronicsem5view', computer: json, success: '', user: req.session.user });

	});
});

///// electronics sem 6
app.get('/view8.18/:id', function (req, res, next) {
	var id = req.params.id;
	var id1 = req.params.id;
	// console.log(id)
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.management, t2.computer_networking_and_data_communication, t2.emerging_trends_in_electronics, t2.optical_network_and_satellite_communication, t2.enterpreneurship_development, t2.capstone_project_execution_and_report_writing, t2.vlsi_with_vhdl, t2.percentage, t2.rating, t2.remark FROM `electronic_dept` AS t1 LEFT JOIN semester_mark_6_e AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = ? AND t1.student_er_no = ? LIMIT 1;";
	var query = mysql.format(getQuery, [id1, id]);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('electronics/electonicsem6/electonicsem6view.ejs', { title: 'electonicsem6view', computer: json, success: '', user: req.session.user });

	});
});

///// mechanical sem 1
app.get('/view8.19/:id', function (req, res, next) {
	var id = req.params.id;
	var id1 = req.params.id;
	// console.log(id)
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.english, t2.basic_science, t2.basic_mathematics, t2.fundamental_of_ict, t2.engineering_graphics, t2.workshop_practice, t2.percentage, t2.rating, t2.remark FROM `mechanical_dept` AS t1 LEFT JOIN semester_mark_1_m AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = ? AND t1.student_er_no = ? LIMIT 1;";
	var query = mysql.format(getQuery, [id1, id]);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('mechanical/mechanicalsem1/mechanicalsem1view.ejs', { title: 'mechanicalsem1view', computer: json, success: '', user: req.session.user });

	});
});

///// mechanical sem 2
app.get('/view8.20/:id', function (req, res, next) {
	var id = req.params.id;
	var id1 = req.params.id;
	// console.log(id)
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.applied_science, t2.applied_mechanics, t2.applied_mathematics, t2.engineering_drawing, t2.business_communication_using_computers, t2.mechanical_engineering_workshop, t2.percentage, t2.rating, t2.remark FROM `mechanical_dept` AS t1 LEFT JOIN semester_mark_2_m AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = ? AND t1.student_er_no = ? LIMIT 1;";
	var query = mysql.format(getQuery, [id1, id]);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('mechanical/mechanicalsem2/mechanicalsem2view.ejs', { title: 'mechanicalsem2view', computer: json, success: '', user: req.session.user });

	});
});

///// mechanical sem 3
app.get('/view8.21/:id', function (req, res, next) {
	var id = req.params.id;
	var id1 = req.params.id;
	// console.log(id)
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.strength_of_metarial, t2.basic_electrical_and_electronics_engineering, t2.thermal_engineering, t2.mechanical_working_drawing, t2.engineering_metrology, t2.mechanical_engineering_metarials, t2.percentage, t2.rating, t2.remark FROM `mechanical_dept` AS t1 LEFT JOIN semester_mark_3_m AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = ? AND t1.student_er_no = ? LIMIT 1;";
	var query = mysql.format(getQuery, [id1, id]);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('mechanical/mechanicalsem3/mechanicalsem3view.ejs', { title: 'mechanicalsem3view', computer: json, success: '', user: req.session.user });

	});
});

///// mechanical sem 4
app.get('/view8.22/:id', function (req, res, next) {
	var id = req.params.id;
	var id1 = req.params.id;
	// console.log(id)
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.theory_of_machines, t2.mechanical_engineering_measurements, t2.fluid_mechanics_and_machinery, t2.manufacturing_process, t2.environmental_studies, t2.computer_aided_drafting, t2.fundamental_of_machatronics, t2.percentage, t2.rating, t2.remark FROM `mechanical_dept` AS t1 LEFT JOIN semester_mark_4_m AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = ? AND t1.student_er_no = ? LIMIT 1;";
	var query = mysql.format(getQuery, [id1, id]);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('mechanical/mechanicalsem4/mechanicalsem4view.ejs', { title: 'mechanicalsem4view', computer: json, success: '', user: req.session.user });

	});
});

///// mechanical sem 5
app.get('/view8.23/:id', function (req, res, next) {
	var id = req.params.id;
	var id1 = req.params.id;
	// console.log(id)
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.management, t2.power_engineering_and_refrigeration, t2.advance_manufacturing_process, t2.elements_of_machine_design, t2.tool_engineering, t2.solid_modeling_and_additive_manufacturing, t2.industrial_training, t2.capstone_project_planning, t2.percentage, t2.rating, t2.remark FROM `mechanical_dept` AS t1 LEFT JOIN semester_mark_5_m AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = ? AND t1.student_er_no = ? LIMIT 1;";
	var query = mysql.format(getQuery, [id1, id]);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('mechanical/mechanicalsem5/mechanicalsem5view.ejs', { title: 'mechanicalsem5view', computer: json, success: '', user: req.session.user });

	});
});

///// mechanical sem 6
app.get('/view8.24/:id', function (req, res, next) {
	var id = req.params.id;
	var id1 = req.params.id;
	// console.log(id)
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.refrigeration_and_air_condition, t2.industrial_hydraulics_and_pneumatics, t2.industrial_engineering_and_quality_control, t2.emerging_trends_in_mechanical_engineering, t2.enterpreneurship_development, t2.automobile_development,	 t2.percentage, t2.rating, t2.remark FROM `mechanical_dept` AS t1 LEFT JOIN semester_mark_6_m AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = ? AND t1.student_er_no = ? LIMIT 1;";
	var query = mysql.format(getQuery, [id1, id]);
	db.query(query, function (err, result) {
		if (err) throw err;
		// console.log(result);
		var string = JSON.stringify(result);
		var json = JSON.parse(string);

		res.render('mechanical/mechanicalsem6/mechanicalsem6view.ejs', { title: 'mechanicalsem6view', computer: json, success: '', user: req.session.user });

	});
});

////// civil sem 1regs

app.post("/civilsem1reg", function (req, res) {
	//   console.log(req.body);

	var student_er_no = req.body.student_er_no;
	var english = req.body.english;
	var basic_science = req.body.basic_science;
	var basic_mathematics = req.body.basic_mathematics;
	var fundamental_of_ict = req.body.fundamental_of_ict;
	var engineering_graphics = req.body.engineering_graphics;
	var workshop_practice = req.body.workshop_practice;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;

	db.getConnection(function (err) {
		if (err) {
			res.send("Error occured.");

		} else {
			var sql = "INSERT INTO `semester_mark_1_ce`(`student_er_no`, `english`, `basic_science`, `basic_mathematics`, `fundamental_of_ict`, `engineering_graphics`,`workshop_practice`,`percentage`,`rating`,`remark`) VALUES ('" + student_er_no + "','" + english + "','" + basic_science + "','" + basic_mathematics + "','" + fundamental_of_ict + "','" + engineering_graphics + "' ,'" + workshop_practice + "','" + percentage + "','" + rating + "','" + remark + "')";
			res.redirect("/civilsem1reg")
			// console.log(body);
			db.query(sql, function (err2) {
				if (err2) {
					console.log(err2);
				}
			});
		}
	});
});

////// civil sem 2regs

app.post("/civilsem2reg", function (req, res) {
	//   console.log(req.body);

	var student_er_no = req.body.student_er_no;
	var applied_mathematics = req.body.applied_mathematics;
	var applied_science = req.body.applied_science;
	var applied_mechanics = req.body.applied_mechanics;
	var construction_materials = req.body.construction_materials;
	var basic_surveying = req.body.basic_surveying;
	var civil_engineering_workshop_and_practice = req.body.civil_engineering_workshop_and_practice;
	var business_communication_using_computers = req.body.business_communication_using_computers;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;

	db.getConnection(function (err) {
		if (err) {
			res.send("Error occured.");

		} else {
			var sql = "INSERT INTO `semester_mark_2_ce`(`student_er_no`, `applied_mathematics`, `applied_science`, `applied_mechanics`, `construction_materials`, `basic_surveying`,`civil_engineering_workshop_and_practice`,`business_communication_using_computers`,`percentage`,`rating`,`remark`) VALUES ('" + student_er_no + "','" + applied_mathematics + "','" + applied_science + "','" + applied_mechanics + "','" + construction_materials + "','" + basic_surveying + "' ,'" + civil_engineering_workshop_and_practice + "','" + business_communication_using_computers + "','" + percentage + "','" + rating + "','" + remark + "')";
			res.redirect("/civilsem2reg")
			// console.log(body);
			db.query(sql, function (err2) {
				if (err2) {
					console.log(err2);
				}
			});
		}
	});
});

////// civil sem 3regs

app.post("/civilsem3reg", function (req, res) {
	//   console.log(req.body);

	var student_er_no = req.body.student_er_no;
	var advance_surveying = req.body.advance_surveying;
	var highway_engineering = req.body.highway_engineering;
	var mechanics_of_structures = req.body.mechanics_of_structures;
	var building_construction = req.body.building_construction;
	var concrete_technology = req.body.concrete_technology;
	var computer_aided_drawing = req.body.computer_aided_drawing;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;

	db.getConnection(function (err) {
		if (err) {
			res.send("Error occured.");

		} else {
			var sql = "INSERT INTO `semester_mark_3_ce`(`student_er_no`, `advance_surveying`, `highway_engineering`, `mechanics_of_structures`, `building_construction`, `concrete_technology`,`computer_aided_drawing`,`percentage`,`rating`,`remark`) VALUES ('" + student_er_no + "','" + advance_surveying + "','" + highway_engineering + "','" + mechanics_of_structures + "','" + building_construction + "','" + concrete_technology + "' ,'" + computer_aided_drawing + "','" + percentage + "','" + rating + "','" + remark + "')";
			res.redirect("/civilsem3reg")
			// console.log(body);
			db.query(sql, function (err2) {
				if (err2) {
					console.log(err2);
				}
			});
		}
	});
});

////// civil sem 4regs

app.post("/civilsem4reg", function (req, res) {
	//   console.log(req.body);

	var student_er_no = req.body.student_er_no;
	var hydraulics = req.body.hydraulics;
	var theory_of_structures = req.body.theory_of_structures;
	var railway_and_bridge_engineering = req.body.railway_and_bridge_engineering;
	var geo_technical_engineering = req.body.geo_technical_engineering;
	var building_planning_and_drawing = req.body.building_planning_and_drawing;
	var environmental_studies = req.body.environmental_studies;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;

	db.getConnection(function (err) {
		if (err) {
			res.send("Error occured.");

		} else {
			var sql = "INSERT INTO `semester_mark_4_ce`(`student_er_no`, `hydraulics`, `theory_of_structures`, `railway_and_bridge_engineering`, `geo_technical_engineering`, `building_planning_and_drawing`,`environmental_studies`,`percentage`,`rating`,`remark`) VALUES ('" + student_er_no + "','" + hydraulics + "','" + theory_of_structures + "','" + railway_and_bridge_engineering + "','" + geo_technical_engineering + "','" + building_planning_and_drawing + "' ,'" + environmental_studies + "','" + percentage + "','" + rating + "','" + remark + "')";
			res.redirect("/civilsem4reg")
			// console.log(body);
			db.query(sql, function (err2) {
				if (err2) {
					console.log(err2);
				}
			});
		}
	});
});

////// civil sem 5regs

app.post("/civilsem5reg", function (req, res) {
	//   console.log(req.body);

	var student_er_no = req.body.student_er_no;
	var water_resource_engineering = req.body.water_resource_engineering;
	var design_of_steel_and_rcc_structure = req.body.design_of_steel_and_rcc_structure;
	var estimating_costing_and_valuation = req.body.estimating_costing_and_valuation;
	var public_health_engineering = req.body.public_health_engineering;
	var traffic_engineering = req.body.traffic_engineering;
	var industrial_training = req.body.industrial_training;
	var capstone_project_planning = req.body.capstone_project_planning;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;

	db.getConnection(function (err) {
		if (err) {
			res.send("Error occured.");

		} else {
			var sql = "INSERT INTO `semester_mark_5_ce`(`student_er_no`, `water_resource_engineering`, `design_of_steel_and_rcc_structure`, `estimating_costing_and_valuation`, `public_health_engineering`, `traffic_engineering`,`industrial_training`,`capstone_project_planning`,`percentage`,`rating`,`remark`) VALUES ('" + student_er_no + "','" + water_resource_engineering + "','" + design_of_steel_and_rcc_structure + "','" + estimating_costing_and_valuation + "','" + public_health_engineering + "','" + traffic_engineering + "' ,'" + industrial_training + "','" + capstone_project_planning + "','" + percentage + "','" + rating + "','" + remark + "')";
			res.redirect("/civilsem5reg")
			// console.log(body);
			db.query(sql, function (err2) {
				if (err2) {
					console.log(err2);
				}
			});
		}
	});
});

////// civil sem 6regs

app.post("/civilsem6reg", function (req, res) {
	//   console.log(req.body);

	var student_er_no = req.body.student_er_no;
	var management = req.body.management;
	var contracts_and_accounts = req.body.contracts_and_accounts;
	var maintenance_and_repairs_of_structure = req.body.maintenance_and_repairs_of_structure;
	var emerging_trends_in_civil_engineering = req.body.emerging_trends_in_civil_engineering;
	var solid_waste_management = req.body.solid_waste_management;
	var capstone_project_execution_and_report_writing = req.body.capstone_project_execution_and_report_writing;
	var construction_management = req.body.construction_management;
	var enterprenureship_development = req.body.enterprenureship_development;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;

	db.getConnection(function (err) {
		if (err) {
			res.send("Error occured.");

		} else {
			var sql = "INSERT INTO `semester_mark_6_ce`(`student_er_no`, `management`, `contracts_and_accounts`, `maintenance_and_repairs_of_structure`, `emerging_trends_in_civil_engineering`, `solid_waste_management`,`capstone_project_execution_and_report_writing`,`construction_management`,`enterprenureship_development`,`percentage`,`rating`,`remark`) VALUES ('" + student_er_no + "','" + management + "','" + contracts_and_accounts + "','" + maintenance_and_repairs_of_structure + "','" + emerging_trends_in_civil_engineering + "','" + solid_waste_management + "' ,'" + capstone_project_execution_and_report_writing + "','" + construction_management + "','" + enterprenureship_development + "','" + percentage + "','" + rating + "','" + remark + "')";
			res.redirect("/civilsem6reg")
			// console.log(body);
			db.query(sql, function (err2) {
				if (err2) {
					console.log(err2);
				}
			});
		}
	});
});

////// computer sem 1regs

app.post("/computersem1reg", function (req, res) {
	//   console.log(req.body);

	var student_er_no = req.body.student_er_no;
	var english = req.body.english;
	var basic_science = req.body.basic_science;
	var basic_mathematics = req.body.basic_mathematics;
	var fundamental_of_ict = req.body.fundamental_of_ict;
	var engineering_graphics = req.body.engineering_graphics;
	var workshop_practice = req.body.workshop_practice;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;

	db.getConnection(function (err) {
		if (err) {
			res.send("Error occured.");

		} else {
			var sql = "INSERT INTO `semester_mark_1_c`(`student_er_no`, `english`, `basic_science`, `basic_mathematics`, `fundamental_of_ict`, `engineering_graphics`,`workshop_practice`,`percentage`,`rating`,`remark`) VALUES ('" + student_er_no + "','" + english + "','" + basic_science + "','" + basic_mathematics + "','" + fundamental_of_ict + "','" + engineering_graphics + "' ,'" + workshop_practice + "','" + percentage + "','" + rating + "','" + remark + "')";
			res.redirect("/computersem1reg")
			// console.log(body);
			db.query(sql, function (err2) {
				if (err2) {
					console.log(err2);
				}
			});
		}
	});
});

////// computer sem 2regs

app.post("/computersem2reg", function (req, res) {
	//   console.log(req.body);

	var student_er_no = req.body.student_er_no;
	var elements_of_electrical_engineering = req.body.elements_of_electrical_engineering;
	var applied_mathematics = req.body.applied_mathematics;
	var basic_electronics = req.body.basic_electronics;
	var programming_in_c = req.body.programming_in_c;
	var business_communication_using_computers = req.body.business_communication_using_computers;
	var computer_peripheral_and_hardware_maintenance = req.body.computer_peripheral_and_hardware_maintenance;
	var webpage_designing_with_html = req.body.webpage_designing_with_html;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;

	db.getConnection(function (err) {
		if (err) {
			res.send("Error occured.");

		} else {
			var sql = "INSERT INTO `semester_mark_2_c`(`student_er_no`, `elements_of_electrical_engineering`, `applied_mathematics`, `basic_electronics`, `programming_in_c`, `business_communication_using_computers`,`computer_peripheral_and_hardware_maintenance`,`webpage_designing_with_html`,`percentage`,`rating`,`remark`) VALUES ('" + student_er_no + "','" + elements_of_electrical_engineering + "','" + applied_mathematics + "','" + basic_electronics + "','" + programming_in_c + "','" + business_communication_using_computers + "' ,'" + computer_peripheral_and_hardware_maintenance + "','" + webpage_designing_with_html + "','" + percentage + "','" + rating + "','" + remark + "')";
			res.redirect("/computersem2reg")
			// console.log(body);
			db.query(sql, function (err2) {
				if (err2) {
					console.log(err2);
				}
			});
		}
	});
});

////// computer sem 3regs

app.post("/computersem3reg", function (req, res) {
	//   console.log(req.body);

	var student_er_no = req.body.student_er_no;
	var object_oriented_programming_using_cplus = req.body.object_oriented_programming_using_cplus;
	var data_structure_using_c = req.body.data_structure_using_c;
	var computer_graphics = req.body.computer_graphics;
	var database_management_system = req.body.database_management_system;
	var digital_techniques = req.body.digital_techniques;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;

	db.getConnection(function (err) {
		if (err) {
			res.send("Error occured.");

		} else {
			var sql = "INSERT INTO `semester_mark_3_c`(`student_er_no`, `object_oriented_programming_using_cplus`, `data_structure_using_c`, `computer_graphics`, `database_management_system`, `digital_techniques`,`percentage`,`rating`,`remark`) VALUES ('" + student_er_no + "','" + object_oriented_programming_using_cplus + "','" + data_structure_using_c + "','" + computer_graphics + "','" + database_management_system + "','" + digital_techniques + "' ,'" + percentage + "','" + rating + "','" + remark + "')";
			res.redirect("/computersem3reg")
			// console.log(body);
			db.query(sql, function (err2) {
				if (err2) {
					console.log(err2);
				}
			});
		}
	});
});

////// computer sem 4regs

app.post("/computersem4reg", function (req, res) {
	//   console.log(req.body);

	var student_er_no = req.body.student_er_no;
	var java_programming = req.body.java_programming;
	var software_engineering = req.body.software_engineering;
	var data_communication_and_computer_network = req.body.data_communication_and_computer_network;
	var microprocessors = req.body.microprocessors;
	var gui_application_development_using_vbnet = req.body.gui_application_development_using_vbnet;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;

	db.getConnection(function (err) {
		if (err) {
			res.send("Error occured.");

		} else {
			var sql = "INSERT INTO `semester_mark_4_c`(`student_er_no`, `java_programming`, `software_engineering`, `data_communication_and_computer_network`, `microprocessors`, `gui_application_development_using_vbnet`,`percentage`,`rating`,`remark`) VALUES ('" + student_er_no + "','" + java_programming + "','" + software_engineering + "','" + data_communication_and_computer_network + "','" + microprocessors + "','" + gui_application_development_using_vbnet + "','" + percentage + "','" + rating + "','" + remark + "')";
			res.redirect("/computersem4reg")
			// console.log(body);
			db.query(sql, function (err2) {
				if (err2) {
					console.log(err2);
				}
			});
		}
	});
});

////// computer sem 5regs

app.post("/computersem5reg", function (req, res) {
	//   console.log(req.body);

	var student_er_no = req.body.student_er_no;
	var environmental_studies = req.body.environmental_studies;
	var operating_system = req.body.operating_system;
	var advance_java_programming = req.body.advance_java_programming;
	var software_testing = req.body.software_testing;
	var advance_computer_network = req.body.advance_computer_network;
	var industrial_training = req.body.industrial_training;
	var capstone_project_planning = req.body.capstone_project_planning;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;
	db.getConnection(function (err) {
		if (err) {
			res.send("Error occured.");

		} else {
			var sql = "INSERT INTO `semester_mark_5_c`(`student_er_no`, `environmental_studies`, `operating_system`, `advance_java_programming`, `software_testing`, `advance_computer_network`,`industrial_training`,`capstone_project_planning`,`percentage`,`rating`,`remark`) VALUES ('" + student_er_no + "','" + environmental_studies + "','" + operating_system + "','" + advance_java_programming + "','" + software_testing + "','" + advance_computer_network + "' ,'" + industrial_training + "','" + capstone_project_planning + "','" + percentage + "','" + rating + "','" + remark + "')";
			res.redirect("/computersem5reg")
			// console.log(body);
			db.query(sql, function (err2) {
				if (err2) {
					console.log(err2);
				}
			});
		}
	});
});

////// computer sem 6regs

app.post("/computersem6reg", function (req, res) {
	//   console.log(req.body);

	var student_er_no = req.body.student_er_no;
	var management = req.body.management;
	var programming_with_python = req.body.programming_with_python;
	var mobile_application_development = req.body.mobile_application_development;
	var emerging_trends_in_computer_and_information_technology = req.body.emerging_trends_in_computer_and_information_technology;
	var network_and_information_security = req.body.network_and_information_security;
	var enterpreneurship_development = req.body.enterpreneurship_development;
	var capstone_project_execution_and_report_writing = req.body.capstone_project_execution_and_report_writing;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;

	db.getConnection(function (err) {
		if (err) {
			res.send("Error occured.");

		} else {
			var sql = "INSERT INTO `semester_mark_6_c`(`student_er_no`, `management`, `programming_with_python`, `mobile_application_development`, `emerging_trends_in_computer_and_information_technology`, `network_and_information_security`,`enterpreneurship_development`,`capstone_project_execution_and_report_writing`,`percentage`,`rating`,`remark`) VALUES ('" + student_er_no + "','" + management + "','" + programming_with_python + "','" + mobile_application_development + "','" + emerging_trends_in_computer_and_information_technology + "','" + network_and_information_security + "' ,'" + enterpreneurship_development + "','" + capstone_project_execution_and_report_writing + "','" + enterprenureship_development + "','" + percentage + "','" + rating + "','" + remark + "')";
			res.redirect("/computersem6reg")
			// console.log(body);
			db.query(sql, function (err2) {
				if (err2) {
					console.log(err2);
				}
			});
		}
	});
});

////// electronic sem 1regs

app.post("/electronicsem1reg", function (req, res) {
	//   console.log(req.body);

	var student_er_no = req.body.student_er_no;
	var english = req.body.english;
	var basic_science = req.body.basic_science;
	var basic_mathematics = req.body.basic_mathematics;
	var fundamental_of_ict = req.body.fundamental_of_ict;
	var engineering_graphics = req.body.engineering_graphics;
	var workshop_practice = req.body.workshop_practice;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;

	db.getConnection(function (err) {
		if (err) {
			res.send("Error occured.");

		} else {
			var sql = "INSERT INTO `semester_mark_1_e`(`student_er_no`, `english`, `basic_science`, `basic_mathematics`, `fundamental_of_ict`, `engineering_graphics`,`workshop_practice`,`percentage`,`rating`,`remark`) VALUES ('" + student_er_no + "','" + english + "','" + basic_science + "','" + basic_mathematics + "','" + fundamental_of_ict + "','" + engineering_graphics + "' ,'" + workshop_practice + "','" + percentage + "','" + rating + "','" + remark + "')";
			res.redirect("/electronicsem1reg")
			// console.log(body);
			db.query(sql, function (err2) {
				if (err2) {
					console.log(err2);
				}
			});
		}
	});
});

////// electronic sem 2regs

app.post("/electronicsem2reg", function (req, res) {
	//   console.log(req.body);

	var student_er_no = req.body.student_er_no;
	var applied_mathematics = req.body.applied_mathematics;
	var elements_of_electrical_engineering = req.body.elements_of_electrical_engineering;
	var basic_electronics = req.body.basic_electronics;
	var electronic_engineering_materials = req.body.electronic_engineering_materials;
	var c_programming_languages = req.body.c_programming_languages;
	var business_communication_using_computers = req.body.business_communication_using_computers;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;

	db.getConnection(function (err) {
		if (err) {
			res.send("Error occured.");

		} else {
			var sql = "INSERT INTO `semester_mark_2_e`(`student_er_no`, `applied_mathematics`, `elements_of_electrical_engineering`, `basic_electronics`, `electronic_engineering_materials`, `c_programming_languages`,`business_communication_using_computers`,`percentage`,`rating`,`remark`) VALUES ('" + student_er_no + "','" + applied_mathematics + "','" + elements_of_electrical_engineering + "','" + basic_electronics + "','" + electronic_engineering_materials + "','" + c_programming_languages + "' ,'" + business_communication_using_computers + "','" + percentage + "','" + rating + "','" + remark + "')";
			res.redirect("/electronicsem2reg")
			// console.log(body);
			db.query(sql, function (err2) {
				if (err2) {
					console.log(err2);
				}
			});
		}
	});
});

////// electronic sem 3regs

app.post("/electronicsem3reg", function (req, res) {
	//   console.log(req.body);

	var student_er_no = req.body.student_er_no;
	var digital_techniques = req.body.digital_techniques;
	var applied_electronics = req.body.applied_electronics;
	var electric_circuits_and_networks = req.body.electric_circuits_and_networks;
	var electronic_measurement_and_instrumentation = req.body.electronic_measurement_and_instrumentation;
	var principles_of_electronic_communication = req.body.principles_of_electronic_communication;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;

	db.getConnection(function (err) {
		if (err) {
			res.send("Error occured.");

		} else {
			var sql = "INSERT INTO `semester_mark_3_e`(`student_er_no`, `digital_techniques`, `applied_electronics`, `electric_circuits_and_networks`, `electronic_measurement_and_instrumentation`, `principles_of_electronic_communication`,`percentage`,`rating`,`remark`) VALUES ('" + student_er_no + "','" + digital_techniques + "','" + applied_electronics + "','" + electric_circuits_and_networks + "','" + electronic_measurement_and_instrumentation + "','" + principles_of_electronic_communication + "','" + percentage + "','" + rating + "','" + remark + "')";
			res.redirect("/electronicsem3reg")
			// console.log(body);
			db.query(sql, function (err2) {
				if (err2) {
					console.log(err2);
				}
			});
		}
	});
});

////// electronic sem 4regs

app.post("/electronicsem4reg", function (req, res) {
	//   console.log(req.body);

	var student_er_no = req.body.student_er_no;
	var linear_integrated_circuits = req.body.linear_integrated_circuits;
	var consumer_electronics = req.body.consumer_electronics;
	var microcontroller_and_application = req.body.microcontroller_and_application;
	var basic_power_electronics = req.body.basic_power_electronics;
	var digital_communication_systems = req.body.digital_communication_systems;
	var maintenance_of_electronics_equipments_and_eda_tools_practices = req.body.maintenance_of_electronics_equipments_and_eda_tools_practices;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;

	db.getConnection(function (err) {
		if (err) {
			res.send("Error occured.");

		} else {
			var sql = "INSERT INTO `semester_mark_4_e`(`student_er_no`, `linear_integrated_circuits`, `consumer_electronics`, `microcontroller_and_application`, `basic_power_electronics`, `digital_communication_systems`,`maintenance_of_electronics_equipments_and_eda_tools_practices`,`percentage`,`rating`,`remark`) VALUES ('" + student_er_no + "','" + linear_integrated_circuits + "','" + consumer_electronics + "','" + microcontroller_and_application + "','" + basic_power_electronics + "','" + digital_communication_systems + "' ,'" + maintenance_of_electronics_equipments_and_eda_tools_practices + "','" + percentage + "','" + rating + "','" + remark + "')";
			res.redirect("/electronicsem4reg")
			// console.log(body);
			db.query(sql, function (err2) {
				if (err2) {
					console.log(err2);
				}
			});
		}
	});
});

////// electronic sem 5regs

app.post("/electronicsem5reg", function (req, res) {
	//   console.log(req.body);

	var student_er_no = req.body.student_er_no;
	var environmental_studies = req.body.environmental_studies;
	var control_system = req.body.control_system;
	var embedded_system = req.body.embedded_system;
	var mobile_and_wireless_communication = req.body.mobile_and_wireless_communication;
	var microwave_and_radar = req.body.microwave_and_radar;
	var industrial_training = req.body.industrial_training;
	var capstone_project_planning = req.body.capstone_project_planning;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;

	db.getConnection(function (err) {
		if (err) {
			res.send("Error occured.");

		} else {
			var sql = "INSERT INTO `semester_mark_5_e`(`student_er_no`, `environmental_studies`, `control_system`, `embedded_system`, `mobile_and_wireless_communication`, `microwave_and_radar`,`industrial_training`,`capstone_project_planning`,`percentage`,`rating`,`remark`) VALUES ('" + student_er_no + "','" + environmental_studies + "','" + control_system + "','" + embedded_system + "','" + mobile_and_wireless_communication + "','" + microwave_and_radar + "' ,'" + industrial_training + "','" + capstone_project_planning + "','" + percentage + "','" + rating + "','" + remark + "')";
			res.redirect("/electronicsem5reg")
			// console.log(body);
			db.query(sql, function (err2) {
				if (err2) {
					console.log(err2);
				}
			});
		}
	});
});

////// electronic sem 6regs

app.post("/electronicsem6reg", function (req, res) {
	//   console.log(req.body);

	var student_er_no = req.body.student_er_no;
	var management = req.body.management;
	var computer_networking_and_data_communication = req.body.computer_networking_and_data_communication;
	var emerging_trends_in_electronics = req.body.emerging_trends_in_electronics;
	var optical_network_and_satellite_communication = req.body.optical_network_and_satellite_communication;
	var enterpreneurship_development = req.body.enterpreneurship_development;
	var capstone_project_execution_and_report_writing = req.body.capstone_project_execution_and_report_writing;
	var vlsi_with_vhdl = req.body.vlsi_with_vhdl;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;

	db.getConnection(function (err) {
		if (err) {
			res.send("Error occured.");

		} else {
			var sql = "INSERT INTO `semester_mark_6_e`(`student_er_no`, `management`, `computer_networking_and_data_communication`, `emerging_trends_in_electronics`, `optical_network_and_satellite_communication`, `enterpreneurship_development`,`capstone_project_execution_and_report_writing`,`vlsi_with_vhdl`,`percentage`,`rating`,`remark`) VALUES ('" + student_er_no + "','" + management + "','" + computer_networking_and_data_communication + "','" + emerging_trends_in_electronics + "','" + optical_network_and_satellite_communication + "','" + enterpreneurship_development + "' ,'" + capstone_project_execution_and_report_writing + "','" + vlsi_with_vhdl + "','" + percentage + "','" + rating + "','" + remark + "')";
			res.redirect("/electronicsem6reg")
			// console.log(body);
			db.query(sql, function (err2) {
				if (err2) {
					console.log(err2);
				}
			});
		}
	});
});

////// mechanical sem 1regs

app.post("/mechanicalsem1reg", function (req, res) {
	//   console.log(req.body);

	var student_er_no = req.body.student_er_no;
	var english = req.body.english;
	var basic_science = req.body.basic_science;
	var basic_mathematics = req.body.basic_mathematics;
	var fundamental_of_ict = req.body.fundamental_of_ict;
	var engineering_graphics = req.body.engineering_graphics;
	var workshop_practice = req.body.workshop_practice;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;

	db.getConnection(function (err) {
		if (err) {
			res.send("Error occured.");

		} else {
			var sql = "INSERT INTO `semester_mark_1_m`(`student_er_no`, `english`, `basic_science`, `basic_mathematics`, `fundamental_of_ict`, `engineering_graphics`,`workshop_practice`,`percentage`,`rating`,`remark`) VALUES ('" + student_er_no + "','" + english + "','" + basic_science + "','" + basic_mathematics + "','" + fundamental_of_ict + "','" + engineering_graphics + "' ,'" + workshop_practice + "','" + percentage + "','" + rating + "','" + remark + "')";
			res.redirect("/mechanicalsem1reg")
			// console.log(body);
			db.query(sql, function (err2) {
				if (err2) {
					console.log(err2);
				}
			});
		}
	});
});

////// mechanical sem 2regs

app.post("/mechanicalsem2reg", function (req, res) {
	//   console.log(req.body);

	var student_er_no = req.body.student_er_no;
	var applied_science = req.body.applied_science;
	var applied_mechanics = req.body.applied_mechanics;
	var applied_mathematics = req.body.applied_mathematics;
	var engineering_drawing = req.body.engineering_drawing;
	var mechanical_engineering_workshop = req.body.mechanical_engineering_workshop;
	var business_communication_using_computers = req.body.business_communication_using_computers;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;

	db.getConnection(function (err) {
		if (err) {
			res.send("Error occured.");

		} else {
			var sql = "INSERT INTO `semester_mark_2_m`(`student_er_no`, `applied_science`, `applied_mechanics`, `applied_mathematics`, `engineering_drawing`, `mechanical_engineering_workshop`,`business_communication_using_computers`,`percentage`,`rating`,`remark`) VALUES ('" + student_er_no + "','" + applied_science + "','" + applied_mechanics + "','" + applied_mathematics + "','" + engineering_drawing + "','" + mechanical_engineering_workshop + "' ,'" + business_communication_using_computers + "','" + percentage + "','" + rating + "','" + remark + "')";
			res.redirect("/mechanicalsem2reg")
			// console.log(body);
			db.query(sql, function (err2) {
				if (err2) {
					console.log(err2);
				}
			});
		}
	});
});

////// mechanical sem 3regs

app.post("/mechanicalsem3reg", function (req, res) {
	//   console.log(req.body);

	var student_er_no = req.body.student_er_no;
	var mechanical_engineering_workshop = req.body.mechanical_engineering_workshop;
	var basic_electrical_and_electronics_engineering = req.body.basic_electrical_and_electronics_engineering;
	var thermal_engineering = req.body.thermal_engineering;
	var mechanical_working_drawing = req.body.mechanical_working_drawing;
	var engineering_metrology = req.body.engineering_metrology;
	var mechanical_engineering_metarials = req.body.mechanical_engineering_metarials;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;

	db.getConnection(function (err) {
		if (err) {
			res.send("Error occured.");

		} else {
			var sql = "INSERT INTO `semester_mark_3_m`(`student_er_no`, `mechanical_engineering_workshop`, `basic_electrical_and_electronics_engineering`, `thermal_engineering`, `mechanical_working_drawing`, `engineering_metrology`,`mechanical_engineering_metarials`,`percentage`,`rating`,`remark`) VALUES ('" + student_er_no + "','" + mechanical_engineering_workshop + "','" + basic_electrical_and_electronics_engineering + "','" + thermal_engineering + "','" + mechanical_working_drawing + "','" + engineering_metrology + "','" + mechanical_engineering_metarials + "','" + percentage + "','" + rating + "','" + remark + "')";
			res.redirect("/mechanicalsem3reg")
			// console.log(body);
			db.query(sql, function (err2) {
				if (err2) {
					console.log(err2);
				}
			});
		}
	});
});

////// mechanical sem 4regs

app.post("/mechanicalsem4reg", function (req, res) {
	//   console.log(req.body);

	var student_er_no = req.body.student_er_no;
	var theory_of_machines = req.body.theory_of_machines;
	var mechanical_engineering_measurements = req.body.mechanical_engineering_measurements;
	var fluid_mechanics_and_machinery = req.body.fluid_mechanics_and_machinery;
	var manufacturing_process = req.body.manufacturing_process;
	var environmental_studies = req.body.environmental_studies;
	var computer_aided_drafting = req.body.computer_aided_drafting;
	var fundamental_of_machatronics = req.body.fundamental_of_machatronics;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;

	db.getConnection(function (err) {
		if (err) {
			res.send("Error occured.");

		} else {
			var sql = "INSERT INTO `semester_mark_4_m`(`student_er_no`, `theory_of_machines`, `mechanical_engineering_measurements`, `fluid_mechanics_and_machinery`, `manufacturing_process`, `environmental_studies`,`computer_aided_drafting`,`fundamental_of_machatronics`,`percentage`,`rating`,`remark`) VALUES ('" + student_er_no + "','" + theory_of_machines + "','" + mechanical_engineering_measurements + "','" + fluid_mechanics_and_machinery + "','" + manufacturing_process + "','" + environmental_studies + "','" + computer_aided_drafting + "','" + fundamental_of_machatronics + "','" + percentage + "','" + rating + "','" + remark + "')";
			res.redirect("/mechanicalsem4reg")
			// console.log(body);
			db.query(sql, function (err2) {
				if (err2) {
					console.log(err2);
				}
			});
		}
	});
});

////// mechanical sem 5regs

app.post("/mechanicalsem5reg", function (req, res) {
	//   console.log(req.body);

	var student_er_no = req.body.student_er_no;
	var management = req.body.management;
	var power_engineering_and_refrigeration = req.body.power_engineering_and_refrigeration;
	var advance_manufacturing_process = req.body.advance_manufacturing_process;
	var elements_of_machine_design = req.body.elements_of_machine_design;
	var tool_engineering = req.body.tool_engineering;
	var solid_modeling_and_additive_manufacturing = req.body.solid_modeling_and_additive_manufacturing;
	var industrial_training = req.body.industrial_training;
	var capstone_project_planning = req.body.capstone_project_planning;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;
	db.getConnection(function (err) {
		if (err) {
			res.send("Error occured.");

		} else {
			var sql = "INSERT INTO `semester_mark_5_m`(`student_er_no`, `management`, `power_engineering_and_refrigeration`, `advance_manufacturing_process`, `elements_of_machine_design`, `tool_engineering`,`solid_modeling_and_additive_manufacturing`,`industrial_training`,`capstone_project_planning`,`percentage`,`rating`,`remark`) VALUES ('" + student_er_no + "','" + management + "','" + power_engineering_and_refrigeration + "','" + advance_manufacturing_process + "','" + elements_of_machine_design + "','" + tool_engineering + "' ,'" + solid_modeling_and_additive_manufacturing + "','" + industrial_training + "','" + capstone_project_planning + "','" + percentage + "','" + rating + "','" + remark + "')";
			res.redirect("/mechanicalsem5reg")
			// console.log(body);
			db.query(sql, function (err2) {
				if (err2) {
					console.log(err2);
				}
			});
		}
	});
});

////// mechanical sem 6regs

app.post("/mechanicalsem6reg", function (req, res) {
	//   console.log(req.body);

	var student_er_no = req.body.student_er_no;
	var refrigeration_and_air_condition = req.body.refrigeration_and_air_condition;
	var industrial_hydraulics_and_pneumatics = req.body.industrial_hydraulics_and_pneumatics;
	var industrial_engineering_and_quality_control = req.body.industrial_engineering_and_quality_control;
	var emerging_trends_in_mechanical_engineering = req.body.emerging_trends_in_mechanical_engineering;
	var enterpreneurship_development = req.body.enterpreneurship_development;
	var automobile_development = req.body.automobile_development;
	var percentage = req.body.percentage;
	var rating = req.body.rating;
	var remark = req.body.remark;

	db.getConnection(function (err) {
		if (err) {
			res.send("Error occured.");

		} else {
			var sql = "INSERT INTO `semester_mark_6_m`(`student_er_no`, `refrigeration_and_air_condition`, `industrial_hydraulics_and_pneumatics`, `industrial_engineering_and_quality_control`, `emerging_trends_in_mechanical_engineering`, `enterpreneurship_development`,`automobile_development`,`percentage`,`rating`,`remark`) VALUES ('" + student_er_no + "','" + refrigeration_and_air_condition + "','" + industrial_hydraulics_and_pneumatics + "','" + industrial_engineering_and_quality_control + "','" + emerging_trends_in_mechanical_engineering + "','" + enterpreneurship_development + "' ,'" + automobile_development + "','" + percentage + "','" + rating + "','" + remark + "')";
			res.redirect("/mechanicalsem6reg")
			// console.log(body);
			db.query(sql, function (err2) {
				if (err2) {
					console.log(err2);
				}
			});
		}
	});
});


///// civil sem 1 at
app.get("/civilsem1at", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_1_ce` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("civil/civilsem1/civilsem1at.ejs", { title: "civilsem1at", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/firstce")
		}
	});
});

app.get('/delete5.1/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_1_ce` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/civilsem1at');
	});

});

///// civil sem 2 at
app.get("/civilsem2at", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_2_ce` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("civil/civilsem2/civilsem2at.ejs", { title: "civilsem2at", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/firstce")
		}
	});
});

app.get('/delete5.2/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_2_ce` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/civilsem2at');
	});

});

///// civil sem 3 at
app.get("/civilsem3at", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_3_ce` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("civil/civilsem3/civilsem3at.ejs", { title: "civilsem3at", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/secondce")
		}
	});
});

app.get('/delete5.3/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_3_ce` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/civilsem3at');
	});

});

///// civil sem 4 at
app.get("/civilsem4at", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_4_ce` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("civil/civilsem4/civilsem4at.ejs", { title: "civilsem4at", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/secondce")
		}
	});
});

app.get('/delete5.4/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_4_ce` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/civilsem4at');
	});

});

///// civil sem 5 at
app.get("/civilsem5at", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_5_ce` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("civil/civilsem5/civilsem5at.ejs", { title: "civilsem5at", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/thirdce")
		}
	});
});

app.get('/delete5.5/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_5_ce` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/civilsem5at');
	});

});

///// civil sem 6 at
app.get("/civilsem6at", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_6_ce` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("civil/civilsem6/civilsem6at.ejs", { title: "civilsem6at", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/thirdce")
		}
	});
});

app.get('/delete5.6/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_6_ce` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/civilsem6at');
	});

});

///// computer sem 1 at
app.get("/computersem1at", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_1_c` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("computer/computersem1/computersem1at.ejs", { title: "computersem1at", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/firstco")
		}
	});
});

app.get('/delete5.7/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "SET FOREIGN_KEY_CHECKS=0;DELETE FROM `semester_1_c` WHERE `student_er_no`= ? LIMIT 1";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/computersem1at');
	});

});

///// computer sem 2 at
app.get("/computersem2at", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_2_c` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("computer/computersem1/computersem1at.ejs", { title: "civilsem2at", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/firstco")
		}
	});
});

app.get('/delete5.8/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_2_c` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/computersem2at');
	});

});

///// computer sem 3 at
app.get("/computersem3at", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_3_c` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("computer/computersem3/computersem3at.ejs", { title: "computersem3at", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/secondco")
		}
	});
});

app.get('/delete5.9/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_3_c` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/computersem3at');
	});

});

///// computer sem 4 at
app.get("/computersem4at", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_4_c` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("computer/computersem4/computersem4at.ejs", { title: "computersem4at", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/secondco")
		}
	});
});

app.get('/delete5.10/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_4_c` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/computersem4at');
	});

});

///// computer sem 5 at
app.get("/computersem5at", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_5_c` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("computer/computersem5/computersem5at.ejs", { title: "computersem5at", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/thirdco")
		}
	});
});

app.get('/delete5.11/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_5_c` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/computersem5at');
	});

});

///// computer sem 6 at
app.get("/computersem6at", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_6_c` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("computer/computersem6/computersem6at.ejs", { title: "computersem6at", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/thirdco")
		}
	});
});

app.get('/delete5.12/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_6_c` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/computersem6at');
	});

});

///// electronic sem 1 at
app.get("/electronicsem1at", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_1_e` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("electronics/electronicsem1/electronicsem1at.ejs", { title: "electronicsem1at", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/firstele")
		}
	});
});

app.get('/delete5.13/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_1_e` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/electronicsem1at');
	});

});

///// electronic sem 2 at
app.get("/electronicsem2at", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_2_e` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("electronics/electronicsem2/electronicsem2at.ejs", { title: "electronicsem2at", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/firstele")
		}
	});
});

app.get('/delete5.14/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_2_e` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/electronicsem2at');
	});

});

///// electronic sem 3 at
app.get("/electronicsem3at", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_3_e` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("electronics/electronicsem3/electronicsem3at.ejs", { title: "electronicsem3at", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/secondele")
		}
	});
});

app.get('/delete5.15/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_3_e` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/electronicsem3at');
	});

});

///// electronic sem 4 at
app.get("/electronicsem4at", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_4_e` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("electronics/electronicsem4/electronicsem4at.ejs", { title: "electronicsem4at", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/secondele")
		}
	});
});

app.get('/delete5.16/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_4_e` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/electronicsem4at');
	});

});

///// electronic sem 5 at
app.get("/electronicsem5at", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_5_e` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("electronics/electronicsem5/electronicsem5at.ejs", { title: "electronicsem5at", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/thirdele")
		}
	});
});

app.get('/delete5.17/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_5_e` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/electronicsem5at');
	});

});

///// electronic sem 6 at
app.get("/electronicsem6at", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_6_e` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("electronics/electronicsem6/electronicsem6at.ejs", { title: "electronicsem6at", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/thirdele")
		}
	});
});

app.get('/delete5.18/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_6_e` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/electronicsem6at');
	});

});

///// mechanical sem 1 at
app.get("/mechanicalsem1at", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_1_m` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("mechanical/mechanicalsem1/mechanicalsem1at.ejs", { title: "mechanicalsem1at", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/firstme")
		}
	});
});

app.get('/delete5.19/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_1_m` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/mechanicalsem1at');
	});

});

///// mechanical sem 2 at
app.get("/mechanicalsem2at", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_2_m` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("mechanical/mechanicalsem2/mechanicalsem2at.ejs", { title: "mechanicalsem2at", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/firstme")
		}
	});
});

app.get('/delete5.20/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_2_m` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/mechanicalsem2at');
	});

});

///// mechanical sem 3 at
app.get("/mechanicalsem3at", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_3_m` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("mechanical/mechanicalsem3/mechanicalsem3at.ejs", { title: "mechanicalsem3at", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/secondme")
		}
	});
});

app.get('/delete5.21/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_3_m` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/mechanicalsem3at');
	});

});

///// mechanical sem 4 at
app.get("/mechanicalsem4at", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_4_m` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("mechanical/mechanicalsem4/mechanicalsem4at.ejs", { title: "mechanicalsem4at", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/secondme")
		}
	});
});

app.get('/delete5.22/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_4_m` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/mechanicalsem4at');
	});

});

///// mechanical sem 5 at
app.get("/mechanicalsem5at", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_5_m` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("mechanical/mechanicalsem5/mechanicalsem5at.ejs", { title: "mechanicalsem5at", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/thirdme")
		}
	});
});

app.get('/delete5.23/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_5_m` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/mechanicalsem5at');
	});

});

///// mechanical sem 6 at
app.get("/mechanicalsem6at", function (req, res, next) {
	var getQuery = "SELECT * FROM `semester_6_m` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		// console.log(result);
		if (req.session.username1) {
			res.render("mechanical/mechanicalsem6/mechanicalsem6at.ejs", { title: "mechanicalsem6at", computer: result, success: "", user: req.session.user });
		} else {
			res.redirect("/thirdme")
		}
	});
});

app.get('/delete5.24/:id', function (req, res, next) {
	var id = req.params.id;

	var deleteQuery = "DELETE FROM `semester_6_m` WHERE `student_er_no`= ?";
	var query = mysql.format(deleteQuery, id);
	db.query(query, function (err) {

		if (err) throw err;
		res.redirect('/mechanicalsem6at');
	});

});

// civil sem 1 otp gen

app.post('/otp11.1', function (req, res) {
	// Capture the input fields
	var otp = req.body.otp;
	var subject = req.body.subject;

	var sql = "INSERT INTO `otp`(`otp`, `subject`) VALUES ('" + otp + "','" + subject + "')";
	db.query(sql, function (err, response) {
		if (err) throw err;
		res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
		function myFunc() {
			var otp = req.body.otp;
			var deleteQuery = "DELETE FROM `otp` WHERE `otp`= ?";
			var query = mysql.format(deleteQuery, otp);
			db.query(query, function (err) {
				// console.log('otp deleted')
	
				if (err) throw err;
				res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
				// res.redirect('/computer1');
			});
		}
	
		setTimeout(myFunc, 120000);
		
	});

	
})

// civil sem 2 otp gen

app.post('/otp11.2', function (req, res) {
	// Capture the input fields
	var otp = req.body.otp;
	var subject = req.body.subject;

	var sql = "INSERT INTO `otp`(`otp`, `subject`) VALUES ('" + otp + "','" + subject + "')";
	db.query(sql, function (err, response) {
		if (err) throw err;
		res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
		function myFunc() {
			var otp = req.body.otp;
			var deleteQuery = "DELETE FROM `otp` WHERE `otp`= ?";
			var query = mysql.format(deleteQuery, otp);
			db.query(query, function (err) {
				// console.log('otp deleted')
	
				if (err) throw err;
				res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
				// res.redirect('/computer1');
			});
		}
	
		setTimeout(myFunc, 120000);
		
	});

	
})

// civil sem 3 otp gen

app.post('/otp11.3', function (req, res) {
	// Capture the input fields
	var otp = req.body.otp;
	var subject = req.body.subject;

	var sql = "INSERT INTO `otp`(`otp`, `subject`) VALUES ('" + otp + "','" + subject + "')";
	db.query(sql, function (err, response) {
		if (err) throw err;
		res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
		function myFunc() {
			var otp = req.body.otp;
			var deleteQuery = "DELETE FROM `otp` WHERE `otp`= ?";
			var query = mysql.format(deleteQuery, otp);
			db.query(query, function (err) {
				// console.log('otp deleted')
	
				if (err) throw err;
				res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
				// res.redirect('/computer1');
			});
		}
	
		setTimeout(myFunc, 120000);
		
	});

	
})

// civil sem 4 otp gen

app.post('/otp11.4', function (req, res) {
	// Capture the input fields
	var otp = req.body.otp;
	var subject = req.body.subject;

	var sql = "INSERT INTO `otp`(`otp`, `subject`) VALUES ('" + otp + "','" + subject + "')";
	db.query(sql, function (err, response) {
		if (err) throw err;
		res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
		function myFunc() {
			var otp = req.body.otp;
			var deleteQuery = "DELETE FROM `otp` WHERE `otp`= ?";
			var query = mysql.format(deleteQuery, otp);
			db.query(query, function (err) {
				// console.log('otp deleted')
	
				if (err) throw err;
				res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
				// res.redirect('/computer1');
			});
		}
	
		setTimeout(myFunc, 120000);
		
	});

	
})

// civil sem 5 otp gen

app.post('/otp11.5', function (req, res) {
	// Capture the input fields
	var otp = req.body.otp;
	var subject = req.body.subject;

	var sql = "INSERT INTO `otp`(`otp`, `subject`) VALUES ('" + otp + "','" + subject + "')";
	db.query(sql, function (err, response) {
		if (err) throw err;
		res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
		function myFunc() {
			var otp = req.body.otp;
			var deleteQuery = "DELETE FROM `otp` WHERE `otp`= ?";
			var query = mysql.format(deleteQuery, otp);
			db.query(query, function (err) {
				// console.log('otp deleted')
	
				if (err) throw err;
				res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
				// res.redirect('/computer1');
			});
		}
	
		setTimeout(myFunc, 120000);
		
	});

	
})

// civil sem 6 otp gen

app.post('/otp11.6', function (req, res) {
	// Capture the input fields
	var otp = req.body.otp;
	var subject = req.body.subject;

	var sql = "INSERT INTO `otp`(`otp`, `subject`) VALUES ('" + otp + "','" + subject + "')";
	db.query(sql, function (err, response) {
		if (err) throw err;
		res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
		function myFunc() {
			var otp = req.body.otp;
			var deleteQuery = "DELETE FROM `otp` WHERE `otp`= ?";
			var query = mysql.format(deleteQuery, otp);
			db.query(query, function (err) {
				// console.log('otp deleted')
	
				if (err) throw err;
				res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
				// res.redirect('/computer1');
			});
		}
	
		setTimeout(myFunc, 120000);
		
	});

	
})

// computer sem 1 otp gen

app.post('/otp11.7', function (req, res) {
	// Capture the input fields
	var otp = req.body.otp;
	var subject = req.body.subject;

	var sql = "INSERT INTO `otp`(`otp`, `subject`) VALUES ('" + otp + "','" + subject + "')";
	db.query(sql, function (err, response) {
		if (err) throw err;
		res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
		function myFunc() {
			var otp = req.body.otp;
			var deleteQuery = "DELETE FROM `otp` WHERE `otp`= ?";
			var query = mysql.format(deleteQuery, otp);
			db.query(query, function (err) {
				
				// console.log('otp deleted')
	
				if (err) throw err;
				res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
				// res.redirect('/computer1');
			});
		}
	
		setTimeout(myFunc, 120000);
		
	});

	
})

// computer sem 2 otp gen

app.post('/otp11.8', function (req, res) {
	// Capture the input fields
	var otp = req.body.otp;
	var subject = req.body.subject;

	var sql = "INSERT INTO `otp`(`otp`, `subject`) VALUES ('" + otp + "','" + subject + "')";
	db.query(sql, function (err, response) {
		if (err) throw err;
		res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
		function myFunc() {
			var otp = req.body.otp;
			var deleteQuery = "DELETE FROM `otp` WHERE `otp`= ?";
			var query = mysql.format(deleteQuery, otp);
			db.query(query, function (err) {
				// console.log('otp deleted')
	
				if (err) throw err;
				res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
				// res.redirect('/computer1');
			});
		}
	
		setTimeout(myFunc, 120000);
		
	});

	
})

// computer sem 3 otp gen

app.post('/otp11.9', function (req, res) {
	// Capture the input fields
	var otp = req.body.otp;
	var subject = req.body.subject;

	var sql = "INSERT INTO `otp`(`otp`, `subject`) VALUES ('" + otp + "','" + subject + "')";
	db.query(sql, function (err, response) {
		if (err) throw err;
		res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
		function myFunc() {
			var otp = req.body.otp;
			var deleteQuery = "DELETE FROM `otp` WHERE `otp`= ?";
			var query = mysql.format(deleteQuery, otp);
			db.query(query, function (err) {
				// console.log('otp deleted')
	
				if (err) throw err;
				res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
				// res.redirect('/computer1');
			});
		}
	
		setTimeout(myFunc, 120000);
		
	});

	
})

// computer sem 4 otp gen

app.post('/otp11.10', function (req, res) {
	// Capture the input fields
	var otp = req.body.otp;
	var subject = req.body.subject;

	var sql = "INSERT INTO `otp`(`otp`, `subject`) VALUES ('" + otp + "','" + subject + "')";
	db.query(sql, function (err, response) {
		if (err) throw err;
		res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
		function myFunc() {
			var otp = req.body.otp;
			var deleteQuery = "DELETE FROM `otp` WHERE `otp`= ?";
			var query = mysql.format(deleteQuery, otp);
			db.query(query, function (err) {
				// console.log('otp deleted')
	
				if (err) throw err;
				res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
				// res.redirect('/computer1');
			});
		}
	
		setTimeout(myFunc, 120000);
		
	});

	
})

// computer sem 5 otp gen

app.post('/otp11.11', function (req, res) {
	// Capture the input fields
	var otp = req.body.otp;
	var subject = req.body.subject;

	var sql = "INSERT INTO `otp`(`otp`, `subject`) VALUES ('" + otp + "','" + subject + "')";
	db.query(sql, function (err, response) {
		if (err) throw err;
		res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
		function myFunc() {
			var otp = req.body.otp;
			var deleteQuery = "DELETE FROM `otp` WHERE `otp`= ?";
			var query = mysql.format(deleteQuery, otp);
			db.query(query, function (err) {
				// console.log('otp deleted')
	
				if (err) throw err;
				res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
				// res.redirect('/computer1');
			});
		}
	
		setTimeout(myFunc, 120000);
		
	});

	
})

// computer sem 6 otp gen

app.post('/otp11.12', function (req, res) {
	// Capture the input fields
	var otp = req.body.otp;
	var subject = req.body.subject;

	var sql = "INSERT INTO `otp`(`otp`, `subject`) VALUES ('" + otp + "','" + subject + "')";
	db.query(sql, function (err, response) {
		if (err) throw err;
		res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
		function myFunc() {
			var otp = req.body.otp;
			var deleteQuery = "DELETE FROM `otp` WHERE `otp`= ?";
			var query = mysql.format(deleteQuery, otp);
			db.query(query, function (err) {
				// console.log('otp deleted')
	
				if (err) throw err;
				res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
				// res.redirect('/computer1');
			});
		}
	
		setTimeout(myFunc, 120000);
		
	});

	
})

// electronic sem 1 otp gen

app.post('/otp11.13', function (req, res) {
	// Capture the input fields
	var otp = req.body.otp;
	var subject = req.body.subject;

	var sql = "INSERT INTO `otp`(`otp`, `subject`) VALUES ('" + otp + "','" + subject + "')";
	db.query(sql, function (err, response) {
		if (err) throw err;
		res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
		function myFunc() {
			var otp = req.body.otp;
			var deleteQuery = "DELETE FROM `otp` WHERE `otp`= ?";
			var query = mysql.format(deleteQuery, otp);
			db.query(query, function (err) {
				// console.log('otp deleted')
	
				if (err) throw err;
				res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
				// res.redirect('/computer1');
			});
		}
	
		setTimeout(myFunc, 120000);
		
	});

	
})

// electronic sem 2 otp gen

app.post('/otp11.14', function (req, res) {
	// Capture the input fields
	var otp = req.body.otp;
	var subject = req.body.subject;

	var sql = "INSERT INTO `otp`(`otp`, `subject`) VALUES ('" + otp + "','" + subject + "')";
	db.query(sql, function (err, response) {
		if (err) throw err;
		res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
		function myFunc() {
			var otp = req.body.otp;
			var deleteQuery = "DELETE FROM `otp` WHERE `otp`= ?";
			var query = mysql.format(deleteQuery, otp);
			db.query(query, function (err) {
				// console.log('otp deleted')
	
				if (err) throw err;
				res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
				// res.redirect('/computer1');
			});
		}
	
		setTimeout(myFunc, 120000);
		
	});

	
})

// electronic sem 3 otp gen

app.post('/otp11.15', function (req, res) {
	// Capture the input fields
	var otp = req.body.otp;
	var subject = req.body.subject;

	var sql = "INSERT INTO `otp`(`otp`, `subject`) VALUES ('" + otp + "','" + subject + "')";
	db.query(sql, function (err, response) {
		if (err) throw err;
		res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
		function myFunc() {
			var otp = req.body.otp;
			var deleteQuery = "DELETE FROM `otp` WHERE `otp`= ?";
			var query = mysql.format(deleteQuery, otp);
			db.query(query, function (err) {
				// console.log('otp deleted')
	
				if (err) throw err;
				res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
				// res.redirect('/computer1');
			});
		}
	
		setTimeout(myFunc, 120000);
		
	});

	
})

// electronic sem 4 otp gen

app.post('/otp11.16', function (req, res) {
	// Capture the input fields
	var otp = req.body.otp;
	var subject = req.body.subject;

	var sql = "INSERT INTO `otp`(`otp`, `subject`) VALUES ('" + otp + "','" + subject + "')";
	db.query(sql, function (err, response) {
		if (err) throw err;
		res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
		function myFunc() {
			var otp = req.body.otp;
			var deleteQuery = "DELETE FROM `otp` WHERE `otp`= ?";
			var query = mysql.format(deleteQuery, otp);
			db.query(query, function (err) {
				// console.log('otp deleted')
	
				if (err) throw err;
				res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
				// res.redirect('/computer1');
			});
		}
	
		setTimeout(myFunc, 120000);
		
	});

	
})

// electronic sem 5 otp gen

app.post('/otp11.17', function (req, res) {
	// Capture the input fields
	var otp = req.body.otp;
	var subject = req.body.subject;

	var sql = "INSERT INTO `otp`(`otp`, `subject`) VALUES ('" + otp + "','" + subject + "')";
	db.query(sql, function (err, response) {
		if (err) throw err;
		res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
		function myFunc() {
			var otp = req.body.otp;
			var deleteQuery = "DELETE FROM `otp` WHERE `otp`= ?";
			var query = mysql.format(deleteQuery, otp);
			db.query(query, function (err) {
				// console.log('otp deleted')
	
				if (err) throw err;
				res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
				// res.redirect('/computer1');
			});
		}
	
		setTimeout(myFunc, 120000);
		
	});

	
})

// electronic sem 6 otp gen

app.post('/otp11.18', function (req, res) {
	// Capture the input fields
	var otp = req.body.otp;
	var subject = req.body.subject;

	var sql = "INSERT INTO `otp`(`otp`, `subject`) VALUES ('" + otp + "','" + subject + "')";
	db.query(sql, function (err, response) {
		if (err) throw err;
		res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
		function myFunc() {
			var otp = req.body.otp;
			var deleteQuery = "DELETE FROM `otp` WHERE `otp`= ?";
			var query = mysql.format(deleteQuery, otp);
			db.query(query, function (err) {
				// console.log('otp deleted')
	
				if (err) throw err;
				res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
				// res.redirect('/computer1');
			});
		}
	
		setTimeout(myFunc, 120000);
		
	});

	
})

// mechanical sem 1 otp gen

app.post('/otp11.19', function (req, res) {
	// Capture the input fields
	var otp = req.body.otp;
	var subject = req.body.subject;

	var sql = "INSERT INTO `otp`(`otp`, `subject`) VALUES ('" + otp + "','" + subject + "')";
	db.query(sql, function (err, response) {
		if (err) throw err;
		res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
		function myFunc() {
			var otp = req.body.otp;
			var deleteQuery = "DELETE FROM `otp` WHERE `otp`= ?";
			var query = mysql.format(deleteQuery, otp);
			db.query(query, function (err) {
				// console.log('otp deleted')
	
				if (err) throw err;
				res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
				// res.redirect('/computer1');
			});
		}
	
		setTimeout(myFunc, 120000);
		
	});

	
})

// mechanical sem 2 otp gen

app.post('/otp11.20', function (req, res) {
	// Capture the input fields
	var otp = req.body.otp;
	var subject = req.body.subject;

	var sql = "INSERT INTO `otp`(`otp`, `subject`) VALUES ('" + otp + "','" + subject + "')";
	db.query(sql, function (err, response) {
		if (err) throw err;
		res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
		function myFunc() {
			var otp = req.body.otp;
			var deleteQuery = "DELETE FROM `otp` WHERE `otp`= ?";
			var query = mysql.format(deleteQuery, otp);
			db.query(query, function (err) {
				// console.log('otp deleted')
	
				if (err) throw err;
				res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
				// res.redirect('/computer1');
			});
		}
	
		setTimeout(myFunc, 120000);
		
	});

	
})

// mechanical sem 3 otp gen

app.post('/otp11.21', function (req, res) {
	// Capture the input fields
	var otp = req.body.otp;
	var subject = req.body.subject;

	var sql = "INSERT INTO `otp`(`otp`, `subject`) VALUES ('" + otp + "','" + subject + "')";
	db.query(sql, function (err, response) {
		if (err) throw err;
		res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
		function myFunc() {
			var otp = req.body.otp;
			var deleteQuery = "DELETE FROM `otp` WHERE `otp`= ?";
			var query = mysql.format(deleteQuery, otp);
			db.query(query, function (err) {
				// console.log('otp deleted')
	
				if (err) throw err;
				res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
				// res.redirect('/computer1');
			});
		}
	
		setTimeout(myFunc, 120000);
		
	});

	
})

// mechanical sem 4 otp gen

app.post('/otp11.22', function (req, res) {
	// Capture the input fields
	var otp = req.body.otp;
	var subject = req.body.subject;

	var sql = "INSERT INTO `otp`(`otp`, `subject`) VALUES ('" + otp + "','" + subject + "')";
	db.query(sql, function (err, response) {
		if (err) throw err;
		res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
		function myFunc() {
			var otp = req.body.otp;
			var deleteQuery = "DELETE FROM `otp` WHERE `otp`= ?";
			var query = mysql.format(deleteQuery, otp);
			db.query(query, function (err) {
				// console.log('otp deleted')
	
				if (err) throw err;
				res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
				// res.redirect('/computer1');
			});
		}
	
		setTimeout(myFunc, 120000);
		
	});

	
})

// mechanical sem 5 otp gen

app.post('/otp11.23', function (req, res) {
	// Capture the input fields
	var otp = req.body.otp;
	var subject = req.body.subject;

	var sql = "INSERT INTO `otp`(`otp`, `subject`) VALUES ('" + otp + "','" + subject + "')";
	db.query(sql, function (err, response) {
		if (err) throw err;
		res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
		function myFunc() {
			var otp = req.body.otp;
			var deleteQuery = "DELETE FROM `otp` WHERE `otp`= ?";
			var query = mysql.format(deleteQuery, otp);
			db.query(query, function (err) {
				// console.log('otp deleted')
	
				if (err) throw err;
				res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
				// res.redirect('/computer1');
			});
		}
	
		setTimeout(myFunc, 120000);
		
	});

	
})

// mechanical sem 6 otp gen

app.post('/otp11.24', function (req, res) {
	// Capture the input fields
	var otp = req.body.otp;
	var subject = req.body.subject;

	var sql = "INSERT INTO `otp`(`otp`, `subject`) VALUES ('" + otp + "','" + subject + "')";
	db.query(sql, function (err, response) {
		if (err) throw err;
		res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
		function myFunc() {
			var otp = req.body.otp;
			var deleteQuery = "DELETE FROM `otp` WHERE `otp`= ?";
			var query = mysql.format(deleteQuery, otp);
			db.query(query, function (err) {
				// console.log('otp deleted')
	
				if (err) throw err;
				res.render('teacher/otpgen.ejs', { title: "otp", otp: "OTP GENRATED" })
				// res.redirect('/computer1');
			});
		}
	
		setTimeout(myFunc, 120000);
		
	});

	
})

// civil sem 1 analytics
app.get("/civilsem1an", function (req, res, next) {
	var date=req.body.date;
	var date1=req.body.date1;
		//   console.log(req.body);
	var updateQuery = "SELECT AVG(english) as english,AVG(basic_science) as basic_science,AVG(basic_mathematics) as basic_mathematics,AVG(fundamental_of_ict) as fundamental_of_ict,AVG(engineering_graphics) as engineering_graphics,AVG(workshop_practice) as workshop_practice FROM `semester_mark_1_ce` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999 ;SELECT COUNT(student_er_no) as erno,SUM(english) as english,SUM(basic_science) as basic_science,SUM(basic_mathematics) as basic_mathematics,SUM(fundamental_of_ict) as fundamental_of_ict,SUM(engineering_graphics) as engineering_graphics,SUM(workshop_practice) as workshop_practice FROM `semester_1_ce` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999;SELECT * FROM `civil_dept` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999;SELECT COUNT(`student_er_no`) AS stu FROM `civil_dept` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999";
	var sql = mysql.format(updateQuery, [date,date1]);
	db.query(sql, function (err, result) {
		if (res, result) {
			var string = JSON.stringify(result);
			var json = JSON.parse(string);
			// console.log(json);
			// console.log(json[0]);
			// console.log(json[1]);
			// console.log(json[2]);
			// console.log(json[3]);


			res.render("principal/civil/civilsem1/civilsem1an.ejs", { data: json, success: "", user: req.session.user });
		
		}
	
	});
});

// civil sem 2 analytics
app.get("/civilsem2an", function (req, res, next) {
	var date=req.body.date;
	var date1=req.body.date1;
		//   console.log(req.body);
	var updateQuery = "SELECT AVG(applied_mathematics) as applied_mathematics,AVG(applied_science) as applied_science,AVG(applied_mechanics) as applied_mechanics,AVG(construction_materials) as construction_materials,AVG(basic_surveying) as basic_surveying,AVG(civil_engineering_workshop_and_practice) as civil_engineering_workshop_and_practice,AVG(business_communication_using_computers) as business_communication_using_computers FROM `semester_mark_2_ce` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999 ;SELECT COUNT(student_er_no) as erno,SUM(applied_mathematics) as applied_mathematics,SUM(applied_science) as applied_science,SUM(applied_mechanics) as applied_mechanics,SUM(construction_materials) as construction_materials,SUM(basic_surveying) as basic_surveying,SUM(civil_engineering_workshop_and_practice) as civil_engineering_workshop_and_practice,SUM(business_communication_using_computers) as business_communication_using_computers FROM `semester_2_ce` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999;SELECT * FROM `civil_dept` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999;SELECT COUNT(`student_er_no`) AS stu FROM `civil_dept` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999";
	var sql = mysql.format(updateQuery, [date,date1]);
	db.query(sql, function (err, result) {
		if (res, result) {
			var string = JSON.stringify(result);
			var json = JSON.parse(string);
			// console.log(json);
			// console.log(json[0]);
			// console.log(json[1]);
			// console.log(json[2]);
			// console.log(json[3]);


			res.render("principal/civil/civilsem2/civilsem2an.ejs", { data: json, success: "", user: req.session.user });
		
		}
	
	});
});

// civil sem 3 analytics
app.get("/civilsem3an", function (req, res, next) {
	var date=req.body.date;
	var date1=req.body.date1;
		//   console.log(req.body);
	var updateQuery = "SELECT AVG(advance_surveying) as advance_surveying,AVG(highway_engineering) as highway_engineering,AVG(mechanics_of_structures) as mechanics_of_structures,AVG(building_construction) as building_construction,AVG(concrete_technology) as concrete_technology,AVG(computer_aided_drawing) as computer_aided_drawing FROM `semester_mark_3_ce` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999 ;SELECT COUNT(student_er_no) as erno,SUM(advance_surveying) as advance_surveying,SUM(highway_engineering) as highway_engineering,SUM(mechanics_of_structures) as mechanics_of_structures,SUM(building_construction) as building_construction,SUM(concrete_technology) as concrete_technology,SUM(computer_aided_drawing) as computer_aided_drawing FROM `semester_3_ce` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999;SELECT * FROM `civil_dept` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999;SELECT COUNT(`student_er_no`) AS stu FROM `civil_dept` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999";
	var sql = mysql.format(updateQuery, [date,date1]);
	db.query(sql, function (err, result) {
		if (res, result) {
			var string = JSON.stringify(result);
			var json = JSON.parse(string);
			// console.log(json);
			// console.log(json[0]);
			// console.log(json[1]);
			// console.log(json[2]);
			// console.log(json[3]);


			res.render("principal/civil/civilsem3/civilsem3an.ejs", { data: json, success: "", user: req.session.user });
		
		}
	
	});
});

// civil sem 4 analytics
app.get("/civilsem4an", function (req, res, next) {
	var date=req.body.date;
	var date1=req.body.date1;
		//   console.log(req.body);
	var updateQuery = "SELECT AVG(hydraulics) as hydraulics,AVG(theory_of_structures) as theory_of_structures,AVG(railway_and_bridge_engineering) as railway_and_bridge_engineering,AVG(geo_technical_engineering) as geo_technical_engineering,AVG(building_planning_and_drawing) as building_planning_and_drawing,AVG(environmental_studies) as environmental_studies FROM `semester_mark_4_ce` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999 ;SELECT COUNT(student_er_no) as erno,SUM(hydraulics) as hydraulics,SUM(theory_of_structures) as theory_of_structures,SUM(railway_and_bridge_engineering) as railway_and_bridge_engineering,SUM(geo_technical_engineering) as geo_technical_engineering,SUM(building_planning_and_drawing) as building_planning_and_drawing,SUM(environmental_studies) as environmental_studies FROM `semester_4_ce` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999;SELECT * FROM `civil_dept` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999;SELECT COUNT(`student_er_no`) AS stu FROM `civil_dept` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999";
	var sql = mysql.format(updateQuery, [date,date1]);
	db.query(sql, function (err, result) {
		if (res, result) {
			var string = JSON.stringify(result);
			var json = JSON.parse(string);
			// console.log(json);
			// console.log(json[0]);
			// console.log(json[1]);
			// console.log(json[2]);
			// console.log(json[3]);


			res.render("principal/civil/civilsem4/civilsem4an.ejs", { data: json, success: "", user: req.session.user });
		
		}
	
	});
});

// civil sem 5 analytics
app.get("/civilsem5an", function (req, res, next) {
	var date=req.body.date;
	var date1=req.body.date1;
		//   console.log(req.body);
	var updateQuery = "SELECT AVG(water_resource_engineering) as water_resource_engineering,AVG(design_of_steel_and_rcc_structure) as design_of_steel_and_rcc_structure,AVG(estimating_costing_and_valuation) as estimating_costing_and_valuation,AVG(public_health_engineering) as public_health_engineering,AVG(traffic_engineering) as traffic_engineering,AVG(industrial_training) as industrial_training,AVG(capstone_project_planning) as capstone_project_planning FROM `semester_mark_5_ce` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999 ;SELECT COUNT(student_er_no) as erno,SUM(water_resource_engineering) as water_resource_engineering,SUM(design_of_steel_and_rcc_structure) as design_of_steel_and_rcc_structure,SUM(estimating_costing_and_valuation) as estimating_costing_and_valuation,SUM(public_health_engineering) as public_health_engineering,SUM(traffic_engineering) as traffic_engineering,SUM(industrial_training) as industrial_training,SUM(capstone_project_planning) as capstone_project_planning FROM `semester_5_ce` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999;SELECT * FROM `civil_dept` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999;SELECT COUNT(`student_er_no`) AS stu FROM `civil_dept` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999";
	var sql = mysql.format(updateQuery, [date,date1]);
	db.query(sql, function (err, result) {
		if (res, result) {
			var string = JSON.stringify(result);
			var json = JSON.parse(string);
			// console.log(json);
			// console.log(json[0]);
			// console.log(json[1]);
			// console.log(json[2]);
			// console.log(json[3]);


			res.render("principal/civil/civilsem5/civilsem5an.ejs", { data: json, success: "", user: req.session.user });
		
		}
	
	});
});

// civil sem 6 analytics
app.get("/civilsem6an", function (req, res, next) {
	var date=req.body.date;
	var date1=req.body.date1;
		//   console.log(req.body);
	var updateQuery = "SELECT AVG(management) as management,AVG(contracts_amd_accounts) as contracts_amd_accounts,AVG(maintenance_and_repairs_of_structure) as maintenance_and_repairs_of_structure,AVG(emerging_trends_in_civil_engineering) as emerging_trends_in_civil_engineering,AVG(solid_waste_management) as solid_waste_management,AVG(capstone_project_execution_and_report_writing) as capstone_project_execution_and_report_writing,AVG(construction_management) as construction_management,AVG(enterprenureship_development) as enterprenureship_development FROM `semester_mark_6_ce` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999 ;SELECT COUNT(student_er_no) as erno,SUM(management) as management,SUM(contracts_amd_accounts) as contracts_amd_accounts,SUM(maintenance_and_repairs_of_structure) as maintenance_and_repairs_of_structure,SUM(emerging_trends_in_civil_engineering) as emerging_trends_in_civil_engineering,SUM(solid_waste_management) as solid_waste_management,SUM(capstone_project_execution_and_report_writing) as capstone_project_execution_and_report_writing,SUM(construction_management) as construction_management,SUM(enterprenureship_development) as enterprenureship_development FROM `semester_6_ce` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999;SELECT * FROM `civil_dept` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999;SELECT COUNT(`student_er_no`) AS stu FROM `civil_dept` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999";
	var sql = mysql.format(updateQuery, [date,date1]);
	db.query(sql, function (err, result) {
		if (res, result) {
			var string = JSON.stringify(result);
			var json = JSON.parse(string);
			// console.log(json);
			// console.log(json[0]);
			// console.log(json[1]);
			// console.log(json[2]);
			// console.log(json[3]);


			res.render("principal/civil/civilsem6/civilsem6an.ejs", { data: json, success: "", user: req.session.user });
		
		}
	
	});
});

// computer sem 1 analytics
app.get("/computersem1an", function (req, res, next) {
	var date=req.body.date;
	var date1=req.body.date1;
		//   console.log(req.body);
	var updateQuery = "SELECT AVG(english) as english,AVG(basic_science) as basic_science,AVG(basic_mathematics) as basic_mathematics,AVG(fundamental_of_ict) as fundamental_of_ict,AVG(engineering_graphics) as engineering_graphics,AVG(workshop_practice) as workshop_practice FROM `semester_mark_1_c` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999 ;SELECT COUNT(student_er_no) as erno,SUM(english) as english,SUM(basic_science) as basic_science,SUM(basic_mathematics) as basic_mathematics,SUM(fundamental_of_ict) as fundamental_of_ict,SUM(engineering_graphics) as engineering_graphics,SUM(workshop_practice) as workshop_practice FROM `semester_1_c` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999;SELECT * FROM `computer_dept` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999;SELECT COUNT(`student_er_no`) AS stu FROM `computer_dept` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999";
	var sql = mysql.format(updateQuery, [date,date1]);
	db.query(sql, function (err, result) {
		if (res, result) {
			var string = JSON.stringify(result);
			var json = JSON.parse(string);
			// console.log(json);
			// console.log(json[0]);
			// console.log(json[1]);
			// console.log(json[2]);
			// console.log(json[3]);


			res.render("principal/computer/computersem1/computersem1an.ejs", { data: json, success: "", user: req.session.user });
		
		}
	
	});
});

// computer sem 2 analytics
app.get("/computersem2an", function (req, res, next) {
	var date=req.body.date;
	var date1=req.body.date1;
		//   console.log(req.body);
	var updateQuery = "SELECT AVG(elements_of_electrical_engineering) as elements_of_electrical_engineering,AVG(applied_mathematics) as applied_mathematics,AVG(basic_electronics) as basic_electronics,AVG(programming_in_c) as programming_in_c,AVG(business_communication_using_computers) as business_communication_using_computers,AVG(computer_peripheral_and_hardware_maintenance) as computer_peripheral_and_hardware_maintenance,AVG(webpage_designing_with_html) as webpage_designing_with_html FROM `semester_mark_2_c` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999 ;SELECT COUNT(student_er_no) as erno,SUM(elements_of_electrical_engineering) as elements_of_electrical_engineering,SUM(applied_mathematics) as applied_mathematics,SUM(basic_electronics) as basic_electronics,SUM(programming_in_c) as programming_in_c,SUM(business_communication_using_computers) as business_communication_using_computers,SUM(computer_peripheral_and_hardware_maintenance) as computer_peripheral_and_hardware_maintenance,SUM(webpage_designing_with_html) as webpage_designing_with_html FROM `semester_2_c` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999;SELECT * FROM `computer_dept` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999;SELECT COUNT(`student_er_no`) AS stu FROM `computer_dept` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999";
	var sql = mysql.format(updateQuery, [date,date1]);
	db.query(sql, function (err, result) {
		if (res, result) {
			var string = JSON.stringify(result);
			var json = JSON.parse(string);
			// console.log(json);
			// console.log(json[0]);
			// console.log(json[1]);
			// console.log(json[2]);
			// console.log(json[3]);


			res.render("principal/computer/computersem2/computersem2an.ejs", { data: json, success: "", user: req.session.user });
		
		}
	
	});
});

// computer sem 3 analytics
app.get("/computersem3an", function (req, res, next) {
	var date=req.body.date;
	var date1=req.body.date1;
		//   console.log(req.body);
	var updateQuery = "SELECT AVG(object_oriented_programming_using_cplus) as object_oriented_programming_using_cplus,AVG(data_structure_using_c) as data_structure_using_c,AVG(computer_graphics) as computer_graphics,AVG(database_management_system) as database_management_system,AVG(digital_techniques) as digital_techniques FROM `semester_mark_3_c` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999 ;SELECT COUNT(student_er_no) as erno,SUM(object_oriented_programming_using_cplus) as object_oriented_programming_using_cplus,SUM(data_structure_using_c) as data_structure_using_c,SUM(computer_graphics) as computer_graphics,SUM(database_management_system) as database_management_system,SUM(digital_techniques) as digital_techniques FROM `semester_3_c` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999;SELECT * FROM `computer_dept` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999;SELECT COUNT(`student_er_no`) AS stu FROM `computer_dept` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999";
	var sql = mysql.format(updateQuery, [date,date1]);
	db.query(sql, function (err, result) {
		if (res, result) {
			var string = JSON.stringify(result);
			var json = JSON.parse(string);
			// console.log(json);
			// console.log(json[0]);
			// console.log(json[1]);
			// console.log(json[2]);
			// console.log(json[3]);


			res.render("principal/computer/computersem3/computersem3an.ejs", { data: json, success: "", user: req.session.user });
		
		}
	
	});
});

// computer sem 4 analytics
app.get("/computersem4an", function (req, res, next) {
	var date=req.body.date;
	var date1=req.body.date1;
		//   console.log(req.body);
	var updateQuery = "SELECT AVG(java_programming) as java_programming,AVG(software_engineering) as software_engineering,AVG(data_communication_and_computer_network) as data_communication_and_computer_network,AVG(microprocessors) as microprocessors,AVG(gui_application_development_using_vbnet) as gui_application_development_using_vbnet FROM `semester_mark_4_c` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999 ;SELECT COUNT(student_er_no) as erno,SUM(java_programming) as java_programming,SUM(software_engineering) as software_engineering,SUM(data_communication_and_computer_network) as data_communication_and_computer_network,SUM(microprocessors) as microprocessors,SUM(gui_application_development_using_vbnet) as gui_application_development_using_vbnet FROM `semester_4_c` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999;SELECT * FROM `computer_dept` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999;SELECT COUNT(`student_er_no`) AS stu FROM `computer_dept` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999";
	var sql = mysql.format(updateQuery, [date,date1]);
	db.query(sql, function (err, result) {
		if (res, result) {
			var string = JSON.stringify(result);
			var json = JSON.parse(string);
			// console.log(json);
			// console.log(json[0]);
			// console.log(json[1]);
			// console.log(json[2]);
			// console.log(json[3]);


			res.render("principal/computer/computersem4/computersem4an.ejs", { data: json, success: "", user: req.session.user });
		
		}
	
	});
});

// computer sem 5 analytics
app.get("/computersem5an", function (req, res, next) {
	var date=req.body.date;
	var date1=req.body.date1;
		//   console.log(req.body);
	var updateQuery = "SELECT AVG(environmental_studies) as environmental_studies,AVG(operating_system) as operating_system,AVG(advance_java_programming) as advance_java_programming,AVG(software_testing) as software_testing,AVG(advance_computer_network) as advance_computer_network,AVG(industrial_training) as industrial_training,AVG(capstone_project_planning) as capstone_project_planning FROM `semester_mark_5_c` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999 ;SELECT COUNT(student_er_no) as erno,SUM(environmental_studies) as environmental_studies,SUM(operating_system) as operating_system,SUM(advance_java_programming) as advance_java_programming,SUM(software_testing) as software_testing,SUM(advance_computer_network) as advance_computer_network,SUM(industrial_training) as industrial_training,SUM(capstone_project_planning) as capstone_project_planning FROM `semester_5_c` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999;SELECT * FROM `computer_dept` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999;SELECT COUNT(`student_er_no`) AS stu FROM `computer_dept` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999";
	var sql = mysql.format(updateQuery, [date,date1]);
	db.query(sql, function (err, result) {
		if (res, result) {
			var string = JSON.stringify(result);
			var json = JSON.parse(string);
			// console.log(json);
			// console.log(json[0]);
			// console.log(json[1]);
			// console.log(json[2]);
			// console.log(json[3]);


			res.render("principal/computer/computersem5/computersem5an.ejs", { data: json, success: "", user: req.session.user });
		
		}
	
	});
});

// computer sem 6 analytics
app.get("/computersem6an", function (req, res, next) {
	var date=req.body.date;
	var date1=req.body.date1;
		//   console.log(req.body);
	var updateQuery = "SELECT AVG(management) as management,AVG(programming_with_python) as programming_with_python,AVG(mobile_application_development) as mobile_application_development,AVG(emerging_trends_in_computer_and_information_technology) as emerging_trends_in_computer_and_information_technology,AVG(network_and_information_security) as network_and_information_security,AVG(enterpreneurship_development) as enterpreneurship_development,AVG(capstone_project_execution_and_report_writing) as capstone_project_execution_and_report_writing FROM `semester_mark_6_c` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999 ;SELECT COUNT(student_er_no) as erno,SUM(management) as management,SUM(programming_with_python) as programming_with_python,SUM(mobile_application_development) as mobile_application_development,SUM(emerging_trends_in_computer_and_information_technology) as emerging_trends_in_computer_and_information_technology,SUM(network_and_information_security) as network_and_information_security,SUM(enterpreneurship_development) as enterpreneurship_development,SUM(capstone_project_execution_and_report_writing) as capstone_project_execution_and_report_writing FROM `semester_6_c` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999;SELECT * FROM `computer_dept` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999;SELECT COUNT(`student_er_no`) AS stu FROM `computer_dept` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999";
	var sql = mysql.format(updateQuery, [date,date1]);
	db.query(sql, function (err, result) {
		if (res, result) {
			var string = JSON.stringify(result);
			var json = JSON.parse(string);
			// console.log(json);
			// console.log(json[0]);
			// console.log(json[1]);
			// console.log(json[2]);
			// console.log(json[3]);


			res.render("principal/computer/computersem6/computersem6an.ejs", { data: json, success: "", user: req.session.user });
		
		}
	
	});
});

// electronic sem 1 analytics
app.get("/electronicsem1an", function (req, res, next) {
	var date=req.body.date;
	var date1=req.body.date1;
		//   console.log(req.body);
	var updateQuery = "SELECT AVG(english) as english,AVG(basic_science) as basic_science,AVG(basic_mathematics) as basic_mathematics,AVG(fundamental_of_ict) as fundamental_of_ict,AVG(engineering_graphics) as engineering_graphics,AVG(workshop_practice) as workshop_practice FROM `semester_mark_1_e` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999 ;SELECT COUNT(student_er_no) as erno,SUM(english) as english,SUM(basic_science) as basic_science,SUM(basic_mathematics) as basic_mathematics,SUM(fundamental_of_ict) as fundamental_of_ict,SUM(engineering_graphics) as engineering_graphics,SUM(workshop_practice) as workshop_practice FROM `semester_1_e` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999;SELECT * FROM `electronic_dept` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999;SELECT COUNT(`student_er_no`) AS stu FROM `electronic_dept` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999";
	var sql = mysql.format(updateQuery, [date,date1]);
	db.query(sql, function (err, result) {
		if (res, result) {
			var string = JSON.stringify(result);
			var json = JSON.parse(string);
			// console.log(json);
			// console.log(json[0]);
			// console.log(json[1]);
			// console.log(json[2]);
			// console.log(json[3]);


			res.render("principal/electronics/electronicsem1/electronicsem1an.ejs", { data: json, success: "", user: req.session.user });
		
		}
	
	});
});

// electronic sem 2 analytics
app.get("/electronicsem2an", function (req, res, next) {
	var date=req.body.date;
	var date1=req.body.date1;
		//   console.log(req.body);
	var updateQuery = "SELECT AVG(applied_mathematics) as applied_mathematics,AVG(elements_of_electrical_engineering) as elements_of_electrical_engineering,AVG(basic_electronics) as basic_electronics,AVG(electronic_engineering_materials) as electronic_engineering_materials,AVG(c_programming_languages) as c_programming_languages,AVG(business_communication_using_computers) as business_communication_using_computers FROM `semester_mark_2_e` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999 ;SELECT COUNT(student_er_no) as erno,SUM(applied_mathematics) as applied_mathematics,SUM(elements_of_electrical_engineering) as elements_of_electrical_engineering,SUM(basic_electronics) as basic_electronics,SUM(electronic_engineering_materials) as electronic_engineering_materials,SUM(c_programming_languages) as c_programming_languages,SUM(business_communication_using_computers) as business_communication_using_computers FROM `semester_2_e` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999;SELECT * FROM `electronic_dept` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999;SELECT COUNT(`student_er_no`) AS stu FROM `electronic_dept` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999";
	var sql = mysql.format(updateQuery, [date,date1]);
	db.query(sql, function (err, result) {
		if (res, result) {
			var string = JSON.stringify(result);
			var json = JSON.parse(string);
			// console.log(json);
			// console.log(json[0]);
			// console.log(json[1]);
			// console.log(json[2]);
			// console.log(json[3]);


			res.render("principal/electronics/electronicsem2/electronicsem2an.ejs", { data: json, success: "", user: req.session.user });
		
		}
	
	});
});

// electronic sem 3 analytics
app.get("/electronicsem3an", function (req, res, next) {
	var date=req.body.date;
	var date1=req.body.date1;
		//   console.log(req.body);
	var updateQuery = "SELECT AVG(digital_techniques) as digital_techniques,AVG(applied_electronics) as applied_electronics,AVG(electric_circuits_and_networks) as electric_circuits_and_networks,AVG(electronic_measurement_and_instrumentation) as electronic_measurement_and_instrumentation,AVG(principles_of_electronic_communication) as principles_of_electronic_communication FROM `semester_mark_3_e` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999 ;SELECT COUNT(student_er_no) as erno,SUM(principles_of_electronic_communication) as principles_of_electronic_communication,SUM(applied_electronics) as applied_electronics,SUM(electric_circuits_and_networks) as electric_circuits_and_networks,SUM(electronic_measurement_and_instrumentation) as electronic_measurement_and_instrumentation,SUM(digital_techniques) as digital_techniques FROM `semester_3_e` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999;SELECT * FROM `electronic_dept` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999;SELECT COUNT(`student_er_no`) AS stu FROM `electronic_dept` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999";
	var sql = mysql.format(updateQuery, [date,date1]);
	db.query(sql, function (err, result) {
		if (res, result) {
			var string = JSON.stringify(result);
			var json = JSON.parse(string);
			// console.log(json);
			// console.log(json[0]);
			// console.log(json[1]);
			// console.log(json[2]);
			// console.log(json[3]);


			res.render("principal/electronics/electronicsem3/electronicsem3an.ejs", { data: json, success: "", user: req.session.user });
		
		}
	
	});
});

// electronic sem 4 analytics
app.get("/electronicsem4an", function (req, res, next) {
	var date=req.body.date;
	var date1=req.body.date1;
		//   console.log(req.body);
	var updateQuery = "SELECT AVG(linear_integrated_circuits) as linear_integrated_circuits,AVG(consumer_electronics) as consumer_electronics,AVG(microcontroller_and_application) as microcontroller_and_application,AVG(basic_power_electronics) as basic_power_electronics,AVG(digital_communication_systems) as digital_communication_systems,AVG(maintenance_of_electronics_equipments_and_eda_tools_practices) as maintenance_of_electronics_equipments_and_eda_tools_practices FROM `semester_mark_4_e` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999 ;SELECT COUNT(student_er_no) as erno,SUM(linear_integrated_circuits) as linear_integrated_circuits,SUM(consumer_electronics) as consumer_electronics,SUM(microcontroller_and_application) as microcontroller_and_application,SUM(basic_power_electronics) as basic_power_electronics,SUM(digital_communication_systems) as digital_communication_systems,SUM(maintenance_of_electronics_equipments_and_eda_tools_practices) as maintenance_of_electronics_equipments_and_eda_tools_practices FROM `semester_4_e` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999;SELECT * FROM `electronic_dept` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999;SELECT COUNT(`student_er_no`) AS stu FROM `electronic_dept` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999";
	var sql = mysql.format(updateQuery, [date,date1]);
	db.query(sql, function (err, result) {
		if (res, result) {
			var string = JSON.stringify(result);
			var json = JSON.parse(string);
			// console.log(json);
			// console.log(json[0]);
			// console.log(json[1]);
			// console.log(json[2]);
			// console.log(json[3]);


			res.render("principal/electronics/electronicsem4/electronicsem4an.ejs", { data: json, success: "", user: req.session.user });
		
		}
	
	});
});

// electronic sem 5 analytics
app.get("/electronicsem5an", function (req, res, next) {
	var date=req.body.date;
	var date1=req.body.date1;
		//   console.log(req.body);
	var updateQuery = "SELECT AVG(environmental_studies) as environmental_studies,AVG(control_system) as control_system,AVG(embedded_system) as embedded_system,AVG(mobile_and_wireless_communication) as mobile_and_wireless_communication,AVG(microwave_and_radar) as microwave_and_radar,AVG(industrial_training) as industrial_training,AVG(capstone_project_planning) as capstone_project_planning FROM `semester_mark_5_e` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999 ;SELECT COUNT(student_er_no) as erno,SUM(environmental_studies) as environmental_studies,SUM(control_system) as control_system,SUM(embedded_system) as embedded_system,SUM(mobile_and_wireless_communication) as mobile_and_wireless_communication,SUM(microwave_and_radar) as microwave_and_radar,SUM(industrial_training) as industrial_training,SUM(capstone_project_planning) as capstone_project_planning FROM `semester_5_e` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999;SELECT * FROM `electronic_dept` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999;SELECT COUNT(`student_er_no`) AS stu FROM `electronic_dept` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999";
	var sql = mysql.format(updateQuery, [date,date1]);
	db.query(sql, function (err, result) {
		if (res, result) {
			var string = JSON.stringify(result);
			var json = JSON.parse(string);
			// console.log(json);
			// console.log(json[0]);
			// console.log(json[1]);
			// console.log(json[2]);
			// console.log(json[3]);


			res.render("principal/electronics/electronicsem5/electronicsem5an.ejs", { data: json, success: "", user: req.session.user });
		
		}
	
	});
});

// electronic sem 6 analytics
app.get("/electronicsem6an", function (req, res, next) {
	var date=req.body.date;
	var date1=req.body.date1;
		//   console.log(req.body);
	var updateQuery = "SELECT AVG(management) as management,AVG(computer_networking_and_data_communication) as computer_networking_and_data_communication,AVG(emerging_trends_in_electronics) as emerging_trends_in_electronics,AVG(optical_network_and_satellite_communication) as optical_network_and_satellite_communication,AVG(enterpreneurship_development) as enterpreneurship_development,AVG(capstone_project_execution_and_report_writing) as capstone_project_execution_and_report_writing,AVG(vlsi_with_vhdl) as vlsi_with_vhdl FROM `semester_mark_6_e` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999 ;SELECT COUNT(student_er_no) as erno,SUM(management) as management,SUM(computer_networking_and_data_communication) as computer_networking_and_data_communication,SUM(emerging_trends_in_electronics) as emerging_trends_in_electronics,SUM(optical_network_and_satellite_communication) as optical_network_and_satellite_communication,SUM(enterpreneurship_development) as enterpreneurship_development,SUM(capstone_project_execution_and_report_writing) as capstone_project_execution_and_report_writing,SUM(vlsi_with_vhdl) as vlsi_with_vhdl FROM `semester_6_e` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999;SELECT * FROM `electronic_dept` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999;SELECT COUNT(`student_er_no`) AS stu FROM `electronic_dept` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999";
	var sql = mysql.format(updateQuery, [date,date1]);
	db.query(sql, function (err, result) {
		if (res, result) {
			var string = JSON.stringify(result);
			var json = JSON.parse(string);
			console.log(json);
			// console.log(json[0]);
			// console.log(json[1]);
			// console.log(json[2]);
			// console.log(json[3]);


			res.render("principal/electronics/electronicsem6/electronicsem6an.ejs", { data: json, success: "", user: req.session.user });
		
		}
	
	});
});

// mechanical sem 1 analytics
app.get("/mechanicalsem1an", function (req, res, next) {
	var date=req.body.date;
	var date1=req.body.date1;
		//   console.log(req.body);
	var updateQuery = "SELECT AVG(english) as english,AVG(basic_science) as basic_science,AVG(basic_mathematics) as basic_mathematics,AVG(fundamental_of_ict) as fundamental_of_ict,AVG(engineering_graphics) as engineering_graphics,AVG(workshop_practice) as workshop_practice FROM `semester_mark_1_m` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999 ;SELECT COUNT(student_er_no) as erno,SUM(english) as english,SUM(basic_science) as basic_science,SUM(basic_mathematics) as basic_mathematics,SUM(fundamental_of_ict) as fundamental_of_ict,SUM(engineering_graphics) as engineering_graphics,SUM(workshop_practice) as workshop_practice FROM `semester_1_m` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999;SELECT * FROM `mechanical_dept` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999;SELECT COUNT(`student_er_no`) AS stu FROM `mechanical_dept` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999";
	var sql = mysql.format(updateQuery, [date,date1]);
	db.query(sql, function (err, result) {
		if (res, result) {
			var string = JSON.stringify(result);
			var json = JSON.parse(string);
			// console.log(json);
			// console.log(json[0]);
			// console.log(json[1]);
			// console.log(json[2]);
			// console.log(json[3]);


			res.render("principal/mechanical/mechanicalsem1/mechanicalsem1an.ejs", { data: json, success: "", user: req.session.user });
		
		}
	
	});
});

// mechanical sem 2 analytics
app.get("/mechanicalsem2an", function (req, res, next) {
	var date=req.body.date;
	var date1=req.body.date1;
		//   console.log(req.body);
	var updateQuery = "SELECT AVG(applied_science) as applied_science,AVG(applied_mechanics) as applied_mechanics,AVG(applied_mathematics) as applied_mathematics,AVG(engineering_drawing) as engineering_drawing,AVG(business_communication_using_computers) as business_communication_using_computers,AVG(mechanical_engineering_workshop) as mechanical_engineering_workshop FROM `semester_mark_2_m` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999 ;SELECT COUNT(student_er_no) as erno,SUM(applied_science) as applied_science,SUM(applied_mechanics) as applied_mechanics,SUM(applied_mathematics) as applied_mathematics,SUM(engineering_drawing) as engineering_drawing,SUM(business_communication_using_computers) as business_communication_using_computers,SUM(mechanical_engineering_workshop) as mechanical_engineering_workshop FROM `semester_2_m` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999;SELECT * FROM `mechanical_dept` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999;SELECT COUNT(`student_er_no`) AS stu FROM `mechanical_dept` WHERE `student_er_no` BETWEEN 2100000000 AND 2199999999";
	var sql = mysql.format(updateQuery, [date,date1]);
	db.query(sql, function (err, result) {
		if (res, result) {
			var string = JSON.stringify(result);
			var json = JSON.parse(string);
			// console.log(json);
			// console.log(json[0]);
			// console.log(json[1]);
			// console.log(json[2]);
			// console.log(json[3]);


			res.render("principal/mechanical/mechanicalsem2/mechanicalsem2an.ejs", { data: json, success: "", user: req.session.user });
		
		}
	
	});
});

// mechanical sem 3 analytics
app.get("/mechanicalsem3an", function (req, res, next) {
	var date=req.body.date;
	var date1=req.body.date1;
		//   console.log(req.body);
	var updateQuery = "SELECT AVG(strength_of_materials) as strength_of_materials,AVG(basic_electrical_and_electronics_engineering) as basic_electrical_and_electronics_engineering,AVG(thermal_engineering) as thermal_engineering,AVG(mechanical_working_drawing) as mechanical_working_drawing,AVG(engineering_metrology) as engineering_metrology,AVG(mechanical_engineering_metarials) as mechanical_engineering_metarials FROM `semester_mark_3_m` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999 ;SELECT COUNT(student_er_no) as erno,SUM(engineering_metrology) as engineering_metrology,SUM(basic_electrical_and_electronics_engineering) as basic_electrical_and_electronics_engineering,SUM(thermal_engineering) as thermal_engineering,SUM(mechanical_working_drawing) as mechanical_working_drawing,SUM(engineering_metrology) as engineering_metrology,SUM(mechanical_engineering_metarials) as mechanical_engineering_metarials FROM `semester_3_m` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999;SELECT * FROM `mechanical_dept` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999;SELECT COUNT(`student_er_no`) AS stu FROM `mechanical_dept` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999";
	var sql = mysql.format(updateQuery, [date,date1]);
	db.query(sql, function (err, result) {
		if (res, result) {
			var string = JSON.stringify(result);
			var json = JSON.parse(string);
			// console.log(json);
			// console.log(json[0]);
			// console.log(json[1]);
			// console.log(json[2]);
			// console.log(json[3]);


			res.render("principal/mechanical/mechanicalsem3/mechanicalsem3an.ejs", { data: json, success: "", user: req.session.user });
		
		}
	
	});
});

// mechanical sem 4 analytics
app.get("/mechanicalsem4an", function (req, res, next) {
	var date=req.body.date;
	var date1=req.body.date1;
		//   console.log(req.body);
	var updateQuery = "SELECT AVG(theory_of_machines) as theory_of_machines,AVG(mechanical_engineering_measurements) as mechanical_engineering_measurements,AVG(fluid_mechanics_and_machinery) as fluid_mechanics_and_machinery,AVG(manufacturing_process) as manufacturing_process,AVG(environmental_studies) as environmental_studies,AVG(computer_aided_drafting) as computer_aided_drafting,AVG(fundamental_of_machatronics) as fundamental_of_machatronics FROM `semester_mark_4_m` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999 ;SELECT COUNT(student_er_no) as erno,SUM(theory_of_machines) as theory_of_machines,SUM(mechanical_engineering_measurements) as mechanical_engineering_measurements,SUM(fluid_mechanics_and_machinery) as fluid_mechanics_and_machinery,SUM(manufacturing_process) as manufacturing_process,SUM(environmental_studies) as environmental_studies,SUM(computer_aided_drafting) as computer_aided_drafting,SUM(fundamental_of_machatronics) as fundamental_of_machatronics FROM `semester_4_m` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999;SELECT * FROM `mechanical_dept` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999;SELECT COUNT(`student_er_no`) AS stu FROM `mechanical_dept` WHERE `student_er_no` BETWEEN 2000000000 AND 2099999999";
	var sql = mysql.format(updateQuery, [date,date1]);
	db.query(sql, function (err, result) {
		if (res, result) {
			var string = JSON.stringify(result);
			var json = JSON.parse(string);
			// console.log(json);
			// console.log(json[0]);
			// console.log(json[1]);
			// console.log(json[2]);
			// console.log(json[3]);


			res.render("principal/mechanical/mechanicalsem4/mechanicalsem4an.ejs", { data: json, success: "", user: req.session.user });
		
		}
	
	});
});

// mechanical sem 5 analytics
app.get("/mechanicalsem5an", function (req, res, next) {
	var date=req.body.date;
	var date1=req.body.date1;
		//   console.log(req.body);
	var updateQuery = "SELECT AVG(management) as management,AVG(power_engineering_and_refrigeration) as power_engineering_and_refrigeration,AVG(advance_manufacturing_process) as advance_manufacturing_process,AVG(elements_of_machine_design) as elements_of_machine_design,AVG(tool_engineering) as tool_engineering,AVG(solid_modeling_and_additive_manufacturing) as solid_modeling_and_additive_manufacturing,AVG(industrial_training) as industrial_training,AVG(capstone_project_planning) as capstone_project_planning FROM `semester_mark_5_m` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999 ;SELECT COUNT(student_er_no) as erno,SUM(management) as management,SUM(power_engineering_and_refrigeration) as power_engineering_and_refrigeration,SUM(advance_manufacturing_process) as advance_manufacturing_process,SUM(elements_of_machine_design) as elements_of_machine_design,SUM(tool_engineering) as tool_engineering,SUM(solid_modeling_and_additive_manufacturing) as solid_modeling_and_additive_manufacturing,SUM(industrial_training) as industrial_training,SUM(capstone_project_planning) as capstone_project_planning FROM `semester_5_m` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999;SELECT * FROM `mechanical_dept` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999;SELECT COUNT(`student_er_no`) AS stu FROM `mechanical_dept` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999";
	var sql = mysql.format(updateQuery, [date,date1]);
	db.query(sql, function (err, result) {
		if (res, result) {
			var string = JSON.stringify(result);
			var json = JSON.parse(string);
			// console.log(json);
			// console.log(json[0]);
			// console.log(json[1]);
			// console.log(json[2]);
			// console.log(json[3]);


			res.render("principal/mechanical/mechanicalsem5/mechanicalsem5an.ejs", { data: json, success: "", user: req.session.user });
		
		}
	
	});
});

// mechanical sem 6 analytics
app.get("/mechanicalsem6an", function (req, res, next) {
	var date=req.body.date;
	var date1=req.body.date1;
		//   console.log(req.body);
	var updateQuery = "SELECT AVG(refrigeration_and_air_condition) as refrigeration_and_air_condition,AVG(industrial_hydraulics_and_pneumatics) as industrial_hydraulics_and_pneumatics,AVG(industrial_engineering_and_quality_control) as industrial_engineering_and_quality_control,AVG(emerging_trends_in_mechanical_engineering) as emerging_trends_in_mechanical_engineering,AVG(enterpreneurship_development) as enterpreneurship_development,AVG(automobile_development) as automobile_development FROM `semester_mark_6_m` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999 ;SELECT COUNT(student_er_no) as erno,SUM(refrigeration_and_air_condition) as refrigeration_and_air_condition,SUM(industrial_hydraulics_and_pneumatics) as industrial_hydraulics_and_pneumatics,SUM(industrial_engineering_and_quality_control) as industrial_engineering_and_quality_control,SUM(emerging_trends_in_mechanical_engineering) as emerging_trends_in_mechanical_engineering,SUM(enterpreneurship_development) as enterpreneurship_development,SUM(automobile_development) as automobile_development FROM `semester_6_m` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999;SELECT * FROM `mechanical_dept` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999;SELECT COUNT(`student_er_no`) AS stu FROM `mechanical_dept` WHERE `student_er_no` BETWEEN 1900000000 AND 1999999999";
	var sql = mysql.format(updateQuery, [date,date1]);
	db.query(sql, function (err, result) {
		if (res, result) {
			var string = JSON.stringify(result);
			var json = JSON.parse(string);
			// console.log(json);
			// console.log(json[0]);
			// console.log(json[1]);
			// console.log(json[2]);
			// console.log(json[3]);


			res.render("principal/mechanical/mechanicalsem6/mechanicalsem6an.ejs", { data: json, success: "", user: req.session.user });
		
		}
	
	});
});

app.get('/computersem1enter', function (req, res) {
	res.render("homepage/computersem1enter.ejs", { title: "computersem1enter", success: "" });
});


// civil sem 1 view homepage

app.get('/civilsem1ve', function (req, res) {
	var erno = req.query.erno;
	// console.log(req.query);
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.english, t2.basic_science, t2.basic_mathematics, t2.fundamental_of_ict, t2.engineering_graphics, t2.workshop_practice, t2.percentage, t2.rating, t2.remark FROM `civil_dept` AS t1 LEFT JOIN semester_mark_1_ce AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = '"+erno+"' AND t1.student_er_no = '"+ erno +"' LIMIT 1;";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		var string = JSON.stringify(result);
		var json = JSON.parse(string);
		// console.log(json);

		res.render('homepage/civil/civilsem1/civilsem1ve.ejs', { title: 'civilsem1view', computer: json, success: '', user: req.session.user });

	});
});

// civil sem 2 view homepage

app.get('/civilsem2ve', function (req, res) {
	var erno = req.query.erno;
	// console.log(req.query);
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.applied_mathematics, t2.applied_science, t2.applied_mechanics, t2.construction_materials, t2.basic_surveying, t2.civil_engineering_workshop_and_practice, t2.business_communication_using_computers, t2.percentage, t2.rating, t2.remark FROM `civil_dept` AS t1 LEFT JOIN semester_mark_2_ce AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = '"+erno+"' AND t1.student_er_no = '"+ erno +"' LIMIT 1;";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		var string = JSON.stringify(result);
		var json = JSON.parse(string);
		// console.log(json);

		res.render('homepage/civil/civilsem2/civilsem2ve.ejs', { title: 'civilsem2view', computer: json, success: '', user: req.session.user });

	});
});

// civil sem 3 view homepage

app.get('/civilsem3ve', function (req, res) {
	var erno = req.query.erno;
	// console.log(req.query);
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.advance_surveying, t2.highway_engineering, t2.mechanics_of_structures, t2.building_construction, t2.concrete_technology, t2.computer_aided_drawing, t2.percentage, t2.rating, t2.remark FROM `civil_dept` AS t1 LEFT JOIN semester_mark_3_ce AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = '"+erno+"' AND t1.student_er_no = '"+ erno +"' LIMIT 1;";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		var string = JSON.stringify(result);
		var json = JSON.parse(string);
		// console.log(json);

		res.render('homepage/civil/civilsem3/civilsem3ve.ejs', { title: 'civilsem3view', computer: json, success: '', user: req.session.user });

	});
});

// civil sem 4 view homepage

app.get('/civilsem4ve', function (req, res) {
	var erno = req.query.erno;
	// console.log(req.query);
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.hydraulics, t2.theory_of_structures, t2.railway_and_bridge_engineering, t2.geo_technical_engineering, t2.building_planning_and_drawing, t2.environmental_studies, t2.percentage, t2.rating, t2.remark FROM `civil_dept` AS t1 LEFT JOIN semester_mark_4_ce AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = '"+erno+"' AND t1.student_er_no = '"+ erno +"' LIMIT 1;";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		var string = JSON.stringify(result);
		var json = JSON.parse(string);
		// console.log(json);

		res.render('homepage/civil/civilsem4/civilsem4ve.ejs', { title: 'civilsem4view', computer: json, success: '', user: req.session.user });

	});
});

// civil sem 5 view homepage

app.get('/civilsem5ve', function (req, res) {
	var erno = req.query.erno;
	// console.log(req.query);
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.water_resource_engineering, t2.design_of_steel_and_rcc_structure, t2.estimating_costing_and_valuation, t2.public_health_engineering, t2.traffic_engineering, t2.industrial_training, t2.capstone_project_planning, t2.percentage, t2.rating, t2.remark FROM `civil_dept` AS t1 LEFT JOIN semester_mark_5_ce AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = '"+erno+"' AND t1.student_er_no = '"+ erno +"' LIMIT 1;";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		var string = JSON.stringify(result);
		var json = JSON.parse(string);
		// console.log(json);

		res.render('homepage/civil/civilsem5/civilsem5ve.ejs', { title: 'civilsem5view', computer: json, success: '', user: req.session.user });

	});
});

// civil sem 6 view homepage

app.get('/civilsem6ve', function (req, res) {
	var erno = req.query.erno;
	// console.log(req.query);
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.management, t2.contracts_and_accounts, t2.maintenance_and_repairs_of_structure, t2.emerging_trends_in_civil_engineering, t2.solid_waste_management, t2.capstone_project_execution_and_report_writing, t2.construction_management, t2.enterprenureship_development, t2.percentage, t2.rating, t2.remark FROM `civil_dept` AS t1 LEFT JOIN semester_mark_6_ce AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = '"+erno+"' AND t1.student_er_no = '"+ erno +"' LIMIT 1;";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		var string = JSON.stringify(result);
		var json = JSON.parse(string);
		// console.log(json);

		res.render('homepage/civil/civilsem6/civilsem6ve.ejs', { title: 'civilsem6view', computer: json, success: '', user: req.session.user });

	});
});

// computer sem 1 view homepage

app.get('/computersem1ve', function (req, res) {
	var erno = req.query.erno;
	// console.log(req.query);
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.english, t2.basic_science, t2.basic_mathematics, t2.fundamental_of_ict, t2.engineering_graphics, t2.workshop_practice, t2.percentage, t2.rating, t2.remark FROM `computer_dept` AS t1 LEFT JOIN semester_mark_1_c AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = '"+erno+"' AND t1.student_er_no = '"+ erno +"' LIMIT 1;";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		var string = JSON.stringify(result);
		var json = JSON.parse(string);
		// console.log(json);

		res.render('homepage/computer/computersem1/computersem1ve.ejs', { title: 'computersem1view', computer: json, success: '', user: req.session.user });

	});
});

// computer sem 2 view homepage

app.get('/computersem2ve', function (req, res) {
	var erno = req.query.erno;
	// console.log(req.query);
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.elements_of_electrical_engineering, t2.applied_mathematics, t2.basic_electronics, t2.programming_in_c, t2.business_communication_using_computers, t2.computer_peripheral_and_hardware_maintenance, t2.webpage_designing_with_html, t2.percentage, t2.rating, t2.remark FROM `computer_dept` AS t1 LEFT JOIN semester_mark_2_c AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = '"+erno+"' AND t1.student_er_no = '"+ erno +"' LIMIT 1;";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		var string = JSON.stringify(result);
		var json = JSON.parse(string);
		// console.log(json);

		res.render('homepage/computer/computersem2/computersem2ve.ejs', { title: 'computersem2view', computer: json, success: '', user: req.session.user });

	});
});

// computer sem 3 view homepage

app.get('/computersem3ve', function (req, res) {
	var erno = req.query.erno;
	// console.log(req.query);
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.object_oriented_programming_using_c_plus, t2.data_structure_using_c, t2.computer_graphics, t2.database_management_system, t2.digital_techniques, t2.percentage, t2.rating, t2.remark FROM `computer_dept` AS t1 LEFT JOIN semester_mark_3_c AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = '"+erno+"' AND t1.student_er_no = '"+ erno +"' LIMIT 1;";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		var string = JSON.stringify(result);
		var json = JSON.parse(string);
		// console.log(json);

		res.render('homepage/computer/computersem3/computersem3ve.ejs', { title: 'computersem3view', computer: json, success: '', user: req.session.user });

	});
});

// computer sem 4 view homepage

app.get('/computersem4ve', function (req, res) {
	var erno = req.query.erno;
	// console.log(req.query);
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.java_programming, t2.software_engineering, t2.data_communication_and_computer_network, t2.microprocessors, t2.gui_application_development_using_vb.net, t2.percentage, t2.rating, t2.remark FROM `computer_dept` AS t1 LEFT JOIN semester_mark_4_c AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = '"+erno+"' AND t1.student_er_no = '"+ erno +"' LIMIT 1;";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		var string = JSON.stringify(result);
		var json = JSON.parse(string);
		// console.log(json);

		res.render('homepage/computer/computersem4/computersem4ve.ejs', { title: 'computersem4view', computer: json, success: '', user: req.session.user });

	});
});

// computer sem 5 view homepage

app.get('/computersem5ve', function (req, res) {
	var erno = req.query.erno;
	// console.log(req.query);
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.environmental_studies, t2.operating_system, t2.advance_java_programming, t2.software_testing, t2.advance_computer_network, t2.industrial_training, t2.capstone_project_planning, t2.percentage, t2.rating, t2.remark FROM `computer_dept` AS t1 LEFT JOIN semester_mark_5_c AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = '"+erno+"' AND t1.student_er_no = '"+ erno +"' LIMIT 1;";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		var string = JSON.stringify(result);
		var json = JSON.parse(string);
		// console.log(json);

		res.render('homepage/computer/computersem5/computersem5ve.ejs', { title: 'computersem5view', computer: json, success: '', user: req.session.user });

	});
});

// computer sem 6 view homepage

app.get('/computersem6ve', function (req, res) {
	var erno = req.query.erno;
	// console.log(req.query);
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.management, t2.programming_with_python, t2.mobile_application_development, t2.emerging_trends_in_computer_and_information_technology, t2.network_and_information_security, t2.enterpreneurship_development, t2.capstone_project_execution_and_report_writing, t2.percentage, t2.rating, t2.remark FROM `computer_dept` AS t1 LEFT JOIN semester_mark_6_c AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = '"+erno+"' AND t1.student_er_no = '"+ erno +"' LIMIT 1;";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		var string = JSON.stringify(result);
		var json = JSON.parse(string);
		// console.log(json);

		res.render('homepage/computer/computersem6/computersem6ve.ejs', { title: 'computersem6view', computer: json, success: '', user: req.session.user });

	});
});

// electronic sem 1 view homepage

app.get('/electronicsem1ve', function (req, res) {
	var erno = req.query.erno;
	// console.log(req.query);
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.english, t2.basic_science, t2.basic_mathematics, t2.fundamental_of_ict, t2.engineering_graphics, t2.workshop_practice, t2.percentage, t2.rating, t2.remark FROM `electronic_dept` AS t1 LEFT JOIN semester_mark_1_e AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = '"+erno+"' AND t1.student_er_no = '"+ erno +"' LIMIT 1;";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		var string = JSON.stringify(result);
		var json = JSON.parse(string);
		// console.log(json);

		res.render('homepage/electronics/electronicsem1/electronicsem1ve.ejs', { title: 'electonicsem1view', computer: json, success: '', user: req.session.user });

	});
});

// electronic sem 2 view homepage

app.get('/electronicsem2ve', function (req, res) {
	var erno = req.query.erno;
	// console.log(req.query);
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.applied_mathematics, t2.elements_of_electrical_engineering, t2.basic_electronics, t2.electronic_engineering_materials, t2.c_programming_languages, t2.business_communication_using_computers, t2.percentage, t2.rating, t2.remark FROM `electronic_dept` AS t1 LEFT JOIN semester_mark_2_e AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = '"+erno+"' AND t1.student_er_no = '"+ erno +"' LIMIT 1;";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		var string = JSON.stringify(result);
		var json = JSON.parse(string);
		// console.log(json);

		res.render('homepage/electronics/electronicsem2/electronicsem2ve.ejs', { title: 'electronicsem2view', computer: json, success: '', user: req.session.user });

	});
});

// electronic sem 3 view homepage

app.get('/electronicsem3ve', function (req, res) {
	var erno = req.query.erno;
	// console.log(req.query);
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.digital_techniques, t2.applied_electronics, t2.electric_circuits_and_networks, t2.electronic_measurement_and_instrumentation, t2.principles_of_electronic_communication, t2.percentage, t2.rating, t2.remark FROM `electronic_dept` AS t1 LEFT JOIN semester_mark_3_e AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = '"+erno+"' AND t1.student_er_no = '"+ erno +"' LIMIT 1;";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		var string = JSON.stringify(result);
		var json = JSON.parse(string);
		// console.log(json);

		res.render('homepage/electronics/electronicsem3/electronicsem3ve.ejs', { title: 'computersem3view', computer: json, success: '', user: req.session.user });

	});
});

// electronic sem 4 view homepage

app.get('/electronicsem4ve', function (req, res) {
	var erno = req.query.erno;
	// console.log(req.query);
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.linear_integrated_circuits, t2.consumer_electronics, t2.microcontroller_and_application, t2.geo_technical_engineering, t2.basic_power_electronics, t2.digital_communication_systems, t2.maintenance_of_electronics_equipments_and_eda_tools_practices, t2.percentage, t2.rating, t2.remark FROM `electronic_dept` AS t1 LEFT JOIN semester_mark_4_e AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = '"+erno+"' AND t1.student_er_no = '"+ erno +"' LIMIT 1;";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		var string = JSON.stringify(result);
		var json = JSON.parse(string);
		// console.log(json);

		res.render('homepage/electronics/electronicsem4/electronicsem4ve.ejs', { title: 'electronicsem4view', computer: json, success: '', user: req.session.user });

	});
});

// electronic sem 5 view homepage

app.get('/electronicsem5ve', function (req, res) {
	var erno = req.query.erno;
	// console.log(req.query);
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.environmental_studies, t2.control_system, t2.embedded_system, t2.mobile_and_wireless_communication, t2.traffic_engineering, t2.microwave_and_radar, t2.industrial_training, t2.capstone_project_planning, t2.percentage, t2.rating, t2.remark FROM `electronic_dept` AS t1 LEFT JOIN semester_mark_5_e AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = '"+erno+"' AND t1.student_er_no = '"+ erno +"' LIMIT 1;";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		var string = JSON.stringify(result);
		var json = JSON.parse(string);
		// console.log(json);

		res.render('homepage/electronics/electronicsem5/electronicsem5ve.ejs', { title: 'electronicsem5view', computer: json, success: '', user: req.session.user });

	});
});

// electronic sem 6 view homepage

app.get('/electronicsem6ve', function (req, res) {
	var erno = req.query.erno;
	// console.log(req.query);
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.management, t2.computer_networking_and_data_communication, t2.emerging_trends_in_electronics, t2.optical_network_and_satellite_communication, t2.enterpreneurship_development, t2.capstone_project_execution_and_report_writing, t2.vlsi_with_vhdl, t2.percentage, t2.rating, t2.remark FROM `electronic_dept` AS t1 LEFT JOIN semester_mark_6_e AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = '"+erno+"' AND t1.student_er_no = '"+ erno +"' LIMIT 1;";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		var string = JSON.stringify(result);
		var json = JSON.parse(string);
		// console.log(json);

		res.render('homepage/electronics/electronicsem6/electronicsem6ve.ejs', { title: 'electronicsem6view', computer: json, success: '', user: req.session.user });

	});
});

// mechanical sem 1 view homepage

app.get('/mechanicalsem1ve', function (req, res) {
	var erno = req.query.erno;
	// console.log(req.query);
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.english, t2.basic_science, t2.basic_mathematics, t2.fundamental_of_ict, t2.engineering_graphics, t2.workshop_practice, t2.percentage, t2.rating, t2.remark FROM `mechanical_dept` AS t1 LEFT JOIN semester_mark_1_m AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = '"+erno+"' AND t1.student_er_no = '"+ erno +"' LIMIT 1;";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		var string = JSON.stringify(result);
		var json = JSON.parse(string);
		// console.log(json);

		res.render('homepage/mechanical/mechanicalsem1/mechanicalsem1ve.ejs', { title: 'mechanicalsem1view', computer: json, success: '', user: req.session.user });

	});
});

// mechanical sem 2 view homepage

app.get('/mechanicalsem2ve', function (req, res) {
	var erno = req.query.erno;
	// console.log(req.query);
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.applied_science, t2.applied_mechanics, t2.applied_mathematics, t2.engineering_drawing, t2.business_communication_using_computers, t2.mechanical_engineering_workshop, t2.percentage, t2.rating, t2.remark FROM `mechanical_dept` AS t1 LEFT JOIN semester_mark_2_m AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = '"+erno+"' AND t1.student_er_no = '"+ erno +"' LIMIT 1;";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		var string = JSON.stringify(result);
		var json = JSON.parse(string);
		// console.log(json);

		res.render('homepage/mechanical/mechanicalsem2/mechanicalsem2ve.ejs', { title: 'mechanicalsem2view', computer: json, success: '', user: req.session.user });

	});
});

// mechanical sem 3 view homepage

app.get('/mechanicalsem3ve', function (req, res) {
	var erno = req.query.erno;
	// console.log(req.query);
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.strength_of_metarial, t2.basic_electrical_and_electronics_engineering, t2.thermal_engineering, t2.mechanical_working_drawing, t2.engineering_metrology, t2.mechanical_engineering_metarials, t2.percentage, t2.rating, t2.remark FROM `mechanical_dept` AS t1 LEFT JOIN semester_mark_3_m AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = '"+erno+"' AND t1.student_er_no = '"+ erno +"' LIMIT 1;";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		var string = JSON.stringify(result);
		var json = JSON.parse(string);
		// console.log(json);

		res.render('homepage/mechanical/mechanicalsem3/mechanicalsem3ve.ejs', { title: 'mechanicalsem3view', computer: json, success: '', user: req.session.user });

	});
});

// mechanical sem 4 view homepage

app.get('/mechanicalsem4ve', function (req, res) {
	var erno = req.query.erno;
	// console.log(req.query);
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.theory_of_machines, t2.mechanical_engineering_measurements, t2.fluid_mechanics_and_machinery, t2.manufacturing_process, t2.environmental_studies, t2.computer_aided_drafting, t2.fundamental_of_machatronics, t2.percentage, t2.rating, t2.remark FROM `mechanical_dept` AS t1 LEFT JOIN semester_mark_4_m AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = '"+erno+"' AND t1.student_er_no = '"+ erno +"' LIMIT 1;";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		var string = JSON.stringify(result);
		var json = JSON.parse(string);
		// console.log(json);

		res.render('homepage/mechanical/mechanicalsem4/mechanicalsem4ve.ejs', { title: 'mechanicalsem4view', computer: json, success: '', user: req.session.user });

	});
});

// mechanical sem 5 view homepage

app.get('/mechanicalsem5ve', function (req, res) {
	var erno = req.query.erno;
	// console.log(req.query);
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.management, t2.power_engineering_and_refrigeration, t2.advance_manufacturing_process, t2.elements_of_machine_design, t2.tool_engineering, t2.solid_modeling_and_additive_manufacturing, t2.industrial_training, t2.capstone_project_planning, t2.percentage, t2.rating, t2.remark FROM `mechanical_dept` AS t1 LEFT JOIN semester_mark_5_m AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = '"+erno+"' AND t1.student_er_no = '"+ erno +"' LIMIT 1;";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		var string = JSON.stringify(result);
		var json = JSON.parse(string);
		// console.log(json);

		res.render('homepage/mechanical/mechanicalsem5/mechanicalsem5ve.ejs', { title: 'mechanicalsem5view', computer: json, success: '', user: req.session.user });

	});
});

// mechanical sem 6 view homepage

app.get('/mechanicalsem6ve', function (req, res) {
	var erno = req.query.erno;
	// console.log(req.query);
	var getQuery = "SELECT t1.student_roll, t1.student_er_no, t1.student_year, t1.student_name, t1.student_email, t1.parents_name, t1.parent_email, t2.refrigeration_and_air_condition, t2.industrial_hydraulics_and_pneumatics, t2.industrial_engineering_and_quality_control, t2.emerging_trends_in_mechanical_engineering, t2.enterpreneurship_development, t2.automobile_development,	 t2.percentage, t2.rating, t2.remark FROM `mechanical_dept` AS t1 LEFT JOIN semester_mark_6_m AS t2 ON t1.student_er_no = t2.student_er_no WHERE t2.student_er_no = '"+erno+"' AND t1.student_er_no = '"+ erno +"' LIMIT 1;";
	db.query(getQuery, function (err, result) {
		if (err) throw err;
		var string = JSON.stringify(result);
		var json = JSON.parse(string);
		// console.log(json);

		res.render('homepage/mechanical/mechanicalsem6/mechanicalsem6ve.ejs', { title: 'mechanicalsem6view', computer: json, success: '', user: req.session.user });

	});
});

/////
app.listen(3300);
{
	console.log("3300  listening...")
}

