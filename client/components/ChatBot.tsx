import { useState, useEffect, useRef } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { Button } from "@/components/ui/button";
import { RotateCcw, User } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const INITIAL_GREETING =
  "Halo! 👋 Saya adalah asisten konsultasi PMB Polindra.\n\n" +
  "Saya dapat membantu informasi:\n" +
  "• Persyaratan\n" +
  "• Program Studi\n" +
  "• Jalur & Cara Pendaftaran\n" +
  "• Biaya & Beasiswa\n" +
  "• Jadwal PMB\n" +
  "• Akreditasi\n" +
  "• Fasilitas Kampus\n" +
  "• Kontak Resmi\n\n" +
  "Silakan ajukan pertanyaan Anda.";

export function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: INITIAL_GREETING },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: message }]);
    setIsLoading(true);

    try {
      // Simulasi API (GitHub Pages = static)
      await new Promise((r) => setTimeout(r, 700));

      const responses: Record<string, string> = {
        persyaratan:
          "📄 Persyaratan PMB:\n✓ Lulusan SMA/SMK/MA\n✓ Nilai rapor\n✓ Sehat jasmani & rohani\n✓ Lulus seleksi",
        beasiswa:
          "🎓 Beasiswa:\n• KIP Kuliah\n• Prestasi\n• Ekonomi Lemah\n• Mitra Industri",
        jadwal:
          "📅 Jadwal PMB:\nPendaftaran: Juni\nTes: Juli\nPengumuman: Juli",
        biaya: "💳 Biaya:\nD3: Rp 5–7,5 jt\nD4: Rp 7,5–10 jt",
        prodi:
          "📚 Program Studi:\n• D3 Teknik Informatika\n• D3 Teknik Mesin\n• D4 Rekayasa Perangkat Lunak\n• D4 Sistem Informasi Kota Cerdas",
        jalur:
          "🛣️ Jalur Pendaftaran:\n• Reguler\n• Prestasi\n• KIP Kuliah\n• Kerja Sama Industri",
        daftar:
          "📝 Cara Pendaftaran:\n1. Daftar online\n2. Isi formulir\n3. Upload berkas\n4. Mengikuti seleksi",
        lokasi: "📍 Indramayu, Jawa Barat",
        kontak: "📞 (0234) 5746464\n📧 admisi@polindra.ac.id",
        akreditasi:
          "🏅 Akreditasi:\nInstitusi: Baik Sekali\nProgram Studi terakreditasi BAN-PT",
        fasilitas:
          "🏫 Fasilitas Kampus:\n• Laboratorium\n• Perpustakaan\n• WiFi\n• Mushola",
        default:
          "Mohon maaf, pertanyaan tersebut berada di luar cakupan dataset penelitian chatbot ini.\n\n" +
          "Silakan hubungi layanan resmi PMB Polindra untuk informasi lebih lanjut.",
      };

      const m = message.toLowerCase();
      let reply = responses.default;

      if (m.includes("syarat")) reply = responses.persyaratan;
      else if (m.includes("beasiswa")) reply = responses.beasiswa;
      else if (m.includes("jadwal")) reply = responses.jadwal;
      else if (m.includes("biaya") || m.includes("spp")) reply = responses.biaya;
      else if (m.includes("prodi") || m.includes("jurusan"))
        reply = responses.prodi;
      else if (m.includes("jalur")) reply = responses.jalur;
      else if (m.includes("daftar")) reply = responses.daftar;
      else if (m.includes("alamat") || m.includes("lokasi"))
        reply = responses.lokasi;
      else if (m.includes("kontak")) reply = responses.kontak;
      else if (m.includes("akreditasi")) reply = responses.akreditasi;
      else if (m.includes("fasilitas")) reply = responses.fasilitas;

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: reply },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([{ role: "assistant", content: INITIAL_GREETING }]);
  };

  return (
    <div className="flex flex-col h-full border rounded-xl bg-background overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b flex items-center justify-between">
        <div>
          <h2 className="font-semibold text-lg text-foreground">
            Konsultasi PMB Polindra
          </h2>
          <p className="text-sm text-muted-foreground">
            Chatbot Berbasis NLP (Demo)
          </p>
        </div>
        <Button variant="ghost" size="icon" onClick={handleReset}>
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {messages.map((m, i) => (
          <ChatMessage key={i} role={m.role} content={m.content} />
        ))}

        {isLoading && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User className="h-4 w-4" />
            <span>Mengetik…</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="px-6 py-4 border-t">
        <ChatInput onSubmit={handleSendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
}
