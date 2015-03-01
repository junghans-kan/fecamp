jQuery(function($){
	$(".gnb>button").on("click", function(){
		//$(".gnb>ul").slideToggle(200);
		$(this).next("ul").slideToggle(200);

		if( $(".gnb>button").text() ==="메뉴 열기" ){
			//메뉴 닫기 텍스트
			$(".gnb>button").text("메뉴 닫기");
		} else {
			//메뉴 열기 텍스트 표시
			$(".gnb>button").text("메뉴 열기");
		}
	});
});