export const loginAction = async (prevState, formData) => {
  try {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
    const loginInfo = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    const resgisteredUser = JSON.parse(localStorage.getItem('registeredUser'));
    if (!resgisteredUser) return alert("User doesn't exist");
    if (loginInfo.email !== resgisteredUser.email) return alert('Not found!');
    if (loginInfo.password !== resgisteredUser.password) return alert("Password doesn't match the email!");
    
    const token = loginInfo.email + loginInfo.password;
    localStorage.setItem('token', JSON.stringify(token));
    return {
      success: true,
      message: 'You are loggin!',
      token,
    };
  } catch (err) {
    return { success: '', error: err.message };
  }
};
export const registerAction = async (prevState, formData) => {
  try {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
    const loginInfo = {
      username: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password'),
    };

    const resgisteredUser = JSON.parse(localStorage.getItem('registeredUser'));
    if (resgisteredUser) return alert('User already exist');

    localStorage.setItem('registeredUser', JSON.stringify(loginInfo));
    const token = loginInfo.email + loginInfo.password;
    localStorage.setItem('token', JSON.stringify(token));
    return {
      success: true,
      message: 'You are registered!',
      token,
    };
  } catch (err) {
    return { success: '', error: err.message };
  }
};
