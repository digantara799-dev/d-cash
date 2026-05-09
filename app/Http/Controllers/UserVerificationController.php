<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserVerificationController extends Controller
{
    /**
     * Display list of pending users for verification
     */
    public function index()
    {
        $pendingUsers = User::where('verification_status', 'pending')
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        $verifiedUsers = User::where('verification_status', 'verified')
            ->orderBy('verified_at', 'desc')
            ->limit(5)
            ->get();

        $rejectedUsers = User::where('verification_status', 'rejected')
            ->orderBy('updated_at', 'desc')
            ->limit(5)
            ->get();

        return Inertia::render('Admin/UserVerification', [
            'pendingUsers' => $pendingUsers,
            'verifiedUsers' => $verifiedUsers,
            'rejectedUsers' => $rejectedUsers,
        ]);
    }

    /**
     * Approve user verification
     */
    public function approve(Request $request, User $user)
    {
        $this->authorize('update', $user);

        if ($user->verification_status !== 'pending') {
            return redirect()->back()->with('error', 'User ini bukan dalam status pending');
        }

        $user->update([
            'verification_status' => 'verified',
            'verified_at' => now(),
            'rejection_reason' => null,
        ]);

        return redirect()->back()->with('success', 'User ' . $user->name . ' berhasil diverifikasi');
    }

    /**
     * Reject user verification
     */
    public function reject(Request $request, User $user)
    {
        $this->authorize('update', $user);

        $validated = $request->validate([
            'rejection_reason' => 'required|string|max:500',
        ]);

        if ($user->verification_status !== 'pending') {
            return redirect()->back()->with('error', 'User ini bukan dalam status pending');
        }

        $user->update([
            'verification_status' => 'rejected',
            'rejection_reason' => $validated['rejection_reason'],
        ]);

        return redirect()->back()->with('success', 'User ' . $user->name . ' ditolak');
    }

    /**
     * Reopen verification for rejected user
     */
    public function reopen(Request $request, User $user)
    {
        $this->authorize('update', $user);

        if ($user->verification_status !== 'rejected') {
            return redirect()->back()->with('error', 'Hanya user yang ditolak yang dapat dibuka ulang');
        }

        $user->update([
            'verification_status' => 'pending',
            'rejection_reason' => null,
        ]);

        return redirect()->back()->with('success', 'Verifikasi user ' . $user->name . ' dibuka kembali');
    }
}