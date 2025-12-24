import { useState, useEffect, useRef } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { RotateCcw } from "lucide-react";
=======
import { RotateCcw, User } from "lucide-react";
>>>>>>> 79eac8f (Update struktur direktori dan perbaikan proyek chatbot NLP)

interface Message {
  role: "user" | "assistant";
  content: string;
}

const INITIAL_GREETING =
<<<<<<< HEAD
  "Halo! 👋 Saya adalah asisten konsultasi penerimaan mahasiswa Polindra. Saya siap membantu Anda dengan pertanyaan tentang:\n\n• Persyaratan penerimaan\n• Program studi dan jalur pendaftaran\n• Biaya pendidikan\n• Beasiswa dan bantuan finansial\n• Jadwal pendaftaran\n• Prosedur pendaftaran\n\nApa yang ingin Anda ketahui?";
=======
  "Halo! 👋 Saya adalah asisten konsultasi PMB Polindra.\n\nSaya dapat membantu informasi:\n• Persyaratan\n• Program Studi\n• Jalur & Cara Pendaftaran\n• Biaya & Beasiswa\n• Jadwal PMB\n• Akreditasi\n• Fasilitas Kampus\n• Kontak Resmi\n\nSilakan ajukan pertanyaan Anda.";
>>>>>>> 79eac8f (Update struktur direktori dan perbaikan proyek chatbot NLP)

export function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: INITIAL_GREETING },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

<<<<<<< HEAD
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
=======
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (message: string) => {
    setMessages((prev) => [...prev, { role: "user", content: message }]);
    setIsLoading(true);

    try {
      await new Promise((r) => setTimeout(r, 800));

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
        lokasi: "📍 Jl. Raya Lohbener Lama No.8, Indramayu",
        kontak: "📞 (0234) 5746464\n📧 admisi@polindra.ac.id",
        akreditasi:
          "🏅 Akreditasi:\nInstitusi: Baik Sekali\nProgram Studi terakreditasi BAN-PT",
        online:
          "🌐 Pendaftaran PMB dilakukan secara online melalui website resmi Polindra",
        tes: "📝 Seleksi meliputi tes tertulis dan wawancara",
        pengumuman: "📢 Pengumuman hasil seleksi dilakukan pada bulan Juli",
        ulang:
          "🔁 Daftar ulang dilakukan setelah peserta dinyatakan lulus seleksi",
        kip: "🎓 KIP Kuliah ditujukan bagi calon mahasiswa dari keluarga kurang mampu",
        prestasi:
          "🏆 Jalur prestasi tersedia bagi siswa dengan prestasi akademik maupun non-akademik",
        reguler: "📌 Jalur reguler terbuka untuk umum",
        industri:
          "🏭 Jalur industri merupakan kerja sama dengan mitra industri",
        fasilitas:
          "🏫 Fasilitas Kampus:\n• Laboratorium\n• Perpustakaan\n• WiFi\n• Mushola",
        asrama: "🏠 Asrama mahasiswa tersedia dengan kuota terbatas",
        ukt: "💰 UKT disesuaikan dengan jalur masuk dan kemampuan ekonomi",
        cicilan:
          "💳 Tersedia opsi cicilan biaya pendidikan sesuai ketentuan",
        waktu: "⏰ Waktu perkuliahan pagi dan siang",
        sistem: "💻 Sistem perkuliahan terdiri dari teori dan praktik",
        dosen: "👨‍🏫 Dosen berpengalaman dari akademisi dan praktisi industri",
        alumni:
          "🎓 Alumni Polindra terserap di industri dan instansi pemerintah",
        kerja:
          "🚀 Lulusan memiliki prospek kerja luas di berbagai bidang",
        website: "🌐 Website resmi: https://www.polindra.ac.id",
        email: "📧 Email resmi PMB: admisi@polindra.ac.id",
        help:
          "❓ Silakan ajukan pertanyaan terkait PMB Polindra sesuai informasi yang tersedia",

        // 🔴 DEFAULT UNTUK PERTANYAAN DI LUAR DATASET
        default:
          "Mohon maaf, kami belum dapat memberikan jawaban secara akurat untuk pertanyaan tersebut karena berada di luar cakupan dataset. Hal ini merupakan salah satu batasan dalam penelitian yang kami lakukan.",
      };

      const m = message.toLowerCase();
      let r = responses.default;

      if (m.includes("syarat")) r = responses.persyaratan;
      else if (m.includes("beasiswa")) r = responses.beasiswa;
      else if (m.includes("jadwal")) r = responses.jadwal;
      else if (m.includes("biaya") || m.includes("spp")) r = responses.biaya;
      else if (m.includes("prodi") || m.includes("jurusan")) r = responses.prodi;
      else if (m.includes("jalur")) r = responses.jalur;
      else if (m.includes("daftar")) r = responses.daftar;
      else if (m.includes("lokasi") || m.includes("alamat")) r = responses.lokasi;
      else if (m.includes("kontak") || m.includes("nomor")) r = responses.kontak;
      else if (m.includes("akreditasi")) r = responses.akreditasi;
      else if (m.includes("online")) r = responses.online;
      else if (m.includes("tes")) r = responses.tes;
      else if (m.includes("pengumuman")) r = responses.pengumuman;
      else if (m.includes("ulang")) r = responses.ulang;
      else if (m.includes("kip")) r = responses.kip;
      else if (m.includes("prestasi")) r = responses.prestasi;
      else if (m.includes("reguler")) r = responses.reguler;
      else if (m.includes("industri")) r = responses.industri;
      else if (m.includes("fasilitas")) r = responses.fasilitas;
      else if (m.includes("asrama")) r = responses.asrama;
      else if (m.includes("ukt")) r = responses.ukt;
      else if (m.includes("cicilan")) r = responses.cicilan;
      else if (m.includes("waktu")) r = responses.waktu;
      else if (m.includes("sistem")) r = responses.sistem;
      else if (m.includes("dosen")) r = responses.dosen;
      else if (m.includes("alumni")) r = responses.alumni;
      else if (m.includes("kerja")) r = responses.kerja;
      else if (m.includes("website")) r = responses.website;
      else if (m.includes("email")) r = responses.email;
      else if (m.includes("bantu") || m.includes("help")) r = responses.help;

      setMessages((prev) => [...prev, { role: "assistant", content: r }]);
>>>>>>> 79eac8f (Update struktur direktori dan perbaikan proyek chatbot NLP)
    } finally {
      setIsLoading(false);
    }
  };

<<<<<<< HEAD
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
=======
  const handleReset = () =>
    setMessages([{ role: "assistant", content: INITIAL_GREETING }]);

  return (
    <div className="flex flex-col h-full border rounded-lg">
      <div className="px-6 py-4 border-b flex justify-between">
        <div>
          <h2 className="font-semibold text-xl">Konsultasi PMB Polindra</h2>
          <p className="text-sm text-muted-foreground">
            Chatbot Rule-Based NLP
          </p>
        </div>
        <Button variant="ghost" onClick={handleReset}>
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {messages.map((m, i) => (
          <ChatMessage key={i} role={m.role} content={m.content} />
        ))}
        {isLoading && (
          <div className="flex gap-2 text-sm text-muted-foreground">
            <User className="h-4 w-4" />
            <span>Mengetik...</span>
>>>>>>> 79eac8f (Update struktur direktori dan perbaikan proyek chatbot NLP)
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

<<<<<<< HEAD
      {/* Input */}
      <div className="flex-shrink-0 px-6 py-4 border-t border-border bg-white dark:bg-slate-900/50">
=======
      <div className="px-6 py-4 border-t">
>>>>>>> 79eac8f (Update struktur direktori dan perbaikan proyek chatbot NLP)
        <ChatInput onSubmit={handleSendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
}
<<<<<<< HEAD
=======
  
>>>>>>> 79eac8f (Update struktur direktori dan perbaikan proyek chatbot NLP)
