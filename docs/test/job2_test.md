# Frontend Test Case for Job2 Component

## Objective

The objective of this test is to verify the rendering behavior and functionality of the `Job2` component with provided props.

## Test Description

### Test Setup

1. **Component Under Test (CUT):** `Job2` component.
2. **Testing Library:** Enzyme for React component testing.
3. **State Management:** Redux is used with a store configured using `configureStore`.
4. **Provided Props:** An object `mockProps` with mock data for `auth`, `job`, `menu`, and `order`.

### Test Steps

1. **Create Redux Store:**
   - A Redux store is created using the `configureStore` function to provide state management for the component.

2. **Define Mock Props:**
   - A `mockProps` object is defined to mimic the props that will be passed to the `Job2` component during rendering.

```bash
const mockProps = {
  auth: {
    user: {
      email: 'test@example.com',
      _id: 'test123',
      name: 'Test User',
    },
  },
  job: [
    {
      _id: 1,
      itemname: 'Test Item 1',
      quantity: 5,
    },
  ],
  menu: {
    menuname: 'Test Menu',
  },
  order: {
    _id: 1,
    items: [
      {
        item_id: {
          menuname: 'Test Item',
        },
        quantity: 2,
      },
    ],
  },
};
```
3. **Render Component with Provider:**
   - The `Job2` component is shallow rendered using Enzyme's `shallow` method.
   - The component is wrapped in a `Provider` to supply the Redux store.

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

![image](https://github.com/drs1951/CSC510_Group31/assets/85347670/a1b8ec3c-a075-4fab-87d6-e717451543ea)

