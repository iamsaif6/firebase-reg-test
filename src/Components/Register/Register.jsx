import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../firebase.config';

const Register = () => {
  const handleRegister = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const auth = getAuth(app);

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {})
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="w-3/4 mx-auto flex items-center justify-center flex-col gap-5 mt-[70px]">
      <h3 className="text-2xl">Please Register</h3>
      <form onSubmit={handleRegister} className="space-y-4 text-center w-full">
        <input className="border w-full py-3 px-4 rounded-xl" type="email" placeholder="Email" name="email" />
        <br />
        <input className="border w-full py-3 px-4 rounded-xl" type="password" placeholder="Password" name="password" />
        <br />
        <input className="border text-white bg-slate-900 w-full py-3 px-4 cursor-pointer rounded-xl" type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
