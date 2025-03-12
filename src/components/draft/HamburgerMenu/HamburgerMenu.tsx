// import MenuIcon from '@/assets/icons/Menu.svg'
// import { useRef, useState } from 'react'
// import MainMenuContainer from './MainMenuContainer'
// import { useClickOutside } from '@/hooks/useClickOutside'

// const HamburgerMenu = () => {
//   const [openMenuHeader, setOpenMenuHeader] = useState(false)
//   const [isMenuOutAnimating, setIsMenuOutAnimating] = useState(false)

//   const handleShowMenuHeader = (show?: boolean) => {
//     if (!openMenuHeader && !show) {
//       return
//     }

//     if (openMenuHeader) {
//       setIsMenuOutAnimating(true)
//       setTimeout(() => {
//         setOpenMenuHeader(false)
//         setIsMenuOutAnimating(false)
//       }, 300)
//     } else {
//       setOpenMenuHeader(true)
//     }
//   }

//   const containerRef = useRef<HTMLDivElement>(null)
//   useClickOutside([containerRef], () => handleShowMenuHeader(false), false)
//   return (
//     <div className="lg:hidden">
//       <MenuIcon
//         className="w-8 h-8 cursor-pointer"
//         onClick={() => handleShowMenuHeader(!openMenuHeader)}
//       />
//       <div
//         className={`w-full fixed top-[60px] right-0 left-0 bottom-[107px] ${
//           openMenuHeader ? 'flex backdrop-blur-[2px]' : 'hidden'
//         }`}
//       >
//         <MainMenuContainer
//           ref={containerRef}
//           isMenuOutAnimating={isMenuOutAnimating}
//           onClose={handleShowMenuHeader}
//         />
//       </div>
//     </div>
//   )
// }

// export default HamburgerMenu
