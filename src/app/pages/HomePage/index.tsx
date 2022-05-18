import Button from 'app/components/Button'
import { Smiley } from 'phosphor-react'

import { PageHelmet } from '../../components/Helmet'

export function HomePage() {
  return (
    <>
      <PageHelmet
        title='HomePage'
        description='A Boilerplate application homepage'
      />
      <Button background='blue'>
        <Smiley /> kevin
      </Button>
    </>
  )
}
