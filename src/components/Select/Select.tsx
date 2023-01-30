import { memo, useMemo, useState } from "react";
import DropDown from "./DropDown";
import s from './Select.module.css';

export type CityType = {
  id: number
  title: string
  field: string
}

export type FilterValue = 'all' | 'backend'| 'frontend'

const Select: React.FC = (): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectTeach, setSelectTeach] = useState<any>(null);
  const [technologies, setTechnology] = useState([
    {id: 1, title: "HTML", field: 'frontend'}, 
    {id: 2, title: "CSS", field: 'frontend'},
    {id: 3, title: "React", field: 'frontend'},
    {id: 4, title: "React + Redux", field: 'frontend'},
    {id: 5, title: "Node js", field: 'backend'},
    {id: 6, title: "MongoDB", field: 'backend'},
    {id: 7, title: "Nest", field: 'backend'},
  ])
  const [filter, setFilter] = useState<FilterValue>('all')

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  const techSelection = (value: string): void => {
    setSelectTeach(value);
  };

  const filteredTechnologies = useMemo(
    () => {
      if (filter === 'all') {
        return technologies
      } else if (filter === 'frontend') {
        return technologies.filter(el => el.field === 'frontend')
      } else if (filter === 'backend') {
        return technologies.filter(el => el.field === 'backend')
      }
    },
    [filter]
  );

  const onBtnHandler = (value: FilterValue) =>  () => setFilter(value)

  return (
    <>
    <div>
      <button onClick={onBtnHandler('all')}>All</button>
      <button onClick={onBtnHandler('frontend')}>Frontend</button>
      <button onClick={onBtnHandler('backend')}>Backend</button>
    </div>

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
          technologies={filteredTechnologies}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            techSelection={techSelection}
          />
        )}
      </button>
    </>
  );
};

export default memo(Select);

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