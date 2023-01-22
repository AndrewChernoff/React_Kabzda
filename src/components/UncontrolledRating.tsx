import { memo, useState } from "react";

const Rating = () => {
  const [value, setValue] = useState(0);

  const changeRating = (value: number) => setValue(value)

  return <>
  <Star selected={value > 0} changeRating={() => changeRating(1)}/>
  <Star selected={value > 1} changeRating={() => changeRating(2)}/>
  <Star selected={value > 2} changeRating={() => changeRating(3)}/>
  <Star selected={value > 3} changeRating={() => changeRating(4)}/>
  <Star selected={value > 4} changeRating={() => changeRating(5)}/>
  </>
}

const Star = memo(({selected, changeRating}: any) => {
  return <span onClick={changeRating}> {selected? <b>Star</b> : 'Star'} </span>
})


export default memo(Rating)