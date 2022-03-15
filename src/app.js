import { DecisionTree } from "../libraries/decisiontree.js"
import { VegaTree } from "../libraries/vegatree.js"

const csvFile = "./data/mushrooms.csv"
const trainingLabel = "class"
const ignoredColumns = []


function loadData() {
    Papa.parse(csvFile, {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: results => trainModel(results.data)
    })
}

function trainModel(data){
    let trainData = data.slice(0, Math.floor(data.length * 0.8))
    let testData  = data.slice(Math.floor(data.length * 0.8) + 1)
    console.log("testData:", testData)
    console.log("trainData:", trainData)

    let decisionTree = new DecisionTree({
        ignoredAttributes: ignoredColumns,
        trainingSet: trainData,
        categoryAttr: trainingLabel
    })

    let visual = new VegaTree('#view', 1200, 500, decisionTree.toJSON())

    predictAll(decisionTree, testData)
}

loadData()


function predictAll(decisionTree, testData) {
    let amountCorrect = 0

    for(let testShroom of testData) {
        if(decisionTree.predict(testShroom) === testShroom.class) {
          amountCorrect++
          }
    }

    let accuracy = amountCorrect / testData.length

    console.log("The Accuracy is: " + Math.round(accuracy*10000 *100, 4) /10000 + "%")
}

function predictOne(decisionTree, testData){
    let prediction = decisionTree.predict(testData[0])

    if(prediction === testData[0].class) {
        console.log("CORRECTE  VOORSPELLING!")
    }
}


function predict(decisionTree){
    let prediction = decisionTree.predict({
        "cap-shape":                    "x",
        "cap-surface":                  "s",
        "cap-color":                    "n",
        "bruises":                      "t",
        "odor":                         "y",
        "gill-attachment":              "f",
        "gill-spacing":                 "c",
        "gill-size":                    "n",
        "gill-color":                   "k",
        "stalk-shape":                  "e",
        "stalk-root":                   "e",
        "stalk-surface-above-ring":     "s",
        "stalk-surface-below-ring":     "s",
        "stalk-color-above-ring":       "w",
        "stalk-color-below-ring":       "w",
        "veil-type":                    "p",
        "veil-color":                   "w",
        "ring-number":                  "o",
        "ring-type":                    "p",
        "spore-print-color":            "k",
        "population":                   "s",
        "habita":                       "d"
    })
    
    console.log(`this mushroom is ${prediction}`)
}






















