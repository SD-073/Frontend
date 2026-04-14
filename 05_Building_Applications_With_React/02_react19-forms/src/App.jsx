import { useActionState } from "react";
import SubmitButton from "./components/SubmitButton";

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

const action = async(_prevState, formData) => {
  console.log(_prevState)
  console.log(formData)
  // console.log(formData.get("name"))
  // console.log(formData.get("email"))
  // console.log(formData.get("message"))

  const data = Object.fromEntries(formData);
  console.log(data)

  const validationErrors = {};
  
  if (!data.name.trim() || !data.email.trim() || !data.message.trim()) {
    validationErrors.name = "name need to have values"
    validationErrors.email = "email need to have values"
    validationErrors.message = "message need to have values"
    return {
      errors: validationErrors,
      input: data
    }
  }; 
  await sleep(4000)
  // alert("Form has been submitted!")
  // fetch("", {method: "POST", body: JSON.stringify(data)})
  localStorage.setItem("formData", JSON.stringify(data))
  return {}
}

function App() {
  const [state, formAction, isPending] = useActionState(action, {});

  return (
    <main className='min-h-screen bg-gray-900 p-8 font-sans'>
      <div className='max-w-xl mx-auto bg-gray-950 p-6 rounded-lg shadow space-y-6'>
        <h2 className='text-2xl font-bold text-center text-gray-200'>Contact Us</h2>
        <form action={formAction} className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-200' htmlFor='name'>
              Name
            </label>
            <input
              name='name'
              id='name'
              className='w-full mt-1 border border-gray-300 rounded px-3 py-2'
              placeholder='name'
              defaultValue={state.input?.name}
              disabled={isPending}
            />
            {state.errors?.name && <p>{state.errors?.name}</p>}
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-200' htmlFor='email'>
              Email
            </label>
            <input
              name='email'
              id='email'
              className='w-full mt-1 border border-gray-300 rounded px-3 py-2'
              placeholder='email'
              defaultValue={state.input?.email}
              disabled={isPending}
            />
            {state.errors?.email && <p>{state.errors?.email}</p>}
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-200' htmlFor='message'>
              Message
            </label>
            <textarea
              name='message'
              id='message'
              rows={4}
              className='w-full mt-1 border border-gray-300 rounded px-3 py-2'
              placeholder='Tell us how we can help...'
              defaultValue={state.input?.message}
              disabled={isPending}
            />
            {state.errors?.message && <p>{state.errors?.message}</p>}
          </div>
          {/* <button type='submit' className='btn'>
            Send
          </button> */}
          <SubmitButton />
        </form>
      </div>
    </main>
  );
}

export default App
