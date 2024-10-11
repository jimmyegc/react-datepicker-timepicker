import { useId } from "react"

export const PasswordField = () => {
  const passwordHintId = useId()

  return (
    <>
      <label>
        Password:
        <input
          type="password"
          aria-describedby={passwordHintId}
        />
      </label>
      <p id={passwordHintId}>
        El password debe ser de 18 letras y contener caracteres especiales
      </p>
    </>
  )
}
