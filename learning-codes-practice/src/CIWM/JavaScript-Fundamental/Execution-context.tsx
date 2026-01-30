const ExecutionContext = () => {

    return (
        <>
        
        </>
    )
}
export default ExecutionContext;

//Definition for Execution context:
//Execution context is a environment where javascript code being evaluated and executed.
//Whenever javascript run code that is being does in execution context.

// There are three types of execution context.
// 1.)Global execution context
// 2.)Function execution context
// 3.)Eval execution context

// 1.)Gloabal execution context
// When your JS file starts running, before any line executes, JS creates the Global Execution Context.
// Only one Gloabl execution context exist per program.

// GEC contains two phases.
// 1.) Creation phase also known as (Hoisting).
// 2.) Execution Phase

// Phase 1: Creation Phase (a.k.a. Hoisting phase)
// JS scans the code and sets up memory.
// this → points to window (browser) or global (Node)
// Variables (var) → allocated memory, initialized to undefined
// Functions → stored entirely in memory
// ❗ Nothing is executed yet.
// 🔹 Phase 2: Execution Phase
// Code runs line by line
// Variables get actual values
// Functions are executed when called

