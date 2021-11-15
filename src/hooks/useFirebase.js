import { getAuth,signInWithPopup,GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut,onAuthStateChanged,updateProfile} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebae = () => {
    const [users, setUsers] = useState({})
    const [error, setError] = useState('')
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // NEW USER REGISTRATION WITH EMAIL AND PASSWORD
    const registerNewUser = (email, password,name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setError('')
                const newUser = {email, displayName: name};
                setUsers(newUser);
                // send name to firease after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {
                
                  }).catch((error) => {
                    
                  });
            })
            .catch(error => {
                setError(error.message)
            })

    }
   

    // SIGN IN USING EMAIL AND PASSWORD
    const signInUsingEmailPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUsers(result.user)
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
    }
    // SIGNIN WITH GOOGLE
    
    const signInWithGoogle=()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            console.log(result.user);
            setUsers(result.user)
        })
        .catch(error=>{
            setError(error.message)
        })
    }
    const logOut =()=>{
        signOut(auth)
        .then(()=>{
            setUsers({})
        })
    }
    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            if(user){
                console.log('inside user',user);
                setUsers(user)
            }
        })
    },[])
    return {
        error,
        users,
        logOut,
        signInWithGoogle,
        registerNewUser,
        signInUsingEmailPassword
    }
}
export default useFirebae;