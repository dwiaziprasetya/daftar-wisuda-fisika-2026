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
        "Revisi skripsi + ngumpulin tanda tangan penguji dan pembimbing",
      detail: `
        Abis sidang, langsung cetak lembar pengesahan, terus lanjut revisi sambil ngumpulin tanda tangan dari 3 dosen penguji dan 2 dosen pembimbing. Biasanya kalau udah sampai ke pembimbing 1, nilai bakal langsung diinput dan bisa dicek di SSO.

        **Catatan:**

        **1. Cetak lembar pengesahan 3 lembar.**
        **2. Lembar pengesahan nanti disatuin di skripsi yang udah dijilid hardcover.**
        **3. Tanda tangan Kaprodi baru bisa setelah skripsi dijilid, lewat Bu Iin.**
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
        "Jilid skripsi jadi hardcopy (cover abu-abu)",
      detail: `
        Kalau revisi udah kelar dan nilai udah keluar, lanjut jilid skripsi pakai cover abu-abu. Jumlahnya fleksibel ya, tergantung kebutuhan. Setelah dijilid, skripsi diserahin ke Bu Iin buat proses tanda tangan Kaprodi.

        1. Perpustakaan FSM (wajib)
        2. Dosen Pembimbing 1 (kondisional)
        3. Dosen Pembimbing 2 (kondisional)

        **Catatan: Ada beberapa dosen pembimbing yang gak minta hardcopy, cukup softfile aja. Jadi mending konfirmasi dulu ke masing-masing dosen. Tapi kalau Perpustakaan FSM tetap wajib hardcopy ya.**

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
        "Cap UPA ke semua hardcopy yang udah lengkap ttd",
      detail: `
        Kalau semua skripsi udah dijilid dan tanda tangan lengkap, ambil lagi dari Bu Iin terus langsung bawa ke UPA buat dicap/stempel resmi.

        **Catatan: Kalau udah dicap semua, skripsinya bisa langsung diserahin ke:**
        **1. Perpustakaan FSM (buat urus bebas pustaka)**
        **2. Dosen Pembimbing 1 dan 2 (syarat surat bebas departemen)**
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
    label: "Bisa barengan — HKI bisa diurus sambil jalanin proses kelulusan",
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
              "Ngurus surat bebas pustaka di Perpustakaan FSM",
            detail: `
            Sebelum nyerahin 1 jilid hardcopy skripsi ke perpus, wajib banget ngikutin dulu prosedur bebas pustaka FSM lihat [di sini|https://www.instagram.com/p/C1qf3ZmSYpI/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==].

            Kalau semua prosedur udah beres, tinggal dateng ke Perpustakaan FSM, bilang ke petugas kalau semuanya udah selesai, terus serahin 1 jilid hardcopy skripsi.

            Nunggu bentar, nanti namamu dipanggil dan bakal dapet **Surat Bebas Pustaka Perpustakaan FSM**.
          `,
            icon: FileText,
            tag: "Wajib",
          },
          {
            step: "4B",
            date: "Proses Bertahap",
            title: "Surat Bebas Departemen",
            summary:
              "Ngumpulin ttd dosbim, Pak Jatmiko, Bu Iin, sampai Kaprodi",
            detail:
              `
              1. Minta tanda tangan ke Dosen Pembimbing 1 & 2, sekalian serahin hardcopy skripsi kalau diminta.
              2. Kirim beberapa berkas ke email skripsi@fisika.fsm.undip.ac.id (format .rar/.zip), terus konfirmasi ke Pak Jatmiko buat proses ttd. Berkasnya:
                 a. Biodata Alumni **PDF**
                 b. Proposal Skripsi (sudah ditandatangani) **WORD & PDF**
                 c. Skripsi (sudah ditandatangani) **WORD & PDF**
                 d. Lembar Pengesahan (sudah ditandatangani) **PDF**
                 e. Karya Ilmiah (YPJ) **PDF**
                 f. Surat Bebas Perpustakaan FSM **PDF**
                 g. Surat Bebas Perpustakaan Undip **PDF**
                 h. Presentasi Sidang Skripsi **PPTX**
              3. Minta tanda tangan Bu Iin, sambil nunjukin hardcopy sertifikat TOEFL.
              4. Terakhir, minta tanda tangan Kaprodi.

              **Catatan: Semua proses bisa dikerjain paralel ya, kecuali ttd Kaprodi itu di akhir.**
            `,
            icon: FileText,
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
            date: "Barengan Semua",
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
            date: "Barengan Semua",
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
            date: "Barengan Semua",
            title: "Dokumen Tanda Terima Berkas",
            summary: "Print Dokumen Tanda Terima Berkas.",
            detail: 'Download Dokumen Tanda Terima Berkas [di sini|https://drive.google.com/file/d/1PGyJPgilWtpv5KGlWKXnvML2puZTpkQb/view?usp=sharing] habis itu diisinya pas disana nanti 1 buat mereka satu buat kita',
            icon: FileText,
            tag: "HKI",
          },
          {
            step: "HKI 5",
            date: "Barengan Semua",
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
        "Konfirmasi ke Kaprodi biar status SSO jadi \"Lulus Studi\"",
      detail:
        `Kalau Surat Bebas Departemen udah beres, langsung konfirmasi ke Pak Jatmiko/Kaprodi kalau semua syarat udah terpenuhi. Nanti status di SSO bakal diupdate jadi "Lulus Studi". Nah, ini penting banget karena jadi syarat utama buat daftar wisuda.

        **Catatan: Biasanya sih otomatis ke update, tapi gak ada salahnya buat follow up biar aman.**
        `,
      icon: UserCheck,
      tag: "Checkpoint Dulu Ges Di sini",
    },
  },

  /* ═══════════════════════════════════════════
     PARALLEL 2 — Kelulusan (SKL) + Daftar Wisuda
     Setelah "Lulus Studi" & HKI selesai → wisuda bisa dimulai
     ═══════════════════════════════════════════ */
  {
    type: "parallel",
    label: "Bisa barengan — Daftar wisuda bisa sekalian pas proses SKL",
    groups: [
      {
        id: "kelulusan-akhir",
        label: "Kelulusan (Tahap Akhir)",
        color: "sky",
        side: "left",
        items: [
          {
            step: "4A",
            date: 'Setelah Lulus Studi di SSO',
            title: "SKL Departemen",
            summary:
              "Kirim berkas ke Bu Iin via WA japri",
            detail: `
              Kirim semua berkas (softfile) ke Bu Iin lewat WA japri. Berkas yang perlu dikirim:
              1. Pas foto berwarna
              2. DPA
              3. Scan KTP
              4. Surat Keterangan Bebas Lab
              5. Surat Keterangan Bebas Departemen
              6. Validasi SKPI
              7. SKPI
              8. Sertifikat SKPI
              9. Sertifikat TOEFL
              10. Screenshot bukti kelulusan di SSO
              11. Bukti pendaftaran HKI

              Setelah kirim lewat WA, biasanya bakal diminta isi data diri juga. Tinggal isi aja sesuai arahan.

              Nunggu bentar di departemen, nanti bakal dapet hard file:
              1. SKL Departemen
              2. Surat Permohonan SKL Fakultas 
            `,
            icon: FileText,
            tag: "Wajib",
          },
          {
            step: "4B",
            date: "Langkah Terakhir",
            title: "SKL Fakultas",
            summary:
              "Serahin dokumen ke AP Lantai 2",
            detail: `
              Datang ke Gedung AP Lantai 2 (bagian resepsionis), terus serahin dokumen berikut:
                1. Fotokopi Kartu Mahasiswa (KTM)
                2. Pas foto hitam putih/berwarna ukuran 4x6 (2 lembar)
                3. Fotokopi Surat Bebas Departemen
                4. Fotokopi SKL Departemen
                5. Bukti pendaftaran HKI

              Setelah itu tinggal ditinggal aja, biasanya diproses sekitar 3 hari kerja.
            `,
            icon: FileText,
            tag: "Wajib",
          },
          {
            step: "4C",
            date: "3 Hari Kerja",
            title: "Ambil & Verifikasi SKL Fakultas",
            summary:
              "Ambil SKL Fakultas setelah 3 hari, lanjut verifikasi",
            detail: `
              SKL Fakultas biasanya jadi sekitar 3 hari kerja dan bisa diambil di resepsionis lantai 1. Setelah itu, jangan lupa langsung diverifikasi ya:

              1. Fotokopi SKL sebanyak 5 lembar
              2. Tempel foto 3x4 di tiap lembar
              3. Bawa ke UPA buat dicap/stempel
              4. Dari UPA, 1 lembar bakal diambil buat arsip Fakultas
              5. Sisa 4 lembar bisa dipakai buat keperluan pribadi (lamaran kerja, dll)

              Udah beres ini, fix tinggal nunggu wisuda doang sih wkwk
            `,
            icon: Mail,
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
            title: "Formulir Persyaratan Wisuda (AK.009)",
            summary:
              "Print dan isi formulir persyaratan wisuda",
            detail:
              `Kalau status di SSO udah berubah jadi **Lulus Studi** dan menu wisuda udah muncul, udah bisa mulai daftar wisuda.

              Download dan isi formulir AK.009, AK.010, dan AK.011  [di sini|https://docs.google.com/document/d/1zIuXdItUWypUqtWolku8irr3BE-3GlS8/edit?usp=drivesdk&ouid=117230210256870949382&rtpof=true&sd=true].
              `,
            icon: FileText,
            tag: "Wisuda",
          },
          {
            step: "W2",
            date: "Setelah Lulus Studi di SSO",
            title: "Fotokopi KTP",
            summary: "Fotokopi KTP sebanyak 2 lembar",
            detail:
              "Fotokopi KTP 2 lembar, jangan lupa diperbesar biar jelas",
            icon: FileText,
            tag: "Wisuda",
          },
          {
            step: "W3",
            date: "Setelah Lulus Studi di SSO",
            title: "Formulir Keterangan Pribadi (AK.010)",
            summary:
              "Print dan isi formulir keterangan pribadi",
            detail: `
              1. Print formulir sebanyak 2 lembar
              2. Isi dengan cara diketik (jangan tulis tangan)
              3. Tempel pas foto 4x6 hitam putih (2 buah)
            `,
            icon: FileText,
            tag: "Wisuda",
          },
          {
            step: "W4",
            date: "Setelah Lulus Studi di SSO",
            title: "Formulir Isian Biodata Ijazah (AK.011)",
            summary:
              "Print dan isi formulir biodata ijazah",
            detail: `
              1. Print formulir sebanyak 2 lembar
              2. Isi dengan cara diketik
            `,
            icon: FileText,
            tag: "Wisuda",
          },
          {
            step: "W5",
            date: "Setelah Lulus Studi di SSO",
            title: "Surat Ijin Cuti Kuliah (Opsional)",
            summary:
              "Lampirkan surat ijin cuti kalau pernah cuti kuliah",
            detail: "Lampirkan surat ijin cuti kuliah (kalau pernah cuti)",
            icon: FileText,
            tag: "Opsional",
          },
          {
            step: "W6",
            date: "Setelah Lulus Studi di SSO",
            title: "SKPI (Surat Keterangan Pendamping Ijazah)",
            summary:
              "Siapkan SKPI, validasi, dan bukti dari SSO",
            detail:
              `Siapkan 3 dokumen terkait SKPI:
              1. SKPI asli
              2. Validasi SKPI (sudah ttd Doswal & Kaprodi)
              3. Bukti isi SKPI di SSO (diprint)
              4. Sertifikat SKPI yang sesuai sama SSO (diprint)`,
            icon: FileText,
            tag: "Wisuda",
          },
          {
            step: "W7",
            date: "Setelah Dapet Nomor Urut HKI",
            title: "Bukti Pendaftaran HKI",
            summary:
              "Lampirkan bukti pendaftaran HKI.",
            detail: `
              Melampirkan bukti pendaftaran HKI (berupa nomor urut)

              **Catatan : Bisa make foto copy atau di scan dulu (soalnya ini dipake buat syarat SKL Fakultas juga)**
            `,
            icon: FileText,
            tag: "Wisuda",
          },
          {
            step: "W8",
            date: "Setelah Semua Berkas Wisuda Lengkap",
            title: "Pendaftaran Wisuda di AP Lantai 1",
            summary:
              "Datang ke Gedung AP Lantai 1",
            detail: `
              1. Siapin semua berkasnya di klip atau sekalian di mapin boleh
              2. Datang ke Gedung AP Lantai 1 bagian Kemahasiswaan
              3. Bilang ke Ibu Sri mau daftar wisuda
              4. Terus kasih berkasnya ke beliau
              5. Ditinggal beberapa jam
              6. Balik lagi ke sana buat ngecek
              7. Kalo ada revisi di revisi dulu
              8. Kalo lolos alhamduliah
              9. Tinggal nulis di buku kuning data diri kita
              10. Udah tinggal nunggu di invite ke grup wisuda
              11. Done, tinggal tidur aja wkwk
            `,
            icon: CheckCircle,
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
      date: "Sudah Selesai Guys",
      title: "Yaudah Nunggu Wisuda Aja WKWK",
      summary:
        "Muladi Dome bersiaplah 🙏",
      detail: "Kalo udah masuk grup WA Wisuda aman ges",
      icon: CheckCircle,
      tag: "Done ✅",
    },
  },
];
