# API URLS

We have used the following API urls to fetch data from the server to client.

## Login
Method: "POST"\
/users/crete-session\
Response: 1\
res.json(422, {\
        message: "Invalid username or password",\
      });\
Response: 2\
res.json(200, {\
      message: "Sign In Successful, here is your token, please keep it safe",\
      data: {\
        token: jwt.sign(user.toJSON(), "caloriesapp", { expiresIn: "100000" }),\
        user: user,\
      },\
      success: true,\
    }); 
## Sign Up
Method: "POST"\
/users/signup\
Response: 1\
res.json(422, {\
        message: "Passwords donot match",\
      });\
Response: 2\
res.json(200, {\
          message: "Sign Up Successful, here is your token, plz keep it safe",\
          data: {\
            token: jwt.sign(user.toJSON(), "caloriesapp", {\
              expiresIn: "100000",\
            }),\
            user,\
          },\
          success: true,\
        })

## Edit Profile
Method: "POST"\
/users/edit\

Response: \
res.json(200, {\
      message: "User is updated Successfully",\
      data: {\
        user,\
      },\
      success: true,\
    });

## Fetch Inventory
Method: "GET"\
/users/`,\
return res.json(200, {\
    message: "List of Inventories",\
    jobs: jobs,\
  });

## Edit Inventory Item
Method: "POST"\
/users/edititem\
return res.json(200, {\
        message: "Inventory Item is updated Successfully",\
        data: {\
          inventories,\
        },\
        success: true,\
      });\
    }

## Create Menu
Method: "POST"\
/users/createmenu\
return res.json(200, {\
      data: {\
        menu: menu,\
      },\
      message: "Menu Created!!",\
      success: true,\
    });\
  }
  
## Fetch Menu
Method: "GET"\
/users/fetchmenus\
return res.json(200, {\
    message: "List of Menus",\
    menu: menu,\
  });
}
