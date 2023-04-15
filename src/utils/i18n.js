import i18n from 'i18next'
import { useTranslation, initReactI18next } from 'react-i18next'
import { zh, en } from '@/constants/local'

const lng = 'en'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      zh: {
        translation: zh,
      },
    },
    lng, // 初始化语言
    fallbackLng: lng,
    interpolation: {
      escapeValue: false,
    },
  })

export default function N (opt) {
  const { t } = useTranslation()
  return <>{t(opt)}</>
}

