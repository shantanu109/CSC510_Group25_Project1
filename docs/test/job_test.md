# Frontend Test Case for Job Component

## Objective

The objective of this test is to verify the rendering behavior and functionality of the `Job` component with provided props.

## Test Description

### Test Setup

1. **Component Under Test (CUT):** `Job` component.
2. **Testing Library:** Enzyme for React component testing.
3. **State Management:** Redux is used with a store configured using `configureStore`.
4. **Provided Props:**
   - `job`: An object representing job details.
   - `auth`: An object representing user details.

### Test Steps

1. **Create Redux Store:**
   - A Redux store is created using the `configureStore` function to provide state management for the component.

2. **Define Props:**
   - `job` object with job details and a `user` object with user details are defined to mimic the props that will be passed to the `Job` component during rendering.

```bash
const job = {
    _id: 1,
    name: 'test',
    status: '0',
    location: 'test',
    description: 'test',
    pay: 'test',
    schedule: 'test',
    managerid: 'test',
};

const user ={
    _id: 1,
}

```
3. **Render Component for createJob:**
   - The `createJob` component is shallow rendered using Enzyme's `shallow` method.
   - A snapshot is taken to ensure the component renders correctly.

4. **Render Component with Provider:**
   - The `Job` component is rendered using Enzyme's `mount` method.
   - The component is wrapped in a `Provider` to supply the Redux store.

5. **Take Snapshot:**
   - Jest's `toMatchSnapshot()` function is used to create a snapshot of the rendered component.
   - The snapshot serves as a baseline for future comparisons.

6. **HandleApplyTest:**
   - The `Job` component is rendered with the `HandleApplyTest` scenario.
   - The component is wrapped in a `Provider` with a specified `auth` prop.
   - This test case checks if the component renders correctly when an `auth` object is provided.

### Expected Output

1. For `createJob`, the expected output is that the rendered component matches the previously saved snapshot. This indicates that the component's structure and appearance have not changed unintentionally.

2. For `Job` component, the expected output is that the rendered component matches the previously saved snapshot. This indicates that the component renders correctly with the provided props.

3. For `HandleApplyTest`, the expected output is that the component renders correctly with the provided `auth` object.

## Running the Test

To execute this test, use the appropriate testing command in your project. For example, if Jest is the testing framework, you can run:

```bash
npm test
```

Result output received upon testing this frontend api

![image](https://github.com/drs1951/CSC510_Group31/assets/85347670/36b070d5-b4d2-4283-aab0-17fad53b4ab8)
