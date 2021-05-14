export const REDIRECT_TO = 'REDIRECT_TO';
export const SET_TRANSLATIONS_OK = 'SET_TRANSLATIONS_OK';
export const SET_ERRORS_OK = 'SET_ERRORS_OK';

/** Actions to reducers */
export function setTranslations(name: string, translations: Array<string>) {
  return {
    type: SET_TRANSLATIONS_OK,
    data: {
      name,
      translations
    }
  }
}

export function setErrors(name: string, errors: Array<string>) {
  return {
    type: SET_ERRORS_OK,
    data: {
      name,
      errors
    }
  }
}

/** Actions to middleware */
export function redirectTo(url:string, locale: string, action: string, forced: boolean) {
  return {
    type: REDIRECT_TO,
    data: {
      url,
      locale,
      action,
      forced
    }
  }
}
