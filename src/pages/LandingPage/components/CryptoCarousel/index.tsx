import { useEffect } from 'react'
import dayjs from 'dayjs'
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

const assets = ['BIT', 'DOG', 'ETH', 'SOL', 'XLM']

interface IPropsResponseCryptoApi {
  data: {
    rate_close: number
    rate_high: number
    rate_low: number
    rate_open: number
    time_close: Date
    time_open: Date
    time_period_end: Date
    time_period_start: Date
  }[]
}

export function CryptoCarousel() {
  useEffect(() => {
    getCryptoAssets()
  }, [])

  async function getCryptoAssets() {
    const startOfTheDay = dayjs(new Date()).startOf('date').format()
    const endOfTheDay = dayjs(new Date()).endOf('date').format()

    let values: {
      asset: string
      rate_start: number
      rate_close: number
    }[] = []

    assets.map(async asset => {
      const response: IPropsResponseCryptoApi = await coinApi.get(
        `/exchangerate/${asset}/BRL/history?period_id=1HRS&time_start=${startOfTheDay}&time_end=${endOfTheDay}`,
      )
      console.log(response.data)
      values = [
        ...values,
        {
          asset: asset,
          rate_start: response.data[0].rate_open,
          rate_close: response.data[response.data.length - 1].rate_close,
        },
      ]
    })

    console.log('responsee:  ', values)
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
