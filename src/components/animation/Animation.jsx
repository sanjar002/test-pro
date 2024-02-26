  import React from 'react'

  import styled, {keyframes,css} from 'styled-components'

  import './Animation.scss'

  function Animation() {

      const row1 = [
      'https://s3-alpha-sig.figma.com/img/8dd7/67eb/180e93b983867adc942652bb8a55bb11?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KXo5p0cYrfHrT4~9K2eRa8ZHqkUD~6v7twSXrVaXagy34hEk14yctHkgUuYDNZsSGCg-CsyVhV6SeWVIAc6kgmWHnFTpR06sjYW2dC5Ag20rjpE-RcQIsg17be~v5nGJkV6mo0J~2fvZ1UB7jCBqlFDjpjHXDQqu6lCRANVZ4GafRFUKb5TKFxNiNALILZyCmzRCznXn~lJ3xuvr~n6xUFNuxr4a9nStqR~r~h2DvTBe6m037fniTExHWwwQm7y26xiZY8LgpARmu4gxKPxw7SEWZ4SYO-z5G0-Kd0-Z8T2zVqXOSCMW4XlYrDaUwGUcvIuaf5kzLBZa-ZQe4WWrUQ__',
      'https://s3-alpha-sig.figma.com/img/ecef/77fc/f14dcfb9c286017ef2086d75d5a291b6?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mGlIcHxDRNuUOTrHE-DQjrFGdHegZZzdPaL0gvxJ6ECLCHeSzhUq4wtmtqpRIYeplwFEfG6QqG-IoutOfwlZzOHKXsvsJ~y7R9Hs674DZDvrlganFflos6JJo7iBlG3al1GtFgt0EFzrsWJPU9iJ5kP3Td57PCs4ZxCNsl4t5CqxVeCCy6Z9TrpWls7hTLp-utu9mrxq8rfjeHCugoX4C63qdAQPXjZ4gUNiWBChjj4guebVU0Rr7LMlrjwWRfiz4DynDHS8U7uJ2E-wkY60tzGbAgCQiyGC8FFmb-j4PoZKp3JMjU9ocYSOqINtucgoD2Jl--DR8Q2wTxd0eUPDgg__',
      'https://s3-alpha-sig.figma.com/img/184f/6a86/fb6e2d5b03dccdb89be435212914bfeb?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mf9nFnDmsHcMFZK2YcrW0sPFHwxuCswNkDh8QX040weMlXMolI97KnzeBeN~oYpthYYal9IcliLQsFmpSsu22pHq6O5N-lGfd~M1Gwmq3ClLZv~JaVKin8Jl0rCrw9ijXsTZkqUbvkMoiCDBdMRpUxngGnntXepsBmWYZL5yLFoIktQmaDRsbCNrVilJItq60YECOKarxCwH2yXz0k5ftJxoTQqBqA3mESOFv9kdtrtegZKiqWzE6ZzUXS-kVCFccCYKCN5alWSaCGNaUqza3LQGbBKiKsl99FVuYiHVZADHXlsaesbNHsJ7E7lR9AcbZC5katiBxdXzeaR1hu8A3g__'
    ]

    return (
      <AppContainer>
      <Wrapper>
          <Marquee>
              <MarqueeGroup>
                  {
                      row1.map((_, el) => (
                          <ImageGroup>
                              <Image src={el}/>
                          </ImageGroup>
                      ))
                  }
              </MarqueeGroup>
              <MarqueeGroup>
                  {
                      row1.map((_, el) => (
                      <ImageGroup>
                          <Image src={el}/>
                      </ImageGroup>
                      ))
                  }
              </MarqueeGroup>
          </Marquee>
      </Wrapper>
  </AppContainer>
    )
  }

  export default Animation

  const AppContainer = styled.div`
      width: 1200px;
      height: 150px;
      margin: 0 auto;
      color: #000;
      margin-top: 20px;
      margin-bottom: 100px;
      @media screen and (max-width: 1024px) {
        width: 900px;
      }
  `;

  const Wrapper = styled.div`
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
  `;

  const Marquee = styled.div`
    display: flex;
    width: 1200px;
    overflow: hidden;
    user-select: none;
    mask-image: linear-gradient(to right, hsl(0 0% 0% / 0),
      hsl(0 0% 0% / 1) 10%,
      hsl(0 0% 0% / 1) 90%,
      hsl(0 0% 0% / 0))
  `;

  const scrollX = keyframes`
    from {
      left: translateX(0)
    }
    to {
      transform: translateX(-100%)
    }
  `;

  const common = css`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    white-space: nowrap;
    width: 100%;
    animation: ${scrollX} 6s linear infinite;
  `

  const MarqueeGroup = styled.div`
    ${common}
  `;

  const ImageGroup = styled.div`
    display: grid;
    place-items: center;
    width: clamp(10rem, 1rem + 40vmin, 30rem);
    padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10)
  `;

  const Image = styled.img`
    object-fit: contain;
    width: 100%;
    heigth: 100%;
    border-radius: 0.5rem;
    aspect-ratio: 16/9;
    padding: 5px 10px;
  `