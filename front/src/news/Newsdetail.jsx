import React from 'react'
import { useParams } from 'react-router'
import SpecificNews from './SpecificNews'
export default function Newsdetail({ docs: { data } }) {
  const { slug } = useParams()
  return (
    <>
      {data?.filter((el) => el.id === slug).map((el, i) => {
        return <SpecificNews el={el} key={i} />
      })}
    </>
  )
}
