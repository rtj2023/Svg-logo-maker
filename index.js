const { Circle, Square, Triangle } = require("./lib/shapes")
const fs = require("fs")
const inquirer = require("inquirer")

inquirer.prompt([
    {
        message: "What shape would you like?",
        type: "list",
        choices: ["circle", "square", "triangle"],
        name: "shape"
    },
    {
        message: "What shape color would you like?",
        name: "shapecolor"
    },
    {
        message: "What text color would you like?",
        name: "textcolor"
    },
    {
        message: "What text would you like?",
        name: "text"
    },
])
    .then(answers => {
        if (answers.shape == "circle") {
            let shape = new Circle(answers.shapecolor, answers.text, answers.textcolor)
            fs.writeFileSync("output.svg", `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${shape.shapecolor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${shape.textcolor}">${shape.text}</text>
        </svg>`)
        }
        else if (answers.shape == "square") {
            let shape = new Square(answers.shapecolor, answers.text, answers.textcolor)
            fs.writeFileSync("output.svg", `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="90" y="40" width="120" height="120" fill="${shape.shapecolor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${shape.textcolor}">${shape.text}</text>
        </svg>`)
        }
        else if (answers.shape == "triangle") {
            let shape = new Triangle(answers.shapecolor, answers.text, answers.textcolor)
            fs.writeFileSync("output.svg", `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${shape.shapecolor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${shape.textcolor}">${shape.text}</text>
        </svg>`)
        }
    })
