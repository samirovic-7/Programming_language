/*All Pages*/

function F1() {
    document.getElementById("ul2").style.display = "block";
    document.getElementById("ul3").style.display = "none";
    document.getElementById("ul4").style.display = "none";
    document.getElementById("ul5").style.display = "none";
    document.getElementById("ul6").style.display = "none";
    document.getElementById("ul7").style.display = "none";
}

function F2() {
    document.getElementById("ul3").style.display = "block";
    document.getElementById("ul2").style.display = "none";
    document.getElementById("ul4").style.display = "none";
    document.getElementById("ul5").style.display = "none";
    document.getElementById("ul6").style.display = "none";
    document.getElementById("ul7").style.display = "none";
}

function F3() {
    document.getElementById("ul4").style.display = "block";
    document.getElementById("ul2").style.display = "none";
    document.getElementById("ul3").style.display = "none";
    document.getElementById("ul5").style.display = "none";
    document.getElementById("ul6").style.display = "none";
    document.getElementById("ul7").style.display = "none";
}

function F4() {
    document.getElementById("ul5").style.display = "block";
    document.getElementById("ul2").style.display = "none";
    document.getElementById("ul3").style.display = "none";
    document.getElementById("ul4").style.display = "none";
    document.getElementById("ul6").style.display = "none";
    document.getElementById("ul7").style.display = "none";
}

function F5() {
    document.getElementById("ul6").style.display = "block";
    document.getElementById("ul2").style.display = "none";
    document.getElementById("ul3").style.display = "none";
    document.getElementById("ul4").style.display = "none";
    document.getElementById("ul5").style.display = "none";
    document.getElementById("ul7").style.display = "none";
}

function F6() {
    document.getElementById("ul7").style.display = "block";
    document.getElementById("ul2").style.display = "none";
    document.getElementById("ul3").style.display = "none";
    document.getElementById("ul4").style.display = "none";
    document.getElementById("ul5").style.display = "none";
    document.getElementById("ul6").style.display = "none";
}

function show() {
    document.getElementById("nav").style.right = "0%";
    document.getElementById("tog").style.right = "9%";
    document.getElementById("tog").style.opacity = "1";
};

function tog() {
    document.getElementById("nav").style.right = "-10%";
    document.getElementById("tog").style.right = "0%";
    document.getElementById("tog").style.opacity = "0";
    document.getElementById("ul2").style.display = "none";
    document.getElementById("ul3").style.display = "none";
    document.getElementById("ul4").style.display = "none";
    document.getElementById("ul5").style.display = "none";
    document.getElementById("ul6").style.display = "none";
    document.getElementById("ul7").style.display = "none";
};



function myFun() {
    window.scrollTo({
        top: 659,
        behavior: 'smooth'
    });
}
/////////////////////////////////////////////////////////////
/*Page1*/

function myFunction() {
    if (document.documentElement.scrollTop > 200) {
        document.getElementById("p1").style.left = "0%";
        document.getElementById("p2").style.left = "0%";
        document.getElementById("p3").style.left = "0%";
        document.getElementById("p4").style.left = "0%";
        document.getElementById("p5").style.left = "0%";
        document.getElementById("p1").style.transitionDelay = ".2s";
        document.getElementById("p2").style.transitionDelay = ".4s";
        document.getElementById("p3").style.transitionDelay = ".6s";
        document.getElementById("p4").style.transitionDelay = ".8s";
        document.getElementById("p5").style.transitionDelay = "1s";
    } else {
        document.getElementById("p1").style.left = "-110%";
        document.getElementById("p2").style.left = "-110%";
        document.getElementById("p3").style.left = "-110%";
        document.getElementById("p4").style.left = "-110%";
        document.getElementById("p5").style.left = "-110%";
    }
}
/*Page4*/
////////////////////////////////
function F2(X) {
    X.style.transform = "rotateY(130deg)"

}
/*Page5*/
/////////////////////////////////

function F11() {
    document.getElementById("h1").innerHTML = "Front-end";
    document.getElementById("p").innerHTML = "xercitationem, sequi odio, eaque commodi recusandae quibusdam, perferendis tenetur quas! Voluptatum veritatis aut, consequuntur quaerat. Laudantium beatae commodi expedita, nesciunt quaerat recusandae hic nisi, dolore asperiores voluptatem laboriosam veritatis ipsam quibusdam ab a sed labore eius amet incidunt dignissimos consectetur illo cum, quidem officia id? Voluptates, optio assumenda modi voluptatibus culpa accusantium vel dolorem repellendus dolor placeat eligendi, ducimus soluta veritatis eveniet, quidem labore ratione nisi consequuntur ut. Eaque nisi commodi maxime magni molestiae soluta ipsam placeat voluptate, quidem o";
}

function F21() {
    document.getElementById("h1").innerHTML = "back-end";
    document.getElementById("p").innerHTML = "xercitationem, sequi odio, eaque commodi recusandae quibusdam, perferendis tenetur quas! Voluptatum veritatis aut, consequuntur quaerat. Laudantium beatae commodi expedita, nesciunt quaerat recusandae hic nisi, dolore asperiores voluptatem laboriosam veritatis ipsam quibusdam ab a sed labore eius amet incidunt dignissimos  beatae commodi expedita, nesciunt quaerat recusandae hic nisi, dolore asperiores voluptatem laboriosam veritatis ipsam quibusdam ab a sed labore eius amet incidunt dignissimos consectetur illo cum, quidem officia id? Voluptates, optio assumenda modi voluptatibus culpa accusantium vel dolorem repellendus dolor placeat elconsectetur illo cum, quidem officia id? Voluptates, optio assumenda modi voluptatibus culpa accusantium vel dolorem repellendus dolor placeat eligendi, ducimus soluta veritatis eveniet, quidem labore ratione nisi consequuntur ut. Eaque nisi commodi maxime magni molestiae soluta ipsam placeat voluptate, quidem o";
}

function F31() {
    document.getElementById("h1").innerHTML = "AI";
    document.getElementById("p").innerHTML = "xercitationem, sequi odio, eaque commodi recusandae quibusdam, perferendis tenetur quas! Voluptatum veritatis aut, consequuntur  beatae commodi expedita, nesciunt quaerat recusandae hic nisi, dolore asperiores voluptatem laboriosam veritatis ipsam quibusdam ab a sed labore eius amet incidunt dignissimos consectetur illo cum, quidem officia id? Voluptates, optio assumenda modi voluptatibus culpa accusantium vel dolorem repellendus dolor placeat el veritatis ipsam quibusdam ab a sed labore eius amet incidunt dignissimos consectetur illo cum, quidem officia id? Voluptates, optio assumenda modi voluptatibus culpa accusantium vel dolorem repellendus dolor placeat eligendi, ducimus soluta veritatis eveniet, quidem labore ratione nisi consequuntur ut. Eaque nisi commodi maxime magni molestiae soluta ipsam placeat voluptate, quidem o";
}

function F41() {
    document.getElementById("h1").innerHTML = "NetWork";
    document.getElementById("p").innerHTML = "xercitationem, sequi odio, eaque commodi recusandae quibusdam, perferendis tenetur quas! Voluptatum veritatis aut, consequuntur quaerat. Laudantium beatae commodi expedita, nesciunt quaerat recusandae hic nisi, dolore asperiores voluptatem laboriosam veritatis ipsam quibusdam ab a sed labore eius amet incidunt dignissimos consectetur illo cum, quidem officia id? Voluptates, optio assumenda modi voluptatibus culpa accusantium vel dolorem repellendus dolor placeat eligendi, ducimus soluta veritatis eveniet, quidem labore  beatae commodi expedita, nesciunt quaerat recusandae hic nisi, dolore asperiores voluptatem laboriosam veritatis ipsam quibusdam ab a sed labore eius amet incidunt dignissimos consectetur illo cum, quidem officia id? Voluptates, optio assumenda modi voluptatibus culpa accusantium vel dolorem repellendus dolor placeat elratione nisi consequuntur ut. Eaque nisi commodi maxime magni molestiae soluta ipsam placeat voluptate, quidem o";
}

function F51() {
    document.getElementById("h1").innerHTML = "Machien";
    document.getElementById("p").innerHTML = "xercitationem,  beatae commodi expedita, nesciunt quaerat recusandae hic nisi, dolore asperiores voluptatem laboriosam veritatis ipsam quibusdam ab a sed labore eius amet incidunt dignissimos consectetur illo cum, quidem officia id? Voluptates, optio assumenda modi voluptatibus culpa accusantium vel dolorem repellendus dolor placeat elsdam ab a sed labore eius amet incidunt dignissimos consectetur illo cum, quidem officia id? Voluptates, optio assumenda modi voluptatibus culpa accusantium vel dolorem repellendus dolor placeat eligendi, ducimus soluta veritatis eveniet, quidem labore ratione nisi consequuntur ut. Eaque nisi commodi maxime magni molestiae soluta ipsam placeat voluptate, quidem o";
}

function F61() {
    document.getElementById("h1").innerHTML = "IT";
    document.getElementById("p").innerHTML = "xercitationem, sequi odio, eaque commodi recusandae quibusdam, perferendis tenetur quas! Voluptatum veritatis aut, consequuntur quaerat. Laudantium beatae commodi expedita, nesciunt quaerat recusandae hic nisi, dolore asperiores voluptatem laboriosam veritatis ipsam quibusdam ab a sed labore eius amet incidunt dignissimos consectetur illo cum, quidem officia id? Voluptates, optio assumenda modi voluptatibus culpa accusantium vel dolorem repellendus dolor placeat elo cum, quidem officia id? Voluptates, optio assumenda modi voluptatibus culpa accusantium vel dolorem repellendus dolor placeat eligendi, ducimus soluta veritatis eveniet, quidem labore ratione nisi consequuntur ut. Eaque nisi commodi maxime magni molestiae soluta ipsam placeat voluptate, quidem o";
}

function F71() {
    document.getElementById("h1").innerHTML = "Android";
    document.getElementById("p").innerHTML = "xercitationem, sequi odio, eaque commodi recusandae quibusdam, perferendis tenetur quas! Voluptatum veritatis aut, consequuntur quaerat. Laudantium beatae commodi expedita, nesciunt quaerat recusandae hic nisi, dolore asperiores voluptatem laboriosam veritatis ipsam quiantium beatae commodi expedita, nesciunt quaerat recusandae hic nisi, dolore asperiores voluptatem laboriosam veritatis ipsam quibusdam ab a sed labore eius amet incidunt dignissimos consectetur illo cum, quidem officia id? Voluptates, optio assumenda modi voluptatibus culpa accusantium vel dolorem repellendus dolor placeat eligendi, ducimus soluta veritatis eveniet, quidem labore ratione nisi consequuntur  beatae commodi expedita, nesciunt quaerat recusandae hic nisi, dolore asperiores voluptatem laboriosam veritatis ipsam quibusdam ab a sed labore eius amet incidunt dignissimos consectetur illo cum, quidem officia id? Voluptates, optio assumenda modi voluptatibus culpa accusantium vel dolorem repellendus dolor placeat elvoluptate, quidem o";
}

function F81() {
    document.getElementById("h1").innerHTML = "Database";
    document.getElementById("p").innerHTML = "xercitationem, se beatae commodi expedita, nesciunt quaerat recusandae hic nisi, dolore asperiores voluptatem laboriosam veritatis ipsam quibusdam ab a sed labore eius amet incidunt dignissimos consectetur illo cum, quidem officia id? Voluptates, optio assumenda modi voluptatibus culpa accusantium vel dolorem repellendus dolor placeat el, quidem officia id? Voluptates, optio assumenda modi voluptatibus culpa accusantium vel dolorem repellendus dolor placeat eligendi, ducimus soluta veritatis eveniet, quidem labore ratione nisi conseimus soluta veritatis eveniet, quidem labore ratione nisi conseimus soluta veritatis eveniet, quidem labore ratione nisi consequuntur ut. Eaque nisi commodi maxime magni molestiae soluta ipsam placeat voluptate, quidem o";
}

function F91() {
    document.getElementById("h1").innerHTML = "IOS";
    document.getElementById("p").innerHTML = "xercitationem, sequi odio, eaque commodi recusandae quibusdam, perferendis tenetur quas! Voluptatum veritatis aut, consequuntur quaerat. Laudantium beatae commodi expedita, nesciunt quaerat recusandae hic nisi, dolore asperiores voluptatem laboriosam veritatis ipsam quibusdam ab a sed labore eius amet incidunt dignissimos consectetur illo cum beatae commodi expedita, nesciunt quaerat recusandae hic nisi, dolore asperiores voluptatem laboriosam veritatis ipsam quibusdam ab a sed labore eius amet incidunt dignissimos consectetur illo cum, quidem officia id? Voluptates, optio assumenda modi voluptuibusdam ab a sed labore eius amet incidunt dignissimos consectetur illo cum, quidem officia id? Voluptates, optio assumenda modi voluptatibus culpa accusantium vel dolorem repellendus dolor placeat el voluptate, quidem o";
}

function F101() {
    document.getElementById("h1").innerHTML = "SQL";
    document.getElementById("p").innerHTML = "xercitationem, sequi odio, eaque commodi recusandae quibusdam, perferendis tenetur quas! Voluptatum veritatis aut, consequuntur quaerat. Laudantium beatae commodi expedita, nesciunt quaerat recusandae hic nisi, dolore asperiores voluptatem laboriosam veritatis ipsam quibusdam ab a sed labore eius amet incidunt dignissimos consectetur iium beatae commodi expedita, nesciunt quaerat recusandae hic nisi, dolore asperiores voluptatem laboriosam veritatis ipsam quibusdam ab a sed labore eius amet incidunt dignissimos consectetur illo cum, quidem officia id? Voluptates, optio assumenda modi voluptatibus culpa accusantium vel dolorem repellendus dolor placeat eligendi, ducimus soluta veritatis eveniet, quidem labore ratione nisi consequuntur ut. Eaque nisi commodi maxime magni molestiae soluta ipsam placeat voluptate, quidem o";
}
////////////////////
/*Page7*/

function on1() {
    document.getElementById("h1").innerHTML = "<h2>Basics of front-end</h2>";
    document.getElementById("h2").innerHTML = "<h2>Framework of front-end</h2>";
    document.getElementById("h3").innerHTML = "<h2>advanced of front-end</h2>";
    document.getElementById("node1").innerHTML = "<p> HTML </p> ";
    document.getElementById("node1").innerHTML += "<p>CSS</p> ";
    document.getElementById("node1").innerHTML += "<p> JS </p>";
    document.getElementById("node1").innerHTML += "<p>Bootstrab</p>";
    document.getElementById("node2").innerHTML = "<p>angular</p>";
    document.getElementById("node2").innerHTML += "<p>react</p>";
    document.getElementById("node2").innerHTML += "<p>vue.js</p>";
    document.getElementById("node2").innerHTML += "<p>node.js</p>";
    document.getElementById("node3").innerHTML = "<p> sass </p> ";
    document.getElementById("node3").innerHTML += "<p> html5</p>";
    document.getElementById("node3").innerHTML += "<p> j-query</p>";
    document.getElementById("node3").innerHTML += "<p> wordpress </p>";
}

function on2() {
    document.getElementById("h1").innerHTML = "<h2>Basics of back-end</h2>";
    document.getElementById("h2").innerHTML = "<h2>Framework of back-end</h2>";
    document.getElementById("h3").innerHTML = "<h2>SQL of back-end</h2>";
    document.getElementById("node1").innerHTML = "<p> php </p> ";
    document.getElementById("node1").innerHTML += "<p>python</p> ";
    document.getElementById("node1").innerHTML += "<p> java </p>";
    document.getElementById("node1").innerHTML += "<p>C#</p>";
    document.getElementById("node2").innerHTML = "<p>m</p>";
    document.getElementById("node2").innerHTML += "<p>react</p>";
    document.getElementById("node2").innerHTML += "<p>vue.js</p>";
    document.getElementById("node2").innerHTML += "<p>node.js</p>";
    document.getElementById("node3").innerHTML = "<p> Mongo </p> ";
    document.getElementById("node3").innerHTML += "<p> jango</p>";
    document.getElementById("node3").innerHTML += "<p> My-SQL</p>";
    document.getElementById("node3").innerHTML += "<p> SQL-Server </p>";
}

function on3() {
    document.getElementById("h1").innerHTML = "<h2>Basics of front-end</h2>";
    document.getElementById("h2").innerHTML = "<h2>Framework of front-end</h2>";
    document.getElementById("h3").innerHTML = "<h2>advanced of front-end</h2>";
    document.getElementById("node1").innerHTML = "<p> HTML </p> ";
    document.getElementById("node1").innerHTML += "<p>CSS</p> ";
    document.getElementById("node1").innerHTML += "<p> JS </p>";
    document.getElementById("node1").innerHTML += "<p>Bootstrab</p>";
    document.getElementById("node2").innerHTML = "<p>angular</p>";
    document.getElementById("node2").innerHTML += "<p>react</p>";
    document.getElementById("node2").innerHTML += "<p>vue.js</p>";
    document.getElementById("node2").innerHTML += "<p>node.js</p>";
    document.getElementById("node3").innerHTML = "<p> sass </p> ";
    document.getElementById("node3").innerHTML += "<p> html5</p>";
    document.getElementById("node3").innerHTML += "<p> j-query</p>";
    document.getElementById("node3").innerHTML += "<p> wordpress </p>";
}

function on4() {
    document.getElementById("h1").innerHTML = "<h2>Basics of front-end</h2>";
    document.getElementById("h2").innerHTML = "<h2>Framework of front-end</h2>";
    document.getElementById("h3").innerHTML = "<h2>advanced of front-end</h2>";
    document.getElementById("node1").innerHTML = "<p> HTML </p> ";
    document.getElementById("node1").innerHTML += "<p>CSS</p> ";
    document.getElementById("node1").innerHTML += "<p> JS </p>";
    document.getElementById("node1").innerHTML += "<p>Bootstrab</p>";
    document.getElementById("node2").innerHTML = "<p>angular</p>";
    document.getElementById("node2").innerHTML += "<p>react</p>";
    document.getElementById("node2").innerHTML += "<p>vue.js</p>";
    document.getElementById("node2").innerHTML += "<p>node.js</p>";
    document.getElementById("node3").innerHTML = "<p> sass </p> ";
    document.getElementById("node3").innerHTML += "<p> html5</p>";
    document.getElementById("node3").innerHTML += "<p> j-query</p>";
    document.getElementById("node3").innerHTML += "<p> wordpress </p>";
}

function on5() {
    document.getElementById("h1").innerHTML = "<h2>Basics of front-end</h2>";
    document.getElementById("h2").innerHTML = "<h2>Framework of front-end</h2>";
    document.getElementById("h3").innerHTML = "<h2>advanced of front-end</h2>";
    document.getElementById("node1").innerHTML = "<p> HTML </p> ";
    document.getElementById("node1").innerHTML += "<p>CSS</p> ";
    document.getElementById("node1").innerHTML += "<p> JS </p>";
    document.getElementById("node1").innerHTML += "<p>Bootstrab</p>";
    document.getElementById("node2").innerHTML = "<p>angular</p>";
    document.getElementById("node2").innerHTML += "<p>react</p>";
    document.getElementById("node2").innerHTML += "<p>vue.js</p>";
    document.getElementById("node2").innerHTML += "<p>node.js</p>";
    document.getElementById("node3").innerHTML = "<p> sass </p> ";
    document.getElementById("node3").innerHTML += "<p> html5</p>";
    document.getElementById("node3").innerHTML += "<p> j-query</p>";
    document.getElementById("node3").innerHTML += "<p> wordpress </p>";
}

function on6() {
    document.getElementById("h1").innerHTML = "<h2>Basics of front-end</h2>";
    document.getElementById("h2").innerHTML = "<h2>Framework of front-end</h2>";
    document.getElementById("h3").innerHTML = "<h2>advanced of front-end</h2>";
    document.getElementById("node1").innerHTML = "<p> HTML </p> ";
    document.getElementById("node1").innerHTML += "<p>CSS</p> ";
    document.getElementById("node1").innerHTML += "<p> JS </p>";
    document.getElementById("node1").innerHTML += "<p>Bootstrab</p>";
    document.getElementById("node2").innerHTML = "<p>angular</p>";
    document.getElementById("node2").innerHTML += "<p>react</p>";
    document.getElementById("node2").innerHTML += "<p>vue.js</p>";
    document.getElementById("node2").innerHTML += "<p>node.js</p>";
    document.getElementById("node3").innerHTML = "<p> sass </p> ";
    document.getElementById("node3").innerHTML += "<p> html5</p>";
    document.getElementById("node3").innerHTML += "<p> j-query</p>";
    document.getElementById("node3").innerHTML += "<p> wordpress </p>";
}

function on7() {
    document.getElementById("h1").innerHTML = "<h2>Basics of front-end</h2>";
    document.getElementById("h2").innerHTML = "<h2>Framework of front-end</h2>";
    document.getElementById("h3").innerHTML = "<h2>advanced of front-end</h2>";
    document.getElementById("node1").innerHTML = "<p> HTML </p> ";
    document.getElementById("node1").innerHTML += "<p>CSS</p> ";
    document.getElementById("node1").innerHTML += "<p> JS </p>";
    document.getElementById("node1").innerHTML += "<p>Bootstrab</p>";
    document.getElementById("node2").innerHTML = "<p>angular</p>";
    document.getElementById("node2").innerHTML += "<p>react</p>";
    document.getElementById("node2").innerHTML += "<p>vue.js</p>";
    document.getElementById("node2").innerHTML += "<p>node.js</p>";
    document.getElementById("node3").innerHTML = "<p> sass </p> ";
    document.getElementById("node3").innerHTML += "<p> html5</p>";
    document.getElementById("node3").innerHTML += "<p> j-query</p>";
    document.getElementById("node3").innerHTML += "<p> wordpress </p>";
}

function on8() {
    document.getElementById("h1").innerHTML = "<h2>Basics of front-end</h2>";
    document.getElementById("h2").innerHTML = "<h2>Framework of front-end</h2>";
    document.getElementById("h3").innerHTML = "<h2>advanced of front-end</h2>";
    document.getElementById("node1").innerHTML = "<p> HTML </p> ";
    document.getElementById("node1").innerHTML += "<p>CSS</p> ";
    document.getElementById("node1").innerHTML += "<p> JS </p>";
    document.getElementById("node1").innerHTML += "<p>Bootstrab</p>";
    document.getElementById("node2").innerHTML = "<p>angular</p>";
    document.getElementById("node2").innerHTML += "<p>react</p>";
    document.getElementById("node2").innerHTML += "<p>vue.js</p>";
    document.getElementById("node2").innerHTML += "<p>node.js</p>";
    document.getElementById("node3").innerHTML = "<p> sass </p> ";
    document.getElementById("node3").innerHTML += "<p> html5</p>";
    document.getElementById("node3").innerHTML += "<p> j-query</p>";
    document.getElementById("node3").innerHTML += "<p> wordpress </p>";
}

function on9() {
    document.getElementById("h1").innerHTML = "<h2>Basics of front-end</h2>";
    document.getElementById("h2").innerHTML = "<h2>Framework of front-end</h2>";
    document.getElementById("h3").innerHTML = "<h2>advanced of front-end</h2>";
    document.getElementById("node1").innerHTML = "<p> HTML </p> ";
    document.getElementById("node1").innerHTML += "<p>CSS</p> ";
    document.getElementById("node1").innerHTML += "<p> JS </p>";
    document.getElementById("node1").innerHTML += "<p>Bootstrab</p>";
    document.getElementById("node2").innerHTML = "<p>angular</p>";
    document.getElementById("node2").innerHTML += "<p>react</p>";
    document.getElementById("node2").innerHTML += "<p>vue.js</p>";
    document.getElementById("node2").innerHTML += "<p>node.js</p>";
    document.getElementById("node3").innerHTML = "<p> sass </p> ";
    document.getElementById("node3").innerHTML += "<p> html5</p>";
    document.getElementById("node3").innerHTML += "<p> j-query</p>";
    document.getElementById("node3").innerHTML += "<p> wordpress </p>";
}

function on10() {
    document.getElementById("h1").innerHTML = "<h2>Basics of front-end</h2>";
    document.getElementById("h2").innerHTML = "<h2>Framework of front-end</h2>";
    document.getElementById("h3").innerHTML = "<h2>advanced of front-end</h2>";
    document.getElementById("node1").innerHTML = "<p> HTML </p> ";
    document.getElementById("node1").innerHTML += "<p>CSS</p> ";
    document.getElementById("node1").innerHTML += "<p> JS </p>";
    document.getElementById("node1").innerHTML += "<p>Bootstrab</p>";
    document.getElementById("node2").innerHTML = "<p>angular</p>";
    document.getElementById("node2").innerHTML += "<p>react</p>";
    document.getElementById("node2").innerHTML += "<p>vue.js</p>";
    document.getElementById("node2").innerHTML += "<p>node.js</p>";
    document.getElementById("node3").innerHTML = "<p> sass </p> ";
    document.getElementById("node3").innerHTML += "<p> html5</p>";
    document.getElementById("node3").innerHTML += "<p> j-query</p>";
    document.getElementById("node3").innerHTML += "<p> wordpress </p>";
}


/*Page10*/
///////////////////////////////

function myFunction() {
    if (document.documentElement.scrollTop < 350) {
        document.getElementById("signUp").style.transform = "rotateY(90deg)";
        document.getElementById("logIn").style.transform = "rotateY(90deg)";
        document.getElementById("back").style.transform = "rotateY(90deg)";
    } else {
        document.getElementById("signUp").style.transform = "rotateY(0deg)";
        document.getElementById("logIn").style.transform = "rotateY(0deg)";
        document.getElementById("back").style.transform = "rotateY(0deg)";
    }
}

function F111() {
    if (document.getElementById("back").style.left = "47%") {
        document.getElementById("back").style.left = "11%"
    }
};

function F112() {
    if (document.getElementById("back").style.left = "11%") {
        document.getElementById("back").style.left = "47%"
    }
}
/*Page11*/
/*Page12*/