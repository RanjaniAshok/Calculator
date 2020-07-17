var data;
var splitData;
var dataOne;
var operator;
var dataTwo;
var output;

function getInput(input) {
    var n = input
    data = document.getElementById("keys").value += n

}

function calculate() {
    //splitting data and store in splitData 
    splitData = data.split('')
    //iterating through splitData and seperate the opearators
    for (var i = 0; i < splitData.length; i++) {
        if (splitData[i] == '+' || splitData[i] == '-' || splitData[i] == 'x' || splitData[i] == '/' || splitData[i] == '%') {

            operator = splitData[i]
            //storing the index of the operator in length
            var length = i
            var fetchedData1 = '';
            var fetchedData2 = '';
            //iterating upto the length and splitting the firstdata
            for (i = 0; i < length; i++) {
                fetchedData1 = fetchedData1 + splitData[i]
            }
            //iterating from length and splitting the seconddata

            for (i = length + 1; i < splitData.length; i++) {
                fetchedData2 = fetchedData2 + splitData[i]
            }
        }
    }
    //convert the string into float
    dataOne = parseFloat(fetchedData1)
    dataTwo = parseFloat(fetchedData2)
    //temporarily store dataOne in output

    output = dataOne


    if (operator == '+') {
        // Addition
        outputCal = document.getElementById("keys").value =
            output + dataTwo

    }
    if (operator == '-') {
        // subtraction
        output = document.getElementById("keys").value = output - dataTwo

    }
    if (operator == 'x') {
        // multiplication
        output = document.getElementById("keys").value = output * dataTwo

    }
    if (operator == '/') {
        // Division
        output = document.getElementById("keys").value = output / dataTwo
    }
    if (operator == '%') {
        // percentage
        let dataTwo = 100
        output = document.getElementById("keys").value = output / dataTwo
        console.log(output)
    }

}

function clr() {
    //used to clear the input data
    document.getElementById("keys").value = ''

}

function signed()
// +/- --> used to change the sign of the output

{
    document.getElementById("keys").value = output * -1

}
