<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>B: ReferenceError: greetign is not defined.</b></summary>
<p>

#### Answer:

<i> Here variable is greeting but then attempted to assign an empty object to a variable called greetign, which is a typo and not declared anywhere. As a result, when we try to log greetign, JavaScript will throw a ReferenceError because greetign is not defined in your code. </i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>C: "12".</b></summary>
<p>

#### Answer: ?

<i>In JavaScript, the + operator is used for both addition and string concatenation. When we use the + operator with a string and a number, JavaScript will treat it as string concatenation. Here sum function call, you're passing 1 (a number) and "2" (a string) as arguments. JavaScript will convert the number 1 to a string and then concatenate it with the string "2", resulting in the string "12". Therefore, the function will return the string "12".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>A: ['🍕', '🍫', '🥑', '🍔'].</b></summary>
<p>

#### Answer: ?

<i>Here first create an array called food with four elements. Then, create an object info with a property favoriteFood that is initially assigned the first element of the food array, which is "🍕".

However, after that, we change the value of info.favoriteFood to "🍝". This change only affects the info object, and it doesn't modify the original food array. So, when you log the food array to the console, it remains unchanged and will output ['🍕', '🍫', '🥑', '🍔'].</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>B: Hi there, undefined.</b></summary>
<p>

#### Answer: ?

<i>Here the sayHi function, there is a parameter name that is used in the template string. When you call sayHi() without passing any arguments, the name parameter is undefined because you didn't provide a value for it. As a result, the template string includes "undefined," and the function returns "Hi there, undefined."</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>C: 3</b></summary>
<p>

#### Answer: ?

<i>num = 0 (falsy) -> count remains 0
num = 1 (truthy) -> count becomes 1
num = 2 (truthy) -> count becomes 2
num = 3 (truthy) -> count becomes 3</i>

</p>
</details>