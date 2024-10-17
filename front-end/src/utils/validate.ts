 const checkValidaData = (
    email: string, 
    password: string
  ): { isEmailValid: boolean; isPasswordValid: boolean } | string | null => {
    const isEmailValid = /^[a-zA-Z0-9_.+/-]+[@][a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
    
    if (!isEmailValid) return "Email ID is not valid";
    if (!isPasswordValid) return "Password is not valid";
    
    return null
  };
  
  export default checkValidaData