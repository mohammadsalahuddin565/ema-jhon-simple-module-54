import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}



export default initializeAuthentication;



/*
Step-1
=======
Steps for authentication
------------------------
Initial Setup
1. firebase: create project
2. create web app
3. get confiquaration
4. initialize firebase
5. enable auth method

--------------------------
Step-2  setup component
=======
1. create login component
2. Create Register component
3. Create Rout for lognin and register
---------------------------
Step-3   set Auth system
=======
1. setup Sign In Method
2. setup Sign Out Method
3. user state
4. apecial Observer
5. returns necessary methods and states from useFirebase
----------------------------
Step-4   create auth context Hook (useAuth)
=======
1. create a auth context
2. create context provider
3. use auth provider
4. set context porvider context value
5. create useAuth Hook
----------------------------
Step-5   create Private Rout
=======
1. Create Private Rout
2. Set Private Rout
----------------------------
Step-6   Redirect after login
=======
1. After login redirect user to there desired destination
2.
*/