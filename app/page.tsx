import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-site-bg px-6 py-24 text-center">
      <span className="mb-6 inline-flex items-center rounded-full bg-brand-soft px-4 py-1.5 text-sm font-medium text-brand">
        Free AI prompt directory
      </span>
      <h1 className="max-w-3xl text-balance text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl">
        Find and copy the best{" "}
        <span className="text-brand">AI prompts</span>
      </h1>
      <p className="mt-6 max-w-xl text-balance text-lg text-muted-foreground">
        Curated prompts for Cursor, ChatGPT, Claude, Midjourney and more — built
        for developers and creators.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Button size="lg" className="bg-brand hover:bg-brand/90">
          Browse prompts
        </Button>
        <Button size="lg" variant="outline">
          Submit a prompt
        </Button>
      </div>
      <pre className="mt-12 rounded-lg bg-prompt-bg px-5 py-3 font-mono text-sm text-zinc-300">
        workprompts.in
      </pre>
    </main>
  );
}
