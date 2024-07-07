import React from 'react'
import { useForm } from 'react-hook-form'

export const Hookform = () => {
    const {register, handleSubmit,getValues, formState: {errors}}=useForm();

    console.log(errors);
    

  return (
    <div>
        <form onSubmit={handleSubmit((data)=>{
            alert("Account Created Successfully")
        })}>
        <h1>Sign Up </h1>
        <table>
          <tbody>
            <tr>
        <td><label>Frist Name</label></td>
        <td><input {...register('fname', {required:'Enter first name'})} type="text"  placeholder='Frisr Name'></input></td>
       <td> {errors?.fname && <span>{errors.fname.message}</span> }</td>
        </tr>
        <tr>
        <td><label>Last Name</label></td>
        <td><input {...register('lname', {required:'Enter last name'})} type="text" placeholder='Last Name'></input></td>
       <td> {errors?.lname && <span>{errors.lname.message}</span> }</td>
        </tr>
        <tr>
        <td><label>Gender</label></td>
       <input type='radio' {...register('Gender', {required:'Select the Gender'})} name='gender' value="Male"></input>
        <label htmlFor='male'>Male</label><br/>
        <input type='radio' {...register('Gender', {required:'Select the Gender'})}  name='gender' value="Female"></input>
        <label htmlFor='Female'>Female</label><br/>
        <input type='radio'{...register('Gender', {required:'Select the Gender'})} name='gender' value="Other"></input>
        <label htmlFor='Other'>Other</label><br/>
         </tr>
        <tr>
        <td><label>Email Id</label></td>
        <td><input{...register('email', {required:'Enter Email id', pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "invalid email address"
      }})} type="email" placeholder='Email Id'></input></td>
        <td>{errors?.email && <span>{errors.email.message}</span> }</td>
        </tr>
        
        <tr>
        <td><label>Phone Numar</label></td>
        <td> <input {...register('num', {required:'Enter the Number', minLength:{value:10, message:'Phone number must be 10 digit'}})}type="Number" placeholder='Phone Number' ></input></td>
         <td>{errors?.num && <span>{errors.num.message}</span> }</td>
         </tr>
        <tr>
        <td><label>Password</label></td>
         <td><input {...register('pas', {required:'Enter the Password', minLength:{value:4, message:"mimimum 4 charaters required"},maxLength:{value:15, message:"maximum 15 charaters allowed"}})} type="password" placeholder='Password'></input></td>
         <td>{errors?.pas && <span>{errors.pas.message}</span> }</td>
         </tr>
         <tr>
        <td><label>Confirm Password</label></td>
         <td><input {...register('cpas', {required:'Enter the Password', validate:(value)=>value===getValues('pas')||'Password not Matching'} )} type="password" placeholder='Password'></input></td>
         <td>{errors?.cpas && <span>{errors.cpas.message}</span> }</td>
         </tr>
         </tbody>
         </table>

         <input type='submit'  className='submit'/>




        </form>
        
    </div>
)
}