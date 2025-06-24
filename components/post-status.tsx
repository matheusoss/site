export function PostStatus({ status }: { status: string }) {
  return (
    <div className="mb-4 rounded-full border px-3 py-1.5 font-mono text-[11px] text-muted-foreground">
      {status}
    </div>
  );
}
