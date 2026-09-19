import { CallButton, MaxButton } from "./Cta";

export function StickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ink/90 p-3 backdrop-blur-md md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <CallButton className="rounded-full border border-sand/50 py-3 text-center text-xs tracking-[0.16em] text-sand uppercase" />
        <MaxButton className="rounded-full bg-sand py-3 text-center text-xs tracking-[0.16em] text-ink uppercase" />
      </div>
    </div>
  );
}
