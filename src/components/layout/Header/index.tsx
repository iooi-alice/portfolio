import Image from 'next/image'
import Link from 'next/link'

import { useEffect } from 'react'

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
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('splitting').then((Splitting) => {
        Splitting.default()
      })
    }
  }, [])

  return (
    <header className={cx('header')}>
      <nav className={cx('header-nav')}>
        <h1 className={cx('nav-logo')}>
          <Link href={'/'}>
            <Image src={logo.url} alt={logo.alt} width={80} height={16} />
          </Link>
        </h1>
        <div className={cx('nav-indicator')}>
          <span className={cx('emoji')}>👋</span>
          <span className={cx('text')}>{title}</span>
        </div>
        <span></span>
      </nav>
      <button
        className={cx('btn-contact', 'btn-splitting')}
        type='button'
        aria-label='Contact Button'
      >
        <span className={cx('btn-contact-text')} data-splitting>
          Let&#39;s Talk
        </span>
      </button>
    </header>
  )
}

export default Header
