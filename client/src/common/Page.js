import { NavBar } from './NavBar';

export const Page = (props) => {
  return (
    <div>
      <NavBar />
      {props.children}
    </div>
  );
};
