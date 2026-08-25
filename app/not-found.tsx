import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-navy px-6 text-center text-white">
      <p className="font-mono-brand text-teal">404</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight">Page not found.</h1>
      <p className="mt-4 max-w-md text-white/75">
        The page you&apos;re looking for doesn&apos;t exist. Head back to the Core AI Solutions site.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-md bg-teal px-5 py-3 text-sm font-bold text-navy hover:brightness-110"
      >
        Back home
      </Link>
    </main>
  );
}
