import { supabase } from "../config/supabase.js";

const signUp = async(formData ) => {
    const {firstName,lastName, email, password} = formData;
    try{
        const {data, error } = await supabase.auth.signUp({
            email, 
            password,
            options: { data: { firstName, lastName } },
        });
        console.log("User signed up", data.user);
        console.log("User session", data.session);
        if(error) throw error;
        

        return data.user;
    } catch(error){
        console.log("Error signing in", error.message);
        return null;
    }

};

export { signUp }