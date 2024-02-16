import React from 'react'
import CarouselItem from './CarouselItem'

const slides = [
	'https://s3-alpha-sig.figma.com/img/1480/5464/3fda29901b9984a2aac479ba8d817ec8?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ixOcizj4WF7BgacGFD4lLkxIee0nLoOtdc~td8eQdlYQnuTSlsE5yoHI4jhZnN9dK~Ke8WNgan7ueUXCelKbRvUgJ3LKbsmVcnA9cvIoQ8AYMr8uM~XZqReLi22U7yTmMBwvPmcst9Os1GxuYOUQc~ab1s5XJsb7sHDgEhIo3WFWhXSa295bQAmiV1Fa8eWGPYJ7uXnMrZuZ4tpwYBcUTl-HDruXKNWWEh-JcE-E5gx9fLdnQN5KFNehlukG~XsdMUg5KxZ74XxuWVt0meEkJtizuiz6v6rXbLDz-~3AIlPPoQtkE6uY3Xw7gGKdWSkEMH2dTl~HoyDivM0hyLF2Ww__',
	'https://s3-alpha-sig.figma.com/img/6d4c/a3ae/e626ec372af36f2969341726beaac2ba?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YHGnDZRu3FBaA8VSFua6u1k1Jdj--B7VYPnBjxtVPT-TKriqK~iKhiSnAs3E~5EmZFKJjgYkiCC7rkHTiW7ZfwMvOyJPw-ar6q2BBbdq4MrAb1YGc2QLBct3JMegJcu3qiUEmmVU-SCJTMfdkrFuEv5Vj3dLjKgZA4zwOfir9GEwOoLTh43snOKuVuaeGq~o7diQ2zvP0A3e1moNoCoG0CYcyDrjnwvx5Q53cJUdg3FUlij9FNF0vr2jXTLnPa3B0W0jwPyWdP7TFlLsEOTN4sbPtlw258Og7Ne86S9L-lPoIguwwX~B600JzRvjzh4bClrCgbfFM3goUPHFdUffaQ__',
	'https://s3-alpha-sig.figma.com/img/a9a3/a2fb/10bdb4b571c9eef413b032c378a23100?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P4BCdXjNBoDSvi8fE6SDzC6CEU1gxbDEmQmxMdcsDc6TY64IaOGDeFudj897FWh4LeCnZ24V04ZrjlcLntM2ndrHBVQtmkIMnFD-lfUzVtr3dlP7Hm-NJ8uhdY8R7tmwHNFXsDvfkEtaQ~ZQhkqPfM4vqndldY1bWxUqqSUJHGHtCu1WXIEucb6gOdAriKbnd14XXqhja0a2sboXru8D2dOOGpmM3C9A5AziRQurh35olAGaKwUia7IEUptMFeoWIyEwb3j~cMTz7nXGQkD8g8HA7yWNf5H2Ic1Lv3qdIlbFztYyABsmoTkpdMe1tKsSVyvvWKP4dKp23rshuKONug__',
]

function Carousel() {
	return (
		<div className='max-w-lg'>
			{slides.map(s => (
				<CarouselItem>
					<img src={s} alt='' />
				</CarouselItem>
			))}
		</div>
	)
}

export default Carousel
