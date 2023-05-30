import { articles } from "../Data/items"

export const Articles = ({ width }) => {
  return (
    <div className="bg-white mt-20 mb-20 w-full h-full">
        <h2 className={ `${ width < 1400 ? 'text-3xl text-center text-gray-800 mb-10' : 'text-3xl pb-10 text-gray-800 main-container' }` }>Latest Articles</h2>
        <div className={ `${ width < 1400 ? 'flex flex-col items-center' : 'flex justify-between main-container gap-4'  }` }>        
            {
                articles.map( ({ author, id, img, text, title }) => (
                    <div 
                        key={ id }
                        className="bg-white w-80 h-full rounded-lg"
                    >
                        <div className="flex flex-col items-center pb-5">
                            <img 
                                src={ `../../assets/${ img }` } 
                                alt="Image" 
                                className="w-80 h-56 rounded-lg"
                            />
                            <div className="px-8">
                                <span className="mt-10 block text-gray-400 text-sm mb-5"> { author } </span>
                                <h3 className="text-gray-700 text-lg mb-3">{ title }</h3>
                                <p className="text-gray-400">{ text }</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
