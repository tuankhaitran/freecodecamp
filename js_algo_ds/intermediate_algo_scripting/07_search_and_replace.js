function myReplace(str, before, after) {
  if (before[0] >= 'A' && before[0] <= 'Z') {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }

   let arr = str.split(" ");
   for (let i = 0; i < arr.length; i ++) {
     if (arr[i] === before) {
       arr[i] = after;
     }
   }
   str = arr.toString();
   return str.replace(/,/g, " ");
 }

 myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
