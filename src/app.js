import { DecisionTree } from "../libraries/decisiontree.js"
import { VegaTree } from "../libraries/vegatree.js"

const csvFile = "./data/mushrooms.csv"
const trainingLabel = "class"
const ignoredColumns = ['']

function loadData() {
    Papa.parse(csvFile, {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: (results) => console.log(results.data)
    })
}

function trainModel(data){
    let decisionTree = new DecisionTree({
        ignoredAttributes: ignoredColumns,
        traingSet: data,
        categoryAttr: trainingLabel
    })

    let visual = new VegaTree('#view', 800, 400, decisionTree.toJSON())
}

loadData()