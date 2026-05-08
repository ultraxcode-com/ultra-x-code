export function WhatsAppButton() {
  const message =
    "Hola, vi tu web de UltraXCode y quiero información para crear una página web.";

  const url = `https://wa.me/34668550112?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      // Se cambió 'bottom-6' por 'bottom-24' para que no choque con el footer
      className="fixed bottom-24 right-6 z-50 rounded-full bg-green-500 px-5 py-3 font-bold text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-green-400 flex items-center gap-2"
    >
      <span className="text-xl">💬</span>
      WhatsApp
    </a>
  );
}
