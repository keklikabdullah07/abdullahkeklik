"use client";

import { useI18n } from "@/context/LanguageContext";
import { ArrowUpRight, Mail, MessageSquare, Send } from "lucide-react";
import type React from "react";
import { useState } from "react";

export function CommissionInquiryForm() {
  const { t } = useI18n();

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validate = (): boolean => {
    if (!name.trim() || !contact.trim()) {
      setErrorMessage(t.contactForm.validationError);
      return false;
    }
    setErrorMessage(null);
    return true;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const textPayload = `*PARTRIDGE // İLETİŞİM TALEBİ*\n\n*Kimden:* ${name.trim()}\n*İletişim:* ${contact.trim()}\n\n*Mesaj:*\n${message.trim() || "Görüşmek istiyorum."}\n\n_https://abdullahkeklik.com üzerinden gönderildi._`;

    window.open(
      `https://wa.me/905531675669?text=${encodeURIComponent(textPayload)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`İletişim Talebi: ${name.trim()}`);
    const bodyPayload = `PARTRIDGE İLETİŞİM FORMU\n========================\n\nAd / Kurum: ${name.trim()}\nİletişim: ${contact.trim()}\n\nMesaj:\n${message.trim() || "Görüşmek istiyorum."}\n\n---\nGönderim Tarihi: ${new Date().toLocaleDateString()}\n`;

    window.location.href = `mailto:keklikabdullah07@gmail.com?subject=${subject}&body=${encodeURIComponent(bodyPayload)}`;
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-12 bg-surface/40 border border-white/10 rounded-xl p-6 sm:p-10 backdrop-blur-md shadow-2xl relative overflow-hidden">
      {/* İnce Taktil Üst Hat */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Başlık ve Editoryal Künye */}
      <div className="mb-8 border-b border-white/10 pb-6">
        <div className="text-[11px] font-mono uppercase tracking-widest text-primary font-semibold mb-2">
          {t.contactForm.badge}
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-canvas font-sans">
          {t.contactForm.title}
        </h3>
        <p className="text-sm font-sans text-canvas/70 mt-2 max-w-2xl leading-relaxed">
          {t.contactForm.subtitle}
        </p>
      </div>

      <form className="space-y-6">
        {/* Ad Soyad ve İletişim Bilgisi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              htmlFor="inquiry-name"
              className="block text-xs font-mono uppercase tracking-wider text-canvas/80"
            >
              {t.contactForm.nameLabel} <span className="text-primary">*</span>
            </label>
            <input
              id="inquiry-name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errorMessage) setErrorMessage(null);
              }}
              placeholder={t.contactForm.namePlaceholder}
              className="w-full bg-white/5 border border-white/15 focus:border-primary focus:bg-white/[0.08] outline-none text-canvas rounded-md px-4 py-3 text-sm font-sans placeholder:text-canvas/30 transition-all duration-200"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="inquiry-contact"
              className="block text-xs font-mono uppercase tracking-wider text-canvas/80"
            >
              {t.contactForm.contactLabel} <span className="text-primary">*</span>
            </label>
            <input
              id="inquiry-contact"
              type="text"
              value={contact}
              onChange={(e) => {
                setContact(e.target.value);
                if (errorMessage) setErrorMessage(null);
              }}
              placeholder={t.contactForm.contactPlaceholder}
              className="w-full bg-white/5 border border-white/15 focus:border-primary focus:bg-white/[0.08] outline-none text-canvas rounded-md px-4 py-3 text-sm font-sans placeholder:text-canvas/30 transition-all duration-200"
            />
          </div>
        </div>

        {/* Mesaj / Not */}
        <div className="space-y-2 pt-2">
          <label
            htmlFor="inquiry-message"
            className="block text-xs font-mono uppercase tracking-wider text-canvas/80"
          >
            {t.contactForm.messageLabel}
          </label>
          <textarea
            id="inquiry-message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t.contactForm.messagePlaceholder}
            className="w-full bg-white/5 border border-white/15 focus:border-primary focus:bg-white/[0.08] outline-none text-canvas rounded-md p-4 text-sm font-sans placeholder:text-canvas/30 transition-all duration-200 resize-y"
          />
        </div>

        {/* Hata Bildirimi */}
        {errorMessage && (
          <div className="p-3 rounded bg-red-950/60 border border-red-500/40 text-red-200 text-xs font-mono">
            {errorMessage}
          </div>
        )}

        {/* Çift Aksiyon Butonları (WhatsApp & E-posta) */}
        <div className="pt-4 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={handleWhatsAppSubmit}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-200 shadow-md hover:shadow-emerald-950 active:translate-y-[1px]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{t.contactForm.submitWhatsApp}</span>
            <ArrowUpRight className="w-4 h-4 opacity-80" />
          </button>

          <button
            type="button"
            onClick={handleEmailSubmit}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md bg-white/10 hover:bg-white/15 active:bg-white/20 border border-white/20 text-canvas font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-200 active:translate-y-[1px]"
          >
            <Mail className="w-4 h-4 text-primary" />
            <span>{t.contactForm.submitEmail}</span>
            <Send className="w-3.5 h-3.5 opacity-80" />
          </button>
        </div>
      </form>
    </div>
  );
}
