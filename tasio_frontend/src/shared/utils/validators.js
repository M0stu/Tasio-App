export const validateLoginForm = ({ email, password}) => {
    const isMailValid = validateMail(email);
    const isPasswordValid = validatePassword(password);

    return isMailValid && isPasswordValid;
};

export const validateRegisterForm = ({username, email, password}) => {
    const isUsernameValid = validateUsername(username);
    const isMailValid = validateMail(email);
    const isPasswordValid = validatePassword(password);

    return isMailValid && isPasswordValid && isUsernameValid;
};

const validatePassword = (password) => {
    return password.length>7;
};

export const validateMail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
};


const validateUsername = (username) => {
    return username.length>4;
};
