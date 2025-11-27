/** @format */

export function Footer() {
  return (
    <footer className="bg-base-300 text-base-content">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex-1">
            <img
              src="https://ik.imagekit.io/vianz/logo-admineka-01.png"
              alt=""
              srcset=""
              className="w-32 md:w-40"
            />
          </div>
        </div>

        {/* Menu */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Produk</h3>
          <ul className="space-y-2 text-base-content/70 text-sm">
            <li>
              <a className="hover:text-primary cursor-pointer">Fitur</a>
            </li>
            <li>
              <a className="hover:text-primary cursor-pointer">Harga</a>
            </li>
            <li>
              <a className="hover:text-primary cursor-pointer">Dokumentasi</a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Bantuan</h3>
          <ul className="space-y-2 text-base-content/70 text-sm">
            <li>
              <a className="hover:text-primary cursor-pointer">FAQ</a>
            </li>
            <li>
              <a className="hover:text-primary cursor-pointer">Panduan</a>
            </li>
            <li>
              <a className="hover:text-primary cursor-pointer">
                Contact Support
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Kontak</h3>
          <ul className="space-y-2 text-base-content/70 text-sm">
            <li>
              WhatsApp:{" "}
              <span className="hover:text-primary cursor-pointer">
                089674277470
              </span>
            </li>
            <li>
              Email:{" "}
              <span className="hover:text-primary cursor-pointer">
                kontak.neka@gmail.com
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-base-content/10 mt-10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-base-content/50 text-sm">
            © {new Date().getFullYear()} Admineka. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-base-content/60 text-sm">
            <a className="hover:text-primary cursor-pointer">
              Kebijakan Privasi
            </a>
            <a className="hover:text-primary cursor-pointer">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
