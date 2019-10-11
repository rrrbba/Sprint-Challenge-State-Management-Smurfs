1. What problem does the context API help solve?

    - You don't have to pass props down from component to component.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions contains the action type and data we want associated with that action type. A reducer is where the actions are dispatched to and they update the state. The store is an object that holds everything that changes in your app and it contains state for the app.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is immutable unlike component state. You would use application state when you have large apps as opposed to component state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    It is middleware for Redux. It extends your actions so that you have the ability to consume promises.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    My favorite as of now is Redux becuase I feel I have a better understanding of it as opposed to context API. I've also had more practice with Redux which has allowed me to understand what does what.
