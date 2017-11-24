window.onload = function(){
    var inp = document.forms["cal"];
    var input = inp.getElementsByTagName("input");
    var cls_btn = document.getElementsByClassName("cls_btn")[0];
    var result_btn = document.getElementsByClassName("result_btn")[0];

    function clearResult(){
        inp["result"].value = 0;
    }

    function myResult(){
        var result = document.forms["cal"]["result"];
        var calc = eval(result.value);

        inp["result"].value = calc;
    }

    cls_btn.onclick = function(){
        clearResult();
    }

    result_btn.onclick = function(){
        try{
            myResult();
        }
        catch(err){
            var result = inp["result"];
            result.value = "입력 오류";
        }
    }

    function calc(value){
        if(inp["result"].value == 0){
            inp["result"].value = '';
        }

        inp["result"].value += value;
    }

    for(var i = 0; i < input.length; i++){
        if(input[i].value != "=" && input[i].value != "clear"){
            input[i].onclick = function(){
                calc(this.value);
            }
        }
    }



}
