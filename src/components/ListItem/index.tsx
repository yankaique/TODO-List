import { useState } from "react";
import { Trash } from "phosphor-react";

import { IListItemProps } from "./interface";
import styles from "./styles.module.css";
import { RadioInput } from "../RadioInput";

export function ListItem({ name }: IListItemProps) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={styles.container}>
      <RadioInput getChekedValue={value => console.log(value)} />
      <p>{name}</p>
      <Trash size={15} />
    </div>
  );
}
