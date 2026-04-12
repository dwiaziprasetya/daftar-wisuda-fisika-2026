import {
  FileText,
  Users,
  CreditCard,
  GraduationCap,
  Send,
  ShieldCheck,
  FileBadge,
  Building,
  Camera,
  Library,
  FlaskConical,
  CheckCircle,
  ClipboardCheck,
  BookOpen,
  Stamp,
  UserCheck,
  Mail,
  Printer,
  BadgeCheck,
  ScrollText,
  IdCard,
  PenLine,
  FolderCheck,
  Upload,
  BookMarked,
} from "lucide-react";

/* ── Interfaces ─────────────────────────────── */

export interface RoadmapResource {
  label: string;
  title: string;
  url: string;
}

export interface RoadmapItem {
  step: string;
  date: string;
  title: string;
  summary: string;
  detail: string;
  icon?: React.ComponentType<{ className?: string }>;
  tag?: string;
  resources?: RoadmapResource[];
}

export interface ParallelGroup {
  id: string;
  label: string;
  color: string;
  side: "left" | "right";
  items: RoadmapItem[];
}

export type TimelineNode =
  | { type: "step"; item: RoadmapItem }
  | { type: "parallel"; label: string; groups: ParallelGroup[] };

/* ── Data ───────────────────────────────────── */

export const timelineNodes: TimelineNode[] = [
  /* ═══════════════════════════════════════════
     STEP 1 — Lembar Pengesahan
     ═══════════════════════════════════════════ */
  {
    type: "step",
    item: {
      step: "1",
      date: "Setelah Sidang Skripsi",
      title: "Revisi & Lembar Pengesahan",
      summary:
        "Selesaikan revisi skripsi, kumpulkan tanda tangan 3 penguji lalu 2 pembimbing, dan jilid hardcover.",
      detail:
        "Setelah sidang skripsi, lakukan revisi sesuai catatan penguji. Cetak lembar pengesahan dan kumpulkan tanda tangan dari 3 dosen penguji terlebih dahulu, kemudian 2 dosen pembimbing. Setelah 5 tanda tangan lengkap, dosen pembimbing akan menginputkan nilai ke SSO. Kemudian jilid skripsi dalam format hardcover dan serahkan ke Bu Iin untuk mendapatkan tanda tangan Kaprodi.",
      icon: ClipboardCheck,
      tag: "Wajib",
    },
  },

  /* ═══════════════════════════════════════════
     PARALLEL 1 — Kelulusan (Hardcover→Bebas Dept) + HKI
     Setelah lembar pengesahan, HKI bisa dimulai paralel
     ═══════════════════════════════════════════ */
  {
    type: "parallel",
    label: "Paralel — HKI bisa diurus bersamaan dengan proses kelulusan",
    groups: [
      {
        id: "kelulusan-awal",
        label: "Kelulusan (Tahap Awal)",
        color: "sky",
        side: "left",
        items: [
          {
            step: "2A",
            date: "Setelah Jilid",
            title: "Cap UPA pada Hardcover",
            summary:
              "Hardcover yang sudah ditandatangani Kaprodi harus dicap di UPA.",
            detail:
              "Bawa skripsi jilid hardcover yang sudah ditandatangani oleh Kaprodi ke UPA (Unit Pelaksana Administrasi) untuk mendapatkan cap/stempel resmi universitas.",
            icon: Stamp,
            tag: "Wajib",
          },
          {
            step: "2B",
            date: "Setelah Cap",
            title: "Surat Bebas Perpustakaan Fakultas",
            summary:
              "Serahkan 1 jilid hardcover ke perpustakaan fakultas untuk mendapatkan surat bebas perpus.",
            detail:
              "Setelah hardcover dicap oleh UPA, serahkan 1 eksemplar skripsi jilid hardcover ke perpustakaan fakultas. Perpustakaan akan memverifikasi dan menerbitkan Surat Keterangan Bebas Perpustakaan Fakultas.",
            icon: Library,
            tag: "Wajib",
          },
          {
            step: "2C",
            date: "Proses Bertahap",
            title: "Surat Bebas Departemen",
            summary:
              "Minta tanda tangan dosbim, kirim file ke email fisika, konfirmasi ke Pak Jatmiko, tanda tangan Bu Iin & Prof Heri.",
            detail:
              "Tahap ini terdiri dari beberapa langkah:\n\n1. Minta tanda tangan Dosen Pembimbing 1 dan 2, serta serahkan jilid skripsi jika diminta.\n2. Kirimkan beberapa file yang diminta ke email departemen fisika dan konfirmasi tanda tangan kepada Pak Jatmiko.\n3. Minta tanda tangan Bu Iin dengan menunjukkan hard file sertifikat TOEFL.\n4. Minta tanda tangan Prof Heri (Kaprodi) sebagai langkah terakhir.\n\nSetelah Surat Bebas Departemen selesai, bisa konfirmasi ke Kaprodi untuk mengubah status menjadi \"Lulus Studi\" di SSO.",
            icon: FolderCheck,
            tag: "Wajib",
          },
        ],
      },
      {
        id: "hki",
        label: "Daftar HKI",
        color: "violet",
        side: "right",
        items: [
          {
            step: "H1",
            date: "Setelah Nilai Masuk SSO",
            title: "Surat Permohonan HKI",
            summary:
              "Siapkan surat permohonan pendaftaran HKI dengan konsultasi dosbim.",
            detail:
              "Daftar HKI bisa dilakukan setelah skripsi mendapatkan nilai di SSO (sehabis sidang atau setelah revisi). Konsultasikan dengan Dosen Pembimbing 1 dan 2, kemudian siapkan surat permohonan pendaftaran HKI.",
            icon: ScrollText,
            tag: "HKI",
          },
          {
            step: "H2",
            date: "Bersamaan",
            title: "Surat Pengalihan HKI",
            summary: "Siapkan surat pengalihan hak kekayaan intelektual.",
            detail:
              "Siapkan surat pengalihan yang menyatakan pengalihan hak kekayaan intelektual dari pencipta ke institusi (jika diperlukan) sesuai ketentuan yang berlaku.",
            icon: Send,
            tag: "HKI",
          },
          {
            step: "H3",
            date: "Bersamaan",
            title: "Surat Pernyataan HKI",
            summary: "Buat surat pernyataan keaslian karya.",
            detail:
              "Buat dan tandatangani surat pernyataan yang menyatakan bahwa karya yang didaftarkan adalah asli dan belum pernah dipublikasikan sebelumnya.",
            icon: PenLine,
            tag: "HKI",
          },
          {
            step: "H4",
            date: "Bersamaan",
            title: "Dokumen Tanda Terima Berkas",
            summary: "Siapkan dokumen tanda terima berkas HKI.",
            detail:
              "Siapkan dan lengkapi dokumen tanda terima berkas sebagai bukti bahwa semua persyaratan dokumen HKI telah diserahkan.",
            icon: FileText,
            tag: "HKI",
          },
          {
            step: "H5",
            date: "Verifikasi",
            title: "Scan KTP & Verifikasi di UPT Perpustakaan",
            summary:
              "Scan KTP semua pencipta dan verifikasi di Gedung UPT Perpustakaan Lt 5.",
            detail:
              "Scan KTP semua pencipta yang terlibat, kemudian datang ke Gedung UPT Perpustakaan Lantai 5 untuk verifikasi kelengkapan berkas. Jika semua sudah disetujui (ACC), Anda akan mendapatkan nomor urut sebagai bukti pendaftaran HKI resmi.",
            icon: BadgeCheck,
            tag: "HKI",
          },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════
     STEP — Konfirmasi Lulus Studi di SSO
     ═══════════════════════════════════════════ */
  {
    type: "step",
    item: {
      step: "3",
      date: "Setelah Bebas Departemen",
      title: "Konfirmasi \"Lulus Studi\" di SSO",
      summary:
        "Konfirmasi ke Kaprodi agar status di SSO berubah menjadi \"Lulus Studi\".",
      detail:
        "Setelah Surat Bebas Departemen selesai, hubungi Kaprodi untuk mengkonfirmasi bahwa semua persyaratan telah dipenuhi. Kaprodi akan memperbarui status Anda di SSO menjadi \"Lulus Studi\". Status ini menjadi syarat utama untuk mendaftar wisuda.",
      icon: UserCheck,
      tag: "Milestone",
    },
  },

  /* ═══════════════════════════════════════════
     PARALLEL 2 — Kelulusan (SKL) + Daftar Wisuda
     Setelah "Lulus Studi" & HKI selesai → wisuda bisa dimulai
     ═══════════════════════════════════════════ */
  {
    type: "parallel",
    label: "Paralel — Daftar Wisuda bisa dilakukan bersamaan dengan proses SKL",
    groups: [
      {
        id: "kelulusan-akhir",
        label: "Kelulusan (Tahap Akhir)",
        color: "sky",
        side: "left",
        items: [
          {
            step: "4A",
            date: "Setelah Bebas Dept",
            title: "SKL Departemen",
            summary:
              "Kirim berkas termasuk Surat Bebas Departemen ke Bu Iin via WA, isi biodata, dan dapatkan SKL Departemen.",
            detail:
              "Kirimkan beberapa file termasuk Surat Bebas Departemen Fisika ke WA japri Bu Iin. Kemudian isi beberapa informasi biodata yang diminta. Setelah diproses, Anda akan mendapatkan SKL Departemen dan Surat Permohonan SKL Fakultas.",
            icon: Mail,
            tag: "Wajib",
          },
          {
            step: "4B",
            date: "Langkah Terakhir",
            title: "SKL Fakultas",
            summary:
              "Bawa dokumen hard file ke AP Lantai 2 bagian resepsionis.",
            detail:
              "Ini adalah langkah terakhir untuk kelulusan. Bawa beberapa dokumen hard file (termasuk SKL Departemen dan Surat Permohonan SKL Fakultas) ke AP Lantai 2 bagian resepsionis. Serahkan berkas dan tunggu proses penerbitan SKL Fakultas.",
            icon: Building,
            tag: "Wajib",
          },
          {
            step: "4C",
            date: "3 Hari Kerja",
            title: "Verifikasi SKL Fakultas",
            summary:
              "Fotokopi SKL 5 lembar, tempel foto 3×4, cap di UPA, dan serahkan 1 ke fakultas.",
            detail:
              "SKL Fakultas akan jadi dalam 3 hari kerja. Setelah jadi, SKL harus diverifikasi:\n\n1. Fotokopi SKL sebanyak 5 lembar.\n2. Tempel foto 3×4 pada masing-masing lembar.\n3. Bawa ke UPA untuk dicap/stempel.\n4. Serahkan 1 lembar kembali ke fakultas sebagai berkas arsip.\n\nSisa 4 lembar untuk keperluan pribadi (lamaran kerja, dll).",
            icon: Printer,
            tag: "Wajib",
          },
        ],
      },
      {
        id: "wisuda",
        label: "Daftar Wisuda",
        color: "amber",
        side: "right",
        items: [
          {
            step: "W1",
            date: "Setelah Lulus Studi di SSO",
            title: "Surat Persyaratan Wisuda (AK.009)",
            summary:
              "Isi dan cetak formulir AK.009 dari portal wisuda SSO.",
            detail:
              "Daftar Wisuda bisa dilakukan setelah status di SSO berubah menjadi \"Lulus Studi\" dan menu wisuda sudah muncul. Download dan isi formulir Surat Persyaratan Wisuda (AK.009) dari SSO.",
            icon: FileText,
            tag: "Wisuda",
          },
          {
            step: "W2",
            date: "Siapkan",
            title: "Fotokopi KTP (2 Lembar)",
            summary: "Fotokopi KTP sebanyak 2 lembar.",
            detail:
              "Siapkan fotokopi KTP yang masih berlaku sebanyak 2 lembar. Pastikan hasil fotokopi jelas dan terbaca.",
            icon: IdCard,
            tag: "Wisuda",
          },
          {
            step: "W3",
            date: "Isi Formulir",
            title: "Formulir Keterangan Pribadi (AK.010)",
            summary:
              "Isi formulir keterangan pribadi untuk kelengkapan wisuda.",
            detail:
              "Download dan isi Formulir Keterangan Pribadi (AK.010). Isi dengan data yang benar karena akan digunakan untuk keperluan administrasi wisuda.",
            icon: BookOpen,
            tag: "Wisuda",
          },
          {
            step: "W4",
            date: "Isi Formulir",
            title: "Formulir Isian Biodata Ijazah (AK.011)",
            summary:
              "Isi biodata yang akan tercetak di ijazah — pastikan ejaan benar!",
            detail:
              "Download dan isi Formulir Isian Biodata Ijazah (AK.011). PENTING: Periksa ejaan nama lengkap, tempat/tanggal lahir, dan gelar akademik dengan sangat teliti karena data ini akan tercetak di ijazah dan TIDAK BISA diubah setelah dicetak.",
            icon: GraduationCap,
            tag: "Wisuda",
          },
          {
            step: "W5",
            date: "Jika Ada",
            title: "Surat Ijin Cuti Kuliah (Opsional)",
            summary:
              "Lampirkan surat ijin cuti jika pernah mengambil cuti kuliah.",
            detail:
              "Jika selama masa kuliah Anda pernah mengambil cuti akademik, lampirkan surat ijin cuti kuliah yang sudah disetujui. Jika tidak pernah cuti, langkah ini bisa dilewati.",
            icon: FileText,
            tag: "Opsional",
          },
          {
            step: "W6",
            date: "Dari SSO",
            title: "SKPI (Surat Keterangan Pendamping Ijazah)",
            summary:
              "Siapkan SKPI asli, validasi SKPI, dan bukti mengisi SKPI di SSO.",
            detail:
              "Siapkan 3 dokumen terkait SKPI:\n\n1. SKPI Asli — cetak dari SSO.\n2. Validasi SKPI — pastikan data sudah divalidasi.\n3. Bukti Mengisi SKPI di SSO — screenshot atau cetak halaman konfirmasi.\n\nSKPI adalah dokumen pendamping ijazah yang menjelaskan capaian pembelajaran selama kuliah.",
            icon: BookMarked,
            tag: "Wisuda",
          },
          {
            step: "W7",
            date: "Dari Proses HKI",
            title: "Bukti Pendaftaran HKI",
            summary:
              "Lampirkan bukti pendaftaran HKI (nomor urut dari UPT Perpustakaan).",
            detail:
              "Lampirkan bukti pendaftaran HKI yang sudah didapatkan dari proses Daftar HKI sebelumnya (nomor urut dari UPT Perpustakaan Lt 5). Dokumen ini menjadi salah satu syarat wajib pendaftaran wisuda.",
            icon: ShieldCheck,
            tag: "Wisuda",
          },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════
     STEP FINAL — Selesai
     ═══════════════════════════════════════════ */
  {
    type: "step",
    item: {
      step: "✓",
      date: "Semua Selesai 🎉",
      title: "Proses Kelulusan & Wisuda Selesai!",
      summary:
        "SKL Fakultas terverifikasi, berkas wisuda lengkap — tidak ada tanggungan lagi! 🎓",
      detail:
        "Selamat! Semua proses kelulusan dan pendaftaran wisuda telah selesai. SKL Fakultas sudah terverifikasi dan berkas wisuda sudah lengkap. Tinggal menunggu jadwal wisuda dan mengikuti gladi bersih. Anda resmi bebas dari seluruh tanggungan akademik dan administrasi! 🎉",
      icon: CheckCircle,
      tag: "Selesai ✅",
    },
  },
];
