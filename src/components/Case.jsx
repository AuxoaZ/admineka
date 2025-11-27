/** @format */

import { Youtube } from "lucide-react";

export function Case() {
  const caseStudies = [
    {
      title: "Toko Fashion - Bot WhatsApp Auto Order",
      description: "Bot handle 500+ chat/hari, konversi naik 40% dalam 1 bulan",
      videoId: "VIDEO_ID_1", // Ganti dengan YouTube ID
      client: "Toko Baju Online",
      results: ["+40% Konversi", "500 chat/hari", "24/7 Operation"],
    },
    {
      title: "Service AC - Auto Booking System",
      description: "Bot atur jadwal & reminder, revenue naik 50% dalam 3 bulan",
      videoId: "VIDEO_ID_2", // Ganti dengan YouTube ID
      client: "Jasa Service AC",
      results: ["+50% Revenue", "0 Double Booking", "Auto Reminder"],
    },
  ];

  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-2 md:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Studi Kasus Klien
            <span className="text-primary block">Admineka</span>
          </h2>
          <p className="text-lg opacity-90">
            Contoh bagaimana bot Admineka mengubah bisnis mereka
          </p>
        </div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((caseStudy, index) => (
            <div
              key={index}
              className="bg-base-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Video Embed */}
              <div className="aspect-video bg-base-300 relative">
                <iframe
                  src={`https://www.youtube.com/embed/${caseStudy.videoId}`}
                  title={caseStudy.title}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-base-content">
                  {caseStudy.title}
                </h3>

                <p className="text-base-content/70 mb-4 leading-relaxed">
                  {caseStudy.description}
                </p>

                {/* Client & Results */}
                <div className="flex justify-between items-center">
                  <div className="text-sm text-base-content/60">
                    {caseStudy.client}
                  </div>
                  <div className="flex gap-2">
                    {caseStudy.results.map((result, idx) => (
                      <span
                        key={idx}
                        className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button className="btn btn-primary btn-lg rounded-xl text-base">
            <span>
              <Youtube />
            </span>{" "}
            Lihat Lebih Banyak
          </button>
        </div>
      </div>
    </section>
  );
}
