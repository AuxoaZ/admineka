/** @format */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Visual() {
  const [chatHistory, setChatHistory] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentSession, setCurrentSession] = useState(0);

  const sessionRef = useRef(0);
  const timeoutRef = useRef(null);

  const DURATION = {
    MESSAGE_DELAY: 1000,
    TYPING_DURATION: 1000,
    SESSION_DELAY: 2000,
    SESSION_CYCLE: 15000,
  };

  const sessions = [
    [
      { type: "user", text: "Stok kaos hitam M ada?" },
      { type: "bot", text: "Stok tersedia 15 pcs! 🎯" },
      { type: "user", text: "Bisa lihat varian warna?" },
      { type: "bot", text: "Tentu! Kirim katalog lengkap 📸" },
    ],
    [
      { type: "user", text: "Minimal order reseller?" },
      { type: "bot", text: "50pcs, diskon 40%! 🔥" },
      { type: "user", text: "Wih oke banget!" },
      { type: "bot", text: "Mau daftar sekarang? 💰" },
    ],
    [
      { type: "user", text: "Laporan bulanan ready?" },
      { type: "bot", text: "Siap! Revenue naik 25% 📈" },
      { type: "user", text: "Export ke Excel bisa?" },
      { type: "bot", text: "Bisa! Excel & PDF ready 🚀" },
    ],
  ];

  const clearAllTimeouts = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  useEffect(() => {
    let messageIndex = 0;
    sessionRef.current = currentSession;
    const session = sessions[currentSession];

    const runSession = () => {
      if (sessionRef.current !== currentSession) return;

      if (messageIndex >= session.length) {
        timeoutRef.current = setTimeout(() => {
          setChatHistory([]);
          setIsTyping(false);
          setCurrentSession((prev) => (prev + 1) % sessions.length);
        }, DURATION.SESSION_DELAY);
        return;
      }

      const message = session[messageIndex];

      if (message.type === "user") {
        setChatHistory((prev) => [
          ...prev,
          {
            ...message,
            id: Date.now() + messageIndex,
          },
        ]);
        messageIndex++;
        timeoutRef.current = setTimeout(runSession, DURATION.MESSAGE_DELAY);
      } else {
        setIsTyping(true);
        timeoutRef.current = setTimeout(() => {
          setIsTyping(false);
          setChatHistory((prev) => [
            ...prev,
            {
              ...message,
              id: Date.now() + messageIndex,
            },
          ]);
          messageIndex++;
          timeoutRef.current = setTimeout(runSession, DURATION.MESSAGE_DELAY);
        }, DURATION.TYPING_DURATION);
      }
    };

    setChatHistory([]);
    setIsTyping(false);
    clearAllTimeouts();
    timeoutRef.current = setTimeout(runSession, 500);

    return () => clearAllTimeouts();
  }, [currentSession]);

  useEffect(() => {
    const interval = setInterval(() => {
      clearAllTimeouts();
      setChatHistory([]);
      setIsTyping(false);
      setCurrentSession((prev) => (prev + 1) % sessions.length);
    }, DURATION.SESSION_CYCLE);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-10 bg-base-100">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-9">
          <h2 className="text-3xl md:text-5xl font-bold text-base-content mb-4">
            Chat Otomatis
            <span className="text-primary"> 24 Jam</span>
          </h2>
          <p className="text-lg text-base-content/70">
            Biar bot yang handle semua chat pelanggan, kamu santai aja
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3  items-center max-w-6xl mx-auto ">
          {/* Left Side - Chat Demo */}
          <div className=" bg-linear-to-br from-primary/5 to-primary/5 rounded-3xl py-5 px-8 mb-7">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <span>💬</span>
                <span>Live Chat Demo</span>
              </div>
            </div>

            <div className="space-y-3 min-h-[325px]">
              {/* Chat Messages */}
              <AnimatePresence>
                {chatHistory.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${
                      message.type === "user" ? "justify-start" : "justify-end"
                    }`}
                  >
                    <motion.div
                      className={`max-w-xs rounded-2xl p-4 ${
                        message.type === "user"
                          ? "bg-base-300 text-base-content rounded-bl-none"
                          : "bg-primary text-primary-content rounded-br-none"
                      } shadow-lg`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing Indicator */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex justify-end"
                  >
                    <div className="bg-primary/20 rounded-2xl rounded-br-none p-4">
                      <div className="flex space-x-1">
                        <motion.div
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0,
                          }}
                          className="w-2 h-2 bg-primary rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0.2,
                          }}
                          className="w-2 h-2 bg-primary rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0.4,
                          }}
                          className="w-2 h-2 bg-primary rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Session Indicator */}
            <div className="text-center mt-6">
              <div className="inline-flex items-center gap-1 bg-base-200 rounded-full px-3 py-1">
                {sessions.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSession ? "bg-primary" : "bg-base-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Visual Illustration */}
          <div className="col-span-2 flex md:p-5 items-center md:items-end ">
            <img
              src="https://ik.imagekit.io/vianz/bg-visual-01.svg"
              alt="Automated Chat Illustration"
              className="h-"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
