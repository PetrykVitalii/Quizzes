export const isValidUserName = (userName: string) => userName.length > 4 && userName.length < 48;

export const isValidPassword = (password: string) => password.length > 4 && password.length < 48;
