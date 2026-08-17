# Short Response Questions

Answer the following questions in 2-4 sentences each. Be specific and use vocabulary from the lessons. Your responses will be evaluated out of 6 points. You can earn 3 points for writing quality and 3 points for the accuracy and precision of the technical content.

## Question 1: Loading JavaScript

Examine the HTML code below:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Button Clicker</title>
    <link rel="stylesheet" href="style.css" />
    <script src="index.js"></script>
  </head>
  <body>
    <h1>Button Clicker</h1>
    <button id="my-button">Click Me!</button>
  </body>
</html>
```

In the `index.js` file, they have the code:

```js
document.querySelector('#my-button').style.color = 'red';
```

But an error is thrown.

1. What is the error (be specific)?
2. Why does this error occur?
3. What can be done to fix it?

**Your Answer:**

1. The error thrown is '**Uncaught TypeError** cannot read properties of null (reading 'style)'.

2. This error occurs because we placed our `<script>` **tag** before our `<body>`, so it runs and tries to select `#my-button` before the browser has parsed the <body> and created that element at that point in time document.querySelector('#my-button') returns null.

3. In order to fix this the `<script>` tag has to be placed at the bottom of our `<body>`.

## Question 2: event.target vs event.currentTarget

Consider this HTML:

```html
<div id='button-container'>
  <button>Click Me</button>
</div>
```

And this JavaScript:

```js
const div = document.querySelector('#button-container');
div.addEventListener('click', (event) => {
  console.log(event.target);
  console.log(event.currentTarget);
});
```

When a user clicks the button, both `event.target` and `event.currentTarget` are logged. Explain what each property represents in this scenario and why they might be different.

**Your Answer:**
- `event.target` in this instance, represents the `button`. The button is what triggered the event.
- `event.currentTarget` represents `button-container` which is the **listener element** that we attach the `addEventListener` to that triggers the event.

- The difference is that `event.currentTarget` represents the container in which the element and eventlistener is attached to while `event.target` represents the element that triggered the event.

## Question 3: Creating Elements Dynamically

Look at the JavaScript code below that is attempting to create a product card dynamically and add it to the body.

```js
const product = {
  name: 'iPhone 17',
  price: 1099.99,
  img: './images/iphone17.png'
}

/* Desired structure: 
<div>
  <img src="./images/iphone17.png">
  <h3>iPhone 17</h3>
  <p>$1099.99</p>
</div>
*/

const productCard = document.createElement('div');
const productImage = document.createElement('img');
const productName = document.createElement('h3');
const productPrice = document.createElement('p');

productImage.src = product.img;
productName.textContent = product.name;
productPrice.textContent = `$${product.price}`;

document.body.append(productCard);
```

However, when the page loads and the code is executed, the user isn't able to see the image, product name or product price. What is the issue with this code?

**Your Answer:**
- The reason that the `image`, `product`, and `price` are not loading is because we have to link the parent element to the children element. In order to link them we would have to `append` the `children element` to the `parent element` by using the following syntax:
 `(productCard.append(productImage, productName, productPrice)`

 - After the linking the `children elements` to the `parent elements`, the `parent elements` must be linked/ added to the `document`.


## Question 4: Event Delegation and event.target.closest()

Consider this HTML:

```html
<ul id="todo-list">
  <li id="todo-1">
    <p class='description'>Walk the dog</p>
    <p class='is-complete'>✅</p>
  </li>
  <li id="todo-2">
    <p class='description'>Take out the trash</p>
    <p class='is-complete'>❌</p>
  </li>
  <li id="todo-3">
    <p class='description'>Wash the dishes</p>
    <p class='is-complete'>❌</p>
  </li>
</ul>
```

And this JavaScript:

```js
const todoList = document.querySelector('#todo-list');
todoList.addEventListener('click', (event) => {
  const clickedLi = event.target.closest('li');

  if (!clickedLi) return;

  clickedLi.querySelector('.is-complete').textContent = "✅";
});
```

1. What is the name for this approach to event handling? What is the alternative and why is this approach better?
2. Explain what the `event.target.closest('li')` method does and why it is essential to this approach.

**Your Answer:**
- TThe term used for this method is event delegation. The other option would be to add separate event listener for each item on the list. But event delegation is better because it allows us to use only one event listener for all the items on the list, and if we later add more items to that list they will automatically be served by that same listener.

event.target.closest('li') helps to find the matching ancestor from where the user has clicked on the item's child. And this is important because the click event listener is on the parent and therefore it fits any of its descendants.

## Question 5: NodeList

Do some independent learning and reading about the `querySelectorAll()` method. Then, answer these questions:

1. What is the difference between `querySelectorAll()` and `querySelector()`. Give an example of when you would use `querySelectorAll()`.
2. What is the difference between a `NodeList` and an array? Why is it important to know this difference?

**Your Answer:**

- The method querySelector() is used to access only the single first element that matches the provided CSS selector, whereas querySelectorAll() will access all the elements that match the CSS selector given as an input in a NodeList. 
Using querySelectorAll() is crucial for when one wants to influence groups of elements on a particular webpage. 
As an example, whenever you want to check and filter as to which of the DOM elements which have the class .playlist-card is selected, one would access those elements using the aforementioned method.

- What is important to know is that NodeList has similarities with the array and one can loop through its elements using forEach(); however, this object is not the real array because NodeList doesn’t possess the methods of arrays such as .map(), .filter() and .reduce() in most browsers. Such facts should be taken into consideration as when coding it is possible to make an assumption that NodeList methods will function the same way as those of arrays, which may lead one to some errors. In case the relevant DOM objects require the use of array methods, it is necessary to convert the NodeList to an array by calling array.from(nodeList)


