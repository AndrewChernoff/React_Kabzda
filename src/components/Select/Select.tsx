import { useState } from "react";
import DropDown from "./DropDown";
import s from './Select.module.css';

export type CityType = {
  id: number
  title: string
}

const Select: React.FC = (): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectTeach, setSelectCity] = useState<any>(null);
  const technologies = [{id: 1, title: "HTML"}, {id: 2, title: "CSS"}, {id: 3, title:"React"},{id: 4, title: "React + Redux"}]


  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  const techSelection = (value: string): void => {
    setSelectCity(value);
  };

  return (
    <>
      <div className={s.announcement}>
        <div>
          {selectTeach
            ? `You selected ${selectTeach.title} `
            : "Select your book"}
        </div>
      </div>
      <button
        className={showDropDown ? s.active : undefined}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div>{selectTeach ?  selectTeach.title : "Select ..."} </div>
        {showDropDown && (
          <DropDown
          selectTeach={selectTeach}
          technologies={technologies}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            techSelection={techSelection}
          />
        )}
      </button>
    </>
  );
};

export default Select;

/* const Select = () => {

    const [value, setValue] = useState('')


    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) =>  setValue(e.currentTarget.value)

    return <div>
        <select onChange={onSelectChange}>
        <option value="books">Книги</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="php">PHP</option>
        <option value="js">JavaScript</option>
      </select>
    </div>
}

export default Select; */