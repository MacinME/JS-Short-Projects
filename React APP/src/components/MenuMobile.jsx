const textMenu = ['Home', 'About', 'Contact', 'Blog', 'Careers'];

export const MenuMobile = () => {
  return (
    <div className="backgroud-transparent h-screen w-screen absolute z-20 py-5 px-12">
        <div className="bg-white rounded-lg py-6 drop-shadow-lg">
            <ul className="flex flex-col items-center gap-3">
                {
                    textMenu.map( (text) => (
                        <li 
                            key={ text }
                            className="text-gray-700 cursor-pointer text-lg"
                        > { text } </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}
