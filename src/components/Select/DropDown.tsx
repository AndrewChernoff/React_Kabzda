import React, { memo, useEffect, useState } from 'react';
import { CityType, FilterValue } from './Select';
import s from './Select.module.css';

type DropDownProps = {
    selectTeach: any
    technologies: CityType[] | undefined
    showDropDown: boolean;
    toggleDropDown: Function;
    techSelection: any;
};

const DropDown: React.FC<DropDownProps> = ({
    technologies,
    techSelection,
  selectTeach
}: DropDownProps): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const onClickHandler = (obj: any): void => {
    techSelection(obj);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  console.log('techs');
  

  return (
    <>
    <div>
      <div className={showDropDown ? s.dropdown : `${s.dropdown} + ${s.activ}`}>
         {technologies?.map(
          ({title, id}) => {
            return (
              <p
                key={id}
                onClick={(): void => {
                  onClickHandler({title, id});
                }}
                 className={id === selectTeach?.id ? s.active : ''}
              >
                {title}
              </p>
            );
          }
        )} 
      </div>
    </div>
    </>
  );
};

export default memo(DropDown);
