import * as Stomp from "@stomp/stompjs";
import { useEffect, useRef, useState } from "react";
import {
  ProblemSubmitProgressResponse,
  ProblemSubmitState,
} from "../../types/problem/problem";

const useGetSubmitProgress = () => {
  const ref = useRef<Stomp.Client | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [state, setState] = useState<ProblemSubmitState>("PENDING");

  const subscribeProgress = (id: number) => {
    ref.current = new Stomp.Client({
      brokerURL: import.meta.env.VITE_WS_URL,
      onConnect: () => {
        ref.current!.subscribe(`/sub/progress/${id}`, (message) => {
          const body = JSON.parse(
            message.body
          ) as ProblemSubmitProgressResponse;

          setProgress(Math.floor(body.progress));
          setState(body.result);
        });
      },
    });

    ref.current?.activate();
  };

  useEffect(() => {
    return () => {
      ref.current?.deactivate();
    };
  }, []);

  return {
    subscribeProgress,
    progress,
    state,
  };
};

export default useGetSubmitProgress;
