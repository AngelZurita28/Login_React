import { useState } from 'react';

export const useLikes = () => {
  const [likes, setLikes] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string) => {
    setLikes(current => ({
      ...current,
      [id]: !current[id]
    }));
  };

  const isLiked = (id: string) => !!likes[id];

  return { toggleLike, isLiked };
};