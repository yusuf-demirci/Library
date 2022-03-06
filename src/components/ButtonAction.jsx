
function ButtonAction({icon, text, onPress}) {
  return (
    <button onClick={onPress}>
        {icon}
        {text}
    </button>
  )
}

export default ButtonAction