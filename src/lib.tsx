import { render as solidRender } from 'solid-js/web'
import { customElement, noShadowDOM } from 'solid-element'
import { type Actions, App } from './App.tsx'
import {
  DEFAULT_TRANSLATIONS,
  type Translations,
  TranslationsContext,
} from './context/Translations.tsx'
import type { Component } from 'solid-js'

export type Params = {
  translations?: Translations
  actions: Actions
}

export const render = (
  elementId: string,
  { translations, actions }: Params,
) => {
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

// deno-lint-ignore ban-types
export const WebComponent: Component<{}> = () => {
  noShadowDOM()
  return (
    <App
      actions={{
        current: () => 100,
        transferTo: () => {},
      }}
    />
  )
}

export const webComponent = () => {
  customElement('rwcn-wallet', {}, WebComponent)
}
