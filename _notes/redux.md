## What is Redux

Redux is a state management tool

## What is state
state is a JavaScript object. State can tell certain parts of code to show or hide.

## Local state
React components typically have their own individual state which determines how they should display and function. This is known as local state.

## Managing State using prop
If a component is used inside of another component, it creates a nest##like structure. The embedded component is called a **child component**.

If the child component requires a state value that's already available in its **parent component**, the parent component can pass the value through to the child as a prop.

Now each time the parent component's state changes, the child component's prop will be changed as well.

The problems of this solution:
- Passing state down through more than two components makes all of the components rely on each other which isn't very scalable

- Using the same state through components that don't have a parent / child relationship is redundant and can require addition calls to a backend server


## What is Redux
Redux creates a global state which you can share between React components—no parent / child relationship required.

When using Redux, you don't actually change the state, you create updated copies of the state that are then inserted into your React components.

## The Redux Store
Redux places all of the components' state in one central location. This makes it accessible to all components without requiring a parent / child relationship. The central location in which we store the state is called a store.

I like thinking of the store as a **global JavaScript object** in which all of our components can access.

This JavaScript object is immutable, meaning it cannot be changed directly, but it can be cloned and replaced with its properties updated instead. This cloning gives us the ability to see how our app looks at particular point in time due to its state changes—quite useful for debugging purposes.

## Redux Reducers
A reducer is just a function that takes two arguments and returns your app's current state. 

The two arguments it takes are:
- Your current state (JavaScript object)
- An action (also a JavaScript object)

Reducer function it will be called a couple of times:
    ## Once on initialization (this sets our store's initial state)
    ## Every time an action is dispatched

In reducer method, DO NOT updating our state directly!. we want to create an updated clone so we can view exactly what our app looks like at certain states after actions are dispatched. 

## Redux Actions
Redux actions are JavaScript objects that contain two properties: type and payload. 
These actions are "dispatched," or used as arguments by the Redux store's dispatch API method.

type property of action describe how our app is updating its state
payload containing the data that we'd like to update our main state object.

To actually "call" this action, we need to use our store's dispatch method
When called, this will run the reducer function that we created earlier.
action is passed to reducer function as the second argument.


## State from Redux to React component
react-redux provides a component called **Provider** and a function called **connect**.

The Provider component wraps around React's root App component.

We can now access our state directly within components using react-redux's connect function.

The connect function takes another function as an argument: mapStateToProps. mapStateToProps determines what state from our store we want to pull into our component.

## Event from React component to Redux
creating a mapDispatchToProps function and passing it as the second argument to connect, we're making our store's dispatch method available for use within our component's this.props object.



## Reference 
- [React Redux Tutorial for Beginners: Simply Explained](https://chriscourses.com/blog/redux)