# Frontend Test Case for History Component

## Objective

The objective of this test is to verify the rendering behavior of the `History` component with provided props.

## Test Description

### Test Setup

1. **Component Under Test (CUT):** `History` component.
2. **Testing Library:** Enzyme for React component testing.
3. **State Management:** Redux is used with a store configured using `configureStore`.
4. **Provided Props:**
   - `user`: Simulated user object.
   - `application`: Empty array representing application history.

### Test Steps

1. **Create Redux Store:**
   - A Redux store is created using the `configureStore` function to provide state management for the component.

2. **Define Props:**
   - `user` object and an empty array `application` are defined to mimic the props that will be passed to the `History` component during rendering.

```bash
const user = {
    _id : "test"
};

const application = []
```

3. **Render Component:**
   - The `History` component is rendered using Enzyme's `mount` method.
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

![image](https://github.com/drs1951/CSC510_Group31/assets/85347670/571ee48e-d0cb-4889-ab81-6ae7a5a3cef2)

