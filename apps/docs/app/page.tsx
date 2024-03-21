import styles from "./page.module.css";
import { Button } from "@repo/ui/button";

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      Hello
      <Button appName="hello">Click me</Button>
    </main>
  );
}
