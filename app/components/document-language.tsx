'use client';

import { useEffect } from 'react';
import type { Language } from '../content';

export default function DocumentLanguage({ language }: { language: Language }) {
  useEffect(() => { document.documentElement.lang = language; }, [language]);
  return null;
}
