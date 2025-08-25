import { resolve } from 'path'

const pages = [
  {
    name: 'index',
    path: resolve(__dirname, './index.html'),
  },
  {
    name: 'contacts',
    path: resolve(__dirname, './pages/contacts.html'),
  },
  {
    name: 'all-services',
    path: resolve(__dirname, './pages/all-services.html'),
  },
  {
    name: 'service',
    path: resolve(__dirname, './pages/service.html'),
  },
  {
    name: 'price',
    path: resolve(__dirname, './pages/price.html'),
  },

]

export default pages
