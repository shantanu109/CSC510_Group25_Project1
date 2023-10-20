# Frontend Test Case for Login Component

## Objective

The objective of this test is to verify the rendering behavior and functionality of the `Login` component with provided props.

## Test Description

### Test Setup

1. **Component Under Test (CUT):** `Login` component.
2. **Testing Library:** Enzyme for React component testing.
3. **State Management:** Redux is used with a store configured using `configureStore`.
4. **Provided Props:** An object `login` containing email and password, and a `location` object with a `state`.

### Test Steps

1. **Create Redux Store:**
   - A Redux store is created using the `configureStore` function to provide state management for the component.

2. **Define Mock Props:**
   - A `login` object is defined to mimic the login credentials that will be passed to the `Login` component during rendering.
   - A `location` object is defined to simulate the location object with a `state`.

```bash
const login = {
    email:"test",
    password:"test"
}
 
const location = {
    state : "test"
}
```
3. **Render Component with Provider:**
   - The `Login` component is shallow rendered using Enzyme's `shallow` method.
   - The component is wrapped in a `Provider` to supply the Redux store.

4. **Take Snapshot:**
   - Jest's `toMatchSnapshot()` function is used to create a snapshot of the rendered component.
   - The snapshot serves as a baseline for future comparisons.

5. **Full Render Test:**
   - The `Login` component is mounted using Enzyme's `mount` method for a full render test.
   - This tests the component's behavior with its child components and their interactions.

### Expected Output

- The expected output is that the rendered component matches the previously saved snapshot. This indicates that the component renders correctly with the provided props.

## Running the Test

To execute this test, use the appropriate testing command in your project. For example, if Jest is the testing framework, you can run:

```bash
npm test
```

![image](https://github.com/drs1951/CSC510_Group31/assets/85347670/73bb5ce4-cb5c-4247-81fb-883703135d23)
