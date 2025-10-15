import './App.css'
import {useForm} from 'react-hook-form'

function App() {
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors , isSubmitting },
  } = useForm();

  // register() = connects your input fields to React Hook Form.
  // It handles tracking, validation, and value collection automatically, 
  // so you don’t have to write manual state or event handlers for each input.
  
  //  onSubmit → your custom function that receives form data.
  //  handleSubmit → React Hook Form’s helper that handles validation, 
  //  prevents reload,and then calls your onSubmit with all collected form data.
  
  // {...register('firstName', { ...validation rules... })}
  // register() takes two arguments → field name + validation rules.
  // Rules include things like required, minLength, maxLength, etc.
  // errors object holds all validation errors.
  // You show error messages using {errors.fieldName?.message}.

  async function onSubmit(data){
    //API call ko simulate krte h
    await new Promise((resolve) => setTimeout(resolve , 5000));
     console.log("submitting the form",data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name: </label>
        <input className={errors.firstName ? "input-error" : ""}
        {...register('firstName',
          {
            required: true,
            // maxLength: 15,
            maxLength: {value:6,message:"max length atmost 6"},
            minLength: {value:3 , message:'min length atleast 3 chars'},
            })}/>
            {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
      </div>
      <br/>
      <div>
        <label>Middle Name: </label>
        <input {...register('middleName')}/>
      </div>
      <br/>
      <div>
        <label>Last Name: </label>
        <input {...register('lastName',
          {
            // pattern: /^[A-Za-z]+$/i
            pattern:
            {
              value : /^[A-Za-z]+$/i,
              message: "last name is not as per the rules"
            }
          })}/>
          {errors.lastName && <p className='error-msg'>{errors.lastName.message}</p>}
      </div>
      <br />
      <input type="submit" disabled={isSubmitting}
      value={isSubmitting ? "Submitting" : "Submit"}
      />
    </form>
  )
}

export default App
