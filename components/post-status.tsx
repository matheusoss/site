export function PostStatus({ status }: { status: string }) {
  return (
    <div className="border rounded-full font-mono px-3 py-1.5 inline-block text-[11px] mb-4 text-muted-foreground">
      {status}
    </div>
  )
}
