function SignUp() {
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="block absolute w-full h-full object-cover"
          src="https://help.nflxext.com/43e0db2f-fea0-4308-bfb9-09f2a88f6ee4_what_is_netflix_1_en.png"
          alt="/"
        />
        <div className="fixed w-full h-screen bg-black/50"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[30%] bg-black/75 mx-auto">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-white text-3xl font-bold">Sign Up</h1>
              <form className="w-full flex flex-col py-4">
                <input className="p-3 my-2 bg-gray-600 rounded" type="email" placeholder="Email" />
                <input
                  className="p-3 my-2 bg-gray-600 rounded"
                  type="password"
                  placeholder="Password"
                />
                <button className="bg-red-500 py-3 px-6 rounded font-bold mt-4 ">Sign Up</button>
                <div className="flex items-center justify-between mt-3 text-white">
                  <p>
                    <input type="checkbox" className="mr-1" /> Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
