import css from "./Profile.module.css";
export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profile}>
      <div className={css.userInfo}>
        <img className={css.imgAvatar} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.descr}>@{tag}</p>
        <p className={css.descr}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statItem}>
          <span className={css.statName}>Followers</span>
          <span className={css.statNumb}>{stats.followers}</span>
        </li>
        <li className={css.statItem}>
          <span className={css.statName}>Views</span>
          <span className={css.statNumb}>{stats.views}</span>
        </li>
        <li className={css.statItem}>
          <span className={css.statName}>Likes</span>
          <span className={css.statNumb}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
