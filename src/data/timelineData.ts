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
  /* ▸ Step 1 — Lembar Pengesahan */
  {
    type: "step",
    item: {
      step: "1",
      date: "Setelah Sidang Skripsi",
      title: "Revisi & Lembar Pengesahan",
      summary: "Selesaikan revisi skripsi dan kumpulkan tanda tangan lembar pengesahan.",
      detail:
        "Setelah sidang skripsi, lakukan revisi sesuai catatan penguji. Cetak lembar pengesahan dan kumpulkan tanda tangan dari dosen pembimbing, ketua penguji, dan Ketua Jurusan. Lembar pengesahan yang sudah lengkap menjadi syarat untuk melanjutkan proses berikutnya.",
      icon: ClipboardCheck,
      tag: "Wajib",
    },
  },

  /* ▸ Step 2 — Upload Skripsi Final */
  {
    type: "step",
    item: {
      step: "2",
      date: "Setelah Revisi Disetujui",
      title: "Upload Skripsi Final & Jurnal",
      summary: "Upload naskah skripsi final dan jurnal ke repositori kampus.",
      detail:
        "Upload file skripsi final (PDF) beserta jurnal/artikel ilmiah ke repositori digital kampus. Pastikan format sesuai pedoman penulisan. Beberapa kampus juga mewajibkan upload ke portal jurnal nasional.",
      icon: BookOpen,
      tag: "Administrasi",
    },
  },

  /* ▸ Parallel — Daftar Wisuda + Bebas Tanggungan + HKI */
  {
    type: "parallel",
    label: "Proses Paralel — selesaikan semua jalur",
    groups: [
      {
        id: "wisuda",
        label: "Pendaftaran Wisuda",
        color: "sky",
        side: "left",
        items: [
          {
            step: "3A",
            date: "Bisa Duluan",
            title: "Daftar Wisuda Online",
            summary: "Isi formulir pendaftaran wisuda melalui portal akademik.",
            detail:
              "Login ke portal akademik, pilih menu 'Pendaftaran Wisuda', dan isi data yang diminta: nama lengkap sesuai ijazah, tempat/tanggal lahir, alamat, ukuran toga, dan data wali. Pastikan semua data benar karena akan tercetak di ijazah.",
            icon: Send,
            tag: "Administrasi",
          },
          {
            step: "3B",
            date: "Setelah Daftar",
            title: "Upload Berkas Wisuda",
            summary: "Upload pas foto toga, scan ijazah SMA, dan dokumen pendukung.",
            detail:
              "Siapkan dan upload: pas foto berwarna background merah (ukuran 3×4 dan 4×6), scan ijazah SMA/sederajat, scan KTP, dan scan transkrip sementara. Pastikan file sesuai format yang diminta (JPG/PDF, maks 2MB).",
            icon: Camera,
            tag: "Administrasi",
          },
          {
            step: "3C",
            date: "Verifikasi",
            title: "Verifikasi Data Ijazah",
            summary: "Periksa ejaan nama, tempat lahir, dan gelar di draft ijazah.",
            detail:
              "Periksa draft data ijazah yang ditampilkan di portal. Pastikan ejaan nama, tempat/tanggal lahir, dan gelar sudah benar. Jika ada kesalahan, segera ajukan koreksi ke bagian akademik sebelum batas waktu.",
            icon: FileText,
            tag: "Administrasi",
          },
          {
            step: "3D",
            date: "Setelah Validasi",
            title: "Pembayaran Wisuda",
            summary: "Lakukan pembayaran biaya wisuda melalui bank yang ditunjuk.",
            detail:
              "Setelah berkas dinyatakan lengkap, lakukan pembayaran biaya wisuda melalui bank/payment gateway yang ditunjuk. Upload bukti pembayaran ke portal akademik.",
            icon: CreditCard,
            tag: "Administrasi",
          },
        ],
      },
      {
        id: "tanggungan",
        label: "Bebas Tanggungan",
        color: "amber",
        side: "right",
        items: [
          {
            step: "4A",
            date: "Bisa Paralel",
            title: "Bebas Tanggungan Perpustakaan",
            summary: "Pastikan tidak ada buku yang belum dikembalikan.",
            detail:
              "Kunjungi perpustakaan pusat dan perpustakaan jurusan untuk mendapatkan surat keterangan bebas tanggungan. Kembalikan semua buku pinjaman dan selesaikan denda jika ada.",
            icon: Library,
            tag: "Wajib",
          },
          {
            step: "4B",
            date: "Bisa Paralel",
            title: "Bebas Tanggungan Laboratorium",
            summary: "Serahkan surat bebas tanggungan dari setiap lab yang digunakan.",
            detail:
              "Kunjungi semua laboratorium tempat Anda pernah praktikum atau penelitian. Pastikan tidak ada alat/bahan yang belum dikembalikan. Dapatkan tanda tangan kepala lab di formulir bebas tanggungan.",
            icon: FlaskConical,
            tag: "Wajib",
          },
          {
            step: "4C",
            date: "Bisa Paralel",
            title: "Bebas Tanggungan Keuangan",
            summary: "Lunasi seluruh biaya kuliah dan administrasi.",
            detail:
              "Pastikan semua tagihan SPP dan biaya administrasi lainnya sudah lunas. Cetak bukti pembayaran dari portal keuangan.",
            icon: Building,
            tag: "Wajib",
          },
        ],
      },
      {
        id: "hki",
        label: "Cabang HKI (Opsional)",
        color: "violet",
        side: "right",
        items: [
          {
            step: "5A",
            date: "Opsional",
            title: "Pendaftaran HKI",
            summary: "Daftarkan hasil penelitian untuk perlindungan kekayaan intelektual.",
            detail:
              "Mahasiswa menyiapkan dokumen hasil penelitian (abstrak, deskripsi, dan data pendukung) untuk didaftarkan ke Dirjen KI melalui LPPM atau unit HKI kampus. Proses ini difasilitasi oleh dosen pembimbing.",
            icon: ShieldCheck,
            tag: "HKI",
          },
          {
            step: "5B",
            date: "Proses Review",
            title: "Verifikasi & Sertifikat HKI",
            summary: "Dokumen diverifikasi dan sertifikat diterbitkan.",
            detail:
              "Unit HKI kampus memverifikasi kelengkapan dan keaslian dokumen, lalu mengirimkan ke Dirjen Kekayaan Intelektual. Proses ini membutuhkan waktu beberapa minggu hingga sertifikat terbit.",
            icon: FileBadge,
            tag: "HKI",
          },
        ],
      },
    ],
  },

  /* ▸ Step — Gladi Bersih */
  {
    type: "step",
    item: {
      step: "6",
      date: "H-3 Wisuda",
      title: "Gladi Bersih",
      summary: "Ikuti gladi bersih sesuai jadwal yang ditetapkan.",
      detail:
        "Hadiri gladi bersih di gedung wisuda sesuai jadwal fakultas. Kenakan pakaian rapi (belum toga). Anda akan mendapat arahan tentang alur prosesi, posisi duduk, dan tata cara penerimaan ijazah. Kehadiran wajib.",
      icon: Users,
      tag: "Wajib",
    },
  },

  /* ▸ Step — Wisuda */
  {
    type: "step",
    item: {
      step: "7",
      date: "Hari H 🎉",
      title: "Wisuda",
      summary: "Hadiri upacara wisuda dan terima ijazah.",
      detail:
        "Hadir di venue wisuda 2 jam sebelum acara dimulai. Kenakan toga dan perlengkapan yang sudah disiapkan. Ikuti prosesi dengan khidmat.",
      icon: GraduationCap,
      tag: "Selesai",
    },
  },

  /* ▸ Step — SKL Fakultas (AKHIR) */
  {
    type: "step",
    item: {
      step: "8",
      date: "Setelah Wisuda",
      title: "SKL Fakultas",
      summary: "Terima Surat Keterangan Lulus — tidak ada tanggungan lagi! 🎓",
      detail:
        "Setelah seluruh proses selesai dan tidak ada tanggungan tersisa, fakultas menerbitkan Surat Keterangan Lulus (SKL). SKL ini menjadi bukti resmi bahwa Anda telah menyelesaikan seluruh kewajiban akademik dan administrasi. Selamat, Anda resmi lulus! 🎉",
      icon: CheckCircle,
      tag: "Final ✅",
    },
  },
];
