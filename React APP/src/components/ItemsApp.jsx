import { items } from "../Data/items"

export const ItemsApp = ({ width }) => {
  return (
    <div className={  width < 1400 ? 'mt-20 bg-slate-100' : 'bg-slate-100 pb-20' }>
      <div className={ `${ width < 1400 ? 'w-full flex flex-col justify-start items-center' : 'pt-10 main-container'}` }>
        <div className={` ${ width < 1400 ? 'w-48 mt-20' : 'mt-20 w-auto' } `}>
          <h2 className={ ` ${ width < 1400 ? 'text-3xl text-center text-gray-800' : 'text-3xl mb-10 text-gray-800' } ` }>Why choose Easybank</h2>
        </div>

        <div className="w-auto">
          <p className={ ` ${ width < 1400 ? 'text-gray-400 text-center w-96 mt-5' : 'text-gray-400 w-1/3'} ` }>
              We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before
          </p>
        </div>
      </div>
    
      <div className={ ` ${ width < 1400 ? ' w-full flex flex-col items-center gap-8 mt-20 pb-20' : 'flex gap-1 justify-between pt-24 main-container'  } ` }>
      {
        items.map( ({ id, img, text, title }) => (
          <div 
            key={ id }
            className={`${ width < 1400  ? 'flex flex-col items-center px-10': 'w-64' }`}
          >
            <div className="mb-5">
              <img src={ `../../assets/${ img }` } alt="Image" />
            </div>
            <div className={ ` ${ width < 1400 ? 'text-center' : '' } ` }>
              <h3 className="text-gray-700 text-lg"> { title } </h3>
              <p className="text-gray-400 text-md mt-4">{ text }</p>
            </div>
          </div>
        ))
      }
    </div>
    </div>
  )
}
