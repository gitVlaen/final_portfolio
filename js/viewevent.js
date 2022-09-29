/*View Event*/

$(function(){


	/*첫번째 웹페이지 */
	$(".view1").mouseenter(function(){

		$(".web_img1 img").stop().animate({marginTop:-730},5000);

	}).mouseleave(function(){

		$(".web_img1 img").stop().animate({marginTop:0},3000);
	});


	/*두번째 웹페이지 */
	$(".view2").mouseenter(function(){

		$(".web_img2 img").stop().animate({marginTop:-2230},8000);

	}).mouseleave(function(){

		$(".web_img2 img").stop().animate({marginTop:0},3000);
	});


	/*세번째 웹페이지 */
	$(".view3").mouseenter(function(){

		$(".view3 img").stop().animate({marginTop:-700},5000);

	}).mouseleave(function(){

		$(".view3 img").stop().animate({marginTop:0},3000);
	});


	/*네번째 웹페이지 */
	$(".view4").mouseenter(function(){

		$(".view4 img").stop().animate({marginTop:-1460},5000);

	}).mouseleave(function(){

		$(".view4 img").stop().animate({marginTop:0},3000);
	});

});