import { AxiosError } from "axios";
import { WhatsAppApiErrorResponse } from "../types/whatsapp";

export function isWhatsAppApiError(
  error: unknown
): error is AxiosError<WhatsAppApiErrorResponse> {
  return (
    typeof error === "object" &&
    error !== null &&
    "isAxiosError" in error &&
    ((error as AxiosError).response?.data as WhatsAppApiErrorResponse)?.error?.message !== undefined
  );
}
