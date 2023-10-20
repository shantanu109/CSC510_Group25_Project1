# Frontend Test Case for Notification Component

## Objective

The objective of this test is to verify the rendering behavior and functionality of the `Notification` component with provided props.

## Test Description

### Test Setup

1. **Component Under Test (CUT):** `Notification` component.
2. **Testing Library:** Enzyme for React component testing.
3. **State Management:** Redux is used with a store configured using `configureStore`.
4. **Provided Props:** An object `auth` containing user information and an array of `job` items.

### Test Steps

1. **Create Redux Store:**
   - A Redux store is created using the `configureStore` function to provide state management for the component.

2. **Define Mock Props:**
   - A `mockAuth` object is defined to simulate user authentication details.
   - A `mockJob` array is defined to mimic job items with item names, quantities, and expiry dates.

```bash
const mockAuth = {
  user: {
    email: 'test@example.com',
    _id: 'test123',
    name: 'Test User',
  },
  error: null,
};

const mockJob = [
  {
    _id: 1,
    itemname: 'Test Item 1',
    quantity: 5,
    dateexpired: '2023-11-01',
  },
  {
    _id: 2,
    itemname: 'Test Item 2',
    quantity: 15,
    dateexpired: '2023-11-05',
  },
];

```

3. **Render Component with Provider:**
   - The `Notification` component is shallow rendered using Enzyme's `shallow` method.
   - It is wrapped in a `Provider` to supply the Redux store.

4. **Take Snapshot:**
   - Jest's `toMatchSnapshot()` function is used to create a snapshot of the rendered component.
   - The snapshot serves as a baseline for future comparisons.

### Expected Output

- The expected output is that the rendered component matches the previously saved snapshot. This indicates that the component renders correctly with the provided props.

## Running the Test

To execute this test, use the appropriate testing command in your project. For example, if Jest is the testing framework, you can run:

```bash
npm test
```

Result output received upon testing this frontend api

![image](https://github.com/drs1951/CSC510_Group31/assets/85347670/30829c54-6794-403e-9753-1aff87437d97)

