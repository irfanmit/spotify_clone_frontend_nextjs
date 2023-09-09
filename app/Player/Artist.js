import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './Artist.module.css'

const Artist = ({imagePath,title, artist}) => {
  const router = useRouter();

  return (
    <>
      <div className={styles.artist}>
      <img style={{opacity : 0.6}} src={imagePath} />
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
