import style from '../../sections/header.module.css';

function Dropdown({
  setIsActive,
  isActive,
  selected,
  changeCategory,
  setSelected,
}) {
  return (
    <div className={style.search_panel_input_category}>
      <div
        className={style.dropdown_selected_content}
        onClick={() => setIsActive(!isActive)}
      >
        {selected}
      </div>
      {isActive && (
        <div className={style.dropdown_content}>
          {changeCategory.map((category) => (
            <div
              key={category}
              onClick={() => {
                setSelected(category);
              }}
              className={style.dropdown_content_items}
            >
              {category}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
