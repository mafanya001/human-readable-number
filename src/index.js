module.exports = function toReadable (n) { // n === number in the beginning
 let b = n % 10, a = (n - b) / 10,
     d = n % 100, c = (n - d) / 100,
     e = ((n - b) % 100) / 10,
            
     A1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
     A2 = ['ten','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
   if (n == 0) return 'zero';
   if (n < 20) return A1[n - 1];
   if (n < 100) {
   if (b === 0) return A2[a - 1];
       return A2[a - 1] + ' ' + A1[b - 1];
 }
   if (n < 1000) {
   if (d === 0) return A1[c - 1]+ ' hundred';
   if (b === 0) return A1[c - 1] + ' hundred ' + A2[e - 1];
   if (n % 100 < 20) return A1[c - 1] + ' hundred ' + A1[d - 1];
   return A1[c - 1] + ' hundred ' + A2[e - 1] + ' ' + A1[b - 1];
 } 
}
