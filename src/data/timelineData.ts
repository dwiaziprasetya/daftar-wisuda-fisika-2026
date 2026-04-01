import {
  FileText,
  ClipboardCheck,
  Users,
  CreditCard,
  GraduationCap,
  BookOpen,
  Send,
  CheckCircle,
  ShieldCheck,
  FileBadge,
  Building,
  Camera,
  Library,
  FlaskConical,
} from "lucide-react";

/**
 * ============================================
 *  DATA ROADMAP — PROSEDUR DAFTAR WISUDA
 * ============================================
 *
 *  Struktur data mendukung 2 jenis node:
 *
 *  1. `step`     — Tahapan tunggal di jalur utama
 *  2. `parallel` — Beberapa jalur yang berjalan bersamaan
 *                   (ditampilkan bercabang ke kiri/kanan)
 *
 *  Cara menambah tahapan:
 *  - Tambahkan objek baru ke array `timelineNodes`
 *  - Untuk cabang paralel, gunakan type: "parallel"
 *    dan isi `groups` dengan array jalur
 */

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
  /** Tailwind color class prefix, e.g. "violet", "amber", "sky" */
  color: string;
  side: "left" | "right";
  items: RoadmapItem[];
}

export type TimelineNode =
  | { type: "step"; item: RoadmapItem }
  | { type: "parallel"; label: string; groups: ParallelGroup[] };

/* ── Data ───────────────────────────────────── */

export const timelineNodes: TimelineNode[] = [
  {
    type: "step",
    item: {
      step: "1",
      date: "Setelah Sidang Skripsi",
      title: "Pendaftaran Wisuda Online",
      summary: "Isi formulir pendaftaran wisuda melalui portal akademik.",
      detail:
        "Login ke portal akademik, pilih menu 'Pendaftaran Wisuda', dan isi data yang diminta: nama lengkap sesuai ijazah, tempat/tanggal lahir, alamat, ukuran toga, dan data wali. Pastikan semua data benar karena akan tercetak di ijazah.",
      icon: Send,
      tag: "Administrasi",
    },
  },
  {
    type: "parallel",
    label: "Proses Paralel — selesaikan semua jalur",
    groups: [
      {
        id: "berkas",
        label: "Kelengkapan Berkas",
        color: "sky",
        side: "left",
        items: [
          {
            step: "2A",
            date: "Setelah Daftar",
            title: "Upload Berkas Wisuda",
            summary: "Upload pas foto toga, scan ijazah SMA, dan dokumen pendukung.",
            detail:
              "Siapkan dan upload: pas foto berwarna background merah (ukuran 3×4 dan 4×6), scan ijazah SMA/sederajat, scan KTP, dan scan transkrip sementara. Pastikan file sesuai format yang diminta (JPG/PDF, maks 2MB).",
            icon: Camera,
            tag: "Administrasi",
          },
          {
            step: "2B",
            date: "Verifikasi",
            title: "Verifikasi Data Ijazah",
            summary: "Periksa ejaan nama, tempat lahir, dan gelar di draft ijazah.",
            detail:
              "Periksa draft data ijazah yang ditampilkan di portal. Pastikan ejaan nama, tempat/tanggal lahir, dan gelar (S.Si) sudah benar. Jika ada kesalahan, segera ajukan koreksi ke bagian akademik sebelum batas waktu.",
            icon: FileText,
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
            step: "3A",
            date: "Bisa Paralel",
            title: "Bebas Tanggungan Perpustakaan",
            summary: "Pastikan tidak ada buku yang belum dikembalikan.",
            detail:
              "Kunjungi perpustakaan pusat dan perpustakaan jurusan untuk mendapatkan surat keterangan bebas tanggungan. Kembalikan semua buku pinjaman dan selesaikan denda jika ada.",
            icon: Library,
            tag: "Wajib",
          },
          {
            step: "3B",
            date: "Bisa Paralel",
            title: "Bebas Tanggungan Laboratorium",
            summary: "Serahkan surat bebas tanggungan dari setiap lab yang digunakan.",
            detail:
              "Kunjungi semua laboratorium tempat Anda pernah praktikum atau penelitian. Pastikan tidak ada alat/bahan yang belum dikembalikan. Dapatkan tanda tangan kepala lab di formulir bebas tanggungan.",
            icon: FlaskConical,
            tag: "Wajib",
          },
          {
            step: "3C",
            date: "Bisa Paralel",
            title: "Bebas Tanggungan Keuangan",
            summary: "Lunasi seluruh biaya kuliah dan administrasi.",
            detail:
              "Pastikan semua tagihan SPP, biaya wisuda, dan biaya administrasi lainnya sudah lunas. Cetak bukti pembayaran dari portal keuangan. Jika ada keringanan/beasiswa, pastikan surat keterangan sudah dilampirkan.",
            icon: Building,
            tag: "Wajib",
          },
        ],
      },
      {
        id: "hki",
        label: "Cabang HKI",
        color: "violet",
        side: "right",
        items: [
          {
            step: "H1",
            date: "Opsional",
            title: "Pendaftaran HKI",
            summary: "Daftarkan hasil penelitian untuk perlindungan kekayaan intelektual.",
            detail:
              "Mahasiswa menyiapkan dokumen hasil penelitian (abstrak, deskripsi, dan data pendukung) untuk didaftarkan ke Dirjen KI melalui LPPM atau unit HKI kampus. Proses ini difasilitasi oleh dosen pembimbing.",
            icon: ShieldCheck,
            tag: "HKI",
          },
          {
            step: "H2",
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
  {
    type: "step",
    item: {
      step: "4",
      date: "Setelah Semua Selesai",
      title: "Validasi & Pembayaran Wisuda",
      summary: "Semua berkas divalidasi, lakukan pembayaran biaya wisuda.",
      detail:
        "Bagian akademik memvalidasi seluruh berkas dan surat bebas tanggungan. Setelah dinyatakan lengkap, lakukan pembayaran biaya wisuda melalui bank yang ditunjuk. Upload bukti pembayaran ke portal.",
      icon: CreditCard,
      tag: "Administrasi",
    },
  },
  {
    type: "step",
    item: {
      step: "5",
      date: "H-3 Wisuda",
      title: "Gladi Bersih",
      summary: "Ikuti gladi bersih sesuai jadwal yang ditetapkan.",
      detail:
        "Hadiri gladi bersih di gedung wisuda sesuai jadwal fakultas. Kenakan pakaian rapi (belum toga). Anda akan mendapat arahan tentang alur prosesi, posisi duduk, dan tata cara penerimaan ijazah. Kehadiran wajib — ketidakhadiran bisa menunda wisuda.",
      icon: Users,
      tag: "Wajib",
    },
  },
  {
    type: "step",
    item: {
      step: "6",
      date: "Hari H 🎉",
      title: "Wisuda",
      summary: "Hadiri upacara wisuda dan terima ijazah.",
      detail:
        "Hadir di venue wisuda 2 jam sebelum acara dimulai. Kenakan toga dan perlengkapan yang sudah disiapkan. Ikuti prosesi dengan khidmat. Setelah acara, Anda resmi menyandang gelar Sarjana Sains (S.Si)! 🎓🎉",
      icon: GraduationCap,
      tag: "Selesai",
    },
  },
];
