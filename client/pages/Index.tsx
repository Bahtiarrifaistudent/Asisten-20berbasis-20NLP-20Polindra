import { ChatBot } from "@/components/ChatBot";
import { Users, BookOpen, Award, Phone, Mail, MapPin } from "lucide-react";

/**
 * Halaman utama Chatbot Konsultasi PMB Polindra
 */
export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/30">
      
      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-xl glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <img
                src="/2bg.png"
                alt="Logo Polindra"
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h1 className="font-bold text-lg text-foreground">Polindra</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">
                Konsultasi Penerimaan Mahasiswa Baru
              </p>
            </div>
          </div>

          <span className="hidden sm:inline text-sm text-muted-foreground">
            Chatbot Konsultasi PMB Berbasis NLP
          </span>
        </div>
      </nav>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ===== LEFT SIDEBAR ===== */}
          <div className="lg:col-span-1 space-y-4">

            {/* Greeting */}
            <div className="glass-effect rounded-xl p-6 border-border/50">
              <h2 className="text-xl font-bold mb-2 gradient-text">
                Selamat Datang
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Asisten konsultasi berbasis Natural Language Processing (NLP)
                untuk membantu Anda memahami proses penerimaan mahasiswa baru
                di Politeknik Negeri Indramayu.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-3">
              <Feature
                icon={<BookOpen className="h-5 w-5 text-primary" />}
                title="Program Studi"
                desc="Informasi lengkap seluruh program studi."
              />
              <Feature
                icon={<Award className="h-5 w-5 text-accent" />}
                title="Beasiswa"
                desc="Informasi bantuan dan beasiswa pendidikan."
              />
              <Feature
                icon={<Users className="h-5 w-5 text-primary" />}
                title="Persyaratan"
                desc="Syarat dan ketentuan penerimaan mahasiswa baru."
              />
            </div>

            {/* Contact */}
            <div className="glass-effect rounded-xl p-4 border-border/50">
              <h3 className="font-semibold text-sm mb-4 text-foreground">
                Hubungi Kami
              </h3>
              <ContactItem
                icon={<Phone className="h-4 w-4" />}
                text="(0234) 5746464"
              />
              <ContactItem
                icon={<Mail className="h-4 w-4" />}
                text="info@polindra.ac.id"
              />
              <ContactItem
                icon={<MapPin className="h-4 w-4" />}
                text="Indramayu, Jawa Barat"
              />
            </div>

            {/* Team */}
            <div className="glass-effect rounded-xl p-4 border-border/50">
              <h3 className="font-semibold text-sm mb-4 text-foreground">
                Tim Pengembang
              </h3>

              <TeamMember
                img="/team/bah.jpg"
                name="Bahtiar Rifai"
                role="Project Leader & NLP Engineer"
              />
              <TeamMember
                img="/team/dar.jpg"
                name="Darmawan Almadani"
                role="Backend & API Integration"
              />
              <TeamMember
                img="/team/fan.jpg"
                name="Fany Revalina Putri"
                role="UI/UX & Frontend React"
              />
            </div>
          </div>

          {/* ===== RIGHT CONTENT (CHATBOT) ===== */}
          <div className="lg:col-span-2">
            <div className="sticky top-20">
              <ChatBot />
            </div>
          </div>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-border/40 mt-16 py-6 bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 text-center text-xs text-muted-foreground">
          © 2024 Politeknik Negeri Indramayu —  
          Chatbot Konsultasi PMB Berbasis NLP
        </div>
      </footer>
    </div>
  );
}

/* ================== SUB COMPONENTS ================== */

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="glass-effect rounded-xl p-4 border-border/50 hover:border-primary/30 smooth-transition">
      <div className="flex gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-sm text-foreground">{title}</h3>
          <p className="text-xs text-muted-foreground">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function ContactItem({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 text-sm mb-2">
      <span className="text-primary">{icon}</span>
      <span className="text-muted-foreground">{text}</span>
    </div>
  );
}

function TeamMember({
  img,
  name,
  role,
}: {
  img: string;
  name: string;
  role: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <img
        src={img}
        alt={name}
        className="w-10 h-10 rounded-full object-cover border border-border"
      />
      <div>
        <p className="text-sm font-medium text-foreground">{name}</p>
        <p className="text-xs text-muted-foreground">{role}</p>
      </div>
    </div>
  );
}
