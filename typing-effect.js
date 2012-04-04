typing_effect = function(string, dom_id, do_erase){

  var string_length = string.length;
  var index = 0;
  var setInterval_id = 0;

  type_string = function(){

    setInterval_id = setInterval(function(){
      val = string[index];
      if(index >= string_length){
        clearInterval(setInterval_id);
        index = $(dom_id).html().length - 1;
        if(do_erase == true)
          setTimeout('erase_string()', 500);
          return true;
      }
      $(dom_id).append(val);
      index += 1;
    }, 50);
  }

  erase_string = function(){
    setInterval_id = setInterval(function(){
      val = $(dom_id).html().substring(0, index);
      $(dom_id).html(val);
      if(index <= 0){
        clearInterval(setInterval_id);
        return true;
      }
      index -= 1;
    }, 50);
  }

  type_string();
}
