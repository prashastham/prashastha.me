export default function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-label-caps text-label-caps bg-primary-container/10 text-primary-container px-sm py-xs rounded-full uppercase tracking-widest">
      {children}
    </span>
  );
}
