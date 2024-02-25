import React from 'react'

function Timer({timerHours, timerMinutes, timerSeconds}) {
  return (
    <>
        <section className='timer-containre'>
				<section className='timer-content'>
					<div className='clock'>
						<section>
							<p>{timerHours}</p>
                            <small>Саат</small>
						</section>
						<span>:</span>
						<section>
							<p>{timerMinutes}</p>
                            <small>Минут</small>
						</section>
						<span>:</span>
						<section>
							<p>{timerSeconds}</p>
                            <small>Секунды</small>
						</section>
					</div>
				</section>
			</section>
    </>
  )
}

export default Timer