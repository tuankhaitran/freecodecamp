function palindrome(str) {
  // Good luck!
  str = str.replace(/[^a-zA-Z0-9]/g,"");
  str = str.toLowerCase();
  var len = str.length;
  for (var i = 0; i <= str.length / 2; i++)
    {
      if (str[i] != str[len - 1]) {
        if (i == len) {
           break;
         }
         return false;
      }
      len--;
    }
  return true;
}
palindrome("eye");
