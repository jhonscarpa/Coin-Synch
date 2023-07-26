import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import {
  ContainerCrypto,
  FloatValueText,
  HighlightTicker,
  TextCrypto,
} from './styles'
import { coinApi } from '@/api/coinApi'

export function CryptoCarousel() {
  useEffect(() => {
    getCryptoData()
  }, [])

  async function getCryptoData() {
    const response = await coinApi.get('/exchangerate/BTC/USD')
    console.log(response.data)
  }

  return (
    <ContainerCrypto>
      <Swiper
        direction={'horizontal'}
        slidesPerView={2.25}
        spaceBetween={24}
        loop
        mousewheel={true}
        modules={[Mousewheel, Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
      >
        <SwiperSlide>
          <TextCrypto variant="label">
            <HighlightTicker>BIT</HighlightTicker> R$ 23,62{' '}
            <FloatValueText value={7.082}>+7,082</FloatValueText>
          </TextCrypto>
        </SwiperSlide>
        <SwiperSlide>
          <TextCrypto variant="label">
            <HighlightTicker>DOG</HighlightTicker> R$ 23,62{' '}
            <FloatValueText value={-5.23}>-5,230</FloatValueText>
          </TextCrypto>
        </SwiperSlide>
        <SwiperSlide>
          <TextCrypto variant="label">
            <HighlightTicker>ETH</HighlightTicker> R$ 23,62{' '}
            <FloatValueText value={1.023}>+1,023</FloatValueText>
          </TextCrypto>
        </SwiperSlide>
        <SwiperSlide>
          <TextCrypto variant="label">
            <HighlightTicker>SOL</HighlightTicker> R$ 23,62{' '}
            <FloatValueText value={3.908}>+3,908</FloatValueText>
          </TextCrypto>
        </SwiperSlide>
        <SwiperSlide>
          <TextCrypto variant="label">
            <HighlightTicker>XLM</HighlightTicker> R$ 23,62{' '}
            <FloatValueText value={-1.906}>-1,906</FloatValueText>
          </TextCrypto>
        </SwiperSlide>
      </Swiper>
    </ContainerCrypto>
  )
}
