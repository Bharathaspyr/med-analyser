import { supabase } from "../config/supabase.js";

const signUp = async(formData ) => {
    const {firstName,lastName, email, password} = formData;
    try{
        const {data, error } = await supabase.auth.signUp({
            email, 
            password,
            options: { data: { firstName, lastName } },
        });
        if(error) throw error;
       
        return data.user;
    } catch(error){
        console.log("Error signing up", error.message);
        return null;
    }

};

const logIn = async(formData) => {
    try{
        const {email, password} = formData;
        const {data, error} = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if(error) throw error;
        if (data?.user) {
            localStorage.setItem("user", JSON.stringify(data.user));
        }
        return data.user;
    } catch(error){
        console.log("Error logging in", error.message);
        return null;
    }
}

const logOut = async() => {

    try{
        const {error} = await supabase.auth.signOut();
        if(error) throw error;
        localStorage.removeItem("user");
        console.log("User logged out");
    } catch(error){
        console.log("Error logging out", error.message);
    }



}

export { signUp, logIn, logOut }