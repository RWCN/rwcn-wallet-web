import { render as solidRender } from 'solid-js/web'
import { Actions, App } from './App'
import {
  DEFAULT_TRANSLATIONS,
  Translations,
  TranslationsContext,
} from './context/Translations'

export type Params = {
  translations?: Translations
  actions: Actions
}

export function render(elementId: string, { translations, actions }: Params) {
  const rootElement = document.getElementById(elementId)
  if (!rootElement) throw new Error(`Element with id ${elementId} not found`)

  const dispose: () => void = solidRender(
    () => (
      <TranslationsContext.Provider
        value={Object.assign({}, DEFAULT_TRANSLATIONS, translations)}
      >
        <App actions={actions} />
      </TranslationsContext.Provider>
    ),
    rootElement,
  )

  return dispose
}
