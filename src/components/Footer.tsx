import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary py-3 text-center text-text md:py-3">
      <div className="flex flex-row justify-center text-center">
        <p className="text-sm">Built using React and Tailwind.</p>
        <a
          title="Portfolio website source code"
          href="https://github.com/rparin/rparin.github.io"
          aria-label="Github for portfolio website"
          target="_blank"
          rel="noopener noreferrer">
          <ExternalLink className="h-3/5 w-auto max-w-[1.5vh]" />
        </a>
      </div>
      <p className="text-sm">©️ 2024. Designed and Developed by Ralph Parin.</p>
    </footer>
  );
}
