typing_effect = function(strings_array, dom_id){

  var strings_index = 0;
  var strings_length = strings_array.length;
  var string = strings_array[strings_index];
  var string_length = string.length;
  var string_index = 0;
  var setInterval_id = 0;

  type_string = function(){

    setInterval_id = setInterval(function(){
      val = string[string_index];
      if(string_index >= string_length){
        clearInterval(setInterval_id);
        string_index = $(dom_id).html().length - 1;
        if(strings_index < (strings_length - 1)){
          setTimeout('erase_string()', 500);
          return true;
        }
      }
      $(dom_id).append(val);
      string_index += 1;
    }, 50);
  }

  erase_string = function(){
    setInterval_id = setInterval(function(){
      val = $(dom_id).html().substring(0, string_index);
      $(dom_id).html(val);
      if(string_index <= 0){
        strings_index += 1;
        clearInterval(setInterval_id);
        if(strings_index < strings_length){
          string_index = 0;
          string = strings_array[strings_index];
          setTimeout("type_string()", 500);
        }
        return true;
      }
      string_index -= 1;
    }, 50);
  }

  type_string();
}
