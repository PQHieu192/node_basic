// const {readFile, writeFile} = require('fs')

// readFile('./content/first.txt', 'utf8', (err, result) => {
//     if (err) {
//         console.log("hello")
//         return
//     }
//     const first = result
//     readFile('./content/second.txt', 'utf8', (err, result) => {
//         if (err) {
//             console.log("hello")
//             return
//         }
//         const second = result
//         writeFile(
//             './content/result-async.text',
//             `here is the result: ${first}, ${second}`,
//             (err, result) => {
//                 if(err) {
//                     console.log(err)
//                     return
//                 }
//                 console.log(result)
//             }
//         )
//     })
// })

const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync(
    './content/result-async.text',
    `Here is a result: ${first}, ${second}`,
    {flag: 'w'}
)