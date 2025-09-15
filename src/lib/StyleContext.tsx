'use client'
import React, { createContext, useContext, useState } from 'react';

interface StyleContextProps {
  divClassName: string;
  divStyle: React.CSSProperties;
  setStyle: (style: Partial<Omit<StyleContextProps, 'setStyle'>>) => void;
}

const styleContextDefault: StyleContextProps = {
  divClassName: 'min-h-screen w-full bg-white relative',
  divStyle: {
    backgroundImage: `
      linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
      radial-gradient(circle 500px at 20% 80%, rgba(139,92,246,0.3), transparent),
      radial-gradient(circle 500px at 80% 20%, rgba(59,130,246,0.3), transparent)
    `,
    backgroundSize: '48px 48px, 48px 48px, 100% 100%, 100% 100%',
  },
   setStyle: () => {},
};

const StyleContext = createContext<StyleContextProps>(styleContextDefault);

export const useStyleContext = () => useContext(StyleContext);

export const StyleProvider = ({ children }: { children: React.ReactNode }) =>
{
 const [divClassName, setDivClassName] = useState(styleContextDefault.divClassName);
  const [divStyle, setDivStyle] = useState(styleContextDefault.divStyle);

  const setStyle = (style: Partial<Omit<StyleContextProps, 'setStyle'>>) => {
    if (style.divClassName) setDivClassName(style.divClassName);
    if (style.divStyle) setDivStyle(style.divStyle);
  };

  return  (
  <StyleContext.Provider value={{ divClassName, divStyle, setStyle }}>
    {children}
  </StyleContext.Provider>
);
}
