import { ChatBot } from "@/components/ChatBot";
import { Users, BookOpen, Award, Phone, Mail, MapPin } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-xl glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <div>
              <h1 className="font-bold text-lg text-foreground">Polindra</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">
                Konsultasi Penerimaan
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="hidden sm:inline">Chatbot Konsultasi Mahasiswa Baru</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Sidebar - Features */}
          <div className="lg:col-span-1 space-y-4">
            {/* Greeting Card */}
            <div className="glass-effect rounded-xl p-6 border-border/50">
              <h2 className="text-xl font-bold gradient-text mb-2">
                Selamat Datang
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Asisten konsultasi berbasis NLP untuk membantu Anda memahami proses penerimaan
                mahasiswa baru di Polindra.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="space-y-3">
              <div className="glass-effect rounded-xl p-4 border-border/50 hover:border-primary/30 smooth-transition group">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 smooth-transition">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-foreground">
                      Program Studi
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Jelajahi program akademik kami
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-xl p-4 border-border/50 hover:border-primary/30 smooth-transition group">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 smooth-transition">
                    <Award className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-foreground">
                      Beasiswa
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Informasi bantuan finansial
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-xl p-4 border-border/50 hover:border-primary/30 smooth-transition group">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 smooth-transition">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-foreground">
                      Persyaratan
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Syarat penerimaan lengkap
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="glass-effect rounded-xl p-4 border-border/50 mt-6">
              <h3 className="font-semibold text-sm text-foreground mb-4">
                Hubungi Kami
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">(0274) 589-5000</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground truncate">
                    admisi@polindra.ac.id
                  </span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Jl. Kejaksan No. 152, Yogyakarta
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Main - Chatbot */}
          <div className="lg:col-span-2">
            <div className="sticky top-20">
              <ChatBot />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/40 mt-16 py-8 bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div>
              <h4 className="font-semibold text-sm text-foreground mb-2">
                Informasi
              </h4>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary smooth-transition">
                    Tentang Polindra
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary smooth-transition">
                    Akreditasi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary smooth-transition">
                    Visi & Misi
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-foreground mb-2">
                Akademik
              </h4>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary smooth-transition">
                    Program D3
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary smooth-transition">
                    Program S1
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary smooth-transition">
                    Beasiswa
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-foreground mb-2">
                Mahasiswa
              </h4>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary smooth-transition">
                    Portal Akademik
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary smooth-transition">
                    Fasilitas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary smooth-transition">
                    Kegiatan
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-foreground mb-2">
                Kontak
              </h4>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary smooth-transition">
                    Hubungi Kami
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary smooth-transition">
                    Lokasi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary smooth-transition">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/30 pt-6 text-center text-xs text-muted-foreground">
            <p>
              © 2024 Polindra. Chatbot Konsultasi Penerimaan Mahasiswa Baru Berbasis NLP.
              Semua hak dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
