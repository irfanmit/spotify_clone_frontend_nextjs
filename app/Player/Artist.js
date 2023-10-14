import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './Artist.module.css'
import Image from 'next/image';

const Artist = ({imagePath,title, artist}) => {
  const router = useRouter();

  return (
    <>
      <div className={styles.artist}>
      <img style={{opacity : 0.6}} src={imagePath} alt='failed to load' />
      <div className={styles.content}>

        <h3>{title}</h3>
        <br></br>
        <h4>{artist}</h4>
      </div>
      </div>
    </>
  );
};

export default Artist;
