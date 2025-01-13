import { SUPPORTED_LANGUAGES, type SupportedLanguage } from "../config/i18n";

export function getCurrentLanguage(pathname: string): SupportedLanguage {
  const pathParts = pathname.split("/").filter(Boolean);
  const firstPart = pathParts[0];

  if (
    firstPart &&
    SUPPORTED_LANGUAGES.includes(firstPart as SupportedLanguage)
  ) {
    return firstPart as SupportedLanguage;
  }

  return "en";
}
