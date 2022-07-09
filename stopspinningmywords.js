// This is the link to thi JavaScript Challenge
// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

function spinWords(string){
  // console.log(string.length)
  string = string.concat(' ')
  // console.log(string.length)

  let stringarr = []
  let j = 0
  for(i=0; i<=string.length-1; i++){
    // console.log(string[i])
    if(string[i] == ' '){
      // console.log(j,i)
      stringarr.push(string.slice(j,i))
      j = i + 1
    }
  }
  // console.log(stringarr)
  let newarr = []
  for(i=0; i<=stringarr.length-1; i++){
    // console.log(stringarr[i].length)
    if(stringarr[i].length >= 5){
      let x = Array.from(stringarr[i]).reverse().toString().split(',').join('')
      // console.log(x)
      newarr.push(x)
    } else {
      newarr.push(stringarr[i])
    }
  }
  // console.log(newarr)
  console.log(newarr.join(' '))
  // console.log(string.slice(0,3))
  // console.log(string.slice(4,10))
  // console.log(string.slice(11,19))
}
spinWords("Hey fellow warriors")
console.log('========')
spinWords('This is a test')
console.log('========')
spinWords('This is another test')
console.log('========')
spinWords("Welcome")
console.log('========')
spinWords("You are almost to the last test")
console.log('========')
spinWords("Just kidding there is still one more")
console.log('========')
spinWords("Seriously this is the last one")