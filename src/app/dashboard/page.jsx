'use client';
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import useSWR from 'swr';
import { useUser } from '@auth0/nextjs-auth0/client';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default withPageAuthRequired(
  function Dashboard() {
    const { user, error, isLoading } = useUser();

    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const {
      data,
      error: dataError,
      isLoading: dataIsLoading,
    } = useSWR(`/api/posts?username=${user?.name}`, fetcher);

    const router = useRouter();
    if (isLoading) return <div>Hang on a second...</div>;
    if (dataIsLoading) return <div>Hang on a second...</div>;
    if (error) return <div>{authError.message}</div>;
    if (dataError) return <div>Failed to load</div>;

    const handleSubmit = async (e) => {
      e.preventDefault();
      const title = e.target[0].value;
      const desc = e.target[1].value;
      const image = e.target[2].value;
      const content = e.target[3].value;

      try {
        await fetch('/api/posts', {
          method: 'POST',
          body: JSON.stringify({
            title,
            desc,
            image,
            content,
            username: user.name,
          }),
        });
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <div className={styles.page}>
        <h1 className={styles.user}>Hi, userName!</h1>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input
            type="text"
            placeholder="Title"
            className={styles.input}
          ></input>
          <input
            type="text"
            placeholder="Desc"
            className={styles.input}
          ></input>
          <input
            type="text"
            placeholder="Image"
            className={styles.input}
          ></input>
          <textarea
            placeholder="Content"
            className={styles.textArea}
            cols="30"
            rows="10"
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
        <div className={styles.container}>
          {dataIsLoading
            ? 'Loading...'
            : data?.map((post) => {
                return (
                  <div key={post._id} className={styles.post}>
                    <div className={styles.imgContainer}>
                      <Image src={post.image} alt="" width={200} height={200} />
                    </div>
                    <h2 className={styles.postTitle}>{post.title}</h2>
                    <span className={styles.delete}>X</span>
                  </div>
                );
              })}
        </div>
      </div>
    );
  },
  { returnTo: '/dashboard' }
);
