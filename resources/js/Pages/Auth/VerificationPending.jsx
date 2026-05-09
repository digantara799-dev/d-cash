import Guest from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function VerificationPending() {
    return (
        <Guest>
            <Head title="Menunggu Verifikasi" />

            <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Menunggu Verifikasi
                    </h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                        <div className="text-center">
                            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100">
                                <svg
                                    className="h-6 w-6 text-yellow-600"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>

                            <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">
                                Pendaftaran Anda sedang ditinjau
                            </h3>

                            <p className="mt-2 text-base text-gray-500">
                                Terima kasih telah mendaftar! Admin kami akan memverifikasi akun Anda dalam waktu singkat. 
                                Anda akan menerima notifikasi ketika akun Anda telah disetujui.
                            </p>

                            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                                <p className="text-sm text-blue-800">
                                    <strong>Tip:</strong> Jika Anda tidak menerima notifikasi dalam 24 jam, silakan hubungi admin.
                                </p>
                            </div>

                            <div className="mt-6">
                                <a
                                    href={route('login')}
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                    Kembali ke Login
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Guest>
    );
}