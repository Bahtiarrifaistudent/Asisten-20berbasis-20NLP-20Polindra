import { useState, useEffect, useRef } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const INITIAL_GREETING =
  "Halo! 👋 Saya adalah asisten konsultasi penerimaan mahasiswa Polindra. Saya siap membantu Anda dengan pertanyaan tentang:\n\n• Persyaratan penerimaan\n• Program studi dan jalur pendaftaran\n• Biaya pendidikan\n• Beasiswa dan bantuan finansial\n• Jadwal pendaftaran\n• Prosedur pendaftaran\n\nApa yang ingin Anda ketahui?";

export function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: INITIAL_GREETING },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (message: string) => {
    const userMessage: Message = { role: "user", content: message };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Simulate API call - replace with real API in production
      await new Promise((resolve) => setTimeout(resolve, 800));

      const responses: { [key: string]: string } = {
        persyaratan:
          "Persyaratan umum penerimaan mahasiswa Polindra:\n\n✓ Lulusan SMA/SMK atau setara\n✓ Memiliki nilai rapor minimum\n✓ Lulus tes masuk (tertulis dan wawancara)\n✓ Sehat jasmani dan rohani\n✓ Tidak buta warna (untuk program tertentu)\n\nSilakan hubungi bagian admisi untuk detail persyaratan program studi tertentu.",
        beasiswa:
          "Program beasiswa Polindra:\n\n💰 Beasiswa Prestasi\n- Untuk siswa berprestasi akademik\n- Coverage hingga 50% biaya pendidikan\n\n💰 Beasiswa Ekonomi Lemah\n- Untuk siswa kurang mampu\n- Proses verifikasi melalui BPJS\n\n💰 Beasiswa Korporat\n- Dari mitra perusahaan\n- Syarat dan ketentuan khusus\n\nUntuk aplikasi, silakan datang ke kantor admisi dengan dokumen lengkap.",
        jadwal:
          "Jadwal Penerimaan Mahasiswa Baru Tahun Akademik 2024/2025:\n\n📅 Pendaftaran Online: 1 - 30 Juni 2024\n📅 Tes Masuk: 5 - 7 Juli 2024\n📅 Pengumuman: 15 Juli 2024\n📅 Daftar Ulang: 16 - 30 Juli 2024\n\nTanggal dapat berubah sewaktu-waktu. Pantau website resmi untuk update terbaru.",
        biaya:
          "Kisaran Biaya Pendidikan Polindra (per semester):\n\n💳 Program Diploma III: Rp 5.000.000 - Rp 7.500.000\n💳 Program Sarjana: Rp 7.500.000 - Rp 10.000.000\n\nBiaya mencakup: SPP, praktikum, dan akses perpustakaan digital.\n\nTerdapat opsi cicilan tanpa bunga hingga 12 bulan. Hubungi bagian keuangan untuk detail.",
        default:
          "Terima kasih atas pertanyaannya! Saya adalah asisten konsultasi yang berbasis pada informasi umum tentang penerimaan mahasiswa. Untuk pertanyaan spesifik atau informasi yang lebih detail, silakan:\n\n📞 Hubungi: (0274) 589-5000\n📧 Email: admisi@polindra.ac.id\n🏫 Kunjungi: Jl. Kejaksan No. 152, Yogyakarta\n\nAda hal lain yang bisa saya bantu?",
      };

      const lowerMessage = message.toLowerCase();
      let response = responses.default;

      if (lowerMessage.includes("persyaratan") || lowerMessage.includes("syarat")) {
        response = responses.persyaratan;
      } else if (lowerMessage.includes("beasiswa")) {
        response = responses.beasiswa;
      } else if (lowerMessage.includes("jadwal") || lowerMessage.includes("tanggal")) {
        response = responses.jadwal;
      } else if (
        lowerMessage.includes("biaya") ||
        lowerMessage.includes("spp") ||
        lowerMessage.includes("bayar")
      ) {
        response = responses.biaya;
      }

      const assistantMessage: Message = { role: "assistant", content: response };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = {
        role: "assistant",
        content:
          "Maaf, terjadi kesalahan. Silakan coba lagi atau hubungi admisi langsung di (0274) 589-5000.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([{ role: "assistant", content: INITIAL_GREETING }]);
  };

  return (
    <div className="flex flex-col h-full bg-background rounded-lg border border-border overflow-hidden">
      {/* Header */}
      <div className="flex-shrink-0 px-6 py-4 border-b border-border bg-white dark:bg-slate-900/50">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-foreground">
              Konsultasi Penerimaan Mahasiswa
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Asisten berbasis NLP Polindra
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleReset}
            className="smooth-transition"
            title="Reset conversation"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} role={msg.role} content={msg.content} />
        ))}
        {isLoading && (
          <div className="flex gap-3 mb-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-semibold">
              AI
            </div>
            <div className="flex items-end gap-1 px-4 py-3 bg-secondary text-secondary-foreground rounded-lg rounded-bl-none">
              <div className="h-2 w-2 rounded-full bg-current animate-bounce"></div>
              <div className="h-2 w-2 rounded-full bg-current animate-bounce" style={{ animationDelay: "0.2s" }}></div>
              <div className="h-2 w-2 rounded-full bg-current animate-bounce" style={{ animationDelay: "0.4s" }}></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="flex-shrink-0 px-6 py-4 border-t border-border bg-white dark:bg-slate-900/50">
        <ChatInput onSubmit={handleSendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
}
