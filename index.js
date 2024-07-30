/*
@title: Radio
@author: Neon
@snapshot: snapshot1.png
*/

// Minified BlotFont by geschmit
var ParseCoords=($,f=1)=>{let _=[];for(let r of $.split(":"))parseFloat(r)&&_.push(parseFloat(r));return _},RunInstructions=($,f,_=1)=>{let r=new bt.Turtle;for(let a of(r.jump(f),$.split(","))){let s=a.split("$")[0],u=a.split("$")[1],d;switch(s){case"u":r.up();break;case"d":r.down();break;case"f":r.forward(parseFloat(u)*_);break;case"arc":d=ParseCoords(u),r.arc(-d[0],d[1]*_);break;case"jmp":d=ParseCoords(u),r.jump(d);break;case"sa":r.setAngle(parseFloat(u));break;case"l":r.left(parseFloat(u));break;case"r":r.right(parseFloat(u))}}return drawLines(r.lines()),r.position},letters={a:"sa$90,f$2,r$90,f$2,r$90,f$2,u,sa$90,f$2,d,l$30,f$2,l$120,f$2",b:"sa$90,f$4,r$90,f$1,arc$180:1,f$1,r$180,f$1,arc$180:1,f$1",c:"sa$90,u,r$90,f$2,r$180,d,arc$180:2",d:"sa$90,f$4,r$90,arc$180:2",e:"sa$90,f$4,r$90,f$2,u,f$-2,r$90,f$2,l$90,d,f$2,u,f$-2,r$90,f$2,l$90,d,f$2",f:"sa$90,f$4,r$90,f$2,u,f$-2,r$90,f$2,l$90,d,f$2",g:"u,f$1,sa$90,f$2,r$90,d,arc$270:1,f$2,arc$90:1",h:"sa$90,f$4,u,f$-2,r$90,d,f$2,u,l$90,f$-2,d,f$4",i:"f$2,u,f$-1,l$90,d,f$4,r$90,u,f$-1,d,f$2",j:"sa$90,u,f$4,r$90,d,f$2,u,f$-1,r$90,d,f$3,arc$90:1",k:"sa$90,f$4,u,f$-2,r$45,d,f$2.75,u,f$-2.75,r$90,d,f$2.75",l:"sa$90,u,f$4,r$180,d,f$4,l$90,f$2",m:"sa$90,f$4,sa$0,r$71.57,f$3.162,sa$0,l$71.57,f$3.162,sa$0,r$90,f$4",n:"sa$90,f$4,r$153.43,f$4.47,l$153.43,f$4",o:"sa$90,u,f$1,d,f$2,arc$180:1,f$2,arc$180:1",p:"sa$90,f$4,r$90,f$1,arc$180:1,f$1",q:"sa$90,u,f$1,d,f$2,arc$180:1,f$2,arc$180:1,u,r$90,f$1,r$45,d,f$1.414",r:"sa$90,f$4,r$90,f$1,arc$180:1,f$1,sa$-45,f$2.8284",s:"f$1,arc$-180:1,arc$180:1,f$1",t:"u,f$1,sa$90,d,f$4,u,r$90,f$-1,d,f$2",u:"sa$90,u,f$4,sa$-90,d,f$3,arc$-180:1,f$3",v:"sa$90,u,f$4,r$165.96,d,f$4.12,l$151.93,f$4.12",w:"sa$90,u,f$4,sa$0,r$82.87,d,f$4.03,sa$0,l$63.43,f$1.12,sa$0,r$63.43,f$1.12,sa$0,l$82.87,f$4.03",x:"sa$90,u,f$4,r$153.44,d,f$4.47,u,l$153.44,f$4,l$153.44,d,f$4.47",y:"u,f$1,sa$90,d,f$2.5,r$33.69,f$1.8,u,f$-1.8,l$67.38,d,f$1.8",z:"u,f$2,d,f$-2,l$63.44,f$4.47,r$63.44,f$-2",0:"sa$90,u,f$1,d,f$2,arc$180:1,f$2,arc$180:1,u,f$2,arc$45:1,sa$-66.80,d,f$3.675",1:($,f)=>DrawBezier($,-106,f,bezierEasing(.026,[.984,-1],[1,1],.9561),[2,-.47],"f$2,u,f$-1,sa$90,d,f$4,l$90"),2:"u,f$2,r$180,d,f$2,sa$90,arc$90:1,arc$-90:1,f$1,arc$-180:1",3:"sa$90,u,f$4,r$90,d,f$1,arc$180:1,f$1,r$180,f$1,arc$180:1,f$1",4:"u,f$2,sa$90,f$1,l$90,d,f$2,r$116.57,f$3.35,sa$-90,f$4",5:"u,sa$90,f$1,r$180,d,arc$-180:1,f$1,arc$-90:1,arc$90:1,sa$0,f$2",6:($,f)=>DrawBezier($,74,f,bezierEasing(-.018,[.054,-.373],[1,-.758],.9181),[3.2,-.36],"u,sa$90,f$1,d,arc$360:1"),7:($,f)=>DrawBezier($,245,f,bezierEasing(-.005,[0,-.149],[0,1],.206),[4.5,-.59],"u,sa$90,f$4,r$90,d,f$2"),8:"u,f$1,d,arc$-180:1,arc$360:1,arc$-180:1",9:($,f)=>DrawBezier($,-107,f,bezierEasing(-.018,[.054,-.373],[1,-.758],.9181),[3.2,-.36],"u,sa$90,f$4,r$90,f$1,d,arc$360:1,u,arc$90:1,d"),".":"sa$90,u,f$.75,r$90,f$1,d,arc$360:.25",",":"sa$90,u,f$.5,r$90,f$1,r$90,d,arc$90:.25","?":"sa$90,u,f$.75,r$90,f$1,d,arc$360:.25,l$90,u,f$.25,d,f$1,r$90,arc$-270:1","!":"sa$90,u,f$.75,r$90,f$1,d,arc$360:.25,l$90,u,f$.25,d,f$3","+":"sa$90,u,f$2,r$90,d,f$2,u,f$-1,l$90,f$-1,d,f$2","-":"sa$90,u,f$2,r$90,d,f$2","*":"sa$90,u,f$2,r$90,f$1,l$90,f$-1,d,f$2,u,f$-1,r$60,f$-1,d,f$2,u,f$-1,r$60,f$-1,d,f$2","/":"l$63.43,f$4.47","=":"sa$90,u,f$1.5,r$90,d,f$2,u,l$90,f$1,l$90,d,f$2",$:"f$1,arc$-180:1,arc$180:1,f$1,u,f$-1,r$90,d,f$4",":":"sa$90,u,f$.75,r$90,f$1,d,arc$360:.25,l$90,u,f$2.5,d,r$90,arc$360:.25",";":"sa$90,u,f$.25,r$90,f$1,r$90,d,arc$90:.25,u,arc$270:.25,r$180,f$3,d,r$90,arc$-360:.25","(":"u,f$1.25,r$180,d,arc$90:.5,f$3,arc$90:.5",")":"u,f$.75,d,arc$-90:.5,f$3,arc$-90:.5","[":"u,f$1.5,r$180,d,f$1,r$90,f$4,r$90,f$1","]":"u,f$.5,d,f$1,l$90,f$4,l$90,f$1","#":"sa$90,u,f$1.5,r$90,d,f$2,u,l$90,f$1,l$90,d,f$2,u,r$90,f$.5,r$90,f$.5,r$90,d,f$2,u,l$90,f$1,l$90,d,f$2","%":"sa$90,u,f$2,r$45,d,f$2.83,u,l$45,f$-1.5,d,arc$-360:.5,u,f$1.5,l$90,f$1.5,d,arc$-360:.5",_:"f$2","|":"u,f$1,sa$90,d,f$4","\\":"u,f$4,r$153.43,d,f$4.47",'"':"u,f$.5,sa$90,f$3,d,f$1,u,r$90,f$1,r$90,f$1","'":"u,f$1,sa$90,f$3,d,f$1",">":"sa$90,u,f$1,r$63.43,d,f$2.24,l$127,f$2.24","<":"u,f$2,sa$90,f$1,l$63.43,d,f$2.24,r$127,f$2.24"," ":"","\r":"","\n":""},allLetters=Object.keys(letters).join(""),DrawBezier=($,f,_,r,a,s)=>{let u=new bt.Turtle;u.jump($),s&&u.jump(RunInstructions(s,$,_)),u.setAngle(f),u.forward(a[0]*_),bt.resample(u.path,.1),warp(u,$=>r($)*a[1]*_),drawLines(u.lines())},DrawText=($,f,_=100,r=[2.5,4.5])=>{let a=0,s=0;for(let u of $.toLowerCase())if(-1==allLetters.indexOf(u,0))RunInstructions(letters["?"],[f[0]+a*r[0]*_,f[1]-s*r[1]*_],_);else{switch(u){case"\r":a=0;continue;case"\n":a=0,s+=1;continue;default:"string"==typeof letters[u]?RunInstructions(letters[u],[f[0]+a*r[0]*_,f[1]-s*r[1]*_],_):"function"==typeof letters[u]&&letters[u]([f[0]+a*r[0]*_,f[1]-s*r[1]*_],_)}a+=1;continue}};

// Changeable Values
const randomAntenna = bt.rand() * (40 - 15) + 15;
const talkgroups = ["EMS", "FIRE", "LAW", "DISPATCH", "OPS"]

const width = 125;
const height = 125;
const body = new bt.Turtle();
const antenna = new bt.Turtle();
const cknob = new bt.Turtle();
const vknob = new bt.Turtle();
const screen = new bt.Turtle();
const buttons = new bt.Turtle();
const numbers = new bt.Turtle();

const needsRendering = [body, antenna, cknob, vknob, screen, buttons, numbers]

setDocDimensions(width, height);

function square(startx, starty, len1, len2, turtle) {
  turtle.jump([startx, starty])
  for (var i = 0; i < 2; i++) {
    turtle.forward(len1)
    turtle.right(90)
    turtle.forward(len2)
    turtle.right(90)
  }
}


body
  .jump([(width / 2) - 50, 5])
  .down()
  .forward(40)
  .left(90)
  .forward(75)
  .left(90)
  .forward(35)
  .up()
  .forward(5)
  .down()
  .left(90)
  .forward(75)

antenna
  .jump([12.5, 80])
  .left(90)
  .forward(randomAntenna)
  .right(90)
  .forward(5)
  .right(90)
  .forward(randomAntenna)

cknob
  .jump([35, 80])
  .left(90)
  .forward(6)
  .right(90)
  .forward(4)
  .right(90)
  .forward(6)

vknob
  .jump([45, 80])
  .left(90)
  .forward(3)
  .right(90)
  .forward(4)
  .right(90)
  .forward(3)


square(22.25, 68, 20, 20, screen)

for (var i = 0; i < 4; i++) {
  square(22.25 + (i * 5), 52, 5, 4, screen)
}

/*for (var i = 0; i < 4; i++) {
  const randomOption = bt.rand() * (4 - 1) + 1;
  const randomOption2 = bt.rand() * (3 - 1) + 1;
  const menu = new bt.Turtle()
    .jump([22.25 + (i * 5), 51.5])
    .forward(randomOption)
    .right(bt.rand() * (100 - 75) + 75)
    .forward(randomOption2)
    .right(bt.rand() * (100 - 85) + 85)
    .forward((randomOption < randomOption2) ? randomOption: randomOption2)
  drawLines(menu.lines())
}*/

let usedMenu = []
for (var i = 0; i < 4; i++) {
  var menuOption = "";
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  
  menuOption += alphabet[Math.floor(bt.rand() * alphabet.length)];

  if (usedMenu.includes(menuOption)) {
    menuOption = "";
    menuOption += alphabet[Math.floor(bt.rand() * alphabet.length)];
  } else {
    usedMenu.push(menuOption)
  }
  
  DrawText(menuOption, [24+(i*5), 49], 0.5);
}

var talkgroup = talkgroups[Math.floor(bt.rand() * talkgroups.length)];
DrawText(talkgroup, [27, 59], 0.5);

/*buttons
  .jump([22.25,46])
  .forward(5)*/





needsRendering.forEach((element) => drawLines(element.lines()));
