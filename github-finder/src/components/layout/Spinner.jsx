import spinner from './assets/spinner.gif'

function Spinner() {
    return (
        <div className='w-100 mb-20'>
            <img 
                src={spinner} 
                alt='Loading...' 
                width={500} 
                className='text-center mx-auto'
            />
        </div>
    )
}

export default Spinner