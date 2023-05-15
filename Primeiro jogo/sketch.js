//Variáveis Dimensão da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let dBolinha = 15;
let raio = dBolinha / 2;

//Variáveis de Velicade da Bolinha
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

//Variáveis da Minha Raquete ou Outraraquete

let xMinharaquete = 5;
let yMinharaquete = 150;
let wMinharaquete = 10;
let hMinharaquete = 90;

let xOutraraquete = 585
let yOutraraquete = 150
let wOutraraquete = 10
let hOutraraquete = 90
let velocidadeYoutraraquete;
let Colidiu = false;
let chanceDeErrar = 10;

//Placar do Jogo
let Meuspontos = 0;
let Pontosinimigo= 0;

//Sons do Jogo
let raquetada;
let ponto;
let trilha;

function preload(){
 trilha = loadSound("trilha.mp3");
 ponto = loadSound("ponto.mp3");
 raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop()
}

function draw() {
  background(0);
  Mostrarbolinha();
  Movimentabolinha();
  Colisaoborda();
  Mostrarminharaquete();
  Movimentaminharaquete();
  Verificacolisaominharaquete();
  MostraOutraraquete();
  MovimentaOutraraquete();  
  ColisaoOutraraquete();
  Incluiplacar();
  MarcarPonto();
  bolinhaNaoFicaPresa();
  //Multiplayer();
  //calculaChanceDeErrar();
 }


function Mostrarbolinha(){
  circle(xBolinha,yBolinha,dBolinha);}

function Movimentabolinha(){
xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;}

function Colisaoborda(){
 if (xBolinha + raio > width || xBolinha - raio < 0){ velocidadexBolinha *= -1};
 if (yBolinha + raio > height || yBolinha - raio < 0){velocidadeyBolinha *= -1};}

function Mostrarminharaquete(){
 rect( xMinharaquete, yMinharaquete, wMinharaquete, hMinharaquete);}

function Movimentaminharaquete(){
  if (keyIsDown(UP_ARROW)){yMinharaquete -= 10}
  if (keyIsDown(DOWN_ARROW)){yMinharaquete += 10}
}

function Verificacolisaominharaquete(){
if (xBolinha - raio < xMinharaquete + wMinharaquete && yBolinha - raio < yMinharaquete +    hMinharaquete && yBolinha + raio > yMinharaquete ){velocidadexBolinha *=-1;
raquetada.play();}
}

function MostraOutraraquete(){
  rect( xOutraraquete, yOutraraquete, wOutraraquete,hOutraraquete);}

function MovimentaOutraraquete(){
 velocidadeYoutraraquete = yBolinha - yOutraraquete - hOutraraquete /2 -30;
  yOutraraquete += velocidadeYoutraraquete + chanceDeErrar;
  
  if (Pontosinimigo >= Meuspontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 40
    }
  }
}


function ColisaoOutraraquete(){
Colidiu =
  collideRectCircle(xOutraraquete, yOutraraquete, wOutraraquete, hOutraraquete,xBolinha, yBolinha,raio);
  if (Colidiu){velocidadexBolinha *= -1;
  raquetada.play();}}

function Incluiplacar(){
 stroke( 266)
 textAlign(CENTER)
 textSize(20) 
 fill(color(255,140,0))
 rect(150,10,40,20);
 fill(color(255,140,0))
 rect(450,10,40,20);
 fill(266)
 text(Meuspontos,170, 26)
 text(Pontosinimigo, 470, 26)}
 
function MarcarPonto(){
 if(xBolinha > 590){Meuspontos += 1;
 ponto.play()}
  
 if(xBolinha < 10){Pontosinimigo +=1;
 ponto.play();}}

function Multiplayer (){
 if (keyIsDown(87)){yOutraraquete -= 10}
  if (keyIsDown(83)){yOutraraquete += 10}}

  function calculaChanceDeErrar() {
  if (Pontosinimigo >= Meuspontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}


function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}






