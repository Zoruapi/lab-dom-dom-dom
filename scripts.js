var squareNumber = 1;

//==========EVENT LISTENERS============

//Creates de button after loading the page
document.addEventListener('DOMContentLoaded', function () {
    //Creating button
    let divButton = document.createElement('div');
    let button = document.createElement('button');
    let buttonText = document.createTextNode("Add Square");

    //Creating row for the squares
    let squareRow = document.createElement('section');

    //Creating class name and id for the button
    divButton.className = "d-grid col-6 mt-3 mx-auto";
    button.type = "button";
    button.className = "btn btn-info";
    button.id = "btnSq";

    //Creating class name and id for the row
    squareRow.className = "row mt-3 justify-content-around p-3";
    squareRow.id = "squareRow";

    //Adding elements to the body
    button.appendChild(buttonText);
    divButton.appendChild(button)
    document.body.appendChild(divButton);
    document.body.appendChild(squareRow);
})

//Defines what happens when an element is clicked
document.addEventListener('click', function (event) {
    let element = event.target;
    if (element.id == "btnSq") {
        createSquare();
    } else if (Number(element.id) > 0) {
        changeColor(element);
    } else if (element.className == "btn-close") {
        element.parentNode.remove();
    }
})

//Defines what happens when an element is double clicked
document.addEventListener('dblclick', function (event) {
    let element = event.target;
    if (Number(element.id) > 0) {
        if ((Number(element.id) % 2) == 0) {
            squareIsEven(element);
        } else {
            squareIsOdd(element);
        }
    }
})

//Defines what happens when a mouse moves over an element
document.addEventListener('mouseover', function (event) {
    const element = event.target;
    if (Number(element.id) > 0) {
        showSquareId(element);
    }
})

//Defines what happens when a mouse moves out of an element
document.addEventListener('mouseout', function (event) {
    const element = event.target;
    if (Number(element.id) > 0) {
        hideSquareId(element);
    }
})

//==========SCRIPTS============

//Creates a new square
function createSquare() {
    let square = document.createElement('div');
    let divSquare = document.getElementById("squareRow");
    let squareIdP = document.createElement('p');
    let squareId = document.createTextNode(squareNumber);

    //Creating class name and id for the square
    square.className = "col-12 col-md-6 col-lg-3 black-square d-flex justify-content-center align-items-center border rounded";
    square.id = squareNumber;
    squareIdP.className = "idParagraph align-middle";


    squareNumber++;
    //Adding square to the row
    squareIdP.appendChild(squareId);
    square.appendChild(squareIdP);
    divSquare.appendChild(square);
}

//Shows the id of a square
function showSquareId(element) {
    element.firstChild.style.display = "block";
}

//Hides the id of a square
function hideSquareId(element) {
    element.firstChild.style.display = "none";
}

//Changes the background color of a square to a random color
function changeColor(element) {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let rbgValue = "#" + randomColor;
    element.style.background = rbgValue;
}

//When the square id is even removes the next square from the page
function squareIsEven(element) {
    let parent = element.parentNode;
    for (var i = parent.childNodes.length; i > 0; i--) {
        if (Number(parent.childNodes[i - 1].id) < Number(element.id)) {
            parent.childNodes[i - 1].remove();
            return;
        }
    }
    document.body.appendChild(noMoreSquares(1));
}

//When the square id is odd removes the previous square from the page
function squareIsOdd(element) {
    let parent = element.parentNode;
    for (var i = 0; i < parent.childNodes.length; i++) {
        if (Number(parent.childNodes[i].id) > Number(element.id)) {
            parent.childNodes[i].remove();
            return;
        }
    }
    document.body.appendChild(noMoreSquares(0));
}

//Shows the alert saying that there are no other squares to remove
function noMoreSquares(number) {
    let alertDiv = document.createElement('div');
    let alertTextDiv = document.createElement('div');
    let closeAlert = document.createElement('button');
    let alertText;

    //Deciding which message to show
    if (number == 1) {
        alertText = document.createTextNode("There isn't a square before the clicked square");
    } else if (number == 0) {
        alertText = document.createTextNode("There isn't a square after the clicked square");
    }
    alertTextDiv.appendChild(alertText);

    //Creating attributes for the alert
    alertDiv.role = "alert"
    alertDiv.className = "alert alert-danger alert-dismissible d-grid col-6 mt-3 mx-auto";
    //Creating attributes for the close alert button
    closeAlert.type = "button";
    closeAlert.className = "btn-close";

    alertTextDiv.appendChild(alertText);
    alertDiv.appendChild(alertTextDiv);
    alertDiv.appendChild(closeAlert);
    return alertDiv;
}
