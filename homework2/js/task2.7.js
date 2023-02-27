const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {

    if (login.length < 4 || 
        login.length > 16) {
            return false
    }

    return true
}; 

isLoginValid('Ajax');
isLoginValid('robotGoogles');
isLoginValid('Zod');
isLoginValid('jqueryisextremelyfast');



const isLoginUnique = function(allLogins, login) {

    if (allLogins.includes(login)) {
        return false
    }

    return true
};

isLoginUnique(logins, 'Ajax');
isLoginUnique(logins, 'robotGoogles');
isLoginUnique(logins, 'Zod');
isLoginUnique(logins, 'jqueryisextremelyfast');



const addLogin = function(allLogins, login) {
    
    if (isLoginValid(login)) {
      false
      return "Ошибка! Логин должен быть от 4 до 16 символов"
    } 
    
    else if (isLoginUnique(allLogins, login)) {
        false
        return "Такой логин уже используется!"
    } 
    
    else {
        logins.push(login);
        return "Логин успешно добавлен!"
    }
};

console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'