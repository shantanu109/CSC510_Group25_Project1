# Frontend Test Case for Home Component

## Objective

The objective of this test is to verify the rendering behavior and functionality of the `Home` component with provided props.

## Test Description

### Test Setup

1. **Component Under Test (CUT):** `Home` component.
2. **Testing Library:** Enzyme for React component testing.
3. **State Management:** Redux is used with a store configured using `configureStore`.
4. **Provided Props:**
   - `search`: Empty search results array.
   - `job`: An array containing a single job object for testing.

### Test Steps

1. **Create Redux Store:**
   - A Redux store is created using the `configureStore` function to provide state management for the component.

2. **Define Props:**
   - `search` object with an empty results array and a `job` array with a single job object are defined to mimic the props that will be passed to the `Home` component during rendering.

```bash
const search = {
    results: []
};

const job = [
        {_id: 1,
        name: 'test',
        status: '0',
        location: 'test',
        description: 'test',
        pay: 'test',
        schedule: 'test',
        managerid: 'test',
    }
]
```

3. **Render Component for createJob:**
   - The `createJob` component is shallow rendered using Enzyme's `shallow` method.
   - A snapshot is taken to ensure the component renders correctly.

4. **Render Component with Provider:**
   - The `Home` component is rendered using Enzyme's `mount` method.
   - The component is wrapped in a `Provider` to supply the Redux store.

5. **Take Snapshot:**
   - Jest's `toMatchSnapshot()` function is used to create a snapshot of the rendered component.
   - The snapshot serves as a baseline for future comparisons.

### Expected Output

1. For `createJob`, the expected output is that the rendered component matches the previously saved snapshot. This indicates that the component's structure and appearance have not changed unintentionally.

2. For `Home` component, the expected output is that the rendered component matches the previously saved snapshot. This indicates that the component renders correctly with the provided props.

## Running the Test

To execute this test, use the appropriate testing command in your project. For example, if Jest is the testing framework, you can run:

```bash
npm test
```

Result output received upon testing this frontend api

![image](https://github.com/drs1951/CSC510_Group31/assets/85347670/d084a5ba-4727-466b-ae5b-b923a4d671d4)
