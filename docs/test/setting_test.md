# Frontend Test Case for Settings Component

## Objective

The objective of this test is to verify the rendering behavior and functionality of the `Settings` component with provided state.

## Test Description

### Test Setup

1. **Component Under Test (CUT):** `Settings` component.
2. **Testing Library:** Enzyme for React component testing.
3. **State Management:** Redux is used with a store configured using `configureStore`.
4. **Provided State:** An object `state` representing user settings.

### Test Steps

1. **Create Redux Store:**
   - A Redux store is created using the `configureStore` function to provide state management for the component.

2. **Define Mock State:**
   - A `state` object is defined to mimic user settings, including name, password, address, etc.

```bash
const state = {
    name : "testss",
    password : "test",
    confirmPassword : "test",
    user_id : "test",
    userrole : "test",
    address: "test",
    phonenumber: "test",
    hours: "test",
    dob: "tests",
    gender: "tests",
    skills: "test"
}
```
3. **Render Component with Provider:**
   - The `Settings` component is shallow rendered using Enzyme's `shallow` method.
   - It is wrapped in a `Provider` to supply the Redux store.

4. **Take Snapshot:**
   - Jest's `toMatchSnapshot()` function is used to create a snapshot of the rendered component.
   - The snapshot serves as a baseline for future comparisons.

### Expected Output

- The expected output is that the rendered component matches the previously saved snapshot. This indicates that the component renders correctly with the provided state.

## Running the Test

To execute this test, use the appropriate testing command in your project. For example, if Jest is the testing framework, you can run:

```bash
npm test
```

Result output received upon testing this frontend api

![image](https://github.com/drs1951/CSC510_Group31/assets/85347670/beade870-f0ef-48e7-aaa2-15d6da7732b6)

