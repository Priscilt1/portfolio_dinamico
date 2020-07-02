// CRIANDO O SERVIDOR 

// o require chama o express para dentro do servidor js 
const express = require ('express')

// inserindo o nunjucks
const nunjucks = require ('nunjucks')

// a variavel se tornou uma funcao e chamara ele para dentro do servidor 
const server = express()

// constante para exportar os dados do portfolio (o arquivo esta no data,js (a barra é a raiz))
const sites = require("./data")

// configurando o estilo 
server.use(express.static('public'))

server.set("view engine", "njk")

// mostrando o caminho 
nunjucks.configure("views", {
    express:server,
    // o autoescape serve para arrumar o html (por exemplo, os target)
    autoescape: false,
    noCache: true,
})

server.get("/", function (req, res) {
    const links = [ 
            { name: "Linkedin", url: "https://www.linkedin.com/in/priscila-ribeiro1/" },
            { name: "GitHub", url: "https://github.com/Priscilt1" },
    ]
    const about = {
        // talves seja scr, se for, lembrar de mudar no about.jks
        avatar_url: '36200059_1513888282056496_7768841045206368256_o.jpg',
        name: "Priscila Ribeiro",
        role: "Programadora Junior",
        description: 'Programadora junior em formação, buscando oportunidades. Colaboradora <a href="https://calangodev.com.br/" target="_blank"> CalangoDev',
        links: [
            { name: "Linkedin", url: "https://www.linkedin.com/in/priscila-ribeiro1/" },
            { name: "GitHub", url: "https://github.com/Priscilt1" },
        ],
        // acrescentando o meu footer 
        footers: [
            { imgsrc: "whatsapp_footer.png", text: "(74)99932.6161" },
            { imgsrc: "emailnovo.png", text: "priscilt.ribeiro@hotmail.com"}, 
        ]
    }

    return res.render("about", { about, links })
})

server.get("/portfolio", function (req, res){
    const links = [ 
        { name: "Linkedin", url: "https://www.linkedin.com/in/priscila-ribeiro1/" },
        { name: "GitHub", url: "https://github.com/Priscilt1" },
]
    return res.render("portfolio", { items: sites, links })
})

// iniciando o servidor. Abrindo a porta 5000 e pedindo para o servidor escutar a funcao
server.listen(5000, function (){
    console.log("iniciando")
})