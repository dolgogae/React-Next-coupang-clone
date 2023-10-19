'use client'
import React, { useEffect, useState } from 'react'
import styles from './Header.module.scss';
import Link from 'next/link';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '@/firebase/firebase';
import { toast } from 'react-toastify';
import { usePathname, useRouter } from 'next/navigation';
import InnerHeader from '../innerHeader/InnerHeader';

const Header = () => {
  
  const pathName = usePathname();
  const router = useRouter();
  const [displayName, setDisplayName] = useState('');

  useEffect(() => {
    
    // 로그인 한 유저의 정보가 오게 된다.
    onAuthStateChanged(auth, (user) => {

      console.log('user: ' + user);
      if(user){
        if(user.displayName === null){
          const u1 = user.email.split('@')[0];
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          setDisplayName(uName);
        } else{
          setDisplayName(user.displayName);
        }

        // 유저 정보를 리덕스 스토어에 저장하기

      } else{
        setDisplayName('');
        // 유저 정보를 리덕스 스토어에서 지우기
      }
    })

  }, []);

  if(pathName === '/login' || pathName === '/register' || pathName === '/reset'){
    return null;
  }

  const logoutUser = () => {

    signOut(auth)
    .then(()=>{
      toast.success('로그아웃 되었습니다.');
      router.push('/');
    })
    .catch((error) => {
      toast.error(error.message);
    })
  }

  return (
    <header>
      <div className={styles.loginBar}>
        <ul className={styles.list}>
        <li className={styles.item}>
          <Link
            href={"/login"}
          >
            로그인
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href={"/admin/dashboard"}
          >
            관리자
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href={"/order-history"}
          >
            주문 목록
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href={"/"} 
            onClick={logoutUser}
          >
            로그아웃
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href={"/"} 
          >
            제휴 마케팅
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href={"/"} 
          >
            쿠팡 플레이
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href={"/"} 
          >
            고객센터
          </Link>
        </li>
        </ul>
      </div>
      {pathName.startsWith('/admin') ? null: <InnerHeader />}
    </header>
  )
}

export default Header
