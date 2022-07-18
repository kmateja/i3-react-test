import Child1 from "../components/Child1";
import Child2 from "../components/Child2";
import Child3 from "../components/Child3";
import Child4 from "../components/Child4";
import useOnScreen from "../components/LazyLoading";
import styles from '../styles/Home.module.css'
import React, { useState, useRef, useEffect } from 'react';

export default function Home() {
  const child3Ref = useRef();
  const child3RefValue = useOnScreen(child3Ref);
  const [isChild3Ref, setIsChild3Ref] = useState(false);
  const child4Ref = useRef();
  const child4RefValue = useOnScreen(child4Ref);
  const [isChild4Ref, setIsChild4Ref] = useState(false);

  useEffect(() => {
    if (!isChild3Ref) setIsChild3Ref(child3RefValue);
    if (!isChild4Ref) setIsChild4Ref(child4RefValue);
  }, [child3RefValue, child4RefValue]);
  return (
    <div className={styles.gallery_grid}>
      <Child1 />
      <Child2 />
      <div ref={child3Ref}>{child3RefValue && <Child3 />}</div>
      <div ref={child4Ref}>{child4RefValue && <Child4 />}</div>

    </div>
  );
};
