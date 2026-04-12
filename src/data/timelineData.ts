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
  BookCopy,
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
      date: "Setelah Sidang",
      title: "Revisi & Lembar Pengesahan",
      summary:
        "Melakukan revisi skripsi serta pengumpulan tanda tangan penguji dan pembimbing",
      detail: `
        Setelah sidang, lakukan pencetakan lembar pengesahan, kemudian lanjutkan proses revisi sekaligus mengumpulkan tanda tangan dari 3 dosen penguji dan 2 dosen pembimbing. Apabila telah sampai pada pembimbing 1, umumnya nilai akan langsung diinput dan dapat dilihat melalui SSO.

        Catatan:

        1. Cetak lembar pengesahan sebanyak 3 lembar.
        2. Lembar pengesahan akan disertakan dalam skripsi yang telah dijilid hardcover.
        3. Tanda tangan Kaprodi dilakukan setelah skripsi dijilid, melalui Bu Iin.
      `,
      icon: ClipboardCheck,
      tag: "Wajib",
    },
  },

  {
    type: "step",
    item: {
      step: "2",
      date: "Setelah Revisi dan Nilai Keluar",
      title: "Hardcopy Skripsi",
      summary:
        "Menjilid skripsi dalam bentuk hardcopy (cover abu-abu)",
      detail: `
        Skripsi hardcopy dijilid dengan cover abu-abu dalam jumlah yang bersifat kondisional. Setelah dijilid, skripsi diserahkan kepada Bu Iin untuk proses permintaan tanda tangan Kaprodi.
        
        Catatan: Beberapa dosen pembimbing mungkin tidak menerima hardcopy dan hanya menerima softfile. Oleh karena itu, pastikan terlebih dahulu kepada masing-masing dosen pembimbing. Namun, untuk Perpustakaan FSM tetap bersifat wajib.

        1. Perpustakaan FSM (wajib)
        2. Dosen Pembimbing 1 (kondisional)
        3. Dosen Pembimbing 2 (kondisional)
      `,
      icon: BookCopy,
      tag: "Wajib",
    },
  },

  {
    type: "step",
    item: {
      step: "3",
      date: "Setelah Jilid dan Tanda Tangan Lengkap",
      title: "Cap UPA pada Hardcopy",
      summary:
        "Melakukan cap UPA pada seluruh hardcopy yang telah lengkap tanda tangan",
      detail: `
        Ambil seluruh skripsi yang telah dititipkan kepada Bu Iin, kemudian bawa ke UPA untuk mendapatkan cap atau stempel resmi.

        Catatan: Setelah seluruh skripsi mendapatkan cap, dokumen dapat diserahkan kepada:
        1. Perpustakaan FSM (untuk keperluan bebas perpustakaan)
        2. Dosen Pembimbing 1 dan 2 (sebagai syarat surat bebas departemen)
      `,
      icon: Stamp,
      tag: "Wajib",
    },
  },

  /* ═══════════════════════════════════════════
     PARALLEL 1 — Kelulusan (Hardcover→Bebas Dept) + HKI
     Setelah lembar pengesahan, HKI bisa dimulai paralel
     ═══════════════════════════════════════════ */
  {
    type: "parallel",
    label: "Paralel — HKI dapat diurus bersamaan dengan proses kelulusan",
    groups: [
      {
        id: "kelulusan-awal",
        label: "Kelulusan (Tahap Awal)",
        color: "sky",
        side: "left",
        items: [
          {
            step: "4A",
            date: "Setelah Skripsi di Cap UPA",
            title: "Surat Bebas Perpustakaan Fakultas",
            summary:
              "Mengurus surat bebas pustaka di Perpustakaan FSM",
            detail: `
            Sebelum menyerahkan 1 jilid hardcopy skripsi ke perpustakaan, mahasiswa diwajibkan mengikuti prosedur bebas pustaka FSM [lihat di sini|https://www.instagram.com/p/C1qf3ZmSYpI/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==].

            Setelah seluruh prosedur dipenuhi, silakan datang langsung ke Perpustakaan FSM dan menyampaikan kepada petugas bahwa prosedur telah diselesaikan, kemudian menyerahkan 1 jilid hardcopy skripsi.

            Setelah menunggu beberapa saat, nama akan dipanggil dan mahasiswa akan menerima **Surat Bebas Pustaka Perpustakaan FSM**.
            `,
            icon: Library,
            tag: "Wajib",
          },
          {
            step: "4B",
            date: "Proses Bertahap",
            title: "Surat Bebas Departemen",
            summary:
              "Tanda tangan Dosbim, Pak Jatmiko, Bu Iin, dan Kaprodi",
            detail:
              `
              1. Meminta tanda tangan Dosen Pembimbing 1 dan 2, serta menyerahkan hardcopy skripsi apabila diminta.
              2. Mengirimkan beberapa berkas ke email skripsi@fisika.fsm.undip.ac.id (dalam format .rar/.zip), serta melakukan konfirmasi kepada Pak Jatmiko terkait proses tanda tangan. Berkas yang dikirim meliputi:
                 a. Biodata Alumni **PDF**
                 b. Proposal Skripsi (yang telah ditandatangani) **WORD dan PDF**
                 c. Skripsi (yang telah ditandatangani) **WORD dan PDF**
                 d. Lembar Pengesahan yang telah ditandatangani **PDF**
                 e. Karya Ilmiah (YPJ) **PDF**
                 f. Surat Bebas Perpustakaan FSM **PDF**
                 g. Surat Bebas Perpustakaan Undip **PDF**
                 h. Presentasi Sidang Skripsi **PPTX**
              3. Meminta tanda tangan Bu Iin dengan menunjukkan hardcopy sertifikat TOEFL.
              4. Meminta tanda tangan Kaprodi sebagai tahap terakhir.

              **Catatan: Seluruh proses, kecuali tanda tangan Kaprodi, dapat dilakukan secara paralel.**
            `,
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
            step: "HKI 1",
            date: "Setelah Diskusi dengan Dosen Pembimbing",
            title: "Surat Permohonan HKI",
            summary:
              "Siapkan formulir permohonan pendaftaran",
            detail: `
              1. Surat Permohonan Pendaftaran Ciptaan bisa di download [di sini|https://docs.google.com/document/d/1zVJ4GUfh4N-Ezdl66PiFHoqv7UHv4wtk/edit?usp=sharing&ouid=101878200014412345224&rtpof=true&sd=true]
              2. Tempat dan tanggal nya sesuai pas sidang
              3. Diprint
            `,
            icon: FileText,
            tag: "HKI",
          },
          {
            step: "HKI 2",
            date: "Bersamaan",
            title: "Surat Pengalihan HKI",
            summary: "Siapkan surat pengalihan dan materai 10.000",
            detail: `
              1. Surat Pengalihan Hak Cipta di download [di sini|https://docs.google.com/document/d/12cRgryxz03KnS2Qe-0LoG0RNF0rewTca/edit?usp=sharing&ouid=115695519442386225046&rtpof=true&sd=true]
              2. Tanggal nya sesuai pas ngajuin ke UPT Perpustakaan
              3. Alamat Lengkap Sesuai KTP disertai KODE POS
              4. 1 buah Materai 10.000
              5. Tanda tangan seluruh pencipta
              6. Diprint
              `,
            icon: FileText,
            tag: "HKI",
          },
          {
            step: "HKI 3",
            date: "Bersamaan",
            title: "Surat Pernyataan HKI",
            summary: "Siapkan surat pernyataan dan materai 10.000",
            detail: `
              1. Surat Pernyataan Hak Cipta di download [di sini|https://docs.google.com/document/d/1KnhFvWe2F9s8BfkNxT5WtDBIJt6hr4pL/edit?usp=sharing&ouid=101783989037308470541&rtpof=true&sd=true]
              2. Tanggal nya sesuai pas ngajuin ke UPT Perpustakaan
              3. 1 buah Materai 10.000
              4. Diprint
            `,
            icon: FileText,
            tag: "HKI",
          },
          {
            step: "HKI 4",
            date: "Bersamaan",
            title: "Dokumen Tanda Terima Berkas",
            summary: "Print Dokumen Tanda Terima Berkas.",
            detail: 'Download Dokumen Tanda Terima Berkas [di sini|https://drive.google.com/file/d/1PGyJPgilWtpv5KGlWKXnvML2puZTpkQb/view?usp=sharing] habis itu diisinya pas disana nanti 1 buat mereka satu buat kita',
            icon: FileText,
            tag: "HKI",
          },
          {
            step: "HKI 5",
            date: "Scan KTP",
            title: "Scan KTP",
            summary:
              "Scan KTP Semua Pencipta",
            detail: "Scan KTP semua pencipta digabung 1 lembar terus di print",
            icon: FileText,
            tag: "HKI",
          },
          {
            step: "HKI 6",
            date: "Setelah Semua Berkas HKI Lengkap",
            title: "Pengajuan HKI di UPT Perpustakaan",
            summary:
              "datang ke Gedung UPT Perpustakaan Lt 5",
            detail: `
              1. Setelah berkas lengkap kemudian di print
              2. Dateng ke Gedung UPT Perpustakaan Lt 5
              3. Membawa produk HKInya
              4. Jangan lupa bawa laptop 
              5. Kalau ada revisi, di revisi dulu (bisa di tempat kalo memungkinkan) kalau gak ada bisa lanjut
              6. Kalau udah acc bakal disuruh ngisi **Dokumen Tanda Terima Berkas**
              7. Dokumen Tanda Terima Berkasnya satu buat mereka satu buat kita
              8. Kalau sudah gak ada revisi sama sekali bisa ngisi form online [di sini|https://forms.gle/dYXYs3NXEyM4zNWs9]


              Informasi lengkap seputar HKI UNDIP bisa dicek [di sini|https://dirinovki.undip.ac.id/download/]
            `,
            icon: CheckCircle,
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
      step: "5",
      date: "Setelah Bebas Departemen",
      title: "Konfirmasi \"Lulus Studi\" di SSO",
      summary:
        "Konfirmasi ke Kaprodi agar status di SSO berubah menjadi \"Lulus Studi\".",
      detail:
        `Setelah Surat Bebas Departemen selesai, hubungi Pak Jatmiko/Kaprodi untuk mengkonfirmasi bahwa semua persyaratan telah dipenuhi. Kaprodi akan memperbarui status Anda di SSO menjadi \"Lulus Studi\". Status ini menjadi syarat utama untuk mendaftar wisuda.
        
        **Catatan: Biasanya otomatis tapi boleh banget buat follow up**
        `,
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
              "Kirim berkas termasuk Surat Bebas Departemen ke Bu Iin via WA, isi biodata, dan dapatkan SKL Departemen. Berkas yang dikirim",
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
            title: "Pengambilan dan Verifikasi SKL Fakultas",
            summary:
              "Pengambilan dan verifikasi SKL Fakultas setelah 3 hari kerja.",
            detail: `
              SKL Fakultas akan jadi dalam 3 hari kerja dan diambil di resepsionis lt. 1. Setelah jadi, SKL harus diverifikasi:

              1. Fotokopi SKL sebanyak 5 lembar
              2. Tempel foto 3x4 pada masing-masing lembar 
              3. Bawa ke UPA untuk dicap/stempel
              4. UPA akan meminta 1 lembar untuk arsip Fakultas
              5. Sisa 4 lembar untuk keperluan pribadi (lamaran kerja, dll).
            `,
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
