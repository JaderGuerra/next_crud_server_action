import Image from "next/image";
import { TaskForm } from "./new/task-form";

export default function Home() {
  return (
    <div className="items-center justify-center flex h-screen">
      <TaskForm/>
    </div>
  );
}
