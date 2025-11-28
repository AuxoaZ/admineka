/** @format */

import { Phone, Youtube } from "lucide-react";

export function Hero() {
  return (
    <section className="h-auto md:min-h-screen flex flex-col items-center justify-center py-16 mb-14 md:mb-0 bg-base-100">
      {/* Content - CENTER ALIGN */}
      <div className="text-center w-full max-w-4xl mx-auto">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-base-content mb-6 sm:mb-8 leading-tight">
          Capek Karena
          <br />
          <span className="px-0  text-rotate duration-7000">
            <span className="justify-items-center">
              <span className="text-primary">Chat Menumpuk?</span>
              <span className="text-primary">Bales Sendiri?</span>
              <span className="text-primary">Pertanyaan Sama?</span>
              <span className="text-primary">Standby 24 Jam?</span>
            </span>
          </span>
        </h1>

        {/* Subheadline */}

        <p className="text-lg sm:text-lg md:text-xl lg:text-xl text-base-content/70 max-w-2xl mx-auto leading-relaxed px-4">
          Yuk, bikin aja bot-nya!
        </p>
        <p className="text-lg sm:text-lg md:text-xl lg:text-xl text-base-content/70 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
          Kami yang develop sesuai kebutuhanmu, ngga perlu pusing lagi mengurus
          chat pelanggan.
        </p>
        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center px-2">
          <button className="btn btn-primary hover:btn-primary btn-lg rounded-xl  py-3 sm:py-4 text-base sm:text-lg font-semibold sm:w-auto">
            <Phone className="mr-2" />
            Hubungi Kami
          </button>
          <button className="btn btn-outline btn-primary hover:btn-primary btn-lg rounded-xl  py-3 sm:py-4 text-base sm:text-lg font-semibold sm:w-auto">
            <Youtube className="mr-2" />
            Demo
          </button>
        </div>
      </div>
    </section>
  );
}
