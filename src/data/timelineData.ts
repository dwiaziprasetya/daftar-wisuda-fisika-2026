import {
  FileText,
  ClipboardCheck,
  Users,
  Presentation,
  GraduationCap,
  BookOpen,
  Send,
  CheckCircle,
} from "lucide-react";
import type { TimelineItemData } from "@/components/TimelineItem";

/**
 * ============================================
 *  DATA ROADMAP — PROSEDUR SIDANG S/D WISUDA
 * ============================================
 *
 *  Cara menambah/mengubah tahapan:
 *  1. Tambahkan objek baru ke array di bawah
 *  2. Setiap objek memiliki properti:
 *     - step    : Nomor urut tahapan (string)
 *     - title   : Judul singkat tahapan
 *     - description : Penjelasan detail
 *     - date    : Estimasi waktu / semester
 *     - icon    : (opsional) Icon dari lucide-react
 *     - tag     : (opsional) Label seperti "Wajib", "Opsional", dll
 *
 *  Contoh menambah tahapan baru:
 *  {
 *    step: "9",
 *    date: "Setelah Wisuda",
 *    title: "Pengambilan Ijazah",
 *    description: "Mengambil ijazah dan transkrip asli di bagian akademik.",
 *    icon: FileText,
 *    tag: "Administrasi",
 *  },
 */

export const timelineItems: TimelineItemData[] = [
  {
    step: "1",
    date: "Semester 7–8",
    title: "Pengajuan Judul Skripsi",
    description:
      "Mahasiswa mengajukan topik/judul skripsi kepada koordinator skripsi atau dosen pembimbing akademik untuk mendapat persetujuan.",
    icon: Send,
    tag: "Persiapan",
  },
  {
    step: "2",
    date: "Setelah Judul Disetujui",
    title: "Penunjukan Dosen Pembimbing",
    description:
      "Jurusan menetapkan dosen pembimbing (1 atau 2 orang) berdasarkan topik skripsi yang telah disetujui.",
    icon: Users,
    tag: "Persiapan",
  },
  {
    step: "3",
    date: "Proses Bimbingan",
    title: "Pelaksanaan Penelitian & Bimbingan",
    description:
      "Mahasiswa melakukan penelitian, pengambilan data, analisis, dan penulisan skripsi di bawah bimbingan dosen pembimbing.",
    icon: BookOpen,
  },
  {
    step: "4",
    date: "Setelah Skripsi Selesai",
    title: "Pendaftaran Seminar Hasil / Pra-Sidang",
    description:
      "Mendaftar seminar hasil penelitian dengan melengkapi berkas: draft skripsi, lembar persetujuan pembimbing, dan kartu bimbingan.",
    icon: ClipboardCheck,
    tag: "Administrasi",
  },
  {
    step: "5",
    date: "Sesuai Jadwal Jurusan",
    title: "Seminar Hasil Penelitian",
    description:
      "Presentasi hasil penelitian di hadapan dosen penguji. Mahasiswa menerima masukan dan revisi yang harus diperbaiki.",
    icon: Presentation,
    tag: "Wajib",
  },
  {
    step: "6",
    date: "Setelah Revisi Seminar",
    title: "Pendaftaran Sidang Skripsi",
    description:
      "Melengkapi persyaratan sidang: skripsi final, bukti bebas tanggungan, transkrip sementara, dan persetujuan pembimbing.",
    icon: FileText,
    tag: "Administrasi",
  },
  {
    step: "7",
    date: "Sesuai Jadwal Jurusan",
    title: "Sidang Skripsi (Ujian Munaqasyah/Komprehensif)",
    description:
      "Ujian akhir di hadapan tim penguji. Mahasiswa mempertahankan hasil penelitian dan menjawab pertanyaan penguji.",
    icon: Presentation,
    tag: "Wajib",
  },
  {
    step: "8",
    date: "Setelah Dinyatakan Lulus",
    title: "Revisi & Pengumpulan Skripsi Final",
    description:
      "Melakukan revisi sesuai masukan penguji, mengumpulkan hard copy dan soft copy skripsi ke jurusan dan perpustakaan.",
    icon: CheckCircle,
    tag: "Administrasi",
  },
  {
    step: "9",
    date: "Periode Wisuda",
    title: "Wisuda 🎓",
    description:
      "Mendaftar wisuda, melengkapi administrasi akhir, mengikuti gladi bersih, dan menghadiri upacara wisuda.",
    icon: GraduationCap,
    tag: "Selesai",
  },
];
