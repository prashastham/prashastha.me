export default function TagPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 bg-surface-container text-on-surface-variant font-label-caps text-label-caps rounded-full">
      {children}
    </span>
  );
}
