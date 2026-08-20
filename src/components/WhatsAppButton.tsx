import { useLocation } from "react-router-dom";
import { SITE } from "../config/site";

export default function WhatsAppButton() {
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');
  
  const phoneNumber = SITE.whatsapp.replace(/[^0-9]/g, ''); 
  const message = isEn 
    ? "Hello BE CUTE SPA, I would like to book a treatment."
    : "Bonjour BE CUTE SPA, je souhaite réserver un soin.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group hidden md:flex fixed bottom-6 right-6 z-30 items-center justify-center overflow-hidden rounded-[2rem] bg-[#25D366] text-white shadow-lg transition-transform duration-300 motion-safe:animate-[whatsapp-in_400ms_ease-out] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-cream-100 sm:bottom-8 sm:right-8"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <span className="flex h-14 w-14 items-center justify-center transition-[width,padding] duration-300 ease-out group-hover:w-auto group-hover:px-4">
        <span className="flex-shrink-0 motion-safe:animate-[whatsapp-pulse_2s_ease-in-out_infinite] group-hover:animate-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.305-.885-.653-1.482-1.459-1.656-1.756-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.012c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </span>
        <span className="max-w-0 overflow-hidden whitespace-nowrap pl-0 font-medium opacity-0 transition-all duration-200 group-hover:max-w-24 group-hover:pl-2 group-hover:opacity-100">WhatsApp</span>
      </span>
    </a>
  );
}
