import Image from 'next/image'

import { Dispatch, SetStateAction, useEffect } from 'react'

import classNames from 'classnames/bind'

import { SVGS } from '@/constants/images'
import useScroller from '@/hooks/useScroller'

import styles from './IntroSection.module.scss'

const cx = classNames.bind(styles)
const { pacman } = SVGS

interface IntroSectionProps {
  setTitle: Dispatch<SetStateAction<string>>
}

const IntroSection = ({ setTitle }: IntroSectionProps) => {
  const trigger = useScroller(cx('is-motion'))

  useEffect(() => {
    if (
      trigger.current &&
      trigger.current.classList.contains(cx('is-motion'))
    ) {
      setTitle('Hello')
    }
  }, [trigger, setTitle])

  return (
    <section ref={trigger} className={cx('section-main')}>
      <h2 className='visually-hidden'>Portfolio Main View</h2>
      <div className={cx('intro-left')}>
        <div className={cx('intro-left-greeting')}>
          <p>
            <span>Hi ther</span>
            <span className={cx('pacman')}>
              <Image src={pacman.url} alt={pacman.alt} />
            </span>
          </p>
        </div>
        <div className={cx('intro-left-designer')}>
          <p>
            <span>I&#39;m</span>
            <span>designer</span>
          </p>
        </div>
        <div className={cx('intro-left-developer')}>
          <p>
            <span>&</span>
            <span>web developer</span>
          </p>
        </div>
      </div>

      <div className={cx('intro-right')}>
        <div className={cx('intro-right-ux')}>
          <p>
            <span>focused on</span>
            <span>UX</span>
          </p>
        </div>
        <div className={cx('intro-right-ds')}>
          <p>
            <span className={cx('plus')}>+</span>
            <span>design systems</span>
          </p>
        </div>
      </div>

      <div className={cx('view-footer')}>
        <span className={cx('view-footer-copyright')}>
          Soo Portfolio &#169; 2024
        </span>
        <span className={cx('view-footer-contact')}>kheesoo10@gmail.com</span>
      </div>
    </section>
  )
}

export default IntroSection
