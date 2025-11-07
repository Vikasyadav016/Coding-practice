// loop concepts in Javascript

import { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";


// Definition of loop
/*
A loop in JavaScript is a programming construct that allows developers 
to execute a block of code multiple times, either for a fixed number of iterations or 
until a specified condition is no longer true.

There a various types of loop supported or used in javascript.
Like:-
1.)for loop
2.)while loop
3.)do-while loop
5.)for....in 
6.)for....of
*/

//for loop
for (let i = 0; i < 5; i++) {
    console.log("For Loop:", i);
}

// while loop
{
    let i = 0;
    while (i < 5) {
        console.log("While Loop:", i);
        i++;
    }
}

// do while loop
{
    let i = 0;
    do {
        console.log("Do-While Loop:", i);
        i++;
    } while (i < 5);
}

// for...of
const arr = [10, 20, 30];
for (const value of arr) {
    console.log("For-Of Loop:", value);
}

// for...in
const user: any = { name: "Alice", age: 25 };
for (const key in user) {
    console.log("For-In Loop:", key, "=", user[key]);
}


const LoopsInJavascript = () => {
    const [triangle, setTriangle] = useState<any>([]);
    const [reversetriangle, setReversetriangle] = useState<any>([]);
    const [rectangle, setrectangle] = useState<any>([]);

    function triangleOfStar() {
        const rows = [];
        for (let i = 1; i <= 5; i++) {
            let row = "";
            for (let j = 1; j <= i; j++) {
                row += "*";
            }
            rows.push(row);
        }
        setTriangle(rows);
    }

    function reverseTriangleFun() {
        const rows = [];
        for (let i = 5; i >= 1; i--) {
            let row = "";
            for (let j = 1; j <= i; j++) {
                row += "*";
            }
            rows.push(row);
        }
        setReversetriangle(rows);
    }

    function genrateRectangle() {
        let rows = [];
        for (let i = 1; i <= 5; i++) {
            let row = "";
            for (let j = 1; j < 5; j++) {
                row += "*"
            }
            rows.push(row);
        }
        setrectangle(rows)
    }


    return (
        <Container className="mt-4">
            <Card>
                <Card.Header>Loops Concept in JavaScript</Card.Header>
                <Card.Body>
                    <p><strong>1. for loop:</strong> Used when you know how many times you want to run the loop.</p>
                    <p><strong>2. while loop:</strong> Used when you want to repeat a block while a condition is true.</p>
                    <p><strong>3. do...while:</strong> Similar to while, but runs the code at least once.</p>
                    <p><strong>4. for...of:</strong> Used to loop through iterable objects like arrays, strings, or sets.</p>
                    <p><strong>5. for...in:</strong> Used to loop through object properties (keys).</p>

                    {triangle.length > 0 && (
                        <pre>
                            {triangle.map((line: any, index: any) => (
                                <div key={index}>{line}</div>
                            ))}
                        </pre>
                    )}
                    {reversetriangle.length > 0 && (
                        <pre>
                            {reversetriangle.map((line: any, index: any) => (
                                <div key={index}>{line}</div>
                            ))}
                        </pre>
                    )}
                    {rectangle.length > 0 && (
                        <pre>
                            {rectangle.map((line: any, index: any) => (
                                <div key={index}>{line}</div>
                            ))}
                        </pre>
                    )}
                </Card.Body>
                <Card.Footer>
                    <Button style={{ marginRight: '5px' }} variant="primary" onClick={triangleOfStar}>
                        Generate Triangle
                    </Button>
                    <Button style={{ marginRight: '5px' }} variant="primary" onClick={reverseTriangleFun}>
                        Generate Reverse Triangle
                    </Button>
                    <Button style={{ marginRight: '5px' }} variant="primary" onClick={genrateRectangle}>
                        Generate Rectangle
                    </Button>
                </Card.Footer>
            </Card>
        </Container>
    );
};

export default LoopsInJavascript;
