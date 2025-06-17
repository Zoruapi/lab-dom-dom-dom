
document.addEventListener('DOMContentLoaded', function () {
    let divButton = document.createElement('div');
    let button = document.createElement('button');
    let buttonText = document.createTextNode("Add Square");
    divButton.className = "d-grid col-6 mt-3 mx-auto";
    button.type = "button";
    button.className = "btn btn-info";
    button.appendChild(buttonText);
    divButton.appendChild(button)
    document.body.appendChild(divButton);
})