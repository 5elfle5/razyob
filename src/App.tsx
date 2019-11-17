import React from 'react';

const links = ['Upload', 'My songs', 'Profile'];
interface NavLinkProps {
  text: string;
  prepend: string;
}

const NavLink = ({text, prepend} : NavLinkProps) => {
  return (
    <>
      {prepend}<span className="dim pointer"> {text} </span>
    </>
  );
}

const App: React.FC = () => {
  return (
    <div className="sans-serif bg-black-10 pa2">
      {links.map((link, i) => i !== 0 
        ? (<NavLink prepend="|" text={link} />)
        : (<NavLink prepend="" text={link} />))}
    </div>
  );
}


export default App;
