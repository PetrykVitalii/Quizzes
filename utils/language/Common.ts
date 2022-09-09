import AbstractLanguage from '@/utils/language/AbstractLanguage';

export default class Common extends AbstractLanguage {
  get home() {
    return this.getText({
      EN: 'Home',
    });
  }
}
