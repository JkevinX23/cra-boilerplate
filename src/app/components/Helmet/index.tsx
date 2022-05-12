import { Helmet } from 'react-helmet-async'

import { PageHelmetProps } from './types'

export function PageHelmet({ title, description }: PageHelmetProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={`${description}`} />
    </Helmet>
  )
}
