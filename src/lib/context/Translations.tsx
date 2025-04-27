import { createContext, useContext } from 'solid-js'

export type Translations = Partial<typeof DEFAULT_TRANSLATIONS>

export const DEFAULT_TRANSLATIONS = {
  'rwcn-wallet.title': 'rwcn-wallet.title',
  'rwcn-wallet.confirm': 'rwcn-wallet.confirm',
  'rwcn-wallet.transfer': 'rwcn-wallet.transfer',
  'rwcn-wallet.balance': 'rwcn-wallet.balance',
  'rwcn-wallet.receiver': 'rwcn-wallet.receiver',
  'rwcn-wallet.money': 'rwcn-wallet.money',
}

export const TranslationsContext = createContext(DEFAULT_TRANSLATIONS)

export const useTranslations = () => {
  const translations = useContext(TranslationsContext)

  return translations
}
