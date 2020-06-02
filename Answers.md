# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

    Created by Jordan Walke of Facebook, React is a component based UI library.React creates a 'virtual DOM' that it runs in instead of running in the 'real' DOM and gives a virtual view of what those elements would look like in the actual DOM. The purspose of it was to manage data without it slowing down the DOM or browser giving large amounts of changing data to be managed at once efficiently.

2. Describe component state.

    A 'place' inside a JS object that something is stored (properties, values, etc)

3. Describe props.

    State data/objects that are passed from one component to another

4. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

    A side effect is anything that is affected by outside forces, so outside of the function scope. To sync effects we can use the useEffect() hook in React by passing a dependency array as the second argument.