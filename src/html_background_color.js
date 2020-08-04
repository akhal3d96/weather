
export default function htmlBackgroundColor (isDarkMode) {
  const darkColor = '#0A0A0A'
  const lightColor = '#ffffff'

  const backgroundColor = isDarkMode ? darkColor : lightColor

  document.querySelector('html').style.backgroundColor = backgroundColor
  // document.body.style.backgroundColor = backgroundColor
}
