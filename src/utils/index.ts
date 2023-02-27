export const showAlert = ({ text }: { text: string }) => {
  return window.alert(`Alert: ${text}`)
}