import { Head, usePage, useForm, router } from '@inertiajs/react'
import { useState } from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

export default function UserVerification() {
    const { pendingUsers, verifiedUsers, rejectedUsers } = usePage().props
    const { post, processing, reset } = useForm({
        rejection_reason: '',
    })
    const [showRejectModal, setShowRejectModal] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null)
    const [rejectReason, setRejectReason] = useState('')

    const handleApprove = (userId) => {
        if (window.confirm('Apakah Anda yakin ingin memverifikasi user ini?')) {
            router.post(`/dashboard/users/${userId}/approve`, {}, {
                onSuccess: () => {
                    alert('User berhasil diverifikasi')
                },
            })
        }
    }

    const handleRejectClick = (user) => {
        setSelectedUser(user)
        setRejectReason('')
        setShowRejectModal(true)
    }

    const handleRejectSubmit = (e) => {
        e.preventDefault()
        if (!rejectReason.trim()) {
            alert('Alasan penolakan harus diisi')
            return
        }
        
        router.post(`/dashboard/users/${selectedUser.id}/reject`, {
            rejection_reason: rejectReason,
        }, {
            onSuccess: () => {
                setShowRejectModal(false)
                setSelectedUser(null)
                setRejectReason('')
                alert('User berhasil ditolak')
            },
        })
    }

    const handleReopen = (userId) => {
        if (window.confirm('Apakah Anda yakin ingin membuka ulang verifikasi user ini?')) {
            router.post(`/dashboard/users/${userId}/reopen`, {}, {
                onSuccess: () => {
                    alert('Verifikasi dibuka ulang')
                },
            })
        }
    }

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        })
    }

    return (
        <AuthenticatedLayout>
            <Head title="Verifikasi Pengguna" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* Pending Users */}
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-6">
                        <div className="p-6 border-b border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-900">
                                Pengguna Menunggu Verifikasi
                            </h2>
                            <p className="text-sm text-gray-500 mt-1">
                                Total: {pendingUsers.data?.length || 0} pengguna
                            </p>
                        </div>

                        {pendingUsers.data && pendingUsers.data.length > 0 ? (
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-gray-50 border-b border-gray-200">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Nama
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Email
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Tanggal Daftar
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Aksi
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {pendingUsers.data.map((user) => (
                                            <tr key={user.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900">
                                                                {user.name}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-500">
                                                        {user.email}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {formatDate(user.created_at)}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                    <button
                                                        onClick={() => handleApprove(user.id)}
                                                        className="bg-green-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600 mr-2"
                                                    >
                                                        Verifikasi
                                                    </button>
                                                    <button
                                                        onClick={() => handleRejectClick(user)}
                                                        className="bg-red-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-red-600"
                                                    >
                                                        Tolak
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="p-6 text-center text-gray-500">
                                Tidak ada pengguna yang menunggu verifikasi
                            </div>
                        )}
                    </div>

                    {/* Verified Users */}
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-6">
                        <div className="p-6 border-b border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-900">
                                Pengguna Terverifikasi
                            </h2>
                            <p className="text-sm text-gray-500 mt-1">
                                Total: {verifiedUsers?.length || 0} pengguna (menampilkan 5 terbaru)
                            </p>
                        </div>

                        {verifiedUsers && verifiedUsers.length > 0 ? (
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-gray-50 border-b border-gray-200">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Nama
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Email
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Tanggal Verifikasi
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {verifiedUsers.map((user) => (
                                            <tr key={user.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm font-medium text-gray-900">
                                                        {user.name}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-500">
                                                        {user.email}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {formatDate(user.verified_at)}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="p-6 text-center text-gray-500">
                                Belum ada pengguna terverifikasi
                            </div>
                        )}
                    </div>

                    {/* Rejected Users */}
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 border-b border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-900">
                                Pengguna Ditolak
                            </h2>
                            <p className="text-sm text-gray-500 mt-1">
                                Total: {rejectedUsers?.length || 0} pengguna (menampilkan 5 terbaru)
                            </p>
                        </div>

                        {rejectedUsers && rejectedUsers.length > 0 ? (
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-gray-50 border-b border-gray-200">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Nama
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Email
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Alasan Penolakan
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Aksi
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {rejectedUsers.map((user) => (
                                            <tr key={user.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm font-medium text-gray-900">
                                                        {user.name}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-500">
                                                        {user.email}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-500">
                                                        {user.rejection_reason || '-'}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                    <button
                                                        onClick={() => handleReopen(user.id)}
                                                        className="bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600"
                                                    >
                                                        Buka Ulang
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="p-6 text-center text-gray-500">
                                Tidak ada pengguna yang ditolak
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Reject Modal */}
            {showRejectModal && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">
                            Tolak Pendaftaran User
                        </h3>
                        <p className="text-sm text-gray-500 mb-4">
                            Anda akan menolak pendaftaran <strong>{selectedUser?.name}</strong>
                        </p>

                        <form onSubmit={handleRejectSubmit}>
                            <textarea
                                value={rejectReason}
                                onChange={(e) => setRejectReason(e.target.value)}
                                placeholder="Alasan penolakan..."
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mb-4"
                                rows="4"
                                required
                            />

                            <div className="flex gap-3 justify-end">
                                <button
                                    type="button"
                                    onClick={() => setShowRejectModal(false)}
                                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-red-500 text-white rounded-md text-sm font-medium hover:bg-red-600"
                                >
                                    Tolak
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    )
}