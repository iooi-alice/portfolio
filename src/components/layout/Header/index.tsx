import Image from 'next/image'
import Link from 'next/link'

import { useEffect, useRef } from 'react'

import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'

import classNames from 'classnames/bind'

import { SVGS } from '@/constants/images'

import styles from './Header.module.scss'

const cx = classNames.bind(styles)

const { logo } = SVGS

interface HeaderProps {
  title: string
}

const Header = ({ title }: HeaderProps) => {
  const headerRef = useRef<HTMLElement | null>(null)

  const [emoji, ...titleTextParts] = title.split(/(?<=^\S+)\s/)
  const titleText = titleTextParts.join(' ')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('splitting').then((Splitting) => {
        Splitting.default()
      })

      const maxHeight =
        document.documentElement.scrollHeight - window.innerHeight

      window.addEventListener('scroll', () => {
        const scrollRatio = window.scrollY / maxHeight
        const angle = scrollRatio * 360

        if (headerRef.current) {
          headerRef.current.style.background = `conic-gradient(from 0deg, #ffffff86 0%, #ffffff86 ${angle}deg, #5252524d ${angle}deg)`
        }
      })
    }
  }, [])

  return (
    <div className={cx('header-wrapper')}>
      <header ref={headerRef} className={cx('header')}>
        <nav className={cx('header-nav')}>
          <h1 className={cx('nav-logo')}>
            <Link href={'/'}>
              <Image src={logo.url} alt={logo.alt} width={80} height={16} />
            </Link>
          </h1>
          <div className={cx('nav-indicator')}>
            <span className={cx('emoji')}>{emoji}</span>
            <span className={cx('text')}>{titleText}</span>
          </div>
          <span></span>
        </nav>
        <a
          href='mailto:kheesoo10@gmail.com?Subject=Hi%20Soo'
          className={cx('btn-contact', 'btn-splitting')}
          aria-label='Contact Button'
        >
          <span className={cx('btn-contact-text')} data-splitting>
            Let&#39;s Talk
          </span>
        </a>
      </header>
    </div>
  )
}

export default Header
