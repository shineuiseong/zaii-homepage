export const useMobileUi = () => {
  const mobileMenuOpen = useState<boolean>('mobile-menu-open', () => false)

  const openMobileMenu = () => {
    mobileMenuOpen.value = true
  }

  const closeMobileMenu = () => {
    mobileMenuOpen.value = false
  }

  const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
  }

  return {
    mobileMenuOpen,
    openMobileMenu,
    closeMobileMenu,
    toggleMobileMenu
  }
}
