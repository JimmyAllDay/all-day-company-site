'use client';
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import useSWR from 'swr';
import { useUser } from '@auth0/nextjs-auth0/client';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import limitWords, { checkPexelsString } from '@/utils/helperFunctions';
import { ThemeContext } from '@/context/ThemeContext';
import { useContext } from 'react';
import ImageWithFallback from '@/components/imageWithFallback/ImageWithFallback';

export default withPageAuthRequired(
  function Dashboard() {
    const [loading, setLoading] = useState(false);
    const [uiError, setUiError] = useState('');

    const { mode } = useContext(ThemeContext);

    const { user, error, isLoading } = useUser();

    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const {
      data,
      error: dataError,
      isLoading: dataIsLoading,
      mutate,
    } = useSWR(`/api/posts?username=${user?.name}`, fetcher);

    const router = useRouter();
    if (loading) return <div>Hang on a second...</div>;
    if (isLoading) return <div>Hang on a second...</div>;
    if (dataIsLoading) return <div>Hang on a second...</div>;
    if (error) return <div>{authError.message}</div>;
    if (dataError) return <div>Failed to load</div>;

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (checkPexelsString(e.target[2].value) !== true) {
        setUiError(
          'Only images from the Pexels CDN will be displayed. If your image string does not point to a valid Pexels image, a fallback image will be used. Example string: https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg'
        );
        setTimeout(() => {
          setUiError('');
        }, 15000);
      }

      const title = e.target[0].value;
      const desc = e.target[1].value;
      const image = e.target[2].value;
      const content = e.target[3].value;

      try {
        setLoading(true);
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
        mutate();
        setLoading(false);
      } catch (error) {
        console.log(error);
        return setLoading(false);
      }
    };

    const handleDelete = async (_id) => {
      console.log('delete request clicked');
      try {
        setLoading(true);
        await fetch('/api/posts', {
          method: 'DELETE',
          body: JSON.stringify({
            _id,
          }),
        });
        mutate();
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    const submitTheme = ` ${
      mode === 'dark' ? styles.darkSubmit : styles.submit
    }`;

    const delTheme = ` ${mode === 'dark' ? styles.darkDelete : styles.delete}`;

    return (
      <div className={styles.page}>
        <h1 className={styles.user}>Hi, {user.name}!</h1>
        <form className={styles.new} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            className={styles.input}
            required
          ></input>
          <input
            type="text"
            placeholder="Desc"
            className={styles.input}
            required
          ></input>
          <input
            type="text"
            placeholder="Image (Pexels CDN image string only)"
            className={styles.input}
            required
          ></input>
          <textarea
            placeholder="Content"
            className={styles.textArea}
            cols="30"
            rows="10"
            required
          ></textarea>
          <button className={submitTheme}>Add New Post</button>
        </form>
        <div className={styles.uiError}>{uiError && uiError}</div>
        <div className={styles.container}>
          {dataIsLoading
            ? 'Loading...'
            : data?.map((post) => {
                return (
                  <div key={post._id} className={styles.post}>
                    <div className={styles.imgContainer}>
                      <ImageWithFallback
                        src={checkPexelsString(post.image) && post.image}
                        fill={true}
                        className={styles.img}
                        alt=""
                        s="(max-width:300px)"
                      />
                    </div>
                    <Link href={`blog/${post._id}`} className={styles.content}>
                      <h2 className={styles.postTitle}>{post.title}</h2>
                      <h2 className={styles.postContent}>
                        {limitWords(post.content, 50)}
                      </h2>
                    </Link>
                    <div className={styles.deleteContainer}>
                      <div
                        className={delTheme}
                        onClick={() => handleDelete(post._id)}
                      >
                        x
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    );
  },
  { returnTo: '/dashboard' }
);
