

function ButtonAction({icon, text, onPress}) {
  return (
    <button onClick={(e) => {
      e.preventDefault()
      onPress()
    }}>
        {icon}
        {text}
    </button>
  )
}

export default ButtonAction