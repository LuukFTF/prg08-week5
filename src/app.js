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
    // data.sort(() => (Math.random() - 0.5))
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
    let predictedEActualE = 0
    let predictedPActualP = 0

    let predictedPActualE = 0
    let predictedEActualP = 0

    for(let testShroom of testData) {
        let prediction = decisionTree.predict(testShroom) 

        if(prediction === testShroom.class) {
            amountCorrect++
          }

          
        if(prediction == "e" && testShroom.class == "p") {
            predictedEActualP++
        }
        if(prediction == "p" && testShroom.class == "e") {
            predictedPActualE++
        }

        if(prediction == "e" && testShroom.class == "e") {
            predictedEActualE++
        }
        if(prediction == "p" && testShroom.class == "p") {
            predictedPActualP++
        }

    }

    let accuracy = amountCorrect / testData.length

    console.log("The Accuracy is: " + Math.round(accuracy*10000 *100, 4) /10000 + "%")
    // console.log(accuracy)

    console.log("predictedEActualP: "+predictedEActualP, 
            "predictedEActualP: "+predictedPActualE,
            "predictedPActualP: "+predictedPActualP,
            "predictedEActualE: "+predictedEActualE,)

    generateConfusionMatrix(predictedEActualP, predictedPActualE, predictedPActualP, predictedEActualE)
}

function generateConfusionMatrix(predictedEActualP, predictedPActualE, predictedPActualP, predictedEActualE) {
    const EEel = document.getElementById('predictedEActualE')
    const PEel = document.getElementById('predictedPActualE')
    const EPel = document.getElementById('predictedEActualP')
    const PPel = document.getElementById('predictedPActualP')

    EEel.innerText = predictedEActualE;
    PEel.innerText = predictedPActualE;
    EPel.innerText = predictedEActualP;
    PPel.innerText = predictedPActualP;
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






















