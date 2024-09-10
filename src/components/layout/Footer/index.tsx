import classNames from 'classnames/bind'

import styles from './Footer.module.scss'

const cx = classNames.bind(styles)

const Footer = () => {
  return (
    <footer className={cx('footer')}>
      <div className={cx('footer-inner')}>
        <h2 className={cx('footer-title')}>Contact</h2>
        <p className={cx('footer-mail')}>
          <a href='mailto:kheesoo10@gmail.com?Subject=Hi%20Soo'>
            kheesoo10@gmail.com
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
