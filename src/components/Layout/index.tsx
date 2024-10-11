import React from 'react'
import Navbar, {LinkType} from '../Navbar';

type Props = {
  links: LinkType[];
  children: React.ReactNode;
};


const Layout = ({children, links}: Props) => {
  return (
    <div>
      <Navbar links={links}/>
      <main>{children}</main>
    </div>
  )
}

export default Layout;