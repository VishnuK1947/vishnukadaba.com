import React from "react";
import { FilterContainer, Button, FilterHeading } from "./ProjectsFilterStyles";
import { SiReact, SiJavascript } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { VscSourceControl } from "react-icons/vsc";
import { GiArchiveResearch } from "react-icons/gi";

const ProjectsFilter = ({ filter, filterBy }) => (
  <section>
    <FilterHeading>
      Filtered by: <b>{filterBy}</b>
    </FilterHeading>
    <FilterContainer>
      <Button
        type="button"
        className={filterBy === "All" ? "active" : null}
        aria-label="Filter by All"
        onClick={() => filter("All")}
      >
        All
      </Button>
      <Button
        type="button"
        className={filterBy === "Full-Stack Coding" ? "active" : null}
        aria-label="Filter by Full-Stack Coding"
        onClick={() => filter("Full-Stack Coding")}
      >
        <VscSourceControl />
      </Button>
      <Button
        type="button"
        className={filterBy === "Research" ? "active" : null}
        aria-label="Filter by Research"
        onClick={() => filter("Research")}
      >
        <GiArchiveResearch />
      </Button>
    </FilterContainer>
  </section>
);

export default ProjectsFilter;
