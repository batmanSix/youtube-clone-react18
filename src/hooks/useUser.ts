import { useMemo } from 'react'
// import { useUserStore } from '../store/user'

export default function useUser() {
  // const { account } = useUserStore()
  const logged = true
  const isVip = false


  return {
    isVip,
    logged,
    // profile: account?.profile,
    // vipInfo: account?.vipInfo,
  }
}
