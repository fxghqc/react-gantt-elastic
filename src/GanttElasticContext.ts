import React from "react";
import {
  DynamicStyle,
  GanttElasticOptions,
  Task,
  TimeOption,
  TaskListOption
} from "./types";

export default React.createContext<{
  style: DynamicStyle;
  options: GanttElasticOptions;
  allTasks: Task[];
  visibleTasks: Task[];
  times: TimeOption;

  taskList: TaskListOption;
}>({});
