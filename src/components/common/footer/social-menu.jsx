"use client"
import React from 'react'
import { Nav } from 'react-bootstrap'
import Link from 'next/link'
import { config } from '@/helpers/config'
import { capitilizeFirstLetter } from '@/helpers/misc'

const SocialMedia = (props) => {
  const menuItems = Object.entries(config.contact.socialMedia);
  console.log(menuItems)
  return (
    <Nav {...props}>
      {menuItems.map((item)=>(
            <Nav.Link href={item[1]} key={item[1]} as={Link}>{capitilizeFirstLetter(item[0])}</Nav.Link>
        ))}
    </Nav>
  )
}

export default SocialMedia
