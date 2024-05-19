import "./Header.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function Header() {
  return (
    <div>
      <header>
        <div className="logo">
          <a href="">
            <img src="popcorn.png" alt="" />
            MD
          </a>
        </div>
      </header>
    </div>
  );
}
