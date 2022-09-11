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

  get create_quiz() {
    return this.getText({
      EN: 'Create Quiz',
    });
  }

  get question_number() {
    return this.getText({
      EN: 'Question №',
    });
  }

  get question_name() {
    return this.getText({
      EN: 'Question Name',
    });
  }

  get answers() {
    return this.getText({
      EN: 'Answers',
    });
  }

  get add_question() {
    return this.getText({
      EN: 'Add question',
    });
  }
}
