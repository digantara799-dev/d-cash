import { Head, Link } from "@inertiajs/react";
import {
    IconShoppingCart,
    IconReceipt,
    IconUsers,
    IconChartBar,
    IconBox,
    IconBrandGithub,
    IconArrowRight,
    IconCheck,
    IconDeviceMobile,
    IconCloudLock,
    IconReportMoney,
    IconCreditCard,
    IconShieldCheck,
    IconTrendingUp,
} from "@tabler/icons-react";

export default function Welcome() {
    const features = [
        {
            icon: IconShoppingCart,
            title: "Transaksi Cepat",
            desc: "Proses jual beli dalam hitungan detik dengan interface yang intuitif",
        },
        {
            icon: IconReceipt,
            title: "Cetak Struk",
            desc: "Print thermal 58mm, 80mm, invoice, dan shipping label",
        },
        {
            icon: IconUsers,
            title: "Manajemen Pelanggan",
            desc: "Kelola data pelanggan, riwayat transaksi, dan loyalitas",
        },
        {
            icon: IconBox,
            title: "Inventori Produk",
            desc: "Stok, kategori, barcode scanner, dan tracking otomatis",
        },
        {
            icon: IconChartBar,
            title: "Laporan Lengkap",
            desc: "Penjualan, keuntungan, grafik, dan analisis bisnis real-time",
        },
        {
            icon: IconReportMoney,
            title: "Multi Payment",
            desc: "Tunai, QRIS, Midtrans, transfer bank, dan e-wallet",
        },
    ];

    const benefits = [
        {
            icon: IconShieldCheck,
            title: "Aman & Terpercaya",
            desc: "Data terenkripsi dan backup otomatis setiap hari",
        },
        {
            icon: IconCloudLock,
            title: "Cloud-Based",
            desc: "Akses dari mana saja, kapan saja, di perangkat apa saja",
        },
        {
            icon: IconTrendingUp,
            title: "Skalabel",
            desc: "Mulai dari 1 kasir hingga ratusan outlet cabang",
        },
    ];

    const pricing = [
        {
            name: "Starter",
            price: "Rp 0",
            period: "/bulan",
            description: "Untuk UMKM baru",
            features: [
                "1 Kasir",
                "100 Produk",
                "Laporan Dasar",
                "Support Email",
            ],
            cta: "Mulai Gratis",
            highlighted: false,
        },
        {
            name: "Professional",
            price: "Rp 99.000",
            period: "/bulan",
            description: "Untuk toko berkembang",
            features: [
                "Unlimited Kasir",
                "Unlimited Produk",
                "Laporan Lengkap",
                "QRIS & Midtrans",
                "Support 24/7",
            ],
            cta: "Upgrade Sekarang",
            highlighted: true,
        },
        {
            name: "Enterprise",
            price: "Custom",
            period: "",
            description: "Untuk multi-outlet",
            features: [
                "Semua fitur Pro",
                "Custom Development",
                "Integrasi API",
                "Dedicated Account Manager",
                "Training Team",
            ],
            cta: "Hubungi Sales",
            highlighted: false,
        },
    ];

    const testimonials = [
        {
            name: "Budi Santoso",
            role: "Pemilik Warung Makan",
            text: "Aplikasi ini sangat membantu bisnis saya. Pembukuan jadi lebih mudah dan cepat.",
            rating: 5,
        },
        {
            name: "Siti Nurhaliza",
            role: "Manajer Toko Fashion",
            text: "Fitur multi-outlet sangat berguna untuk mengelola cabang saya. Sangat recommend!",
            rating: 5,
        },
        {
            name: "Ahmad Wijaya",
            role: "Pemilik Apotek",
            text: "Integrasi dengan QRIS membuat pelanggan lebih mudah membayar. Top banget!",
            rating: 5,
        },
    ];

    const techStack = [
        { name: "Laravel 12", color: "bg-red-500" },
        { name: "Inertia.js", color: "bg-purple-500" },
        { name: "React", color: "bg-cyan-500" },
        { name: "TailwindCSS", color: "bg-sky-500" },
        { name: "MySQL", color: "bg-orange-500" },
    ];

    return (
        <>
            <Head title="D-Cash - Point of Sale Modern Indonesia" />

            <div className="min-h-screen bg-white dark:bg-slate-950">
                {/* Navbar */}
                <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-gray-100 dark:border-slate-800 shadow-sm">
                    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-white shadow flex items-center justify-center">
                                <img 
                                    src="/faviconD.png" 
                                    alt="Logo"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="text-xl font-bold text-gray-900 dark:text-white">
                                D-Cash by Digantara
                            </span>
                        </div>

                        <div className="hidden md:flex items-center gap-8">
                            <a
                                href="#features"
                                className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                            >
                                Fitur
                            </a>
                            <a
                                href="#pricing"
                                className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                            >
                                Harga
                            </a>
                            <a
                                href="#testimonials"
                                className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                            >
                                Testimoni
                            </a>
                        </div>

                        <div className="flex items-center gap-3">
                            <Link
                                href="/login"
                                className="px-5 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
                            >
                                Masuk
                            </Link>
                            <Link
                                href="/register"
                                className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all"
                            >
                                Daftar
                            </Link>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-950">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center max-w-4xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
                                <IconDeviceMobile size={16} />
                                Platform POS Terbaik untuk Indonesia
                            </div>

                            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight">
                                Kasir Digital
                                <span className="block mt-2 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                                    Untuk Bisnis Modern
                                </span>
                            </h1>

                            <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                                Kelola toko Anda dengan mudah. Transaksi cepat, laporan real-time, dan integrasi pembayaran modern dalam satu aplikasi.
                            </p>

                            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href="/register"
                                    className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                                >
                                    Bergabung Sekarang
                                    <IconArrowRight size={20} />
                                </Link>
                                
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="mt-20 relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-950 to-transparent z-10 pointer-events-none h-32 bottom-0 top-auto" />
                            <div className="rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-900">
                                <div className="bg-gray-100 dark:bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-gray-200 dark:border-slate-700">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                        <div className="w-3 h-3 rounded-full bg-green-400" />
                                    </div>
                                    <div className="flex-1 text-center text-xs text-gray-500 dark:text-gray-400 font-mono">
                                        app.digantara.id
                                    </div>
                                </div>
                                <img
                                    src="/AFTER.png"
                                    alt="D-Cash POS Dashboard"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-20 px-6 bg-white dark:bg-slate-900">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                                Mengapa Memilih D-Cash?
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {benefits.map((benefit, i) => (
                                <div
                                    key={i}
                                    className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900 border border-gray-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center mb-6">
                                        <benefit.icon size={28} className="text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {benefit.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section
                    id="features"
                    className="py-20 px-6 bg-gray-50 dark:bg-slate-950"
                >
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                                Fitur Lengkap & Powerful
                            </h2>
                            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Semua yang Anda butuhkan untuk menjalankan bisnis retail modern ada di D-Cash
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((feature, i) => (
                                <div
                                    key={i}
                                    className="group p-8 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-800 hover:shadow-lg transition-all"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <feature.icon
                                            size={28}
                                            className="text-white"
                                        />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {feature.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section
                    id="pricing"
                    className="py-20 px-6 bg-white dark:bg-slate-900"
                >
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                                Harga Terjangkau
                            </h2>
                            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Pilih paket yang sesuai dengan kebutuhan bisnis Anda
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {pricing.map((plan, i) => (
                                <div
                                    key={i}
                                    className={`rounded-2xl overflow-hidden transition-all ${
                                        plan.highlighted
                                            ? "md:scale-105 shadow-2xl border-2 border-blue-600 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-slate-900"
                                            : "border-2 border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900"
                                    }`}
                                >
                                    {plan.highlighted && (
                                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-center">
                                            <span className="text-white font-semibold text-sm">Paling Populer</span>
                                        </div>
                                    )}

                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                            {plan.name}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                            {plan.description}
                                        </p>

                                        <div className="mt-6">
                                            <span className="text-4xl font-bold text-gray-900 dark:text-white">
                                                {plan.price}
                                            </span>
                                            <span className="text-gray-600 dark:text-gray-400 ml-2">
                                                {plan.period}
                                            </span>
                                        </div>

                                        <ul className="mt-8 space-y-4">
                                            {plan.features.map((feature, j) => (
                                                <li key={j} className="flex items-start gap-3">
                                                    <IconCheck size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700 dark:text-gray-300">
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>

                                        <button
                                            className={`w-full mt-8 py-3 rounded-lg font-semibold transition-all ${
                                                plan.highlighted
                                                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg"
                                                    : "bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-700"
                                            }`}
                                        >
                                            {plan.cta}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section
                    id="testimonials"
                    className="py-20 px-6 bg-gray-50 dark:bg-slate-950"
                >
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                                Dipercaya oleh Ribuan Bisnis
                            </h2>
                            <p className="mt-4 text-gray-600 dark:text-gray-400">
                                Dengarkan dari pengguna D-Cash yang puas
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, i) => (
                                <div
                                    key={i}
                                    className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800"
                                >
                                    <div className="flex gap-1 mb-4">
                                        {Array.from({ length: testimonial.rating }).map((_, j) => (
                                            <span key={j} className="text-yellow-400 text-lg">★</span>
                                        ))}
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                                        "{testimonial.text}"
                                    </p>
                                    <div>
                                        <p className="font-semibold text-gray-900 dark:text-white">
                                            {testimonial.name}
                                        </p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            

                {/* CTA Section */}
                <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-700">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Siap Mengembangkan Bisnis Anda?
                        </h2>
                        <p className="text-lg text-blue-100 mb-8">
                            Bergabunglah dengan ribuan pemilik toko yang telah merasakan transformasi digital
                        </p>
                        <Link
                            href="/register"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
                        >
                            Bergabung
                            <IconArrowRight size={20} />
                        </Link>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-12 px-6 bg-gray-900 text-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-4 gap-8 pb-8 border-b border-gray-800">
                            <div>
                                <h3 className="font-semibold mb-4">Tentang D-Cash</h3>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li><a href="#" className="hover:text-white">Tentang Kami</a></li>
                                    <li><a href="#" className="hover:text-white">Blog</a></li>
                                    <li><a href="#" className="hover:text-white">Karir</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-4">Produk</h3>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li><a href="#" className="hover:text-white">Fitur</a></li>
                                    <li><a href="#" className="hover:text-white">Harga</a></li>
                                    <li><a href="#" className="hover:text-white">Keamanan</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-4">Dukungan</h3>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li><a href="#" className="hover:text-white">Bantuan</a></li>
                                    <li><a href="#" className="hover:text-white">FAQ</a></li>
                                    <li><a href="#" className="hover:text-white">Kontak</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-4">Legal</h3>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li><a href="#" className="hover:text-white">Privasi</a></li>
                                    <li><a href="#" className="hover:text-white">Syarat</a></li>
                                    <li><a href="#" className="hover:text-white">Lisensi</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-white shadow flex items-center justify-center">
                                    <img 
                                    src="/faviconD.png" 
                                    alt="Logo"
                                    className="w-full h-full object-cover"
                                />
                                </div>
                                <span className="font-semibold">D-Cash by Digantara</span>
                            </div>
                            <p className="text-sm text-gray-400">
                                © {new Date().getFullYear()} PT. DIGITAL NUSANTARA MAHAJAYA. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}