import Accordion from "./components/Accordion";

export interface Title {
  title: string;
}

interface Selected {
  selected: boolean;
}

interface RatingProps {
  value: number;
}

function App() {
  return (
    <div>
      <PageTitle title={"This is app component"} />
      <Accordion title={"Menu"}/>

      <hr />
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
      <hr />
    </div>
  );
}

const Rating = ({ value }: RatingProps) => {
  if (value === 1) {
    return (
      <div>
        <Star selected={true} />
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={false} />
      </div>
    );
  } else if (value === 2) {
    return (
      <div>
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={false} />
      </div>
    );
  } else if (value === 3) {
    return (
      <div>
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={false} />
        <Star selected={false} />
      </div>
    );
  } else if (value === 4) {
    return (
      <div>
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={false} />
      </div>
    );
  } else if (value === 5) {
    return (
      <div>
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
      </div>
    );
  }

  return (
    <div>
      <Star selected={false} />
      <Star selected={false} />
      <Star selected={false} />
      <Star selected={false} />
      <Star selected={false} />
    </div>
  );
}

const Star = ({ selected }: Selected) => {
  return selected ? (
    <span>
      {" "}
      <b>Star</b>{" "}
    </span>
  ) : (
    <span> Star </span>
  );
}

const PageTitle = ({ title }: Title) => {
  return <h1> {title} </h1>;
};

export default App;
