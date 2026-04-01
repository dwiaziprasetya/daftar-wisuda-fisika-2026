import {
  FileText,
  ClipboardCheck,
  Users,
  Presentation,
  GraduationCap,
  BookOpen,
  Send,
  CheckCircle,
  ShieldCheck,
  FileBadge,
} from "lucide-react";

/**
 * ============================================
 *  DATA ROADMAP — PROSEDUR SIDANG S/D WISUDA
 * ============================================
 *
 *  Cara menambah/mengubah tahapan:
 *  - Tambahkan objek baru ke array `mainTimeline` atau `hkiBranch`
 *  - Properti:
 *     step        : Nomor urut (string)
 *     title       : Judul singkat
 *     summary     : Ringkasan 1 baris (tampil di card)
 *     detail      : Penjelasan lengkap (tampil saat diklik)
 *     date        : Estimasi waktu
 *     icon        : Icon dari lucide-react (opsional)
 *     tag         : Label seperti "Wajib", "Administrasi" (opsional)
 */

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

/** Cabang HKI — merge sebelum wisuda */
export const hkiBranch: RoadmapItem[] = [
  {
    step: "HKI-1",
    date: "Setelah Seminar Hasil",
    title: "Pendaftaran HKI",
    summary: "Daftarkan hasil penelitian untuk perlindungan Hak Kekayaan Intelektual.",
    detail:
      "Mahasiswa menyiapkan dokumen hasil penelitian (abstrak, deskripsi, dan data pendukung) untuk didaftarkan ke Dirjen KI melalui LPPM atau unit HKI kampus. Proses ini biasanya difasilitasi oleh dosen pembimbing.",
    icon: ShieldCheck,
    tag: "HKI",
  },
  {
    step: "HKI-2",
    date: "Proses Review",
    title: "Verifikasi & Persetujuan HKI",
    summary: "Dokumen diverifikasi dan disetujui oleh pihak kampus & Dirjen KI.",
    detail:
      "Unit HKI kampus memverifikasi kelengkapan dan keaslian dokumen, lalu mengirimkan ke Dirjen Kekayaan Intelektual. Proses ini membutuhkan waktu beberapa minggu hingga sertifikat terbit.",
    icon: FileBadge,
    tag: "HKI",
  },
];

/** Timeline utama */
export const mainTimeline: RoadmapItem[] = [
  {
    step: "1",
    date: "Semester 7–8",
    title: "Pengajuan Judul Skripsi",
    summary: "Ajukan topik skripsi untuk mendapat persetujuan.",
    detail:
      "Mahasiswa mengajukan topik/judul skripsi kepada koordinator skripsi atau dosen pembimbing akademik. Judul harus relevan dengan bidang Fisika dan belum pernah digunakan. Siapkan latar belakang singkat dan rumusan masalah.",
    icon: Send,
    tag: "Persiapan",
  },
  {
    step: "2",
    date: "Setelah Judul Disetujui",
    title: "Penunjukan Dosen Pembimbing",
    summary: "Jurusan menetapkan dosen pembimbing berdasarkan topik.",
    detail:
      "Jurusan menetapkan 1–2 dosen pembimbing berdasarkan keahlian dan ketersediaan. Mahasiswa akan mendapat SK pembimbing yang harus disimpan sebagai dokumen administrasi. Mulai buat jadwal bimbingan rutin.",
    icon: Users,
    tag: "Persiapan",
  },
  {
    step: "3",
    date: "Proses Bimbingan",
    title: "Pelaksanaan Penelitian & Bimbingan",
    summary: "Lakukan penelitian dan tulis skripsi di bawah bimbingan dosen.",
    detail:
      "Mahasiswa melakukan penelitian, pengambilan data, analisis, dan penulisan skripsi. Bimbingan dilakukan minimal 2 minggu sekali. Pastikan kartu bimbingan terisi dan ditandatangani setiap pertemuan. Simpan semua data mentah dan backup secara berkala.",
    icon: BookOpen,
  },
  {
    step: "4",
    date: "Setelah Skripsi Selesai",
    title: "Pendaftaran Seminar Hasil",
    summary: "Daftar seminar dengan melengkapi berkas yang diperlukan.",
    detail:
      "Berkas yang dibutuhkan: draft skripsi (minimal BAB I–IV), lembar persetujuan pembimbing, kartu bimbingan yang terisi, KRS aktif, dan bukti bebas tanggungan laboratorium. Daftar ke bagian akademik jurusan sesuai jadwal yang ditetapkan.",
    icon: ClipboardCheck,
    tag: "Administrasi",
  },
  {
    step: "5",
    date: "Sesuai Jadwal Jurusan",
    title: "Seminar Hasil Penelitian",
    summary: "Presentasi hasil penelitian di hadapan dosen penguji.",
    detail:
      "Mahasiswa mempresentasikan hasil penelitian selama ±20 menit, dilanjutkan sesi tanya jawab ±30 menit. Dosen penguji memberikan masukan, catatan revisi, dan penilaian. Siapkan slide presentasi yang jelas dan ringkas. Hasil seminar berupa catatan revisi yang harus diselesaikan.",
    icon: Presentation,
    tag: "Wajib",
  },
  {
    step: "6",
    date: "Setelah Revisi Seminar",
    title: "Pendaftaran Sidang Skripsi",
    summary: "Lengkapi persyaratan sidang dan daftar ke jurusan.",
    detail:
      "Persyaratan sidang: skripsi final yang sudah direvisi, bukti bebas tanggungan perpustakaan & keuangan, transkrip sementara, pas foto, dan persetujuan pembimbing bahwa revisi sudah selesai. Pastikan semua berkas lengkap sebelum mendaftar.",
    icon: FileText,
    tag: "Administrasi",
  },
  {
    step: "7",
    date: "Sesuai Jadwal Jurusan",
    title: "Sidang Skripsi",
    summary: "Ujian akhir mempertahankan hasil penelitian.",
    detail:
      "Ujian sidang berlangsung ±60–90 menit. Mahasiswa mempresentasikan keseluruhan skripsi dan menjawab pertanyaan dari tim penguji (biasanya 3–4 dosen). Penilaian meliputi kualitas penelitian, penguasaan materi, dan kemampuan presentasi. Hasil: Lulus / Lulus dengan revisi / Tidak lulus.",
    icon: Presentation,
    tag: "Wajib",
  },
  {
    step: "8",
    date: "Setelah Dinyatakan Lulus",
    title: "Revisi & Pengumpulan Skripsi Final",
    summary: "Revisi sesuai masukan penguji, kumpulkan hard & soft copy.",
    detail:
      "Selesaikan revisi maksimal 2 minggu setelah sidang (atau sesuai ketentuan jurusan). Kumpulkan hard copy (biasanya 3–4 eksemplar) dan soft copy (CD/flash drive) ke jurusan dan perpustakaan. Dapatkan tanda tangan pengesahan dari semua penguji dan dekan.",
    icon: CheckCircle,
    tag: "Administrasi",
  },
  {
    step: "9",
    date: "Periode Wisuda",
    title: "Wisuda 🎓",
    summary: "Daftar wisuda dan hadiri upacara wisuda.",
    detail:
      "Daftar wisuda melalui portal akademik, lengkapi administrasi (foto toga, pembayaran wisuda, verifikasi data ijazah). Ikuti gladi bersih sesuai jadwal. Hadiri upacara wisuda bersama keluarga. Selamat, Anda resmi menyandang gelar Sarjana Sains (S.Si)! 🎉",
    icon: GraduationCap,
    tag: "Selesai",
  },
];

/** Index di mainTimeline tempat cabang HKI bergabung (sebelum "Revisi & Pengumpulan") */
export const HKI_MERGE_INDEX = 7; // step 8 — index 7
/** Index di mainTimeline tempat cabang HKI mulai bercabang (setelah "Seminar Hasil") */
export const HKI_BRANCH_INDEX = 5; // step 6 — index 5
