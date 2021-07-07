import React from 'react'
import '../components/result.css'

export default function Result() {
    return (
        <div>
<>
            <div>
            <div className='icon'><i class="fa fa-check-circle" ></i></div>
            <h1>Result</h1>
            <div className='result'>
                <div className='messege'>You need more pratice</div>
                <div className='score'>Your Score: 20%</div>
                <div className='list1'>
                <div className='list'>Number of Questions: 15</div>
                <div className='list'>Number of attempts: 9</div>
                <div className='list'>Number of correct answers: 3</div>
                <div className='list'>Number of wrong answets: 6</div>
                </div>
            </div>
            <div><button>Back to Home</button></div>
            </div>
            </>
        </div>
    )
}

