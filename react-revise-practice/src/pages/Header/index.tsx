import Box from '@mui/material/Box'
import { useState } from 'react'
import { useMode } from '@/contexts/modeContext/useModeContext'
import useScreenWidth from '@/hooks/useScreenWidth'

//mui
import { useTheme } from '@mui/material'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import SearchIcon from '@mui/icons-material/Search'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import AddIcon from '@mui/icons-material/Add'
import Popper from '@mui/material/Popper'
import Hidden from '@mui/material/Hidden'

//components
import IconButton from '@/components/IconButton'
import Drawer from '@/components/Drawer/'
import Avatar from '@/components/Avatar'
import Customer1 from '@/assets/customer1.png'
import { themes } from '@/themes'
import Button from '@/components/Button'
import SearchInput from '@/components/SearchInput'

const Header = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false)
  const [searchIconAnchorEl, setSearchIconAnchorEl] = useState<null | HTMLElement>(null)

  const { isDarkMode, toggleMode } = useMode()
  const { isMobile, isTablet, isDesktop } = useScreenWidth()
  const theme = useTheme()

  const handleClickMobileSearchIcon = (event: React.MouseEvent<HTMLElement>) => {
    setSearchIconAnchorEl(searchIconAnchorEl ? null : event.currentTarget)
  }

  const openSearchInputPopup = Boolean(searchIconAnchorEl)

  const handleCloseDrawer = () => {
    setIsOpenDrawer(false)
  }

  const handleOpenDrawer = () => {
    setIsOpenDrawer(true)
  }

  return (
    <Box
      sx={{
        marginLeft: isTablet ? '80px' : isDesktop ? '330px' : '0px',
        padding: '24px',
        height: '96px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: theme.palette.background.paper
      }}
    >
      <Hidden mdDown>
        <SearchInput searchWidth='356px' placeholder='Search or type a command' endHelper='⌘ F' />
      </Hidden>

      {isMobile && <IconButton children={<DragHandleIcon />} onClick={handleOpenDrawer} />}
      <Drawer
        isOpen={isOpenDrawer}
        onOpen={handleOpenDrawer}
        onClose={handleCloseDrawer}
        onChangeMode={toggleMode}
        mode={isDarkMode}
      />

      <div className='flex flex-row gap-[24px]'>
        {/* search input on mobile */}
        {isMobile && (
          <div>
            <IconButton onClick={handleClickMobileSearchIcon} children={<SearchIcon />} size='large' />
            <Popper
              open={openSearchInputPopup}
              anchorEl={searchIconAnchorEl}
              sx={{ backgroundColor: theme.palette.grey[200], width: '100%' }}
            >
              <Box sx={{ padding: ' 12px 16px' }}>
                <SearchInput placeholder='Search or type a command' />
              </Box>
            </Popper>
          </div>
        )}

        <Hidden lgDown>
          <Button sx={{ width: '120px' }} startIcon={<AddIcon />} children='Create' color='primary' />
        </Hidden>
        <IconButton
          badgeContent={0}
          children={<ChatBubbleOutlineIcon />}
          size='large'
          sx={{ ':hover': { color: theme.palette.text.secondary } }}
        />
        <IconButton
          badgeContent={0}
          children={<NotificationsNoneIcon />}
          size='large'
          sx={{ ':hover': { color: theme.palette.text.secondary } }}
        />

        <Avatar avtBackground={themes.colors.yellow[600]} size='small' src={Customer1} alt='Customer1' />
      </div>
    </Box>
  )
}

export default Header
