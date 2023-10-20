# Frontend Test Case for Signup Component

## Objective

The objective of this test is to verify the rendering behavior and functionality of the `Signup` component.

## Test Description

### Test Setup

1. **Component Under Test (CUT):** `Signup` component.
2. **Testing Library:** Enzyme for React component testing.
3. **State Management:** Redux is used with a store configured using `configureStore`.
4. **Error State:** An object `error` is provided to simulate potential error scenarios.

### Test Steps

1. **Create Redux Store:**
   - A Redux store is created using the `configureStore` function to provide state management for the component.

2. **Define Error State:**
   - An `error` object is defined to simulate scenarios where errors may occur during signup.

3. **Render Component with Provider:**
   - The `Signup` component is mounted using Enzyme's `mount` method.
   - It is wrapped in a `Provider` to supply the Redux store.

4. **Take Snapshot:**
   - Jest's `toMatchSnapshot()` function is used to create a snapshot of the rendered component.
   - The snapshot serves as a baseline for future comparisons.

### Expected Output

- The expected output is that the rendered component matches the previously saved snapshot. This indicates that the component renders correctly and is ready for user interaction.

## Running the Test

To execute this test, use the appropriate testing command in your project. For example, if Jest is the testing framework, you can run:

```bash
npm test
```

Result output received upon testing this frontend api

![image](https://github.com/drs1951/CSC510_Group31/assets/85347670/10a7d341-35f7-44be-9b49-9c78181eed10)

