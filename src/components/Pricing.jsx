/** @format */

import { Star, Check, Zap } from "lucide-react";
import { useState } from "react";

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState("monthly"); // monthly | yearly

  const plans = [
    {
      name: "Pintar",
      price: {
        monthly: "80",
        yearly: "880",
      },
      period: "bulan",
      description:
        "Solusi dasar yang efisien untuk memulai otomatisasi tanpa ribet",
      features: [
        "1 platform (WA/IG/Telegram)",
        "Auto-reply cerdas (paham konteks)",
        "Integrasi Google Spreadsheet",
        "Waktu pengerjaan 3–7 hari kerja",
      ],
      cta: "Mulai Sekarang",
      popular: false,
      badge: null,
      savings: 20,
    },
    {
      name: "Cerdas",
      price: {
        monthly: "250",
        yearly: "2,750",
      },
      period: "bulan",
      description:
        "Fitur lebih lengkap untuk mengelola pelanggan dengan alur yang lebih rapi",
      features: [
        "2 platform (WA/IG/Telegram)",
        "Auto-reply cerdas (paham konteks)",
        "Integrasi Google Spreadsheet",
        "Kirim file, foto, dan dokumen",
        "Analisa pesan gambar/audio",
        "Waktu pengerjaan 3–7 hari kerja",
      ],
      cta: "Mulai Sekarang",
      popular: true,
      badge: "Paling Populer",
      savings: 20,
    },
    {
      name: "Jenius",
      price: {
        monthly: "500",
        yearly: "5,500",
      },
      period: "mulai dari 1.5jt/bulan",
      description:
        "Kemampuan paling tinggi untuk bisnis yang butuh performa maksimal",
      features: [
        "3 platform (WA/IG/Telegram)",
        "Auto-reply cerdas (paham konteks)",
        "Integrasi Google Spreadsheet",
        "Kirim file, foto, dan dokumen",
        "Analisa pesan gambar/audio",
        "Unlimited Broadcast, anti blokir",
        "Penambahan fitur tak terbatas",
        "Waktu pengerjaan 3–7 hari kerja",
      ],
      cta: "Mulai Sekarang",
      popular: false,
      badge: null,
      savings: 20,
    },
  ];

  const calculateYearlyPrice = (monthlyPrice) => {
    return Math.round(monthlyPrice * 12 * 0.8); // 20% discount
  };

  return (
    <section id="pricing" className="py-20 bg-base-100 text-base-content">
      <div className="container mx-auto px-2 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-200 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap size={16} />
            <span>Paket Tahunan Gratis Pengerjaan</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pilih Paket yang
            <span className="text-primary block">Tepat untuk Bisnismu</span>
          </h2>

          <p className="text-lg opacity-90 mb-8">
            Siap melayani skala bisnis tanpa batas, semua dapat solusi terbaik
          </p>
          {/* Billing Toggle - Elegant Version */}
          <div className="flex items-center justify-center mb-12">
            <div className="bg-base-300 rounded-2xl p-1.5 inline-flex">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  billingCycle === "monthly"
                    ? "bg-base-100 shadow-lg text-base-content"
                    : "text-base-content/60 hover:text-base-content"
                }`}
              >
                Bulanan
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 relative ${
                  billingCycle === "yearly"
                    ? "bg-primary text-primary-content shadow-lg"
                    : "text-base-content/60 hover:text-base-content"
                }`}
              >
                Tahunan
                {billingCycle === "yearly" && (
                  <span className="absolute -top-1 -right-1 bg-yellow-200 text-yellow-700 text-xs px-2 py-1 rounded-full">
                    -20%
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative bg-base-200 rounded-3xl p-8 transition-all duration-500 hover:shadow-xl flex flex-col h-full ${
                plan.popular
                  ? "ring-2 ring-primary shadow-xl border-t-4 border-primary"
                  : "border-t-4 border-base-300"
              }`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div
                  className={`absolute -top-3 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full text-sm font-semibold ${
                    plan.popular
                      ? "bg-primary text-primary-content"
                      : "bg-primary text-primary-content"
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-3 text-base-content ">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-2">
                  {plan.price[billingCycle] === "Custom" ? (
                    <div>
                      <div className="text-3xl font-bold text-base-content">
                        Custom
                      </div>
                      <div className="text-base-content/70 text-sm mt-1">
                        {plan.period}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-center justify-center gap-1">
                        <span className="text-2xl font-medium opacity-70">
                          Rp
                        </span>
                        <span className="text-4xl font-bold text-base-content">
                          {plan.price[billingCycle]}
                        </span>
                        <span className="text-xl font-medium opacity-70">
                          rb
                        </span>
                      </div>
                      <div className="text-base-content/70 text-sm mt-1">
                        / {billingCycle === "yearly" ? "tahun" : "bulan"}
                        {billingCycle === "yearly" && plan.savings && (
                          <span className="text-primary font-medium ml-2">
                            ✓ Hemat {plan.savings}%
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-base-content/70 text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-8 flex-1">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 shrink-0 ${
                        plan.popular
                          ? "bg-primary text-primary-content"
                          : "bg-primary text-primary-content"
                      }`}
                    >
                      <Check size={12} />
                    </div>
                    <span className="text-base-content/80 leading-relaxed text-sm">
                      {feature}
                    </span>
                  </li>
                ))}

                {/* Jika fitur kurang, bisa tambahkan placeholder kosong supaya tinggi sama */}
                {/* {plan.features.length < maxFeatures &&
                  Array(maxFeatures - plan.features.length)
                    .fill("")
                    .map((_, i) => (
                      <li key={`empty-${i}`} className="h-5"></li>
                    ))} */}
              </ul>

              {/* CTA Button */}
              <div className="flex justify-center">
                <button
                  className={`btn w-3/4 rounded-2xl font-semibold text-base py-2 h-auto mt-auto group/btn ${
                    plan.popular
                      ? "btn-primary shadow-lg"
                      : "btn-outline border-2 hover:btn-primary hover:border-primary"
                  }`}
                >
                  <span className="transition-transform">{plan.cta}</span>
                </button>
              </div>

              {/* Yearly Savings Badge */}
              {/* {billingCycle === "yearly" && plan.savings && (
                <div className="text-center mt-4">
                  <div className=" text-yellow-700 rounded-xl text-sm py-1">
                    💰 Hemat Rp{" "}
                    {(
                      parseInt(plan.price.monthly) * 12 -
                      parseInt(plan.price.yearly)
                    ).toLocaleString()}
                    k/tahun
                  </div>
                </div>
              )} */}
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-base-content/60 text-sm">
            ❤️ Semua paket mendapatkan full support teknis selama masih
            berlangganan
          </p>
        </div>
      </div>
    </section>
  );
}
