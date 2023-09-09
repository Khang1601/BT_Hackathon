import React from 'react'

export default function Players({ doList, deleteDo, decreaseCount, increaseCount, isHighestScore }) {
    return (
        <div className='players'>
            <ul>
                {
                    doList.map((doItem, index) => (
                        <li key={doItem.id}>
                            <div className='li_1'>
                                <button className='btn_delete' onClick={() => {
                                    deleteDo(doItem.id)
                                }}>
                                    <i class="fa-solid fa-x"></i>
                                </button>

                                <i className="fa-solid fa-crown"
                                    style={{
                                        opacity: isHighestScore(doItem.score) ? 0.6 : 0.08,
                                        transitionDelay: isHighestScore(doItem.score) ? '0.5s' : ''
                                    }}
                                ></i>


                                <span>{doItem.title}</span>
                            </div>

                            <div className='li_2'>
                                <div>
                                    <button className='btn_decrease' onClick={() =>
                                        decreaseCount(doItem.id)
                                    }>
                                        <i className="fa-solid fa-minus"></i>
                                    </button>
                                </div>

                                <span>{doItem.score}</span>

                                <button className='btn_increase' onClick={() =>
                                    increaseCount(doItem.id)
                                }>
                                    <i className="fa-solid fa-plus"></i>
                                </button>
                            </div>
                        </li>

                    ))
                }
            </ul>
        </div>
    )
}
