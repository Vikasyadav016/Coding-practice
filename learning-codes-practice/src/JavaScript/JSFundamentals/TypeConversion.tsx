//This components belongs to Type Conversion concept of javascript.

import { Card, Container } from "react-bootstrap";


// Type conversion definition
/*
Most of the time, operators and functions automatically convert the values given to them to the right type.

Type conversion (also called **type coercion**) in **JavaScript** refers to changing a 
value from one data type to another — for example, turning a string into a number or a number into a boolean.

There are **two main kinds**:

* **Explicit conversion (Type Casting)** — you do it intentionally.
* **Implicit conversion (Type Coercion)** — JavaScript does it automatically.

---

## 🧩 1. Explicit Type Conversion (Manual)

### 🔹 To String

You can explicitly convert values to strings using:

```js
String(123);       // "123"
(123).toString();  // "123"
true.toString();   // "true"
null + '';         // "null" (also coerces to string)
```

---

### 🔹 To Number

You can convert other types into numbers using:

```js
Number("123");   // 123
Number("123abc"); // NaN
Number(true);     // 1
Number(false);    // 0
Number(null);     // 0
Number(undefined);// NaN
parseInt("42px"); // 42
parseFloat("3.14"); // 3.14
```

---

### 🔹 To Boolean

You can use the `Boolean()` function or double negation (`!!`):

```js
Boolean(0);       // false
Boolean("");      // false
Boolean(null);    // false
Boolean(undefined);// false
Boolean(NaN);     // false
Boolean("hello"); // true
Boolean(123);     // true

!!"hello"; // true
!!0;       // false
```

---

## ⚙️ 2. Implicit Type Conversion (Automatic)

JavaScript sometimes **automatically converts** types depending on the operation:

### 🔹 String Conversion

When using the `+` operator with a string:

```js
'5' + 1;     // "51"
1 + '5';     // "15"
'Hello ' + 5; // "Hello 5"
```

---

### 🔹 Number Conversion

When using arithmetic operators other than `+`:

```js
'5' - 2;   // 3   (string '5' converted to number)
'10' * 2;  // 20
'6' / 3;   // 2
'5' * '2'; // 10
```

---

### 🔹 Boolean Conversion in Conditions

```js
if ("") console.log("truthy");  // won't run
if ("hello") console.log("truthy"); // runs
if (0) console.log("truthy");   // won't run
if (1) console.log("truthy");   // runs
```

---

## 🧠 3. Common Gotchas

```js
0 == '0';        // true  (type coercion)
0 === '0';       // false (no coercion)
false == '0';    // true
false === '0';   // false
null == undefined; // true
null === undefined; // false
```

To avoid confusion, **prefer `===` and `!==`** for strict comparisons (no coercion).

---

## ✅ Summary Table

| Value       | To Boolean | To Number | To String   |
| ----------- | ---------- | --------- | ----------- |
| `false`     | false      | 0         | "false"     |
| `true`      | true       | 1         | "true"      |
| `0`         | false      | 0         | "0"         |
| `""`        | false      | 0         | ""          |
| `"123"`     | true       | 123       | "123"       |
| `null`      | false      | 0         | "null"      |
| `undefined` | false      | NaN       | "undefined" |
| `NaN`       | false      | NaN       | "NaN"       |

---

Would you like me to give you a **React example** where type conversion matters (e.g., converting form input values)?

*/

const TypeConversion = () => {
    // To String
    const num1 = 123;
    const toStr1 = String(num1);
    return (
        <>
            <Container>
                <Card>
                    <Card.Header> Type Conversion concept of Javascript.</Card.Header>
                    <Card.Body>
                        <p>1. To String coversion</p>
                        <p>Stored Value of num1 variable: {num1}</p>
                        <p>Data type of num1 variable is : {typeof num1}</p>
                        <strong>Conversion start below</strong>
                        <p>Stored value of num1 Variable is still : {num1}</p>
                        <p>The data type of variable num1 after converting:  {typeof toStr1}</p>

                    </Card.Body>
                </Card>
            </Container>


        </>

    )
}

export default TypeConversion;