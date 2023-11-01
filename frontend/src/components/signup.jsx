
function SignUp() {
    return(<div className="flex flex-col justify-center items-center h-screen">
                <div className="flex items-center gap-5 text-sec-color my-5 mb-10 text-5xl">
                    <i className="fa-solid fa-spider"></i> <p className="font-semibold">Bug Tracker</p>
                </div>
                <div className="flex flex-col justify-between items-center rounded-lg shadow-2xl w-1/3 h-4/6 text-main-color bg-sec-color p-5">
                    <form className="w-3/5 h-full flex flex-col justify-center gap-3 items-center">
                        <p className="text-3xl font-semibold">Sign Up:</p>
                        <input className="w-full rounded-lg p-1.5 text-black" type="text" name="username" placeholder="Username" />
                        <input className="w-full rounded-lg p-1.5 text-black" type="email" name="email" placeholder="Email" />
                        <input className="w-full rounded-lg p-1.5 text-black" type="email" name="email" placeholder="Confirm Email" />
                        <input className="w-full rounded-lg p-1.5 text-black" type="password" name="password" placeholder="Password" />
                        <input className="w-full rounded-lg p-1.5 text-black mb-2" type="password" name="confirm" placeholder="Confirm Password" />
                        <button className="text-lg text-sec-color bg-main-color rounded-lg py-1 px-2 hover:rounded-xl duration-300" type="button">Sign Up</button>
                    </form>
                    <div className="flex flex-col items-center">
                        <a>Already have an account? <a className="underline" href="/login">Login</a></a>
                        <p>Login as a <a className="underline" href="/demo-user">Demo User</a></p>
                    </div>
                </div>
           </div>)
}

export default SignUp;