import errorsTranslations from "../locales/errorsTranslations.json";

type ErrorMessages = keyof typeof errorsTranslations["es"];
type Language = keyof typeof errorsTranslations;

export class ServiceError extends Error {
  timestamp: string;
  code: number;
  customMessage: string;
  path: string;

  constructor(
    { timestamp, code, customMessage, path }: { timestamp: string; code: number; customMessage: ErrorMessages; path: string },
    language?: Language
  ) {
    const translatedCustomMessage = (language && errorsTranslations[language]?.[customMessage]) || customMessage;

    super(translatedCustomMessage);
    this.timestamp = timestamp;
    this.code = code;
    this.customMessage = translatedCustomMessage;
    this.path = path;
  }
}
