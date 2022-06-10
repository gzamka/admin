import React from 'react'
import { useParams } from 'react-router'
import { UselanguageContext } from '../languageContext'
import SpecificNews from './SpecificNews'
export default function Newsdetail() {
  const { news: { data } } = UselanguageContext()
  const { slug } = useParams()
  return (
    <>
      {data.filter((el) => el.id === slug).map((el, i) => {
        return <SpecificNews el={el} key={i} />
      })}
    </>
  )
}
