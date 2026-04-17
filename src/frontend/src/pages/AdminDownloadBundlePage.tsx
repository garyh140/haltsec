export default function AdminDownloadBundlePage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-foreground">
            Site Bundle Download
          </h1>
          <p className="text-muted-foreground text-sm">
            Download the complete static bundle to host this site on any web
            server or ISP hosting account.
          </p>
        </div>

        <a
          href="/haltsec-static-bundle.zip"
          download="haltsec-static-bundle.zip"
          data-ocid="admin_download.primary_button"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download Site Bundle
        </a>

        <p className="text-xs text-muted-foreground">
          File: haltsec-static-bundle.zip — upload the contents to your hosting
          provider's <code className="font-mono">public_html</code> folder.
        </p>
      </div>
    </div>
  );
}
