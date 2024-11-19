import errorsTranslations from "../locales/errorsTranslations.json";

type ErrorMessages = keyof typeof errorsTranslations["es"];
type Language = keyof typeof errorsTranslations;

export class ServiceError extends Error {
  timestamp: string;
  code: number;
  customMessage: string;
  path: string;
  details?: Record<string, string>;

  constructor(
    { timestamp, code, customMessage, path, details }:
    { timestamp: string; code: number; customMessage: ErrorMessages; path: string, details?: Record<string, ErrorMessages> },
    language?: Language
  ) {
    let finalMessage: string;
    
    if (details && Object.keys(details).length > 0) {
      const translatedDetails = Object.values(details).map((message) => {
        const translatedMessage = (language && errorsTranslations[language]?.[message]) || message;
        return translatedMessage;
      });
      // translatedDetails.unshift((language && errorsTranslations[language]?.[customMessage]) || customMessage); 
      finalMessage = translatedDetails.join("\n");
    } else {
      finalMessage = (language && errorsTranslations[language]?.[customMessage]) || customMessage;
    }

    super(finalMessage);
    this.timestamp = timestamp;
    this.code = code;
    this.customMessage = finalMessage;
    this.path = path;
  }
}
