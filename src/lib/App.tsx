import { Component, createResource, createSignal } from 'solid-js'
import { useTranslations } from './context/Translations'
import css from './App.css?inline'
import type {} from 'solid-styled-jsx'

export type Actions = {
  current: () => number | Promise<number>
  transferTo: (user: string, count: number) => void | Promise<void>
}

export type Props = {
  actions: Actions
}

export const App: Component<Props> = props => {
  const translations = useTranslations()
  const [current] = createResource(
    async () => {
      const cur = props.actions.current()
      if (cur instanceof Promise) {
        return await cur
      } else {
        return cur
      }
    },
    {
      initialValue: 0,
    },
  )
  const [transferMoney, setTransferMoney] = createSignal(0)
  const [transferReceiver, setTransferReceiver] = createSignal('')

  return (
    <>
      <style jsx>{css}</style>
      <div class='rwcn-wallet'>
        <h1>{translations['rwcn-wallet.title']}</h1>
        <div class='balance'>
          <h2>{translations['rwcn-wallet.balance']}</h2>
          <h1>{current()}</h1>
        </div>
        <div class='transfer'>
          <h2>{translations['rwcn-wallet.transfer']}</h2>
          <div class='input-group'>
            <label class='input-label' for='amount'>
              <h3>{translations['rwcn-wallet.money']}</h3>
            </label>
            <input
              type='number'
              id='amount'
              placeholder='0'
              step={1}
              value={transferMoney()}
              onInput={ev => {
                const value = ev.target.value
                if (value.includes('.')) {
                  ev.target.value = value.split('.').join()
                }
                setTransferMoney(Number.parseInt(ev.target.value))
              }}
            />
          </div>
          <div class='input-group'>
            <label class='input-label' for='amount'>
              <h3>{translations['rwcn-wallet.receiver']}</h3>
            </label>
            <input
              type='text'
              id='amount'
              placeholder={translations['rwcn-wallet.receiver']}
              step={1}
              value={transferReceiver()}
              onInput={ev => setTransferReceiver(ev.target.value)}
            />
          </div>
          <button
            class='submit-btn'
            onClick={() => {
              if (transferMoney() > 0 && transferReceiver()) {
                props.actions.transferTo(transferReceiver(), transferMoney())
              }
            }}
          >
            {translations['rwcn-wallet.confirm']}
          </button>
        </div>
      </div>
    </>
  )
}
