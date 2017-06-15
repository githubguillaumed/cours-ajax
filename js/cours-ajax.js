//alert('ok');

$(function() //$(function) > car c'est une function jquery
{
	//let image=$('.polaroid');
	let images = ["images/babalou.jpg","images/bar_treize_coin.jpg","images/cafe_du_commerce.jpg"];
	let index = 0;
	
	setInterval(function()
		{

			if(index == images.length) //vérification de la dernière image)
			{
				index = 0; // on démarre à l'index 0
			}
			$(".polaroid").attr("src",images[index]); // modification source image via array
			index++; // incrémentation.

	},3000); //changement toutes les 3 secondes
});
