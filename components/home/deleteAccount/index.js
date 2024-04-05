import React from "react";
import styles from "./deleteAccount.module.css";
import step_one from "../../../assets/step_one.png";
import step_two from "../../../assets/step_two.png";
import step_three from "../../../assets/step_three.png";
import step_four from "../../../assets/step_four.png";
import Image from "next/image";

const DeleteAccount = () => {
  return (
    <div className={styles.deleteAccountContainer}>
      <h1>Delete Your Account</h1>
      <p>
        If you decide to delete your account, your profile, including your
        schedule, will be permanently removed.
      </p>
      <p>Below are the steps to delete your account</p>
      <div className={styles.stepsContainer}>
        <div className={styles.stepItem}>
          <h2>Step 1</h2>
          <Image
            src={step_one}
            alt="Step 1"
            width={210}
            height={410}
            className={styles.image}
          />
          <p>Click on settings</p>
        </div>
        <div className={styles.stepItem}>
          <h2>Step 2</h2>
          <Image
            src={step_two}
            alt="Step 2"
            width={210}
            height={410}
            className={styles.image}
          />
          <p>Click on leave feedback</p>
        </div>
        <div className={styles.stepItem}>
          <h2>Step 3</h2>
          <Image
            src={step_three}
            alt="Step 3"
            width={210}
            height={410}
            className={styles.image}
          />
          <p>Click on delete account</p>
        </div>
        <div className={styles.stepItem}>
          <h2>Step 4</h2>
          <Image
            src={step_four}
            alt="Step 4"
            width={210}
            height={410}
            className={styles.image}
          />
          <p>Click on delete option</p>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
