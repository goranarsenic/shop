import React from "react";

import Filter from "./Filter";

import { IFilter } from "../../types/products";

import "./Filters.scss";

export interface IProps {
  filters: IFilter[];
  toggleFilter: (name: string) => any;
}

const Filters = (props: IProps) => {
  return (
    <div className="filters-container">
      {props.filters.map((filter: IFilter) => (
        <Filter
          key={filter.name}
          filter={filter}
          toggleFilter={props.toggleFilter}
        />
      ))}
    </div>
  );
};

export default Filters;
