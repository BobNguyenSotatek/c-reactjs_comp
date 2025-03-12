// 'use client'

// import CardActivityIcon from '@/assets/icons/CardActivity.svg'
// import CardCGXTokenIcon from '@/assets/icons/CardCGXToken.svg'
// import CardDepositIcon from '@/assets/icons/CardDeposit.svg'
// import CardDiscordIcon from '@/assets/icons/CardDiscord.svg'
// import CardHelpQuestionIcon from '@/assets/icons/CardHelpQuestion.svg'
// import CardLeaderboardIcon from '@/assets/icons/CardLeaderboard.svg'
// import CardMarketIcon from '@/assets/icons/CardMarket.svg'
// import CardPortfolioIcon from '@/assets/icons/CardPortfolio.svg'
// import CardWithdrawIcon from '@/assets/icons/CardWithdraw.svg'
// import CGXTokenLogo from '@/assets/images/CGXTokenLogo.png'
// import DisconnectWalletIcon from '@/assets/icons/DisconnectWallet.svg'

// import MarketEventWhiteIcon from '@/assets/icons/MarketEventWhite.svg'
// import MartketEventSettingIcon from '@/assets/icons/MartketEventSetting.svg'
// import ListUlSettingIcon from '@/assets/icons/ListUlSetting.svg'

// import { useRouter } from 'next/navigation'
// import { useAppUser } from '@/lib/features/user'
// import CardUser from '../CardUser'
// import ConnectBtn from '../ConnectBtn'
// import { ForwardedRef, forwardRef } from 'react'

// type MainMenuContainerProps = {
//   isMenuOutAnimating: boolean
//   onClose: () => void
// }
// const MainMenuContainer = (
//   { isMenuOutAnimating, onClose }: MainMenuContainerProps,
//   ref: ForwardedRef<HTMLDivElement>
// ) => {
//   const appRouter = useRouter()
//   const {
//     state: { isAdmin, address },
//     logout,
//   } = useAppUser()

//   const moveRouter = (path: string) => {
//     onClose()
//     appRouter.push(path)
//   }

//   const handleDisconnect = () => {
//     onClose()
//     logout()
//     appRouter.push('/')
//   }

//   return (
//     <div
//       ref={ref}
//       className={`menu-sidebar-container flex flex-col overflow-y-auto absolute max-w-[430px] h-full bg-[#0B0816] p-[15px]
//         animate-slideInFromRight ${
//           isMenuOutAnimating ? 'translate-x-full' : ''
//         }`}
//       style={{
//         right: 0,
//         transition: 'transform .3s ease-in-out',
//       }}
//     >
//       {address ? <CardUser /> : null}
//       <div className="sidebar-card-list flex flex-row flex-wrap gap-[15px] mt-[15px]">
//         <div
//           className="sidebar-card-item px-[15px] py-[19px] rounded bg-[#231D0F] border border-[#43381E]"
//           style={{
//             flexBasis: 'calc(50% - 7.5px)',
//           }}
//           onClick={() => moveRouter('/markets')}
//         >
//           <CardMarketIcon />
//           <div className="mt-[10px]">Markets</div>
//         </div>
//         <div
//           className="sidebar-card-item px-[15px] py-[19px] rounded bg-[#1B1527] border border-[#3B2862]"
//           style={{
//             flexBasis: 'calc(50% - 7.5px)',
//           }}
//           onClick={() => moveRouter('/portfolio')}
//         >
//           <CardPortfolioIcon />
//           <div className="mt-[10px]">Portfolio</div>
//         </div>
//         <div
//           className="sidebar-card-item px-[15px] py-[19px] rounded bg-[#130F1E] border border-[#30204F]"
//           style={{
//             flexBasis: 'calc(50% - 7.5px)',
//           }}
//           onClick={() => moveRouter('/activity')}
//         >
//           <CardActivityIcon />
//           <div className="mt-[10px]">Activity</div>
//         </div>
//         <div
//           className="sidebar-card-item px-[15px] py-[19px] rounded bg-[#0B1718] border border-[#1A3A3F]"
//           style={{
//             flexBasis: 'calc(50% - 7.5px)',
//           }}
//           onClick={() => moveRouter('/leaderboard')}
//         >
//           <CardLeaderboardIcon />
//           <div className="mt-[10px]">Leaderboard</div>
//         </div>
//         <div
//           className="sidebar-card-item px-[15px] py-[19px] rounded bg-[#0C1622] border border-[#253C57]"
//           style={{
//             flexBasis: 'calc(50% - 7.5px)',
//           }}
//           onClick={() => moveRouter('/wallet/deposit')}
//         >
//           <CardDepositIcon />
//           <div className="mt-[10px]">Deposit</div>
//         </div>
//         <div
//           className="sidebar-card-item px-[15px] py-[19px] rounded bg-[#1F1210] border border-[#462720]"
//           style={{
//             flexBasis: 'calc(50% - 7.5px)',
//           }}
//           onClick={() => moveRouter('/wallet/withdraw')}
//         >
//           <CardWithdrawIcon />
//           <div className="mt-[10px]">Withdraw</div>
//         </div>
//         <div
//           className="sidebar-card-item flex flex-row gap-2 items-center p-[10px] rounded bg-[#121532] border border-[#202663]"
//           style={{
//             flexBasis: 'calc(50% - 7.5px)',
//           }}
//           onClick={onClose}
//         >
//           <CardDiscordIcon />
//           <span>Join Discord</span>
//         </div>
//         <div
//           className="sidebar-card-item flex flex-row gap-2 items-center p-[10px] rounded bg-[#1C0D12] border border-[#3F1D28]"
//           style={{
//             flexBasis: 'calc(50% - 7.5px)',
//           }}
//           onClick={onClose}
//         >
//           <CardHelpQuestionIcon />
//           <span>Help Center</span>
//         </div>
//         <div
//           className="sidebar-card-item basis-full flex flex-row gap-2 items-center p-[10px] rounded border border-[#220F5E] font-medium text-base leading-[19.2px] relative overflow-hidden"
//           style={{
//             background:
//               'radial-gradient(84.5% 634.11% at 84.5% 56.51%, #000000 0%, #1A0850 100%)',
//             fontFamily: 'Tomorrow',
//           }}
//           onClick={onClose}
//         >
//           <CardCGXTokenIcon />
//           <span>CGX TOKEN</span>
//           <div className="absolute right-[15px] top-[10px]">
//             <img
//               src={CGXTokenLogo.src}
//               alt="CGX Token"
//               width={100}
//               height={81}
//             />
//           </div>
//         </div>
//       </div>

//       {!!address && isAdmin ? (
//         <div className="sidebar-card-list-admin flex flex-row items-center justify-between gap-[15px] mt-[15px]">
//           <div
//             className="sidebar-card-admin-item w-full max-w-[123px] px-[10px] py-[10px] leading-[19.36px] rounded bg-[#121532] border border-[#202663]"
//             onClick={() => moveRouter('/admin/manage-markets')}
//           >
//             <MarketEventWhiteIcon />
//             <div className="w-full mt-[10px]">Manage Events</div>
//           </div>

//           <div
//             className="sidebar-card-admin-item w-full max-w-[123px] px-[10px] py-[10px] leading-[19.36px] rounded bg-[#121532] border border-[#202663]"
//             onClick={() => moveRouter('/admin/event-settings')}
//           >
//             <MartketEventSettingIcon />
//             <div className="w-full mt-[10px]">Event Settings</div>
//           </div>

//           <div
//             className="sidebar-card-admin-item w-full max-w-[123px] px-[10px] py-[10px] leading-[19.36px] rounded bg-[#121532] border border-[#202663]"
//             onClick={() => moveRouter('/admin/leaderboard-settings')}
//           >
//             <ListUlSettingIcon />
//             <div className="w-full mt-[10px]">Leaderboard Settings</div>
//           </div>
//         </div>
//       ) : null}

//       {!address ? (
//         <div className="mt-[75px]" onClick={onClose}>
//           <ConnectBtn
//             sx={{
//               margin: 'auto',
//               paddingTop: '11px',
//               paddingBottom: '11px',
//               height: 'auto !important',
//               justifyContent: 'center',
//               maxWidth: '260px',
//               width: '100%',
//               '& .expand-name': {
//                 display: 'inline-block !important',
//               },
//             }}
//           />
//         </div>
//       ) : (
//         <a
//           onClick={handleDisconnect}
//           className={`text-[#FF4F42] border-b-0 flex flex-row-reverse items-center gap-2 ${
//             isAdmin ? '!mt-[15px]' : '!mt-[30px]'
//           }`}
//           style={{
//             margin: 'auto',
//             paddingTop: '11px',
//             paddingBottom: '11px',
//             height: 'auto !important',
//             justifyContent: 'center',
//             maxWidth: '260px',
//             width: '100%',
//           }}
//         >
//           <DisconnectWalletIcon className="w-6 h-6" />{' '}
//           <span>Disconnect Wallet</span>
//         </a>
//       )}
//     </div>
//   )
// }

// export default forwardRef(MainMenuContainer)
