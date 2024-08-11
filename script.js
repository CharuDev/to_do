document.addEventListener("DOMContentLoaded", () => {
    var button = document.getElementById("button");
    var taskList = document.getElementById("taskList");

    button.addEventListener("click", () => {
        var inputValue = document.getElementById("inp").value;

        if (inputValue.trim() !== "") {
            // Create a new list item
            var listItem = document.createElement("li");
            listItem.textContent = inputValue;

            // Add the new list item to the task list
            taskList.appendChild(listItem);

            // Clear the input field
            document.getElementById("inp").value = "";
        } else {
            alert("Please enter a task.");
        }
    });
});
