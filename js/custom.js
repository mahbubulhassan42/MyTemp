$(document).ready(function(){
    $(".form").hide();
    $(".btn3").hide();
    $(".btn2").click(function(){
        $(".form").show();
        $(".btn3").show();
        $(".btn2").hide();
    });
    $(".btn3").click(function(){
        $(".btn2").show();
        $(".form").hide();
        $(".btn3").hide();
    });

    // var btn2 = $(".btn2");
    // if(btn2){
    //     btn2.click(function(){
    //         $(".form").show();
    //     });
    // }else{
    //     btn2.click(function(){
    //         $(".form").hide();
    //     });
        
    // };

    // $(".btn2").click(function(){
    //     var btn2 = $(".btn2");
    //         if(btn2){
    //             $(".form").show();
    //         }else if(btn2){
    //             $(".form").hide();
    //         };
    //     });

    // var btn2 = $(".btn2");
    // if(btn2 == click()){
    //     function show(){
    //         $(".form").show();
    //     };
    //     show(btn2);
    // }else{
    //     function hide(){
    //         $(".form").hide();
    //     };
    //     hide(btn2);
    // };



});