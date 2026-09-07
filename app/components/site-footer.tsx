import { MoveUpRight } from 'lucide-react';
import { copy, type Language } from '../content';

export default function SiteFooter({ language }: { language: Language }) {
  const t = copy[language];
  return (
    <footer className="site-footer section-wrap">
      <span>© {new Date().getFullYear()} Francisco Catalán</span>
      <span>{t.footerRole}</span>
      <a href="#top"><MoveUpRight size={13} aria-hidden="true" /> {t.backTop}</a>
    </footer>
  );
}
