//Tamanho
document.documentElement.style.setProperty(`--height`, Math.floor(Math.random() * 100));
document.documentElement.style.setProperty(`--width`, Math.floor(Math.random() * 100));
//Raio Horizontal
document.documentElement.style.setProperty(`--htl`, Math.floor(Math.random() * 100));
document.documentElement.style.setProperty(`--htr`, Math.floor(Math.random() * 100));
document.documentElement.style.setProperty(`--hbl`, Math.floor(Math.random() * 100));
document.documentElement.style.setProperty(`--hbr`, Math.floor(Math.random() * 100));
//Raio Vertical
document.documentElement.style.setProperty(`--vtl`, Math.floor(Math.random() * 100));
document.documentElement.style.setProperty(`--vtr`, Math.floor(Math.random() * 100));
document.documentElement.style.setProperty(`--vbl`, Math.floor(Math.random() * 100));
document.documentElement.style.setProperty(`--vbr`, Math.floor(Math.random() * 100));
//Borda
document.documentElement.style.setProperty(`--bt`, 0);
document.documentElement.style.setProperty(`--be`, 'none');
document.documentElement.style.setProperty(`--bc`, '#000000');
//Cor
document.documentElement.style.setProperty(`--color`, '#000000');

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