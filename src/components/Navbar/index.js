import React from 'react'

import { Container, DropdownStyles } from './styles'
import { DropdownProvider, DropdownOption, DropdownRoot } from '../Dropdown'

import { Products, Developers, Company } from '../Content'

function Navbar() {
  return (
    <DropdownProvider>
      <DropdownStyles>
        <Container>
          <ul>
            <li>
              <DropdownOption
                name="Produtos"
                content={() => <Products />}
                backgroundHeight={286} />
            </li>
            <li>
              <DropdownOption
                name="Desenvolvedores"
                content={() => <Developers />}
                backgroundHeight={167} 
                />
            </li>
            <li>
              <DropdownOption
                name="Empresa"
                content={() => <Company />} 
                backgroundHeight={195} 
                />
            </li>
          </ul>
        </Container>

        <DropdownRoot />
      </DropdownStyles>
    </DropdownProvider>
  )
}

export default Navbar