import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth';
import app from '../../firebase.config';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const HeroRegister = () => {
  const auth = getAuth(app);
  const [registerText, setregisterText] = useState('');
  const [errorText, setErrorText] = useState('');
  const [showPass, setShowPass] = useState(true);

  const handleHeroReg = e => {
    e.preventDefault();
    // Reset error text
    setregisterText('');
    setErrorText('');
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;

    if (password.length < 6) {
      setErrorText('Password should be at least 6 characters or longer');
      return;
    } else if (!/[A-Z]/.test(password)) {
      setErrorText('Password must contain 1 uppercase');
      return;
    } else if (!terms) {
      setErrorText('Please accpet terms and condition');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        setregisterText('Registration Succesfully');
        sendEmailVerification(result.user).then(() => {
          alert('Email verification send');
        });
      })
      .catch(error => {
        setErrorText(error.message);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut
              repudiandae et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleHeroReg} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPass ? 'password' : 'text'}
                    placeholder="password"
                    className="input w-full input-bordered"
                    required
                  />

                  <span
                    onClick={() => {
                      setShowPass(!showPass);
                    }}
                    className="absolute cursor-pointer right-3 text-[18px] top-1/2 -translate-y-1/2"
                  >
                    {showPass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                  </span>
                </div>
                <div className="mt-5">
                  <input className="mr-2" type="checkbox" name="terms" id="terms" />
                  <label htmlFor="terms">Please accept terms and condition</label>
                </div>
                {registerText && <p className="text-green-500">{registerText}</p>}
                {errorText && <p className="text-red-500">{errorText}</p>}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroRegister;
