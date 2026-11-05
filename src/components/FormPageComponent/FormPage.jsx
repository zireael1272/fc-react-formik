import FormComponent from "../FormComponent/FormComponent";
import styles from "./FormPage.module.sass";

function FormPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p>squadhelp</p>
        <button className={styles.headerBtn}>муляж</button>
      </header>
      <h1 className={styles.titleForm}>login to your account</h1>
      <FormComponent />
    </div>
  );
}

export default FormPage;
