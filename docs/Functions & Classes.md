# FrontEnd:
## 1. Authentication(src/actions/auth.js)
### I. Function Login
#### Parameters:(Email, Password)
#### Method: 'POST'
#### Decription: Makes an API call to create a session for the user. The function receives JSON data from the server side.
If the login is successful, the function calls "Login successful" function that updates the state of the user on client side.
"Login Failed" function is calledif there is an error or if the credentials are invalid.
#### Output:
data(token, user)
#### message:sign in successful
success:True/False

### II. Function SignUp
#### Parameters: Email, password, confirm Password, name, Restaurant_Name
#### Method: "Post"
#### Description:
Create a user(Restaurant). The server side checks the conditions.
a.Password & Confirm Password matches.
b.If a user already exists with the same email. If user already exists, it returns the user.
c.Creates a new user if there is not a user with the same email in DB.

The function updates the state of the user on client side on success.

### III. Function Edit User Profile
#### Parmaters: 
password
#### Method: "Post"
#### Description: 
Finds the user inside the database & updates its name, password
#### Output: 
#"User is updated Successfully"
data{user}
success:True

### IV. Function createInventory
#### Parameters: 
Restaurant Name, Item name, Rest Id, CostPerItem, Quantity, DateBought, DateExpired
#### Method: "Post"
#### Description: 
Creates new Inventory Item
#### Output: 
data: {
        job: job,
      },
      message: "Item Created!!",
      success: true,

### V. Function Update Inventory Item
#### Parameters: 
ItemName, Quantity
#### Method:
'POST'
#### Description:
Function makes an API call to change the quantity of the inventory item
#### Output:  
message: "Inventory Item is updated Successfully",

      data: {
        job,
      },
      success: true,

### VI. Function Fetch Inventories
#### Parameters- 

#### Method: "GET"
#### Description: 
Function return all the inventory items
#### Output:
#### Message: 
data: {
        Inventory: Inventory,
      },
      message: "List of Inventory!!",
      success: true,
    }

### VII. Function Fetch Menus
#### Parameters- 

#### Method: "GET"
#### Description: 
Function return all the Menu items
#### Output:
#### Message: 
data: {
        Menu: Menu,
      },
      message: "List of Menu!!",
      success: true,
    }
  
