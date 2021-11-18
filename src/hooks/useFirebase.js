import { getAuth,signInWithPopup,GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut,onAuthStateChanged,updateProfile} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebae = () => {
    const [users, setUsers] = useState({})
    const [error, setError] = useState('')
    const [isLoading,setIsLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // NEW USER REGISTRATION WITH EMAIL AND PASSWORD
    const registerNewUser = (email, password,name) => {
        setIsLoading(true)
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
            .finally(()=> setIsLoading(false));

    }
   

    // SIGN IN USING EMAIL AND PASSWORD
    const signInUsingEmailPassword = (email, password) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUsers(result.user)
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(()=> setIsLoading(false));
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
        isLoading,
        signInWithGoogle,
        registerNewUser,
        signInUsingEmailPassword
    }
}
export default useFirebae;