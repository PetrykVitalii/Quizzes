import AbstractLanguage from '@/utils/language/AbstractLanguage';

export default class Common extends AbstractLanguage {
  get user_name() {
    return this.getText({
      EN: 'User Name',
    });
  }

  get password() {
    return this.getText({
      EN: 'Password',
    });
  }

  get confirm_password() {
    return this.getText({
      EN: 'Confirm password',
    });
  }

  get sign_in() {
    return this.getText({
      EN: 'Sign In',
    });
  }

  get sign_up() {
    return this.getText({
      EN: 'Sign Up',
    });
  }

  get choose_answer() {
    return this.getText({
      EN: 'Choose answer',
    });
  }

  get submit_my_answer() {
    return this.getText({
      EN: 'Submit My Answer',
    });
  }

  get next() {
    return this.getText({
      EN: 'Next',
    });
  }

  get user_name_error_msg() {
    return this.getText({
      EN: 'User name is not valid',
    });
  }

  get password_error_msg() {
    return this.getText({
      EN: 'Password is not valid',
    });
  }

  get confirm_password_error_msg() {
    return this.getText({
      EN: 'Passwords not match',
    });
  }
}
