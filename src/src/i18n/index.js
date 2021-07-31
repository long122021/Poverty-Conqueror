// local lang
import en from './en'
import zh from './zh'

import Bfeen from 'bfe-ui/lib/locale/lang/en'
import Bfezh from 'bfe-ui/lib/locale/lang/zh-CN'

export default {
  'zh': Object.assign(zh, Bfezh),
  'en': Object.assign(en, Bfeen)
}
