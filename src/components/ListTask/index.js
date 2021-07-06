import React, { Component } from "react";
import TaskItem from "./../TaskItem/index";

class ListTask extends Component {
  render() {
    let { filterTask, status } = this.props;
    return (
      <div>
        {filterTask.map((item) => {
          return <TaskItem key={item} item={item} status={status} />;
        })}
      </div>
    );
  }
}

export default ListTask;
