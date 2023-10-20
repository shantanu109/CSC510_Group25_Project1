# Frontend Test Case for Goal Component

## Objective

The objective of this test is to verify the rendering behavior of the `Goal` component with provided props.

## Test Description

### Test Setup

1. **Component Under Test (CUT):** `Goal` component.
2. **Testing Library:** Enzyme for React component testing.
3. **State Management:** Redux is used with a store configured using `configureStore`.
4. **Provided Props:**
   - `error`: Simulated error object.

### Test Steps

1. **Create Redux Store:**
   - A Redux store is created using the `configureStore` function to provide state management for the component.

2. **Define Props:**
   - `error` object is defined to mimic the prop that will be passed to the `Goal` component during rendering.

3. **Render Component:**
   - The `Goal` component is rendered using Enzyme's `mount` method.
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

![image](https://github.com/drs1951/CSC510_Group31/assets/85347670/9a0ab264-d4da-45e7-b59d-97ae3a870679)

