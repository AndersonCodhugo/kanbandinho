import './PostIt.css'

export function PostIt() {
    return (
        <div className='postit-molde'>
            <textarea className='postit-texto' placeholder='Escreva algo...' maxLength={120}> 

            </textarea>
        </div>
    )
}