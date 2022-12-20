export interface IListItemProps {
  name: string;
  removeTaskList: (value: string) => void;
  updateFinishedTask: (operation: "add" | "remove") => void;
}
