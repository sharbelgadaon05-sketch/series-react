function Header({ platform, count, savedCount }) {
  return (
    <header className="header">
      <h1 className="header__logo">{platform}</h1>

      <p className="header__count">
        {count} סדרות בקטלוג · ★ שמורות: {savedCount}
      </p>
    </header>
  );
}

export default Header;