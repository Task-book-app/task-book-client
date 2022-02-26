import React from 'react'
import { useFela } from 'react-fela'
import Brand from '../../../presentational/Brand'
import H3 from '../../../presentational/typography/H3'
import Categories from './Categories'

const SideBar = () => {

    const { theme } = useFela()

  return (
    <div className="sidebar">
        <Brand>
            <H3
                color={theme.colors.blue}
            >Tasks<br/>Book</H3>
        </Brand>  
        <Categories />
    </div>
  )
}

export default SideBar