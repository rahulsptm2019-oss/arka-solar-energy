export default function FloatingButtons() {
    return (
      <>
        <a
          href="https://wa.me/917906461166"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-3xl shadow-2xl transition hover:scale-110"
        >
          💬
        </a>
  
        <a
          href="tel:+917906461166"
          className="fixed bottom-26 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-blue-700 text-3xl text-white shadow-2xl transition hover:scale-110"
        >
          📞
        </a>
      </>
    );
  }