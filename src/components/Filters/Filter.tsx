import * as React from "react";

import { IFilter } from "../../types/products";

import "./Filters.scss";

export interface IProps {
  filter: IFilter;
  toggleFilter: (name: string) => any;
}

const Filter = (props: IProps) => {
  const handleChange = () => {
    props.toggleFilter(props.filter.name);
  };
  return (
    <div className="filter">
      <p>{props.filter.label}</p>
      <input
        type="checkbox"
        defaultChecked={props.filter.value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;
