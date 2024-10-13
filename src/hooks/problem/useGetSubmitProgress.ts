import * as Stomp from '@stomp/stompjs'
import { useEffect, useRef, useState } from 'react';

const useGetSubmitProgress = () => {
  const ref = useRef<Stomp.Client | null>(null);
  const [progress, setProgress] = useState<number>(0);

  ref.current = new Stomp.Client({
    brokerURL: import.meta.env.VITE_WS_URL,
    debug: function (str) {
      console.log(str);
    },
    onConnect: () => {
      console.log('커넥티드');
      ref.current!.subscribe("/sub/progress",message => {
        const body = JSON.parse(message.body);
        console.log(body);
        setProgress(body.progress);
      });
    }
  });

  useEffect(()=>{
    ref.current?.activate();

    return () => {
      ref.current?.deactivate();
    }
  },[]);

  return {
    progress
  }
}

export default useGetSubmitProgress