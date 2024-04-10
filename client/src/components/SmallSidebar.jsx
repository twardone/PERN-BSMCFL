import Wrapper from '../assets/wrappers/SmallSidebar'
import { FaTimes } from 'react-icons/fa'

import Logo from './Logo'
import { NavLink } from 'react-router-dom'
import links from '../utils/Links'
import { useDashboardContext } from '../pages/DashboardLayout'
import NavLinks from './NavLinks'

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext()
  return (
    <Wrapper>
      <div
        className={
          //if showSidebar === true then sidebar-container show-sidebar
          //else sidebar-container
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className='content'>
          <button type='button' className='close-btn' onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          {/* Navbar component */}
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar
