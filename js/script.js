// We code it together

// 1. Select heading h2
const heading2 = document.querySelector("h2");{

}
console.log(heading2);

// 2. Select element with class .heading2
const headingByIsac = document.querySelector("heading2") 


console.log(headingByIsac);

// 3. Select element with id #list using querySelector
const list = document.querySelector("#list");
console.dir(list)

// 4. Select element with id #list using getElementById
const list2 = document.getElementById("list");
console.dir(list2)

// 5. Select single li
const listItem = document.querySelector("li");
console.dir(listItem)

// 6.
//  a. Select Multiple li's
const listItems = document.querySelectorAll("li");
console.log(listItems);
//  b. Loop on the list items
for (let i = 0; i < listItems.length; i++) {
    console.log(listItems[i].innerHTML)
}


// 7.
    // a. select h1 element
    const heading1 = document.querySelector("h1");
    console.log(heading1)
    // b. Change the color of that h1 to be purple
    heading1.style.color= "red";

    // c. Change the border to be 1px solid green
    heading1.style.borderColor = "green";
    // d. Change background colour to be light gray
    heading1.style.backgroundColor = "grey";
    // e. Change the padding to be 1em ( remember that 1em is the base in px you put on the body )
    heading1.style.border = "5px solid green";
    heading1.style.padding = "1em";

heading2.style.color = "blue";
heading2.style.backgroundColor = "yellow";

list.style.color = "orange";
list.style.backgroundColor = "green";

const myDiv = document.querySelector("div");
console.dir(myDiv)


myDiv.classList.add("container");
console.dir(myDiv);

myDiv.classList.add("second-class")
console.dir(myDiv)

const pageHeading = document.querySelector("h1");
pageHeading.innerText = "isac";

const allTheListItems = document.querySelectorAll("li");
for(let i = 0; i < allTheListItems.length; i++) {
    allTheListItems[i].innerText = allTheListItems[i].innerText + " change";


}

const pageHeading2 = document.querySelector("h1");
pageHeading2.innerHTML = " updatede isac";

const someContainer = document.querySelector("div");
someContainer.innerHTML = `<p>
                            <b>Bold text </b> not bold
                          </p>`;


const list3 = document.querySelector("ul");
const existingHTML = list3.innerHTML;
const newHTMLLi = `<li>hello i am an new item</li>`
list3.innerHTML = existingHTML + newHTMLLi
