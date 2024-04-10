const b = new Buffer.from('abc')

console.log(b.toString())

b.write("Other")

console.log(b.toString())