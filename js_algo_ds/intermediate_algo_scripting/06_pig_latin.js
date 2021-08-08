function translatePigLatin(str) {
  if("aeiou".indexOf(str[0]) > -1){
    return str + "way";
  }else if( str.search(/[aeiou]/) > 0){
    return str.slice(str.search(/[aeiou]/), str.length) + str.slice(0, str.search(/[aeiou]/)) + "ay";
  }else{
    return str + "ay";
  }
}

translatePigLatin("consonant");
