/** @format */

export function Process() {
  const steps = [
    {
      title: "Konsultasi Kebutuhan",
      description:
        "Kamu jelaskan alur chat, jenis pertanyaan, dan fitur yang ingin diotomasi. Kami bantu merumuskan solusi bot yang paling pas untuk bisnismu.",
    },
    {
      title: "Desain Alur & Pembuatan Bot",
      description:
        "Kami buatkan alur chat, logika otomatis, serta integrasi yang dibutuhkan. Semua dirancang agar mudah dipakai dan bekerja stabil.",
    },
    {
      title: "Uji Coba & Penyesuaian",
      description:
        "Bot diuji langsung di aplikasi chat pilihanmu. Jika ada revisi atau penyesuaian, kami perbaiki sampai hasilnya sesuai harapan.",
    },
    {
      title: "Bot Siap Digunakan",
      description:
        "Setelah semuanya berjalan lancar, bot dipasang dan bisa langsung digunakan. Support tetap kami sediakan jika butuh bantuan.",
    },
  ];

  return (
    <section id="process" className="py-20 bg-base-100 text-base-content">
      <div className="container mx-auto px-2 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Alur Mudah Membuat Bot di
            <span className="text-primary block">Admineka</span>
          </h2>

          <p className="text-lg opacity-90">
            Proses sederhana agar bot bisa langsung membantu bisnismu.
          </p>
        </div>

        {/* DaisyUI Steps */}
        <div className="grid grid-cols-1 items-start max-w-2xl mx-auto">
          <div className="bg-base-200 rounded-3xl p-3 md:p-8 border-2 border-success/20 hover:shadow-xl transition-all duration-300">
            <div className="space-y-3 md:space-y-6">
              <div className="flex items-start gap-1 md:gap-4 p-2 md:p-4 bg-success/5 rounded-2xl">
                <ul className="steps steps-vertical">
                  {steps.map((step, index) => (
                    <li key={index} className="step step-primary">
                      <div className="text-left ml-4 my-2">
                        <h3 className="font-bold text-base mb-1">
                          {step.title}
                        </h3>
                        <p className="text-base-content/70">
                          {step.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
