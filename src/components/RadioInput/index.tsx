import { useEffect, useState } from "react";
import { Check } from 'phosphor-react'
import styles from "./styles.module.css";

interface IRadioInputProps {
  getChekedValue: (value: boolean) => void;
}

export function RadioInput({
  getChekedValue
}: IRadioInputProps) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    getChekedValue(isChecked);
  }, [isChecked])

  return (
    <div className={styles.container}>
      {isChecked ?
        <div onClick={() => setIsChecked(false)} className={styles.inputChecked}>
          <Check size={20} />
        </div>
        :
        <div onClick={() => setIsChecked(true)} className={styles.inputEmpty} />
      }
    </div>
  );
};
