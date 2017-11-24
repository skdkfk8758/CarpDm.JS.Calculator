window.onload = function(){
    var $inp = $("form[name=cal]");
    var $input = $inp.find("input");
    var $cls_btn = $(".cls_btn");
    var $result_btn = $(".result_btn");
    var $result = $inp.find("input[name=result]");

    function clearResult(){
        $result.val(0);
    }

    function myResult(){
        var calc = eval($result.val());

        $result.val(calc);
    }

    $(".cls_btn").click(function(){
        clearResult();
    });

    $(".result_btn").click(function(){
        try{
            myResult();
        }
        catch(err){
            $result.val("입력오류");
        }
    });

    function calc(value){
        if($result.val() == 0){
            $result.val("");
        }

        var val = $result.val() + value;
        $result.val(val);
    }

    $("input").click(function(){
        var $input_value = $(this).val();

        if($input_value != "=" && $input_value != "clear"){
            calc($input_value);
        }
    });
}
