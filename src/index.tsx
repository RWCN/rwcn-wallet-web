import { render } from './lib.tsx'

render('root', {
  translations: {
    'rwcn-wallet.title': '钱包',
    'rwcn-wallet.confirm': '确认',
    'rwcn-wallet.transfer': '转账',
    'rwcn-wallet.balance': '余额',
    'rwcn-wallet.receiver': '接收者',
    'rwcn-wallet.money': '金额',
  },
  actions: {
    current: () => 100,
    transferTo: () => {},
  },
})
