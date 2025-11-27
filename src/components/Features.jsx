/** @format */

import { Sparkles } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: "🤖",
      title: "Auto Reply",
      description:
        "Jawab semua pertanyaan pelanggan tanpa harus kamu standby. Respon selalu cepat, konsisten, dan bisa diatur sesuai kebutuhan bisnismu.",
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      icon: "📊",
      title: "Pencatatan Otomatis",
      description:
        "Order, pembayaran, dan data pelanggan langsung tercatat otomatis. Dintegrasikan dengan Google Spreadsheet, sehingga mudah dipantau kapan saja.",
      color: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      icon: "🔄",
      title: "Multi-Platform",
      description:
        "Bot bisa dibuat untuk berbagai platform seperti WhatsApp, Instagram, dan Telegram. Kamu tinggal pilih bot ingin berjalan di aplikasi chat mana.",
      color: "bg-gradient-to-br from-green-500 to-emerald-500",
    },
    {
      icon: "💸",
      title: "Full Support",
      description:
        "Cukup jelaskan kebutuhanmu. Kami bantu dari proses pembuatan, penyesuaian alur, hingga bot berjalan lancar tanpa kendala.",
      color: "bg-gradient-to-br from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section id="feature" className="py-20 bg-base-100 text-base-content">
      <div className="container mx-auto px-2">
        {/* Header dengan lebih jelas */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          {/* <div className="inline-flex items-center gap-2 bg-primary text-primary-content px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>
              <Sparkles />
            </span>
            <span>Powered by AI Technology</span>
          </div> */}

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Semua Fitur untuk
            <span className="text-primary block">Mengembangkan Bisnismu</span>
          </h2>

          <p className="text-lg opacity-90">
            Fitur lengkap yang dirancang untuk mendukung pertumbuhan bisnismu
          </p>
        </div>

        {/* Features Grid dengan border kiri primary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-base-200 rounded-2xl p-4 md:p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-primary hover:border-primary hover:translate-y-1 relative"
            >
              {/* Content */}
              <h3 className="text-base md:text-xl font-bold mb-2 md:mb-3">
                {feature.title}
              </h3>
              <p className="text-base md:text-normal opacity-90 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
