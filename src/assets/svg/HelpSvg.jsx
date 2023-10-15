const HelpSvg = ({ active }) => {
  //className={'sidebar__icon ' + (active && 'sidebar__icon_active')}
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={'sidebar__icon ' + (active && 'sidebar__icon_active')}>
      <path d="M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM12 20.7188C7.18594 20.7188 3.28125 16.8141 3.28125 12C3.28125 7.18594 7.18594 3.28125 12 3.28125C16.8141 3.28125 20.7188 7.18594 20.7188 12C20.7188 16.8141 16.8141 20.7188 12 20.7188Z" />
      <path d="M14.6156 7.42266C13.9125 6.80625 12.9844 6.46875 12 6.46875C11.0156 6.46875 10.0875 6.80859 9.38437 7.42266C8.65312 8.0625 8.25 8.92266 8.25 9.84375V10.0219C8.25 10.125 8.33437 10.2094 8.4375 10.2094H9.5625C9.66562 10.2094 9.75 10.125 9.75 10.0219V9.84375C9.75 8.81016 10.7602 7.96875 12 7.96875C13.2398 7.96875 14.25 8.81016 14.25 9.84375C14.25 10.5727 13.7344 11.2406 12.9352 11.5477C12.4383 11.7375 12.0164 12.0703 11.7141 12.5062C11.407 12.9516 11.2477 13.4859 11.2477 14.0273V14.5312C11.2477 14.6344 11.332 14.7188 11.4352 14.7188H12.5602C12.6633 14.7188 12.7477 14.6344 12.7477 14.5312V13.9992C12.7489 13.7717 12.8186 13.5498 12.9478 13.3625C13.077 13.1752 13.2596 13.0312 13.4719 12.9492C14.8547 12.4172 15.7477 11.1984 15.7477 9.84375C15.75 8.92266 15.3469 8.0625 14.6156 7.42266ZM11.0625 17.1562C11.0625 17.4049 11.1613 17.6433 11.3371 17.8192C11.5129 17.995 11.7514 18.0938 12 18.0938C12.2486 18.0938 12.4871 17.995 12.6629 17.8192C12.8387 17.6433 12.9375 17.4049 12.9375 17.1562C12.9375 16.9076 12.8387 16.6692 12.6629 16.4933C12.4871 16.3175 12.2486 16.2188 12 16.2188C11.7514 16.2188 11.5129 16.3175 11.3371 16.4933C11.1613 16.6692 11.0625 16.9076 11.0625 17.1562Z" />
    </svg>
  );
};

export default HelpSvg;