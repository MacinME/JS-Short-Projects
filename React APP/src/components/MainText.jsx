export const MainText = ({ width }) => {
  return (
    <div className={ `${ width < 1400 ? 'flex flex-col items-center': 'h-full flex justify-center items-start flex-col ml-64' }` }>
        <div className={` ${ width < 1400 ? 'text-center' : null } `}>
            <h1 className="text-gray-800 text-5xl">Next generation digital banking</h1>   
            <p className="text-gray-400 text-xl pt-10">
                Take your financial life online. Your Easybank account will be a one-stop-shop for spending saving, budgeting, investing, and much more.
            </p>     
        </div>
        <button
            className="butttonStyle w-auto py-3 px-8 text-white font-semibold rounded-full mt-12" 
        >
            Request Invite
        </button>
    </div>
  )
}
