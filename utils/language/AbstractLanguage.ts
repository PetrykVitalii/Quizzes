import { LanguagesEnumValues } from '@/interfaces/languages';

type ISelector = {
  EN: string;
};

export default abstract class AbstractLanguage {
  constructor(private ln: LanguagesEnumValues) {}

  protected getText(selector: ISelector) {
    return selector[this.ln] || selector.EN;
  }
}
