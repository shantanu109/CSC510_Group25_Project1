# Frontend Test Case for Menu Component

## Objective

The objective of this test is to verify the rendering behavior and functionality of the `Menu` component with provided props.

## Test Description

### Test Setup

1. **Component Under Test (CUT):** `Menu` component.
2. **Testing Library:** Enzyme for React component testing.
3. **State Management:** Redux is used with a store configured using `configureStore`.
4. **Provided Props:** An object `auth` containing user information and an error, `job` containing an array of job items, and `menu` containing an array of menu items.

### Test Steps

1. **Create Redux Store:**
   - A Redux store is created using the `configureStore` function to provide state management for the component.

2. **Define Mock Props:**
   - A `mockAuth` object is defined to mimic user authentication information with an email, user ID, and name.
   - A `mockJob` array is defined to simulate an array of job items with unique IDs and names.
   - A `mockMenu` array is defined to simulate an array of menu items with unique IDs, names, costs, and ingredient details.

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
    itemname: 'Test Ingredient 1',
  },
  {
    _id: 2,
    itemname: 'Test Ingredient 2',
  },
];

const mockMenu = [
  {
    _id: 1,
    menuname: 'Test Menu 1',
    costmenu: 10,
    ingredients: [
      {
        inventory_id: 1,
        quantity: 2,
      },
    ],
  },
];
```

3. **Render Component with Provider:**
   - The `Menu` component is mounted using Enzyme's `mount` method.
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
![image](https://github.com/drs1951/CSC510_Group31/assets/85347670/2a755d63-80c7-4252-8d99-604a4a98f3a5)

