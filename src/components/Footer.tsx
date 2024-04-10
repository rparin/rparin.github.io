import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-center text-text bg-primary py-3 md:py-3">
      <div className="flex flex-row text-center justify-center">
        <p className="text-sm">Built using React and Tailwind.</p>
        <a
          href="https://github.com/rparin/rparin.github.io"
          aria-label="Github for portfolio website"
          target="_blank"
          rel="noopener noreferrer">
          <ExternalLink className="max-w-[1.5vh] w-auto h-3/5" />
        </a>
      </div>
      <p className="text-sm">©️ 2024. Designed and Developed by Ralph Parin.</p>
    </footer>
  );
}
