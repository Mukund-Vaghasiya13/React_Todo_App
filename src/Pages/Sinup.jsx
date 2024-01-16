function SinUpPage() {
    return (  
        <>
           <div className="h-screen w-screen flex justify-center items-center">
                <div className="bg-white h-1/2 w-9/12 flex flex-col justify-center items-center">
                    <div className="flex justify-center mb-3">
                       <h1 className="text-5xl font-bold font-sans">Sinup</h1>
                    </div>
                    <input placeholder="Enter username" className="h-11 w-10/12 md:w-1/2 pl-2 m-2 border-2  border-black outline-none focus:border-blue-600"></input>
                    <input placeholder="Enter password" className="h-11 w-10/12 md:w-1/2 pl-2 m-2 border-2 border-black outline-none focus:border-blue-600"></input>
                    <button className="h-11 w-10/12 md:w-1/2 pl-2 m-3 bg-black text-white active:bg-white active:text-black font-bold">Sinup</button>
                </div>
            </div>
        </>
    );
}

export default SinUpPage;