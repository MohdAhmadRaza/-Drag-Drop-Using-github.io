let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

for (let list of lists) { // Use 'let' for the loop variable
    list.addEventListener("dragstart", function(e) { // Correct method name
        let selected = e.target;

        rightBox.addEventListener("dragover", function(e) {
            e.preventDefault();
        });

        rightBox.addEventListener("drop", function(e) {
            rightBox.appendChild(selected);
            selected = null;
        });
        leftBox.addEventListener("dragover", function(e) {
            e.preventDefault();
        });

        leftBox.addEventListener("drop", function(e) {
            leftBox.appendChild(selected);
            selected = null;
        });
    });
}
