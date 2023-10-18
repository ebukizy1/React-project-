import React from 'react'
import Logo from '../asset/image/kisspng-jesus-youth-beer-catholic-charismatic-renewal-cath-5b20b4a5f32ff0.5927243415288700539961.jpg'
import { HeaderStyle } from '../style/Calculate'
import { HomeLinkStyle, LogoImgStyle } from '../style/HeaderImage'

export const Header = () => {
  return (
    <HeaderStyle>
        <LogoImgStyle src={Logo} alt="" />
        <HomeLinkStyle href="/"> Home</HomeLinkStyle>
    </HeaderStyle>
  )
}
