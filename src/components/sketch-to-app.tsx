// Ilustracja w hero: odręczny szkic po lewej, gotowy ekran aplikacji po prawej.
export function SketchToApp() {
  return (
    <div aria-hidden className="relative mx-auto w-full max-w-xl select-none">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4">
        <div className="-rotate-2 rounded-xl border-2 border-dashed border-muted/50 bg-card/60 p-4 sm:p-5">
          <div className="h-2.5 w-1/2 rounded-sm bg-surface-border" />
          <div className="mt-3 h-2 w-4/5 rounded-sm bg-surface-border" />
          <div className="mt-2 h-2 w-3/5 rounded-sm bg-surface-border" />
          <div className="mt-5 grid grid-cols-3 gap-2">
            <div className="aspect-square rounded-md border-2 border-dashed border-muted/40" />
            <div className="aspect-square rounded-md border-2 border-dashed border-muted/40" />
            <div className="aspect-square rounded-md border-2 border-dashed border-muted/40" />
          </div>
          <div className="mt-5 h-7 w-2/5 rounded-full border-2 border-dashed border-muted/50" />
        </div>

        <svg viewBox="0 0 60 40" className="w-10 text-accent sm:w-14" fill="none">
          <path
            d="M3 24c10-14 28-16 46-6"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M41 10l9 8-11 4"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="rotate-1 rounded-xl border border-surface-border bg-card p-4 sm:p-5">
          <div className="h-2.5 w-1/2 rounded-sm bg-foreground" />
          <div className="mt-3 h-2 w-4/5 rounded-sm bg-surface-border" />
          <div className="mt-2 h-2 w-3/5 rounded-sm bg-surface-border" />
          <div className="mt-5 grid grid-cols-3 gap-2">
            <div className="aspect-square rounded-md bg-[#f1d9c9]" />
            <div className="aspect-square rounded-md bg-[#dfe5d3]" />
            <div className="aspect-square rounded-md bg-[#e9dcc2]" />
          </div>
          <div className="mt-5 h-7 w-2/5 rounded-full bg-accent" />
        </div>
      </div>

      <div className="mt-3 grid grid-cols-[1fr_auto_1fr] gap-2 font-hand text-xl text-accent sm:gap-4 sm:text-2xl">
        <span className="pl-2">Twój szkic</span>
        <span className="w-10 sm:w-14" />
        <span className="pl-2">gotowa aplikacja</span>
      </div>
    </div>
  );
}
