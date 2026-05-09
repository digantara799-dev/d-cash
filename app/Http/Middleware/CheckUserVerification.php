<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckUserVerification
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (auth()->check()) {
            $user = auth()->user();

            // Jika user pending, logout dan redirect ke login dengan pesan
            if ($user->isPending()) {
                auth()->logout();
                $request->session()->invalidate();
                $request->session()->regenerateToken();

                return redirect()->route('login')->with('error', 'Akun Anda menunggu verifikasi dari admin. Silakan hubungi admin untuk persetujuan.');
            }

            // Jika user ditolak, logout dan redirect ke login dengan pesan
            if ($user->isRejected()) {
                auth()->logout();
                $request->session()->invalidate();
                $request->session()->regenerateToken();

                $message = 'Akun Anda ditolak';
                if ($user->rejection_reason) {
                    $message .= ': ' . $user->rejection_reason;
                }

                return redirect()->route('login')->with('error', $message);
            }
        }

        return $next($request);
    }
}