// storing a object of an array of counters queue to store the item value
const counters = [
    { items: [], elementId: "counter1" },
    { items: [], elementId: "counter2" },
    { items: [], elementId: "counter3" }
];

// calculating the total items in each counter
function getTotalItems(items) {
    return items.reduce((sum, val) => sum + val, 0);
}

function addCustomer() {
    // Get the number of items from the input field	
    const input = document.getElementById("itemInput");
    //  converting inpuyt value into integer
    const itemVal = parseInt(input.value);
    // checking a condition if the input value is a number and greater than 0
    if (isNaN(itemVal) || itemVal <= 0) {
        alert("Please enter a valid number of items.");
        return;
    }

    // Find the counter with the least total items
    let startIdx = 0;
    // initial the counter will assigned to the first counter when all couinters are empty
    let minval = getTotalItems(counters[0].items);
    for (let i = 1; i < counters.length; i++) {
        const total = getTotalItems(counters[i].items);
        if (total < minval) {
            minval = total;
            startIdx = i;
        }
    }
    // adding new customer to best counter
    counters[startIdx].items.push(itemVal);

    // Updating UI
    updatingUI(startIdx);
    // empty my input field after adding a item to an counter
    input.value = "";
}


function updatingUI(index) {
    // storing the html elements data into variables
    const counterDataId = counters[index];
    const container = document.getElementById(counterDataId.elementId);
    const ul = container.querySelector("ul");
    const totalElement = container.querySelector(".total");
    const customersElem = container.querySelector(".customers");

    ul.innerHTML = "";
    counterDataId.items.forEach((item, i) => {
        const li = document.createElement("li");

        const spanText = document.createElement("span");
        spanText.textContent = `🛒 ${item} items`;

        const removeBtn = document.createElement("span");
        removeBtn.textContent = "-";
        removeBtn.className = "remove";
        removeBtn.onclick = () => {
            counterDataId.items.splice(i, 1);
            updatingUI(index);
        };

        li.appendChild(spanText);
        li.appendChild(removeBtn);
        ul.appendChild(li);
    });

    totalElement.textContent = `Total Items: ${getTotalItems(counterDataId.items)}`;
    customersElem.textContent = `👥 ${counterDataId.items.length} customers`;
}

