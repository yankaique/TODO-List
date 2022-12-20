import { ChangeEvent, useEffect, useState } from "react";
import { Trash } from "phosphor-react";

import { IListItemProps } from "./interface";
import { RadioInput } from "../RadioInput";
import styles from "./styles.module.css";

export function ListItem({ name, removeTaskList, updateFinishedTask}: IListItemProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChangeCheckValue = (value : boolean) => {
    if(value){
      updateFinishedTask("add");
    }else{
      updateFinishedTask("remove");
    }
    setIsChecked(value)
  }

  const handleDeleteItem= () => {
    updateFinishedTask("remove");
    removeTaskList(name)
  }



  return (
    <div className={styles.container}>
      <RadioInput getChekedValue={value => handleChangeCheckValue(value)} />
      <p style={{textDecoration: isChecked ? "line-through" : "none", color: isChecked ? "var(--gray-300)" : "var(--gray-100)" }}>{name}</p>
      <Trash size={15} onClick={() => handleDeleteItem()} />
    </div>
  );
}
