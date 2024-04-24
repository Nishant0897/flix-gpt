export const CheckData = (email,password) => {
    const isEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
      email
    );
    const isPassword =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);
    
    if (!isEmail) return "Email is not valid";
    if (!isPassword) return "Password is not valid";

    return null;
    
}