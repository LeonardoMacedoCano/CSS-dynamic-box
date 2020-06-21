const BE = {
	0: 'none',
	1: 'dotted',
	2: 'dashed',
	3: 'solid',
	4: 'double',
	5: 'groove',
	6: 'ridge',
	7: 'inset',
	8: 'outset',
}

const CONFIG = {
	//Tamanho
	height: Math.floor(Math.random() * 100),
	width: Math.floor(Math.random() * 100),
	//Raio Horizontal
	htl: Math.floor(Math.random() * 100),
	htr: Math.floor(Math.random() * 100),
	hbl: Math.floor(Math.random() * 100),
	hbr: Math.floor(Math.random() * 100),
	//Raio Vertical
	vtl: Math.floor(Math.random() * 100),
	vtr: Math.floor(Math.random() * 100),
	vbl: Math.floor(Math.random() * 100),
	vbr: Math.floor(Math.random() * 100),
	//Borda
	bt: Math.floor(Math.random() * 10),
	be: BE[Math.floor(Math.random() * 8)],
	bc: "#" + Math.floor(Math.random()*16777215).toString(16),
	//Cor
	color: "#" + Math.floor(Math.random()*16777215).toString(16),
}

//Loop para setar o valor de todas as variaveis
for (const key of Object.keys(CONFIG)) {
 	document.documentElement.style.setProperty(`--${key}`, CONFIG[key]);
 	document.getElementById(key).value = CONFIG[key];
}

//Função alterar valor propriedades caixa
function alterarValor(id, valor){
	document.documentElement.style.setProperty(`--${id}`, valor);
	console.log(id + ': ' + valor);
}

//Visibilidade Menu
$('.open-menu-btn').on('click', function(){
	if($('body').hasClass('closed-menu')){
		$('body').removeClass('closed-menu');
	}else{
		$('body').addClass('closed-menu');
	}
});

$(document).ready(function(e){
	var windowHeight = window.innerHeight;

	$('#navigation-menu').css('height', windowHeight + 'px');
	$('#navigation-hover').css('height', windowHeight + 'px');
	$('#navigation-hover').hide();

	$(document).on('click', '#showMenu', function(){
		$('#navigation-hover').show();

		$('#navigation-menu').css('left', '0');

		$('#showMenu, #hideMenu').css('left', '150px');
		$('#showMenu, #hideMenu').html('<i class="fa fa-chevron-left"></i>');
		$('#showMenu').attr('id', 'hideMenu');
	});

	$(document).on('click', '#hideMenu', function(){
		$('#navigation-hover').hide();

		$('#navigation-menu').css('left', '-150px');

		$('#showMenu, #hideMenu').css('left', '0');
		$('#showMenu, #hideMenu').html('<i class="fa fa-cog"></i>');
		$('#hideMenu').attr('id', 'showMenu');
	});
});