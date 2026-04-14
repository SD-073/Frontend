import { useFormStatus } from "react-dom";

function SubmitButton() {
    const { pending } = useFormStatus();

  return (
    <button type="submit" className={`btn ${pending? "btn-error" : ""}`} disabled={pending}>
        {pending? "Sending..." : "Send"}
    </button>
  )
}

export default SubmitButton;