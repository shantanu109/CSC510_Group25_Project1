# Frontend Test Case for Update Component

## Objective

The objective of this test is to verify the rendering behavior and functionality of the `Update` component.

## Test Description

### Test Setup

1. **Component Under Test (CUT):** `Update` component.
2. **Testing Library:** Enzyme for React component testing.
3. **State Management:** Redux is used with a store configured using `configureStore`.
4. **Dummy Data:** A dummy object `dummyVal` is provided to simulate the authentication state and job information.

### Test Steps

1. **Create Redux Store:**
   - A Redux store is created using the `configureStore` function to provide state management for the component.

2. **Define Dummy Data:**
   - A `dummyVal` object is defined to simulate the authentication state and job information that would typically be provided by Redux.

```bash
const dummyVal = {
  auth: {
    user: {
      email: 'test@gmail.com',
      _id: 'tester123',
      name: 'Tester',
    },
  },
  job: [
    {
      _id: 1,
      itemname: 'Test Number 1',
      quantity: 5,
    },
    {
      _id: 2,
      itemname: 'Test Number 2',
      quantity: 10,
    },
  ],
};

```

3. **Render Component with Provider:**
   - The `Update` component is shallow rendered using Enzyme's `shallow` method.
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

![image](https://github.com/drs1951/CSC510_Group31/assets/85347670/079d1268-4a63-41a2-a508-a060134e0c42)

