"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { type Locale, pick, type Localized } from "./i18n"

interface LangContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (text: Localized) => string
}

const LangContext = createContext<LangContextValue | null>(null)

const STORAGE_KEY = "lang"

function detectInitial(locale: Locale): Locale {
  if (locale === "es" || locale === "en") return locale
  // detect browser language
  if (typeof navigator !== "undefined") {
    const primary = navigator.language?.toLowerCase() ?? ""
    return primary.startsWith("es") ? "es" : "en"
  }
  return "en"
}

export function LanguageProvider({
  children,
  initialLocale,
}: {
  children: ReactNode
  initialLocale?: Locale
}) {
  const [locale, setLocaleState] = useState<Locale>(
    () => detectInitial(initialLocale as Locale) ?? "en"
  )

  // Sync <html lang> attribute
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {}
  }, [])

  const t = useCallback((text: Localized) => pick(locale, text), [locale])

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t]
  )

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext)
  if (!ctx) {
    throw new Error("useLang must be used within a LanguageProvider")
  }
  return ctx
}

export function useLocale(): Locale {
  return useLang().locale
}
