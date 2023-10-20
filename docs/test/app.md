# Frontend Test Case for App Component

## Objective

The objective of this test is to verify the rendering behavior of the `App` component with provided props.

## Test Description

### Test Setup

1. **Component Under Test (CUT):** `App` component.
2. **Testing Library:** Enzyme for React component testing.
3. **State Management:** Redux is used with a store configured using `configureStore`.
4. **Provided Props:**
   - `auth`: Simulated authentication status (logged in).
   - `job`: Simulated job description.

### Test Steps

1. **Create Redux Store:**
   - A Redux store is created using the `configureStore` function to provide state management for the component.

2. **Define Props:**
   - `auth` and `job` objects are defined to mimic the props that will be passed to the `App` component during rendering.

```bash
const auth = {
    isLoggedIn : "T"
};

const job = {
    desc : "test"
}
```

3. **Render Component:**
   - The `App` component is rendered using Enzyme's `mount` method.
   - The component is wrapped in a `Provider` to supply the Redux store.

4. **Take Snapshot:**
   - Jest's `toMatchSnapshot()` function is used to create a snapshot of the rendered component.
   - The snapshot serves as a baseline for future comparisons.

### Expected Output

The expected output is that the rendered component matches the previously saved snapshot. This indicates that the component's structure and appearance have not changed unintentionally.

## Running the Test

To execute this test, use the appropriate testing command in your project. For example, if Jest is the testing framework, you can run:

```bash
npm test
```

Result output received upon testing this frontend api

![image](https://github.com/drs1951/CSC510_Group31/assets/85347670/893e2b29-6720-4991-9598-59862cf5bc37)


