var botaoMenuHamburguer = document.querySelector(".botao.menuHamburguer");

function abrirMenu(){
	//declarar uma variavel, pegar navegacaoPrimaria
	var menu = document.querySelector("#navegacaoPrimaria")

	//se estiver com o classname "menuHorizontal visivel" fecha o dropdown
	if (menu.className == "menuHorizontal visivel") {
		//fechar menuHorizonal
		menu.className = "menuHorizontal";
	}else{
		//abrir o menuHorizontal
		//tornar a navegacaoPrimaria visivel, adicionar a class visivel.
	menu.className = "menuHorizontal visivel";
	}
}

botaoMenuHamburguer.onclick = abrirMenu;

//Botao amei
//Retorna um Array de botoes
var botoesAmei = document.querySelectorAll(".botao.amei");

function amar(){
	this.className = "botao amei vermelho"		
}

//botoesAmei[0].onclick = amar;
//botoesAmei[1].onclick = amar;
//botoesAmei[2].onclick = amar;
for (var i = 0; i < botoesAmei.length; i++) {
	botoesAmei[i].onclick = amar;
}

//SLIDER
function criarUmBullet(numeroDoSlide){
	//pegando a ul que vai inserir o li
	var bulletUl= document.querySelector(".bullets ul");
	//criando novo li
	var li = document.createElement("li");
	//criando um button para inserir no li
	var button = document.createElement("button");
	button.className="bullet";
	//parametro 1 = nome da propriedade
	//parametro 2 = valor da propriedade
	button.setAttribute("data-slide", "numeroDoSlide");


	//inserindo o button no li
	li.appendChild(button);
	//inserindo o li no ul dos bullets
	bulletUl.appendChild(li);
}

function criarBulletsNoSlider(){
	//pegando todos os slides que estao dentro da #slider
	var slides = document.querySelectorAll("#slider .slide");
	var quantidadeSlides = slides.length;

	//criar os bullets
	for (var i = 0; i < quantidadeSlides; i++) {
		// criar um bullet
		criarUmBullet(i);
	}
}

//funcoes para os botoes
//botao da seta esquerda
function voltarSlide(){

	if (slideIndexAtivo > 0) {
		//qual é o slide seguinte
	var anteriorSlideIndex = slideIndexAtivo - 1;
	var anteriorSlideOrdem = anteriorSlide + 1;

	//desaparecer com o slide que estava ativo
	var slideAtual = document.querySelector("#slider .slide.ativo")
	slideAtual.className.remove("ativo");

	//mostrar slide
	var proximoSlide = document.querySelector("#sider . slide:nth-child("+anteriorSlideOrdem+")"); 
	proximoSlide.classList.add("ativo")


	//atualizar o slide index ativo
	anteriorIndexAtivo = anteriorSlideIndex;
	}
}

//botao da seta direita
	var slideAtivo = 0;
function avancarSlide(){
	//qual é o slide seguinte
	var proximoSlideIndex = slideIndexAtivo + 1;
	var proximoSlideOrdem = proximoSlide + 1;

	//desaparecer com o slide que estava ativo
	var slideAtual = document.querySelector("#slider .slide.ativo")
	slideAtual.className.remove("ativo");

	//mostrar slide
	var proximoSlide = document.querySelector("#sider . slide:nth-child("+proximoSlideOrdem+")"); 
	proximoSlide.classList.add("ativo")


	//atualizar o slide index ativo
	slideIndexAtivo = proximoSlideIndex;
}

function irParaOSlideCorrespondente(){
	//pegar o slide com a classe ativo
	var slideAtivo = document.querySelector(".slide.ativo");
	//desaparece slide ativo
	slideAtivo.classList.remove("ativo");
	//aparece o slide correspondente
	var slideIndex = parseInt(this.getAttribute("data-slide"));
	var numeroDoSlide = slideIndex+1;

	var slideCorrespondente = document.querySelector("#slider .slideBox .slide:nth-child("+numeroDoSlide+")");
	slideCorrespondente.classList.add("ativo");
	//atualizar o indexAtual
}

function adicionarOnClickNosBotoes(){
 	//adicionando nas setas
 	var botaoVoltar = document.querySelector(".seta.esquerda");
 	botaoVoltar.onclick = voltarSlide;
 	var botaoAvancar = document.querySelector(".seta.direita");
 	botaoAvancar.onclick = avancarSlide;
 
 	//adicionando nos bullets
 	var bullets = document.querySelectorAll("#slider .bullet");
 	for (var i = 0; i < bullets.length; i++) {
 		bullets[i].onclick = irParaOSlideCorrespondente;
 	}
}
function alternarSlidesAutomaticamente(){

}

//se o slide existe
//se o slide é diferente de null ele existe!
var slider = document.querySelector("#slider");

if (slider !=null) {
	//criar os bullets de acordo com a quantidade de slides
	criarBulletsNoSlider();
	adicionarOnClickNosBotoes();
	alternarSlidesAutomaticamente();
}

//CODIGO PARA O FORMULARIO

//pegar o campo
var nome = document.querySelector("#inputNome");

//criar validação
function validarNome(){
	//pegar valor dele
	var valorNome = nome.value;

	//verificar se o valor é vazio
	if(valorNome == "") {
		//se for vazio deixa o campo vermelho
		// // adicionar classe no campo nome
		nome.parentNode.classList.add("errado");
	}else{
		nome.parentNode.classList.remove("errado");
	}
}

// executar vaidação ao sair do foco do campo
nome.onblur = validarNome;

//validar idade
var idade = document.querySelector("#inputIdade");

function validarIdade(){
	var valorIdade = idade.value;        

	//verificar se e menor que 18 anos
	if (valorIdade < 18) {
		//se for menor adicionar classe vermelho no campo idade
		idade.parentNode.classList.add("errado");
	}else{
		idade.parentNode.classList.remove("errado");
	}
}

idade.onblur = validarIdade;

//selecionar formulario
	var formulario = document.querySelector("#formSugestoes")
//criar funcao que vai ser executada ao submeter o formulario
//funcao criarBalao
	function adicionarBalao(){
	//criar um balao que é um elemento
	var div = document.criateElement("div");
	div.classList.add("balao");

	//<header>
		//<h3>
		//<span>
		//<p>
		var p = document.createElement("p");
		div.appendChild(p);

	var sugestao = document.querySelector("#inputSugestao")
	var sugestaoValor = sugestao.value;
	//colocando a sugestao dentro do <p>
	//<p> (sugestaoValor) </p>
	p.innerText = sugestaoValor;

	//depois inserir dentro da tag "#baloes"
	var baloes = document.querySelector("#baloes");
	baloes.appendChild(balao);

	return false;
	}
//atrelar a funcao ao evento: onsubmit
formulario.onsubmit = adicionarBalao;





