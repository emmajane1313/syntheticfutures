import { useEffect, useState } from "react";
import posts from "./../../../pages/api/posts.json";
import { NextRouter } from "next/router";
import { Post } from "../../types/all.types";

const usePost = (path: string, router: NextRouter) => {
  const [publication, setPublication] = useState<Post | undefined>();

  useEffect(() => {
    if (path) {
      posts.forEach((pos) => {
        if (
          pos.title?.[router.locale as "en" | "es"].toLowerCase() ==
          path.toLowerCase().replaceAll("-", " ")
        ) {
          setPublication(pos as Post);
          return;
        }
      });
    }
  }, [path, router.locale]);
  
  
  useEffect(() => {
    const loadMathJax = () => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
      script.async = true;
      script.onload = () => {
        (window as any).MathJax = {
          tex: { inlineMath: [['$', '$'], ['\\(', '\\)']] },
          svg: { fontCache: 'global' },
          startup: {
            ready: () => {
              (window as any).MathJax.startup.defaultReady();
              (window as any).MathJax.startup.promise.then(() => {
                (window as any).MathJax.typeset();
              });
            },
          },
        };
      };
      document.head.appendChild(script);
    };

    loadMathJax();

    const handleRouteChange = () => {
      if ((window as any).MathJax && (window as any).MathJax.startup?.promise) {
        (window as any).MathJax.startup.promise.then(() => {
          (window as any).MathJax.typeset();
        });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return {
    publication,
  };
};

export default usePost;
