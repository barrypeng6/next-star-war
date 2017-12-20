import { fetchAllSettings } from './setting.api'
const pages = [
  { id: 1, name: 'Page One' },
  { id: 2, name: 'Page Two' },
  { id: 3, name: 'Page Three' },
  { id: 4, name: 'Page Four' },
  { id: 5, name: 'Page Five' },
]

const wait = (time) => new Promise(resolve => setTimeout(() => resolve(pages), time))

export {
  wait,
  fetchAllSettings
}