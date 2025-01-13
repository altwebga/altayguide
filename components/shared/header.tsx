import HeaderNav from "./header-nav";

export default function Header() {
  return (
    <header>
      <div className="h-16 flex items-center justify-between">
        <div>
          <span>Logo</span>
        </div>
        <HeaderNav />
        <div>
          <span>Actions</span>
        </div>
      </div>
    </header>
  );
}
