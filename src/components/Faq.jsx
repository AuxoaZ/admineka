/** @format */

import { useState } from "react";

export function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Bot ini bisa jalan di platform apa saja?",
      answer:
        "Bot bisa dibuat untuk beberapa platform seperti WhatsApp, Telegram, dan Instagram. Kamu tinggal pilih ingin aktif di mana.",
    },
    {
      question: "Apakah perlu server sendiri?",
      answer:
        "Tidak. Semua proses sudah kami siapkan. Kamu cukup menggunakan botnya saja.",
    },
    {
      question: "Berapa lama proses pembuatan bot?",
      answer:
        "Rata-rata 1–3 hari kerja, tergantung tingkat kompleksitas alurnya.",
    },
    {
      question: "Apa bisa custom sesuai kebutuhan bisnis saya?",
      answer:
        "Bisa. Alur chat, menu, form, hingga otomatisasi bisa disesuaikan sepenuhnya.",
    },
    {
      question: "Apakah bot tetap berjalan jika saya offline?",
      answer: "Ya. Bot bekerja otomatis 24/7 tanpa harus kamu pantau.",
    },
    {
      question: "Bagaimana kalau saya belum paham teknis?",
      answer:
        "Tenang, kamu cukup jelaskan kebutuhanmu. Semua setting dan integrasi akan kami bantu dari awal sampai selesai.",
    },
    {
      question: "Ada support setelah bot jadi?",
      answer:
        "Ada. Kami menyediakan bantuan untuk penyesuaian, revisi kecil, dan troubleshooting.",
    },
    {
      question: "Apakah ada biaya pembuatanya?",
      answer: "Ada. Biayanya tergantung fitur yang diminta",
    },
  ];

  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-2 md:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Pertanyaan Umum</h2>
          <p className="text-lg text-base-content/70">
            Semua yang perlu kamu tahu tentang jasa bot kami
          </p>
        </div>

        {/* FAQ Items dengan Dropdown */}
        <div className="max-w-3xl mx-auto px-3">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-base-200 rounded-xl p-2 md:p-6 cursor-pointer hover:bg-base-300 transition-all duration-300 border-l-4 border-primary"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-base md:text-lg font-semibold text-base-content pr-4">
                    {faq.question}
                  </h3>
                  <span className="text-lg text-primary shrink-0">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>

                {/* Answer dengan animasi */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-48 mt-4" : "max-h-0"
                  }`}
                >
                  <p className="text-sm-content/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-base-200 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Masih ada pertanyaan?</h3>
            <p className="text-base-content/70 mb-6">
              Tim kami siap membantu menjawab semua pertanyaanmu
            </p>
            <button className="btn btn-primary btn-lg">
              💬 Tanya Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
