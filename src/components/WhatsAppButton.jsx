export function WhatsAppButton() {
  const message =
    "Hola, vi tu web de UltraXCode y quiero información para crear una página web.";

  const url = `https://wa.me/34643804335?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 rounded-full bg-green-500 px-5 py-3 font-bold text-white shadow-lg transition hover:scale-105 hover:bg-green-400"
    >
      💬 WhatsApp
    </a>
  );
}