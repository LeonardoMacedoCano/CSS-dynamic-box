const raiz = document.documentElement;

function alterarValor(id, valor){
	var sufixo = '';

	if (id != 'height' && id != 'color'){
		sufixo = '%';
	}

	raiz.style.setProperty(`--${id}`, valor + sufixo);
	console.log(valor + sufixo);
}