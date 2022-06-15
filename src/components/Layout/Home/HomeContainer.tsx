import React,{useRef, useEffect, useState} from 'react';
import styled from 'styled-components';
import {useResize} from "@/hooks"

interface IProp {
  setIsShowNav:(isShow:boolean) => void;
}


const STDHomeContainer = styled.div`
  width: 100%;
  height: 100%;

`;

const HomeVideo = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;

  @media(max-width:1023px){
    position:relative;
    width:100%;
    object-fit: contain;
  }
`;

const OpacityLayer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  top: 0px;
  z-index: 2;
`;

const IconLayout = styled.div`
  position:absolute;
  display:flex;
  right: 60px;
  bottom:32px;
  z-index:10;
 
`

const IconSvg = styled.img`
 cursor:pointer;
`

const ThumbnailLayout = styled.div<{isPlayMobile:Boolean}>`
  position:absolute;
  width:100%;
  height:100%;
  bottom: ${(props) => props.isPlayMobile ? "100%": 0};
  transition-duration: 0.3s;



`

const MobileThumbnail = styled.img`
  width: 100%;
  height:100%;
  object-fit: cover;

`

const MobileText = styled.div`
  position:absolute;
  white-space: pre-wrap;
  color:#fff;
  font-family: "Inter";
  font-size: 40px;
  bottom: 200px;
  left: 30px;
  font-weight: 700;

  
`

  const MobileLayout = styled.div`
  position:relative;
  height:100vh;
  overflow:hidden;
  `

  const MobileVedioLayout = styled.div`
  position:relative;
  display: flex;
  align-items:center;
  height:100%;
  `

const CloseIcon = styled.img`
  position: absolute;
    top: 0px;
    width: 40px;
    height: 40px;
    top: 36px;
    left: 36px;
    z-index:3;
    cursor:pointer;

`


const HomeContiner: React.VFC<IProp> = ({setIsShowNav}) => {
  const [isPlay, setIsPlay] = useState(true)
  const [isMute, setIsMute] = useState(true)
  const [isPlayMobile, setIsPlayMobile] = useState(false)
  const {width} = useResize()
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const videoEle = videoRef.current

  useEffect(() => {
    if(isPlay){
      videoEle?.play()
    }else{
      videoEle?.pause()
    }
  },[isPlay])



  const clickMobilePlayer = () => {
    setIsPlayMobile(!isPlayMobile)
    setIsShowNav(false)
  }

  const closeMobilePlayer = () => {
    setIsPlayMobile(false)
    setIsShowNav(true)
   
  }


  useEffect(() => {
    if(isPlayMobile){
      videoEle?.play()
    }else{
      videoEle?.pause()
    }

  },[isPlayMobile])
  





  return (
    <STDHomeContainer>
      {
        width > 1023 ? <>   
        <OpacityLayer />
        <HomeVideo loop autoPlay muted={isMute} playsInline ref={videoRef}>
          <source
            src={
              'https://the-hill-paycam.s3.ap-southeast-1.amazonaws.com/home.mp4'
            }
            type={'video/mp4'}
          />
        </HomeVideo>
        <IconLayout>
          <IconSvg src={isPlay ?  "/icon/pause_circle_outline.svg" : "/icon/play_circle_outline.svg" } 
                  style={{marginRight: 24}} 
                  onClick={() =>  setIsPlay(!isPlay)}/>
          <IconSvg src={ isMute ?  "/icon/volume_off.svg" : "/icon/volume_up.svg"} onClick={() => setIsMute(!isMute)}/>
        </IconLayout></>
        : 
        <MobileLayout>
        <ThumbnailLayout isPlayMobile={isPlayMobile}>
         <MobileThumbnail src={"/image/mobile_home.png"}/>
          <MobileText>
            <div style={{marginBottom:12}}>
            {`Hello,\nTHE Hill Paycam`}
            </div>
            <IconSvg src={"/icon/play_circle_outline.svg"} width={40} height={40} onClick={clickMobilePlayer}/>
          
          </MobileText>
          <MobileVedioLayout>
            <CloseIcon src="/icon/close.svg" onClick={closeMobilePlayer}/>
         <HomeVideo ref={videoRef} controls>
          <source
            src={
              'https://the-hill-paycam.s3.ap-southeast-1.amazonaws.com/home.mp4'
            }
            type={'video/mp4'}
          />
        </HomeVideo>
        </MobileVedioLayout>
        </ThumbnailLayout>
        </MobileLayout>
      }
    
    </STDHomeContainer>
  );
};

export default HomeContiner;
