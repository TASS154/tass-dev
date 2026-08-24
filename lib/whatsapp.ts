export const WHATSAPP_NUMBER = "5511930388058";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá, TASS Dev! Vi o portfólio e quero falar sobre um sistema sob medida.";

export function getWhatsAppUrl(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
