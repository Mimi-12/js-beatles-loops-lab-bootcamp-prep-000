// add solution here
function theBeatlesPlay( musicians, instruments) {
let arr = []
for ( let i=0; i < musicians.length; i++ ) {
  const str = musicians[ i ] + ' plays ' + instruments[ i ];
  arr.push( str );
}
return arr;
}

function johnLennonFacts(facts) {
  const shoutedFacts = []
    let i = 0;
   while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
    }
    return shoutedFacts;
}

function iLoveTheBeatles(num){
  const array = []
   do{
  array.push('I love the Beatles!')
  n++
} while (n < 15)


}
