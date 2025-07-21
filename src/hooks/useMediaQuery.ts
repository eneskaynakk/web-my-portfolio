// hooks/useMediaQuery.ts
import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean | undefined {
  // Başlangıçta 'undefined' olarak ayarla. Bu, bileşenin henüz tarayıcıda olmadığını gösterir.
  const [matches, setMatches] = useState<boolean | undefined>(undefined); 

  useEffect(() => {
    // Bu kod sadece istemci tarafında (tarayıcıda) çalışacaktır
    if (typeof window !== 'undefined') {
      const mediaQueryList = window.matchMedia(query);
      
      // İlk renderda doğru değeri ayarla
      setMatches(mediaQueryList.matches);

      const documentChangeHandler = () => setMatches(mediaQueryList.matches);
      mediaQueryList.addEventListener('change', documentChangeHandler);
      
      return () => mediaQueryList.removeEventListener('change', documentChangeHandler);
    }
  }, [query]);
  
  // Sunucu tarafında 'undefined' dönecek, istemcide gerçek değeri.
  return matches;
}