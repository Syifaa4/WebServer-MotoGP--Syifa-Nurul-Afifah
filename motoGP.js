const express = require('express')
const port = 8000

const app = express()
const motoGP = [
    {
        circuit: 'Losail',
        location: 'Qatar',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    },
    {
        circuit: 'Autodromo',
        location: 'Argentine',
        winner: {
            firstName: 'Cal',
            lastName: 'Crutchlow',
            country: 'UK'
        }   
    },
    {
        circuit: 'De Jerez',
        location: 'Spain',
        winner: {
            firstName: 'Valentino',
            lastName: 'Rossi',
            country: 'Italy' 
        }
    },
    {
        circuit: 'Mugello',
        location: 'Italy',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }        
    }
]

const http = require('http')
const server = http.createServer((req,res) =>{
    res.writeHead(200)
    if (req.url=='/'){
        res.write("<h1>Welcome to MotoGP Station</h1>")     
        res.write(JSON.stringify(motoGP))   
    }
    else if(req.url=='/motoGP'){
        res.write("motoGP Page")
        res.write(JSON.stringify(motoGP))
    }
    else if(req.url=='/country'){
        res.write("<h1>Grouping of Winning Italy Countries</h1>")
        const Italy = motoGP.filter(s=> s.winner.country == 'Italy')
        res.write(JSON.stringify(Italy))
        res.write("\n\n")
        res.write("<h1>Grouping of Winning UK Countries</h1>")
        const UK = motoGP.filter(s=> s.winner.country == 'UK')
        res.write(JSON.stringify(UK))
    }
    else if(req.url=='/name'){   
        res.write("<h1>Winning's Name</h1>")  
        const names = motoGP.map(s=> {
            return{
                Name: `${s.winner.firstName} ${s.winner.lastName}`,
                Circuit: `${s.circuit}`,
                Location: `${s.location}`,
                country: `${s.winner.country}`
            }
        })

        res.write(JSON.stringify(names));
    }
    else{
        res.write("<h1>Bad Result</h1>");
    }
    res.end();
})
server.listen(port, ()=>{
    console.log(`Server run at http://localhost:${port}`)
})
