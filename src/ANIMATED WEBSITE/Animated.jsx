// import React,{ useState } from "react";

 


// const Animated =()=>{

    
//     const [data,setData]=useState({
//         fullName:"",
//         phone:"",
//         email:"",
//         message:"",
 
//     }
   

//     );
//     const inputEv=(event)=>{
//         const {name,value}=event.target;
//       setData((preV)=>{
//           return{
//                         ...preV,[name]:value,
//           };
//       }

//       )  
//     };
//     const formSubmit=(e)=>{
//         e.preventDefault();
//         alert(`${data.fullName}`)

//     };


//     return(
//         <>
//        <div className="my-5">
//            <h1 className="text-center">Contact Us</h1>
//        </div>
//        <div className="container contact_div">
//            <div className="row">
//                <div className="col-md-6 col-10 mx-auto">
//                    <form  onSubmit={formSubmit}>
//                <div className="mb-3">
//   <label for="exampleFormControlInput1" className="form-label">Full name</label>
//   <input type="name" className="form-control" 
//   id="fullname"
//  name="fullName" 
//  value={data.fullName}
//  onChange={inputEv}
//    placeholder="Enter Your Name" 
//   />
// </div>

// <div className="mb-3">
//   <label for="exampleFormControlInput1" className="form-label">Phone</label>
//   <input type="number" className="form-control" id="exampleFormControlInput1" 
//   name="phone" 
//   value={data.phone}
//   onChange={inputEv}
//   placeholder="Enter Mobile No..." />
// </div>

// <div className="mb-3">
//   <label for="exampleFormControlInput1" className="form-label">Email address</label>
//   <input type="email" className="form-control" id="exampleFormControlInput1" 
//   name="email" 
//   value={data.email}
//   onChange={inputEv}
//   placeholder="Enter Your Email " />
// </div>
// <div className="mb-3">
//   <label for="exampleFormControlTextarea1" className="form-label">Message</label>
//   <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
//    name="message" 
//    value={data.message}
//    onChange={inputEv}
  
//   ></textarea>
// </div>
// <div className="col-12">
//     <button className="btn btn-outline-primary" type="submit">Submit</button>
//   </div>
//   </form>
//                </div>
//            </div>
//        </div>
       
//         </>
//     );
// };

// export default Animated
import { useState } from "react";
import FormInput from "./form";
const Animated = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted")
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="my-5">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="btn btn-outline-primary">Submit</button>
      </form>
    </div>
  );
};

  export default Animated;